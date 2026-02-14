/**
 * Admin Worker for viewing/exporting feedback submissions
 * Deploy this separately or add routes to the main worker
 *
 * Endpoints:
 * GET /submissions - List all submissions
 * GET /submissions/:id - Get specific submission
 * GET /submissions/:id/file - Download attached file
 * GET /export - Export all submissions as JSON
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Simple auth check (use a secret header or implement proper auth)
    const authHeader = request.headers.get('X-Admin-Key');
    if (authHeader !== env.ADMIN_KEY) {
      return new Response('Unauthorized', { status: 401 });
    }

    // List all submissions
    if (path === '/submissions' && request.method === 'GET') {
      const submissions = [];
      const list = await env.FEEDBACK_KV.list({ prefix: 'submission:' });

      for (const key of list.keys) {
        const data = await env.FEEDBACK_KV.get(key.name, 'json');
        if (data) {
          submissions.push(data);
        }
      }

      // Sort by timestamp descending
      submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      return new Response(JSON.stringify(submissions, null, 2), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get specific submission
    const submissionMatch = path.match(/^\/submissions\/([^/]+)$/);
    if (submissionMatch && request.method === 'GET') {
      const id = submissionMatch[1];
      const data = await env.FEEDBACK_KV.get(`submission:${id}`, 'json');

      if (!data) {
        return new Response('Not found', { status: 404 });
      }

      return new Response(JSON.stringify(data, null, 2), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Download file from submission
    const fileMatch = path.match(/^\/submissions\/([^/]+)\/file$/);
    if (fileMatch && request.method === 'GET') {
      const id = fileMatch[1];
      const submission = await env.FEEDBACK_KV.get(`submission:${id}`, 'json');

      if (!submission || !submission.file) {
        return new Response('Not found', { status: 404 });
      }

      const object = await env.FEEDBACK_BUCKET.get(submission.file.key);
      if (!object) {
        return new Response('File not found', { status: 404 });
      }

      const headers = new Headers();
      headers.set('Content-Type', submission.file.type || 'application/octet-stream');
      headers.set('Content-Disposition', `attachment; filename="${submission.file.name}"`);

      return new Response(object.body, { headers });
    }

    // Export all as JSON
    if (path === '/export' && request.method === 'GET') {
      const submissions = [];
      const list = await env.FEEDBACK_KV.list({ prefix: 'submission:' });

      for (const key of list.keys) {
        const data = await env.FEEDBACK_KV.get(key.name, 'json');
        if (data) {
          submissions.push(data);
        }
      }

      submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      return new Response(JSON.stringify(submissions, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="reso-feedback-${new Date().toISOString().slice(0,10)}.json"`,
        },
      });
    }

    return new Response('Not found', { status: 404 });
  },
};
