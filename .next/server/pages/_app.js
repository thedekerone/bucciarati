module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// lib/withApollo.js\n\n// import ApolloClient, { InMemoryCache } from 'apollo-boost';\n\n\n\n\n// // https://chupetinps.herokuapp.com\n\nconst link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__[\"createHttpLink\"])({\n  uri: 'https://bucciaratiserver-production.up.railway.app',\n  useGETForQueries: true\n});\nconst authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__[\"setContext\"])((_, {\n  headers\n}) => {\n  // get the authentication token from local storage if it exists\n  const user = localStorage.usuario;\n  const pass = localStorage.password;\n  // return the headers to the context so httpLink can read them\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      usuario: user ? user : null,\n      password: pass ? pass : null\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(({\n  ctx,\n  headers,\n  initialState\n}) => new apollo_client__WEBPACK_IMPORTED_MODULE_1___default.a({\n  link: authLink.concat(link),\n  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]().restore(initialState || {})\n}), {\n  getDataFromTree: 'never'\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvd2l0aEFwb2xsby5qcz81MjM2Il0sIm5hbWVzIjpbImxpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsInVzZUdFVEZvclF1ZXJpZXMiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJfIiwiaGVhZGVycyIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJ1c3VhcmlvIiwicGFzcyIsInBhc3N3b3JkIiwiX29iamVjdFNwcmVhZCIsIndpdGhBcG9sbG8iLCJjdHgiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiZ2V0RGF0YUZyb21UcmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDekM7QUFDd0M7QUFDYTtBQUNKO0FBQ0Q7QUFDaEQ7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyx1RUFBYyxDQUFDO0VBQ3hCQyxHQUFHLEVBQUUsb0RBQW9EO0VBQzNEQyxnQkFBZ0IsRUFBRTtBQUNwQixDQUFDLENBQUM7QUFDRixNQUFNQyxRQUFRLEdBQUdDLHNFQUFVLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFO0VBQUVDO0FBQVEsQ0FBQyxLQUFLO0VBQzlDO0VBQ0EsTUFBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQU87RUFDakMsTUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNHLFFBQVE7RUFDbEM7RUFDQSxPQUFPO0lBQ0xMLE9BQU8sRUFBQU0sYUFBQSxDQUFBQSxhQUFBLEtBQ0ZOLE9BQU87TUFDVkcsT0FBTyxFQUFFRixJQUFJLEdBQUdBLElBQUksR0FBRyxJQUFJO01BQzNCSSxRQUFRLEVBQUVELElBQUksR0FBR0EsSUFBSSxHQUFHO0lBQUk7RUFFaEMsQ0FBQztBQUNILENBQUMsQ0FBQztBQUNhRyxzSEFBVSxDQUN2QixDQUFDO0VBQUVDLEdBQUc7RUFBRVIsT0FBTztFQUFFUztBQUFhLENBQUMsS0FDN0IsSUFBSUMsb0RBQVksQ0FBQztFQUNmakIsSUFBSSxFQUFFSSxRQUFRLENBQUNjLE1BQU0sQ0FBQ2xCLElBQUksQ0FBQztFQUUzQm1CLEtBQUssRUFBRSxJQUFJQyxtRUFBYSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDTCxZQUFZLElBQUksQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyxFQUNKO0VBQ0VNLGVBQWUsRUFBRTtBQUNuQixDQUNGLENBQUMiLCJmaWxlIjoiLi9saWIvd2l0aEFwb2xsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi93aXRoQXBvbGxvLmpzXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICduZXh0LXdpdGgtYXBvbGxvJ1xuLy8gaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWNsaWVudCdcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknXG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCdcbi8vIC8vIGh0dHBzOi8vY2h1cGV0aW5wcy5oZXJva3VhcHAuY29tXG5cbmNvbnN0IGxpbmsgPSBjcmVhdGVIdHRwTGluayh7XG4gICAgdXJpOiAnaHR0cHM6Ly9idWNjaWFyYXRpc2VydmVyLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAnLFxuICB1c2VHRVRGb3JRdWVyaWVzOiB0cnVlXG59KVxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAvLyBnZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS51c3VhcmlvXG4gIGNvbnN0IHBhc3MgPSBsb2NhbFN0b3JhZ2UucGFzc3dvcmRcbiAgLy8gcmV0dXJuIHRoZSBoZWFkZXJzIHRvIHRoZSBjb250ZXh0IHNvIGh0dHBMaW5rIGNhbiByZWFkIHRoZW1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgdXN1YXJpbzogdXNlciA/IHVzZXIgOiBudWxsLFxuICAgICAgcGFzc3dvcmQ6IHBhc3MgPyBwYXNzIDogbnVsbFxuICAgIH1cbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oXG4gICh7IGN0eCwgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pID0+XG4gICAgbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBsaW5rOiBhdXRoTGluay5jb25jYXQobGluayksXG5cbiAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KVxuICAgIH0pLFxuICB7XG4gICAgZ2V0RGF0YUZyb21UcmVlOiAnbmV2ZXInXG4gIH1cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/withApollo.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric; /**\n                                                          * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n                                                          * This allows for keeping state between navigation, custom error handling, injecting additional data.\n                                                          */\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps,\n    // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n}\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJBcHAiLCJSZWFjdCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsInVybCIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImNvbnNvbGUiLCJ3YXJuIiwiQ29udGFpbmVyIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7eURBa0JBOzs7O0FBSUEsZUFBZUEsa0JBQWYsQ0FBa0M7RUFDaENDLFNBRGdDO0VBRWhDQztBQUZnQyxDQUFsQyxFQUd5QztFQUN2QyxNQUFNQyxTQUFTLEdBQUcsTUFBTSxnQ0FBb0JGLFNBQXBCLEVBQStCQyxHQUEvQixDQUF4QjtFQUNBLE9BQU87SUFBRUM7RUFBRixDQUFQO0FBQ0Q7QUFFYyxNQUFNQyxHQUFOLFNBQTJDQyxlQUFNSixTQUc5RDtFQUlBO0VBQ0E7RUFDQTtFQUNBSyxpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFlQyxVQUFmLEVBQTRDO0lBQzNELE1BQU1ELEtBQU47RUFDRDtFQUVERSxNQUFNLEdBQUc7SUFDUCxNQUFNO01BQUVDLE1BQUY7TUFBVVQsU0FBVjtNQUFxQkUsU0FBckI7TUFBZ0NRLE9BQWhDO01BQXlDQztJQUF6QyxJQUFxRCxLQUN4REMsS0FESDtJQUdBLG9CQUNFLDZCQUFDLFNBQUQsb0JBQ01WLFNBRE47SUFHSTtJQUNBO0lBQ0ksRUFBRVEsT0FBTyxJQUFJQyxPQUFiLElBQXdCO01BQUVFLEdBQUcsRUFBRUMsU0FBUyxDQUFDTCxNQUFEO0lBQWhCLENBQXhCLEdBQXFELEVBTDdELEVBREY7RUFVRDtBQXpCRDs7QUFIbUJOLEcsQ0FJWlksbUIsR0FBc0JoQixrQjtBQUpWSSxHLENBS1phLGUsR0FBa0JqQixrQjtBQTBCM0IsSUFBSWtCLGFBQUo7QUFDQSxJQUFJQyxPQUFKO0FBRUEsVUFBMkM7RUFDekNELGFBQWEsR0FBRyxxQkFBUyxNQUFNO0lBQzdCRSxPQUFPLENBQUNDLElBQVJELENBQ0csMElBREhBO0VBR0QsQ0FKZSxDQUFoQkY7RUFNQUMsT0FBTyxHQUFHLHFCQUFTLE1BQU07SUFDdkJDLE9BQU8sQ0FBQ2IsS0FBUmEsQ0FDRyx5RkFESEE7RUFHRCxDQUpTLENBQVZEO0FBS0QsQ0FFRDtBQUNPLFNBQVNHLFNBQVQsQ0FBbUJDLENBQW5CLEVBQTJCO0VBQ2hDLFVBQTJDTCxhQUFhO0VBQ3hELE9BQU9LLENBQUMsQ0FBQ0MsUUFBVDtBQUNEO0FBRU0sU0FBU1QsU0FBVCxDQUFtQkwsTUFBbkIsRUFBbUM7RUFDeEM7RUFDQSxNQUFNO0lBQUVlLFFBQUY7SUFBWUMsTUFBWjtJQUFvQkM7RUFBcEIsSUFBOEJqQixNQUFwQztFQUNBLE9BQU87SUFDTCxJQUFJaUIsS0FBSixHQUFZO01BQ1YsVUFBMkNSLE9BQU87TUFDbEQsT0FBT1EsS0FBUDtJQUNELENBSkk7SUFLTCxJQUFJRixRQUFKLEdBQWU7TUFDYixVQUEyQ04sT0FBTztNQUNsRCxPQUFPTSxRQUFQO0lBQ0QsQ0FSSTtJQVNMLElBQUlDLE1BQUosR0FBYTtNQUNYLFVBQTJDUCxPQUFPO01BQ2xELE9BQU9PLE1BQVA7SUFDRCxDQVpJO0lBYUxFLElBQUksRUFBRSxNQUFNO01BQ1YsVUFBMkNULE9BQU87TUFDbERULE1BQU0sQ0FBQ2tCLElBQVBsQjtJQUNELENBaEJJO0lBaUJMbUIsSUFBSSxFQUFFLENBQUNmLEdBQUQsRUFBY2dCLEVBQWQsS0FBOEI7TUFDbEMsVUFBMkNYLE9BQU87TUFDbEQsT0FBT1QsTUFBTSxDQUFDbUIsSUFBUG5CLENBQVlJLEdBQVpKLEVBQWlCb0IsRUFBakJwQixDQUFQO0lBQ0QsQ0FwQkk7SUFxQkxxQixNQUFNLEVBQUUsQ0FBQ0MsSUFBRCxFQUFlRixFQUFmLEtBQStCO01BQ3JDLFVBQTJDWCxPQUFPO01BQ2xELE1BQU1jLFNBQVMsR0FBR0gsRUFBRSxHQUFHRSxJQUFILEdBQVUsRUFBOUI7TUFDQSxNQUFNRSxPQUFPLEdBQUdKLEVBQUUsSUFBSUUsSUFBdEI7TUFFQSxPQUFPdEIsTUFBTSxDQUFDbUIsSUFBUG5CLENBQVl1QixTQUFadkIsRUFBdUJ3QixPQUF2QnhCLENBQVA7SUFDRCxDQTNCSTtJQTRCTHlCLE9BQU8sRUFBRSxDQUFDckIsR0FBRCxFQUFjZ0IsRUFBZCxLQUE4QjtNQUNyQyxVQUEyQ1gsT0FBTztNQUNsRCxPQUFPVCxNQUFNLENBQUN5QixPQUFQekIsQ0FBZUksR0FBZkosRUFBb0JvQixFQUFwQnBCLENBQVA7SUFDRCxDQS9CSTtJQWdDTDBCLFNBQVMsRUFBRSxDQUFDSixJQUFELEVBQWVGLEVBQWYsS0FBK0I7TUFDeEMsVUFBMkNYLE9BQU87TUFDbEQsTUFBTWtCLFlBQVksR0FBR1AsRUFBRSxHQUFHRSxJQUFILEdBQVUsRUFBakM7TUFDQSxNQUFNTSxVQUFVLEdBQUdSLEVBQUUsSUFBSUUsSUFBekI7TUFFQSxPQUFPdEIsTUFBTSxDQUFDeUIsT0FBUHpCLENBQWUyQixZQUFmM0IsRUFBNkI0QixVQUE3QjVCLENBQVA7SUFDRDtFQXRDSSxDQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/withApollo */ \"./lib/withApollo.js\");\nvar _jsxFileName = \"/home/dekker/Documents/projects/github/bucciarati/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  render() {\n    const {\n      Component,\n      pageProps,\n      apollo\n    } = this.props;\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n      client: apollo,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 4\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }\n    })));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJwcm9wcyIsIl9fanN4IiwiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9leHRlbmRzIiwid2l0aEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ21CO0FBQ0g7QUFDM0MsTUFBTUEsS0FBSyxTQUFTQywrQ0FBRyxDQUFDO0VBQ3ZCQyxNQUFNQSxDQUFBLEVBQUc7SUFDUixNQUFNO01BQUVDLFNBQVM7TUFBRUMsU0FBUztNQUFFQztJQUFPLENBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUs7SUFDbkQsT0FDQ0MsS0FBQSxDQUFDQywyREFBYztNQUFDQyxNQUFNLEVBQUVKLE1BQU87TUFBQUssTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQzlCUixLQUFBLENBQUNKLFNBQVMsRUFBQWEsUUFBQSxLQUFLWixTQUFTO01BQUFNLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFHLENBQ1osQ0FBQztFQUVuQjtBQUNEO0FBQ2VFLDhIQUFVLENBQUNqQixLQUFLLENBQUMiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tICcuLi9saWIvd2l0aEFwb2xsbyc7XG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvQXBvbGxvUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhNeUFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-context\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCI/YmQ1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-context\n");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1odHRwXCI/MTExMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-http\n");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-with-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCI/YmE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LXdpdGgtYXBvbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-with-apollo\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ })

/******/ });