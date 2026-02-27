# Self-Service App Hosting Portal


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Docker, Git, CI/CD concepts |
| Built by | Vercel, Netlify, Railway, Render |

**Skills you'll earn:** Git webhook integration, container builds, preview deployments, rollback systems, environment management

Start by deploying a static site from a git push. End with a Vercel-like platform with preview deployments, rollbacks, environment variables, and audit logging.

## Step 1: Deploy a static site from a git repository (~3-4 hours)

The simplest deployment: clone and serve.

- Accept a git repo URL via an API call
- Clone the repo, copy the files to an [Nginx](https://nginx.org/en/docs/) serving directory
- Assign a subdomain: `<app>.hosting.local`
- Configure Nginx to serve the directory at that subdomain

**You now have:** Git-to-deploy for static sites.

## Step 2: Build step (~4-5 hours)

Most apps need a build before they can be served.

- Detect the project type (look for `package.json`, `requirements.txt`, etc.)
- Run the build inside a [Docker](https://docs.docker.com/build/) container for isolation
- Capture build logs and stream them back to the user
- Serve the build output, not the raw source

**You now have:** Build-and-deploy pipeline.

## Step 3: Git webhook integration (~4-5 hours)

Manually triggering deploys is tedious.

- Set up a webhook endpoint that [GitHub](https://docs.github.com/en/webhooks) or Gitea can call on push
- On push to `main`, trigger a new deployment automatically
- On push to any other branch, create a preview deployment at `<branch>-<app>.hosting.local`
- Show deployment status as a commit status check

**You now have:** Automatic deploys on push.

## Step 4: Deployment history and rollbacks (~4-5 hours)

The latest deploy broke production.

- Store every deployment: commit hash, timestamp, build logs, status, artifact path
- Keep previous build artifacts (at least the last 5)
- Add a "rollback" action that re-points the serving directory to a previous artifact
- Show deployment history in the dashboard

**You now have:** Instant rollbacks.

## Step 5: Environment variables and secrets (~3-4 hours)

Apps need config that shouldn't live in git.

- Store env vars per app, encrypted at rest
- Inject them into the build container and the runtime environment
- UI for managing env vars (add, edit, delete, mark as secret)
- Secrets are write-only in the UI (shown as `••••••` after creation)

**You now have:** Secure configuration management.

## Step 6: Custom domains and TLS (~4-5 hours)

- Let users add custom domains, configure DNS CNAME instructions
- Auto-provision TLS certificates with [Let's Encrypt](https://letsencrypt.org/docs/) via ACME
- Nginx config auto-generated per domain

## Step 7: Audit logging and team access (~3-4 hours)

- Log every action: who deployed, who rolled back, who changed env vars
- Team support: invite collaborators with role-based access (admin, deployer, viewer)
- API key auth for CI/CD integration

## Useful Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Build Documentation](https://docs.docker.com/build/)
- [GitHub Webhooks](https://docs.github.com/en/webhooks)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Traefik — Automatic HTTPS](https://doc.traefik.io/traefik/https/acme/)

## Where to go from here

- Serverless function support (API routes alongside static sites)
- Edge caching and CDN layer
- Usage analytics per app (requests, bandwidth, errors)
- Monorepo support (detect and deploy sub-projects)
- Scheduled deployments (deploy at a specific time)
