# kodelearnJS

A dark, mobile-first JavaScript learning site and live playground. It is dependency-free and runs as a static site.

## Run it locally

From the repository root, start a static file server. For example:

```sh
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## What is included

- Ten beginner lessons, with an estimated 2–3 hours for the full path.
- Plain-language explanations of why `const` and `let` differ, plus a gentle guide to JavaScript engines, interpreters, ahead-of-time compilers, JIT compilers, and transpilers.
- Two analogies, step-by-step explanations, highlighted code walkthroughs, interactive visual models, fun facts, and quick checks in every lesson. The intro also compares `console.log()` with the warning-style `console.warn()`.
- An inline coding task at the end of every lesson: type or complete code, run it, and see output right there. Drafts are saved on the device.
- A separate multi-file JavaScript playground with a sandboxed runner and console. Relative CommonJS imports work with `require("./helpers.js")` and `module.exports`.
- Individual JavaScript file downloads and project ZIP downloads.

No account, build step, or external JavaScript package is required.
