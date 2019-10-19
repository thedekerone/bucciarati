webpackHotUpdate("static/development/pages/producto.js",{

/***/ "./component/SideBar.js":
/*!******************************!*\
  !*** ./component/SideBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/Login */ "./component/views/Login.js");


var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/component/SideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function SideBar(_ref) {
  var setShow = _ref.setShow,
      show = _ref.show,
      client = _ref.client;

  var handleLogout =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return localStorage.removeItem('usuario');

            case 2:
              _context.next = 4;
              return localStorage.removeItem('password');

            case 4:
              _context.next = 6;
              return _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute('/');

            case 6:
              client.resetStore();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, localStorage.getItem('usuario') ? __jsx(_views_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }) : null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Accesorios"))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Atencion"))), !localStorage.getItem('usuario') ? __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Login"))) : __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      setShow(!show);
      handleLogout();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item logout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3272013860", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Logout")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3272013860",
    dynamic: [show ? '0%' : '-100%'],
    __self: this
  }, ".logout.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{color:red;}.sidebar.__jsx-style-dynamic-selector{position:fixed;top:58.73px;right:".concat(show ? '0%' : '-100%', ";-webkit-transition:0.4s;transition:0.4s;height:calc(100vh - 58.73px);width:100%;z-index:4;max-width:600px;background:#f9c22e;}.sidebar-list.__jsx-style-dynamic-selector{list-style:none;padding:0;}.sidebar-list__item.__jsx-style-dynamic-selector{padding:1em 0.4em;color:black;-webkit-filter:brightness(.4) text-align:center;filter:brightness(.4) text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L1NpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NTLEFBR3VCLEFBR0ssQUFXQyxBQUlFLFVBakJwQixLQUdjLENBV0YsRUFJRSxRQUhkLENBWHFDLEdBZ0JqQixnQ0FmRix3Q0FDYSxnQkFlL0IsYUFkYSxXQUNELFVBQ00sZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L1NpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vdmlld3MvTG9naW4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoeyBzZXRTaG93LCBzaG93LCBjbGllbnQgfSkge1xuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzdWFyaW8nKVxuICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXNzd29yZCcpXG4gICAgYXdhaXQgUm91dGVyLnB1c2hSb3V0ZSgnLycpXG4gICAgY2xpZW50LnJlc2V0U3RvcmUoKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nc2lkZWJhci1saXN0Jz5cbiAgICAgICAge2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJykgPyA8TG9naW4gLz4gOiBudWxsfVxuICAgICAgICA8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICcnIH19PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc2lkZWJhci1saXN0X19pdGVtJz5cbiAgICAgICAgICAgIDxwPkFjY2Vzb3Jpb3M8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHJvdXRlPSdwcm9kdWN0bycgcGFyYW1zPXt7IHRhZzogJycgfX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdzaWRlYmFyLWxpc3RfX2l0ZW0nPlxuICAgICAgICAgICAgPHA+QXRlbmNpb248L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHshbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzdWFyaW8nKSA/IChcbiAgICAgICAgICA8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICcnIH19PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzaWRlYmFyLWxpc3RfX2l0ZW0nPlxuICAgICAgICAgICAgICA8cD5Mb2dpbjwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExpbmsgcm91dGU9Jy8nPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3coIXNob3cpXG4gICAgICAgICAgICAgICAgaGFuZGxlTG9nb3V0KClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaWRlYmFyLWxpc3RfX2l0ZW0gbG9nb3V0J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5Mb2dvdXQ8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxvZ291dCBwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogNTguNzNweDtcbiAgICAgICAgICAgIHJpZ2h0OiAke3Nob3cgPyAnMCUnIDogJy0xMDAlJ307XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTguNzNweCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5YzIyZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNpZGViYXItbGlzdCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNpZGViYXItbGlzdF9faXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMC40ZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjQpXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/SideBar.js */")));
}

/***/ })

})
//# sourceMappingURL=producto.js.7f75490be5d56d8f61a7.hot-update.js.map