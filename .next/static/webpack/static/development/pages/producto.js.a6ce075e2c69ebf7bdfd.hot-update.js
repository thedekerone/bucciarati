webpackHotUpdate("static\\development\\pages\\producto.js",{

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


var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\SideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function SideBar(_ref) {
  var show = _ref.show,
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Accesorios"))), ' ', __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Atencion"))), ' ', __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "producto",
    params: {
      tag: ''
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Login"))), ' ', __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      handleLogout();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]) + " " + 'sidebar-list__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2484966300", [show ? '0%' : '-100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "LOGOUT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2484966300",
    dynamic: [show ? '0%' : '-100%'],
    __self: this
  }, ".sidebar.__jsx-style-dynamic-selector{position:fixed;top:0;right:".concat(show ? '0%' : '-100%', ";-webkit-transition:0.4s;transition:0.4s;height:calc(100vh - 55px);width:100%;z-index:4;max-width:600px;background:white;}.sidebar-list.__jsx-style-dynamic-selector{list-style:none;padding:0;}.sidebar-list__item.__jsx-style-dynamic-selector{padding:1em 0.4em;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxcY29tcG9uZW50XFxTaWRlQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDSyxBQUdzQixBQVdDLEFBSUUsZUFkWixDQVdJLEVBSVEsR0FkaUIsS0FXcEMsVUFJQSxvQkFkaUIsd0NBQ1UsMEJBQ2YsV0FDRCxVQUNNLGdCQUNDLGlCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXGNvbXBvbmVudFxcU2lkZUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcih7IHNob3csIGNsaWVudCB9KSB7XHJcblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzdWFyaW8nKTtcclxuXHRcdGF3YWl0IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXNzd29yZCcpO1xyXG5cdFx0YXdhaXQgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG5cdFx0Y2xpZW50LnJlc2V0U3RvcmUoKTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcic+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9J3NpZGViYXItbGlzdCc+XHJcblx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJyBwYXJhbXM9e3sgdGFnOiAnJyB9fT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nc2lkZWJhci1saXN0X19pdGVtJz5cclxuXHRcdFx0XHRcdFx0PHA+QWNjZXNvcmlvczwvcD5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+eycgJ31cclxuXHRcdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICcnIH19PlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdzaWRlYmFyLWxpc3RfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0XHQ8cD5BdGVuY2lvbjwvcD5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+eycgJ31cclxuXHRcdFx0XHQ8TGluayByb3V0ZT0ncHJvZHVjdG8nIHBhcmFtcz17eyB0YWc6ICcnIH19PlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdzaWRlYmFyLWxpc3RfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0XHQ8cD5Mb2dpbjwvcD5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+eycgJ31cclxuXHRcdFx0XHQ8TGluayByb3V0ZT0nLyc+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlTG9nb3V0KCk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nc2lkZWJhci1saXN0X19pdGVtJz5cclxuXHRcdFx0XHRcdFx0PHA+TE9HT1VUPC9wPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0LnNpZGViYXIge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6ICR7c2hvdyA/ICcwJScgOiAnLTEwMCUnfTtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC40cztcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHR6LWluZGV4OiA0O1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zaWRlYmFyLWxpc3Qge1xyXG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnNpZGViYXItbGlzdF9faXRlbSB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDFlbSAwLjRlbTtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\SideBar.js */")));
}

/***/ })

})
//# sourceMappingURL=producto.js.a6ce075e2c69ebf7bdfd.hot-update.js.map