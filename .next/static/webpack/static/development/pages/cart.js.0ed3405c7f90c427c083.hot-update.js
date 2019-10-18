webpackHotUpdate("static/development/pages/cart.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
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
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ff6600",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        href: "/static/favi2.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "Hacker News",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("title", {
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Bucciarati Store"), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/favicon/apple-icon-57x57.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/favicon/apple-icon-60x60.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/favicon/apple-icon-72x72.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/favicon/apple-icon-76x76.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/favicon/apple-icon-114x114.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/favicon/apple-icon-120x120.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/favicon/apple-icon-144x144.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/favicon/apple-icon-152x152.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/favicon/apple-icon-180x180.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/favicon/android-icon-192x192.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon/favicon-32x32.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/favicon/favicon-96x96.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon/favicon-16x16.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/favicon/manifest.json",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileImage",
        content: "/static/favicon/ms-icon-144x144.png",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), __jsx("meta", {
        property: "og:url",
        content: "http://bucciarati.mauriciofow.now.sh",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image",
        content: "/static/mainView/polo.jpg",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:secure_url",
        content: "/static/mainView/polo.jpg",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:width",
        content: "700",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image:height",
        content: "500",
        className: "jsx-2516338828",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), this.props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2516338828",
        __self: this
      }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}li{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.btn{width:100%;max-width:450px;margin:0 auto;padding:0.6rem;text-align:center;color:white;background:#e84855;position:relative;box-sizing:border-box;z-index:19;}.btn:hover{cursor:pointer;}@media (min-width:660px){{.carousel__item) { border:1px solid #e8e8e8; };}html{26px;}#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SVcsQUFHa0MsQUFNTCxBQUdFLEFBR0ssQUFHRSxBQVFILEFBSUosQUFhRixBQWVBLEFBUUgsQUFjSyxBQU1FLEFBS2UsQUFHRSxBQUtWLEFBR0UsQUFJaEIsQUFZSSxBQUtULEFBR1MsQUFJSSxBQU1yQixLQVpFLE1BekRZLEFBd0NJLEdBakdsQixBQWtDb0IsQUFlSCxDQTREakIsQ0ExR0EsQUFtQmlCLEFBaURHLENBa0RsQixDQTVDRixDQW5GVyxDQXVCWCxHQVJ3QixBQWlEQSxJQXdDUixDQXZHSSxDQXVETCxFQTNCQSxBQTJEYixDQS9DVSxDQWtEVixDQWJGLE9BMkJpQixDQS9ESCxBQWVILEVBM0JILENBZGMsQUFrRFMsQ0FoRVEsQ0FrSXRDLEdBeEhELEFBbUJTLENBMkJJLEdBZkMsRUErRE0sQ0F6RVAsS0EwQmIsR0ExQ29CLENBMkJxQixFQVY1QixNQWlDVyxBQXdDVixBQWdCYSxLQXhGM0IsRUE2REUsQ0E3RkYsQ0FlaUIsR0EwRkksQ0FUbkIsU0EvQnVCLFFBdkJiLENBZ0VRLFNBOURrQyxLQXNCbEMsSUF5Q0ksY0F2Q29DLFFBd0MvQyxXQUNiLElBN0ZBLEtBNkJrRCxRQTRFaEQsc0JBcERrRCxpQkF2Qk4sMkZBd0I5QyxrREF2QkEiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IHsgaW5pdEdBLCBsb2dQYWdlVmlldyB9IGZyb20gJy4uL3V0aWxzL2FuYWx5dGljcydcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICBpbml0R0EoKVxuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZVxuICAgIH1cbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsvKiB0aHVtYm5haWwgZm9yIHNoYXJlICovfVxuXG4gICAgICAgICAgey8qICAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9tYW5pZmVzdC5qc29uJyAvPlxuICAgICAgICAgIHsvKiA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPiAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmNjYwMCcgLz5cbiAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJyBjb250ZW50PSdIYWNrZXIgTmV3cycgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZSdcbiAgICAgICAgICAgIGNvbnRlbnQ9J2RlZmF1bHQnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT0nbW9iaWxlLXdlYi1hcHAtY2FwYWJsZScgY29udGVudD0neWVzJyAvPlxuICAgICAgICAgIDx0aXRsZT5CdWNjaWFyYXRpIFN0b3JlPC90aXRsZT5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgICAgc2l6ZXM9JzU3eDU3J1xuICAgICAgICAgICAgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD0nYXBwbGUtdG91Y2gtaWNvbidcbiAgICAgICAgICAgIHNpemVzPSc2MHg2MCdcbiAgICAgICAgICAgIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTYweDYwLnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9J2FwcGxlLXRvdWNoLWljb24nXG4gICAgICAgICAgICBzaXplcz0nNzJ4NzInXG4gICAgICAgICAgICBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Mng3Mi5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgICAgc2l6ZXM9Jzc2eDc2J1xuICAgICAgICAgICAgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNzZ4NzYucG5nJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD0nYXBwbGUtdG91Y2gtaWNvbidcbiAgICAgICAgICAgIHNpemVzPScxMTR4MTE0J1xuICAgICAgICAgICAgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgICAgc2l6ZXM9JzEyMHgxMjAnXG4gICAgICAgICAgICBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMjB4MTIwLnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9J2FwcGxlLXRvdWNoLWljb24nXG4gICAgICAgICAgICBzaXplcz0nMTQ0eDE0NCdcbiAgICAgICAgICAgIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE0NHgxNDQucG5nJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD0nYXBwbGUtdG91Y2gtaWNvbidcbiAgICAgICAgICAgIHNpemVzPScxNTJ4MTUyJ1xuICAgICAgICAgICAgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgICAgc2l6ZXM9JzE4MHgxODAnXG4gICAgICAgICAgICBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xODB4MTgwLnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9J2ljb24nXG4gICAgICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAgICAgICBzaXplcz0nMTkyeDE5MidcbiAgICAgICAgICAgIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPSdpY29uJ1xuICAgICAgICAgICAgdHlwZT0naW1hZ2UvcG5nJ1xuICAgICAgICAgICAgc2l6ZXM9JzMyeDMyJ1xuICAgICAgICAgICAgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD0naWNvbidcbiAgICAgICAgICAgIHR5cGU9J2ltYWdlL3BuZydcbiAgICAgICAgICAgIHNpemVzPSc5Nng5NidcbiAgICAgICAgICAgIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9J2ljb24nXG4gICAgICAgICAgICB0eXBlPSdpbWFnZS9wbmcnXG4gICAgICAgICAgICBzaXplcz0nMTZ4MTYnXG4gICAgICAgICAgICBocmVmPScvc3RhdGljL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL2Zhdmljb24vbWFuaWZlc3QuanNvbicgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnXG4gICAgICAgICAgICBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxuXG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PSdvZzp1cmwnXG4gICAgICAgICAgICBjb250ZW50PSdodHRwOi8vYnVjY2lhcmF0aS5tYXVyaWNpb2Zvdy5ub3cuc2gnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIGNvbnRlbnQ9Jy9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGcnIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xuICAgICAgICAgICAgY29udGVudD0nL3N0YXRpYy9tYWluVmlldy9wb2xvLmpwZydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp3aWR0aCcgY29udGVudD0nNzAwJyAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTpoZWlnaHQnIGNvbnRlbnQ9JzUwMCcgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjQ2NDY0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgICAgICAgLWtodG1sLXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgICAgICAgLW1vei11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgICAgIC1vLXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgICAgICAgdXNlci1kcmFnOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbnBncm9ncmVzc1xuICAgICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cbiAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cbiAgICAgICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxuICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NTU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAgICAgaHRtbHtcbiAgICAgICAgICAgICAgICAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICNmbGV4IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmNhcm91c2VsX19pdGVtKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=cart.js.0ed3405c7f90c427c083.hot-update.js.map