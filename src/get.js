import { isString, isArray, isFunction } from './util';

let resolved = {};

function loadScript(url, callback, errorCallback) {
    var invokeCallback = function() {
        resolved[url] = true;

        if (isFunction(callback)) {
            callback();
        }
    };

    if (resolved[url]) {
        invokeCallback();

        return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';

    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                invokeCallback();
            }
        };
    } else {
        //Others
        script.onload = function() {
            invokeCallback();
        };
    }

    script.onerror = function(e) {
        resolved[url] = false;
        console.log('error', e);
        if (isFunction(errorCallback)) {
            errorCallback();
        }
    };

    script.src = url;
    var parent = document.body || document.head || document;
    parent.appendChild(script);
}

function get(src, opts) {
    if (isString(src)) {
        return new Promise((resolve, reject) => {
            loadScript(src, () => resolve(true), () => reject());
        });
    } else if (isArray(src)) {
        let p = Promise.resolve(true);

        src.forEach(url => {
            p = p.then(() => get(url));
        });

        return p;
    }

    throw new Error('Invalid argument for get()');
}

export default get;
