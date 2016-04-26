# Get JS
[![npm version](https://img.shields.io/npm/v/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js) [![npm downloads](https://img.shields.io/npm/dt/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js) [![Code Climate](https://img.shields.io/codeclimate/github/kabirbaidhya/get-js.svg?style=flat-square)](https://codeclimate.com/github/kabirbaidhya/get-js)

A lightweight Promise based package to load scripts dynamically.

## Installation

```bash
$ npm install get-js --save
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
get([
    '/scripts/abc.js',
    '/scripts/xyz.js'
]).then(function() {
    console.log('do something');
}).then(function() {
    console.log('do something else');
}).catch(function() {
    console.log('error');
});
```
