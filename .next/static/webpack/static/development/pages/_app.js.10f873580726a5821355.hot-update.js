webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");

// lib/withApollo.js
 // import ApolloClient, { InMemoryCache } from 'apollo-boost';





var customFetch = function customFetch(uri, options) {
  var body = options.body,
      newOptions = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, ["body"]);

  var queryString = objectToQuery(JSON.parse(body));
  requestedString = uri + queryString;
  return fetch(requestedString, newOptions);
};

var link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["createHttpLink"])({
  uri: 'https://chupetinps.herokuapp.com',
  useGETForQueries: true
});
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var ctx = _ref.ctx,
      headers = _ref.headers,
      initialState = _ref.initialState;
  return new apollo_client__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
    link: link,
    // link,
    // fetchOptions : {
    // 	useGETForQueries : true
    // },
    // uri          : 'https://chupetinps.herokuapp.com',
    // // https://chupetinps.herokuapp.com
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  getDataFromTree: 'never'
}));

/***/ })

})
//# sourceMappingURL=_app.js.10f873580726a5821355.hot-update.js.map