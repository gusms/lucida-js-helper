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

		/**
		 * Cross Browser helper to addEventListener.
		 *
		 * @param {HTMLElement} obj The Element to attach event to.
		 * @param {string} evt The event that will trigger the binded function.
		 * @param {function(event)} ofnc The function to bind to the element.
		 * @param {boolean} bubble true if event should be fired at bubble phase.
		 * Defaults to false. Works only on W3C compliant browser. MSFT don't support
		 * it.
		 * @return {boolean} true if it was successfuly binded.
		 */
		Lucida.prototype.addListener = function (obj, evt, ofnc, bubble) {
			var fnc = function (event) {
				if (!event || !event.target) {
					event = window.event;
					event.target = event.srcElement;
				}
				return ofnc.call(obj, event);
			};
			// W3C model
			if (obj.addEventListener) {
				obj.addEventListener(evt, fnc, !!bubble);
				return true;
			}
			// M$ft model
			else if (obj.attachEvent) {
				return obj.attachEvent('on' + evt, fnc);
			}
			// Browser doesn't support W3C or M$ft model. Time to go old school
			else {
				evt = 'on' + evt;
				if (typeof obj[evt] === 'function') {
					// Object already has a function on traditional
					// Let's wrap it with our own function inside another function
					fnc = (function (f1, f2) {
						return function () {
							f1.apply(this, arguments);
							f2.apply(this, arguments);
						};
					}(obj[evt], fnc));
				}
				obj[evt] = fnc;
				return true;
			}
		};

		Lucida.prototype.addiFrame = function(divId, url, opt_hash) {
			ga(function(tracker) {
				window.linker = window.linker || new window.gaplugins.Linker(tracker);
				var iFrame = document.createElement('iFrame');
				iFrame.src = window.linker.decorate(url, opt_hash);
				iFrame.frameBorder = 0;
				document.getElementById(divId).appendChild(iFrame);
			});
		};

		return Lucida;

	})();

window.lucida = new Lucida();