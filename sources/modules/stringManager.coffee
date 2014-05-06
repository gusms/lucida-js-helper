class stringManager
	constructor: ->
	
	trimLeft: (str) ->
		return str.replace(/\s+$/, '')
	
	trimRight: (str) ->
		return str.replace(/^\s+/, '')
	
	trim: (str) ->
		str = if String.prototype.trim then str.trim() else str.replace(/^\s+|\s+$/g, '')
		return str

	sanitize: (str, only_word_character) ->
		str = str.toLowerCase()
		str = @trim(str)
		str = str.replace(/\s+/g, ' ')
		str = str.replace(/\s+/g, '_')
		str = str.replace(/[áàâãåäæª]/g, 'a')
		str = str.replace(/[éèêëЄ€]/g, 'e')
		str = str.replace(/[íìîï]/g, 'i')
		str = str.replace(/[óòôõöøº]/g, 'o')
		str = str.replace(/[úùûü]/g, 'u')
		str = str.replace(/[ç¢©]/g, 'c')

		if only_word_character
			str = str.replace(/[^a-z0-9\-]/g, '_')
			str = str.replace(/_+/g, '_')

		return str

	replaceAll: (str, token, newtoken) ->
		str = str.replace(token, newtoken) while str.indexOf(token) isnt -1
			