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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3050297539",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-3050297539" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3050297539" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-3050297539" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-3050297539" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3050297539" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-3050297539" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-3050297539" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3050297539" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-3050297539" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-3050297539" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "PAY NOW")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3050297539",
    __self: this
  }, ".cart-boleta.jsx-3050297539{height:100%;width:100%;max-width:400px;}ul.jsx-3050297539{margin:0;padding:0;}.price.jsx-3050297539{margin-top:5em;}.cart-boleta__product.jsx-3050297539{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-3050297539{text-transform:capitalize;}.product-price.jsx-3050297539{font-weight:bold;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHeUIsQUFLSCxBQUlNLEFBR0YsQUFLYSxBQUdULFNBZFAsR0FMQyxHQVNiLEVBV2MsRUFkZCxJQUxrQixHQWdCbEIsR0FJQSxVQW5CQSxtQ0FVb0Isa0JBQ1ksbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9sZXRhKHsgZGF0YSwgcHJpY2VzRGlzY291bnQsIHByaWNlc1Rvc3VtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcChlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0XCIga2V5PXtlLl9pZH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57ZS50aXRsZS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7ZS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3QgcHJpY2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+cHJpY2U6PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2Ugb3JpZ2luYWxcIj4ke3ByaWNlc1Rvc3VtfS4wMDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnByaWNlRGlzY291bnQ6PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2UgZGlzY291bnRcIj4ke3ByaWNlc0Rpc2NvdW50fS4wMDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5QQVkgTk9XPC9kaXY+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FydC1ib2xldGEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FydC1ib2xldGFfX3Byb2R1Y3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.f6be0d6986c9208bcae6.hot-update.js.map