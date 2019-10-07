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
        setTimeout(function () {
          !data.getUsers ? setShow(true) : null;
        }, 200);
      });
    } catch (err) {
      _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoutes("/");
    }
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_USER,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
        lineNumber: 48
      },
      __self: this
    }, "login");
    if (error) return __jsx(Error, {
      code: "502",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "portal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "login-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
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
        lineNumber: 54
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "username",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
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
        lineNumber: 61
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
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
        lineNumber: 69
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1247757613", [count < 1 ? "none" : "inline", show ? "block" : "none"]]]) + " " + "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, message)));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1247757613",
    dynamic: [count < 1 ? "none" : "inline", show ? "block" : "none"],
    __self: this
  }, ".message.__jsx-style-dynamic-selector{color:red;font-size:0.6rem;display:".concat(count < 1 ? "none" : "inline", ";}.portal.__jsx-style-dynamic-selector{height:100vh;left:0;top:0;width:100vw;position:fixed;z-index:100000000;background:rgba(0,0,0,0.4);display:").concat(show ? "block" : "none", ";}.login-container.__jsx-style-dynamic-selector{background:white;width:300px;margin:10% auto;padding:30px;height:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWF1cmljaW9cXERvY3VtZW50c1xccHJveWVjdG9zXFxidWNjaWFyYXRpLW1hc3RlclxcYnVjY2lhcmF0aS1tYXN0ZXJcXGNvbXBvbmVudFxcdmlld3NcXExvZ2luUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGUyxBQUd1QixBQUtHLEFBV0ksVUFmQSxHQU1WLElBVUssR0FUTixNQUNNLENBUHlCLEVBZ0JyQixTQVJELE9BU0YsUUFSSyxLQVVMLE1BbEJmLE9BU2dDLEFBVWhDLDJCQVR1QyxxQ0FDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXVyaWNpb1xcRG9jdW1lbnRzXFxwcm95ZWN0b3NcXGJ1Y2NpYXJhdGktbWFzdGVyXFxidWNjaWFyYXRpLW1hc3RlclxcY29tcG9uZW50XFx2aWV3c1xcTG9naW5Qb3J0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IEdFVF9VU0VSID0gZ3FsYFxyXG4gIHtcclxuICAgIGdldFVzZXJzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5sZXQgbWVzc2FnZSA9IFwid3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIjtcclxuY29uc3QgTG9naW5Qb3J0YWwgPSAoe1xyXG4gIHNob3csXHJcbiAgY2xpZW50LFxyXG4gIHNldFNob3csXHJcbiAgdXNlcnMsXHJcbiAgbG9hZGluZyxcclxuICBoYW5kbGVMb2dpblxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgbGV0IHVzZXJuYW1lLCBwYXNzd29yZDtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG4gICAgICBzZXRTaG93KGZhbHNlKTtcclxuXHJcbiAgICAgIGhhbmRsZUxvZ2luKGNsaWVudCwgdXNlcm5hbWUsIHBhc3N3b3JkLCB1c2VycykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnJlc2V0U3RvcmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICFkYXRhLmdldFVzZXJzID8gc2V0U2hvdyh0cnVlKSA6IG51bGw7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZXMoXCIvXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1VTRVJ9PlxyXG4gICAgICAgIHsoeyBjbGllbnQsIGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGgzPmxvZ2luPC9oMz47XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgY29kZT1cIjUwMlwiIC8+O1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ3VlYXRlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cInBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+dXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+cGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogJHtjb3VudCA8IDEgPyBcIm5vbmVcIiA6IFwiaW5saW5lXCJ9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvcnRhbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgZGlzcGxheTogJHtzaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Qb3J0YWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Mauricio\\Documents\\proyectos\\bucciarati-master\\bucciarati-master\\component\\views\\LoginPortal.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPortal);

/***/ })

})
//# sourceMappingURL=index.js.0128cf488cdfd2ed50e1.hot-update.js.map