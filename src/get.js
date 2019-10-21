import { FILE_CSS, FILE_JAVASCRIPT } from './constants';
import { isString, isArray, isFunction, createElement, determineFileType } from './util';

const resolved = {};

/**
 * Load javascript url asynchronously.
 *
 * @param {*} url               The javascript url to load.
 * @param {*} type              Url type 'text/css or text/javascript'.
 * @param {*} callback          Callback function to invoke on success.
 * @param {*} errorCallback     Callback function to invoke on error.
 * @returns {void}
 */
function loadScript(url, type = FILE_JAVASCRIPT, callback = () => {}, errorCallback = () => {}) {
  // Checks for empty/null values
  if (!url || !type) {
    errorCallback();
  }

  /**
   * This Function Calls Callback and adds the url to resolved list.
   */
  const invokeCallback = () => {
    resolved[url] = true;

    if (isFunction(callback)) {
      callback();

      return;
    }
  };

  // If url is already fetched return
  if (resolved[url]) {
    invokeCallback();

    return;
  }

  // Create element based on type
  const element = createElement(url, type);

  // Assign the Function to be called on file loaded
  if (element.readyState) {
    /*
     * If the Browser is IE
     * Pass in the callback function on state changed - similar to onLoad
     */
    element.onreadystatechange = () => {
      if (element.readyState === 'loaded' || element.readyState === 'complete') {
        element.onreadystatechange = null;
        invokeCallback();
      }
    };
  } else {
    element.onload = invokeCallback;
  }

  // Assign the error callback function to be called on error occurance
  element.onerror = e => {
    resolved[url] = false;
    console.error(e);

    if (isFunction(errorCallback)) {
      errorCallback();
    }
  };

  // Append the elemnt to the parent element
  let parent = document.body || document.head || document;

  if (type === FILE_CSS) {
    parent = document.head;
  }
  parent.appendChild(element);
}

/**
 * Load javascript url (or a list of urls) asynchronously
 * and return a Promise instance.
 *
 * @param {*} src
 * @param {*} type
 * @returns {Promise}
 */
function get(src, type) {
  if (isString(src)) {
    // If src is string url
    type = type || determineFileType(src);

    return new Promise((resolve, reject) => {
      loadScript(src, type, () => resolve(true), () => reject());
    });
  } else if (isArray(src)) {
    // else if src data is arrray by recursion loop all the array and sub array
    let p = Promise.resolve(true);

    src.forEach(url => {
      p = p.then(() => get(url, type));
    });

    return p;
  }

  throw new Error('Invalid argument for get()');
}

export default get;
