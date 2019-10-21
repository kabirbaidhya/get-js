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
 * Creates element based on type passed
 * currently limited to Link and script element.
 *
 * @param {string} url
 * @param {string} type
 * @returns {HTMLElement}
 */
export function createElement(url, type) {
  if (type === FILE_CSS) {
    const element = document.createElement('link');

    element.rel = 'stylesheet';
    element.type = FILE_CSS;
    element.href = url;

    return element;
  }

  if (type === FILE_JAVASCRIPT) {
    const element = document.createElement('script');

    element.type = FILE_JAVASCRIPT;
    element.src = url;

    return element;
  }

  return null;
}

/**
 * Determines the file mime-type based on the url / path provided.
 *
 * @param {string} url
 * @returns {string}
 */
export function determineFileType(url) {
  const extension = url.substring(url.lastIndexOf('.'));

  switch (extension) {
    case '.js':
      return FILE_JAVASCRIPT;

    case '.css':
      return FILE_CSS;

    default:
      return null;
  }
}
