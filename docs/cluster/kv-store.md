# Fault-Tolerant Key-Value Store


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Go, networking, consensus algorithm basics |
| Built by | Redis, etcd, DynamoDB, FoundationDB |

**Skills you'll earn:** Raft consensus, consistent hashing, replication, partitioning, write-ahead logging, gossip protocols

Start by storing keys in a hash map behind an API. End with a replicated, partitioned key-value store that survives node failures.

## Step 1: In-memory key-value store with an API (~2-3 hours)

The simplest possible database.

- Build an HTTP API: `PUT /key/:key` (set), `GET /key/:key` (get), `DELETE /key/:key` (delete)
- Store everything in a hash map in memory
- Return JSON responses with status codes (200, 404, 201)
- Use [Express](https://expressjs.com/) or [Fastify](https://fastify.dev/docs/latest/)

**You now have:** A single-node KV store.

## Step 2: Persistence (~3-4 hours)

The store loses everything on restart.

- Write every mutation to an append-only log file (write-ahead log)
- On startup, replay the log to rebuild the hash map
- Periodically compact the log: snapshot the current state, truncate old entries
- Benchmark: measure write throughput with and without persistence

**You now have:** Durable storage.

## Step 3: Replication (~4-5 hours)

One node is a single point of failure.

- Run three instances of your KV store
- Designate one as leader, others as followers
- Leader forwards every write to followers before acknowledging the client
- Followers can serve reads (eventual consistency) or redirect to the leader (strong consistency)

**You now have:** Replicated data.

## Step 4: Leader election with Raft (~5-6 hours)

The leader crashes. Who takes over?

- Implement the [Raft consensus algorithm](https://raft.github.io/): leader election and log replication
- Each node has a state: follower, candidate, or leader
- On leader timeout, a follower starts an election — majority wins
- All writes go through the Raft log for consensus before applying to the state machine

**You now have:** Automatic failover.

## Step 5: Partitioning (sharding) (~4-5 hours)

One machine can't hold all the data.

- Hash each key to determine its partition (consistent hashing)
- Each partition is managed by its own Raft group
- A routing layer directs requests to the correct partition
- Adding a node triggers partition rebalancing

**You now have:** Horizontal scalability.

## Step 6: Client library (~4-5 hours)

- Build a client SDK that abstracts the routing and failover
- Client discovers partition topology from any node
- Automatic retry on leader redirect or node failure
- Connection pooling

## Step 7: Transactions and TTL (~4-5 hours)

- Support TTL on keys (auto-expire after N seconds)
- Compare-and-swap (CAS) for atomic updates
- Simple multi-key transactions within a single partition

## Useful Resources

- [Raft Consensus Algorithm](https://raft.github.io/)
- [Raft Paper (extended)](https://raft.github.io/raft.pdf)
- [Consistent Hashing — Wikipedia](https://en.wikipedia.org/wiki/Consistent_hashing)
- [Designing Data-Intensive Applications (book)](https://dataintensive.net/)
- [etcd Architecture (reference)](https://etcd.io/docs/v3.5/learning/architecture/)

## Where to go from here

- Range queries (sorted keys, scan operations)
- Watch/subscribe on key changes (event-driven)
- Gossip protocol for membership instead of static config
- Compression (snappy or zstd for values)
- Admin dashboard showing partition map, leader status, replication lag
