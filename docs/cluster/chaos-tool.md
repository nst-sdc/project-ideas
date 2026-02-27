# Network Chaos & Failure Simulation Tool


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~30-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Docker, Linux networking, distributed systems |
| Built by | Chaos Monkey (Netflix), Gremlin, Litmus, Pumba |

**Skills you'll earn:** Failure injection, network simulation (tc/iptables), container orchestration, resilience metrics, experiment design

Start by killing a container on command. End with a chaos engineering platform that injects failures, simulates network conditions, and measures system resilience.

## Step 1: Kill a container on command (~2-3 hours)

The simplest chaos: make something die.

- Build a CLI tool that takes a container name and kills it via the [Docker API](https://docs.docker.com/engine/api/)
- Verify the container is gone: `docker ps` should not list it
- Observe what happens to the system that depended on it
- Log the kill: timestamp, target, method

**You now have:** Manual failure injection.

## Step 2: Random pod/container killing (~3-4 hours)

Killing a known target is predictable. Real failures are not.

- List all running containers, pick one at random, kill it
- Run this on a schedule (every N minutes) or as a one-shot
- Add filters: only target containers with a specific label (opt-in chaos)
- Avoid killing infrastructure containers (the chaos tool itself, the database)

**You now have:** Random failure injection.

## Step 3: Network latency injection (~3-4 hours)

Not all failures are crashes. Slow networks are worse — they cause timeouts and cascading retries.

- Use [tc (traffic control)](https://man7.org/linux/man-pages/man8/tc.8.html) to add latency to a container's network interface
- Configure: target container, latency (ms), jitter, duration
- Also support packet loss: drop N% of packets
- Remove the rules after the experiment ends

**You now have:** Network degradation simulation.

## Step 4: Network partitions (~3-4 hours)

Two services can't reach each other. Does the system handle it?

- Use [iptables](https://linux.die.net/man/8/iptables) to block traffic between specific containers
- Simulate a split-brain: partition the cluster into two groups that can't communicate
- Hold the partition for a configurable duration, then heal it
- Log the partition: which services were isolated, for how long

**You now have:** Network partition simulation.

## Step 5: Experiment definitions and scheduling (~3-4 hours)

Ad-hoc chaos is useful for exploration. Repeated experiments need structure.

- Define experiments in YAML: target, failure type, parameters, duration, steady-state hypothesis
- Steady-state hypothesis: "the API returns 200 within 500ms" — checked before and after
- If the hypothesis holds after chaos, the system is resilient. If not, you found a bug.
- Schedule experiments: daily, weekly, or on-demand

**You now have:** Structured chaos experiments.

## Step 6: Dashboard and reporting (~3-4 hours)

- Web UI showing experiment history, results (pass/fail), and affected services
- Real-time view during an experiment: what's broken, system metrics
- Link to [Grafana](https://grafana.com/docs/grafana/latest/) dashboards for correlated metrics

## Step 7: Blast radius control (~3-4 hours)

- Abort experiments automatically if error rates exceed a safety threshold
- Scope experiments to non-production environments first
- Gradual rollout: start with 1% traffic affected, increase

## Useful Resources

- [Principles of Chaos Engineering](https://principlesofchaos.org/)
- [tc — Linux Traffic Control](https://man7.org/linux/man-pages/man8/tc.8.html)
- [Docker Engine API](https://docs.docker.com/engine/api/v1.43/)
- [Chaos Monkey — Netflix (reference)](https://netflix.github.io/chaosmonkey/)
- [Litmus Chaos (reference)](https://litmuschaos.io/docs/)

## Where to go from here

- CPU and memory stress injection (exhaust resources without killing)
- Disk I/O chaos (slow reads/writes, fill disk)
- DNS failure simulation (return NXDOMAIN for specific services)
- GameDay facilitation (guided chaos exercises for teams)
- Integration with your CI/CD pipeline (run chaos tests before deploy)
