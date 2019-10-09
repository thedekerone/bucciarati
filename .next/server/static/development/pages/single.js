module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./component/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_5__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_5__["logPageView"])();
  }

  render() {
    return __jsx("div", {
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("link", {
      rel: "manifest",
      href: "/static/manifest.json",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/static/favi2.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ff6600",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: "/static/favi2.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: "Hacker News",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("meta", {
      name: "mobile-web-app-capable",
      content: "yes",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("title", {
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Bucciarati Store"), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/static/favicon/apple-icon-57x57.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/static/favicon/apple-icon-60x60.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/static/favicon/apple-icon-72x72.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/static/favicon/apple-icon-76x76.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/static/favicon/apple-icon-114x114.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/static/favicon/apple-icon-120x120.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/static/favicon/apple-icon-144x144.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/static/favicon/apple-icon-152x152.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/static/favicon/apple-icon-180x180.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/static/favicon/android-icon-192x192.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/static/favicon/favicon-32x32.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/static/favicon/favicon-96x96.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/static/favicon/favicon-16x16.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("link", {
      rel: "manifest",
      href: "/static/favicon/manifest.json",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/static/favicon/ms-icon-144x144.png",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ffffff",
      className: "jsx-2737580618",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), this.props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2737580618",
      __self: this
    }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RNLEFBRzJCLEFBTUwsQUFHTyxBQUdFLEFBU1QsQUFJSSxBQUlRLGNBdEIzQixHQW1CQyxFQXpCUyxJQVlhLEVBaUJ0QixHQTVCa0IsaUJBWUUsQ0FYaUIsSUFPdEMsZUFLbUIsU0FPTSxRQWxCekIsQ0FZZ0IsNkVBQ2hCLGFBTUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxjb21wb25lbnRcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi91dGlscy9hbmFseXRpY3MnO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XHJcblx0XHRcdGluaXRHQSgpO1xyXG5cdFx0XHR3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0bG9nUGFnZVZpZXcoKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZjY2MDAnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0hhY2tlciBOZXdzJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScgY29udGVudD0nZGVmYXVsdCcgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuXHRcdFx0XHRcdDx0aXRsZT5CdWNjaWFyYXRpIFN0b3JlPC90aXRsZT5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzU3eDU3JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc2MHg2MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNzJ4NzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTcyeDcyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9Jzc2eDc2JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMTR4MTE0JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMTR4MTE0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTEyMHgxMjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTQ0eDE0NCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxNTJ4MTUyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE4MHgxODAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxOTJ4MTkyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSc5Nng5NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tOTZ4OTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxNngxNicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJyBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGEpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0LWtodG1sLXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHQtbW96LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0dXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKCNmbGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar({
  handleClick
}) {
  let textInput;
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const handleSubmit = e => {
    e.preventDefault();
    _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].pushRoute('producto', {
      tag: textInput.value
    });
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'navbar-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'main-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, ' ', __jsx("img", {
    src: "/static/logo2.webp",
    width: "100%",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'main-navbar__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'main-navbar__items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "producto",
    params: {
      tag: 'hombre'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Hombres"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "producto",
    params: {
      tag: 'mujer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Mujeres"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "producto",
    params: {
      tag: 'niño'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Ni\xF1os"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Accesorios"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Regalos"))))), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'main-navbar__icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("form", {
    onSubmit: e => {
      handleSubmit(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("input", {
    type: "search",
    onFocus: () => {
      setDisplay(false);
    },
    ref: input => textInput = input,
    onBlur: () => {
      setDisplay(true);
    },
    name: "search",
    id: "search",
    placeholder: "Search",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-search.svg",
    width: "30px",
    alt: "search",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'search-icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), __jsx("img", {
    onClick: () => {
      handleClick();
    },
    width: "30px",
    src: "/static/icons/menu.svg",
    alt: "menu",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3949535355", [display ? 'flex' : 'none', display ? 'block' : 'none']]]) + " " + 'icon-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3949535355",
    dynamic: [display ? 'flex' : 'none', display ? 'block' : 'none'],
    __self: this
  }, `.navbar-container.__jsx-style-dynamic-selector{position:relative;width:100%;height:60px;box-sizing:border-box;overflow:hidden;}.navbar.__jsx-style-dynamic-selector{width:100%;background:white;position:fixed;z-index:1000;box-sizing:border-box;-webkit-box-shadow:0px 0px 5px 0px rgba(0,0,0,0.1);-moz-box-shadow:0px 0px 5px 0px rgba(0,0,0,0.1);box-shadow:0px 0px 5px 0px rgba(0,0,0,0.1);z-index:100;}.navbar.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{margin:.5rem 0;}.main-navbar.__jsx-style-dynamic-selector{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.5rem 1rem;}form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin:0 .8em;}.logo.__jsx-style-dynamic-selector{display:${display ? 'flex' : 'none'};-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;height:auto;}#search.__jsx-style-dynamic-selector{padding:.6rem;border:0;width:100%;border-radius:15px;background:#dee8ef;-webkit-transition:.5s;transition:.5s;}#search.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:grey;}#search.__jsx-style-dynamic-selector::-moz-placeholder{color:grey;}#search.__jsx-style-dynamic-selector:-ms-input-placeholder{color:grey;}#search.__jsx-style-dynamic-selector::placeholder{color:grey;}.main-navbar__items.__jsx-style-dynamic-selector{display:none;}.main-navbar__items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover a.__jsx-style-dynamic-selector{color:#fd486b;}.main-navbar__icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.main-navbar__title.__jsx-style-dynamic-selector{color:#e84855;font-size:1.2rem;width:50px;}.categorias.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding-right:1rem;}.icon-menu.__jsx-style-dynamic-selector{color:red;-webkit-transition-property:width,opacity;transition-property:width,opacity;-webkit-transition-duration:1s,0s;transition-duration:1s,0s;display:${display ? 'block' : 'none'};}.search-icon.__jsx-style-dynamic-selector{display:none;}@media (min-width:660px){.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:225px;}.icon-menu.__jsx-style-dynamic-selector{display:none;}.search-icon.__jsx-style-dynamic-selector{display:inline-block;}.main-navbar__icon.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.main-navbar__items.__jsx-style-dynamic-selector{display:block;}#search.__jsx-style-dynamic-selector{width:170px;}.main-navbar__items.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:460px;padding:0;margin:0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;}.main-navbar__items.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:1.5em;color:black;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;}.main-navbar__items.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{list-style:none;font-size:.7rem;}.main-navbar__title.__jsx-style-dynamic-selector{font-size:1.7rem;width:65px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZLLEFBR3lCLEFBT1AsQUFXSSxBQUdELEFBT0QsQUFPd0IsQUFLdkIsQUFRSCxBQU1FLEFBR0MsQUFJRCxBQU1DLEFBS0QsQUFLSCxBQU1HLEFBS0MsQUFLQSxBQUdRLEFBR1QsQUFHRSxBQUdGLEFBR0MsQUFTRyxBQUtBLEFBSUMsVUFoRGlCLENBdEVsQixBQXlDbEIsQ0F5REMsQ0FuREQsQUE2QkEsQUFVQyxDQXhFYSxBQW1CSixBQWlCVixBQVVrQixBQW1DakIsQ0FwRkQsQ0FtR2MsQUFLSSxDQUlMLENBOUhELEdBZ0dYLEVBdkRXLEtBakNJLEFBOEdNLEFBU3JCLENBOUhZLEVBbUVELENBdURYLEVBakZtQixHQVBFLElBakNDLENBbUV2QixDQTVEYyxVQWtDTSxHQWpDRyxPQVBOLFFBZ0doQixDQXZEZSxFQWhCSixBQWlDTyxBQVdBLEFBZ0JMLEFBb0JBLElBakd5QyxDQVB2RCxNQXlCb0IsQ0FpRFEsQUFXM0IsQUFvQlcsRUF2Rm1CLFFBd0ZwQixTQUNxQixLQWxFaEMsZUEwRUMsSUEzR21ELFNBd0J2QyxRQTJDeUIsSUExQ3RDLHlCQXlCd0IsQUFXSixFQTVEMkIsQ0FpQnJCLEtBa0QxQixXQU5BLFNBbkRvQixpQkFUUCxBQWtHUSxZQWpHckIsMENBZ0RhLENBaENFLGNBQ2YsT0FSb0IsaUJBeUZOLEVBeEZkLFVBeUZDLG9CQWxERCIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXGNvbXBvbmVudFxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHsgaGFuZGxlQ2xpY2sgfSkge1xyXG5cdGxldCB0ZXh0SW5wdXQ7XHJcblx0Y29uc3QgW1xyXG5cdFx0ZGlzcGxheSxcclxuXHRcdHNldERpc3BsYXlcclxuXHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFJvdXRlci5wdXNoUm91dGUoJ3Byb2R1Y3RvJywgeyB0YWc6IHRleHRJbnB1dC52YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXZiYXInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xvZ28nPlxyXG5cdFx0XHRcdFx0XHQ8TGluayByb3V0ZT0nLyc+XHJcblx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J21haW4tbmF2YmFyX190aXRsZScgc3JjPScvc3RhdGljL2xvZ28yLndlYnAnIHdpZHRoPScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J21haW4tbmF2YmFyX19pdGVtcyc+XHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICdob21icmUnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5Ib21icmVzPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJyBwYXJhbXM9e3sgdGFnOiAnbXVqZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5NdWplcmVzPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJyBwYXJhbXM9e3sgdGFnOiAnbmnDsW8nIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5OacOxb3M8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICcnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5BY2Nlc29yaW9zPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJyBwYXJhbXM9e3sgdGFnOiAnJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+UmVnYWxvczwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J21haW4tbmF2YmFyX19pY29uJz5cclxuXHRcdFx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVN1Ym1pdChlKTtcclxuXHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3NlYXJjaCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RGlzcGxheShmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXsoaW5wdXQpID0+ICh0ZXh0SW5wdXQgPSBpbnB1dCl9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RGlzcGxheSh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdzZWFyY2gnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nc2VhcmNoJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1NlYXJjaCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nc2VhcmNoLWljb24nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXNlYXJjaC5zdmcnXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD0nMzBweCdcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nc2VhcmNoJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrKCk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naWNvbi1tZW51J1xyXG5cdFx0XHRcdFx0XHR3aWR0aD0nMzBweCdcclxuXHRcdFx0XHRcdFx0c3JjPScvc3RhdGljL2ljb25zL21lbnUuc3ZnJ1xyXG5cdFx0XHRcdFx0XHRhbHQ9J21lbnUnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5uYXZiYXItY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm5hdmJhciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxMDAwO1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0XHRcdFx0XHRcdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMTAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm5hdmJhciBoMSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogLjVyZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5tYWluLW5hdmJhciB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC41cmVtIDFyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3JtIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAuOGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmxvZ28ge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAke2Rpc3BsYXkgPyAnZmxleCcgOiAnbm9uZSd9O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNzZWFyY2gge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAuNnJlbTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2RlZThlZjtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3NlYXJjaDo6cGxhY2Vob2xkZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JleTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNzZWFyY2g6Zm9jdXMge1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluLW5hdmJhcl9faXRlbXMge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1haW4tbmF2YmFyX19pdGVtcyBsaTpob3ZlciBhIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZDQ4NmI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lm1haW4tbmF2YmFyX19pY29uIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbTogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm1haW4tbmF2YmFyX190aXRsZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZTg0ODU1O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY2F0ZWdvcmlhcyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW06IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5pY29uLW1lbnUge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgb3BhY2l0eTtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMXMsIDBzO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAke2Rpc3BsYXkgPyAnYmxvY2snIDogJ25vbmUnfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zZWFyY2gtaWNvbiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5sb2dvIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyMjVweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Lmljb24tbWVudSB7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuc2VhcmNoLWljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQubWFpbi1uYXZiYXJfX2ljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGZsZXgtZ3JvdzogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQubWFpbi1uYXZiYXJfX2l0ZW1zIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQjc2VhcmNoIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTcwcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Lm1haW4tbmF2YmFyX19pdGVtcyB1bCB7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDYwcHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5tYWluLW5hdmJhcl9faXRlbXMgYSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Lm1haW4tbmF2YmFyX19pdGVtcyB1bCBsaSB7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5tYWluLW5hdmJhcl9fdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2NXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\bucciarati-store\component\Navbar.js */`));
}

/***/ }),

/***/ "./component/productViews/ProductView.js":
/*!***********************************************!*\
  !*** ./component/productViews/ProductView.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _views_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/Error */ "./component/views/Error.js");
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\productViews\\ProductView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Product(props) {
  const ADD_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
		mutation addProduct($product: ID!, $user: ID!) {
			addProductToBag(productID: $product, userID: $user) {
				username
			}
		}
	`;
  const [addProduct] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(ADD_PRODUCT);

  const addToCart = (user, client) => {
    user._id ? addProduct({
      variables: {
        product: props.data._id,
        user: user._id
      }
    }) : console.log(user);
    client.resetStore();
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
					query {
						getUsers {
							_id
							username
							password
							bag {
								title
							}
						}
					}
				`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, ({
    client,
    loading,
    error,
    data
  }) => {
    if (loading) return __jsx(_views_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
    if (error) return __jsx(_views_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product__img',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: props.data.image,
      width: "100%",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product__description',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-main',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-banner',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "OFERTA EXCLUSIVA")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, props.data.title)), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-discount',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-discount__price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, props.data.price), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-discount__percentage',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "-", props.data.discount, "%")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, Math.round((100 - props.data.discount) * props.data.price / 100), ".00$"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-information',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, props.wrap ? __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-information__text',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("b", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Descripci\xF3n:"), " ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero")) : null, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-information__delivery',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("img", {
      src: "/static/icons/icons8-truck-50.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Env\xEDo internacional")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-information__reviews',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      src: "/static/icons/icons8-star-filled-48.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("img", {
      src: "/static/icons/icons8-star-filled-48.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx("img", {
      src: "/static/icons/icons8-star-filled-48.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx("img", {
      src: "/static/icons/icons8-star-filled-48.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("img", {
      src: "/static/icons/icons8-star-filled-48.png",
      width: "20px",
      alt: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'product-information__reviews--number',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, Math.round(Math.random() * 100), " reviews")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'buttons',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      onClick: () => addToCart(data.getUsers, client),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'btn cart',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "ADD TO CART"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "single",
      params: {
        slug: props.data._id
      },
      key: props.data._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1701158084", [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em']]]) + " " + 'btn buy',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "BUY NOW"))))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1701158084",
    dynamic: [props.wrap ? '1000px' : '600px', props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr', props.wrap ? '0' : '.9em', props.wrap ? '.5em' : '1.2em', props.wrap ? '1/2' : '2/4', props.wrap ? '2/3' : '1/2', props.wrap ? ' 0px' : '1px solid #d5d5d5', props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr', props.wrap ? ' row' : 'column', props.wrap ? 'none' : '.8rem 0 .2rem', props.wrap ? '3em' : '1.2em'],
    __self: this
  }, `.product.__jsx-style-dynamic-selector{display:grid;background:white;max-width:${props.wrap ? '1000px' : '600px'};width:100%;margin:0 auto;font-size:11px;height:100%;box-sizing:border-box;padding:1em;grid-template:${props.wrap ? 'auto auto / 1fr' : 'auto / 1fr 1fr 1fr'};}.product__img.__jsx-style-dynamic-selector{grid-row:1/2;padding:${props.wrap ? '0' : '.9em'};box-sizing:border-box;}.product-title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;padding:.5em 0 .7em 0;}.product__description.__jsx-style-dynamic-selector,.product__img.__jsx-style-dynamic-selector{background:white;width:100%;}.product__description.__jsx-style-dynamic-selector{padding-left:${props.wrap ? '.5em' : '1.2em'};grid-column:${props.wrap ? '1/2' : '2/4'};grid-row:${props.wrap ? '2/3' : '1/2'};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;}.product-banner.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:white;font-size:.7em;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4em;}.product-discount.__jsx-style-dynamic-selector{margin-bottom:.6em;}.product-discount__price.__jsx-style-dynamic-selector{font-size:.8em;}.product-discount__percentage.__jsx-style-dynamic-selector{margin-left:.8em;color:red;font-size:1em;}.product-price.__jsx-style-dynamic-selector{font-size:1.rem;color:black;}.product-information__delivery.__jsx-style-dynamic-selector{padding:1.5em 0 .8em 0;}.product-information__reviews.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-information__reviews--number.__jsx-style-dynamic-selector{color:#ffca28;height:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.btn.__jsx-style-dynamic-selector{width:100%;margin:1rem;padding:.6rem;text-align:center;color:white;background:#e84855;position:relative;z-index:19;}.cart.__jsx-style-dynamic-selector{background:#fcba04;}@media (min-width:660px){.product.__jsx-style-dynamic-selector{border:${props.wrap ? ' 0px' : '1px solid #d5d5d5'};grid-template:${props.wrap ? '  auto /1fr 1fr 1fr' : 'auto/1fr 1fr'};font-size:15px;max-width:900px;}.buttons.__jsx-style-dynamic-selector{-webkit-flex-direction:${props.wrap ? ' row' : 'column'};-ms-flex-direction:${props.wrap ? ' row' : 'column'};flex-direction:${props.wrap ? ' row' : 'column'};box-sizing:border-box;}.btn.__jsx-style-dynamic-selector{margin:${props.wrap ? 'none' : '.8rem 0 .2rem'};box-sizing:border-box;}.product__description.__jsx-style-dynamic-selector{grid-column:2/4;grid-row:1/2;padding-left:${props.wrap ? '3em' : '1.2em'};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxwcm9kdWN0Vmlld3NcXFByb2R1Y3RWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ISyxBQUdvQixBQVlBLEFBS0osQUFLUSxBQUl5QixBQVU5QixBQU9PLEFBR0osQUFHRSxBQU1ELEFBS08sQUFHVixBQUlDLEFBTUQsQUFJRixBQVVRLEFBS2tCLEFBTVEsQUFJUixBQUlwQixTQXhGSyxFQTREVixDQXpDRyxDQXBDRSxBQVlvQixDQXVEekIsQ0FyQmIsQ0FTYSxBQW1ERSxDQXBGSCxBQTJCRCxFQU5YLEFBNENBLElBM0JBLEFBa0JlLEdBVkQsQ0EvQmUsQUFjZCxDQTVCZixBQWlDQSxDQW1ENkMsQ0ExR0wsQ0FpQnhDLEtBMEU2QyxBQVVyQixDQXZCTCxJQTNCbkIsQ0ExQjBDLFFBYm5CLEdBeUI4RCxFQTBDeEUsR0F1QlosU0F0Qm1CLEVBL0VSLEdBWVosQUE4RkMsRUE3Q21CLEFBVVIsS0FvQkssQ0ExRkYsR0F3QndCLEVBK0N2QyxDQVFtQixRQTlFSCxBQTBGRSxNQXpCRSxJQWNSLEtBOUVDLENBMEZaLEtBWEQsTUE5RXVCLEFBc0JULFFBV0UsY0FoQ0gsQ0FpQ2IsQUEwRHdCLFdBMUZvQixXQTJGM0MsQ0FuQ0QsMEJBTUEsRUF6Q3VCLEdBcEJ2QiwyRUFxQitCLG1IQUNSLHNCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXGNvbXBvbmVudFxccHJvZHVjdFZpZXdzXFxQcm9kdWN0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi92aWV3cy9TcGlubmVyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uL3ZpZXdzL0Vycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QocHJvcHMpIHtcclxuXHRjb25zdCBBRERfUFJPRFVDVCA9IGdxbGBcclxuXHRcdG11dGF0aW9uIGFkZFByb2R1Y3QoJHByb2R1Y3Q6IElEISwgJHVzZXI6IElEISkge1xyXG5cdFx0XHRhZGRQcm9kdWN0VG9CYWcocHJvZHVjdElEOiAkcHJvZHVjdCwgdXNlcklEOiAkdXNlcikge1xyXG5cdFx0XHRcdHVzZXJuYW1lXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRgO1xyXG5cdGNvbnN0IFtcclxuXHRcdGFkZFByb2R1Y3RcclxuXHRdID0gdXNlTXV0YXRpb24oQUREX1BST0RVQ1QpO1xyXG5cdGNvbnN0IGFkZFRvQ2FydCA9ICh1c2VyLCBjbGllbnQpID0+IHtcclxuXHRcdHVzZXIuX2lkXHJcblx0XHRcdD8gYWRkUHJvZHVjdCh7XHJcblx0XHRcdFx0XHR2YXJpYWJsZXMgOiB7XHJcblx0XHRcdFx0XHRcdHByb2R1Y3QgOiBwcm9wcy5kYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0dXNlciAgICA6IHVzZXIuX2lkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0OiBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHRcdGNsaWVudC5yZXNldFN0b3JlKCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxRdWVyeVxyXG5cdFx0XHRcdHF1ZXJ5PXtncWxgXHJcblx0XHRcdFx0XHRxdWVyeSB7XHJcblx0XHRcdFx0XHRcdGdldFVzZXJzIHtcclxuXHRcdFx0XHRcdFx0XHRfaWRcclxuXHRcdFx0XHRcdFx0XHR1c2VybmFtZVxyXG5cdFx0XHRcdFx0XHRcdHBhc3N3b3JkXHJcblx0XHRcdFx0XHRcdFx0YmFnIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH0+XHJcblx0XHRcdFx0eyh7IGNsaWVudCwgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPjtcclxuXHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPjtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9faW1nJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSB3aWR0aD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RfX2Rlc2NyaXB0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LW1haW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1iYW5uZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPk9GRVJUQSBFWENMVVNJVkE8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzPntwcm9wcy5kYXRhLnRpdGxlfTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50X19wcmljZSc+e3Byb3BzLmRhdGEucHJpY2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSc+LXtwcm9wcy5kYXRhLmRpc2NvdW50fSU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7TWF0aC5yb3VuZCgoMTAwIC0gcHJvcHMuZGF0YS5kaXNjb3VudCkgKiBwcm9wcy5kYXRhLnByaWNlIC8gMTAwKX0uMDAkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiBpbmZvICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cHJvcHMud3JhcCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGI+RGVzY3JpcGNpw7NuOjwvYj4gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0cixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVyb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uX19kZWxpdmVyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXRydWNrLTUwLnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkVudsOtbyBpbnRlcm5hY2lvbmFsPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb25fX3Jldmlld3MnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fcmV2aWV3cy0tbnVtYmVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApfSByZXZpZXdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KGRhdGEuZ2V0VXNlcnMsIGNsaWVudCl9IGNsYXNzTmFtZT0nYnRuIGNhcnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QUREIFRPIENBUlRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J3NpbmdsZScgcGFyYW1zPXt7IHNsdWc6IHByb3BzLmRhdGEuX2lkIH19IGtleT17cHJvcHMuZGF0YS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2J0biBidXknPkJVWSBOT1c8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcblx0XHRcdFx0XHQucHJvZHVjdCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICR7cHJvcHMud3JhcCA/ICcxMDAwcHgnIDogJzYwMHB4J307XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFlbTtcclxuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZTogJHtwcm9wcy53cmFwID8gJ2F1dG8gYXV0byAvIDFmcicgOiAnYXV0byAvIDFmciAxZnIgMWZyJ307XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9faW1nIHtcclxuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6IDEvMjtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogJHtwcm9wcy53cmFwID8gJzAnIDogJy45ZW0nfTtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LXRpdGxlIGgzIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAuNWVtIDAgLjdlbSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2ltZyB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogJHtwcm9wcy53cmFwID8gJy41ZW0nIDogJzEuMmVtJ307XHJcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAke3Byb3BzLndyYXAgPyAnMS8yJyA6ICcyLzQnfTtcclxuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6ICR7cHJvcHMud3JhcCA/ICcyLzMnIDogJzEvMid9O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtYmFubmVyIHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjdlbTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDE4MSwgMCwgMTkxKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE4MSwgMCwgMTkxLCAxKSAwJSwgcmdiYSgwLCA4LCAxODAsIDEpIDEwMCUpO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIC40ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IC42ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC44ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAuOGVtO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1wcmljZSB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS5yZW07XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fZGVsaXZlcnkge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxLjVlbSAwIC44ZW0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzLS1udW1iZXIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmY2EyODtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmJ1dHRvbnMge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5idG4ge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAxcmVtO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAuNnJlbTtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlODQ4NTU7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMTk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY2FydCB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmY2JhMDQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6ICR7cHJvcHMud3JhcCA/ICcgMHB4JyA6ICcxcHggc29saWQgI2Q1ZDVkNSd9O1xyXG5cdFx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6ICR7cHJvcHMud3JhcCA/ICcgIGF1dG8gLzFmciAxZnIgMWZyJyA6ICdhdXRvLzFmciAxZnInfTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA5MDBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuYnV0dG9ucyB7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246ICR7cHJvcHMud3JhcCA/ICcgcm93JyA6ICdjb2x1bW4nfTtcclxuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5idG4ge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogJHtwcm9wcy53cmFwID8gJ25vbmUnIDogJy44cmVtIDAgLjJyZW0nfTtcclxuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5wcm9kdWN0X19kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDIvNDtcclxuXHRcdFx0XHRcdFx0XHRncmlkLXJvdzogMS8yO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogJHtwcm9wcy53cmFwID8gJzNlbScgOiAnMS4yZW0nfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\bucciarati-store\component\productViews\ProductView.js */`));
}

/***/ }),

/***/ "./component/productViews/Productos.js":
/*!*********************************************!*\
  !*** ./component/productViews/Productos.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Productos; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductView */ "./component/productViews/ProductView.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\productViews\\Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // aeaeaeaea

function Productos(props) {
  return __jsx("div", {
    className: "jsx-3955979613" + " " + 'productos',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.data.map(e => {
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      key: e._id,
      params: {
        slug: e._id
      },
      route: "single",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3955979613",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: props.user,
      data: e,
      gaa: 'xddd',
      wrap: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3955979613",
    __self: this
  }, ".productos.jsx-3955979613{display:grid;gap:1em;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));}@media (min-width:660px){.productos.jsx-3955979613{grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxwcm9kdWN0Vmlld3NcXFByb2R1Y3Rvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkssQUFHb0IsQUFPZ0QsYUFOckQsUUFFb0QscUNBSzVELHFCQUpEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxwcm9kdWN0Vmlld3NcXFByb2R1Y3Rvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuL1Byb2R1Y3RWaWV3JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbi8vIGFlYWVhZWFlYVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0b3MocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3Rvcyc+XHJcblx0XHRcdHtwcm9wcy5kYXRhLm1hcCgoZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGluayBrZXk9e2UuX2lkfSBwYXJhbXM9e3sgc2x1ZzogZS5faWQgfX0gcm91dGU9J3NpbmdsZSc+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxQcm9kdWN0VmlldyB1c2VyPXtwcm9wcy51c2VyfSBkYXRhPXtlfSBnYWE9eyd4ZGRkJ30gd3JhcD17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KX1cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5wcm9kdWN0b3Mge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRnYXA6IDFlbTtcclxuXHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0XHQucHJvZHVjdG9zIHtcclxuXHRcdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNDBweCwgMWZyKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\productViews\\Productos.js */"));
}

/***/ }),

/***/ "./component/views/Error.js":
/*!**********************************!*\
  !*** ./component/views/Error.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\views\\Error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Error({
  code
}) {
  return __jsx("div", {
    className: "jsx-1961418889" + " " + 'error',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1961418889",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, code ? code : null, " | Ha ocurrido un error! "), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1961418889",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1961418889",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "REGRESAR"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1961418889",
    __self: this
  }, ".error.jsx-1961418889{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h2.jsx-1961418889{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFx2aWV3c1xcRXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUssQUFHb0IsQUFNSCxVQUNYLGdFQU5vQiw2RkFDSSxtR0FDRCw4RUFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxjb21wb25lbnRcXHZpZXdzXFxFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3IoeyBjb2RlIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2Vycm9yJz5cclxuXHRcdFx0PGgxPntjb2RlID8gY29kZSA6IG51bGx9IHwgSGEgb2N1cnJpZG8gdW4gZXJyb3IhIDwvaDE+XHJcblx0XHRcdDxMaW5rIHJvdXRlPScvJz5cclxuXHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdDxoMj5SRUdSRVNBUjwvaDI+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5lcnJvciB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\views\\Error.js */"));
}

/***/ }),

/***/ "./component/views/Spinner.js":
/*!************************************!*\
  !*** ./component/views/Spinner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spinner; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\views\\Spinner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Spinner() {
  return __jsx("div", {
    className: "jsx-2547188749" + " " + 'loading',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2547188749" + " " + 'lds-default',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2547188749",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2547188749",
    __self: this
  }, ".lds-default.jsx-2547188749{display:inline-block;position:relative;width:64px;height:64px;}.lds-default.jsx-2547188749 div.jsx-2547188749{position:absolute;width:5px;height:5px;background:#000;border-radius:50%;-webkit-animation:lds-default-jsx-2547188749 1.2s linear infinite;animation:lds-default-jsx-2547188749 1.2s linear infinite;}.loading.jsx-2547188749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;width:100vw;height:90vh;margin-top:-90px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s;top:29px;left:53px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(2){-webkit-animation-delay:-0.1s;animation-delay:-0.1s;top:18px;left:50px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(3){-webkit-animation-delay:-0.2s;animation-delay:-0.2s;top:9px;left:41px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(4){-webkit-animation-delay:-0.3s;animation-delay:-0.3s;top:6px;left:29px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(5){-webkit-animation-delay:-0.4s;animation-delay:-0.4s;top:9px;left:18px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(6){-webkit-animation-delay:-0.5s;animation-delay:-0.5s;top:18px;left:9px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(7){-webkit-animation-delay:-0.6s;animation-delay:-0.6s;top:29px;left:6px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(8){-webkit-animation-delay:-0.7s;animation-delay:-0.7s;top:41px;left:9px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(9){-webkit-animation-delay:-0.8s;animation-delay:-0.8s;top:50px;left:18px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(10){-webkit-animation-delay:-0.9s;animation-delay:-0.9s;top:53px;left:29px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(11){-webkit-animation-delay:-1s;animation-delay:-1s;top:50px;left:41px;}.lds-default.jsx-2547188749 div.jsx-2547188749:nth-child(12){-webkit-animation-delay:-1.1s;animation-delay:-1.1s;top:41px;left:50px;}@-webkit-keyframes lds-default-jsx-2547188749{0%,20%,80%,100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}50%{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}}@keyframes lds-default-jsx-2547188749{0%,20%,80%,100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}50%{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFx2aWV3c1xcU3Bpbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmUsQUFHMkIsQUFNSCxBQVFMLEFBU00sQUFLRyxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLRixBQUtFLEFBU0YsQUFHRSxrQkFuRlosR0FOUSxPQU9QLFdBTkEsQUFPSyxPQWVQLEVBa0RBLEVBdkVHLEVBMEJILEFBS0QsQUFLQSxBQUtBLEFBS0MsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQVVBLEdBckVTLEFBZVIsRUFrREEsR0F4Q0EsQUFLQSxBQUtBLENBZkEsQUFvQkQsQUFLQSxBQUtBLEFBS0MsQUFLQSxBQVVBLENBNUVYLEdBc0JBLEVBa0RBLEVBWUMsQ0FwREQsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtBLENBOUJBLEFBbUNBLEFBS0EsQUFVQSxFQXRFNEMsQ0FJakMsQ0E0RVYsU0EzRVksWUFDQSxZQUNLLGlCQUNNLHdFQVB4QiwyQkFRb0IsNkZBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFx2aWV3c1xcU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZyc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZHMtZGVmYXVsdCc+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdFx0PGRpdiAvPlxyXG5cdFx0XHRcdDxkaXYgLz5cclxuXHRcdFx0XHQ8ZGl2IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0Lmxkcy1kZWZhdWx0IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiA2NHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2NHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubGRzLWRlZmF1bHQgZGl2IHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiA1cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRhbmltYXRpb246IGxkcy1kZWZhdWx0IDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubG9hZGluZyB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdFx0XHRcdGhlaWdodDogOTB2aDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IC05MHB4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxKSB7XHJcblx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IDBzO1xyXG5cdFx0XHRcdFx0dG9wOiAyOXB4O1xyXG5cdFx0XHRcdFx0bGVmdDogNTNweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxuXHRcdFx0XHRcdHRvcDogMThweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcblx0XHRcdFx0XHR0b3A6IDlweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDQxcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcblx0XHRcdFx0XHR0b3A6IDZweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDI5cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcblx0XHRcdFx0XHR0b3A6IDlweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDE4cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDYpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcblx0XHRcdFx0XHR0b3A6IDE4cHg7XHJcblx0XHRcdFx0XHRsZWZ0OiA5cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDcpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcblx0XHRcdFx0XHR0b3A6IDI5cHg7XHJcblx0XHRcdFx0XHRsZWZ0OiA2cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDgpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcblx0XHRcdFx0XHR0b3A6IDQxcHg7XHJcblx0XHRcdFx0XHRsZWZ0OiA5cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDkpIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcblx0XHRcdFx0XHR0b3A6IDUwcHg7XHJcblx0XHRcdFx0XHRsZWZ0OiAxOHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMCkge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuXHRcdFx0XHRcdHRvcDogNTNweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDI5cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDExKSB7XHJcblx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0xcztcclxuXHRcdFx0XHRcdHRvcDogNTBweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDQxcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDEyKSB7XHJcblx0XHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG5cdFx0XHRcdFx0dG9wOiA0MXB4O1xyXG5cdFx0XHRcdFx0bGVmdDogNTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QGtleWZyYW1lcyBsZHMtZGVmYXVsdCB7XHJcblx0XHRcdFx0XHQwJSxcclxuXHRcdFx0XHRcdDIwJSxcclxuXHRcdFx0XHRcdDgwJSxcclxuXHRcdFx0XHRcdDEwMCUge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0NTAlIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\views\\Spinner.js */"));
}

/***/ }),

/***/ "./pages/single.js":
/*!*************************!*\
  !*** ./pages/single.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/productViews/ProductView */ "./component/productViews/ProductView.js");
