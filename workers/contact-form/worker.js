/**
 * Reso Contact Form Worker
 * Handles form submissions with file uploads to R2 and metadata to KV
 */

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(env);
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const formData = await request.formData();

      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      const file = formData.get('file');

      // Validate required fields
      if (!name || !email || !message) {
        return jsonResponse({ error: 'Missing required fields' }, 400, env);
      }

      // Generate unique ID for this submission
      const submissionId = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
      const timestamp = new Date().toISOString();

      // Handle file upload to R2
      let fileInfo = null;
      if (file && file.size > 0) {
        // Validate file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          return jsonResponse({ error: 'File too large (max 10MB)' }, 400, env);
        }

        const fileExtension = file.name.split('.').pop() || 'bin';
        const fileKey = `${submissionId}/${file.name}`;

        // Upload to R2
        await env.FEEDBACK_BUCKET.put(fileKey, file.stream(), {
          httpMetadata: {
            contentType: file.type,
          },
          customMetadata: {
            originalName: file.name,
            submissionId: submissionId,
          },
        });

        fileInfo = {
          key: fileKey,
          name: file.name,
          size: file.size,
          type: file.type,
        };
      }

      // Store submission metadata in KV
      const submission = {
        id: submissionId,
        name,
        email,
        message,
        file: fileInfo,
        timestamp,
        userAgent: request.headers.get('User-Agent'),
        ip: request.headers.get('CF-Connecting-IP'),
      };

      await env.FEEDBACK_KV.put(
        `submission:${submissionId}`,
        JSON.stringify(submission),
        {
          // Keep submissions for 90 days
          expirationTtl: 90 * 24 * 60 * 60,
        }
      );

      // Also maintain an index for listing submissions
      const indexKey = `index:${timestamp.slice(0, 10)}`;
      const existingIndex = await env.FEEDBACK_KV.get(indexKey, 'json') || [];
      existingIndex.push(submissionId);
      await env.FEEDBACK_KV.put(indexKey, JSON.stringify(existingIndex), {
        expirationTtl: 90 * 24 * 60 * 60,
      });

      return jsonResponse({
        success: true,
        id: submissionId,
        message: 'Feedback submitted successfully'
      }, 200, env);

    } catch (error) {
      console.error('Error processing submission:', error);
      return jsonResponse({ error: 'Internal server error' }, 500, env);
    }
  },
};

function handleCORS(env) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

function jsonResponse(data, status, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
    },
  });
}
