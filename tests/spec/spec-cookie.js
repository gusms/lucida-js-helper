describe('Módulo: lucida.cookie', function() {

    describe('lucida.cookie.get', function(){

        beforeEach(function() {
            document.cookie = 'yellow=belt; '
        })

        afterEach(function() {
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        })

        it('Deve buscar por um cookie pelo seu nome', function() {
            var cookie = 'yellow'
            expect(lucida.cookie.get(cookie)).toEqual('belt')
        })

        it('Deve retornar null quando o cookie procurado não existir', function() {
            var cookie = 'belt'
            expect(lucida.cookie.get(cookie)).toEqual(null)
        })

    })

})
