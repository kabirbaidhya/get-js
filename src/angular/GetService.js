import get from './../get';

GetService.$inject = ['$q'];

/**
 * An angular service function for get-js.
 *
 * @param {*} $q
 * @returns {*}
 */
export default function GetService($q) {
    return (src, opts) => $q.resolve(get(src, opts));
}
