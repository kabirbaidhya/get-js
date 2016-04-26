
import {isString, isArray} from './util';

let resolved = {};

function isResolved(src) {
    return (
        resolved[src] === true ||
        !!document.querySelector(`script[src="${src}"]`)
    );
}

function loadScript(src) {
    if (isResolved(src)) {
        return Promise.resolve(true);
    }

    var s = document.createElement('script');

    var promise = new Promise(function(resolve, reject) {
        s.src = src;
        s.async = false;
        s.type = 'text/javascript';

        s.onload = function() {
            resolve(resolved[src] = true);
        };

        s.onerror = reject;
    });

    var parent = document.body || document.head || document;
    parent.appendChild(s);

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
