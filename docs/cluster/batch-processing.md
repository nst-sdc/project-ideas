# Batch Processing Engine


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Python, distributed systems basics |
| Built by | Hadoop MapReduce, Apache Spark, AWS EMR, Dask |

**Skills you'll earn:** MapReduce paradigm, data partitioning, worker coordination, fault recovery, distributed aggregation

Start by mapping a function over a list of files. End with a MapReduce-like engine that splits input, distributes work across nodes, reduces results, and handles worker failures.

## Step 1: Map a function over local files (~2-3 hours)

The concept of MapReduce starts with applying a function to every input.

- Read a large text file, split it into lines
- Apply a map function to each line (e.g., count words → emit `{ word: 1 }`)
- Collect all emitted key-value pairs
- This is the "map" phase, running locally

**You now have:** A local mapper.

## Step 2: Shuffle and reduce (~3-4 hours)

Map output is unsorted key-value pairs. You need to group by key and aggregate.

- Group all emitted pairs by key (shuffle phase)
- Apply a reduce function to each group (e.g., sum all counts per word)
- Output the final result
- Run everything in a single process first

**You now have:** Local MapReduce.

## Step 3: Split input and distribute map tasks (~4-5 hours)

One machine mapping over 100GB is slow.

- Split the input into chunks (e.g., 64MB each)
- Run a coordinator that assigns chunks to worker processes
- Workers run the map function on their chunk and write intermediate output to disk
- Coordinator tracks task assignment and completion

**You now have:** Distributed map phase.

## Step 4: Distributed reduce (~4-5 hours)

- Partition intermediate keys across reduce workers (hash key % N reducers)
- Each reduce worker pulls its partition's data from all mappers (shuffle over network)
- Reduce workers apply the reduce function and write final output
- Coordinator waits for all reducers to complete

**You now have:** Full distributed MapReduce.

## Step 5: Fault tolerance (~4-5 hours)

Workers crash. The job should not restart from scratch.

- Coordinator detects worker failure via missed heartbeats
- Re-assign the failed worker's tasks to another worker
- Map tasks are idempotent — re-running produces the same output
- Store intermediate data durably so completed map tasks don't re-run

**You now have:** Fault-tolerant batch processing.

## Step 6: Job management API (~3-4 hours)

- Submit jobs with: input path, map function, reduce function, number of reducers
- Track job progress: % of map tasks done, % of reduce tasks done
- Cancel running jobs
- View job history and output location

## Step 7: Combiner optimization (~3-4 hours)

- Run a local reduce (combiner) on each mapper's output before shuffling
- Drastically reduces network traffic for associative operations (sum, count, max)
- Combiner is optional and specified per job

## Useful Resources

- [MapReduce Paper — Google Research](https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/)
- [Hadoop MapReduce Tutorial](https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html)
- [Designing Data-Intensive Applications — Batch Processing](https://dataintensive.net/)
- [gRPC Documentation (for worker communication)](https://grpc.io/docs/)

## Where to go from here

- Speculative execution (run slow tasks on multiple workers, use first result)
- Multi-stage pipelines (chain MapReduce jobs)
- Support for different input formats (CSV, JSON, Parquet)
- Resource-aware scheduling (assign tasks based on worker CPU/memory)
- Integration with your distributed file storage for input/output
