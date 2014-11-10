var StringManager = (function(window) {
		"use strict";
		
		var instance;

		function StringManager() {
			if (!instance) {
				instance = this;
			}

			return instance;
		}

		StringManager.prototype.trimRight = function(str) {
			return str.replace(/\s+$/, '');
		};

		StringManager.prototype.trimLeft = function(str) {
			return str.replace(/^\s+/, '');
		};

		StringManager.prototype.trim = function(str) {
			str = String.prototype.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
			return str;
		};

		StringManager.prototype.sanitize = function(str, only_word_character) {
			try {
				if ( 'string' !== typeof str ) {
					if ( window.lucida.debug && window.console && window.console.error ) {
						window.console.error( 'Sanitize error: parameter str is ' + typeof str );
					}
					return '';
				}
				str = this.trim(str)
						.toLowerCase()    
						.replace(/\s+/g, ' ')
						.replace(/\s+/g, '_')
						.replace(/[áàâãåäæª]/g, 'a')
						.replace(/[éèêëЄ€]/g, 'e')
						.replace(/[íìîï]/g, 'i')
						.replace(/[óòôõöøº]/g, 'o')
						.replace(/[úùûü]/g, 'u')
						.replace(/[ç¢©]/g, 'c');
				if (only_word_character) {
					str = str.replace(/[^a-z0-9\-]/g, '_')
							.replace(/_+/g, '_');
				}
				return str;
			}
			catch(e){
				if ( window.lucida.debug && window.console && window.console.error ) {
					window.console.error( new Error(e.message, e.fileName, e.lineNumber) );
				}
			}
		};

		StringManager.prototype.replaceAll = function(str, token, newtoken) {
			while (str.indexOf(token) !== -1) {
				str = str.replace(token, newtoken);
			}
			return str;
		};

		return StringManager;

	})(window);
