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
    className: "jsx-3862553573" + " " + 'cart-boleta',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3862553573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Boleta"), __jsx("div", {
    className: "jsx-3862553573" + " " + 'boleta-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3862553573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (e, index) {
    return __jsx("li", {
      key: e.product._id,
      className: "jsx-3862553573" + " " + 'cart-boleta__product',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3862553573" + " " + 'product-title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, e.quantity, "x ", e.product.title.toLowerCase()), __jsx("span", {
      className: "jsx-3862553573" + " " + 'product-price',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "$", (e.product.price * e.quantity).toFixed(2)));
  }), __jsx("li", {
    className: "jsx-3862553573" + " " + 'cart-boleta__product price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3862553573" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-3862553573" + " " + 'product-price original',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "$", pricesTosum)), __jsx("li", {
    className: "jsx-3862553573" + " " + 'cart-boleta__product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3862553573" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-3862553573" + " " + 'product-price discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "$", pricesDiscount)), __jsx("div", {
    className: "jsx-3862553573" + " " + 'btn',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "PAY NOW"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3862553573",
    __self: this
  }, ".cart-boleta.jsx-3862553573{height:100%;width:100%;max-width:700px;padding:0 1em;box-sizing:border-box;}ul.jsx-3862553573{margin:0;padding:0;}.btn.jsx-3862553573{max-width:600px;}.original.jsx-3862553573{-webkit-text-decoration:line-through;text-decoration:line-through;color:red;}.cart-boleta__product.jsx-3862553573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-3862553573{text-transform:capitalize;}.product-price.jsx-3862553573{font-weight:bold;color:black;}.price.jsx-3862553573{margin-top:5em;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1MsQUFHeUIsQUFPSCxBQUlPLEFBR2EsQUFJaEIsQUFLYSxBQUdULEFBSUYsU0F0QkwsR0FQQyxHQThCZ0IsQ0FuQjdCLENBZWMsRUFsQmQsSUFQa0IsR0FzQmxCLEdBSUEsVUF6QmdCLEdBNkJoQixXQTVCd0IsYUFXWixRQUlRLENBZHBCLENBV0EsZ0JBSWdDLG1IQUNoQyIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC92aWV3cy9Cb2xldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvbGV0YSh7XG4gIGRhdGEsXG4gIHByaWNlc0Rpc2NvdW50LFxuICBwcmljZXNUb3N1bSxcbiAgcXVhbnRpdHlcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydC1ib2xldGEnPlxuICAgICAgPGgzPkJvbGV0YTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9sZXRhLWNvbnRhaW5lcic+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCcga2V5PXtlLnByb2R1Y3QuX2lkfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAge2UucXVhbnRpdHl9eCB7ZS5wcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XG4gICAgICAgICAgICAgICAgICAkeyhlLnByb2R1Y3QucHJpY2UgKiBlLnF1YW50aXR5KS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCBwcmljZSc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSBvcmlnaW5hbCc+JHtwcmljZXNUb3N1bX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjYXJ0LWJvbGV0YV9fcHJvZHVjdCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtdGl0bGUnPnByaWNlRGlzY291bnQ6PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LXByaWNlIGRpc2NvdW50Jz4ke3ByaWNlc0Rpc2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlBBWSBOT1c8L2Rpdj5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJ0LWJvbGV0YSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9yaWdpbmFsIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcnQtYm9sZXRhX19wcm9kdWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDEuNWVtIGF1dG87XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.d14c7ba1917e37ed1cc1.hot-update.js.map