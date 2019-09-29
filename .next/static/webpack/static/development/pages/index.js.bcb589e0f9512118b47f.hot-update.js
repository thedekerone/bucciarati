webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_BrandCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/BrandCarousel */ "./component/BrandCarousel.js");
/* harmony import */ var _component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/ProductosMini */ "./component/ProductosMini.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _component_TagDisplayer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/TagDisplayer */ "./component/TagDisplayer.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");






var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tgetProducts {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\ttags\n\t\t\t\t\t\t\t\tdiscount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tgetBrands {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  function index(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_15__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_16___default()(_templateObject()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_18__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        })), __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), __jsx(_component_TagDisplayer__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-3635658831" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3635658831" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "TIENDAS DISPONIBLES"), __jsx(_component_BrandCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "HASTA 50% DE DESCUENTO"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.discount > 50;
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "ZAPATILLAS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('zapatillas');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "CASACAS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('casaca');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "POLOS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('polo');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3635658831",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3635658831{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-3635658831{padding-left:10px;}h2.jsx-3635658831{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-3635658831 h2.jsx-3635658831{font-size:.9em;}.ofertas.jsx-3635658831{padding-left:10px;}.tiendas.jsx-3635658831,.ofertas.jsx-3635658831{margin-top:2.5rem;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-3635658831{padding-top:30px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFZ0IsQUFFZ0csQUFHeEUsQUFRQyxBQUlILEFBTUEsQUFJRyxBQUlBLEFBSUMsQUFNTCxBQUdPLEFBR0UsQUFRVCxBQUlJLEFBR0EsQUFHUSxjQXZCM0IsQ0F4QmlCLEFBTWpCLEVBbEJZLEFBc0RYLEFBR0EsQ0FqREQsQUFjQSxBQUlBLENBSVUsSUFZYSxFQWtCdEIsR0EzRFUsQUE4QlEsR0FsQkUsT0FYSixPQXlDSSxDQVhpQixJQU90QyxDQXpCMEIsR0FYTixXQXlDRCxRQXhDbkIsQ0E4Q3lCLEVBbkN6QixNQWtCQSxDQVlnQiw2RUFDaEIsYUFLQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9TcGlubmVyJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJyYW5kQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50L0JyYW5kQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgUHJvZHVjdG9zTWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zTWluaSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNYWluRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9NYWluRGlzcGxheWVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnQvTGF5b3V0JztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFRhZ0Rpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvVGFnRGlzcGxheWVyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9FcnJvcic7XHJcblxyXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PFF1ZXJ5XHJcblx0XHRcdFx0XHRxdWVyeT17Z3FsYFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Z2V0UHJvZHVjdHMge1xyXG5cdFx0XHRcdFx0XHRcdFx0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0XHRcdFx0XHR0YWdzXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRnZXRCcmFuZHMge1xyXG5cdFx0XHRcdFx0XHRcdFx0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9PlxyXG5cdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPjtcclxuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gPEVycm9yIGNvZGU9JzUwMicgLz47XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1haW5EaXNwbGF5ZXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWdEaXNwbGF5ZXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGllbmRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPlRJRU5EQVMgRElTUE9OSUJMRVM8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCcmFuZENhcm91c2VsIGRhdGE9e2RhdGEuZ2V0QnJhbmRzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj5IQVNUQSA1MCUgREUgREVTQ1VFTlRPPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSBkYXRhPXtkYXRhLmdldFByb2R1Y3RzLmZpbHRlcigoZSkgPT4gZS5kaXNjb3VudCA+IDUwKX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+WkFQQVRJTExBUzwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKChlKSA9PiBlLnRhZ3MuaW5jbHVkZXMoJ3phcGF0aWxsYXMnKSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+Q0FTQUNBUzwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKChlKSA9PiBlLnRhZ3MuaW5jbHVkZXMoJ2Nhc2FjYScpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QT0xPUzwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoKGUpID0+IGUudGFncy5pbmNsdWRlcygncG9sbycpKX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ8L1F1ZXJ5PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTUwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byA0cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC50aWVuZGFzIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC50aWVuZGFzIGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5vZmVydGFzIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpZW5kYXMsXHJcblx0XHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDIuNXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMztcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKGEpIHtcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQta2h0bWwtdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtbW96LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0LW8tdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0Omdsb2JhbCgjZmxleCkge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMwcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Omdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.bcb589e0f9512118b47f.hot-update.js.map