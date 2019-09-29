webpackHotUpdate("static\\development\\pages\\producto.js",{

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
/* harmony import */ var _component_Productos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/Productos */ "./component/Productos.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");








var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\producto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\t\t\t\t\t\tquery search($filter: String) {\n\t\t\t\t\t\t\tgetProducts {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\ttags\n\t\t\t\t\t\t\t\tdiscount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tgetBrands {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsearchProducts(filter: $filter) {\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\ttags\n\t\t\t\t\t\t\t\tdiscount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"]);

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
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
        return __jsx("div", {
          className: "jsx-3181728154" + " " + 'producto-tipo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx(_component_brands_BrandDisplayer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), __jsx(_component_brands_Selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
          tag: _this.props.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), __jsx(_component_brands_Filtros__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-3181728154" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx(_component_Productos__WEBPACK_IMPORTED_MODULE_13__["default"], {
          data: _this.props.id.length < 1 ? data.getProducts : data.searchProducts,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        })));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3181728154",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3181728154{max-width:1150px;width:100%;padding:0;padding-top:30px;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-3181728154{padding-left:10px;}h2.jsx-3181728154{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-3181728154 h2.jsx-3181728154{font-size:.9em;}.ofertas.jsx-3181728154{padding-left:10px;}.tiendas.jsx-3181728154,.ofertas.jsx-3181728154{margin-top:2.5rem;}.search.jsx-3181728154{margin:2em 0;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXHByb2R1Y3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFTSxBQUVpRyxBQUd4RSxBQVNDLEFBSUgsQUFNQSxBQUlHLEFBSUEsQUFHTCxBQUlNLEFBTUwsQUFHTyxBQUdFLEFBUVQsQUFJSSxBQUlRLGFBL0IzQixDQVVBLENBM0JpQixBQU1qQixFQW5CWSxBQTBEWCxDQWpERCxBQWNBLEFBSUEsQ0FPVSxJQVlhLEVBZ0J0QixHQTdEVSxBQWtDUSxHQXJCRSxPQVpILE9BNkNHLENBWGlCLElBT3RDLENBNUIwQixJQVpULFVBNkNFLE1BNUNDLEdBa0RLLEVBdEN6QixNQXFCQSxDQVlnQixPQTVDaEIsc0VBNkNBLGFBS0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxwYWdlc1xccHJvZHVjdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnJhbmREaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50L2JyYW5kcy9CcmFuZERpc3BsYXllcic7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnQvYnJhbmRzL1NlbGVjdG9yJztcclxuaW1wb3J0IEZpbHRyb3MgZnJvbSAnLi4vY29tcG9uZW50L2JyYW5kcy9GaWx0cm9zJztcclxuaW1wb3J0IFByb2R1Y3RvcyBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvU3Bpbm5lcic7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9MYXlvdXQnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL0Vycm9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2R1Y3RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG5cdFx0cmV0dXJuIHsgaWQ6IHF1ZXJ5LnRhZyB9O1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxRdWVyeVxyXG5cdFx0XHRcdFx0cXVlcnk9e2dxbGBcclxuXHRcdFx0XHRcdFx0cXVlcnkgc2VhcmNoKCRmaWx0ZXI6IFN0cmluZykge1xyXG5cdFx0XHRcdFx0XHRcdGdldFByb2R1Y3RzIHtcclxuXHRcdFx0XHRcdFx0XHRcdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVcclxuXHRcdFx0XHRcdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRwcmljZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGFnc1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzY291bnRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Z2V0QnJhbmRzIHtcclxuXHRcdFx0XHRcdFx0XHRcdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVcclxuXHRcdFx0XHRcdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHNlYXJjaFByb2R1Y3RzKGZpbHRlcjogJGZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVcclxuXHRcdFx0XHRcdFx0XHRcdF9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0XHRcdFx0XHR0YWdzXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdHZhcmlhYmxlcz17eyBmaWx0ZXI6IHRoaXMucHJvcHMuaWQgfX0+XHJcblx0XHRcdFx0XHR7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz47XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RvLXRpcG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJyYW5kRGlzcGxheWVyIGRhdGE9e2RhdGEuZ2V0QnJhbmRzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdG9yIHRhZz17dGhpcy5wcm9wcy5pZH0gLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8RmlsdHJvcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmlkLmxlbmd0aCA8IDEgPyBkYXRhLmdldFByb2R1Y3RzIDogZGF0YS5zZWFyY2hQcm9kdWN0c31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gNHJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnRpZW5kYXMgaDIge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjllbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Lm9mZXJ0YXMge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQudGllbmRhcyxcclxuXHRcdFx0XHRcdFx0Lm9mZXJ0YXMge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDIuNXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuc2VhcmNoIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDJlbSAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGEpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbChpbWcpIHtcclxuXHRcdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHQta2h0bWwtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHRcdC1vLXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRgfVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\producto.js */"));
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
//# sourceMappingURL=producto.js.ef510ffd5a410abb4e44.hot-update.js.map