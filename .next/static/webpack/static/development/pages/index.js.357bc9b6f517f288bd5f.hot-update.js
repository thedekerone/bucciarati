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
        }, 2000);
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
  }, ".message.__jsx-style-dynamic-selector{color:red;font-size:0.6rem;display:".concat(count < 1 ? "none" : "inline", ";}.portal.__jsx-style-dynamic-selector{height:100vh;left:0;top:0;width:100vw;position:fixed;z-index:100000000;background:rgba(0,0,0,0.4);display:").concat(show ? "block" : "none", ";}.login-container.__jsx-style-dynamic-selector{background:white;width:300px;margin:10% auto;padding:30px;height:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWF1cmljaW9cXERvY3VtZW50c1xccHJveWVjdG9zXFxidWNjaWFyYXRpLW1hc3RlclxcYnVjY2lhcmF0aS1tYXN0ZXJcXGNvbXBvbmVudFxcdmlld3NcXExvZ2luUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGUyxBQUd1QixBQUtHLEFBV0ksVUFmQSxHQU1WLElBVUssR0FUTixNQUNNLENBUHlCLEVBZ0JyQixTQVJELE9BU0YsUUFSSyxLQVVMLE1BbEJmLE9BU2dDLEFBVWhDLDJCQVR1QyxxQ0FDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXVyaWNpb1xcRG9jdW1lbnRzXFxwcm95ZWN0b3NcXGJ1Y2NpYXJhdGktbWFzdGVyXFxidWNjaWFyYXRpLW1hc3RlclxcY29tcG9uZW50XFx2aWV3c1xcTG9naW5Qb3J0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmNvbnN0IEdFVF9VU0VSID0gZ3FsYFxyXG4gIHtcclxuICAgIGdldFVzZXJzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIHVzZXJuYW1lXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5sZXQgbWVzc2FnZSA9IFwid3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIjtcclxuY29uc3QgTG9naW5Qb3J0YWwgPSAoe1xyXG4gIHNob3csXHJcbiAgY2xpZW50LFxyXG4gIHNldFNob3csXHJcbiAgdXNlcnMsXHJcbiAgbG9hZGluZyxcclxuICBoYW5kbGVMb2dpblxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgbGV0IHVzZXJuYW1lLCBwYXNzd29yZDtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG4gICAgICBzZXRTaG93KGZhbHNlKTtcclxuXHJcbiAgICAgIGhhbmRsZUxvZ2luKGNsaWVudCwgdXNlcm5hbWUsIHBhc3N3b3JkLCB1c2VycykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnJlc2V0U3RvcmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICFkYXRhLmdldFVzZXJzID8gc2V0U2hvdyh0cnVlKSA6IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGVzKFwiL1wiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9VU0VSfT5cclxuICAgICAgICB7KHsgY2xpZW50LCBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoMz5sb2dpbjwvaDM+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIGNvZGU9XCI1MDJcIiAvPjtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2d1ZWF0ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPnVzZXJuYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7Y291bnQgPCAxID8gXCJub25lXCIgOiBcImlubGluZVwifTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb3J0YWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDAwMDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7c2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUG9ydGFsO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Mauricio\\Documents\\proyectos\\bucciarati-master\\bucciarati-master\\component\\views\\LoginPortal.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPortal);

/***/ })

})
//# sourceMappingURL=index.js.357bc9b6f517f288bd5f.hot-update.js.map