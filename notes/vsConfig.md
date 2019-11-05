
# Visual Studio environment:
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
```JSON
{
    "workbench.colorTheme": "Visual Studio Dark",
    "workbench.iconTheme": "vscode-icons",
    "vsicons.projectDetection.autoReload": true,
    "workbench.editor.enablePreview": true,
    
    "files.autoSave": "onWindowChange",
    "window.zoomLevel": 0.6,
    "terminal.integrated.fontSize": 12,
    "editor.formatOnSave": true,
    "explorer.autoReveal": false,
    "editor.fontFamily": "'Cascadia Code', Consolas, 'Courier New', monospace",
    
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "typescript.referencesCodeLens.enabled": true,
    "php.validate.executablePath": "C:/xampp/php/php.exe",
    "python.pythonPath": "C:/Anaconda3/python",
    "python.linting.pylintArgs": ["--errors-only"],
    
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
    "prettier.printWidth": 150,

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
### Windows Terminal profile.json
```json
// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "initialCols": 100,
  "initialRows": 25,
  "profiles": [
    {
      "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
      "name": "PowerShell",
      "startingDirectory": null,
      "commandline": "powershell.exe",
      "fontSize": 11,
      "cursorShape": "vintage",
      "fontFace": "Cascadia Code",
      "acrylicOpacity": 0.5,
      "useAcrylic": false,
      "backgroundImage": "http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif",
      "backgroundImageOpacity": 0.7,
      "backgroundImageStretchMode": "none",
      "backgroundImageAlignment": "bottomRight"
    },
    {
      "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
      "name": "cmd",
      "startingDirectory": null,
      "commandline": "cmd.exe",
      "fontSize": 11,
      "cursorShape": "vintage",
      "fontFace": "Cascadia Code"
    },
    {
      "guid": "{c6eaf9f4-32a7-5fdc-b5cf-066e8a4b1e40}",
      "name": "Ubuntu",
      "startingDirectory": null,
      "source": "Windows.Terminal.Wsl",
      "fontSize": 11,
      "cursorShape": "vintage",
      "fontFace": "Cascadia Code"
    },
    {
      "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
      "name": "Azure Cloud Shell",
      "source": "Windows.Terminal.Azure",
      "fontSize": 11,
      "cursorShape": "vintage",
      "fontFace": "Cascadia Code"
    }
  ],
  "schemes": [],
  "keybindings": [
    { "command": "closePane", "keys": ["ctrl+w"] },
    { "command": "copy", "keys": ["ctrl+c"] },
    { "command": "newTab", "keys": ["ctrl+t"] },
    { "command": "nextTab", "keys": ["ctrl+tab"] },
    { "command": "openNewTabDropdown", "keys": ["ctrl+space"] },
    { "command": "paste", "keys": ["ctrl+v"] },
    { "command": "switchToTab0", "keys": ["ctrl+1"] },
    { "command": "switchToTab1", "keys": ["ctrl+2"] },
    { "command": "switchToTab2", "keys": ["ctrl+3"] },
    { "command": "switchToTab3", "keys": ["ctrl+4"] },

    { "command": "splitHorizontal", "keys": ["ctrl+\""] },
    { "command": "splitVertical", "keys": ["ctrl+%"] },
    { "command": "moveFocusUp", "keys": ["ctrl+shift+up"] },
    { "command": "moveFocusDown", "keys": ["ctrl+shift+down"] },
    { "command": "moveFocusLeft", "keys": ["ctrl+shift+left"] },
    { "command": "moveFocusRight", "keys": ["ctrl+shift+right"] },
    { "command": "resizePaneUp", "keys": ["ctrl+up"] },
    { "command": "resizePaneDown", "keys": ["ctrl+down"] },
    { "command": "resizePaneLeft", "keys": ["ctrl+left"] },
    { "command": "resizePaneRight", "keys": ["ctrl+right"] },
    { "command": "closePane", "keys": ["ctrl+w"] }
  ]
}
```
