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
    className: "jsx-2870235813" + " " + 'cart-boleta',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2870235813",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-2870235813" + " " + 'boleta-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2870235813",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (e, index) {
    return __jsx("li", {
      key: e.product._id,
      className: "jsx-2870235813" + " " + 'cart-boleta__product',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2870235813" + " " + 'product-title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, e.quantity, "x ", e.product.title.toLowerCase()), __jsx("span", {
      className: "jsx-2870235813" + " " + 'product-price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "$", (e.product.price * e.quantity).toFixed(2)));
  }), __jsx("li", {
    className: "jsx-2870235813" + " " + 'cart-boleta__product price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2870235813" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-2870235813" + " " + 'product-price original',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "$", pricesTosum)), __jsx("li", {
    className: "jsx-2870235813" + " " + 'cart-boleta__product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2870235813" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-2870235813" + " " + 'product-price discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "$", pricesDiscount)), __jsx("div", {
    className: "jsx-2870235813" + " " + 'btn',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2870235813",
    __self: this
  }, ".cart-boleta.jsx-2870235813{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-2870235813{margin:0;padding:0;}.btn.jsx-2870235813{margin:0;}.original.jsx-2870235813{-webkit-text-decoration:line-through;text-decoration:line-through;color:red;}.cart-boleta__product.jsx-2870235813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-2870235813{text-transform:capitalize;}.product-price.jsx-2870235813{font-weight:bold;color:black;}.price.jsx-2870235813{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1MsQUFHeUIsQUFPSCxBQUlBLEFBR29CLEFBSWhCLEFBS2EsQUFHVCxBQUlGLFNBdEJMLEFBSVosR0FYYSxHQThCZ0IsRUFKZixFQWxCZCxJQVBrQixHQXNCbEIsR0FJQSxVQXpCZ0IsR0E2QmhCLFdBNUJ3QixhQVdaLFFBSVEsQ0FkcEIsQ0FXQSxnQkFJZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9sZXRhKHtcbiAgZGF0YSxcbiAgcHJpY2VzRGlzY291bnQsXG4gIHByaWNlc1Rvc3VtLFxuICBxdWFudGl0eVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YSc+XG4gICAgICA8aDM+Qm9sZXRhPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2xldGEtY29udGFpbmVyJz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NhcnQtYm9sZXRhX19wcm9kdWN0JyBrZXk9e2UucHJvZHVjdC5faWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+XG4gICAgICAgICAgICAgICAgICB7ZS5xdWFudGl0eX14IHtlLnByb2R1Y3QudGl0bGUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlJz5cbiAgICAgICAgICAgICAgICAgICR7KGUucHJvZHVjdC5wcmljZSAqIGUucXVhbnRpdHkpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NhcnQtYm9sZXRhX19wcm9kdWN0IHByaWNlJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+cHJpY2U6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlIG9yaWdpbmFsJz4ke3ByaWNlc1Rvc3VtfTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NhcnQtYm9sZXRhX19wcm9kdWN0Jz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC10aXRsZSc+cHJpY2VEaXNjb3VudDo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2UgZGlzY291bnQnPiR7cHJpY2VzRGlzY291bnR9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+UEFZIE5PVzwvZGl2PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcnQtYm9sZXRhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcmlnaW5hbCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0LWJvbGV0YV9fcHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.6ddf7f3ba94bb5dd7ada.hot-update.js.map