/* harmony import */ var _component_productViews_Productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/productViews/Productos */ "./component/productViews/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\single.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const GETTER = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
	query Product($PR: ID!) {
		getProduct(id: $PR) {
			_id
			title
			image
			price
			discount
			tags
		}
	}
`;

class single extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    query
  }) {
    return {
      id: query.slug
    };
  }

  render() {
    return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("title", {
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Bucciarati Store"), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/static/favicon/apple-icon-57x57.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/static/favicon/apple-icon-60x60.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/static/favicon/apple-icon-72x72.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/static/favicon/apple-icon-76x76.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/static/favicon/apple-icon-114x114.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/static/favicon/apple-icon-120x120.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/static/favicon/apple-icon-144x144.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/static/favicon/apple-icon-152x152.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/static/favicon/apple-icon-180x180.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/static/favicon/android-icon-192x192.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/static/favicon/favicon-32x32.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/static/favicon/favicon-96x96.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/static/favicon/favicon-16x16.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("link", {
      rel: "manifest",
      href: "/static/favicon/manifest.json",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/static/favicon/ms-icon-144x144.png",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ffffff",
      className: "jsx-2024405385",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
      query: GETTER,
      variables: {
        PR: this.props.id
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });
      if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
      if (!data.getProduct) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
      return __jsx("div", {
        className: "jsx-2024405385" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: data.getProduct,
        wrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2024405385" + " " + 'tiendas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Tambi\xE9n podr\xEDa gustarte: "), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
											query search($filter: String) {
												searchProducts(filter: $filter) {
													title
													_id
													image
													price
													tags
													discount
												}
											}
										`,
        variables: {
          filter: data.getProduct.tags[0]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, ({
        loading,
        error,
        data
      }) => {
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        });
        return __jsx(_component_productViews_Productos__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: data.searchProducts,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      })));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2024405385",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-2024405385{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:2rem auto 4rem;}.loading.jsx-2024405385{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:0;width:100vw;height:90vh;margin-top:-90px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2024405385{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}@media (min-width:660px){.container.jsx-2024405385{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXHNpbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmdCLEFBRWdHLEFBRXhFLEFBT0osQUFVRSxBQU9HLGVBTkYsRUFqQkwsQUF3QlgsV0F2QlUsR0FpQlUsT0FoQkosYUFpQlMsR0FoQkgsb0JBSUosRUFIbkIsQUFnQkEsZ0JBWlcsVUFDRSxZQUNBLFlBQ0ssaUJBQ00sbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXHNpbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuLi9jb21wb25lbnQvcHJvZHVjdFZpZXdzL1Byb2R1Y3RWaWV3JztcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tICcuLi9jb21wb25lbnQvcHJvZHVjdFZpZXdzL1Byb2R1Y3Rvcyc7XHJcbmltcG9ydCB7IFF1ZXJ5LCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0xheW91dCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9TcGlubmVyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9FcnJvcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmNvbnN0IEdFVFRFUiA9IGdxbGBcclxuXHRxdWVyeSBQcm9kdWN0KCRQUjogSUQhKSB7XHJcblx0XHRnZXRQcm9kdWN0KGlkOiAkUFIpIHtcclxuXHRcdFx0X2lkXHJcblx0XHRcdHRpdGxlXHJcblx0XHRcdGltYWdlXHJcblx0XHRcdHByaWNlXHJcblx0XHRcdGRpc2NvdW50XHJcblx0XHRcdHRhZ3NcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbmNsYXNzIHNpbmdsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuXHRcdHJldHVybiB7IGlkOiBxdWVyeS5zbHVnIH07XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cclxuXHRcdFx0XHRcdDx0aXRsZT5CdWNjaWFyYXRpIFN0b3JlPC90aXRsZT5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzU3eDU3JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc2MHg2MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNzJ4NzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTcyeDcyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9Jzc2eDc2JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMTR4MTE0JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMTR4MTE0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTEyMHgxMjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTQ0eDE0NCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxNTJ4MTUyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE4MHgxODAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxOTJ4MTkyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSc5Nng5NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tOTZ4OTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxNngxNicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJyBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHQ8UXVlcnkgcXVlcnk9e0dFVFRFUn0gdmFyaWFibGVzPXt7IFBSOiB0aGlzLnByb3BzLmlkIH19PlxyXG5cdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPjtcclxuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+O1xyXG5cdFx0XHRcdFx0XHRpZiAoIWRhdGEuZ2V0UHJvZHVjdCkgcmV0dXJuIDxFcnJvciAvPjtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0VmlldyBkYXRhPXtkYXRhLmdldFByb2R1Y3R9IHdyYXA9e3RydWV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGllbmRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5UYW1iacOpbiBwb2Ryw61hIGd1c3RhcnRlOiA8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UXVlcnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWVyeT17Z3FsYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cXVlcnkgc2VhcmNoKCRmaWx0ZXI6IFN0cmluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hQcm9kdWN0cyhmaWx0ZXI6ICRmaWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFibGVzPXt7IGZpbHRlcjogZGF0YS5nZXRQcm9kdWN0LnRhZ3NbMF0gfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFByb2R1Y3RvcyBkYXRhPXtkYXRhLnNlYXJjaFByb2R1Y3RzfSAvPjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdDwvUXVlcnk+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTE1MHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAycmVtIGF1dG8gNHJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5sb2FkaW5nIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogOTB2aDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTkwcHg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpbmdsZTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\single.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (single);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('producto').add('/', 'index').add('single').add('cart');

/***/ }),

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-149614956-1');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname + window.location.search);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
}; // da

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/single.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Estacion\Desktop\Proyectos\bucciarati-store\pages\single.js */"./pages/single.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=single.js.map