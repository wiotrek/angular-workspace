Working on library
```
ng build auth-page-lib --watch
```

includ in another angular application, example:
```
npm i ~/Documents/angular-workspace/dist/auth-page-lib
```

Add in project which use library in tsconfig.app.json
- compiler options
Needed to use in development*
```
 "paths": {
      "@angular/*": [
        "./node_modules/@angular/*"
      ]
    }
```