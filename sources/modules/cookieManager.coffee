class cookieManager
	constructor: ->
		
	get: (key) ->
		cookie = "; #{document.cookie}"
		key = "; #{key}="
		index = cookie.indexOf(key)

		if index isnt -1
			cookie = cookie.substring(index + key.length)
			end = cookie.indexOf(';')
			return window.unescape( if end isnt -1 then cookie.substring(0, end) else cookie )
		return null

	set: (name, value, opts) ->
		opts = if typeof opts is "object" then opts else
			exdays: opts

		cookie = "#{name}=#{window.escape(value)}"
		
		if opts.exdays
			exdate = new Date()
			exdate.setDate(exdate.getDate() + opts.exdays)
			cookie += "; expires=#{exdate.toUTCString()}"

		if opts.domain
			cookie += "; domain=#{opts.domain}"

		cookie += "; path=#{(opts.path or '/')}"

		document.cookie = cookie

	remove: (name) ->
		value = @get name
		@set(name, "", -1)
		return value

	toObject: () ->
		object = {}
		cookies = document.cookie.split("; ")
		
		for cookie in cookies
			t = cookie.split("=")
			object[t[0]] = decodeURIComponent(t[1])

		return object