import { ELEMENT_TYPE } from './constants';

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

  if (type === ELEMENT_TYPE.CSS) {
    element = document.createElement('link');
    element.rel = 'stylesheet';
    element.type = ELEMENT_TYPE.CSS;
    element.href = url;

    return element;
  } else if (type === ELEMENT_TYPE.JS) {
    element = document.createElement('script');
    element.type = ELEMENT_TYPE.JS;
    element.src = url;

    return element;
  }

  return element;
}

/**
 *
 *
 * @param {*} url
 * @returns
 */
export function determineFileType(url) {
  const extension = url.substring(url.lastIndexOf('.'));

  if (extension === '.js') {
    return ELEMENT_TYPE.JS;
  } else if (extension === '.css') {
    return ELEMENT_TYPE.CSS;
  } else {
    return null;
  }
}
