webpackHotUpdate("static/development/pages/index.js",{

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
      }, "body.jsx-2641449188{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*.jsx-2641449188{color:#646464;}a.jsx-2641449188{-webkit-text-decoration:none;text-decoration:none;}*.jsx-2641449188{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}#nprogress.jsx-2641449188{pointer-events:none;}#nprogress.jsx-2641449188 .bar.jsx-2641449188{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress.jsx-2641449188 .peg.jsx-2641449188{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress.jsx-2641449188 .spinner.jsx-2641449188{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress.jsx-2641449188 .spinner-icon.jsx-2641449188{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner-jsx-2641449188 400ms linear infinite;animation:nprogress-spinner-jsx-2641449188 400ms linear infinite;}.nprogress-custom-parent.jsx-2641449188{overflow:hidden;position:relative;}.nprogress-custom-parent.jsx-2641449188 #nprogress.jsx-2641449188 .spinner.jsx-2641449188,.nprogress-custom-parent.jsx-2641449188 #nprogress.jsx-2641449188 .bar.jsx-2641449188{position:absolute;}@-webkit-keyframes nprogress-spinner{0%.jsx-2641449188{-webkit-transform:rotate(0deg);}100%.jsx-2641449188{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner-jsx-2641449188{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner-jsx-2641449188{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media (min-width:660px){.jsx-2641449188{.carousel__item){ border:1px solid #e8e8e8; };}#flex.jsx-2641449188{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body.jsx-2641449188{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RU0sQUFHMkIsQUFNTCxBQUdPLEFBR0UsQUFRSCxBQUlKLEFBYUYsQUFlQSxBQVFILEFBY0ssQUFNRSxBQUtlLEFBR0UsQUFLVixBQUdFLEFBTWIsQUFJSSxBQU1uQixXQW5EYSxHQXREYixBQStCbUIsQUFlSCxFQTNCQSxBQWlERyxDQWdDbEIsQ0ExQkMsQ0FoRlEsQ0FvQlIsR0FScUIsQUFpREEsS0E1REosQ0FvREwsRUEzQkEsQUEyRGIsQ0EvQ1UsQ0FrRFYsQ0FiQyxRQXBDVyxBQWVILEVBM0JILENBZGMsQUFrRFMsQ0E3RFEsQUE2R3JDLElBdEdELEFBbUJRLENBMkJJLEdBZkMsR0FWRCxLQTBCVixHQTFDaUIsQ0EyQnFCLEVBVjVCLE1BaUNXLEFBc0NFLEtBdEV2QixFQTZERCxDQTFGRCxDQVlnQixJQWlGZixTQS9CdUIsUUF2QmIsVUFFMEMsS0FzQmxDLGtCQUV3Qyx1QkFwRDNELEtBNkJpRCxRQTBEaEQsc0JBbENrRCxpQkF2Qk4seUhBd0IzQyxvQkF2QkEiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vdXRpbHMvYW5hbHl0aWNzJztcdFxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpICk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSApO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkgKTsgXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFxuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG5cdFx0XHRpbml0R0EoKTtcblx0XHRcdHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWU7XG5cdFx0fVxuXHRcdGxvZ1BhZ2VWaWV3KCk7XG5cdFx0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2YmFyIC8+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdHsvKiB0aHVtYm5haWwgZm9yIHNoYXJlICovfVxuXG5cdFx0XHRcdFx0ey8qICAqL31cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9tYW5pZmVzdC5qc29uJyAvPlxuXHRcdFx0XHRcdHsvKiA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPiAqL31cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmNjYwMCcgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdIYWNrZXIgTmV3cycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJyBjb250ZW50PSdkZWZhdWx0JyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XG5cdFx0XHRcdFx0PHRpdGxlPkJ1Y2NpYXJhdGkgU3RvcmU8L3RpdGxlPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzU3eDU3JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNjB4NjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTYweDYwLnBuZycgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc3Mng3MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNzJ4NzIucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9Jzc2eDc2JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTE0eDExNCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTIweDEyMCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTIweDEyMC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTQ0eDE0NCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTUyeDE1MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTgweDE4MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTgweDE4MC5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxOTJ4MTkyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZycgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9Jzk2eDk2JyBocmVmPScvc3RhdGljL2Zhdmljb24vZmF2aWNvbi05Nng5Ni5wbmcnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxNngxNicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9tYW5pZmVzdC5qc29uJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJyBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cblxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9J2h0dHA6Ly9idWNjaWFyYXRpLm1hdXJpY2lvZm93Lm5vdy5zaCcgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9Jy9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGcnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIGNvbnRlbnQ9Jy9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGcnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOndpZHRoJyBjb250ZW50PSc3MDAnIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOmhlaWdodCcgY29udGVudD0nNTAwJyAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2FiYWw+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjQ2NDY0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCp7XG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0XHQta2h0bWwtdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0XHQtbW96LXVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdFx0LW8tdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBucGdyb2dyZXNzXG5cdFx0XHRcdFx0XHQjbnByb2dyZXNzIHtcblx0XHRcdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgICNucHJvZ3Jlc3MgLmJhciB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyOWQ7XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMzE7XG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cblx0XHRcdFx0XHRcdCAgI25wcm9ncmVzcyAucGVnIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHRcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgXG5cdFx0XHRcdFx0XHQgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXG5cdFx0XHRcdFx0XHQgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDMxO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAxNXB4O1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0ICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRcdFx0XHRhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcblx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0ICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcblx0XHRcdFx0XHRcdCAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0ICBcblx0XHRcdFx0XHRcdCAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcblx0XHRcdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0XHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHRcdDAlIHtcblx0XHRcdFx0XHRcdFx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdFx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgIH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XG5cdFx0XHRcdFx0XHRcdCNmbGV4e1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ym9keSB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuY2Fyb3VzZWxfX2l0ZW0pe1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ })

})
//# sourceMappingURL=index.js.d4854c51c615fa67f7db.hot-update.js.map