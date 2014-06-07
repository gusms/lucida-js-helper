var Lucida = (function() {
		var instance;

		function Lucida() {
			this.cookie = new CookieManager();
			this.string = new StringManager();
			this.queryString = new QueryStringManager();

			if (!instance) {
				instance = this;
			}

			return instance;
		}

		Lucida.prototype.addListener = function(element, type, callback) {
			if (element.addEventListener) {
				element.addEventListener(type, callback);
			} else if (element.attachEvent) {
				element.attachEvent('on' + type, callback);
			}
			return element;
		};

		return Lucida;

	})();

window.lucida = new Lucida();