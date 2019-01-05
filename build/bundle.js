const webtaskApi = module.webtask;
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var module = (module || {});
module.webtask = webtaskApi;

var express = __webpack_require__(/*! express */ "express");

var auth0 = __webpack_require__(/*! auth0-oauth2-express */ "auth0-oauth2-express");

var Webtask = __webpack_require__(/*! webtask-tools */ "webtask-tools");

var app = express();

var template = __webpack_require__(/*! ./views/index.jade */ "./views/index.jade");

app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
  auth0({
    clientName: 'Custom Social Connections',
    scopes: 'read:connections create:connections update:connections delete:connections read:clients',
    audience: function (req) {
      return 'https://' + req.webtaskContext.data.AUTH0_DOMAIN + '/api/v2/';
    },
    rootTenantAuthority: req.webtaskContext.data.AUTH0_RTA
  })(req, res, next);
});
app.get('/', function (req, res) {
  res.header("Content-Type", 'text/html');
  res.status(200).send(template({
    baseUrl: res.locals.baseUrl,
    manageUrl: req.webtaskContext.data.AUTH0_MANAGE_URL || 'https://manage.auth0.com',
    rta: req.webtaskContext.data.AUTH0_RTA || 'https://auth0.auth0.com'
  }));
});
module.exports = app;


/***/ }),

/***/ "./views/index.jade":
/*!**************************!*\
  !*** ./views/index.jade ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "extends ./layout.jade\n\nblock title\n  title Custom Social Connections\n\nblock content\n  script(type=\"text/javascript\").\n    window.env = {\n      webtasks: {\n        shareUrl:     'https://sandbox.it.auth0.com/api/run/auth0-extensions/custom-connections/share?webtask_no_cache=1',\n        templatesUrl: 'https://sandbox.it.auth0.com/api/run/auth0-extensions/custom-connections/sync?webtask_no_cache=1'\n      },\n      userUrl: (function () {\n        var value = null;\n\n        try {\n          value = jwt_decode(window.sessionStorage.getItem('token')).aud[0].replace('/api/v2', '/authorize');\n        } catch (err) {\n          console.log('Token could not be decoded');\n        }\n\n        return value;\n      })(),\n      manageUrl: '#{manageUrl}'\n    };\n  script(src='@assets_baseurl/@extension_name.min.js')\n"

/***/ }),

/***/ "auth0-oauth2-express":
/*!***************************************!*\
  !*** external "auth0-oauth2-express" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth0-oauth2-express");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "webtask-tools":
/*!********************************!*\
  !*** external "webtask-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webtask-tools");

/***/ })

/******/ });
