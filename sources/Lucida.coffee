class Lucida
	constructor: ->
		@cookie = new cookieManager()
		@string = new stringManager()
		@queryString = new queryStringManager()

window.lucida = new Lucida()