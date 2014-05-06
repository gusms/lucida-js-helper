class queryStringManager
	constructor: ->
		@query = document.location.search

	toObject: (queryString = @query) ->
		object = {}
		queryString = if queryString.indexOf("?") is 0 then queryString.substring(1) else queryString
		queryString = queryString.split("&")
		
		for param in queryString
			t = param.split("=")
			object[t[0]] = t[1]

		return object

	getValue: (param, queryString = @query) ->
		object = @toObject(query)
		return object[param]