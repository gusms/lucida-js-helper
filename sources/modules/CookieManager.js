var CookieManager = (function() {
		"use strict";

		var instance;

		function CookieManager() {
			if (!instance) {
				instance = this;
			}

			return instance;
		}

		CookieManager.prototype.get = function(key) {
			var cookie = '; ' + document.cookie,
				index,
				end;
				
			key = '; ' + key + '=';
			index = cookie.indexOf(key);
			if (index !== -1) {
				cookie = cookie.substring(index + key.length);
				end = cookie.indexOf(';');
				return window.unescape(end !== -1 ? cookie.substring(0, end) : cookie);
			}
			return null;
		};

		CookieManager.prototype.set = function(name, value, opts) {
			var cookie, exdate;
			opts = typeof opts === 'object' ? opts : {
				exdays: opts
			};
			cookie = '' + name + '=' + (window.escape(value));
			if (opts.exdays) {
				exdate = new Date();
				exdate.setDate(exdate.getDate() + opts.exdays);
				cookie += '; expires=' + (exdate.toUTCString());
			}
			if (opts.domain) {
				cookie += '; domain=' + opts.domain;
			}
			cookie += '; path=' + (opts.path || '/');
			document.cookie = cookie;
			return cookie;
		};

		CookieManager.prototype.remove = function(name) {
			var value = this.get(name);

			this.set(name, '', -1);
			return value;
		};

		CookieManager.prototype.toObject = function() {
			var cookie, cookies, object, t, _i, _len;
			object = {};
			cookies = document.cookie.split('; ');
			for (_i = 0, _len = cookies.length; _i < _len; _i++) {
				cookie = cookies[_i];
				t = cookie.split('=');
				object[t[0]] = decodeURIComponent(t[1]);
			}
			return object;
		};

		return CookieManager;

	})();
