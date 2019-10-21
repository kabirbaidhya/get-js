import { isString, isArray, isFunction } from "./util";

let resolved = {};

/**
 * Load javascript url asynchronously.
 *
 * @param {*} url               The javascript url to load.
 * @param {*} type              Url type 'text/css or text/javascript'
 * @param {*} callback          Callback function to invoke on success.
 * @param {*} errorCallback     Callback function to invoke on error.
 * @returns {void}
 */
function loadScript(
  url,
  type = "text/javascript",
  callback = () => {},
  errorCallback = () => {}
) {
  //fail safe check for empty/null values
  if (!url || !type) {
    errorCallback();
  }

  /**
   * Function to Call Callback given
   *
   */
  let invokeCallback = () => {
    resolved[url] = true;

    if (isFunction(callback)) {
      callback();
      return;
    }
  };

  //if url already fetched return
  if (resolved[url]) {
    invokeCallback();

    return;
  }

  //create element based on type
  let element = null;

  if (type === "text/css") {
    element = document.createElement("link");
    element.rel = "stylesheet";
    element.type = "text/css";
    element.href = url;
  } else if (type === "text/javascript") {
    element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;
  }

  if (element.readyState) {
    // IE
    element.onreadystatechange = () => {
      if (
        element.readyState === "loaded" ||
        element.readyState === "complete"
      ) {
        element.onreadystatechange = null;
        invokeCallback();
      }
    };
  } else {
    // assign invoke call back function to onload
    element.onload = invokeCallback;
  }

  element.onerror = () => {
    resolved[url] = false;
    if (isFunction(errorCallback)) {
      errorCallback();
    }
  };

  //append to parent element
  let parent = document.body || document.head || document;
  if (type === "text/css") {
    parent = document.head;
  }
  parent.appendChild(element);
}

/**
 * Load javascript url (or a list of urls) asynchronously
 * and return a Promise instance.
 *
 * @param {*} src
 * @param {*} opts
 * @returns {Promise}
 */
function get(src, type, opts) {
  if (isString(src)) {
    //if single src

    //check if type is given by user otherwise self set based on extension
    if (!type) {
      let extension = src.substring(src.lastIndexOf("."));
      if (extension === ".js") {
        type = "text/javascript";
      } else if (extension === ".css") {
        type = "text/css";
      }
    }

    return new Promise((resolve, reject) => {
      loadScript(src, type, () => resolve(true), () => reject());
    });
  } else if (isArray(src)) {
    //else if src data is arrray by recursive loop all array and sub array will be solved
    let p = Promise.resolve(true);

    src.forEach(url => {
      p = p.then(() => get(url));
    });

    return p;
  }

  throw new Error("Invalid argument for get()");
}

export default get;
