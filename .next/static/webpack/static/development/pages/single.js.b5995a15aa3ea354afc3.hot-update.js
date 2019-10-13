webpackHotUpdate("static/development/pages/single.js",{

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
/* harmony import */ var _component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/productViews/ProductView */ "./component/productViews/ProductView.js");
/* harmony import */ var _component_productViews_Productos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/productViews/Productos */ "./component/productViews/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");








var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/pages/single.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n                      query search($filter: String) {\n                        searchProducts(filter: $filter) {\n                          title\n                          _id\n                          image\n                          price\n                          tags\n                          discount\n                        }\n                      }\n                    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  query Product($PR: ID!) {\n    getProduct(id: $PR) {\n      _id\n      title\n      image\n      price\n      discount\n      tags\n    }\n  }\n"]);

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
          lineNumber: 27
        },
        __self: this
      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
        query: GETTER,
        variables: {
          PR: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
        if (!data.getProduct) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
        return __jsx("div", {
          className: "jsx-612413578" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, __jsx(_component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProduct,
          wrap: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-612413578" + " " + "tiendas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-612413578",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Tambi\xE9n podr\xEDa gustarte: "), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
          query: graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject2()),
          variables: {
            filter: data.getProduct.tags[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, function (_ref2) {
          var loading = _ref2.loading,
              error = _ref2.error,
              data = _ref2.data;
          if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          });
          if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          });
          return __jsx(_component_productViews_Productos__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: data.searchProducts,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
        })));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "612413578",
        __self: this
      }, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap\");.container.jsx-612413578{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:2rem auto 4rem;}.loading.jsx-612413578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:0;width:100vw;height:90vh;margin-top:-90px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-612413578{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}@media (min-width:660px){.container.jsx-612413578{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvcGFnZXMvc2luZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEb0IsQUFFcUcsQUFFdkUsQUFPSixBQVVFLEFBT0ksZUFOSCxFQWpCTCxBQXdCWCxXQXZCVSxHQWlCVSxPQWhCSixhQWlCUyxHQWhCSCxvQkFJSixFQUhwQixBQWdCQSxnQkFaWSxVQUNFLFlBQ0EsWUFDSyxpQkFDTSxtR0FDSiw2RkFDckIiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9wYWdlcy9zaW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9kdWN0Vmlld3MvUHJvZHVjdFZpZXdcIjtcbmltcG9ydCBQcm9kdWN0b3MgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9kdWN0Vmlld3MvUHJvZHVjdG9zXCI7XG5pbXBvcnQgeyBRdWVyeSwgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50L3ZpZXdzL1NwaW5uZXJcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vY29tcG9uZW50L3ZpZXdzL0Vycm9yXCI7XG5jb25zdCBHRVRURVIgPSBncWxgXG4gIHF1ZXJ5IFByb2R1Y3QoJFBSOiBJRCEpIHtcbiAgICBnZXRQcm9kdWN0KGlkOiAkUFIpIHtcbiAgICAgIF9pZFxuICAgICAgdGl0bGVcbiAgICAgIGltYWdlXG4gICAgICBwcmljZVxuICAgICAgZGlzY291bnRcbiAgICAgIHRhZ3NcbiAgICB9XG4gIH1cbmA7XG5jbGFzcyBzaW5nbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIHJldHVybiB7IGlkOiBxdWVyeS5zbHVnIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8UXVlcnkgcXVlcnk9e0dFVFRFUn0gdmFyaWFibGVzPXt7IFBSOiB0aGlzLnByb3BzLmlkIH19PlxuICAgICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+O1xuICAgICAgICAgICAgaWYgKCFkYXRhLmdldFByb2R1Y3QpIHJldHVybiA8RXJyb3IgLz47XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0VmlldyBkYXRhPXtkYXRhLmdldFByb2R1Y3R9IHdyYXA9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWVuZGFzXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+VGFtYmnDqW4gcG9kcsOtYSBndXN0YXJ0ZTogPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxRdWVyeVxuICAgICAgICAgICAgICAgICAgICBxdWVyeT17Z3FsYFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IHNlYXJjaCgkZmlsdGVyOiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFByb2R1Y3RzKGZpbHRlcjogJGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzPXt7IGZpbHRlcjogZGF0YS5nZXRQcm9kdWN0LnRhZ3NbMF0gfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPjtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RvcyBkYXRhPXtkYXRhLnNlYXJjaFByb2R1Y3RzfSAvPjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIDwvUXVlcnk+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L1F1ZXJ5PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0byA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZTtcbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/pages/single.js */"));
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
//# sourceMappingURL=single.js.b5995a15aa3ea354afc3.hot-update.js.map