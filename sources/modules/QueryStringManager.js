var QueryStringManager = (function() {
		"use strict";
		
		var instance;

		function QueryStringManager() {
			this.query = document.location.search;

			if (!instance) {
				instance = this;
			}

			return instance;
		}

		QueryStringManager.prototype.toObject = function(queryString) {
			var object, param, t, _i, _len;
			if (queryString === null) {
				queryString = this.query;
			}
			object = {};
			queryString = queryString.indexOf('?') === 0 ? queryString.substring(1) : queryString;
			queryString = queryString.split('&');
			for (_i = 0, _len = queryString.length; _i < _len; _i++) {
				param = queryString[_i];
				t = param.split('=');
				object[t[0]] = decodeURIComponent(t[1]);
			}
			return object;
		};

		QueryStringManager.prototype.getValue = function(param, queryString) {
			var object;
			if (queryString === null) {
				queryString = this.query;
			}
			object = this.toObject(queryString);
			return object[param];
		};

		return QueryStringManager;

	})();
