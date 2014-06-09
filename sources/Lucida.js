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

		Lucida.prototype.addiFrame = function(divId, url, opt_hash) {
			ga(function(tracker) {
				window.linker = window.linker || new window.gaplugins.Linker(tracker);
				var iFrame = document.createElement('iFrame');
				iFrame.src = window.linker.decorate(url, opt_hash);
				document.getElementById(divId).appendChild(iFrame);
			});
		};

		return Lucida;

	})();

window.lucida = new Lucida();