(function() {
  var Lucida, cookieManager, queryStringManager, stringManager;

  cookieManager = (function() {
    function cookieManager() {}

    cookieManager.prototype.get = function(key) {
      var cookie, end, index;
      cookie = "; " + document.cookie;
      key = "; " + key + "=";
      index = cookie.indexOf(key);
      if (index !== -1) {
        cookie = cookie.substring(index + key.length);
        end = cookie.indexOf(';');
        return window.unescape(end !== -1 ? cookie.substring(0, end) : cookie);
      }
      return null;
    };

    cookieManager.prototype.set = function(name, value, opts) {
      var cookie, exdate;
      opts = typeof opts === "object" ? opts : {
        exdays: opts
      };
      cookie = "" + name + "=" + (window.escape(value));
      if (opts.exdays) {
        exdate = new Date();
        exdate.setDate(exdate.getDate() + opts.exdays);
        cookie += "; expires=" + (exdate.toUTCString());
      }
      if (opts.domain) {
        cookie += "; domain=" + opts.domain;
      }
      cookie += "; path=" + (opts.path || '/');
      return document.cookie = cookie;
    };

    cookieManager.prototype.remove = function(name) {
      var value;
      value = this.get(name);
      this.set(name, "", -1);
      return value;
    };

    cookieManager.prototype.toObject = function() {
      var cookie, cookies, object, t, _i, _len;
      object = {};
      cookies = document.cookie.split("; ");
      for (_i = 0, _len = cookies.length; _i < _len; _i++) {
        cookie = cookies[_i];
        t = cookie.split("=");
        object[t[0]] = decodeURIComponent(t[1]);
      }
      return object;
    };

    return cookieManager;

  })();

  queryStringManager = (function() {
    function queryStringManager() {
      this.query = document.location.search;
    }

    queryStringManager.prototype.toObject = function(queryString) {
      var object, param, t, _i, _len;
      if (queryString == null) {
        queryString = this.query;
      }
      object = {};
      queryString = queryString.indexOf("?") === 0 ? queryString.substring(1) : queryString;
      queryString = queryString.split("&");
      for (_i = 0, _len = queryString.length; _i < _len; _i++) {
        param = queryString[_i];
        t = param.split("=");
        object[t[0]] = decodeURIComponent(t[1]);
      }
      return object;
    };

    queryStringManager.prototype.getValue = function(param, queryString) {
      var object;
      if (queryString == null) {
        queryString = this.query;
      }
      object = this.toObject(queryString);
      return object[param];
    };

    return queryStringManager;

  })();

  stringManager = (function() {
    function stringManager() {}

    stringManager.prototype.trimLeft = function(str) {
      return str.replace(/\s+$/, '');
    };

    stringManager.prototype.trimRight = function(str) {
      return str.replace(/^\s+/, '');
    };

    stringManager.prototype.trim = function(str) {
      str = String.prototype.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
      return str;
    };

    stringManager.prototype.sanitize = function(str, only_word_character) {
      str = str.toLowerCase();
      str = this.trim(str);
      str = str.replace(/\s+/g, ' ');
      str = str.replace(/\s+/g, '_');
      str = str.replace(/[áàâãåäæª]/g, 'a');
      str = str.replace(/[éèêëЄ€]/g, 'e');
      str = str.replace(/[íìîï]/g, 'i');
      str = str.replace(/[óòôõöøº]/g, 'o');
      str = str.replace(/[úùûü]/g, 'u');
      str = str.replace(/[ç¢©]/g, 'c');
      if (only_word_character) {
        str = str.replace(/[^a-z0-9\-]/g, '_');
        str = str.replace(/_+/g, '_');
      }
      return str;
    };

    stringManager.prototype.replaceAll = function(str, token, newtoken) {
      var _results;
      _results = [];
      while (str.indexOf(token) !== -1) {
        _results.push(str = str.replace(token, newtoken));
      }
      return _results;
    };

    return stringManager;

  })();

  Lucida = (function() {
    function Lucida() {
      this.cookie = new cookieManager();
      this.string = new stringManager();
      this.queryString = new queryStringManager();
    }

    return Lucida;

  })();

  window.lucida = new Lucida();

}).call(this);
