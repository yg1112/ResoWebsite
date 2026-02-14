# Reso Contact Form Worker

Cloudflare Worker for handling contact form submissions with R2 file storage.

## Setup Instructions

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

### 3. Create R2 Bucket

```bash
wrangler r2 bucket create reso-feedback
```

### 4. Create KV Namespace

```bash
wrangler kv:namespace create FEEDBACK_KV
```

Copy the output ID and update `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "FEEDBACK_KV"
id = "YOUR_KV_NAMESPACE_ID"  # <-- Replace this
```

### 5. Update Configuration

Edit `wrangler.toml`:

- Set `ALLOWED_ORIGIN` to your website domain (e.g., `https://reso.dzgapp.com`)
- Set `NOTIFY_EMAIL` to your email (optional)

### 6. Deploy

```bash
cd workers/contact-form
wrangler deploy
```

After deployment, you'll get a URL like:
```
https://reso-contact.YOUR_SUBDOMAIN.workers.dev
```

### 7. Update Frontend

Update the `WORKER_URL` in `src/pages/ContactPage.jsx`:

```javascript
const WORKER_URL = 'https://reso-contact.YOUR_SUBDOMAIN.workers.dev';
```

## Viewing Submissions

### Option A: Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **KV**
3. Select your `FEEDBACK_KV` namespace
4. Browse submissions (keys starting with `submission:`)

### Option B: Wrangler CLI

```bash
# List all submissions
wrangler kv:key list --namespace-id=YOUR_KV_NAMESPACE_ID

# Get specific submission
wrangler kv:key get "submission:SUBMISSION_ID" --namespace-id=YOUR_KV_NAMESPACE_ID
```

### Option C: Admin API (Optional)

Deploy `admin.js` as a separate worker for a REST API to manage submissions:

```bash
# Add to wrangler.toml
[vars]
ADMIN_KEY = "your-secret-admin-key"

# Then call the API
curl -H "X-Admin-Key: your-secret-admin-key" https://your-admin-worker.workers.dev/submissions
```

## Downloading Files

Files are stored in R2. Access them via:

1. **Cloudflare Dashboard**: Workers & Pages → R2 → reso-feedback bucket
2. **Wrangler CLI**:
   ```bash
   wrangler r2 object get reso-feedback/SUBMISSION_ID/filename.png
   ```

## Data Retention

Submissions are automatically deleted after **90 days** (configurable in `worker.js`).

## Cost Estimate

- **Workers**: Free tier includes 100,000 requests/day
- **KV**: Free tier includes 100,000 reads/day, 1,000 writes/day
- **R2**: Free tier includes 10GB storage, 10M reads/month

For a contact form, you'll likely stay well within free tiers.
