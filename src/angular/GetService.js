import get from './../get';

GetService.$inject = ['$q'];

/**
 * An angular service function for get-js.
 *
 * @param {*} $q
 * @returns {*}
 */
export default function GetService($q) {
  return (src, type) => $q.resolve(get(src, type));
}
