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
    className: "jsx-3687989007" + " " + "cart-boleta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3687989007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-3687989007" + " " + "boleta-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3687989007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-3687989007" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3687989007" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-3687989007" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-3687989007" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3687989007" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-3687989007" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-3687989007" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3687989007" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-3687989007" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-3687989007" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3687989007",
    __self: this
  }, ".cart-boleta.jsx-3687989007{height:100%;width:100%;max-width:700px;padding:0 0.5em;}ul.jsx-3687989007{margin:0;padding:0;}.cart-boleta__product.jsx-3687989007{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-3687989007{text-transform:capitalize;}.product-price.jsx-3687989007{font-weight:bold;color:black;}.price.jsx-3687989007{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlMsQUFHeUIsQUFNSCxBQUtJLEFBS2EsQUFHVCxBQUlGLFNBaEJMLEdBTkMsR0F1QmdCLEVBSmYsRUFaZCxJQU5rQixHQWVsQixHQUlBLFVBbEJrQixHQXNCbEIsYUFyQkEsbUJBUW9CLGtCQUNZLG1IQUNoQyIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC92aWV3cy9Cb2xldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvbGV0YSh7IGRhdGEsIHByaWNlc0Rpc2NvdW50LCBwcmljZXNUb3N1bSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YVwiPlxuICAgICAgPGgzPkJvbGV0YTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvbGV0YS1jb250YWluZXJcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhLm1hcChlID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdFwiIGtleT17ZS5faWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj57ZS50aXRsZS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+JHtlLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0IHByaWNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+cHJpY2U6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZSBvcmlnaW5hbFwiPiR7cHJpY2VzVG9zdW19LjAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+cHJpY2VEaXNjb3VudDo8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIGRpc2NvdW50XCI+JHtwcmljZXNEaXNjb3VudH0uMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlBBWSBOT1c8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJ0LWJvbGV0YSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJ0LWJvbGV0YV9fcHJvZHVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.f0a152147066a92128aa.hot-update.js.map