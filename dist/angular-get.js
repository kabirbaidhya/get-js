/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./angular.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./angular.js":
/*!********************!*\
  !*** ./angular.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/angular/module */ \"./lib/angular/module.js\").default;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmd1bGFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYW5ndWxhci5qcz85ZjFhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYW5ndWxhci9tb2R1bGUnKS5kZWZhdWx0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./angular.js\n");

/***/ }),

/***/ "./lib/angular/GetService.js":
/*!***********************************!*\
  !*** ./lib/angular/GetService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = GetService;\n\nvar _get = _interopRequireDefault(__webpack_require__(/*! ./../get */ \"./lib/get.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nGetService.$inject = ['$q'];\n/**\n * An angular service function for get-js.\n *\n * @param {*} $q\n * @returns {*}\n */\n\nfunction GetService($q) {\n  return function (src, opts) {\n    return $q.resolve((0, _get[\"default\"])(src, opts));\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5ndWxhci9HZXRTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2FuZ3VsYXIvR2V0U2VydmljZS5qcz8wYzMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBHZXRTZXJ2aWNlO1xuXG52YXIgX2dldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vLi4vZ2V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbkdldFNlcnZpY2UuJGluamVjdCA9IFsnJHEnXTtcbi8qKlxuICogQW4gYW5ndWxhciBzZXJ2aWNlIGZ1bmN0aW9uIGZvciBnZXQtanMuXG4gKlxuICogQHBhcmFtIHsqfSAkcVxuICogQHJldHVybnMgeyp9XG4gKi9cblxuZnVuY3Rpb24gR2V0U2VydmljZSgkcSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHNyYywgb3B0cykge1xuICAgIHJldHVybiAkcS5yZXNvbHZlKCgwLCBfZ2V0W1wiZGVmYXVsdFwiXSkoc3JjLCBvcHRzKSk7XG4gIH07XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/angular/GetService.js\n");

/***/ }),

/***/ "./lib/angular/module.js":
/*!*******************************!*\
  !*** ./lib/angular/module.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _angular = _interopRequireDefault(__webpack_require__(/*! angular */ \"angular\"));\n\nvar _GetService = _interopRequireDefault(__webpack_require__(/*! ./GetService */ \"./lib/angular/GetService.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/**\n * Angular JS service.\n */\nvar angularGetJs = _angular[\"default\"].module('angularGetJs', []);\n\nangularGetJs.factory('get', _GetService[\"default\"]);\nvar _default = angularGetJs.name;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5ndWxhci9tb2R1bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYW5ndWxhci9tb2R1bGUuanM/ODI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2FuZ3VsYXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblxudmFyIF9HZXRTZXJ2aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9HZXRTZXJ2aWNlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogQW5ndWxhciBKUyBzZXJ2aWNlLlxuICovXG52YXIgYW5ndWxhckdldEpzID0gX2FuZ3VsYXJbXCJkZWZhdWx0XCJdLm1vZHVsZSgnYW5ndWxhckdldEpzJywgW10pO1xuXG5hbmd1bGFyR2V0SnMuZmFjdG9yeSgnZ2V0JywgX0dldFNlcnZpY2VbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IGFuZ3VsYXJHZXRKcy5uYW1lO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/angular/module.js\n");

/***/ }),

