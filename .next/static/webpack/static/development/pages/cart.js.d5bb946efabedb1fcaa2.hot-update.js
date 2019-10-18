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
    className: "jsx-4148409517" + " " + 'cart-boleta',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4148409517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-4148409517" + " " + 'boleta-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4148409517",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (e, index) {
    return __jsx("li", {
      key: e.product._id,
      className: "jsx-4148409517" + " " + 'cart-boleta__product',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-4148409517" + " " + 'product-title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, e.quantity, "x ", e.product.title.toLowerCase()), __jsx("span", {
      className: "jsx-4148409517" + " " + 'product-price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "$", (e.product.price * e.quantity).toFixed(2)));
  }), __jsx("li", {
    className: "jsx-4148409517" + " " + 'cart-boleta__product price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4148409517" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-4148409517" + " " + 'product-price original',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "$", pricesTosum)), __jsx("li", {
    className: "jsx-4148409517" + " " + 'cart-boleta__product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4148409517" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-4148409517" + " " + 'product-price discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "$", pricesDiscount)), __jsx("div", {
    className: "jsx-4148409517" + " " + 'btn',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4148409517",
    __self: this
  }, ".cart-boleta.jsx-4148409517{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-4148409517{margin:0;padding:0;}.btn.jsx-4148409517{width:100% !important;}.original.jsx-4148409517{-webkit-text-decoration:line-through;text-decoration:line-through;color:red;}.cart-boleta__product.jsx-4148409517{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-4148409517{text-transform:capitalize;}.product-price.jsx-4148409517{font-weight:bold;color:black;}.price.jsx-4148409517{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1MsQUFHeUIsQUFPSCxBQUlhLEFBR08sQUFJaEIsQUFLYSxBQUdULEFBSUYsU0F0QkwsR0FQQyxHQThCZ0IsRUFKZixFQWxCZCxHQUdBLENBVmtCLEdBc0JsQixHQUlBLFVBekJnQixHQTZCaEIsV0E1QndCLGFBV1osUUFJUSxDQWRwQixDQVdBLGdCQUlnQyxtSEFDaEMiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvdmlld3MvQm9sZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2xldGEoe1xuICBkYXRhLFxuICBwcmljZXNEaXNjb3VudCxcbiAgcHJpY2VzVG9zdW0sXG4gIHF1YW50aXR5XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcnQtYm9sZXRhJz5cbiAgICAgIDxoMz5Cb2xldGE8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JvbGV0YS1jb250YWluZXInPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2RhdGEubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY2FydC1ib2xldGFfX3Byb2R1Y3QnIGtleT17ZS5wcm9kdWN0Ll9pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgIHtlLnF1YW50aXR5fXgge2UucHJvZHVjdC50aXRsZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2UnPlxuICAgICAgICAgICAgICAgICAgJHsoZS5wcm9kdWN0LnByaWNlICogZS5xdWFudGl0eSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY2FydC1ib2xldGFfX3Byb2R1Y3QgcHJpY2UnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5wcmljZTo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2Ugb3JpZ2luYWwnPiR7cHJpY2VzVG9zdW19PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY2FydC1ib2xldGFfX3Byb2R1Y3QnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5wcmljZURpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSBkaXNjb3VudCc+JHtwcmljZXNEaXNjb3VudH08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz5QQVkgTk9XPC9kaXY+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FydC1ib2xldGEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcmlnaW5hbCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0LWJvbGV0YV9fcHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.d5bb946efabedb1fcaa2.hot-update.js.map