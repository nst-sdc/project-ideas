# Cluster-Wide Scheduler


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Go, Docker, distributed systems concepts |
| Built by | Kubernetes scheduler, Nomad, Mesos, YARN |

**Skills you'll earn:** Bin-packing algorithms, constraint solving, health checks, affinity/anti-affinity rules, cluster state management

Start by assigning a task to a node from a list. End with a scheduler that places workloads across a cluster respecting constraints, affinity rules, and health checks.

## Step 1: Assign a task to a node (~2-3 hours)

The simplest scheduler: pick a node, run the thing.

- Maintain a list of nodes (hardcoded for now) with their capacity (CPU, memory)
- Accept a task request: `{ image, cpu, memory }`
- Pick the first node with enough free resources
- Call the [Docker API](https://docs.docker.com/engine/api/) on that node to start the container
- Update the node's available resources

**You now have:** Static task placement.

## Step 2: Node registration and heartbeats (~4-5 hours)

Hardcoded node lists break when nodes join or leave.

- Nodes register themselves with the scheduler on startup (HTTP POST with their capacity)
- Nodes send heartbeats every 10 seconds
- If a heartbeat is missed for 30 seconds, mark the node as unhealthy
- Remove nodes that have been unhealthy for 5 minutes

**You now have:** Dynamic node discovery.

## Step 3: Scheduling strategies (~4-5 hours)

First-fit is naive. Different workloads need different placement.

- Bin-packing: fill nodes as tightly as possible (minimize active nodes)
- Spread: distribute tasks evenly across nodes (maximize resilience)
- Let the user pick a strategy per task or set a cluster default
- Score each node and pick the best one, not just the first fit

**You now have:** Intelligent placement.

## Step 4: Constraints and affinity (~4-5 hours)

Some tasks must run on specific nodes or avoid others.

- Node labels: `gpu=true`, `zone=us-east`, `disk=ssd`
- Task constraints: `requires: gpu=true` (hard constraint — must match)
- Affinity: `prefers: zone=us-east` (soft constraint — prefer but don't require)
- Anti-affinity: `avoidColocating: service=database` (don't place two databases on the same node)

**You now have:** Constraint-based scheduling.

## Step 5: Health checks and rescheduling (~4-5 hours)

A container is running but the app inside crashed.

- Define health checks per task: HTTP endpoint, TCP port, or command
- Scheduler polls health checks every N seconds
- If a task fails its health check, restart it on the same node
- If the node itself dies, reschedule all its tasks to healthy nodes

**You now have:** Self-healing workloads.

## Step 6: Resource reclamation and preemption (~4-5 hours)

- Reclaim resources from completed or failed tasks immediately
- Priority levels: critical tasks can preempt low-priority ones when the cluster is full
- Preempted tasks are re-queued and rescheduled when resources free up

## Step 7: API and dashboard (~4-5 hours)

- REST API: submit tasks, list running tasks, get node status, drain a node
- Dashboard: cluster overview, per-node utilization, task placement map
- Drain mode: mark a node for maintenance, migrate its tasks elsewhere

## Useful Resources

- [Docker Engine API](https://docs.docker.com/engine/api/v1.43/)
- [Kubernetes Scheduler Concepts](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/)
- [Borg Paper — Google](https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/)
- [Nomad Scheduling — HashiCorp](https://developer.hashicorp.com/nomad/docs/concepts/scheduling)

## Where to go from here

- Multi-region scheduling (cross-datacenter placement)
- Resource over-commit with burst limits
- Job scheduling (one-off tasks vs. long-running services)
- Gang scheduling (all-or-nothing placement for multi-container tasks)
- Integration with a service mesh for traffic management
