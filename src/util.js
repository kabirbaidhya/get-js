import { FILE_CSS, FILE_JAVASCRIPT } from './constants';

/**
 * Checks if the given value is an array.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Checks if the given value is a string.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * Checks if the given value is a function.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 *  This Function Creates element based on type passed
 *  currently limited to Link and script element.
 *
 * @param {*} url
 * @param {*} type
 * @returns
 */
export function createElement(url, type) {
  let element = null;

  if (type === FILE_CSS) {
    element = document.createElement('link');
    element.rel = 'stylesheet';
    element.type = FILE_CSS;
    element.href = url;

    return element;
  } else if (type === FILE_JAVASCRIPT) {
    element = document.createElement('script');
    element.type = FILE_JAVASCRIPT;
    element.src = url;

    return element;
  }

  return element;
}

/**
 * This Function determines the file type based on the URL passed
 * currently only support JS and CSS files.
 *
 * @param {*} url
 * @returns
 */
export function determineFileType(url) {
  const extension = url.substring(url.lastIndexOf('.'));

  if (extension === '.js') {
    return FILE_JAVASCRIPT;
  } else if (extension === '.css') {
    return FILE_CSS;
  } else {
    return null;
  }
}
