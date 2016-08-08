describe('Módulo: lucida.cookie', function() {

    describe('lucida.cookie.get', function(){

        beforeEach(function() {
            document.cookie = 'yellow=belt; '
            document.cookie = 'yellow2=belt2; '
        })

        afterEach(function() {
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            document.cookie = 'yellow2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        })

        it('Deve retornar um string se o cookie for encontrado', function() {
            var cookie = 'yellow'
            expect(lucida.cookie.get(cookie)).toEqual(jasmine.any(String))
        })

        it('Deve buscar por um cookie pelo seu nome', function() {
            var cookie = 'yellow'
            expect(lucida.cookie.get(cookie)).toEqual('belt')
        })

        it('Deve retornar null quando o cookie procurado não existir', function() {
            var cookie = 'belt'
            expect(lucida.cookie.get(cookie)).toBeNull()
        })

        it('Deve retornar null se o parâmetro de entrada não for uma string', function() {
            var cookie  = 450
            var cookie2 = {}
            var cookie3 = []
            var cookie4

            expect(lucida.cookie.get(cookie)).toBeNull()
            expect(lucida.cookie.get(cookie2)).toBeNull()
            expect(lucida.cookie.get(cookie3)).toBeNull()
            expect(lucida.cookie.get(cookie4)).toBeNull()
            console.log(lucida.cookie.get(cookie2));
        })

    })

    describe('lucida.cookie.set', function() {

        beforeEach(function() {
            document.cookie = 'yellow=belt; '
        })

        afterEach(function() {
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            document.cookie = 'yellow2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        })

        it('Deve criar um cookie', function() {
            var nomeCookie = 'yellow2'
            var valorCookie = 'belt2'

            expect(lucida.cookie.set(nomeCookie, valorCookie)).toMatch(/yellow2=belt2/)
            expect(lucida.cookie.get(nomeCookie)).not.toBeNull()
        })

        it('Deve deve retornar uma string ao criar um cookie', function() {
            var nomeCookie = 'yellow2'
            var valorCookie = 'belt2'

            expect(lucida.cookie.set(nomeCookie, valorCookie)).toEqual(jasmine.any(String))
        })

        it('Deve deve retornar null caso não seja passando nenhum valor no primeiro parâmetro(nome do cookie)', function() {
            var nomeCookie = ''
            var valorCookie = 'belt2'

            expect(lucida.cookie.set(nomeCookie, valorCookie)).toBeNull()
        })

    })

    describe('lucida.cookie.remove', function() {

        beforeEach(function() {
            document.cookie = 'yellow=belt; '
            document.cookie = 'yellow2=belt2; '
        })

        afterEach(function() {
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            document.cookie = 'yellow2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        })

        it('Deve retornar uma string com o valor do cookie excluido', function() {
            var cookie = 'yellow'
            expect(lucida.cookie.remove(cookie)).toEqual(jasmine.any(String))
        })

        it('Deve excluir um cookie pelo nome', function() {
            var cookie = 'yellow'

            expect(lucida.cookie.remove(cookie)).toEqual('belt')
            expect(lucida.cookie.get(cookie)).toBeNull()
        })

        it('Deve retornar null ao tentar excluir um cookie inexistente', function() {
            var cookie = 'anotherthing'
            expect(lucida.cookie.remove(cookie)).toBeNull()
        })

    })

    describe('lucida.cookie.toObject', function() {

        beforeEach(function() {
            document.cookie = 'yellow=belt; '
            document.cookie = 'yellow2=belt2; '
            document.cookie = '=belt2; '

        })

        afterEach(function() {
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            document.cookie = 'yellow2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        })

        it('Deve retornar um Objeto com todos os cookies', function(){
            expect(lucida.cookie.toObject()).toEqual(jasmine.any(Object))
            expect(lucida.cookie.toObject().yellow).toEqual('belt')
            expect(lucida.cookie.toObject().yellow2).toEqual('belt2')
        })

        it('Deve retornar null quando não houver cookies', function(){
            document.cookie = 'yellow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            document.cookie = 'yellow2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
            expect(lucida.cookie.toObject()).toBeNull()
        })

    })

})
