webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./component/views/Boleta.js":
/*!***********************************!*\
  !*** ./component/views/Boleta.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Boleta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Boleta(_ref) {
  var data = _ref.data,
      pricesDiscount = _ref.pricesDiscount,
      pricesTosum = _ref.pricesTosum;
  return __jsx("div", {
    className: "jsx-4029178319" + " " + "cart-boleta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4029178319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-4029178319" + " " + "boleta-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4029178319",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-4029178319" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-4029178319" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-4029178319" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-4029178319" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4029178319" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-4029178319" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-4029178319" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4029178319" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-4029178319" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-4029178319" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4029178319",
    __self: this
  }, ".cart-boleta.jsx-4029178319{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-4029178319{margin:0;padding:0;}.cart-boleta__product.jsx-4029178319{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-4029178319{text-transform:capitalize;}.product-price.jsx-4029178319{font-weight:bold;color:black;}.price.jsx-4029178319{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlMsQUFHeUIsQUFPSCxBQUtJLEFBS2EsQUFHVCxBQUlGLFNBaEJMLEdBUEMsR0F3QmdCLEVBSmYsRUFaZCxJQVBrQixHQWdCbEIsR0FJQSxVQW5CZ0IsR0F1QmhCLFdBdEJ3QixxQkFTSixDQVJwQixpQkFTZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9sZXRhKHsgZGF0YSwgcHJpY2VzRGlzY291bnQsIHByaWNlc1Rvc3VtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhXCI+XG4gICAgICA8aDM+Qm9sZXRhPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9sZXRhLWNvbnRhaW5lclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2RhdGEubWFwKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0XCIga2V5PXtlLl9pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPntlLnRpdGxlLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4ke2UucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3QgcHJpY2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5wcmljZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG9yaWdpbmFsXCI+JHtwcmljZXNUb3N1bX0uMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5wcmljZURpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgZGlzY291bnRcIj4ke3ByaWNlc0Rpc2NvdW50fS4wMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+UEFZIE5PVzwvZGl2PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcnQtYm9sZXRhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FydC1ib2xldGFfX3Byb2R1Y3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.3a0f4dacd335ae72e260.hot-update.js.map