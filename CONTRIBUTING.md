# Contributing to Project Ideas

Thanks for wanting to make this better. Here's how.

## What you can contribute

- **Fix a roadmap** — wrong link, outdated tool, unclear step? Edit it.
- **Add time estimates or resources** — if a step feels off, adjust it.
- **Improve a step** — better explanation, a useful tip, a common gotcha.
- **Add a new project** — see format below.
- **Fix typos** — yes, even that counts.

## Adding a new project

1. Pick a category: `web/`, `creative/`, `games/`, `systems/`, or `cluster/`
2. Create a new `.md` file in that folder
3. Follow this structure:

```markdown
# Project Name

| | |
|---|---|
| Difficulty | Beginner / Intermediate / Advanced |
| Team Size | Solo / 2-3 people / 3-5 people |
| Time | ~XX hours |
| Demo-ready by | Step N |
| Prerequisites | What they need to know |
| Built by | Real companies that built this |

**Skills you'll earn:** specific, resume-worthy skills

One paragraph explaining what they're building and why it matters.

## Step 1: The smallest thing that works (~X hours)

Start with the problem. Why does this step exist?
Then the solution. What do they build?

**You now have:** a one-line summary of what works after this step.

## Step 2: Hit the first wall (~X hours)

...continue the pattern...

## Useful Resources

- [Link](url) — short description
- ...4-6 links total

## Where to go from here

Ideas for extending the project beyond the guided steps.
```

4. Add your file to the sidebar in `docs/.vitepress/config.mjs`
5. Open a PR

## The pedagogy

Every roadmap follows discovery-driven learning:

- **Start with the minimum.** An input and a button. A canvas and a click.
- **Each step introduces exactly one new concept** — motivated by a real problem from the previous step.
- **No skipping.** If they need a database, they first feel the pain of not having one.
- **Steps get shorter as they go.** Early steps are detailed. Later steps trust the reader more.
- **It never really ends.** The "Where to go from here" section keeps it a living project.

Don't write steps that say "now install these 5 things." Write steps that say "your data disappears on refresh — let's fix that."

## Running locally

```bash
git clone https://github.com/nst-sdc/project-ideas.git
cd project-ideas
npm install
npm run docs:dev
```

## Code of conduct

Be helpful. Be kind. Don't be a jerk. That's it.

## License

MIT. See [LICENSE](LICENSE).
