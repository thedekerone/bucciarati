webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/IsOffline.js":
/*!****************************!*\
  !*** ./utils/IsOffline.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\utils\\IsOffline.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var isOffline = function isOffline(_ref) {
  var children = _ref.children;
  var navigator;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      online = _useState[0],
      setOnline = _useState[1];

  console.log(window.navigator ? navigator.online : 'aea');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!window) return;
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return function () {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  });

  function goOnline() {
    setOnline(true);
  }

  function goOffline() {
    setOnline(false);
  }

  if (online) {
    return null;
  }

  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(isOffline));

/***/ })

})
//# sourceMappingURL=index.js.d7df9e70ee64f8ea9220.hot-update.js.map