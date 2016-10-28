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
/*!********************!*\
  !*** ./angular.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/angular/module */ 1).default;


/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./lib/angular/module.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(/*! angular */ 2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _GetService = __webpack_require__(/*! ./GetService */ 3);
	
	var _GetService2 = _interopRequireDefault(_GetService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getModule = _angular2.default.module('angularGetJs', []);
	
	getModule.factory('get', _GetService2.default);
	
	exports.default = getModule.name;

/***/ },
/* 2 */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./lib/angular/GetService.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = GetService;
	
	var _get = __webpack_require__(/*! ./../get */ 4);
	
	var _get2 = _interopRequireDefault(_get);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	GetService.$inject = ['$q'];
	
	function GetService($q) {
	    return function (src, opts) {
	        return $q.resolve((0, _get2.default)(src, opts));
	    };
	}

/***/ },
/* 4 */
/*!********************!*\
  !*** ./lib/get.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _util = __webpack_require__(/*! ./util */ 5);
	
	var resolved = {};
	
	function loadScript(url, callback, errorCallback) {
	    var invokeCallback = function invokeCallback() {
	        resolved[url] = true;
	
	        if ((0, _util.isFunction)(callback)) {
	            callback();
	        }
	    };
	
	    if (resolved[url]) {
	        invokeCallback();
	
	        return;
	    }
	
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	
	    if (script.readyState) {
	        //IE
	        script.onreadystatechange = function () {
	            if (script.readyState == 'loaded' || script.readyState == 'complete') {
	                script.onreadystatechange = null;
	                invokeCallback();
	            }
	        };
	    } else {
	        //Others
	        script.onload = function () {
	            invokeCallback();
	        };
	    }
	
	    script.onerror = function (e) {
	        resolved[url] = false;
	        console.log('error', e);
	        if ((0, _util.isFunction)(errorCallback)) {
	            errorCallback();
	        }
	    };
	
	    script.src = url;
	    var parent = document.body || document.head || document;
	    parent.appendChild(script);
	}
	
	function get(src, opts) {
	    if ((0, _util.isString)(src)) {
	        return new Promise(function (resolve, reject) {
	            loadScript(src, function () {
	                return resolve(true);
	            }, function () {
	                return reject();
	            });
	        });
	    } else if ((0, _util.isArray)(src)) {
	        var _ret = function () {
	            var p = Promise.resolve(true);
	
	            src.forEach(function (url) {
	                p = p.then(function () {
	                    return get(url);
	                });
	            });
	
	            return {
	                v: p
	            };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	
	    throw new Error('Invalid argument for get()');
	}
	
	exports.default = get;

/***/ },
/* 5 */
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
	  return typeof v === 'function';
	};
	
	exports.isArray = isArray;
	exports.isString = isString;
	exports.isFunction = isFunction;

/***/ }
/******/ ]);
//# sourceMappingURL=angular-get.js.map