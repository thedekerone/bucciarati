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
/* harmony import */ var _component_carousel_BrandDisplayerCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/carousel/BrandDisplayerCarousel */ "./component/carousel/BrandDisplayerCarousel.js");
/* harmony import */ var _component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/carousel/ProductosMini */ "./component/carousel/ProductosMini.js");
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _component_TagDisplayer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../component/TagDisplayer */ "./component/TagDisplayer.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");






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

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx(_component_TagDisplayer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_14__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, function (_ref) {
        var client = _ref.client,
            loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_17__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-201685393" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx("h2", {
          onClick: function onClick() {
            _this.handleLogout(client);
          },
          className: "jsx-201685393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "TIENDAS DISPONIBLES"), __jsx(_component_carousel_BrandDisplayerCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-201685393" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-201685393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "HASTA 50% DE DESCUENTO"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.discount > 50;
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-201685393" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-201685393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "ZAPATILLAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('zapatillas');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-201685393" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-201685393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "CASACAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('casaca');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-201685393" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-201685393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "POLOS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('polo');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "201685393",
        __self: this
      }, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap\");.container.jsx-201685393{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-201685393{padding-left:10px;}h2.jsx-201685393{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-201685393 h2.jsx-201685393{font-size:0.9em;}.ofertas.jsx-201685393{padding-left:10px;}.tiendas.jsx-201685393,.ofertas.jsx-201685393{margin-top:2.5rem;}@media (min-width:660px){.container.jsx-201685393{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcYnVjY2lhcmF0aS1zdG9yZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFZ0IsQUFFZ0csQUFFeEUsQUFPQyxBQUdILEFBTUMsQUFHRSxBQUlBLEFBSUEsZUFoQkYsQ0FNakIsQ0FoQlksQUEyQlgsQ0FwQkQsQUFZQSxBQUlBLFVBdEJXLEdBVVUsT0FUSixhQVVTLEdBVE4sbUJBQ3BCLEdBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFxidWNjaWFyYXRpLXN0b3JlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvU3Bpbm5lcic7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCcmFuZERpc3BsYXllckNhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9jYXJvdXNlbC9CcmFuZERpc3BsYXllckNhcm91c2VsJztcclxuaW1wb3J0IFByb2R1Y3Rvc01pbmkgZnJvbSAnLi4vY29tcG9uZW50L2Nhcm91c2VsL1Byb2R1Y3Rvc01pbmknO1xyXG5pbXBvcnQgTWFpbkRpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnQvTWFpbkRpc3BsYXllcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0xheW91dCc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IFF1ZXJ5LCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBUYWdEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50L1RhZ0Rpc3BsYXllcic7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnQvdmlld3MvRXJyb3InO1xyXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8TWFpbkRpc3BsYXllciAvPlxyXG5cdFx0XHRcdDxUYWdEaXNwbGF5ZXIgLz5cclxuXHRcdFx0XHQ8UXVlcnlcclxuXHRcdFx0XHRcdHF1ZXJ5PXtncWxgXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRnZXRQcm9kdWN0cyB7XHJcblx0XHRcdFx0XHRcdFx0XHRfaWRcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlXHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRcdFx0XHRcdHRhZ3NcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2NvdW50XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGdldEJyYW5kcyB7XHJcblx0XHRcdFx0XHRcdFx0XHRfaWRcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlXHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH0+XHJcblx0XHRcdFx0XHR7KHsgY2xpZW50LCBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz47XHJcblx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciBjb2RlPSc1MDInIC8+O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aWVuZGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVMb2dvdXQoY2xpZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUSUVOREFTIERJU1BPTklCTEVTXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCcmFuZERpc3BsYXllckNhcm91c2VsIGRhdGE9e2RhdGEuZ2V0QnJhbmRzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb2ZlcnRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5IQVNUQSA1MCUgREUgREVTQ1VFTlRPPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoKGUpID0+IGUuZGlzY291bnQgPiA1MCl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlpBUEFUSUxMQVM8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKChlKSA9PiBlLnRhZ3MuaW5jbHVkZXMoJ3phcGF0aWxsYXMnKSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPkNBU0FDQVM8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSBkYXRhPXtkYXRhLmdldFByb2R1Y3RzLmZpbHRlcigoZSkgPT4gZS50YWdzLmluY2x1ZGVzKCdjYXNhY2EnKSl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlBPTE9TPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoKGUpID0+IGUudGFncy5pbmNsdWRlcygncG9sbycpKX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdDwvUXVlcnk+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdFx0QGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTUwcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byA0cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnRpZW5kYXMge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XHJcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudGllbmRhcyBoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC50aWVuZGFzLFxyXG5cdFx0XHRcdFx0Lm9mZXJ0YXMge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyLjVyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcclxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMwcHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\pages\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.d60dc1fe19aeeee7f0d5.hot-update.js.map