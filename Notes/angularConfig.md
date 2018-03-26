# [Angular]

## Global update:
```sh
$ npm uninstall -g @angular/cli
$ npm cache clean
$ npm install -g @angular/cli@latest
```

## Local update:
```sh
$ rmdir /S/Q node_modules dist
$ npm install --save-dev @angular/cli@latest
$ npm install
```

## Installing packages:
```npm
$ npm install @angular/flex-layout --save
$ npm install --save @angular/material @angular/cdk
$ npm install --save @angular/animations
```

## Using static Angular files in ASP.NET Core
```
app.UseDefaultFiles();
app.UseStaticFiles();
```

# [AngularJS]

## Listing packages & installing AngularJS:
```npm
$ npm list -g --depth=0
$ npm install angular@1.6.6
```

## Installing typings for AngularJS (without --global if not working):
```
$ npm install -g typings
$ typings install dt~angular --global --save
```

## Installing packages:
```
$ npm install -g bower
$ bower install bootstrap
$ bower install jquery
$ bower init                    // creating bower.json
```


[Angular]: <https://angular.io>
[AngularJS]: <https://angularjs.org/>
