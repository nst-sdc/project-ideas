# Web-based File Diff & Merge Tool


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, algorithms basics, HTML/CSS |
| Built by | GitHub diff view, Meld, Beyond Compare, WinMerge |

**Skills you'll earn:** Diff algorithms (Myers), syntax highlighting, three-way merge, conflict resolution, side-by-side rendering

Start with comparing two strings. End with a collaborative merge tool.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Compare two text inputs (~2-3 hours)

You have two versions of a file. You want to see what changed.

- One HTML page with two `<textarea>` elements, side by side
- A "Diff" button that computes the difference
- Use a diff algorithm (Myers or a library like `diff`) to find added, removed, and unchanged lines
- Display the result below with color coding: green for additions, red for deletions

**You now have:** A basic text diff viewer.

## Step 2: Side-by-side view (~3-4 hours)

The combined output is hard to follow. You want to see both versions aligned.

- Display the diff in two columns, with line numbers
- Align matching lines so additions/deletions appear at the same vertical position
- Highlight changed lines with background color and changed characters with a darker shade
- Scroll both panels together (synchronized scrolling)

**You now have:** A proper side-by-side diff.

## Step 3: Load from files (~1-2 hours)

Pasting into textareas doesn't scale.

- Add file input buttons that accept text files
- Read file contents using the FileReader API
- Auto-trigger diff when both files are loaded
- Display filenames above each panel

**You now have:** File-based diffing.

## Step 4: Syntax highlighting (~2-3 hours)

You're diffing code. Plain text makes it hard to read.

- Apply syntax highlighting to both panels (Prism.js or CodeMirror)
- Detect language from file extension
- Highlighting should coexist with diff coloring (layer them)

**You now have:** A code-aware diff viewer.

## Step 5: Merge editor (~4-5 hours)

You see the differences. Now you want to pick which version to keep for each change.

- For each diff hunk, add buttons: "Accept Left", "Accept Right", "Accept Both"
- Build a merged result in a third panel
- Let users edit the merged result directly
- Add a "Copy Result" button

**You now have:** An interactive merge tool.

## Step 6: Three-way merge (~4-5 hours)

Two people edited the same file. You need to reconcile both against the original.

- Add a third input: the base (common ancestor) version
- Compute diffs from base to left and base to right
- Detect conflicts (both sides changed the same lines)
- Highlight conflicts and let the user resolve each one

**You now have:** Three-way merge like Git.

## Step 7: Server-side API (~2-3 hours)

- Build an API that accepts two (or three) files and returns the diff as structured JSON
- Use this for CI pipelines, code review tools, or bots
- Support different output formats (unified diff, JSON, HTML)

## Step 8: Folder diff (~3-4 hours)

- Compare two directories recursively
- Show a file tree with status icons (added, modified, deleted, unchanged)
- Click a file to see its line-level diff

## Step 9: Deploy (~2 hours)

- Containerize and deploy
- Add CI/CD
- Rate-limit the API

## Useful Resources

- [diff (npm)](https://www.npmjs.com/package/diff) — JavaScript text diffing library (Myers algorithm)
- [CodeMirror Merge View](https://codemirror.net/try/?example=Merge%20View) — Diff/merge extension for CodeMirror
- [FileReader API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) — Read local files in the browser
- [Prism.js](https://prismjs.com/) — Syntax highlighting for code diffs
- [Three-way merge (Wikipedia)](https://en.wikipedia.org/wiki/Merge_(version_control)#Three-way_merge) — Understanding merge algorithms
- [Unified Diff Format](https://www.gnu.org/software/diffutils/manual/html_node/Unified-Format.html) — Standard diff output format

## Where to go from here

- Git integration (diff between commits or branches)
- Image diff (overlay, side-by-side, onion skin)
- Binary file comparison
- Collaborative merge sessions (real-time, multiple users)
- Semantic diff (understand code structure, not just lines)
