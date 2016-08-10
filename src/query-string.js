lucida.queryString = {}

lucida.queryString.toObject = function (queryString) {
	var object = {}

	queryString = queryString || document.location.search
	queryString = queryString.indexOf('?') === 0 ? queryString.substring(1) : queryString
	queryString
		.split('&')
		.forEach(function(qs){
			qs = qs.split('=')
			object[qs[0]] = decodeURIComponent(qs[1])
		})

	return object
}

lucida.queryString.getValue = function(param, queryString) {
	var value = ''
	
	queryString = queryString || document.location.search	
	queryString
		.split('&')
		.find(function(qs){
			if(qs.indexOf(param + '=') > -1){
				qs = qs.split('=')
				value = decodeURIComponent(qs[1])
				return value
			}
		})

	return value

	// var object = lucida.queryString.toObject(queryString)
	// return object[param]
}