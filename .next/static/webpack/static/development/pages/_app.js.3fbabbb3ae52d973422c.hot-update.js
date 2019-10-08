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
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
// lib/withApollo.js
 // import ApolloClient, { InMemoryCache } from 'apollo-boost';




var link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
  uri: 'https://chupetinps.herokuapp.com'
});
var authLink = setContext(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var user = localStorage.usuario;
  var pass = localStorage.password; // return the headers to the context so httpLink can read them

  return {
    headers: {
      usuario: user ? user : null,
      password: pass ? pass : null
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(function (_ref2) {
  var ctx = _ref2.ctx,
      headers = _ref2.headers,
      initialState = _ref2.initialState;
  return new apollo_client__WEBPACK_IMPORTED_MODULE_1__["default"]({
    link: authLink.concat(link),
    // link,
    // fetchOptions : {
    // 	useGETForQueries : true
    // },
    // uri          : 'https://chupetinps.herokuapp.com',
    // // https://chupetinps.herokuapp.com
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  getDataFromTree: 'never'
}));

/***/ })

})
//# sourceMappingURL=_app.js.3fbabbb3ae52d973422c.hot-update.js.map