# CI/CD System


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Docker, Git, shell scripting |
| Built by | GitHub Actions, Jenkins, GitLab CI, CircleCI |

**Skills you'll earn:** Pipeline DSL, container-based builds, parallel test execution, artifact management, deployment gates

Start by running a shell script on git push. End with a pipeline system that builds in containers, runs tests in parallel, manages artifacts, and gates deployments.

## Step 1: Run a script on git push (~2-3 hours)

The core of CI: something happens automatically when code changes.

- Set up a [Git post-receive hook](https://git-scm.com/docs/githooks#post-receive) on a bare repo
- The hook runs a shell script: pull the latest code, run `npm test` (or equivalent)
- Print pass/fail to a log file
- Trigger this by pushing to the repo

**You now have:** Automated test execution on push.

## Step 2: Build a CI server with an API (~3-4 hours)

Shell scripts in git hooks don't scale.

- Build a server that accepts webhook payloads from [GitHub](https://docs.github.com/en/webhooks) or Gitea
- On receiving a push event, clone the repo and run the pipeline
- Store build results: status, logs, duration, commit hash
- API: `GET /builds` to list recent builds, `GET /builds/:id` for details

**You now have:** A CI server.

## Step 3: Run builds in containers (~4-5 hours)

Building on the host is dangerous. A malicious `package.json` script owns your server.

- Run each build inside a [Docker](https://docs.docker.com/engine/reference/run/) container
- Mount the repo into the container, run the build command, capture stdout/stderr
- Destroy the container after the build completes
- Use different base images per language (node, python, golang)

**You now have:** Isolated, reproducible builds.

## Step 4: Pipeline definitions (~3-4 hours)

Real projects need more than "run tests." They need build → test → lint → deploy as a sequence.

- Define pipelines in a YAML file (`.ci.yml`) in the repo root
- Parse the YAML into stages, each with a name, image, and commands
- Execute stages sequentially, stop on first failure
- Report per-stage status and timing

**You now have:** Multi-stage pipelines.

## Step 5: Parallel execution (~4-5 hours)

Linting doesn't depend on tests. Run them at the same time.

- Support parallel steps within a stage
- Spawn multiple containers simultaneously
- Aggregate results: the stage passes only if all parallel steps pass
- Show a pipeline graph with parallel lanes

**You now have:** Parallel CI pipelines.

## Step 6: Artifacts and caching (~3-4 hours)

- Save build outputs (binaries, Docker images, test reports) as artifacts
- Artifact storage with retention policies (keep last 10 builds)
- Cache dependencies between builds (node_modules, pip cache) to speed up subsequent runs
- Mount cache volumes into build containers

## Step 7: Deploy gates and environments (~3-4 hours)

- Add a deploy stage that pushes to staging or production
- Manual approval gates: pipeline pauses until someone approves
- Environment locks: only one deploy to production at a time
- Rollback: re-run a previous successful deploy pipeline

## Useful Resources

- [Git Hooks Documentation](https://git-scm.com/docs/githooks)
- [GitHub Webhooks](https://docs.github.com/en/webhooks)
- [Docker Engine API](https://docs.docker.com/engine/api/v1.43/)
- [YAML Specification](https://yaml.org/spec/1.2.2/)
- [Concourse CI Architecture (reference)](https://concourse-ci.org/concepts.html)

## Where to go from here

- Matrix builds (test across multiple language versions and OS)
- Secret injection into build containers (from your config/secrets system)
- Build status badges for README files
- Scheduled pipelines (nightly builds)
- Pipeline-as-code with reusable templates
