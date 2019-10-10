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
/* harmony import */ var _component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/productViews/ProductView */ "./component/productViews/ProductView.js");
/* harmony import */ var _component_productViews_Productos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/productViews/Productos */ "./component/productViews/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "E:\\Documentos\\Proyectos\\bucciarati\\pages\\single.js";

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
      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
        query: GETTER,
        variables: {
          PR: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
        if (!data.getProduct) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
        return __jsx("div", {
          className: "jsx-2024405385" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx(_component_productViews_ProductView__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProduct,
          wrap: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-2024405385" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-2024405385",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Tambi\xE9n podr\xEDa gustarte: "), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Query"], {
          query: graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject2()),
          variables: {
            filter: data.getProduct.tags[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
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
        id: "2024405385",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-2024405385{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:2rem auto 4rem;}.loading.jsx-2024405385{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:0;width:100vw;height:90vh;margin-top:-90px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-2024405385{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}@media (min-width:660px){.container.jsx-2024405385{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEb2N1bWVudG9zXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGlcXHBhZ2VzXFxzaW5nbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RnQixBQUVnRyxBQUV4RSxBQU9KLEFBVUUsQUFPRyxlQU5GLEVBakJMLEFBd0JYLFdBdkJVLEdBaUJVLE9BaEJKLGFBaUJTLEdBaEJILG9CQUlKLEVBSG5CLEFBZ0JBLGdCQVpXLFVBQ0UsWUFDQSxZQUNLLGlCQUNNLG1HQUNKLDZGQUNwQiIsImZpbGUiOiJFOlxcRG9jdW1lbnRvc1xcUHJveWVjdG9zXFxidWNjaWFyYXRpXFxwYWdlc1xcc2luZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RWaWV3IGZyb20gJy4uL2NvbXBvbmVudC9wcm9kdWN0Vmlld3MvUHJvZHVjdFZpZXcnO1xyXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uL2NvbXBvbmVudC9wcm9kdWN0Vmlld3MvUHJvZHVjdG9zJztcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnQvTGF5b3V0JztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL1NwaW5uZXInO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL0Vycm9yJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuY29uc3QgR0VUVEVSID0gZ3FsYFxyXG5cdHF1ZXJ5IFByb2R1Y3QoJFBSOiBJRCEpIHtcclxuXHRcdGdldFByb2R1Y3QoaWQ6ICRQUikge1xyXG5cdFx0XHRfaWRcclxuXHRcdFx0dGl0bGVcclxuXHRcdFx0aW1hZ2VcclxuXHRcdFx0cHJpY2VcclxuXHRcdFx0ZGlzY291bnRcclxuXHRcdFx0dGFnc1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuY2xhc3Mgc2luZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG5cdFx0cmV0dXJuIHsgaWQ6IHF1ZXJ5LnNsdWcgfTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8UXVlcnkgcXVlcnk9e0dFVFRFUn0gdmFyaWFibGVzPXt7IFBSOiB0aGlzLnByb3BzLmlkIH19PlxyXG5cdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPjtcclxuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+O1xyXG5cdFx0XHRcdFx0XHRpZiAoIWRhdGEuZ2V0UHJvZHVjdCkgcmV0dXJuIDxFcnJvciAvPjtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0VmlldyBkYXRhPXtkYXRhLmdldFByb2R1Y3R9IHdyYXA9e3RydWV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGllbmRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5UYW1iacOpbiBwb2Ryw61hIGd1c3RhcnRlOiA8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UXVlcnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWVyeT17Z3FsYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cXVlcnkgc2VhcmNoKCRmaWx0ZXI6IFN0cmluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWFyY2hQcm9kdWN0cyhmaWx0ZXI6ICRmaWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFibGVzPXt7IGZpbHRlcjogZGF0YS5nZXRQcm9kdWN0LnRhZ3NbMF0gfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFByb2R1Y3RvcyBkYXRhPXtkYXRhLnNlYXJjaFByb2R1Y3RzfSAvPjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdDwvUXVlcnk+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTE1MHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAycmVtIGF1dG8gNHJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5sb2FkaW5nIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogOTB2aDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTkwcHg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpbmdsZTtcclxuIl19 */\n/*@ sourceURL=E:\\Documentos\\Proyectos\\bucciarati\\pages\\single.js */"));
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
//# sourceMappingURL=single.js.614d6b2bcea37ed983cf.hot-update.js.map