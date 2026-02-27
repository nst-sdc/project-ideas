# System Debugging & Recovery Simulator


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~30-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Docker, Linux administration, debugging skills |
| Built by | SadServers, KodeKloud, Instruqt, KataCoda |

**Skills you'll earn:** Scenario generation, Docker environment provisioning, scoring systems, log analysis, systematic debugging methodology

Start by presenting a broken system and asking the user to find the problem. End with a platform that generates debugging scenarios, scores diagnosis speed, and teaches systematic troubleshooting.

## Step 1: Break a system on purpose (~2-3 hours)

You learn debugging by debugging. You need something broken.

- Spin up a simple web app stack with [Docker Compose](https://docs.docker.com/compose/): frontend, backend, database
- Introduce a single fault: wrong database password in the backend config
- Present the user with the running (broken) system and symptoms: "the app shows a 500 error"
- The user must find and fix the fault

**You now have:** A debugging challenge.

## Step 2: Multiple fault types (~3-4 hours)

One kind of bug is not enough training.

- Build a library of faults:
  - Config errors (wrong ports, bad credentials, missing env vars)
  - Resource exhaustion (out of memory, disk full, connection pool exhausted)
  - Network issues (firewall blocking a port, DNS misconfigured)
  - Application bugs (infinite loop, unhandled exception, deadlock)
- Randomly inject one or more faults into the stack

**You now have:** A fault library.

## Step 3: Guided diagnosis tools (~3-4 hours)

Dumping someone into a broken system with no tools is frustrating.

- Provide a web terminal (use [xterm.js](https://xtermjs.org/)) connected to the environment
- Pre-install common tools: `curl`, `dig`, `netstat`, `top`, `docker logs`, `psql`/`mongo`
- Show a hint system: after N minutes, offer a hint pointing toward the right area
- Track which commands the user runs

**You now have:** An interactive debugging environment.

## Step 4: Scoring and feedback (~3-4 hours)

Fixing the problem is good. Fixing it fast and systematically is better.

- Start a timer when the scenario begins
- Score based on: time to resolution, number of commands used, whether hints were needed
- After resolution, show an ideal debugging path: "here's how an expert would find this in 3 steps"
- Track scores across scenarios to show improvement

**You now have:** Gamified debugging practice.

## Step 5: Multi-service scenarios (~3-4 hours)

Real systems have more than three containers.

- Build complex stacks: load balancer → multiple app servers → cache → database → queue → workers
- Inject faults that cascade: a slow database causes queue backup, which causes worker OOM
- The user must trace the root cause through the dependency chain
- Provide a service map showing the architecture

**You now have:** Distributed system debugging.

## Step 6: Scenario editor (~3-4 hours)

- Let instructors create custom scenarios: define the stack, pick the faults, write hints
- Scenario definition in YAML: services, fault injection points, expected resolution
- Share scenarios via URL or export as a file

## Step 7: Multiplayer and classroom mode (~3-4 hours)

- Race mode: multiple users debug the same scenario, fastest wins
- Instructor dashboard: see all students' progress, where they're stuck
- Post-scenario discussion: compare approaches

## Useful Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [xterm.js — Terminal for the Browser](https://xtermjs.org/)
- [Linux Performance Tools — Brendan Gregg](https://www.brendangregg.com/linuxperf.html)
- [SadServers — Practice Debugging (inspiration)](https://sadservers.com/)
- [Google SRE Book — Debugging](https://sre.google/sre-book/effective-troubleshooting/)

## Where to go from here

- Auto-generated scenarios (randomly compose stacks and faults)
- Kubernetes scenarios (broken deployments, crashlooping pods, network policies)
- Time-bomb faults (system works for 5 minutes, then breaks)
- Integration with your observability stack (debug using Grafana dashboards and logs)
- Certification mode (pass N scenarios to earn a badge)
