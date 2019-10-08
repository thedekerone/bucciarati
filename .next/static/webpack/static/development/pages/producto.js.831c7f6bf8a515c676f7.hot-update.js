webpackHotUpdate("static\\development\\pages\\producto.js",{

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./component/Navbar.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBar */ "./component/SideBar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var handleClick = function handleClick() {
    setShow(!show);
    console.log(show);
  };

  return __jsx("div", {
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favi2.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ff6600",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/static/favi2.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Hacker News",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "default",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Bucciarati Store"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/favicon/apple-icon-57x57.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon/apple-icon-60x60.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon/apple-icon-72x72.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon/apple-icon-76x76.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon/apple-icon-114x114.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon/apple-icon-120x120.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon/apple-icon-144x144.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon/apple-icon-152x152.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon/apple-icon-180x180.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/static/favicon/android-icon-192x192.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon/favicon-32x32.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/favicon/favicon-96x96.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon/favicon-16x16.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/favicon/manifest.json",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "/static/favicon/ms-icon-144x144.png",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-146789998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "146789998",
    __self: this
  }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RLLEFBRzBCLEFBTUwsQUFHTyxBQUdFLEFBU1QsQUFJSSxBQUlRLGNBdEIzQixHQW1CQyxFQXpCUyxJQVlhLEVBaUJ0QixHQTVCa0IsaUJBWUUsQ0FYaUIsSUFPdEMsZUFLbUIsU0FPTSxRQWxCekIsQ0FZZ0IsNkVBQ2hCLGFBTUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxjb21wb25lbnRcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcclxuXHRjb25zdCBbXHJcblx0XHRzaG93LFxyXG5cdFx0c2V0U2hvd1xyXG5cdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRTaG93KCFzaG93KTtcclxuXHRcdGNvbnNvbGUubG9nKHNob3cpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TmF2YmFyIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zdGF0aWMvbWFuaWZlc3QuanNvbicgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9zdGF0aWMvZmF2aTIucG5nJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmY2NjAwJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgaHJlZj0nL3N0YXRpYy9mYXZpMi5wbmcnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnIGNvbnRlbnQ9J0hhY2tlciBOZXdzJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnIGNvbnRlbnQ9J2RlZmF1bHQnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZScgY29udGVudD0neWVzJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J21vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuXHRcdFx0XHQ8dGl0bGU+QnVjY2lhcmF0aSBTdG9yZTwvdGl0bGU+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNTd4NTcnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTU3eDU3LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc2MHg2MCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzcyeDcyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Mng3Mi5wbmcnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNzZ4NzYnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTc2eDc2LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMTR4MTE0JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMTR4MTE0LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMjB4MTIwJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMjB4MTIwLnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxNDR4MTQ0JyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxNTJ4MTUyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxODB4MTgwJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xODB4MTgwLnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzE5MngxOTInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmcnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nOTZ4OTYnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzE2eDE2JyBocmVmPScvc3RhdGljL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmcnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL21hbmlmZXN0Lmpzb24nIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnIGNvbnRlbnQ9Jy9zdGF0aWMvZmF2aWNvbi9tcy1pY29uLTE0NHgxNDQucG5nJyAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGEpIHtcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQta2h0bWwtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtbW96LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0LW8tdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdDpnbG9iYWwoI2ZsZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=producto.js.831c7f6bf8a515c676f7.hot-update.js.map