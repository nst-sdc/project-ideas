# Mini Cloud Platform


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~45-55 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Docker, Linux, networking basics |
| Built by | AWS, GCP, DigitalOcean, Fly.io |

**Skills you'll earn:** Container orchestration, multi-tenancy, resource quotas, overlay networking, REST API design

Start by running a container for a user. End with a multi-tenant cloud platform with isolation, resource quotas, networking, and a self-service API.

## Step 1: Run a container on demand (~3-4 hours)

A cloud platform is, at its core, "run someone's code in isolation."

- Use the [Docker Engine API](https://docs.docker.com/engine/api/) to start a container from an image name
- Expose it via a random port
- Return the container ID and access URL
- Stop and remove the container on request

**You now have:** On-demand container execution.

## Step 2: Multi-tenancy and isolation (~4-5 hours)

One user's container should not see another user's.

- Assign each user a unique namespace (prefix container names, network, volumes)
- Create a [Docker network](https://docs.docker.com/network/) per tenant — containers can only talk within their network
- Set resource limits: `--memory`, `--cpus` per container
- Drop capabilities and use read-only root filesystems where possible

**You now have:** Tenant isolation.

## Step 3: Resource quotas (~4-5 hours)

A single user should not be able to consume the entire cluster.

- Define quota per tenant: max containers, max CPU, max memory, max storage
- Track usage in a database
- Reject requests that would exceed quotas
- Show current usage vs. limits in an API response

**You now have:** Quota enforcement.

## Step 4: Build the control plane API (~4-5 hours)

- REST API for tenants: create/list/stop/delete containers, view logs, get status
- Auth via API keys (one per tenant)
- API validates quotas, enforces naming, logs all actions
- Use [Express](https://expressjs.com/) or [Fastify](https://fastify.dev/docs/latest/) with middleware for auth and rate limiting

**You now have:** A self-service cloud API.

## Step 5: Networking and service discovery (~4-5 hours)

- Each tenant gets an internal DNS namespace (`<service>.<tenant>.internal`)
- Run a lightweight DNS server ([CoreDNS](https://coredns.io/manual/toc/)) that resolves container names
- Add an ingress proxy ([Traefik](https://doc.traefik.io/traefik/) or Nginx) that routes `<app>.<tenant>.cloud.local` to the right container
- Tenants don't need to know port numbers

**You now have:** Automatic DNS and routing.

## Step 6: Persistent storage (~4-5 hours)

- Create volumes per tenant, mount into containers
- Enforce storage quotas (track volume sizes)
- Backup and snapshot volumes on a schedule

## Step 7: Dashboard (~5-6 hours)

- Web UI showing tenant's containers, resource usage, logs, and events
- Admin view: all tenants, cluster-wide resource utilization, audit log
- Real-time container status updates via [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Useful Resources

- [Docker Engine API Reference](https://docs.docker.com/engine/api/v1.43/)
- [Docker Networking Overview](https://docs.docker.com/network/)
- [CoreDNS Documentation](https://coredns.io/manual/toc/)
- [Traefik Documentation](https://doc.traefik.io/traefik/)
- [Linux Namespaces — man7.org](https://man7.org/linux/man-pages/man7/namespaces.7.html)

## Where to go from here

- Serverless functions (run code without managing containers)
- Billing engine (track resource-hours, generate invoices)
- Multi-node scheduling (spread containers across machines)
- Terraform-style infrastructure-as-code definitions
- Marketplace for pre-built images and templates
