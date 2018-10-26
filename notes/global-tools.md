## Node global tools:
Global tools entry points can be found in: 
- Linux - **/usr/local/lib/node**
- Windows 10 - **%USERPROFILE%\AppData\Roaming\npm\*.cmd**
- npm list -g

To create global tool you need 2 things:
#### package.js:
``` JS
"bin": {
	"my-tool": "./bin/my-tool.js"
},
"preferGlobal": true, // additional warning when installing locally
```
#### ./bin/my-tool.js
``` JS
#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);
var name = args[0];

console.log(`Hello ${name}!`);
```
To install your tool just type: **npm install -g /path/to/your/project**
