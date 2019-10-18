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
      pricesTosum = _ref.pricesTosum,
      quantity = _ref.quantity;
  return __jsx("div", {
    className: "jsx-3812619407" + " " + 'cart-boleta',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3812619407" + " " + 'boleta-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3812619407",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Boleta"), __jsx("ul", {
    className: "jsx-3812619407",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.map(function (e, index) {
    return __jsx("li", {
      key: e.product._id,
      className: "jsx-3812619407" + " " + 'cart-boleta__product',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3812619407" + " " + 'product-title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, e.quantity, "x ", e.product.title.toLowerCase()), __jsx("span", {
      className: "jsx-3812619407" + " " + 'product-price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "$", (e.product.price * e.quantity).toFixed(2)));
  }), __jsx("li", {
    className: "jsx-3812619407" + " " + 'cart-boleta__product price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3812619407" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-3812619407" + " " + 'product-price original',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "$", pricesTosum)), __jsx("li", {
    className: "jsx-3812619407" + " " + 'cart-boleta__product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3812619407" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-3812619407" + " " + 'product-price discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "$", pricesDiscount)), __jsx("div", {
    className: "jsx-3812619407" + " " + 'btn',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3812619407",
    __self: this
  }, ".cart-boleta.jsx-3812619407{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-3812619407{margin:0;padding:0;}.btn.jsx-3812619407{max-width:600px;margin-bottom:2rem;}.original.jsx-3812619407{-webkit-text-decoration:line-through;text-decoration:line-through;color:red;}.cart-boleta__product.jsx-3812619407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-3812619407{text-transform:capitalize;}.product-price.jsx-3812619407{font-weight:bold;color:black;}.price.jsx-3812619407{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q1MsQUFHeUIsQUFPSCxBQUlPLEFBSWEsQUFJaEIsQUFLYSxBQUdULEFBSUYsU0F2QkwsR0FQQyxHQStCZ0IsQ0FwQlIsQ0FnQlAsRUFuQmQsSUFQa0IsR0F1QmxCLEdBSUEsTUFoQkEsSUFWZ0IsR0E4QmhCLFdBN0J3QixhQVlaLFFBSVEsQ0FmcEIsQ0FZQSxnQkFJZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9sZXRhKHtcbiAgZGF0YSxcbiAgcHJpY2VzRGlzY291bnQsXG4gIHByaWNlc1Rvc3VtLFxuICBxdWFudGl0eVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9sZXRhLWNvbnRhaW5lcic+XG4gICAgICAgIDxoMz5Cb2xldGE8L2gzPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCcga2V5PXtlLnByb2R1Y3QuX2lkfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAge2UucXVhbnRpdHl9eCB7ZS5wcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XG4gICAgICAgICAgICAgICAgICAkeyhlLnByb2R1Y3QucHJpY2UgKiBlLnF1YW50aXR5KS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCBwcmljZSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSBvcmlnaW5hbCc+JHtwcmljZXNUb3N1bX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlRGlzY291bnQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlIGRpc2NvdW50Jz4ke3ByaWNlc0Rpc2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlBBWSBOT1c8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJ0LWJvbGV0YSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcmlnaW5hbCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0LWJvbGV0YV9fcHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.12f9794fe5290ee33055.hot-update.js.map