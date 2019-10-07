webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/views/LoginPortal.js":
/*!****************************************!*\
  !*** ./component/views/LoginPortal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Mauricio\\Documents\\proyectos\\bucciarati-master\\bucciarati-master\\component\\views\\LoginPortal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    getUsers {\n      _id\n      username\n      password\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var message = "wrong username or password";

var LoginPortal = function LoginPortal(_ref) {
  var show = _ref.show,
      client = _ref.client,
      setShow = _ref.setShow,
      users = _ref.users,
      loading = _ref.loading,
      handleLogin = _ref.handleLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var username, password;

  var handleSubmit = function handleSubmit(e, data) {
    try {
      e.preventDefault();
      setCount(count + 1);
      setShow(false);
      handleLogin(client, username, password, users).then(function () {
        client.resetStore();
        console.log(data);
        !data.getUsers ? setShow(true) : null;
      });
    } catch (err) {
      _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoutes("/");
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_USER,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, function (_ref2) {
    var client = _ref2.client,
        loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "login");
    if (error) return __jsx(Error, {
      code: "502",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "portal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "login-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Logueate"), __jsx("form", {
      action: "post",
      onSubmit: function onSubmit(e) {
        handleSubmit(e, data);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "username",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "username:"), __jsx("input", {
      type: "text",
      ref: function ref(input) {
        username = input;
      },
      placeholder: "username",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "password:"), __jsx("input", {
      type: "password",
      ref: function ref(input) {
        password = input;
      },
      placeholder: "password",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, message)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1247757613",
    dynamic: [count < 1 ? "none" : "inline", show ? "block" : "none"],
    __self: this
  }, ".message.__jsx-style-dynamic-selector{color:red;font-size:0.6rem;display:".concat(count < 1 ? "none" : "inline", ";}.portal.__jsx-style-dynamic-selector{height:100vh;left:0;top:0;width:100vw;position:fixed;z-index:100000000;background:rgba(0,0,0,0.4);display:").concat(show ? "block" : "none", ";}.login-container.__jsx-style-dynamic-selector{background:white;width:300px;margin:10% auto;padding:30px;height:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWF1cmljaW9cXERvY3VtZW50c1xccHJveWVjdG9zXFxidWNjaWFyYXRpLW1hc3RlclxcYnVjY2lhcmF0aS1tYXN0ZXJcXGNvbXBvbmVudFxcdmlld3NcXExvZ2luUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GUyxBQUd1QixBQUtHLEFBV0ksVUFmQSxHQU1WLElBVUssR0FUTixNQUNNLENBUHlCLEVBZ0JyQixTQVJELE9BU0YsUUFSSyxLQVVMLE1BbEJmLE9BU2dDLEFBVWhDLDJCQVR1QyxxQ0FDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXVyaWNpb1xcRG9jdW1lbnRzXFxwcm95ZWN0b3NcXGJ1Y2NpYXJhdGktbWFzdGVyXFxidWNjaWFyYXRpLW1hc3RlclxcY29tcG9uZW50XFx2aWV3c1xcTG9naW5Qb3J0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IEdFVF9VU0VSID0gZ3FsYFxyXG4gIHtcclxuICAgIGdldFVzZXJzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5sZXQgbWVzc2FnZSA9IFwid3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIjtcclxuY29uc3QgTG9naW5Qb3J0YWwgPSAoe1xyXG4gIHNob3csXHJcbiAgY2xpZW50LFxyXG4gIHNldFNob3csXHJcbiAgdXNlcnMsXHJcbiAgbG9hZGluZyxcclxuICBoYW5kbGVMb2dpblxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgbGV0IHVzZXJuYW1lLCBwYXNzd29yZDtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG4gICAgICBzZXRTaG93KGZhbHNlKTtcclxuXHJcbiAgICAgIGhhbmRsZUxvZ2luKGNsaWVudCwgdXNlcm5hbWUsIHBhc3N3b3JkLCB1c2VycykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnJlc2V0U3RvcmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAhZGF0YS5nZXRVc2VycyA/IHNldFNob3codHJ1ZSkgOiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlcyhcIi9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfVVNFUn0+XHJcbiAgICAgICAgeyh7IGNsaWVudCwgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDM+bG9naW48L2gzPjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciBjb2RlPVwiNTAyXCIgLz47XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9ndWVhdGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwicG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj51c2VybmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5wYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAke2NvdW50IDwgMSA/IFwibm9uZVwiIDogXCJpbmxpbmVcIn07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9ydGFsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAke3Nob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBvcnRhbDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Mauricio\\Documents\\proyectos\\bucciarati-master\\bucciarati-master\\component\\views\\LoginPortal.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPortal);

/***/ })

})
//# sourceMappingURL=index.js.e4f1e76e9280e284284c.hot-update.js.map