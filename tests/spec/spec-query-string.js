describe('Modulo lucida.queryString', function() {

	describe('lucida.queryString.toObject', function() {
		it('Deve retornar um objeto', function() {
			var qs = '?bla=bla&ble=ble'

			expect(typeof lucida.queryString.toObject(qs)).toEqual('object')
		})

		it('Deve verificar se o valor for null, ler a url', function() {
			expect(typeof lucida.queryString.toObject()).toEqual('object')
		})

		it('Deve conter todos os parâmetros da url', function() {
			var qs = '?bla=bla&ble=ble'

			expect(JSON.stringify(lucida.queryString.toObject(qs))).toEqual('{"bla":"bla","ble":"ble"}')
		})
	})

})