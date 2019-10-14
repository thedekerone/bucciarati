webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");

// lib/withApollo.js
 // import ApolloClient, { InMemoryCache } from 'apollo-boost';





var link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["createHttpLink"])({
  uri: "https://chupetinps.herokuapp.com",
  useGETForQueries: true
});
var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_5__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var user = localStorage.usuario;
  var pass = localStorage.password; // return the headers to the context so httpLink can read them

  return {
    headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
      usuario: user ? user : null,
      password: pass ? pass : null
    })
  };
});
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2) {
  var ctx = _ref2.ctx,
      headers = _ref2.headers,
      initialState = _ref2.initialState;
  return new apollo_client__WEBPACK_IMPORTED_MODULE_2__["default"]({
    link: authLink.concat(link),
    // link,
    // fetchOptions : {
    // 	useGETForQueries : true
    // },
    // uri          : 'https://chupetinps.herokuapp.com',
    // // https://chupetinps.herokuapp.com
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  getDataFromTree: "never"
}));

/***/ })

})
//# sourceMappingURL=_app.js.fd9578a52ccb9b4f62d4.hot-update.js.map