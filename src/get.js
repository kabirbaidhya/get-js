import { FILE_CSS, FILE_JAVASCRIPT } from './constants';
import { isString, isArray, isFunction, createElement, determineFileType } from './util';

const resolved = {};

/**
 * Load javascript url asynchronously.
 *
 * @param {*} url               The javascript url to load.
 * @param {*} type              Url type 'text/css or text/javascript'.
 * @param {*} callback          Callback function to invoke on success / failure.
 * @returns {void}
 */
function loadScript(url, type = FILE_JAVASCRIPT, callback = () => {}) {
  // Validate url.
  if (!url) {
    return callback(new Error(`Invalid url provided '${url}'.`));
  }

  // Validate url.
  if (!type) {
    return callback(new Error(`Invalid file type provided '${type}'.`));
  }

  // Invokes the callback function and marks the url as resolved.
  const invokeCallback = () => {
    resolved[url] = true;

    if (isFunction(callback)) {
      return callback(false, true);
    }
  };

  // If url is already fetched return
  if (resolved[url]) {
    return invokeCallback();
  }

  // Create element based on type
  const element = createElement(url, type);

  // Assign the function to be called on file loaded.
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

  // On error invoke the callback with error.
  element.onerror = e => {
    resolved[url] = false;
    console.error('Error', e);

    if (isFunction(callback)) {
      return callback(e);
    }
  };

  // Append the element to the parent element.
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
export function get(src, type) {
  // If `src` is a string - it is a single url.
  if (isString(src)) {
    type = type || determineFileType(src);

    return new Promise((resolve, reject) => {
      loadScript(src, type, (err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result);
      });
    });
  }

  // If `src` is an array - it is a list of urls
  // Recursively iterate over the array to get all of them.
  if (isArray(src)) {
    let p = Promise.resolve(true);

    src.forEach(url => {
      p = p.then(() => get(url, type));
    });

    return p;
  }

  throw new Error('Invalid argument for get()');
}
