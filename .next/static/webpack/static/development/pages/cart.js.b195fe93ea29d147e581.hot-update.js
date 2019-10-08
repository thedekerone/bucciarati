webpackHotUpdate("static\\development\\pages\\cart.js",{

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
    className: "jsx-528896128",
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
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favi2.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ff6600",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/static/favi2.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Hacker News",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "default",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Bucciarati Store"), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/favicon/apple-icon-57x57.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon/apple-icon-60x60.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon/apple-icon-72x72.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon/apple-icon-76x76.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon/apple-icon-114x114.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon/apple-icon-120x120.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon/apple-icon-144x144.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon/apple-icon-152x152.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon/apple-icon-180x180.png",
    className: "jsx-528896128",
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
    className: "jsx-528896128",
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
    className: "jsx-528896128",
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
    className: "jsx-528896128",
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
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/favicon/manifest.json",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileImage",
    content: "/static/favicon/ms-icon-144x144.png",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-528896128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "528896128",
    __self: this
  }, "body{background:#f3f3f3;margin:0;position:relative;font-family:\"Montserrat\",sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}.container.jsx-528896128{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-528896128{padding-top:30px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURLLEFBRzBCLEFBTUwsQUFHTyxBQUdFLEFBT04sQUFRSCxBQUlJLEFBR0EsQUFHUSxjQTlCM0IsR0FhWSxBQVlYLEFBR0EsRUFsQ1MsSUFZYSxFQXlCdEIsR0FwQ2tCLEFBbUJSLFVBQ00sT0FSSSxDQVhpQixJQU90QyxJQWFvQixXQVJELFFBU25CLENBSXlCLFFBeEJ6QixDQVlnQiw2RUFDaEIsYUFZQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXGNvbXBvbmVudFxcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9TaWRlQmFyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG5cdGNvbnN0IFtcclxuXHRcdHNob3csXHJcblx0XHRzZXRTaG93XHJcblx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldFNob3coIXNob3cpO1xyXG5cdFx0Y29uc29sZS5sb2coc2hvdyk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZiYXIgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3N0YXRpYy9tYW5pZmVzdC5qc29uJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL3N0YXRpYy9mYXZpMi5wbmcnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZjY2MDAnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBocmVmPScvc3RhdGljL2ZhdmkyLnBuZycgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScgY29udGVudD0nSGFja2VyIE5ld3MnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScgY29udGVudD0nZGVmYXVsdCcgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0nbW9iaWxlLXdlYi1hcHAtY2FwYWJsZScgY29udGVudD0neWVzJyAvPlxyXG5cdFx0XHRcdDx0aXRsZT5CdWNjaWFyYXRpIFN0b3JlPC90aXRsZT5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc1N3g1NycgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzYweDYwJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi02MHg2MC5wbmcnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNzJ4NzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTcyeDcyLnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc3Nng3NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNzZ4NzYucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzExNHgxMTQnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTExNHgxMTQucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTEyMHgxMjAucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE0NHgxNDQnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE0NHgxNDQucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE1MngxNTInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE1MngxNTIucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE4MHgxODAucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTkyeDE5MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgc2l6ZXM9JzMyeDMyJyBocmVmPScvc3RhdGljL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmcnIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSc5Nng5NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2Zhdmljb24tOTZ4OTYucG5nJyAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTZ4MTYnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZycgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvc3RhdGljL2Zhdmljb24vbWFuaWZlc3QuanNvbicgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScgY29udGVudD0nL3N0YXRpYy9mYXZpY29uL21zLWljb24tMTQ0eDE0NC5wbmcnIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PFNpZGVCYXIgc2hvdz17c2hvd30gLz5cclxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8c3R5bGUganN4PlxyXG5cdFx0XHRcdHtgXHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoKikge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoYSkge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDRyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMwcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.b195fe93ea29d147e581.hot-update.js.map