'use strict'

lucida.cookie = {}

lucida.cookie.get = function(key) {
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
	return null;
}

// lucida.cookie.set

// lucida.cookie.remove

// lucida.cookie.toObject
