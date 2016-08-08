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
	queryString = queryString.indexOf('?') === 0 ? queryString.substring(1) : queryString
	
	value = queryString
		.split('&')
		.find(function(qs){
			if(qs.indexOf(this.param + '=') > -1){  //`${this.param}=`
				qs = qs.split('=')
				value = decodeURIComponent(qs[1])
				return value
			}
			else{
				value = ''
				return value
			}
		})

		console.log(queryString, value)


		// .forEach(function(qs, param){
		// 	qs = qs.split('=')
		// 	if(qs[0] == param) value = decodeURIComponent(qs[1])
		// })

	// console.log(value)
	// value
	// 	.split('=')

	// 	// .find(function(qs){
	// 	// 	return qs.indexOf(this.param + '=') > -1  //`${this.param}=`
	// 	// })

		
	// console.log(queryString, value)

	return 	value

	// var object = lucida.queryString.toObject(queryString)

	// return object[param]
}