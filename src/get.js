import { isString, isArray, isFunction } from './util';

const resolved = {};

/**
 * Load javascript url asynchronously.
 *
 * @param {*} url               The javascript url to load.
 * @param {*} callback          Callback function to invoke on success.
 * @param {*} errorCallback     Callback function to invoke on error.
 * @returns {void}
 */
function loadScript(url, callback, errorCallback) {
  const invokeCallback = () => {
    resolved[url] = true;

    if (isFunction(callback)) {
      callback();
    }
  };

  if (resolved[url]) {
    invokeCallback();

    return;
  }

  const script = document.createElement('script');

  script.type = 'text/javascript';

  if (script.readyState) {
    // IE
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        invokeCallback();
      }
    };
  } else {
    // Others
    script.onload = function() {
      invokeCallback();
    };
  }

  script.onerror = function(e) {
    resolved[url] = false;
    console.error(e);

    if (isFunction(errorCallback)) {
      errorCallback();
    }
  };

  script.src = url;
  const parent = document.body || document.head || document;

  parent.appendChild(script);
}

/**
 * Load javascript url (or a list of urls) asynchronously
 * and return a Promise instance.
 *
 * @param {*} src
 * @returns {Promise}
 */
function get(src) {
  if (isString(src)) {
    return new Promise((resolve, reject) => {
      loadScript(src, () => resolve(true), () => reject());
    });
  }

  if (isArray(src)) {
    let p = Promise.resolve(true);

    src.forEach(url => {
      p = p.then(() => get(url));
    });

    return p;
  }

  throw new Error('Invalid argument for get()');
}

export default get;
