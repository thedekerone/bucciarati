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
        console.log(error.statusCode);
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_18__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        })), __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), __jsx(_component_TagDisplayer__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-3635658831" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3635658831" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "TIENDAS DISPONIBLES"), __jsx(_component_BrandCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "HASTA 50% DE DESCUENTO"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.discount > 50;
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "ZAPATILLAS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('zapatillas');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "CASACAS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('casaca');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-3635658831" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-3635658831",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "POLOS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('polo');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3635658831",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-3635658831{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-3635658831{padding-left:10px;}h2.jsx-3635658831{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-3635658831 h2.jsx-3635658831{font-size:.9em;}.ofertas.jsx-3635658831{padding-left:10px;}.tiendas.jsx-3635658831,.ofertas.jsx-3635658831{margin-top:2.5rem;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-3635658831{padding-top:30px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGZ0IsQUFFZ0csQUFHeEUsQUFRQyxBQUlILEFBTUEsQUFJRyxBQUlBLEFBSUMsQUFNTCxBQUdPLEFBR0UsQUFRVCxBQUlJLEFBR0EsQUFHUSxjQXZCM0IsQ0F4QmlCLEFBTWpCLEVBbEJZLEFBc0RYLEFBR0EsQ0FqREQsQUFjQSxBQUlBLENBSVUsSUFZYSxFQWtCdEIsR0EzRFUsQUE4QlEsR0FsQkUsT0FYSixPQXlDSSxDQVhpQixJQU90QyxDQXpCMEIsR0FYTixXQXlDRCxRQXhDbkIsQ0E4Q3lCLEVBbkN6QixNQWtCQSxDQVlnQiw2RUFDaEIsYUFLQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXGJ1Y2NpYXJhdGktc3RvcmVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9TcGlubmVyJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJyYW5kQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50L0JyYW5kQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgUHJvZHVjdG9zTWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zTWluaSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNYWluRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9NYWluRGlzcGxheWVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnQvTGF5b3V0JztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFRhZ0Rpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvVGFnRGlzcGxheWVyJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4uL2NvbXBvbmVudC92aWV3cy9FcnJvcic7XHJcblxyXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PFF1ZXJ5XHJcblx0XHRcdFx0XHRxdWVyeT17Z3FsYFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Z2V0UHJvZHVjdHMge1xyXG5cdFx0XHRcdFx0XHRcdFx0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdHByaWNlXHJcblx0XHRcdFx0XHRcdFx0XHR0YWdzXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNjb3VudFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRnZXRCcmFuZHMge1xyXG5cdFx0XHRcdFx0XHRcdFx0X2lkXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9PlxyXG5cdFx0XHRcdFx0eyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3Iuc3RhdHVzQ29kZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgY29kZT0nNTAyJyAvPjtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWFpbkRpc3BsYXllciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhZ0Rpc3BsYXllciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aWVuZGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+VElFTkRBUyBESVNQT05JQkxFUzwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJyYW5kQ2Fyb3VzZWwgZGF0YT17ZGF0YS5nZXRCcmFuZHN9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb2ZlcnRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPkhBU1RBIDUwJSBERSBERVNDVUVOVE88L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0b3NNaW5pIGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKChlKSA9PiBlLmRpc2NvdW50ID4gNTApfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj5aQVBBVElMTEFTPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoKGUpID0+IGUudGFncy5pbmNsdWRlcygnemFwYXRpbGxhcycpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj5DQVNBQ0FTPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoKGUpID0+IGUudGFncy5pbmNsdWRlcygnY2FzYWNhJykpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb2ZlcnRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPlBPTE9TPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSBkYXRhPXtkYXRhLmdldFByb2R1Y3RzLmZpbHRlcigoZSkgPT4gZS50YWdzLmluY2x1ZGVzKCdwb2xvJykpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdDwvUXVlcnk+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDRyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpZW5kYXMgaDIge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lm9mZXJ0YXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudGllbmRhcyxcclxuXHRcdFx0XHRcdC5vZmVydGFzIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMi41cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoKikge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdDpnbG9iYWwoYSkge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCopIHtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA2NjBweCkge1xyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKCNmbGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.24b97dac7d942c7e5dab.hot-update.js.map