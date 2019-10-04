webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
// lib/withApollo.js


/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(function (_ref) {
  var ctx = _ref.ctx,
      headers = _ref.headers,
      initialState = _ref.initialState;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    request: function request(operation) {
      var user = localStorage.usuario;
      var pass = localStorage.password;
      operation.setContext({
        headers: {
          usuario: user ? user : null,
          password: pass ? pass : null
        }
      });
    },
    uri: 'http://localhost:4000',
    // https://chupetinps.herokuapp.com
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  getDataFromTree: 'never'
}));

/***/ })

})
//# sourceMappingURL=_app.js.574650034f6f9fdb0447.hot-update.js.map