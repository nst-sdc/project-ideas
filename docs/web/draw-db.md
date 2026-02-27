# Draw DB Clone

Start with boxes on a canvas. End with a full database schema designer.

## Step 1: Draw a box on a canvas

You want to represent a database table visually. Start with a rectangle.

- One HTML page with a `<canvas>` element (or use SVG/DOM elements)
- Click on the canvas to place a box
- Each box has a title (the table name)
- Drag boxes to reposition them

**You now have:** Draggable boxes on a canvas.

## Step 2: Add columns to tables

A box with just a name isn't useful. Tables have columns.

- Double-click a box to open an editor panel
- Add columns with a name, data type (dropdown), and constraints (PK, NOT NULL, UNIQUE)
- Display columns inside the box, below the table name
- Primary key columns get a key icon or bold styling

**You now have:** Table definitions with columns.

## Step 3: Draw relationships

Tables reference each other. You need foreign key lines.

- Click a column in one table, drag to a column in another table to create a relationship
- Draw a line between the two tables, anchored to the relevant sides
- Lines should re-route when tables are moved
- Show the relationship type (one-to-one, one-to-many) with crow's foot notation

**You now have:** An ER diagram with relationships.

## Step 4: Generate SQL

The diagram is nice, but you need actual DDL to create the database.

- Walk the schema graph and generate CREATE TABLE statements
- Include column types, constraints, and FOREIGN KEY clauses
- Support PostgreSQL and MySQL dialects
- Display the SQL in a side panel with copy-to-clipboard

**You now have:** SQL generation from a visual schema.

## Step 5: Import from existing databases

You have a database already. You don't want to recreate the schema by hand.

- Connect to a live database and read its information schema
- Auto-generate table boxes with columns and relationships
- Auto-layout the tables (grid or force-directed placement)
- Let the user rearrange after import

**You now have:** Reverse engineering from a live database.

## Step 6: Save and load projects

You close the tab. Your schema is gone.

- Serialize the entire schema (tables, columns, positions, relationships) as JSON
- Save to localStorage for quick persistence
- Add export/import as a JSON file
- Later: save to a backend with user accounts

**You now have:** Persistent schema projects.

## Step 7: Undo/redo

You accidentally deleted a table with twenty columns.

- Implement a command stack (array of actions)
- Every mutation (add table, move table, add column, delete) pushes to the stack
- Ctrl+Z pops and reverses, Ctrl+Y re-applies

**You now have:** Undo/redo support.

## Step 8: Indexes and enums

- Let users define indexes (single and composite) on tables
- Support custom enum types
- Include them in the generated SQL

## Step 9: Collaboration

- Add real-time collaboration using WebSockets
- Show cursors of other users on the canvas
- Lock tables being edited by another user

## Step 10: Deploy

- Containerize the frontend and backend
- Add CI/CD
- Set up a domain and TLS

## Where to go from here

- Migration generation (diff two schema versions, produce ALTER statements)
- Schema versioning and history
- Notes and annotations on the diagram
- Export as PNG or PDF
- Template schemas (e-commerce, blog, SaaS starter)
