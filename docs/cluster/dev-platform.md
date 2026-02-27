# Internal Developer Platform


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, React or similar, API design, DevOps concepts |
| Built by | Backstage (Spotify), Port, Cortex, OpsLevel |

**Skills you'll earn:** Service catalog design, template scaffolding, plugin architecture, API aggregation, developer portal UX

Start by listing services from a catalog file. End with a Backstage-like portal where teams discover services, provision infrastructure, and use templates to bootstrap new projects.

## Step 1: Build a service catalog (~2-3 hours)

Developers can't use what they can't find.

- Define services in YAML files: name, owner, description, repo URL, docs URL, API endpoint
- Build an API that reads and serves the catalog: `GET /services`, `GET /services/:name`
- Use [Express](https://expressjs.com/) or [Fastify](https://fastify.dev/docs/latest/)

**You now have:** A service directory.

## Step 2: Web dashboard (~3-4 hours)

A JSON API is for machines. Developers want a UI.

- Build a web UI listing all services with search and filter
- Service detail page: description, owner, links to repo/docs/API, health status
- Group services by team or domain
- Use [React](https://react.dev/learn) or [Vue](https://vuejs.org/guide/introduction.html)

**You now have:** A developer portal.

## Step 3: Health and dependency visualization (~4-5 hours)

You know what services exist. You don't know how they connect or if they're healthy.

- Each service declares its dependencies in the catalog YAML
- Render a dependency graph on the dashboard (use [D3.js](https://d3js.org/) or React Flow)
- Poll health endpoints and show status badges (green/yellow/red)
- Click a service to see its upstream and downstream dependencies

**You now have:** Service health and topology view.

## Step 4: Project scaffolding templates (~4-5 hours)

Starting a new service from scratch is slow and inconsistent.

- Define templates: "Node.js API", "React Frontend", "Python Worker"
- Each template is a directory of files with placeholder variables (`{{serviceName}}`, `{{owner}}`)
- API endpoint: `POST /scaffold` with template name and variables
- Generate the project, push to a new git repo, register in the catalog

**You now have:** One-click project bootstrapping.

## Step 5: Infrastructure provisioning (~3-4 hours)

A new service needs a database, a queue, a DNS entry.

- Define resource types: PostgreSQL database, Redis cache, S3 bucket
- Provisioning API: `POST /provision` with resource type and config
- Backend calls [Terraform](https://developer.hashicorp.com/terraform/docs) or Docker Compose to create the resource
- Return connection details and inject them into the service's config

**You now have:** Self-service infrastructure.

## Step 6: Documentation hub (~4-5 hours)

- Aggregate and render docs from each service's repo (README, OpenAPI specs)
- Auto-generate API documentation from [OpenAPI](https://swagger.io/specification/) specs
- Search across all service documentation

## Step 7: RBAC and audit (~3-4 hours)

- Team-based access control: only service owners can modify their catalog entry
- Audit log of all provisioning and scaffolding actions
- Integration with SSO (OAuth2/OIDC)

## Useful Resources

- [Backstage.io Documentation (reference)](https://backstage.io/docs/overview/what-is-backstage)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [OpenAPI Specification](https://swagger.io/specification/)
- [React Documentation](https://react.dev/learn)
- [D3.js Documentation](https://d3js.org/)

## Where to go from here

- Cost tracking per service (aggregate cloud bills by service owner)
- Incident management integration (PagerDuty, Opsgenie links per service)
- Scorecards (rate services on documentation quality, test coverage, security posture)
- Plugin system (let teams add custom tabs to service pages)
- ChatOps integration (provision resources from Slack)
