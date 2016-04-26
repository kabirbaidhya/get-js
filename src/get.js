var resolved = {};

import {isString, isArray} from './util';

function loadScript(src) {
    if (resolved[src]) {
        return Promise.resolve(resolved[src]);
    }

    var s = document.createElement('script');

    var promise = new Promise(function(resolve, reject) {

        s.src = src;
        s.async = false;
        s.type = 'text/javascript';

        s.onload = function() {
            resolved[src] = true;
            resolve(resolved[src]);
        };

        s.onerror = reject;
    });

    document.body.appendChild(s);

    return promise;
}

function get(src, opts) {
    if (isString(src)) {
        return loadScript(src);
    } else if (isArray(src) && src.length > 0) {
        var p;

        src.forEach(function(url) {
            p = p ? p.then(get(url)) : get(url);
        });

        return p;
    } else {
        throw new Error('Invalid argument for get()');
    }
}

export default get;
