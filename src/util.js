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
