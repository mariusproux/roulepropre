## Plan: Push project code to GitHub repository

**Goal:** Send all current project code to the empty GitHub repository `https://github.com/mariusproux/roule-propre-shine-web.git`.

**What we know:**
- The repository is confirmed empty by the user.
- The project is a Vite + React + TypeScript app with a standard file structure.
- A `.gitignore` and `README.md` already exist.
- The git working directory already contains tracked files (`node_modules` and `dist` are already ignored).

**Steps:**

1. **Set remote origin** — Run `git remote add origin` pointing to the provided GitHub URL.
2. **Verify branch name** — Check if the current branch is `main` or `master`, then push accordingly.
3. **Push to GitHub** — Force-push (or standard push) the current branch to the remote repository. Since the repo is empty, this will populate it with the entire codebase.

No file changes, README edits, or build script modifications are required unless explicitly requested.