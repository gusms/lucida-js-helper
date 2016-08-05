describe('Modulo lucida.string', function() {

    describe('lucida.string.sanitize', function() {

        it('Deve remover caracteres especiais', function() {
            var str = 'belt'
            expect(lucida.string.sanitize(str)).toEqual('belt')
        })

        it('Deve retornar uma string em branco se o parâmetro não for uma string', function() {
            var str = {}
            expect(lucida.string.sanitize(str)).toEqual('')
        })

        it('Deve retornar uma string apenas em lowercase', function() {
            var str = 'YELlow'
            expect(lucida.string.sanitize(str)).toEqual('yellow')
        })

        it('Deve substituir espaço por underline', function() {
            var str = 'yellow belt'
            expect(lucida.string.sanitize(str)).toEqual('yellow_belt')
        })

        it('Deve substituir apenas números', function() {
            var str      = '154yellow1234belt124'
            var onlyWord = true
            expect(lucida.string.sanitize(str, onlyWord)).toEqual('yellow_belt')
        })

    })

})
