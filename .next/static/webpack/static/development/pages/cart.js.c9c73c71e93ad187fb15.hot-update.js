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
    className: "jsx-1510162030" + " " + "cart-boleta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1510162030",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-1510162030" + " " + "boleta-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1510162030",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-1510162030" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1510162030" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-1510162030" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-1510162030" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1510162030" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-1510162030" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-1510162030" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1510162030" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-1510162030" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-1510162030" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1510162030",
    __self: this
  }, ".cart-boleta.jsx-1510162030{height:100%;width:100%;max-width:700px;padding:0 0.5em;box-sizing:border-box;}ul.jsx-1510162030{margin:0;padding:0;}.cart-boleta__product.jsx-1510162030{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-1510162030{text-transform:capitalize;}.product-price.jsx-1510162030{font-weight:bold;color:black;}.price.jsx-1510162030{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlMsQUFHeUIsQUFPSCxBQUtJLEFBS2EsQUFHVCxBQUlGLFNBaEJMLEdBUEMsR0F3QmdCLEVBSmYsRUFaZCxJQVBrQixHQWdCbEIsR0FJQSxVQW5Ca0IsR0F1QmxCLGFBdEJ3QixtQkFTSixHQVJwQixlQVNnQyxtSEFDaEMiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvdmlld3MvQm9sZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2xldGEoeyBkYXRhLCBwcmljZXNEaXNjb3VudCwgcHJpY2VzVG9zdW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFcIj5cbiAgICAgIDxoMz5Cb2xldGE8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2xldGEtY29udGFpbmVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5tYXAoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3RcIiBrZXk9e2UuX2lkfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+e2UudGl0bGUudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPiR7ZS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdCBwcmljZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnByaWNlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2Ugb3JpZ2luYWxcIj4ke3ByaWNlc1Rvc3VtfS4wMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnByaWNlRGlzY291bnQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBkaXNjb3VudFwiPiR7cHJpY2VzRGlzY291bnR9LjAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5QQVkgTk9XPC9kaXY+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FydC1ib2xldGEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwLjVlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcnQtYm9sZXRhX19wcm9kdWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDEuNWVtIGF1dG87XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.c9c73c71e93ad187fb15.hot-update.js.map