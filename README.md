# Get JS
[![NPM Version](https://img.shields.io/npm/v/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js)
[![NPM Downloads](https://img.shields.io/npm/dt/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js)
[![Code Climate](https://img.shields.io/codeclimate/github/kabirbaidhya/get-js.svg?style=flat-square)](https://codeclimate.com/github/kabirbaidhya/get-js)

A lightweight Promise based package to load scripts dynamically in the browser.

## Installation

```bash
$ npm install get-js --save
```

You'll also need a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) polyfill for [older browsers](http://caniuse.com/#feat=promises).
```
$ npm install es6-promise
```

## Usage
Include the package using common js `require()`:

```javascript
var get = require('get-js');
```

Or, using `<script>` tags:

```html
<script type="text/javascript" src="/path/to/get-js/dist/get.min.js"></script>
```

Here you go:

```javascript
// Load single script
get('https://code.jquery.com/jquery-2.2.3.min.js').then(function() {
    console.log('do something');
});

// Load multiple scripts, without changing the order
get([
    '/js/abc.js',
    '/js/xyz.js'
]).then(function() {
    console.log('do something now');
}).catch(function() {
    console.log('error');
});
```
