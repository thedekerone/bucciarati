webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _utils_IsOffline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/IsOffline */ "./utils/IsOffline.js");






var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n              {\n                getProducts {\n                  _id\n                  title\n                  image\n                  price\n                  tags\n                  discount\n                }\n                getBrands {\n                  _id\n                  title\n                  image\n                }\n              }\n            "]);

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
    //to implement on product
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_utils_IsOffline__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "OFFLINE"), __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx(_component_TagDisplayer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_14__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_15___default()(_templateObject()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
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
            lineNumber: 44
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_17__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1087274592" + " " + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1087274592" + " " + 'tiendas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1087274592",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "TIENDAS DISPONIBLES"), __jsx(_component_carousel_BrandDisplayerCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1087274592" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1087274592",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "HASTA 50% DE DESCUENTO"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.discount > 50;
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1087274592" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1087274592",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "ZAPATILLAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('zapatillas');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1087274592" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1087274592",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "CASACAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('casaca');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-1087274592" + " " + 'ofertas',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-1087274592",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "POLOS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes('polo');
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1087274592",
        __self: this
      }, ".container.jsx-1087274592{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-1087274592{padding-left:10px;}h2.jsx-1087274592{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-1087274592 h2.jsx-1087274592{font-size:0.9em;}.ofertas.jsx-1087274592{padding-left:10px;}.tiendas.jsx-1087274592,.ofertas.jsx-1087274592{margin-top:2.5rem;}@media (min-width:660px){.container.jsx-1087274592{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZzQixBQUdnQyxBQU9DLEFBR0gsQUFNQyxBQUdFLEFBSUEsQUFJQyxlQWhCSCxDQU1sQixDQWhCYSxBQTJCWCxDQXBCRixBQVlBLEFBSUEsVUF0QlksR0FVVSxPQVRKLGFBVVMsR0FUTixtQkFDckIsR0FTQSIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL1NwaW5uZXInXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnJhbmREaXNwbGF5ZXJDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnQvY2Fyb3VzZWwvQnJhbmREaXNwbGF5ZXJDYXJvdXNlbCdcbmltcG9ydCBQcm9kdWN0b3NNaW5pIGZyb20gJy4uL2NvbXBvbmVudC9jYXJvdXNlbC9Qcm9kdWN0b3NNaW5pJ1xuaW1wb3J0IE1haW5EaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50L01haW5EaXNwbGF5ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9MYXlvdXQnXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgeyBRdWVyeSwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgVGFnRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9UYWdEaXNwbGF5ZXInXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50L3ZpZXdzL0Vycm9yJ1xuaW1wb3J0IElzT2ZmbGluZSBmcm9tICcuLi91dGlscy9Jc09mZmxpbmUnXG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vdG8gaW1wbGVtZW50IG9uIHByb2R1Y3RcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPElzT2ZmbGluZT5PRkZMSU5FPC9Jc09mZmxpbmU+XG5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8TWFpbkRpc3BsYXllciAvPlxuICAgICAgICAgIDxUYWdEaXNwbGF5ZXIgLz5cbiAgICAgICAgICA8UXVlcnlcbiAgICAgICAgICAgIHF1ZXJ5PXtncWxgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0cyB7XG4gICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgICAgICAgIGRpc2NvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldEJyYW5kcyB7XG4gICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHsgY2xpZW50LCBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIGNvZGU9JzUwMicgLz5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpZW5kYXMnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5USUVOREFTIERJU1BPTklCTEVTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnJhbmREaXNwbGF5ZXJDYXJvdXNlbCBkYXRhPXtkYXRhLmdldEJyYW5kc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvZmVydGFzJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+SEFTVEEgNTAlIERFIERFU0NVRU5UTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Rvc01pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKGUgPT4gZS5kaXNjb3VudCA+IDUwKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5aQVBBVElMTEFTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhZ3MuaW5jbHVkZXMoJ3phcGF0aWxsYXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5DQVNBQ0FTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhZ3MuaW5jbHVkZXMoJ2Nhc2FjYScpXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb2ZlcnRhcyc+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlBPTE9TPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhZ3MuaW5jbHVkZXMoJ3BvbG8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpZW5kYXMge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGllbmRhcyBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2ZlcnRhcyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aWVuZGFzLFxuICAgICAgICAgICAgLm9mZXJ0YXMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/pages/index.js */")));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.518a818d7277e815fa56.hot-update.js.map