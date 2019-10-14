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
    className: "jsx-881771269",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.map(function (e) {
    return __jsx("li", {
      key: e._id,
      className: "jsx-881771269" + " " + "cart-boleta__product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-881771269" + " " + "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, e.title.toLowerCase()), __jsx("span", {
      className: "jsx-881771269" + " " + "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "$", e.price));
  }), __jsx("li", {
    className: "jsx-881771269" + " " + "cart-boleta__product price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-881771269" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "price:"), __jsx("span", {
    className: "jsx-881771269" + " " + "product-price original",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$", pricesTosum, ".00")), __jsx("li", {
    className: "jsx-881771269" + " " + "cart-boleta__product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-881771269" + " " + "product-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "priceDiscount:"), __jsx("span", {
    className: "jsx-881771269" + " " + "product-price discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "$", pricesDiscount, ".00")), __jsx("div", {
    className: "jsx-881771269" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "PAY NOW")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "881771269",
    __self: this
  }, ".cart-boleta.jsx-881771269{height:100%;width:100%;max-width:400px;}ul.jsx-881771269{margin:0;padding:0;}.cart-boleta__product.jsx-881771269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1.5em auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-title.jsx-881771269{text-transform:capitalize;}.product-price.jsx-881771269{font-weight:bold;color:black;}.price.jsx-881771269{margin-top:5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L3ZpZXdzL0JvbGV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHeUIsQUFLSCxBQUtJLEFBS2EsQUFHVCxBQUlGLFNBaEJMLEdBTEMsR0FzQmIsRUFKYyxFQVpkLElBTGtCLEdBY2xCLEdBSUEsVUFqQkEsbUNBUW9CLGtCQUNZLG1IQUNoQyIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC92aWV3cy9Cb2xldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvbGV0YSh7IGRhdGEsIHByaWNlc0Rpc2NvdW50LCBwcmljZXNUb3N1bSB9KSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5tYXAoZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdFwiIGtleT17ZS5faWR9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+e2UudGl0bGUudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj4ke2UucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcnQtYm9sZXRhX19wcm9kdWN0IHByaWNlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPnByaWNlOjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIG9yaWdpbmFsXCI+JHtwcmljZXNUb3N1bX0uMDA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LWJvbGV0YV9fcHJvZHVjdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5wcmljZURpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlIGRpc2NvdW50XCI+JHtwcmljZXNEaXNjb3VudH0uMDA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+UEFZIE5PVzwvZGl2PlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcnQtYm9sZXRhIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FydC1ib2xldGFfX3Byb2R1Y3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/views/Boleta.js */"));
}

/***/ })

})
//# sourceMappingURL=cart.js.a6a6c341ed46df088a74.hot-update.js.map