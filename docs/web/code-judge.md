# Online Code Judge


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 7 |
| Prerequisites | Node.js, Docker basics, process management |
| Built by | LeetCode, HackerRank, Codeforces, Kattis |

**Skills you'll earn:** Process sandboxing, Docker containers, job queues, code execution engines, resource limiting

Start by running a function and checking its output. End with a competitive programming platform.

(Assumes basic Node.js and HTML/CSS knowledge; Docker learned along the way)

## Step 1: Run a function and check the result (~30 min)

Write a JS file that imports a student's function, calls it with known inputs, and compares the output.

```js
const result = studentFn(2, 3)
console.log(result === 5 ? 'PASS' : 'FAIL')
```

- Hardcoded test case, hardcoded expected output
- Run with `node test.js`

**You now have:** A test runner.

## Step 2: Multiple test cases (~1 hour)

One test isn't enough. The student's code might work for `(2,3)` but fail for `(0,0)`.

- Define test cases as an array: `[{ input: [2,3], expected: 5 }, ...]`
- Loop through them, report pass/fail for each
- Show which test cases failed and what the actual output was

**You now have:** A proper test harness.

## Step 3: Accept code via a web form (~2-3 hours)

Running files manually doesn't scale.

- Build a web page with a code editor (a `<textarea>` is fine to start)
- Submit the code to a backend via `fetch()`
- Backend writes the code to a temp file, runs it with `child_process.exec()`, returns results

**You now have:** A web-based code runner.

## Step 4: Time and memory limits (~2 hours)

A student submits an infinite loop. Your server hangs.

- Set a timeout on `child_process.exec()` (e.g., 5 seconds)
- Kill the process if it exceeds the limit
- Report "Time Limit Exceeded"
- Track memory usage if possible

**You now have:** Resource-limited execution.

## Step 5: Sandboxing (~4-5 hours)

A student submits `require('fs').unlinkSync('/etc/passwd')`. Your server is compromised.

- Run student code in a Docker container
- The container has no network access, no filesystem access outside its sandbox
- Mount only the student's code file and the test runner
- Destroy the container after execution

**You now have:** Isolated, safe code execution.

## Step 6: Multiple languages (~3-4 hours)

Not everyone writes JavaScript.

- Add support for Python, C++, Java, Go
- Each language needs: a base Docker image, a compile step (if applicable), and a run command
- The test runner compares stdout against expected output — language-agnostic

**You now have:** A polyglot judge.

## Step 7: Problem definitions (~3-4 hours)

Hardcoded test cases in the backend are messy.

- Create a data model for "problems": title, description, input format, output format, test cases, constraints
- Store problems in a database
- Build an admin UI for creating and editing problems
- Show problem descriptions on the frontend

**You now have:** A problem bank.

## Step 8: User accounts and submissions (~3 hours)

You can't tell whose code is whose.

- Add registration and login
- Record each submission: user, problem, code, language, result, timestamp
- Show submission history per user
- Show a "My Submissions" page

**You now have:** Individual tracking.

## Step 9: A job queue (~3-4 hours)

If 30 students submit at the same time, your server spawns 30 Docker containers and dies.

- Add a job queue (Redis + Bull, or a simple in-memory queue)
- Submissions go into the queue
- A fixed number of workers process them
- Show "Pending..." / "Judging..." / "Accepted" status updates

**You now have:** A scalable execution pipeline.

## Step 10: Verdict system (~2 hours)

Not every failure is the same.

- Define verdicts: Accepted, Wrong Answer, Time Limit Exceeded, Runtime Error, Compilation Error, Memory Limit Exceeded
- Parse execution output to determine the correct verdict
- Show verdicts with color coding (green/red/yellow)

## Step 11: Leaderboard (~2-3 hours)

- Rank users by number of problems solved
- Add contest mode: solve N problems in a time window, rank by speed
- Penalty system for wrong submissions

## Step 12: Code editor upgrade (~2 hours)

- Replace the textarea with Monaco Editor or CodeMirror
- Syntax highlighting, auto-indent, bracket matching
- Language selector

## Step 13: Make it look good (~3 hours)

- Clean problem page layout: description on the left, editor on the right
- Test results below the editor
- Submission history in a sidebar or tab

## Step 14: Deploy to the cluster (~3 hours)

- The judge workers are perfect for Kubernetes: scale them with demand
- Backend and frontend as separate deployments
- Queue backed by Redis
- Problems stored in PostgreSQL/MongoDB

## Useful Resources

- [MDN: child_process](https://nodejs.org/api/child_process.html)
- [Docker Documentation](https://docs.docker.com/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [CodeMirror](https://codemirror.net/)
- [Bull Queue (Redis-based)](https://github.com/OptimalBits/bull)
- [How Online Judges Work](https://en.wikipedia.org/wiki/Online_judge)

## Where to go from here

- Editorial/solutions for problems
- Plagiarism detection (code similarity)
- Custom test case input (let users test before submitting)
- Contests with registration and timers
- Integration with GitHub Classroom
