# Web-based Database GUI


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, SQL basics, HTML/CSS/JavaScript |
| Built by | DBeaver, TablePlus, Adminer, pgAdmin |

**Skills you'll earn:** SQL query execution, schema introspection, database drivers, query builders, connection pooling

Start with running a query. End with a full database management tool.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Connect and query (~2-3 hours)

You have a database. You want to run SQL without opening a terminal.

- Set up a Node.js server with Express
- Connect to a PostgreSQL or MySQL database using the appropriate driver
- Create a single API endpoint: `POST /query` that accepts raw SQL and returns the result as JSON
- Build a frontend with a `<textarea>` for the query and a "Run" button

**You now have:** A web-based SQL prompt.

## Step 2: Display results as a table (~2 hours)

JSON in a `<pre>` tag is hard to scan.

- Render the query result as an HTML table
- Auto-generate column headers from the result keys
- Handle empty results gracefully
- Show the row count and execution time

**You now have:** A readable result viewer.

## Step 3: Schema browser (~3-4 hours)

You don't remember your table names. You're running `\dt` through the query box.

- Query the database's information schema to list all tables
- Display them in a sidebar
- Click a table to see its columns, types, and constraints
- Click a column to auto-fill a `SELECT` query

**You now have:** A schema explorer.

## Step 4: Query history (~2-3 hours)

You ran a great query yesterday. It's gone.

- Save every executed query with its timestamp to localStorage (or a server-side table)
- Show a history panel with past queries
- Click to re-run or edit a previous query
- Add a "favorite" button for queries you want to keep

**You now have:** Query history and favorites.

## Step 5: Inline editing (~3-4 hours)

You need to fix a typo in one row. Writing an UPDATE statement for one cell is painful.

- Make table cells editable on double-click
- Track which cells have been modified
- Generate and execute the appropriate UPDATE statement
- Show a confirmation before applying changes

**You now have:** Spreadsheet-like editing.

## Step 6: Multi-database support (~4-5 hours)

You have Postgres in production and SQLite in development.

- Abstract the database connection behind a driver interface
- Support PostgreSQL, MySQL, and SQLite
- Let the user configure connections (host, port, database, credentials)
- Store connection profiles (encrypted at rest)

**You now have:** A multi-engine database client.

## Step 7: Export and import (~2-3 hours)

- Export query results as CSV, JSON, or SQL INSERT statements
- Import CSV files into existing tables
- Support creating tables from CSV headers

## Step 8: Query builder (~4-5 hours)

- Build a visual query builder: pick table, select columns, add WHERE conditions
- Generate SQL from the visual builder
- Let users switch between visual and raw SQL mode

## Step 9: Security (~3-4 hours)

- Add authentication (login required to access)
- Role-based access (read-only vs. full access)
- Query audit logging
- Prevent destructive queries (DROP, TRUNCATE) without confirmation

## Step 10: Deploy (~2-3 hours)

- Containerize the app
- Never expose database credentials to the frontend
- Run behind a reverse proxy with TLS
- Add CI/CD

## Useful Resources

- [pg (node-postgres)](https://node-postgres.com/) — PostgreSQL client for Node.js
- [mysql2 (GitHub)](https://github.com/sidorares/node-mysql2) — MySQL client for Node.js
- [better-sqlite3 (GitHub)](https://github.com/WiseLibs/better-sqlite3) — Fast SQLite3 driver for Node.js
- [CodeMirror](https://codemirror.net/) — Extensible code editor for the browser (great for SQL input)
- [Information Schema — PostgreSQL Docs](https://www.postgresql.org/docs/current/information-schema.html) — Querying database metadata
- [Express.js](https://expressjs.com/) — Web framework for the API layer

## Where to go from here

- ER diagram generation from schema
- Query auto-complete and syntax highlighting
- Saved dashboards (pin query results as widgets)
- Collaboration features (share queries with team)
- Support for NoSQL databases (MongoDB, Redis)
