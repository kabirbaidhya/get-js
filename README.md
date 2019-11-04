# get-js

[![NPM Version](https://img.shields.io/npm/v/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js)
[![NPM Downloads](https://img.shields.io/npm/dt/get-js.svg?style=flat-square)](https://www.npmjs.com/package/get-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/travis/kabirbaidhya/get-js?style=flat-square)](https://travis-ci.org/kabirbaidhya/get-js)

A lightweight library to asynchronously load scripts on the fly.

## Installation

```bash
# Using npm
$ npm install get-js --save

# Using Yarn
$ yarn add get-js

# Using Bower
$ bower install get-js --save
```

For [older browsers](http://caniuse.com/#feat=promises) you may also need a [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) polyfill.

```bash
# Install promise polyfill.
$ npm install es6-promise
```

## Usage

Use it in your project with `require` or `import` as an ES module.

```javascript
const get = require('get-js');

// ES2015+
import get from 'get-js';
```

Or, using `<script>` tags:

```html
<script type="text/javascript" src="https://unpkg.com/get-js@0.0.7/dist/get.min.js"></script>
```

Here you go:

```javascript
// Load a single script
get('https://code.jquery.com/jquery-3.4.1.min.js').then(function() {
  console.log('do something');
});

// Load multiple scripts, without changing the order
get(['/js/abc.js', '/js/xyz.js'])
  .then(function() {
    console.log('do something now');
  })
  .catch(function() {
    console.log('error');
  });
```

If you're using ES2015+ / TypeScript codebase, you can also use `async` / `await` syntax with `get`:

```js
import get from 'get-js';

(async () => {
  await get('https://code.jquery.com/jquery-3.4.1.min.js'); // Gets jQuery.

  $(document).on('ready', () => {
    console.log('Ready!');
  });
})();
```

## Using with Angular

**Note: This refers to [angular 1.x](https://angularjs.org/) projects.**

You can inject this in your angular code as a service.

Require the angular module using

```javascript
const angularGetJs = require('get-js/angular');
```

Or

```html
<script type="text/javascript" src="https://unpkg.com/get-js@0.0.7/dist/angular-get.min.js"></script>
```

Then you should be able to use it like this:

```javascript
// Add the module as a dependency in your app.
angular.module('app', ['angularGetJs']);

// Inject the service
angular.module('app').controller('MyController', [
  'get',
  function(get) {
    get('/some/script.js')
      .then(function() {
        console.log('do something now');
      })
      .catch(function() {
        console.log('error');
      });
  }
]);
```

## Development

To start developing or contributing to `get-js`, you'll need to clone the project first.

1. Clone it locally.
   ```
   $ git clone git@github.com:kabirbaidhya/get-js.git
   ```
2. Install dependencies.

   ```
   $ yarn
   ```

3. Linting

   ```
   $ yarn lint
   ```

4. Generating a build.

   ```
   $ yarn build
   ```

## License

This package is licensed under the [MIT License](LICENSE).
