window["get"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/get.js */ \"./lib/get.js\").default;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldC8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9nZXQuanMnKS5kZWZhdWx0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./lib/get.js":
/*!********************!*\
  !*** ./lib/get.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\nfunction _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\nvar resolved = {};\n/**\n * Load javascript url asynchronously\n *\n * @param {*} url               The javascript url to load.\n * @param {*} type              Url type 'text/css or text/javascript'\n * @param {*} callback          Callback function to invoke on success.\n * @param {*} errorCallback     Callback function to invoke on error.\n * @returns {void}\n */\n\nfunction loadScript(url) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text/javascript';\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n  var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};\n\n  // Checks for empty/null values\n  if (!url || !type) {\n    errorCallback();\n  }\n  /**\n   * This Function Calls Callback and adds the url to resolved list\n   */\n\n\n  var invokeCallback = function invokeCallback() {\n    resolved[url] = true;\n\n    if ((0, _util.isFunction)(callback)) {\n      callback();\n      return;\n    }\n  }; // If url is already fetched return\n\n\n  if (resolved[url]) {\n    invokeCallback();\n    return;\n  } // Create element based on type\n\n\n  var element = (0, _util.createElement)(url, type); // Assign the Function to be called on file loaded\n\n  if (element.readyState) {\n    /*\n     * If the Browser is IE\n     * Pass in the callback function on state changed - similar to onLoad\n     */\n    element.onreadystatechange = function () {\n      if (element.readyState === 'loaded' || element.readyState === 'complete') {\n        element.onreadystatechange = null;\n        invokeCallback();\n      }\n    };\n  } else {\n    element.onload = invokeCallback;\n  } // Assign the error callback function to be called on error occurance\n\n\n  element.onerror = function (e) {\n    resolved[url] = false;\n    console.error(e);\n\n    if ((0, _util.isFunction)(errorCallback)) {\n      errorCallback();\n    }\n  }; // Append the elemnt to the parent element\n\n\n  var parent = document.body || document.head || document;\n\n  if (type === 'text/css') {\n    parent = (_readOnlyError(\"parent\"), document.head);\n  }\n\n  parent.appendChild(element);\n}\n/**\n * Load javascript url (or a list of urls) asynchronously\n * and return a Promise instance.\n *\n * @param {*} src\n * @param {*} type\n * @returns {Promise}\n */\n\n\nfunction get(src, type) {\n  if ((0, _util.isString)(src)) {\n    // If src is string url\n    console.log(type);\n    type = type || (0, _util.determinFileType)(src);\n    return new Promise(function (resolve, reject) {\n      loadScript(src, type, function () {\n        return resolve(true);\n      }, function () {\n        return reject();\n      });\n    });\n  } else if ((0, _util.isArray)(src)) {\n    // else if src data is arrray by recursion loop all the array and sub array\n    var p = Promise.resolve(true);\n    src.forEach(function (url) {\n      p = p.then(function () {\n        return get(url, type);\n      });\n    });\n    return p;\n  }\n\n  throw new Error('Invalid argument for get()');\n}\n\nvar _default = get;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2V0Ly4vbGliL2dldC5qcz9hM2E3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHsgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7IH1cblxudmFyIHJlc29sdmVkID0ge307XG4vKipcbiAqIExvYWQgamF2YXNjcmlwdCB1cmwgYXN5bmNocm9ub3VzbHlcbiAqXG4gKiBAcGFyYW0geyp9IHVybCAgICAgICAgICAgICAgIFRoZSBqYXZhc2NyaXB0IHVybCB0byBsb2FkLlxuICogQHBhcmFtIHsqfSB0eXBlICAgICAgICAgICAgICBVcmwgdHlwZSAndGV4dC9jc3Mgb3IgdGV4dC9qYXZhc2NyaXB0J1xuICogQHBhcmFtIHsqfSBjYWxsYmFjayAgICAgICAgICBDYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb24gc3VjY2Vzcy5cbiAqIEBwYXJhbSB7Kn0gZXJyb3JDYWxsYmFjayAgICAgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uIGVycm9yLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwpIHtcbiAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0ZXh0L2phdmFzY3JpcHQnO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZ1bmN0aW9uICgpIHt9O1xuICB2YXIgZXJyb3JDYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZnVuY3Rpb24gKCkge307XG5cbiAgLy8gQ2hlY2tzIGZvciBlbXB0eS9udWxsIHZhbHVlc1xuICBpZiAoIXVybCB8fCAhdHlwZSkge1xuICAgIGVycm9yQ2FsbGJhY2soKTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBGdW5jdGlvbiBDYWxscyBDYWxsYmFjayBhbmQgYWRkcyB0aGUgdXJsIHRvIHJlc29sdmVkIGxpc3RcbiAgICovXG5cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmdW5jdGlvbiBpbnZva2VDYWxsYmFjaygpIHtcbiAgICByZXNvbHZlZFt1cmxdID0gdHJ1ZTtcblxuICAgIGlmICgoMCwgX3V0aWwuaXNGdW5jdGlvbikoY2FsbGJhY2spKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgZmV0Y2hlZCByZXR1cm5cblxuXG4gIGlmIChyZXNvbHZlZFt1cmxdKSB7XG4gICAgaW52b2tlQ2FsbGJhY2soKTtcbiAgICByZXR1cm47XG4gIH0gLy8gQ3JlYXRlIGVsZW1lbnQgYmFzZWQgb24gdHlwZVxuXG5cbiAgdmFyIGVsZW1lbnQgPSAoMCwgX3V0aWwuY3JlYXRlRWxlbWVudCkodXJsLCB0eXBlKTsgLy8gQXNzaWduIHRoZSBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZmlsZSBsb2FkZWRcblxuICBpZiAoZWxlbWVudC5yZWFkeVN0YXRlKSB7XG4gICAgLypcbiAgICAgKiBJZiB0aGUgQnJvd3NlciBpcyBJRVxuICAgICAqIFBhc3MgaW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIHN0YXRlIGNoYW5nZWQgLSBzaW1pbGFyIHRvIG9uTG9hZFxuICAgICAqL1xuICAgIGVsZW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsZW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZWxlbWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIGVsZW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQub25sb2FkID0gaW52b2tlQ2FsbGJhY2s7XG4gIH0gLy8gQXNzaWduIHRoZSBlcnJvciBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXJyb3Igb2NjdXJhbmNlXG5cblxuICBlbGVtZW50Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc29sdmVkW3VybF0gPSBmYWxzZTtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuXG4gICAgaWYgKCgwLCBfdXRpbC5pc0Z1bmN0aW9uKShlcnJvckNhbGxiYWNrKSkge1xuICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIH1cbiAgfTsgLy8gQXBwZW5kIHRoZSBlbGVtbnQgdG8gdGhlIHBhcmVudCBlbGVtZW50XG5cblxuICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50O1xuXG4gIGlmICh0eXBlID09PSAndGV4dC9jc3MnKSB7XG4gICAgcGFyZW50ID0gKF9yZWFkT25seUVycm9yKFwicGFyZW50XCIpLCBkb2N1bWVudC5oZWFkKTtcbiAgfVxuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cbi8qKlxuICogTG9hZCBqYXZhc2NyaXB0IHVybCAob3IgYSBsaXN0IG9mIHVybHMpIGFzeW5jaHJvbm91c2x5XG4gKiBhbmQgcmV0dXJuIGEgUHJvbWlzZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0geyp9IHNyY1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldChzcmMsIHR5cGUpIHtcbiAgaWYgKCgwLCBfdXRpbC5pc1N0cmluZykoc3JjKSkge1xuICAgIC8vIElmIHNyYyBpcyBzdHJpbmcgdXJsXG4gICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgdHlwZSA9IHR5cGUgfHwgKDAsIF91dGlsLmRldGVybWluRmlsZVR5cGUpKHNyYyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxvYWRTY3JpcHQoc3JjLCB0eXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWwuaXNBcnJheSkoc3JjKSkge1xuICAgIC8vIGVsc2UgaWYgc3JjIGRhdGEgaXMgYXJycmF5IGJ5IHJlY3Vyc2lvbiBsb29wIGFsbCB0aGUgYXJyYXkgYW5kIHN1YiBhcnJheVxuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHAgPSBwLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHVybCwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBmb3IgZ2V0KCknKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/get.js\n");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isArray = isArray;\nexports.isString = isString;\nexports.isFunction = isFunction;\nexports.createElement = createElement;\nexports.determinFileType = determinFileType;\n\n/**\n * Checks if the given value is an array.\n *\n * @param {*} value\n * @returns {boolean}\n */\nfunction isArray(value) {\n  return Object.prototype.toString.call(value) === '[object Array]';\n}\n/**\n * Checks if the given value is a string.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isString(value) {\n  return typeof value === 'string';\n}\n/**\n * Checks if the given value is a function.\n *\n * @param {*} value\n * @returns {boolean}\n */\n\n\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\n/**\n *  This Function Creates element based on type passed\n *  currently limited to Link and script element\n *\n * @param {*} url\n * @param {*} type\n * @returns\n */\n\n\nfunction createElement(url, type) {\n  var element = null;\n\n  if (type === 'text/css') {\n    element = document.createElement('link');\n    element.rel = 'stylesheet';\n    element.type = 'text/css';\n    element.href = url;\n  } else if (type === 'text/javascript') {\n    element = document.createElement('script');\n    element.type = 'text/javascript';\n    element.src = url;\n  }\n\n  return element;\n}\n/**\n * This function gives script type/ link type in HTML based on url link provided\n *\n * @export\n * @param {*} url\n * @returns\n */\n\n\nfunction determinFileType(url) {\n  var extension = url.substring(url.lastIndexOf('.'));\n\n  if (extension === '.js') {\n    return 'text/javascript';\n  } else if (extension === '.css') {\n    return 'text/css';\n  } else return null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldC8uL2xpYi91dGlsLmpzP2EzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5leHBvcnRzLmRldGVybWluRmlsZVR5cGUgPSBkZXRlcm1pbkZpbGVUeXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLyoqXG4gKiAgVGhpcyBGdW5jdGlvbiBDcmVhdGVzIGVsZW1lbnQgYmFzZWQgb24gdHlwZSBwYXNzZWRcbiAqICBjdXJyZW50bHkgbGltaXRlZCB0byBMaW5rIGFuZCBzY3JpcHQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7Kn0gdXJsXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEByZXR1cm5zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHVybCwgdHlwZSkge1xuICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHR5cGUgPT09ICd0ZXh0L2NzcycpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGVsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGVsZW1lbnQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgZWxlbWVudC5ocmVmID0gdXJsO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2l2ZXMgc2NyaXB0IHR5cGUvIGxpbmsgdHlwZSBpbiBIVE1MIGJhc2VkIG9uIHVybCBsaW5rIHByb3ZpZGVkXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSB1cmxcbiAqIEByZXR1cm5zXG4gKi9cblxuXG5mdW5jdGlvbiBkZXRlcm1pbkZpbGVUeXBlKHVybCkge1xuICB2YXIgZXh0ZW5zaW9uID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy4nKSk7XG5cbiAgaWYgKGV4dGVuc2lvbiA9PT0gJy5qcycpIHtcbiAgICByZXR1cm4gJ3RleHQvamF2YXNjcmlwdCc7XG4gIH0gZWxzZSBpZiAoZXh0ZW5zaW9uID09PSAnLmNzcycpIHtcbiAgICByZXR1cm4gJ3RleHQvY3NzJztcbiAgfSBlbHNlIHJldHVybiBudWxsO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/util.js\n");

/***/ })

/******/ });