lucida.string = {}

lucida.string.sanitize = function(str, only_word_character) {
    if(typeof str !== 'string') return ''

    str = str
        .trim(str)
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
        str = str
            .replace(/^\d+|\d+$/g, '')
            .replace(/\d+/g, '_')
            .replace(/_+/g, '_')
    }

    return str
}

lucida.string.trimRight = function(str) {
    if(typeof str !== 'string') return ''
    return str.replace(/\s+$/g, '')
}

lucida.string.trimLeft = function(str) {
    if(typeof str !== 'string') return ''
    return str.replace(/^\s+/, '')
}

lucida.string.trim = function(str) {
    if(typeof str !== 'string') return ''
    str = String.prototype.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	return str;
}

lucida.string.replaceAll = function(str, token, newtoken) {
    if(typeof str !== 'string') return ''
    return str.split(token).join(newtoken)
}
