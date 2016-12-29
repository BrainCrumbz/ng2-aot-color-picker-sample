# ng2-aot-color-picker-sample

Sample project of (modified) [angular 2 color picker](https://github.com/Alberplz/angular2-color-picker) library working in AOT build.

This repository is based off of [angular 2 seed](https://github.com/angular/angular2-seed). That was lacking an AOT build, which has then been added here. 

Original library has been copied and modified locally at `\src\app\angular2-color-picker\`. Please head to `\src\app\angular2-color-picker\README.md` to get the initial commit where this copy was forked from, and a summary of the (relatively few) applied changes.

To create an AOT build, run:

```
npm run build-aot
```

To build and serve as AOT, run (watch out the final **r**):

```
npm run server-aot
```

Open browser to [`http://localhost:3000`](http://localhost:3000), then head to *Contact* page from navigation menu. Last field, *Color*, is the one with color picker directive.

Rest of the page shows the original seed project readme.

## angular2-seed

A simple starter project demonstrating the basic concepts of Angular 2.


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script
