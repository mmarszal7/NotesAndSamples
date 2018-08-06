# Design Patterns:
<p align="center"> 
<img src="./assets/designPatterns.jpg">
</p>

## 1. Builder

Builder uses Fluent Interface whitch is "object oriented API based extensively on **method chaining** with the goal of making the readability. It is implemented by each method return this (or self)."
```
var pokemon = new Pokemon.Builder()
                         .WithName('name')
                         .WithColor('blue')
                         .Build();
```

Where Pokemon is:

```
class Pokemon
{
    private string _name;
    private string _color;

    public Pokemon(Builder builder) //NOTE Only 1 parameter in constructor
    {
        _name = builder._name;
        _color = builder._color;
    }

    public class Builder //NOTE Builder class
    {
        internal string _name;
        internal string _color;

        public Builder WithName(string name)
        {
            _name = name;
            return this;
        }

        public Builder WithColor(string color)
        {
            _color = color;
            return this;
        }

        public Pokemon Build() {
            return new Pokemon(this);
        }
    }
}
```
---
# Git CLI
<p align="center"> 
<img src="./assets/git_schema.png">
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
    
---

# Visual Studio setup:
### Visual Studio extensions:
- Hot Commands
- Hot Settings
- Hot Tips
- Ctrl + Click Go to definition
- Custom Document Well			
- Solution Error Visualizer
- Git Diff Margin
- Object Exporter
 
### Visual Studio Code extensions:
- Auto Rename Tag
- Auto Close Tag
- vscode-icons
- Bracket Pait Colorizer

### Visual Studio Code settings:
```
{
    "workbench.colorTheme": "Visual Studio Light",
    "workbench.iconTheme": "vscode-icons",
    "vsicons.projectDetection.autoReload": true,
    "workbench.editor.enablePreview": true,
    
    "files.autoSave": "onWindowChange",
    "window.zoomLevel": 0.6,
    "terminal.integrated.fontSize": 12,
    "editor.formatOnSave": true,
    "explorer.autoReveal": false,
    
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "php.validate.executablePath": "C:/xampp/php/php.exe",
    "python.pythonPath": "C:/Anaconda3/python",
    "python.linting.pylintArgs": ["--errors-only"],
    
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,

    "editor.tokenColorCustomizations":{
        "textMateRules": [
            {
                "name": "Functions",
                "scope": [
                    "entity.name.function",
                    "support.function"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": "#AA3731"
                }
            },
            {
                "name": "Classes",
                "scope": [
                    "entity.name.type",
                    "entity.other.inherited-class",
                    "support.class"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": "#7A3E9D"
                }
            }
        ]
    }
}
```

# Some hotkeys:
## 1. Chrome:
* Alt+d - jump to address bar
* Ctrl+Shift+t - restore closed tab
* Shift+Esc - Chrome task manager
* Alt + <-/-> - previous/next page
* Ctrl + Tab / Ctrl + Shift + Tab / Ctrl + 1-8 - jump between opened tabs


## 2. Total Commander:
Website with hotkeys:
    https://shortcutworld.com/Total-Commander/win/Total-Commander_8_Shortcuts
    
#### General:
* Shift+F4 - create and edit new file

#### Tabs:
* Tab - jump between tabs
* Ctrl + u - switch views
* Alt + F5 - pack files
* Alt + F1 / Alt + F2 - change drive
* CTRL+ALT+Letter(s)	Jump to a file/location
* Ctrl+ ArrowUp - create new tab
* Ctrl+Tab - next tab
* Ctrl+<--/--> - jump to command line

#### File sorting:
* Ctrl+F3 - Sort by name
* Ctrl+F4 - Sort by extension
* Ctrl+F5 - Sort by date/time
* Ctrl+F6 - Sort by size
* Ctrl+F7 - Unsorted

#### Selections:
* Num * 		- Invert selection
* Num / 		- Restore selection
* Ctrl+A 		- Select all
* Ctrl+l 		- Calculate occupied space of selecte files
* Ctrl+Num- 	- Deselect all
* Alt+Num+	- Select all files with extension
* Alt+Num- 	- Deselect all files with extension
