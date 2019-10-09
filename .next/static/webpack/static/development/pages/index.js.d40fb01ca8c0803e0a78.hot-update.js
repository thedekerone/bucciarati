webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");





var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






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
        Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_10__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_10__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2737580618",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      })), this.props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2737580618",
        __self: this
      }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RNLEFBRzJCLEFBTUwsQUFHTyxBQUdFLEFBU1QsQUFJSSxBQUlRLGNBdEIzQixHQW1CQyxFQXpCUyxJQVlhLEVBaUJ0QixHQTVCa0IsaUJBWUUsQ0FYaUIsSUFPdEMsZUFLbUIsU0FPTSxRQWxCekIsQ0FZZ0IsNkVBQ2hCLGFBTUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxjb21wb25lbnRcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi91dGlscy9hbmFseXRpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XHJcblx0XHRcdGluaXRHQSgpO1xyXG5cdFx0XHR3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0bG9nUGFnZVZpZXcoKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZjY2MDAnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0hhY2tlciBOZXdzJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScgY29udGVudD0nZGVmYXVsdCcgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuXHRcdFx0XHRcdDx0aXRsZT5CdWNjaWFyYXRpIFN0b3JlPC90aXRsZT5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzU3eDU3JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc2MHg2MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNzJ4NzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTcyeDcyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9Jzc2eDc2JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMTR4MTE0JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMTR4MTE0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTEyMHgxMjAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTQ0eDE0NCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxNTJ4MTUyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE4MHgxODAucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxOTJ4MTkyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSc5Nng5NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tOTZ4OTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPScxNngxNicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJyBjb250ZW50PScvc3RhdGljL2Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycgLz5cclxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGEpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0LWtodG1sLXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHQtbW96LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0dXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKCNmbGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d40fb01ca8c0803e0a78.hot-update.js.map