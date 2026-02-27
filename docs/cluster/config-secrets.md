# Distributed Config & Secrets System


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~30-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, encryption basics, API design |
| Built by | HashiCorp Vault, AWS Secrets Manager, Consul, dotenv |

**Skills you'll earn:** Encryption at rest, access control (RBAC), config versioning, live reload, audit logging

Start by serving config values from a file over an API. End with a versioned, encrypted configuration and secrets system with access control and live reload.

## Step 1: Serve config from a file (~2-3 hours)

Applications need configuration. Hardcoding values is not an option.

- Load a JSON or YAML config file at startup
- Serve values via an HTTP API: `GET /config/:key`
- Support nested keys with dot notation: `database.host`
- Return 404 for missing keys

**You now have:** A config server.

## Step 2: Config versioning (~3-4 hours)

Someone changed a value and broke production. You need to know what changed and roll back.

- Store every config change as a version (incrementing integer or timestamp)
- API: `GET /config/:key?version=N` to fetch historical values
- `GET /config/history/:key` to list all versions with who changed it and when
- Rollback: `POST /config/rollback/:key?version=N`

**You now have:** Version-controlled configuration.

## Step 3: Encrypt secrets (~3-4 hours)

Database passwords stored in plaintext config files end up in git history and breach reports.

- Mark certain keys as secrets at creation time
- Encrypt secret values at rest using [AES-256-GCM](https://nodejs.org/api/crypto.html#cryptography)
- Decrypt only when serving to an authenticated client
- Never return secrets in list or history endpoints — only to authorized `GET` requests

**You now have:** Encrypted secrets management.

## Step 4: Access control (~3-4 hours)

Not every service should read every secret.

- Define policies: which service can access which config paths
- Authenticate clients with tokens (issued per-service)
- Enforce policies on every read: service `auth-svc` can read `auth.*` but not `billing.*`
- Log every access for audit

**You now have:** Policy-based access control.

## Step 5: Live reload (~3-4 hours)

Restarting an app to pick up config changes is slow and disruptive.

- Add a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) endpoint for clients to subscribe to config changes
- When a value changes, notify subscribed clients in real time
- Client SDK: watch a key, call a callback on change
- Long-poll fallback for environments where WebSocket is not available

**You now have:** Live config updates.

## Step 6: Environments and namespaces (~3-4 hours)

- Separate config by environment: `dev`, `staging`, `prod`
- Inheritance: `prod` inherits from `default`, overrides specific keys
- Namespace per team or service group

## Step 7: Replication and high availability (~3-4 hours)

- Replicate the config store across multiple nodes
- Consistent reads via Raft or primary-replica with leader forwarding
- Clients retry against another node if one is down

## Useful Resources

- [Node.js Crypto — AES-GCM](https://nodejs.org/api/crypto.html)
- [HashiCorp Vault Architecture (reference)](https://developer.hashicorp.com/vault/docs/internals/architecture)
- [etcd Key-Value Store](https://etcd.io/docs/v3.5/)
- [WebSocket API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Where to go from here

- Secret rotation (auto-generate new database passwords on a schedule)
- Integration with Kubernetes (sync to ConfigMaps and Secrets)
- CLI tool for managing config from the terminal
- Diff view between environments (what's different in prod vs. staging?)
- Approval workflows (changes to prod require a second person to approve)
