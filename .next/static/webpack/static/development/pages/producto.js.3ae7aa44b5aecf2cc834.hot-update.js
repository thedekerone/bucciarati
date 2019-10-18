webpackHotUpdate("static/development/pages/producto.js",{

/***/ "./component/productViews/Productos.js":
/*!*********************************************!*\
  !*** ./component/productViews/Productos.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Productos; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductView */ "./component/productViews/ProductView.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/component/productViews/Productos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // aeaeaeaea

function Productos(props) {
  return __jsx("div", {
    className: "jsx-3867109634" + " " + 'productos',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.data.map(function (e) {
    return __jsx(_ProductView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: e._id,
      user: props.user,
      data: e,
      wrap: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3867109634",
    __self: this
  }, ".productos.jsx-3867109634{display:grid;gap:1em;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));}a.jsx-3867109634{position:relative;z-index:1;}@media (min-width:660px){.productos.jsx-3867109634{grid-template-columns:repeat(auto-fill,minmax(340px,1fr));}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3Byb2R1Y3RWaWV3cy9Qcm9kdWN0b3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1MsQUFHMEIsQUFNSyxBQUs0QyxhQVZ0RCxLQU1FLEdBSmtELE9BSzlELDhCQUlFLHFCQVJGIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3Byb2R1Y3RWaWV3cy9Qcm9kdWN0b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi9Qcm9kdWN0VmlldydcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcydcbi8vIGFlYWVhZWFlYVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdG9zKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3Rvcyc+XG4gICAgICB7cHJvcHMuZGF0YS5tYXAoZSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFByb2R1Y3RWaWV3IGtleT17ZS5faWR9IHVzZXI9e3Byb3BzLnVzZXJ9IGRhdGE9e2V9IHdyYXA9e2ZhbHNlfSAvPlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucHJvZHVjdG9zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBnYXA6IDFlbTtcblxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgICAgLnByb2R1Y3RvcyB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM0MHB4LCAxZnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/productViews/Productos.js */"));
}

/***/ })

})
//# sourceMappingURL=producto.js.3ae7aa44b5aecf2cc834.hot-update.js.map