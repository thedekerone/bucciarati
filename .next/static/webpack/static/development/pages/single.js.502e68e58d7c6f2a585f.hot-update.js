webpackHotUpdate("static\\development\\pages\\single.js",{

/***/ "./pages/single.js":
/*!*************************!*\
  !*** ./pages/single.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_ProductView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/ProductView */ "./component/ProductView.js");
/* harmony import */ var _component_Productos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/Productos */ "./component/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\single.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n\t\t\t\t\t\t\t\t\t\t\tquery search($filter: String) {\n\t\t\t\t\t\t\t\t\t\t\t\tsearchProducts(filter: $filter) {\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t\t\t\t\t\ttags\n\t\t\t\t\t\t\t\t\t\t\t\t\tdiscount\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n\tquery Product($PR: ID!) {\n\t\tgetProduct(id: $PR) {\n\t\t\t_id\n\t\t\ttitle\n\t\t\timage\n\t\t\tprice\n\t\t\tdiscount\n\t\t\ttags\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var GETTER = graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject());

var single =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(single, _React$Component);

  function single() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, single);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(single).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(single, [{
    key: "render",
    value: function render() {
      return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("title", {
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Bucciarati Store"), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/favicon/apple-icon-57x57.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/favicon/apple-icon-60x60.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/favicon/apple-icon-72x72.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/favicon/apple-icon-76x76.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/favicon/apple-icon-114x114.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/favicon/apple-icon-120x120.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/favicon/apple-icon-144x144.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/favicon/apple-icon-152x152.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/favicon/apple-icon-180x180.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/favicon/android-icon-192x192.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon/favicon-32x32.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/favicon/favicon-96x96.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon/favicon-16x16.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("link", {
        rel: "manifest",
        href: "/static/favicon/manifest.json",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileImage",
        content: "/static/favicon/ms-icon-144x144.png",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        className: "jsx-2024405385",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
        query: GETTER,
        variables: {
          PR: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
        if (!data.getProduct) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
        return __jsx("div", {
          className: "jsx-2024405385" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx(_component_ProductView__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProduct,
          wrap: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-2024405385" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-2024405385",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Tambi\xE9n podr\xEDa gustarte: "), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
          query: graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject2()),
          variables: {
            filter: data.getProduct.tags[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, function (_ref2) {
          var loading = _ref2.loading,
              error = _ref2.error,
              data = _ref2.data;
          if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          });
          if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          });
          return __jsx(_component_Productos__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: data.searchProducts,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
        })));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2024405385",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-2024405385{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:2rem auto 4rem;}.loading.jsx-2024405385{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:0;width:100vw;height:90vh;margin-top:-90px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2024405385{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}@media (min-width:660px){.container.jsx-2024405385{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXHNpbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmdCLEFBRWdHLEFBRXhFLEFBT0osQUFVRSxBQU9HLGVBTkYsRUFqQkwsQUF3QlgsV0F2QlUsR0FpQlUsT0FoQkosYUFpQlMsR0FoQkgsb0JBSUosRUFIbkIsQUFnQkEsZ0JBWlcsVUFDRSxZQUNBLFlBQ0ssaUJBQ00sbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXHNpbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdFZpZXcnO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uL2NvbXBvbmVudC9Qcm9kdWN0b3MnO1xyXG5pbXBvcnQgeyBRdWVyeSwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9MYXlvdXQnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvU3Bpbm5lcic7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvRXJyb3InO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5jb25zdCBHRVRURVIgPSBncWxgXHJcblx0cXVlcnkgUHJvZHVjdCgkUFI6IElEISkge1xyXG5cdFx0Z2V0UHJvZHVjdChpZDogJFBSKSB7XHJcblx0XHRcdF9pZFxyXG5cdFx0XHR0aXRsZVxyXG5cdFx0XHRpbWFnZVxyXG5cdFx0XHRwcmljZVxyXG5cdFx0XHRkaXNjb3VudFxyXG5cdFx0XHR0YWdzXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5jbGFzcyBzaW5nbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcblx0XHRyZXR1cm4geyBpZDogcXVlcnkuc2x1ZyB9O1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcblx0XHRcdFx0XHQ8dGl0bGU+QnVjY2lhcmF0aSBTdG9yZTwvdGl0bGU+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc1N3g1NycgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nNjB4NjAnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTYweDYwLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzcyeDcyJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi03Mng3Mi5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPSc3Nng3NicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tNzZ4NzYucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTE0eDExNCcgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxMjB4MTIwJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xMjB4MTIwLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE0NHgxNDQnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9hcHBsZS1pY29uLTE0NHgxNDQucG5nJyAvPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBzaXplcz0nMTUyeDE1MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24nIHNpemVzPScxODB4MTgwJyBocmVmPScvc3RhdGljL2Zhdmljb24vYXBwbGUtaWNvbi0xODB4MTgwLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTkyeDE5MicgaHJlZj0nL3N0YXRpYy9mYXZpY29uL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nOTZ4OTYnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTZ4MTYnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZycgLz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nbWFuaWZlc3QnIGhyZWY9Jy9zdGF0aWMvZmF2aWNvbi9tYW5pZmVzdC5qc29uJyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScgY29udGVudD0nL3N0YXRpYy9mYXZpY29uL21zLWljb24tMTQ0eDE0NC5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2ZmZmZmZicgLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PFF1ZXJ5IHF1ZXJ5PXtHRVRURVJ9IHZhcmlhYmxlcz17eyBQUjogdGhpcy5wcm9wcy5pZCB9fT5cclxuXHRcdFx0XHRcdHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz47XHJcblx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPjtcclxuXHRcdFx0XHRcdFx0aWYgKCFkYXRhLmdldFByb2R1Y3QpIHJldHVybiA8RXJyb3IgLz47XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdFZpZXcgZGF0YT17ZGF0YS5nZXRQcm9kdWN0fSB3cmFwPXt0cnVlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpZW5kYXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+VGFtYmnDqW4gcG9kcsOtYSBndXN0YXJ0ZTogPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFF1ZXJ5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVlcnk9e2dxbGBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHF1ZXJ5IHNlYXJjaCgkZmlsdGVyOiBTdHJpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VhcmNoUHJvZHVjdHMoZmlsdGVyOiAkZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhYmxlcz17eyBmaWx0ZXI6IGRhdGEuZ2V0UHJvZHVjdC50YWdzWzBdIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxQcm9kdWN0b3MgZGF0YT17ZGF0YS5zZWFyY2hQcm9kdWN0c30gLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9RdWVyeT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMnJlbSBhdXRvIDRyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubG9hZGluZyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDkwdmg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC05MHB4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaW5nbGU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\single.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref3.query;
                return _context.abrupt("return", {
                  id: query.slug
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return single;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (single);

/***/ })

})
//# sourceMappingURL=single.js.502e68e58d7c6f2a585f.hot-update.js.map