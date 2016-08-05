'use strict'

lucida.string = {}

lucida.string.sanitize = function(str, only_word_character) {
    if(typeof str !== 'string') return ''

    str =str.trim(str)
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .replace(/\s+/g, '_')
            .replace(/[áàâãåäæª]/g, 'a')
            .replace(/[éèêëЄ€]/g, 'e')
            .replace(/[íìîï]/g, 'i')
            .replace(/[óòôõöøº]/g, 'o')
            .replace(/[úùûü]/g, 'u')
            .replace(/[ç¢©]/g, 'c')

    if (only_word_character) {
        str = str.replace(/^\d+|\d+$/g, '')
                 .replace(/\d+/g, '_')
                 .replace(/_+/g, '_')
    }

    return str
}

lucida.string.trimRight = function(str) {
    return str.replace(/\s+$/g, '')
}

lucida.string.trimLeft = function(str) {
    return str.replace(/^\s+/, '')
}

lucida.string.trim = function(str) {
    str = String.prototype.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	return str;
}

lucida.string.replaceAll = function(str, token, newtoken) {
    while (str.indexOf(token) !== -1) {
		str = str.replace(token, newtoken);
	}
	return str;
}
