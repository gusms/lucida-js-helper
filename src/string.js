'use strict'

lucida.string = {

    sanitize: function(str, only_word_character) {

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



}
