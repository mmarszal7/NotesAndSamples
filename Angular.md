# AngularCLI

## Global update:
```
$ npm uninstall -g @angular/cli
$ npm cache clean
$ npm install -g @angular/cli@latest
```

## Local update:
```
$ rmdir /S/Q node_modules dist
$ npm install --save-dev @angular/cli@latest
$ npm install
```

## Building
```
$ ng build --prod
```

## Using static Angular files in ASP.NET Core
```
app.UseDefaultFiles();
app.UseStaticFiles();
```


## AngularCLI generate commands:
Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

# TypeScript:
#### Installation:
```
npm install typescript  --save-dev
npm init 	// package.json file
tsc --init 	// tsconfig.ts file
```

#### Console app:
```
npm init 
touch app.ts
tsc app.ts
node app.js
```

#### Web app:
Add this to package.json:
```
"scripts": {
    "tsc-watch": "tsc --watch",
    "lite": "lite-server --baseDir ./src",
    "start": "concurrently \"npm run tsc-watch\" \"npm run lite\""
},
```

Install dependencies and create project:
```
npm init 
npm install typescript lite-server concurrently --save
// concurrently - allows you to run multiple services concurrently (eg. server and tsc watch)
// install other optional packages (npm install jquery bootstrap rxjs moment --save)

touch src/app.ts
touch src/index.html
npm start
```
