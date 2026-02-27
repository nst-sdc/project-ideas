# URL Monitoring & Uptime Checker


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~25-30 hours |
| Demo-ready by | Step 4 |
| Prerequisites | Node.js, basic networking, cron concepts |
| Built by | UptimeRobot, Pingdom, Better Uptime, StatusCake |

**Skills you'll earn:** HTTP health checks, cron scheduling, WebSocket dashboards, SSL monitoring, alerting systems

Start with pinging a URL. End with a full uptime monitoring service.

## Step 1: Check if a URL is up (~1-2 hours)

You want to know if a website is online. Write a script that tells you.

- A Node.js script that takes a URL as a command-line argument
- Use `fetch()` or `http.get()` to make a request
- Print the status code and response time
- If the request fails or times out, print "DOWN"

**You now have:** A manual uptime checker.

## Step 2: Check on a schedule (~2 hours)

You don't want to run the script by hand every five minutes.

- Use `setInterval` to check the URL every N seconds
- Log the results with timestamps to the console
- Add support for multiple URLs from a config file (JSON or YAML)

**You now have:** A polling monitor.

## Step 3: Store the results (~2-3 hours)

Your terminal scrolls away. You want to see historical data.

- Set up a database (SQLite is fine to start)
- Store each check: URL, status code, response time, timestamp
- Query for uptime percentage over the last 24 hours

**You now have:** Persistent monitoring data.

## Step 4: Build a dashboard (~3-4 hours)

You want to glance at a page and see what's up and what's down.

- Create a web server with Express
- Build a dashboard page that shows all monitored URLs
- Green for up, red for down, with response time graphs
- Use a charting library (Chart.js) for response time over time

**You now have:** A visual status page.

## Step 5: Alerts (~2-3 hours)

Your site went down at 3 AM. You found out at 9 AM.

- Send an alert when a URL goes from UP to DOWN
- Start with email (Nodemailer + SMTP) or a webhook (Slack/Discord)
- Don't spam — alert once on state change, not every failed check
- Add a cooldown period before re-alerting

**You now have:** Incident notifications.

## Step 6: Public status page (~3-4 hours)

Your users want to know if the service is down, without asking you.

- Create a public-facing status page (no auth required)
- Show each service with current status and 90-day uptime percentage
- Display a timeline of incidents
- Add an RSS feed for status updates

**You now have:** A status page like statuspage.io.

## Step 7: Multi-region checks (~3-4 hours)

Your server is in India. A user in Europe says the site is slow. You see green.

- Deploy checker agents in multiple regions (or use cloud functions)
- Each agent reports results back to your central server
- Dashboard shows per-region latency
- Only alert if multiple regions report failure (avoids false positives)

**You now have:** Distributed monitoring.

## Step 8: SSL and certificate monitoring (~2-3 hours)

Your SSL cert expired. The site shows a scary browser warning.

- Check SSL certificate expiry date on each monitored URL
- Alert when a cert is expiring within 14 days
- Show cert details on the dashboard

## Step 9: Advanced checks (~2-3 hours)

- Support checking for specific response body content (keyword matching)
- Monitor API endpoints with custom headers and POST bodies
- Track DNS resolution time separately from HTTP response time

## Step 10: Deploy (~2-3 hours)

- Containerize the checker, the API, and the dashboard
- Run the checker as a long-lived process (or cron job)
- Set up a domain and TLS for the status page
- Add CI/CD


## Useful Resources

- [node-cron](https://github.com/node-cron/node-cron) — Job scheduling
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) — HTTP requests
- [Chart.js](https://www.chartjs.org/) — Dashboard charts
- [Nodemailer](https://nodemailer.com/) — Email alerts
- [Socket.io](https://socket.io/) — Real-time dashboard updates

## Where to go from here

- Incident management (acknowledge, resolve, postmortem)
- Synthetic monitoring (multi-step browser checks with Playwright)
- Performance budgets (alert if response time exceeds threshold)
- Team management and on-call rotation
- Webhook integrations (PagerDuty, Opsgenie)
