# API Testing Tool (Postman-lite)


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 6 |
| Prerequisites | HTML, CSS, JavaScript, HTTP fundamentals |
| Built by | Postman, Insomnia, Hoppscotch, Thunder Client |

**Skills you'll earn:** HTTP methods, request/response handling, environment variables, code generation, collection management

Start with a fetch call. End with a full-featured API workbench.

(Assumes basic HTML/CSS/JS and fetch API knowledge)

## Step 1: Send a GET request and show the response (~30 min)

One input field for a URL. One button. Click it, `fetch()` the URL, display the response body in a `<pre>` tag.

- One HTML file
- `fetch(url).then(r => r.text()).then(text => pre.textContent = text)`

**You now have:** The simplest API client.

## Step 2: Show response details (~1 hour)

You got a response but don't know if it was 200 or 500.

- Display status code, status text
- Display response headers
- Show response time (measure before and after fetch)

**You now have:** Useful response inspection.

## Step 3: Choose the HTTP method (~1 hour)

You can only GET. APIs need POST, PUT, DELETE, PATCH.

- Add a dropdown for method selection
- For methods with a body (POST, PUT, PATCH), add a textarea for the request body
- Set `Content-Type: application/json` when sending JSON

**You now have:** Full HTTP method support.

## Step 4: Custom headers (~1 hour)

Some APIs need `Authorization`, `X-API-Key`, or custom headers.

- Add a key-value input for headers
- "Add header" button to add more rows
- Include all headers in the fetch call

**You now have:** Complete request control.

## Step 5: Pretty-print responses (~1-2 hours)

Raw JSON is hard to read.

- Detect JSON responses and format them with `JSON.stringify(data, null, 2)`
- Add syntax highlighting (highlight.js or Prism)
- Tab between "Pretty", "Raw", and "Headers" views

**You now have:** A readable response viewer.

## Step 6: Save requests to collections (~2-3 hours)

You keep retyping the same URL.

- Save requests to localStorage: name, method, URL, headers, body
- Show a sidebar with saved requests
- Click to load a saved request into the editor
- Organize into folders/collections

**You now have:** Reusable request collections.

## Step 7: Environment variables (~2 hours)

Your API URL is different in dev vs production.

- Define environments: `{ "base_url": "http://localhost:3000" }`, `{ "base_url": "https://api.example.com" }`
- Use `{{base_url}}` in URLs and headers
- Replace variables before sending
- Switch environments from a dropdown

**You now have:** Environment management.

## Step 8: Authentication helpers (~2-3 hours)

Manually copying tokens is tedious.

- Add auth presets: Bearer token, Basic auth, API key
- For OAuth2: build a flow that gets and refreshes tokens
- Auto-attach auth headers to requests

## Step 9: Response history (~2 hours)

- Log every request/response with timestamp
- Browse history, re-run old requests
- Compare responses over time

## Step 10: Request chaining (~3 hours)

Your login endpoint returns a token. You want to use it in the next request automatically.

- Extract values from responses using JSONPath or dot notation
- Set variables from response: `token = response.body.data.token`
- Reference in subsequent requests: `Authorization: Bearer {{token}}`

## Step 11: Code generation (~2 hours)

- Generate `curl`, `fetch`, `axios`, `requests` (Python) code from the current request
- Copy to clipboard

## Step 12: Import/export (~2-3 hours)

- Export collections as JSON
- Import from Postman (parse their collection format)
- Share collections with teammates via file

## Step 13: Make it look good (~3 hours)

- Split pane: request on the left, response on the right
- Tabbed interface for multiple open requests
- Keyboard shortcuts (Ctrl+Enter to send)

## Step 14: Deploy (~2-3 hours)

- Containerize and deploy to the cluster
- Add user accounts so collections sync across devices
- Store collections in a database

## Useful Resources

- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [Postman Learning Center](https://learning.postman.com/)
- [Highlight.js](https://highlightjs.org/)
- [Prism.js](https://prismjs.com/)

## Where to go from here

- WebSocket testing
- GraphQL support
- Mock servers
- Automated test assertions (expect status 200, expect body contains "success")
- CI integration (run collections from CLI)
