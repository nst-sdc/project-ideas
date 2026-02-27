# Platform Observability Stack


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, basic DevOps, time-series data concepts |
| Built by | Datadog, Grafana, Prometheus, Jaeger |

**Skills you'll earn:** Metrics collection, log aggregation, distributed tracing, dashboard building, alerting pipelines, OpenTelemetry

Start by collecting a metric from an application. End with a full observability platform: metrics, logs, traces, dashboards, and alerting.

## Step 1: Collect and store a metric (~2-3 hours)

You can't improve what you can't measure.

- Instrument an app to emit a counter (e.g., `http_requests_total`) using [Prometheus client library](https://prometheus.io/docs/instrumenting/clientlibs/)
- Expose a `/metrics` endpoint in Prometheus exposition format
- Set up [Prometheus](https://prometheus.io/docs/introduction/overview/) to scrape the endpoint every 15 seconds
- Query the metric in Prometheus: `rate(http_requests_total[5m])`

**You now have:** Metric collection and querying.

## Step 2: Build a dashboard (~3-4 hours)

Raw PromQL queries are not dashboards.

- Set up [Grafana](https://grafana.com/docs/grafana/latest/) and connect it to Prometheus as a data source
- Create a dashboard with panels: request rate, error rate, latency histogram
- Add template variables for service name and environment
- Set a 30-second auto-refresh

**You now have:** Visual metric dashboards.

## Step 3: Collect logs (~4-5 hours)

Metrics tell you something is wrong. Logs tell you what.

- Ship application logs to a central store using [Loki](https://grafana.com/docs/loki/latest/) (or Elasticsearch)
- Use [Promtail](https://grafana.com/docs/loki/latest/send-data/promtail/) or [Fluentd](https://docs.fluentd.org/) as the log shipper
- Structure logs as JSON: timestamp, level, message, service, request ID
- Query logs in Grafana: filter by service, level, time range, keyword

**You now have:** Centralized logging.

## Step 4: Distributed tracing (~4-5 hours)

A request hits 5 services. You need to see the full journey.

- Instrument services with [OpenTelemetry](https://opentelemetry.io/docs/) SDK
- Each request carries a trace ID through all services via headers
- Export traces to [Jaeger](https://www.jaegertracing.io/docs/) or [Tempo](https://grafana.com/docs/tempo/latest/)
- View a trace waterfall: which service took how long, where errors occurred

**You now have:** Distributed tracing.

## Step 5: Alerting (~4-5 hours)

Dashboards only help if someone is watching. Alerts catch problems automatically.

- Define alert rules in Prometheus: `rate(http_errors_total[5m]) > 0.05`
- Route alerts through [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/): group, deduplicate, route to channels
- Send alerts to Slack, email, or PagerDuty
- Add silence rules for maintenance windows

**You now have:** Proactive incident detection.

## Step 6: Correlate metrics, logs, and traces (~4-5 hours)

- Click a spike on a metric graph → jump to logs from that time window
- Click a log line with a trace ID → jump to the trace waterfall
- Grafana's [Explore](https://grafana.com/docs/grafana/latest/explore/) view with linked data sources

## Step 7: SLOs and error budgets (~4-5 hours)

- Define SLOs: "99.9% of requests complete in under 500ms"
- Track error budget burn rate
- Alert when the error budget is at risk, not just when a threshold is crossed

## Useful Resources

- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Grafana Documentation](https://grafana.com/docs/grafana/latest/)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [Grafana Loki](https://grafana.com/docs/loki/latest/)
- [Jaeger Tracing](https://www.jaegertracing.io/docs/)
- [Google SRE Book — Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/)

## Where to go from here

- Custom metric exporters for databases, queues, and caches
- Anomaly detection (ML-based alerting instead of static thresholds)
- Cost attribution (which team's services generate the most telemetry?)
- Synthetic monitoring (probe endpoints from outside the cluster)
- Runbook automation (trigger remediation scripts from alerts)
