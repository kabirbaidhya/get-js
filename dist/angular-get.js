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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nvar resolved = {};\n/**\n * Load javascript url asynchronously.\n *\n * @param {*} url               The javascript url to load.\n * @param {*} type              Url type 'text/css or text/javascript'\n * @param {*} callback          Callback function to invoke on success.\n * @param {*} errorCallback     Callback function to invoke on error.\n * @returns {void}\n */\n\nfunction loadScript(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"text/javascript\";\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n  var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n\n  //fail safe check for empty/null values\n  if (!url) {\n    return;\n  }\n\n  if (!type) {\n    return;\n  }\n  /**\n   * Function to Call Callback given\n   *\n   */\n\n\n  var invokeCallback = function invokeCallback() {\n    resolved[url] = true;\n\n    if ((0, _util.isFunction)(callback)) {\n      callback();\n    }\n  }; //if url already fetched return\n\n\n  if (resolved[url]) {\n    invokeCallback();\n    return;\n  } //create element based on type\n\n\n  var element = null;\n\n  if (type == \"text/css\") {\n    element = document.createElement(\"link\");\n    element.rel = \"stylesheet\";\n    element.type = \"text/css\";\n    element.href = url;\n  } else if (type == \"text/javascript\") {\n    element = document.createElement(\"script\");\n    element.type = \"text/javascript\";\n    element.src = url;\n  }\n\n  if (element.readyState) {\n    // IE\n    element.onreadystatechange = function () {\n      if (element.readyState == \"loaded\" || element.readyState == \"complete\") {\n        element.onreadystatechange = null;\n        invokeCallback();\n      }\n    };\n  } else {\n    // Others\n    element.onload = function () {\n      invokeCallback();\n    };\n  }\n\n  element.onerror = function (e) {\n    resolved[url] = false;\n    console.log(\"error\", e);\n\n    if ((0, _util.isFunction)(errorCallback)) {\n      errorCallback();\n    }\n  }; //append to parent element\n\n\n  var parent = document.body || document.head || document;\n\n  if (type == \"text/css\") {\n    parent = document.head;\n  }\n\n  parent.appendChild(element);\n}\n/**\n * Load javascript url (or a list of urls) asynchronously\n * and return a Promise instance.\n *\n * @param {*} src\n * @param {*} opts\n * @returns {Promise}\n */\n\n\nfunction get(src, type, opts) {\n  if ((0, _util.isString)(src)) {\n    //if single src\n    //check if type is given by user otherwise self set based on extension\n    if (!type) {\n      var extension = src.substring(src.lastIndexOf(\".\"));\n\n      if (extension == \".js\") {\n        type = \"text/javascript\";\n      } else if (extension == \".css\") {\n        type = \"text/css\";\n      }\n    }\n\n    return new Promise(function (resolve, reject) {\n      loadScript(src, type, function () {\n        return resolve(true);\n      }, function () {\n        return reject();\n      });\n    });\n  } else if ((0, _util.isArray)(src)) {\n    //else if src data is arrray by recursive loop all array and sub array will be solved\n    var p = Promise.resolve(true);\n    src.forEach(function (url) {\n      p = p.then(function () {\n        return get(url);\n      });\n    });\n    return p;\n  }\n\n  throw new Error(\"Invalid argument for get()\");\n}\n\nvar _default = get;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dldC5qcz9hM2E3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbnZhciByZXNvbHZlZCA9IHt9O1xuLyoqXG4gKiBMb2FkIGphdmFzY3JpcHQgdXJsIGFzeW5jaHJvbm91c2x5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdXJsICAgICAgICAgICAgICAgVGhlIGphdmFzY3JpcHQgdXJsIHRvIGxvYWQuXG4gKiBAcGFyYW0geyp9IHR5cGUgICAgICAgICAgICAgIFVybCB0eXBlICd0ZXh0L2NzcyBvciB0ZXh0L2phdmFzY3JpcHQnXG4gKiBAcGFyYW0geyp9IGNhbGxiYWNrICAgICAgICAgIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbiBzdWNjZXNzLlxuICogQHBhcmFtIHsqfSBlcnJvckNhbGxiYWNrICAgICBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb24gZXJyb3IuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHVybCkge1xuICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIGVycm9yQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZ1bmN0aW9uICgpIHt9O1xuXG4gIC8vZmFpbCBzYWZlIGNoZWNrIGZvciBlbXB0eS9udWxsIHZhbHVlc1xuICBpZiAoIXVybCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdHlwZSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gQ2FsbCBDYWxsYmFjayBnaXZlblxuICAgKlxuICAgKi9cblxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKCkge1xuICAgIHJlc29sdmVkW3VybF0gPSB0cnVlO1xuXG4gICAgaWYgKCgwLCBfdXRpbC5pc0Z1bmN0aW9uKShjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9OyAvL2lmIHVybCBhbHJlYWR5IGZldGNoZWQgcmV0dXJuXG5cblxuICBpZiAocmVzb2x2ZWRbdXJsXSkge1xuICAgIGludm9rZUNhbGxiYWNrKCk7XG4gICAgcmV0dXJuO1xuICB9IC8vY3JlYXRlIGVsZW1lbnQgYmFzZWQgb24gdHlwZVxuXG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh0eXBlID09IFwidGV4dC9jc3NcIikge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBlbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgIGVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICBlbGVtZW50LmhyZWYgPSB1cmw7XG4gIH0gZWxzZSBpZiAodHlwZSA9PSBcInRleHQvamF2YXNjcmlwdFwiKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgZWxlbWVudC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnJlYWR5U3RhdGUpIHtcbiAgICAvLyBJRVxuICAgIGVsZW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsZW1lbnQucmVhZHlTdGF0ZSA9PSBcImxvYWRlZFwiIHx8IGVsZW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgZWxlbWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICBpbnZva2VDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJzXG4gICAgZWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpbnZva2VDYWxsYmFjaygpO1xuICAgIH07XG4gIH1cblxuICBlbGVtZW50Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc29sdmVkW3VybF0gPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGUpO1xuXG4gICAgaWYgKCgwLCBfdXRpbC5pc0Z1bmN0aW9uKShlcnJvckNhbGxiYWNrKSkge1xuICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIH1cbiAgfTsgLy9hcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRcblxuXG4gIHZhciBwYXJlbnQgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7XG5cbiAgaWYgKHR5cGUgPT0gXCJ0ZXh0L2Nzc1wiKSB7XG4gICAgcGFyZW50ID0gZG9jdW1lbnQuaGVhZDtcbiAgfVxuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cbi8qKlxuICogTG9hZCBqYXZhc2NyaXB0IHVybCAob3IgYSBsaXN0IG9mIHVybHMpIGFzeW5jaHJvbm91c2x5XG4gKiBhbmQgcmV0dXJuIGEgUHJvbWlzZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0geyp9IHNyY1xuICogQHBhcmFtIHsqfSBvcHRzXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldChzcmMsIHR5cGUsIG9wdHMpIHtcbiAgaWYgKCgwLCBfdXRpbC5pc1N0cmluZykoc3JjKSkge1xuICAgIC8vaWYgc2luZ2xlIHNyY1xuICAgIC8vY2hlY2sgaWYgdHlwZSBpcyBnaXZlbiBieSB1c2VyIG90aGVyd2lzZSBzZWxmIHNldCBiYXNlZCBvbiBleHRlbnNpb25cbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHZhciBleHRlbnNpb24gPSBzcmMuc3Vic3RyaW5nKHNyYy5sYXN0SW5kZXhPZihcIi5cIikpO1xuXG4gICAgICBpZiAoZXh0ZW5zaW9uID09IFwiLmpzXCIpIHtcbiAgICAgICAgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbiA9PSBcIi5jc3NcIikge1xuICAgICAgICB0eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsb2FkU2NyaXB0KHNyYywgdHlwZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlsLmlzQXJyYXkpKHNyYykpIHtcbiAgICAvL2Vsc2UgaWYgc3JjIGRhdGEgaXMgYXJycmF5IGJ5IHJlY3Vyc2l2ZSBsb29wIGFsbCBhcnJheSBhbmQgc3ViIGFycmF5IHdpbGwgYmUgc29sdmVkXG4gICAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgc3JjLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xuICAgICAgcCA9IHAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXQodXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBmb3IgZ2V0KClcIik7XG59XG5cbnZhciBfZGVmYXVsdCA9IGdldDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/get.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isArray = isArray;\nexports.isString = isString;\nexports.isFunction = isFunction;\n\n/**\n * Checks if the given value is an array.\n *\n * @param {*} value\n * @returns {boolean}\n */\nfunction isArray(value) {\n  return Object.prototype.toString.call(value) === '[object Array]';\n}\n/**\n * Checks if the given value is a string.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isString(value) {\n  return typeof value === 'string';\n}\n/**\n * Checks if the given value is a function.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isFunction(value) {\n  return typeof value === 'function';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi91dGlsLmpzP2EzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/util.js\n");

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