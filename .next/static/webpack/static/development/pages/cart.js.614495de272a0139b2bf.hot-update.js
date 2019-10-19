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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
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
  }, "Boleta"), __jsx("div", {
    className: "jsx-3812619407" + " " + 'boleta-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("ul", {
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
  }, "$", pricesDiscount)), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3812619407" + " " + 'btn',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "PAY NOW")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3812619407",
    __self: this
  }, ".cart-boleta.jsx-3812619407{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-3812619407{margin:0;padding:0;}.btn.jsx-3812619407{max-width:600px;margin-bottom:2rem;}.original.jsx-3812619407{-webkit-text-decoration:line-through;text-decoration:line-through;color:red;}.cart-boleta__product.jsx-3812619407{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-3812619407{text-transform:capitalize;}.product-price.jsx-3812619407{font-weight:bold;color:black;}.price.jsx-3812619407{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q1MsQUFHeUIsQUFPSCxBQUlPLEFBSWEsQUFJaEIsQUFLYSxBQUdULEFBSUYsU0F2QkwsR0FQQyxHQStCZ0IsQ0FwQlIsQ0FnQlAsRUFuQmQsSUFQa0IsR0F1QmxCLEdBSUEsTUFoQkEsSUFWZ0IsR0E4QmhCLFdBN0J3QixhQVlaLFFBSVEsQ0FmcEIsQ0FZQSxnQkFJZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvbGV0YSh7XG4gIGRhdGEsXG4gIHByaWNlc0Rpc2NvdW50LFxuICBwcmljZXNUb3N1bSxcbiAgcXVhbnRpdHlcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2xldGEnPlxuICAgICAgPGgzPkJvbGV0YTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9sZXRhLWNvbnRhaW5lcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCcga2V5PXtlLnByb2R1Y3QuX2lkfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAge2UucXVhbnRpdHl9eCB7ZS5wcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XG4gICAgICAgICAgICAgICAgICAkeyhlLnByb2R1Y3QucHJpY2UgKiBlLnF1YW50aXR5KS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCBwcmljZSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSBvcmlnaW5hbCc+JHtwcmljZXNUb3N1bX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlRGlzY291bnQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlIGRpc2NvdW50Jz4ke3ByaWNlc0Rpc2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPScvc3VjY2Vzcyc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2J0bic+UEFZIE5PVzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FydC1ib2xldGEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3JpZ2luYWwge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FydC1ib2xldGFfX3Byb2R1Y3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.614495de272a0139b2bf.hot-update.js.map