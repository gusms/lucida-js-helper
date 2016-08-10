describe('Modulo lucida.queryString', function() {
	var qs
	var p

	beforeEach(function(){
		qs = '?bla=blas&ble=bles'
		p = 'bla'
	})

	describe('lucida.queryString.toObject', function() {

		it('Deve retornar um objeto', function() {
			expect(typeof lucida.queryString.toObject(qs)).toEqual('object')
		})

		it('Deve verificar se o valor for null, ler a url', function() {
			expect(typeof lucida.queryString.toObject()).toEqual('object')
		})

		it('Deve conter todos os parâmetros da url', function() {
			expect(JSON.stringify(lucida.queryString.toObject(qs))).toEqual('{"bla":"blas","ble":"bles"}')
		})

		it('Deve verificar se decoda os valores dos parâmetros', function() {
			var qs2 = '?bla=blas&ble=bles&bli=cora%C3%A7%C3%A3o%20felpudo&frango=p%C3%A3o'

			expect(JSON.stringify(lucida.queryString.toObject(qs2))).toEqual('{"bla":"blas","ble":"bles","bli":"coração felpudo","frango":"pão"}')
		})

	})

	describe('lucida.queryString.getValue', function() {

		it('Deve retornar uma string', function(){
			expect(typeof lucida.queryString.getValue(p, qs)).toEqual('string')
		})

		it('Deve retornar o valor do parâmetro', function() {
			expect(lucida.queryString.getValue(p, qs)).toEqual('blas')
		})

		it('Deve retornar o valor do parâmetro decodificado', function() {
			var p2 = 'bli'
			var qs2 = '?bla=blas&ble=bles&bli=cora%C3%A7%C3%A3o%20felpudo&frango=p%C3%A3o'

			expect(lucida.queryString.getValue(p2, qs2)).toEqual('coração felpudo')
		})

		it('Deve retornar valor do primeiro parâmetro sem interferência do caracter "?"', function() {
			expect(lucida.queryString.getValue(p, qs)).toEqual('blas')
		})

		it('Deve retornar uma string em branco caso não exista o parâmetro', function() {
			var p3 = 'outro'

			expect(lucida.queryString.getValue(p3, qs)).toEqual('')
		})

		it('Deve retornar uma string em branco caso não exista valor', function() {
			var qs3 = '?bla='

			expect(lucida.queryString.getValue(p, qs3)).toEqual('')
		})
	})

})