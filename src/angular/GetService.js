
import get from './../get';

GetService.$inject = ['$q'];

export default function GetService($q) {
    return (src, opts) => $q.resolve(get(src, opts));
}


