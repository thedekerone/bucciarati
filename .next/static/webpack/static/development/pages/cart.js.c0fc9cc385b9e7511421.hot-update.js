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
    className: "jsx-2082635236",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-2082635236" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2082635236" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-2082635236" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-2082635236" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2082635236" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-2082635236" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-2082635236" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2082635236" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-2082635236" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-2082635236" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "PAY NOW")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2082635236",
    __self: this
  }, ".cart-boleta.jsx-2082635236{height:100%;width:100%;max-width:400px;}ul.jsx-2082635236{margin:0;padding:0;}.cart-boleta__product.jsx-2082635236{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-2082635236{text-transform:capitalize;}.product-price.jsx-2082635236{font-weight:bold;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHeUIsQUFLSCxBQUlJLEFBS2EsQUFHVCxTQVhQLEdBTEMsS0FpQkMsRUFYZCxJQUxrQixHQWFsQixHQUlBLFVBaEJBLG1DQU9vQixrQkFDWSxtSEFDaEMiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvdmlld3MvQm9sZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2xldGEoeyBkYXRhLCBwcmljZXNEaXNjb3VudCwgcHJpY2VzVG9zdW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKGUgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3RcIiBrZXk9e2UuX2lkfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPntlLnRpdGxlLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHtlLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdCBwcmljZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5wcmljZTo8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBvcmlnaW5hbFwiPiR7cHJpY2VzVG9zdW19LjAwPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FydC1ib2xldGFfX3Byb2R1Y3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+cHJpY2VEaXNjb3VudDo8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBkaXNjb3VudFwiPiR7cHJpY2VzRGlzY291bnR9LjAwPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlBBWSBOT1c8L2Rpdj5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJ0LWJvbGV0YSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJ0LWJvbGV0YV9fcHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.c0fc9cc385b9e7511421.hot-update.js.map