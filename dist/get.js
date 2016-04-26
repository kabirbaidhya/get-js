window["get"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/get.js */ 1).default;


/***/ },
/* 1 */
/*!********************!*\
  !*** ./lib/get.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(/*! ./util */ 2);
	
	var resolved = {};
	
	function isResolved(src) {
	    return resolved[src] === true || !!document.querySelector('script[src="' + src + '"]');
	}
	
	function loadScript(src) {
	    if (isResolved(src)) {
	        return Promise.resolve(true);
	    }
	
	    var s = document.createElement('script');
	
	    var promise = new Promise(function (resolve, reject) {
	        s.src = src;
	        s.async = false;
	        s.type = 'text/javascript';
	
	        s.onload = function () {
	            resolve(resolved[src] = true);
	        };
	
	        s.onerror = reject;
	    });
	
	    var parent = document.body || document.head || document;
	    parent.appendChild(s);
	
	    return promise;
	}
	
	function get(src, opts) {
	    if ((0, _util.isString)(src)) {
	        return loadScript(src);
	    } else if ((0, _util.isArray)(src) && src.length > 0) {
	        var p;
	
	        src.forEach(function (url) {
	            p = p ? p.then(get(url)) : get(url);
	        });
	
	        return p;
	    } else {
	        throw new Error('Invalid argument for get()');
	    }
	}
	
	exports.default = get;

/***/ },
/* 2 */
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isArray = function isArray(v) {
	  return Object.prototype.toString.call(v) === '[object Array]';
	};
	var isString = function isString(v) {
	  return typeof v === 'string';
	};
	var isFunction = function isFunction(v) {
	  return typeof c === 'function';
	};
	
	exports.isArray = isArray;
	exports.isString = isString;
	exports.isFunction = isFunction;

/***/ }
/******/ ]);
//# sourceMappingURL=get.js.map