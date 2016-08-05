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

	var object;
			if (queryString === null) {
				queryString = this.query;
			}
			object = this.toObject(queryString);
	return object[param];

	// return 'blas'
}

