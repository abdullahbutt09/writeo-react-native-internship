# Git – Detached HEAD & Git Stash

## Detached HEAD

### What is a Detached HEAD?

In Git, **HEAD** represents your current location in the repository.

Normally, `HEAD` points to a branch (e.g., `main`).

```text
A ---- B ---- C
              ^
            main
              ^
            HEAD
```

When you switch directly to a commit instead of a branch, `HEAD` points to that commit instead of a branch. This state is called a **Detached HEAD**.

```text
A ---- B ---- C
       ^
     HEAD
```

---

## Why use Detached HEAD?

Use a detached HEAD when you want to:

* View an older version of the project.
* Run an older version of the application.
* Debug an issue in a previous commit.
* Compare the current project with an older version.
* Test old code without affecting any branches.

---

## Switch to a Previous Commit

```bash
git switch --detach <commit-hash>
```

### Example

```bash
git switch --detach b1f1cb8
```

You are now viewing the project exactly as it existed in commit `b1f1cb8`.

You can run the project normally.

Example:

```bash
npm install
npx expo start
```

---

## Return to the Latest Version

After testing the old commit, return to your branch.

```bash
git switch main
```

Git restores your project to the latest commit on the `main` branch.

---

## Important Note

Avoid making commits while in a detached HEAD unless you intentionally want to create a new branch.

If you accidentally commit while detached, Git will warn you that your commit is not attached to any branch.

To keep that work:

```bash
git switch -c new-branch-name
```

---

# Git Stash

## What is Git Stash?

`git stash` temporarily saves your **uncommitted changes** and restores your working directory to a clean state.

Think of it as a temporary storage area for unfinished work.

---

## Why use Git Stash?

Use `git stash` when you need to:

* Switch branches.
* Switch to an older commit.
* Pull the latest changes.
* Work on something urgent.
* Save unfinished work without creating a commit.

---

## Save Current Changes

```bash
git stash
```

Git stores all tracked modifications and restores your working directory to the last committed state.

---

## Example Workflow

Current status:

```bash
git status
```

Output:

```text
Modified:
app/index.tsx
components/Header.tsx
components/PrimaryButton.tsx
```

Save your work:

```bash
git stash
```

Now:

```bash
git status
```

Output:

```text
nothing to commit, working tree clean
```

Your changes are safely stored inside the stash.

---

## Switch to Another Commit

```bash
git switch --detach b1f1cb8
```

Run or inspect the old project.

---

## Return to Main

```bash
git switch main
```

---

## Restore Stashed Changes

```bash
git stash pop
```

Your files are restored exactly as they were before running `git stash`.

---

## View All Stashes

```bash
git stash list
```

Example:

```text
stash@{0}: WIP on main: c32c4c3 Day 2
stash@{1}: WIP on feature-login
```

---

## Restore Without Removing the Stash

```bash
git stash apply
```

Unlike `git stash pop`, the stash remains in the stash list.

---

## Delete a Specific Stash

```bash
git stash drop stash@{0}
```

---

## Delete All Stashes

```bash
git stash clear
```

---

# Detached HEAD vs Git Stash

| Detached HEAD                     | Git Stash                                                  |
| --------------------------------- | ---------------------------------------------------------- |
| Used to view or run an old commit | Used to temporarily save uncommitted work                  |
| Changes your current checkout     | Keeps your current branch but cleans the working directory |
| Safe for testing old versions     | Safe for pausing unfinished work                           |
| Return using `git switch main`    | Restore using `git stash pop`                              |

---

# Real-World Example

Suppose your commit history is:

```text
c32c4c3  ← Day 2 (HEAD -> main)
b1f1cb8  ← Day 1
```

You are currently working on **Day 3**, but you have not committed your changes.

### Step 1 – Save your unfinished work

```bash
git stash
```

### Step 2 – View Day 1

```bash
git switch --detach b1f1cb8
```

Run the project:

```bash
npx expo start
```

### Step 3 – Return to the latest code

```bash
git switch main
```

### Step 4 – Restore your unfinished work

```bash
git stash pop
```

Now you are back on `main` with all your Day 3 changes restored.

---

# Key Takeaways

* `git switch --detach <commit>` → Temporarily view and run an older version of the project.
* `git switch main` → Return to the latest version of your project.
* `git stash` → Save unfinished changes without creating a commit.
* `git stash pop` → Restore the most recently stashed changes.
* `git stash list` → View all saved stashes.
* **Best practice:** Commit completed work, use `git stash` only for work in progress that you need to temporarily set aside.

This is the same workflow used by many professional developers when they need to inspect historical versions while keeping their current work safe.