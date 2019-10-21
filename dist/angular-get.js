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

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FILE_CSS = exports.FILE_JAVASCRIPT = void 0;\nvar FILE_JAVASCRIPT = 'text/javascript';\nexports.FILE_JAVASCRIPT = FILE_JAVASCRIPT;\nvar FILE_CSS = 'text/css';\nexports.FILE_CSS = FILE_CSS;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NvbnN0YW50cy5qcz82MTI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GSUxFX0NTUyA9IGV4cG9ydHMuRklMRV9KQVZBU0NSSVBUID0gdm9pZCAwO1xudmFyIEZJTEVfSkFWQVNDUklQVCA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuZXhwb3J0cy5GSUxFX0pBVkFTQ1JJUFQgPSBGSUxFX0pBVkFTQ1JJUFQ7XG52YXIgRklMRV9DU1MgPSAndGV4dC9jc3MnO1xuZXhwb3J0cy5GSUxFX0NTUyA9IEZJTEVfQ1NTOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constants.js\n");

/***/ }),

/***/ "./lib/get.js":
/*!********************!*\
  !*** ./lib/get.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\nvar resolved = {};\n/**\n * Load javascript url asynchronously.\n *\n * @param {*} url               The javascript url to load.\n * @param {*} type              Url type 'text/css or text/javascript'.\n * @param {*} callback          Callback function to invoke on success.\n * @param {*} errorCallback     Callback function to invoke on error.\n * @returns {void}\n */\n\nfunction loadScript(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.FILE_JAVASCRIPT;\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n  var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n\n  // Checks for empty/null values\n  if (!url || !type) {\n    errorCallback();\n  }\n  /**\n   * This Function Calls Callback and adds the url to resolved list.\n   */\n\n\n  var invokeCallback = function invokeCallback() {\n    resolved[url] = true;\n\n    if ((0, _util.isFunction)(callback)) {\n      callback();\n      return;\n    }\n  }; // If url is already fetched return\n\n\n  if (resolved[url]) {\n    invokeCallback();\n    return;\n  } // Create element based on type\n\n\n  var element = (0, _util.createElement)(url, type); // Assign the Function to be called on file loaded\n\n  if (element.readyState) {\n    /*\n     * If the Browser is IE\n     * Pass in the callback function on state changed - similar to onLoad\n     */\n    element.onreadystatechange = function () {\n      if (element.readyState === 'loaded' || element.readyState === 'complete') {\n        element.onreadystatechange = null;\n        invokeCallback();\n      }\n    };\n  } else {\n    element.onload = invokeCallback;\n  } // Assign the error callback function to be called on error occurance\n\n\n  element.onerror = function (e) {\n    resolved[url] = false;\n    console.error(e);\n\n    if ((0, _util.isFunction)(errorCallback)) {\n      errorCallback();\n    }\n  }; // Append the elemnt to the parent element\n\n\n  var parent = document.body || document.head || document;\n\n  if (type === _constants.FILE_CSS) {\n    parent = document.head;\n  }\n\n  parent.appendChild(element);\n}\n/**\n * Load javascript url (or a list of urls) asynchronously\n * and return a Promise instance.\n *\n * @param {*} src\n * @param {*} type\n * @returns {Promise}\n */\n\n\nfunction get(src, type) {\n  if ((0, _util.isString)(src)) {\n    // If src is string url\n    type = type || (0, _util.determineFileType)(src);\n    return new Promise(function (resolve, reject) {\n      loadScript(src, type, function () {\n        return resolve(true);\n      }, function () {\n        return reject();\n      });\n    });\n  } else if ((0, _util.isArray)(src)) {\n    // else if src data is arrray by recursion loop all the array and sub array\n    var p = Promise.resolve(true);\n    src.forEach(function (url) {\n      p = p.then(function () {\n        return get(url, type);\n      });\n    });\n    return p;\n  }\n\n  throw new Error('Invalid argument for get()');\n}\n\nvar _default = get;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2dldC5qcz9hM2E3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG52YXIgcmVzb2x2ZWQgPSB7fTtcbi8qKlxuICogTG9hZCBqYXZhc2NyaXB0IHVybCBhc3luY2hyb25vdXNseS5cbiAqXG4gKiBAcGFyYW0geyp9IHVybCAgICAgICAgICAgICAgIFRoZSBqYXZhc2NyaXB0IHVybCB0byBsb2FkLlxuICogQHBhcmFtIHsqfSB0eXBlICAgICAgICAgICAgICBVcmwgdHlwZSAndGV4dC9jc3Mgb3IgdGV4dC9qYXZhc2NyaXB0Jy5cbiAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgICAgICAgICAgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uIHN1Y2Nlc3MuXG4gKiBAcGFyYW0geyp9IGVycm9yQ2FsbGJhY2sgICAgIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbiBlcnJvci5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsKSB7XG4gIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBfY29uc3RhbnRzLkZJTEVfSkFWQVNDUklQVDtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIGVycm9yQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZ1bmN0aW9uICgpIHt9O1xuXG4gIC8vIENoZWNrcyBmb3IgZW1wdHkvbnVsbCB2YWx1ZXNcbiAgaWYgKCF1cmwgfHwgIXR5cGUpIHtcbiAgICBlcnJvckNhbGxiYWNrKCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgRnVuY3Rpb24gQ2FsbHMgQ2FsbGJhY2sgYW5kIGFkZHMgdGhlIHVybCB0byByZXNvbHZlZCBsaXN0LlxuICAgKi9cblxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKCkge1xuICAgIHJlc29sdmVkW3VybF0gPSB0cnVlO1xuXG4gICAgaWYgKCgwLCBfdXRpbC5pc0Z1bmN0aW9uKShjYWxsYmFjaykpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9OyAvLyBJZiB1cmwgaXMgYWxyZWFkeSBmZXRjaGVkIHJldHVyblxuXG5cbiAgaWYgKHJlc29sdmVkW3VybF0pIHtcbiAgICBpbnZva2VDYWxsYmFjaygpO1xuICAgIHJldHVybjtcbiAgfSAvLyBDcmVhdGUgZWxlbWVudCBiYXNlZCBvbiB0eXBlXG5cblxuICB2YXIgZWxlbWVudCA9ICgwLCBfdXRpbC5jcmVhdGVFbGVtZW50KSh1cmwsIHR5cGUpOyAvLyBBc3NpZ24gdGhlIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBmaWxlIGxvYWRlZFxuXG4gIGlmIChlbGVtZW50LnJlYWR5U3RhdGUpIHtcbiAgICAvKlxuICAgICAqIElmIHRoZSBCcm93c2VyIGlzIElFXG4gICAgICogUGFzcyBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb24gc3RhdGUgY2hhbmdlZCAtIHNpbWlsYXIgdG8gb25Mb2FkXG4gICAgICovXG4gICAgZWxlbWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWxlbWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBlbGVtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgZWxlbWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICBpbnZva2VDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5vbmxvYWQgPSBpbnZva2VDYWxsYmFjaztcbiAgfSAvLyBBc3NpZ24gdGhlIGVycm9yIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlcnJvciBvY2N1cmFuY2VcblxuXG4gIGVsZW1lbnQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmVzb2x2ZWRbdXJsXSA9IGZhbHNlO1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cbiAgICBpZiAoKDAsIF91dGlsLmlzRnVuY3Rpb24pKGVycm9yQ2FsbGJhY2spKSB7XG4gICAgICBlcnJvckNhbGxiYWNrKCk7XG4gICAgfVxuICB9OyAvLyBBcHBlbmQgdGhlIGVsZW1udCB0byB0aGUgcGFyZW50IGVsZW1lbnRcblxuXG4gIHZhciBwYXJlbnQgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQ7XG5cbiAgaWYgKHR5cGUgPT09IF9jb25zdGFudHMuRklMRV9DU1MpIHtcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5oZWFkO1xuICB9XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuLyoqXG4gKiBMb2FkIGphdmFzY3JpcHQgdXJsIChvciBhIGxpc3Qgb2YgdXJscykgYXN5bmNocm9ub3VzbHlcbiAqIGFuZCByZXR1cm4gYSBQcm9taXNlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7Kn0gc3JjXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0KHNyYywgdHlwZSkge1xuICBpZiAoKDAsIF91dGlsLmlzU3RyaW5nKShzcmMpKSB7XG4gICAgLy8gSWYgc3JjIGlzIHN0cmluZyB1cmxcbiAgICB0eXBlID0gdHlwZSB8fCAoMCwgX3V0aWwuZGV0ZXJtaW5lRmlsZVR5cGUpKHNyYyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxvYWRTY3JpcHQoc3JjLCB0eXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWwuaXNBcnJheSkoc3JjKSkge1xuICAgIC8vIGVsc2UgaWYgc3JjIGRhdGEgaXMgYXJycmF5IGJ5IHJlY3Vyc2lvbiBsb29wIGFsbCB0aGUgYXJyYXkgYW5kIHN1YiBhcnJheVxuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHAgPSBwLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHVybCwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBmb3IgZ2V0KCknKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/get.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isArray = isArray;\nexports.isString = isString;\nexports.isFunction = isFunction;\nexports.createElement = createElement;\nexports.determineFileType = determineFileType;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n/**\n * Checks if the given value is an array.\n *\n * @param {*} value\n * @returns {boolean}\n */\nfunction isArray(value) {\n  return Object.prototype.toString.call(value) === '[object Array]';\n}\n/**\n * Checks if the given value is a string.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isString(value) {\n  return typeof value === 'string';\n}\n/**\n * Checks if the given value is a function.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\n/**\n *  This Function Creates element based on type passed\n *  currently limited to Link and script element.\n *\n * @param {*} url\n * @param {*} type\n * @returns\n */\n\n\nfunction createElement(url, type) {\n  var element = null;\n\n  if (type === _constants.FILE_CSS) {\n    element = document.createElement('link');\n    element.rel = 'stylesheet';\n    element.type = _constants.FILE_CSS;\n    element.href = url;\n    return element;\n  } else if (type === _constants.FILE_JAVASCRIPT) {\n    element = document.createElement('script');\n    element.type = _constants.FILE_JAVASCRIPT;\n    element.src = url;\n    return element;\n  }\n\n  return element;\n}\n/**\n * This Function determines the file type based on the URL passed\n * currently only support JS and CSS files.\n *\n * @param {*} url\n * @returns\n */\n\n\nfunction determineFileType(url) {\n  var extension = url.substring(url.lastIndexOf('.'));\n\n  if (extension === '.js') {\n    return _constants.FILE_JAVASCRIPT;\n  } else if (extension === '.css') {\n    return _constants.FILE_CSS;\n  } else {\n    return null;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi91dGlsLmpzP2EzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5leHBvcnRzLmRldGVybWluZUZpbGVUeXBlID0gZGV0ZXJtaW5lRmlsZVR5cGU7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLyoqXG4gKiAgVGhpcyBGdW5jdGlvbiBDcmVhdGVzIGVsZW1lbnQgYmFzZWQgb24gdHlwZSBwYXNzZWRcbiAqICBjdXJyZW50bHkgbGltaXRlZCB0byBMaW5rIGFuZCBzY3JpcHQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHVybFxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcmV0dXJuc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh1cmwsIHR5cGUpIHtcbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh0eXBlID09PSBfY29uc3RhbnRzLkZJTEVfQ1NTKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBlbGVtZW50LnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBlbGVtZW50LnR5cGUgPSBfY29uc3RhbnRzLkZJTEVfQ1NTO1xuICAgIGVsZW1lbnQuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBfY29uc3RhbnRzLkZJTEVfSkFWQVNDUklQVCkge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBlbGVtZW50LnR5cGUgPSBfY29uc3RhbnRzLkZJTEVfSkFWQVNDUklQVDtcbiAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGRldGVybWluZXMgdGhlIGZpbGUgdHlwZSBiYXNlZCBvbiB0aGUgVVJMIHBhc3NlZFxuICogY3VycmVudGx5IG9ubHkgc3VwcG9ydCBKUyBhbmQgQ1NTIGZpbGVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdXJsXG4gKiBAcmV0dXJuc1xuICovXG5cblxuZnVuY3Rpb24gZGV0ZXJtaW5lRmlsZVR5cGUodXJsKSB7XG4gIHZhciBleHRlbnNpb24gPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLicpKTtcblxuICBpZiAoZXh0ZW5zaW9uID09PSAnLmpzJykge1xuICAgIHJldHVybiBfY29uc3RhbnRzLkZJTEVfSkFWQVNDUklQVDtcbiAgfSBlbHNlIGlmIChleHRlbnNpb24gPT09ICcuY3NzJykge1xuICAgIHJldHVybiBfY29uc3RhbnRzLkZJTEVfQ1NTO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/util.js\n");

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