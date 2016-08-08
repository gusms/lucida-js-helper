'use strict'

lucida.cookie = {}

lucida.cookie.get = function(key) {
    if(typeof key === 'string'){
        var cookie = '; ' + document.cookie,
    		index,
    		end;

    	key = '; ' + key + '=';
    	index = cookie.indexOf(key);
    	if (index !== -1) {
    		cookie = cookie.substring(index + key.length);
    		end = cookie.indexOf(';');
    		return window.unescape(end !== -1 ? cookie.substring(0, end) : cookie);
    	}
    }
	return null;
}

lucida.cookie.set = function(name, value, opts) {
    if(name.length > 0){
    	var cookie,
            exdate;

            opts = typeof opts === 'object' ? opts : {
        		exdays: opts
        	};

        	cookie = '' + name + '=' + (window.escape(value));
        	if (opts.exdays) {
        		exdate = new Date();
        		exdate.setDate(exdate.getDate() + opts.exdays);
        		cookie += '; expires=' + (exdate.toUTCString());
        	}
        	if (opts.domain) {
        		cookie += '; domain=' + opts.domain;
        	}
        	cookie += '; path=' + (opts.path || '/');
        	document.cookie = cookie;
    	return cookie;
    }
    return null
}

lucida.cookie.remove = function(name) {
    var value = lucida.cookie.get(name);
    document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    return value;
}

lucida.cookie.toObject = function() {
    if(document.cookie.length > 0){
        var cookie, cookies, object, t, _i, _len;
        object = {};
        cookies = document.cookie.split('; ');
        for (_i = 0, _len = cookies.length; _i < _len; _i++) {
            cookie = cookies[_i];
            t = cookie.split('=');
            object[t[0]] = decodeURIComponent(t[1]);
        }
        return object;
    }

    return null
};
