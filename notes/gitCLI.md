
# Git CLI
<p align="center"> 
<img src="../assets/git_schema.png">
</p>

## Basics:
    git init
    git -m commit "message"
    git log
    git status          - file state in Staging and Working Directory
    git add file-name   - add file to Stage
    git diff            - diff between Working Directory and Staging

## Revert, discard, reset:
    git checkout HEAD file-name     - discards changes in the WD.
    git reset HEAD file-name        - unstages file changes in the Staging.
    git reset SHA                   - resets previous commit in your commit history.

## Clone & pull:
    git clone repo-name local-name 
    git remote -v                   - remote projects list
    git fetch                       - updates Working Directory with remote
    git merge origin/master         - merges remote with Working Directory
    git push origin branch-name     - push branch to origin remote

## Branches:
    git branch                  - prints current branch
    git checkout branch-name    - changes branch
    git merge branch-name       - merges branch with master
    git branch -d branch-name   - deteles branch

## Fixes:
    git rebase -i --root
    exec git commit --amend --author="nick <mail@mail.pl>" -C HEAD
    exec git commit --amend --date="Mon Jan 01 00:00 2017 +0100" -C HEAD
    git push origin master --force
    git filter-branch --prune-empty --subdirectory-filter FOLDER_NAME BRANCH_NAME   - extract folder from a repo with full history
    
---