/***/ "./lib/get.js":
/*!********************!*\
  !*** ./lib/get.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nvar resolved = {};\n/**\n * Load javascript url asynchronously.\n *\n * @param {*} url               The javascript url to load.\n * @param {*} type              Url type 'text/css or text/javascript'.\n * @param {*} callback          Callback function to invoke on success.\n * @param {*} errorCallback     Callback function to invoke on error.\n * @returns {void}\n */\n\nfunction loadScript(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text/javascript';\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n  var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n\n  // Checks for empty/null values\n  if (!url || !type) {\n    errorCallback();\n  }\n  /**\n   * This Function Calls Callback and adds the url to resolved list.\n   */\n\n\n  var invokeCallback = function invokeCallback() {\n    resolved[url] = true;\n\n    if ((0, _util.isFunction)(callback)) {\n      callback();\n      return;\n    }\n  }; // If url is already fetched return\n\n\n  if (resolved[url]) {\n    invokeCallback();\n    return;\n  } // Create element based on type\n\n\n  var element = (0, _util.createElement)(url, type); // Assign the Function to be called on file loaded\n\n  if (element.readyState) {\n    /*\n     * If the Browser is IE\n     * Pass in the callback function on state changed - similar to onLoad\n     */\n    element.onreadystatechange = function () {\n      if (element.readyState === 'loaded' || element.readyState === 'complete') {\n        element.onreadystatechange = null;\n        invokeCallback();\n      }\n    };\n  } else {\n    element.onload = invokeCallback;\n  } // Assign the error callback function to be called on error occurance\n\n\n  element.onerror = function (e) {\n    resolved[url] = false;\n    console.error(e);\n\n    if ((0, _util.isFunction)(errorCallback)) {\n      errorCallback();\n    }\n  }; // Append the elemnt to the parent element\n\n\n  var parent = document.body || document.head || document;\n\n  if (type === 'text/css') {\n    parent = document.head;\n  }\n\n  parent.appendChild(element);\n}\n/**\n * Load javascript url (or a list of urls) asynchronously\n * and return a Promise instance.\n *\n * @param {*} src\n * @param {*} type\n * @returns {Promise}\n */\n\n\nfunction get(src, type) {\n  if ((0, _util.isString)(src)) {\n    // If src is string url\n    type = type || (0, _util.determineFileType)(src);\n    return new Promise(function (resolve, reject) {\n      loadScript(src, type, function () {\n        return resolve(true);\n      }, function () {\n        return reject();\n      });\n    });\n  } else if ((0, _util.isArray)(src)) {\n    // else if src data is arrray by recursion loop all the array and sub array\n    var p = Promise.resolve(true);\n    src.forEach(function (url) {\n      p = p.then(function () {\n        return get(url, type);\n      });\n    });\n    return p;\n  }\n\n  throw new Error('Invalid argument for get()');\n}\n\nvar _default = get;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dldC5qcz9hM2E3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbnZhciByZXNvbHZlZCA9IHt9O1xuLyoqXG4gKiBMb2FkIGphdmFzY3JpcHQgdXJsIGFzeW5jaHJvbm91c2x5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdXJsICAgICAgICAgICAgICAgVGhlIGphdmFzY3JpcHQgdXJsIHRvIGxvYWQuXG4gKiBAcGFyYW0geyp9IHR5cGUgICAgICAgICAgICAgIFVybCB0eXBlICd0ZXh0L2NzcyBvciB0ZXh0L2phdmFzY3JpcHQnLlxuICogQHBhcmFtIHsqfSBjYWxsYmFjayAgICAgICAgICBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb24gc3VjY2Vzcy5cbiAqIEBwYXJhbSB7Kn0gZXJyb3JDYWxsYmFjayAgICAgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uIGVycm9yLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpIHtcbiAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0ZXh0L2phdmFzY3JpcHQnO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZ1bmN0aW9uICgpIHt9O1xuICB2YXIgZXJyb3JDYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZnVuY3Rpb24gKCkge307XG5cbiAgLy8gQ2hlY2tzIGZvciBlbXB0eS9udWxsIHZhbHVlc1xuICBpZiAoIXVybCB8fCAhdHlwZSkge1xuICAgIGVycm9yQ2FsbGJhY2soKTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBGdW5jdGlvbiBDYWxscyBDYWxsYmFjayBhbmQgYWRkcyB0aGUgdXJsIHRvIHJlc29sdmVkIGxpc3QuXG4gICAqL1xuXG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soKSB7XG4gICAgcmVzb2x2ZWRbdXJsXSA9IHRydWU7XG5cbiAgICBpZiAoKDAsIF91dGlsLmlzRnVuY3Rpb24pKGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07IC8vIElmIHVybCBpcyBhbHJlYWR5IGZldGNoZWQgcmV0dXJuXG5cblxuICBpZiAocmVzb2x2ZWRbdXJsXSkge1xuICAgIGludm9rZUNhbGxiYWNrKCk7XG4gICAgcmV0dXJuO1xuICB9IC8vIENyZWF0ZSBlbGVtZW50IGJhc2VkIG9uIHR5cGVcblxuXG4gIHZhciBlbGVtZW50ID0gKDAsIF91dGlsLmNyZWF0ZUVsZW1lbnQpKHVybCwgdHlwZSk7IC8vIEFzc2lnbiB0aGUgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGZpbGUgbG9hZGVkXG5cbiAgaWYgKGVsZW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIC8qXG4gICAgICogSWYgdGhlIEJyb3dzZXIgaXMgSUVcbiAgICAgKiBQYXNzIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBvbiBzdGF0ZSBjaGFuZ2VkIC0gc2ltaWxhciB0byBvbkxvYWRcbiAgICAgKi9cbiAgICBlbGVtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbGVtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IGVsZW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBlbGVtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIGludm9rZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50Lm9ubG9hZCA9IGludm9rZUNhbGxiYWNrO1xuICB9IC8vIEFzc2lnbiB0aGUgZXJyb3IgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGVycm9yIG9jY3VyYW5jZVxuXG5cbiAgZWxlbWVudC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNvbHZlZFt1cmxdID0gZmFsc2U7XG4gICAgY29uc29sZS5lcnJvcihlKTtcblxuICAgIGlmICgoMCwgX3V0aWwuaXNGdW5jdGlvbikoZXJyb3JDYWxsYmFjaykpIHtcbiAgICAgIGVycm9yQ2FsbGJhY2soKTtcbiAgICB9XG4gIH07IC8vIEFwcGVuZCB0aGUgZWxlbW50IHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuXG5cbiAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudDtcblxuICBpZiAodHlwZSA9PT0gJ3RleHQvY3NzJykge1xuICAgIHBhcmVudCA9IGRvY3VtZW50LmhlYWQ7XG4gIH1cblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG4vKipcbiAqIExvYWQgamF2YXNjcmlwdCB1cmwgKG9yIGEgbGlzdCBvZiB1cmxzKSBhc3luY2hyb25vdXNseVxuICogYW5kIHJldHVybiBhIFByb21pc2UgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHsqfSBzcmNcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXQoc3JjLCB0eXBlKSB7XG4gIGlmICgoMCwgX3V0aWwuaXNTdHJpbmcpKHNyYykpIHtcbiAgICAvLyBJZiBzcmMgaXMgc3RyaW5nIHVybFxuICAgIHR5cGUgPSB0eXBlIHx8ICgwLCBfdXRpbC5kZXRlcm1pbmVGaWxlVHlwZSkoc3JjKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbG9hZFNjcmlwdChzcmMsIHR5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbC5pc0FycmF5KShzcmMpKSB7XG4gICAgLy8gZWxzZSBpZiBzcmMgZGF0YSBpcyBhcnJyYXkgYnkgcmVjdXJzaW9uIGxvb3AgYWxsIHRoZSBhcnJheSBhbmQgc3ViIGFycmF5XG4gICAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgc3JjLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xuICAgICAgcCA9IHAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXQodXJsLCB0eXBlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IGZvciBnZXQoKScpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBnZXQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/get.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isArray = isArray;\nexports.isString = isString;\nexports.isFunction = isFunction;\nexports.createElement = createElement;\nexports.determineFileType = determineFileType;\n\n/**\n * Checks if the given value is an array.\n *\n * @param {*} value\n * @returns {boolean}\n */\nfunction isArray(value) {\n  return Object.prototype.toString.call(value) === '[object Array]';\n}\n/**\n * Checks if the given value is a string.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isString(value) {\n  return typeof value === 'string';\n}\n/**\n * Checks if the given value is a function.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\n/**\n *  This Function Creates element based on type passed\n *  currently limited to Link and script element.\n *\n * @param {*} url\n * @param {*} type\n * @returns\n */\n\n\nfunction createElement(url, type) {\n  var element = null;\n\n  if (type === 'text/css') {\n    element = document.createElement('link');\n    element.rel = 'stylesheet';\n    element.type = 'text/css';\n    element.href = url;\n  } else if (type === 'text/javascript') {\n    element = document.createElement('script');\n    element.type = 'text/javascript';\n    element.src = url;\n  }\n\n  return element;\n}\n/**\n *\n *\n * @param {*} url\n * @returns\n */\n\n\nfunction determineFileType(url) {\n  var extension = url.substring(url.lastIndexOf('.'));\n\n  if (extension === '.js') {\n    return 'text/javascript';\n  } else if (extension === '.css') {\n    return 'text/css';\n  } else {\n    return null;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi91dGlsLmpzP2EzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5leHBvcnRzLmRldGVybWluZUZpbGVUeXBlID0gZGV0ZXJtaW5lRmlsZVR5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG4vKipcbiAqICBUaGlzIEZ1bmN0aW9uIENyZWF0ZXMgZWxlbWVudCBiYXNlZCBvbiB0eXBlIHBhc3NlZFxuICogIGN1cnJlbnRseSBsaW1pdGVkIHRvIExpbmsgYW5kIHNjcmlwdCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdXJsXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEByZXR1cm5zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHVybCwgdHlwZSkge1xuICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHR5cGUgPT09ICd0ZXh0L2NzcycpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGVsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGVsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgZWxlbWVudC5ocmVmID0gdXJsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHsqfSB1cmxcbiAqIEByZXR1cm5zXG4gKi9cblxuXG5mdW5jdGlvbiBkZXRlcm1pbmVGaWxlVHlwZSh1cmwpIHtcbiAgdmFyIGV4dGVuc2lvbiA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcuJykpO1xuXG4gIGlmIChleHRlbnNpb24gPT09ICcuanMnKSB7XG4gICAgcmV0dXJuICd0ZXh0L2phdmFzY3JpcHQnO1xuICB9IGVsc2UgaWYgKGV4dGVuc2lvbiA9PT0gJy5jc3MnKSB7XG4gICAgcmV0dXJuICd0ZXh0L2Nzcyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/util.js\n");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = angular;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIj9mNzg1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///angular\n");

/***/ })

/******/ });