# Web-based File Diff & Merge Tool

Start with comparing two strings. End with a collaborative merge tool.

## Step 1: Compare two text inputs

You have two versions of a file. You want to see what changed.

- One HTML page with two `<textarea>` elements, side by side
- A "Diff" button that computes the difference
- Use a diff algorithm (Myers or a library like `diff`) to find added, removed, and unchanged lines
- Display the result below with color coding: green for additions, red for deletions

**You now have:** A basic text diff viewer.

## Step 2: Side-by-side view

The combined output is hard to follow. You want to see both versions aligned.

- Display the diff in two columns, with line numbers
- Align matching lines so additions/deletions appear at the same vertical position
- Highlight changed lines with background color and changed characters with a darker shade
- Scroll both panels together (synchronized scrolling)

**You now have:** A proper side-by-side diff.

## Step 3: Load from files

Pasting into textareas doesn't scale.

- Add file input buttons that accept text files
- Read file contents using the FileReader API
- Auto-trigger diff when both files are loaded
- Display filenames above each panel

**You now have:** File-based diffing.

## Step 4: Syntax highlighting

You're diffing code. Plain text makes it hard to read.

- Apply syntax highlighting to both panels (Prism.js or CodeMirror)
- Detect language from file extension
- Highlighting should coexist with diff coloring (layer them)

**You now have:** A code-aware diff viewer.

## Step 5: Merge editor

You see the differences. Now you want to pick which version to keep for each change.

- For each diff hunk, add buttons: "Accept Left", "Accept Right", "Accept Both"
- Build a merged result in a third panel
- Let users edit the merged result directly
- Add a "Copy Result" button

**You now have:** An interactive merge tool.

## Step 6: Three-way merge

Two people edited the same file. You need to reconcile both against the original.

- Add a third input: the base (common ancestor) version
- Compute diffs from base to left and base to right
- Detect conflicts (both sides changed the same lines)
- Highlight conflicts and let the user resolve each one

**You now have:** Three-way merge like Git.

## Step 7: Server-side API

- Build an API that accepts two (or three) files and returns the diff as structured JSON
- Use this for CI pipelines, code review tools, or bots
- Support different output formats (unified diff, JSON, HTML)

## Step 8: Folder diff

- Compare two directories recursively
- Show a file tree with status icons (added, modified, deleted, unchanged)
- Click a file to see its line-level diff

## Step 9: Deploy

- Containerize and deploy
- Add CI/CD
- Rate-limit the API

## Where to go from here

- Git integration (diff between commits or branches)
- Image diff (overlay, side-by-side, onion skin)
- Binary file comparison
- Collaborative merge sessions (real-time, multiple users)
- Semantic diff (understand code structure, not just lines)
