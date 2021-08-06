
# Visual Studio environment:
### Visual Studio extensions:
- Power Commands (Productivity Power Tools)
- Custom Document Well			
- Solution Error Visualizer
- Object Exporter

### Often searched options in VS:
- Options > Environment > Tabs and Windows > Show pinned tabs in separate row
- Options > Productivity Power Tools > Power Commands > Remove and Sort Usings on Save
- Debug > Windows > Exception Settings > CLR Exceptions
 
### Visual Studio Code extensions:
- Auto Import
- Auto Rename Tag
- Auto Close Tag
- vscode-icons
- Bracket Pait Colorizer
- Prettier

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
