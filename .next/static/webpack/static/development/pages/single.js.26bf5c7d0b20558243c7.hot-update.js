webpackHotUpdate("static/development/pages/single.js",{

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Navbar */ "./component/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/component/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







_routes__WEBPACK_IMPORTED_MODULE_9__["Router"].events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.start();
});
_routes__WEBPACK_IMPORTED_MODULE_9__["Router"].events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
});
_routes__WEBPACK_IMPORTED_MODULE_9__["Router"].events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_12___default.a.done();
});

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_11__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_11__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ff6600",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        href: "/static/favi2.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "Hacker News",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("title", {
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Bucciarati Store"), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/favicon/apple-icon-57x57.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/favicon/apple-icon-60x60.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/favicon/apple-icon-72x72.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/favicon/apple-icon-76x76.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/favicon/apple-icon-114x114.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/favicon/apple-icon-120x120.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/favicon/apple-icon-144x144.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/favicon/apple-icon-152x152.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/favicon/apple-icon-180x180.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/favicon/android-icon-192x192.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon/favicon-32x32.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/favicon/favicon-96x96.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon/favicon-16x16.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/favicon/manifest.json",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileImage",
        content: "/static/favicon/ms-icon-144x144.png",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("meta", {
        property: "og:url",
        content: "http://bucciarati.mauriciofow.now.sh",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image",
        content: "/static/mainView/polo.jpg",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:secure_url",
        content: "/static/mainView/polo.jpg",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:width",
        content: "700",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:height",
        content: "500",
        className: "jsx-2641449188",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), this.props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2641449188",
        __self: this
      }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:660px){{.carousel__item){ border:1px solid #e8e8e8; };}#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RU0sQUFHMkIsQUFNTCxBQUdPLEFBR0UsQUFRSCxBQUlKLEFBYUYsQUFlQSxBQVFILEFBY0ssQUFNRSxBQUtlLEFBR0UsQUFLVixBQUdFLEFBTWIsQUFJSSxBQU1uQixXQW5EYSxHQXREYixBQStCbUIsQUFlSCxFQTNCQSxBQWlERyxDQWdDbEIsQ0ExQkMsQ0FoRlEsQ0FvQlIsR0FScUIsQUFpREEsS0E1REosQ0FvREwsRUEzQkEsQUEyRGIsQ0EvQ1UsQ0FrRFYsQ0FiQyxRQXBDVyxBQWVILEVBM0JILENBZGMsQUFrRFMsQ0E3RFEsQUE2R3JDLElBdEdELEFBbUJRLENBMkJJLEdBZkMsR0FWRCxLQTBCVixHQTFDaUIsQ0EyQnFCLEVBVjVCLE1BaUNXLEFBc0NFLEtBdEV2QixFQTZERCxDQTFGRCxDQVlnQixJQWlGZixTQS9CdUIsUUF2QmIsVUFFMEMsS0FzQmxDLGtCQUV3Qyx1QkFwRDNELEtBNkJpRCxRQTBEaEQsc0JBbENrRCxpQkF2Qk4sMkZBd0IzQyxrREF2QkEiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vdXRpbHMvYW5hbHl0aWNzJztcdFxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpICk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSApO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkgKTsgXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFxuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG5cdFx0XHRpbml0R0EoKTtcblx0XHRcdHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWU7XG5cdFx0fVxuXHRcdGxvZ1BhZ2VWaWV3KCk7XG5cdFx0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2YmFyIC8+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdHsvKiB0aHVtYm5haWwgZm9yIHNoYXJlICovfVxuXG5cdFx0XHRcdFx0ey8qICAqL31cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9tYW5pZmVzdC5qc29uJyAvPlxuXHRcdFx0XHRcdHsvKiA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPiAqL31cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmNjYwMCcgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdIYWNrZXIgTmV3cycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJyBjb250ZW50PSdkZWZhdWx0JyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XG5cdFx0XHRcdFx0PHRpdGxlPkJ1Y2NpYXJhdGkgU3RvcmU8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzU3eDU3JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNjB4NjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTYweDYwLnBuZycgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc3Mng3MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNzJ4NzIucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9Jzc2eDc2JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTE0eDExNCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTIweDEyMCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTIweDEyMC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTQ0eDE0NCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTUyeDE1MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTgweDE4MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTgweDE4MC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxOTJ4MTkyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZycgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9Jzk2eDk2JyBocmVmPScvc3RhdGljL2Zhdmljb24vZmF2aWNvbi05Nng5Ni5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxNngxNicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9tYW5pZmVzdC5qc29uJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJyBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cblxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9J2h0dHA6Ly9idWNjaWFyYXRpLm1hdXJpY2lvZm93Lm5vdy5zaCcgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9Jy9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGcnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIGNvbnRlbnQ9Jy9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGcnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOndpZHRoJyBjb250ZW50PSc3MDAnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOmhlaWdodCcgY29udGVudD0nNTAwJyAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmM2YzZjM7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQqIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NDY0NjQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Kntcblx0XHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIG5wZ3JvZ3Jlc3Ncblx0XHRcdFx0XHRcdCNucHJvZ3Jlc3Mge1xuXHRcdFx0XHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgI25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzI5ZDtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAzMTtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0ICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuXHRcdFx0XHRcdFx0ICAjbnByb2dyZXNzIC5wZWcge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHRcdFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cblx0XHRcdFx0XHRcdCAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMzE7XG5cdFx0XHRcdFx0XHRcdHRvcDogMTVweDtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgICNucHJvZ3Jlc3MgLnNwaW5uZXItaWNvbiB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0ICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxuXHRcdFx0XHRcdFx0ICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0ICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuXHRcdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdFx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBAa2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcblx0XHRcdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0XHQgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDEwMCUge1xuXHRcdFx0XHRcdFx0XHQgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCAgfVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcblx0XHRcdFx0XHRcdFx0I2ZsZXh7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRib2R5IHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5jYXJvdXNlbF9faXRlbSl7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=single.js.26bf5c7d0b20558243c7.hot-update.js.map