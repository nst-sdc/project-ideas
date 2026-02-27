# High-Level System Design Simulator

| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, system design fundamentals, distributed systems concepts |
| Built by | Excalidraw, Miro, AWS Architecture Icons, System Design Primer |

**Skills you'll earn:** Drag-and-drop canvas, traffic simulation, failure injection, distributed system modeling, load balancing visualization

Start with drawing boxes and arrows. End with a simulator that tests system designs under load.

## Step 1: Draw system components (~3-4 hours)

You want to sketch a system architecture in the browser.

- One HTML page with a [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) or DOM-based drawing area
- Add component types: client, load balancer, server, database, cache, queue
- Click to place components, drag to reposition
- Each component is a labeled box with an icon representing its type

**You now have:** A visual system design canvas.

## Step 2: Connect components (~3-4 hours)

Boxes without connections aren't architecture.

- Click a component's output port and drag to another component's input port to create a connection
- Draw arrows between connected components
- Label connections (e.g., "HTTP", "TCP", "async")
- Connections re-route when components are moved

**You now have:** An architecture diagram.

## Step 3: Configure component properties (~3-4 hours)

A "server" box means nothing without specs.

- Click a component to open a properties panel
- Configure: requests/second capacity, latency (ms), failure rate (%)
- Database: read/write throughput, storage capacity
- Cache: hit rate, TTL, max size
- Load balancer: algorithm (round-robin, least-connections, consistent hash)

**You now have:** Configurable system components.

## Step 4: Simulate request flow (~4-5 hours)

The diagram is static. You want to see requests flow through the system.

- Add a "Simulate" button that generates synthetic requests
- Animate dots flowing along the connection arrows
- Each dot represents a request; its speed reflects the configured latency
- Show the request path: client → LB → server → DB → response

**You now have:** Animated request flow.

## Step 5: Load testing (~4-5 hours)

10 requests per second works fine. What happens at 10,000?

- Add a load slider: requests per second (1 to 100,000)
- Components have capacity limits; exceeding them causes queueing and increased latency
- When a component is overloaded, visually turn it red
- Show metrics: p50/p95/p99 latency, throughput, error rate

**You now have:** Load simulation.

## Step 6: Failure injection (~4-5 hours)

What happens when a server dies?

- Right-click a component to "kill" it (simulate failure)
- Observe how traffic reroutes (or doesn't)
- Test: what happens when the database goes down? When the cache fails?
- Show cascading failures: if the DB is down, does the server queue fill up and crash too?

**You now have:** Failure simulation.

## Step 7: Scaling (~3-4 hours)

- Add auto-scaling rules: if server CPU > 80%, add another instance
- Visually show instances appearing and disappearing
- Compare: fixed 3 servers vs. auto-scaling 1-10 servers under the same load
- Show cost estimation (more instances = more cost)

## Step 8: Scenario library (~3-4 hours)

- Pre-built scenarios: URL shortener, chat system, video streaming, e-commerce
- Each scenario comes with a reference architecture
- Users can modify and test variations
- Compare their design against the reference

## Useful Resources

- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Canvas API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Excalidraw](https://excalidraw.com/) — reference for drawing UX
- [k6 load testing](https://k6.io/docs/) — real load testing for comparison
- [High Scalability blog](http://highscalability.com/) — real-world architecture case studies

## Where to go from here

- Export designs as shareable links or images
- Real backend simulation (spin up actual containers matching the design)
- Capacity planning calculator
- Collaboration (multiple users design together)
- Quiz mode (given requirements, design a system, get scored)
