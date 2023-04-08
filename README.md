Working on library
```
ng build auth-page-lib --watch
```

includ in another angular application, example:
```
npm i ~/Documents/angular-workspace/dist/auth-page-lib
```

Add in project which use library
Needed to use in development*
```
"projects.project-name.architect.build.options.preserveSymlinks": true
```