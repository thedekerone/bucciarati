webpackHotUpdate("static/development/pages/producto.js",{

/***/ "./pages/producto.js":
/*!***************************!*\
  !*** ./pages/producto.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return producto; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_brands_BrandDisplayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/brands/BrandDisplayer */ "./component/brands/BrandDisplayer.js");
/* harmony import */ var _component_brands_Selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/brands/Selector */ "./component/brands/Selector.js");
/* harmony import */ var _component_brands_Filtros__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/brands/Filtros */ "./component/brands/Filtros.js");
/* harmony import */ var _component_productViews_Productos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/productViews/Productos */ "./component/productViews/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);








var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/pages/producto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n            query search($filter: String) {\n              getProducts {\n                _id\n                title\n                image\n                price\n                tags\n                discount\n              }\n              getBrands {\n                _id\n                title\n                image\n              }\n              searchProducts(filter: $filter) {\n                title\n                _id\n                image\n                price\n                tags\n                discount\n              }\n              getUsers {\n                _id\n                username\n                password\n              }\n            }\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var producto =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(producto, _React$Component);

  function producto() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, producto);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(producto).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(producto, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_14__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_16___default()(_templateObject()),
        variables: {
          filter: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, function (_ref) {
        var client = _ref.client,
            loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
        console.log(data);
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_18__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });
        return __jsx("div", {
          className: "jsx-3948984483" + " " + 'producto-tipo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx(_component_brands_BrandDisplayer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), __jsx(_component_brands_Selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
          tag: _this.props.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), __jsx(_component_brands_Filtros__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-3948984483" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx(_component_productViews_Productos__WEBPACK_IMPORTED_MODULE_13__["default"], {
          data: _this.props.id.length < 1 ? data.getProducts : data.searchProducts,
          client: client,
          user: data.getUsers,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        })));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3948984483",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3948984483{max-width:1150px;width:100%;padding:0;padding-top:30px;overflow:hidden;margin:0 auto 4rem;}h2.jsx-3948984483{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.search.jsx-3948984483{margin:2em 0;}@media (min-width:660px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvcGFnZXMvcHJvZHVjdG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVXLEFBRXVHLEFBRXZFLEFBUUYsQUFNRixhQUNmLEVBTmtCLEVBUkwsV0FDRCxHQVFVLE9BUEgsYUFRUSxJQVBULGdCQUNHLEtBT3JCLGNBTkEiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9wYWdlcy9wcm9kdWN0by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmFuZERpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvYnJhbmRzL0JyYW5kRGlzcGxheWVyJ1xuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudC9icmFuZHMvU2VsZWN0b3InXG5pbXBvcnQgRmlsdHJvcyBmcm9tICcuLi9jb21wb25lbnQvYnJhbmRzL0ZpbHRyb3MnXG5pbXBvcnQgUHJvZHVjdG9zIGZyb20gJy4uL2NvbXBvbmVudC9wcm9kdWN0Vmlld3MvUHJvZHVjdG9zJ1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvU3Bpbm5lcidcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9MYXlvdXQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL0Vycm9yJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvZHVjdG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIHJldHVybiB7IGlkOiBxdWVyeS50YWcgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFF1ZXJ5XG4gICAgICAgICAgcXVlcnk9e2dxbGBcbiAgICAgICAgICAgIHF1ZXJ5IHNlYXJjaCgkZmlsdGVyOiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgZ2V0UHJvZHVjdHMge1xuICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgICAgICBkaXNjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdldEJyYW5kcyB7XG4gICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlYXJjaFByb2R1Y3RzKGZpbHRlcjogJGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgICAgICBkaXNjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdldFVzZXJzIHtcbiAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIHZhcmlhYmxlcz17eyBmaWx0ZXI6IHRoaXMucHJvcHMuaWQgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyBjbGllbnQsIGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciBjb2RlPSc1MDInIC8+XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdG8tdGlwbyc+XG4gICAgICAgICAgICAgICAgPEJyYW5kRGlzcGxheWVyIGRhdGE9e2RhdGEuZ2V0QnJhbmRzfSAvPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciB0YWc9e3RoaXMucHJvcHMuaWR9IC8+XG4gICAgICAgICAgICAgICAgPEZpbHRyb3MgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pZC5sZW5ndGggPCAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEuZ2V0UHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YS5zZWFyY2hQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudD17Y2xpZW50fVxuICAgICAgICAgICAgICAgICAgICB1c2VyPXtkYXRhLmdldFVzZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE1MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/pages/producto.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref2.query;
                return _context.abrupt("return", {
                  id: query.tag
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

  return producto;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=producto.js.7660f25a28743c0ef370.hot-update.js.map