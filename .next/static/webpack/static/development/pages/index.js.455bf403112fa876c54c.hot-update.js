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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_views_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_carousel_BrandDisplayerCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/carousel/BrandDisplayerCarousel */ "./component/carousel/BrandDisplayerCarousel.js");
/* harmony import */ var _component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/carousel/ProductosMini */ "./component/carousel/ProductosMini.js");
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _component_TagDisplayer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../component/TagDisplayer */ "./component/TagDisplayer.js");
/* harmony import */ var _component_views_Error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../component/views/Error */ "./component/views/Error.js");
/* harmony import */ var _utils_IsOffline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/IsOffline */ "./utils/IsOffline.js");








var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(index, _Component);

  function index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "compartir", function (e, name) {
      e.preventDefault();

      if (!navigator.share) {
        alert("no funca");
        return;
      }

      navigator.share({
        title: name,
        text: "Buciarati Store",
        url: document.location.href,
        icon: "/static/mainView/polo.jpg"
      }).then(function () {
        return alert("contenido compartido");
      })["catch"](function (err) {
        return null;
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx(_utils_IsOffline__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "OFFLINE"), __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx(_component_TagDisplayer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_16__["Query"], {
        query: graphql_tag__WEBPACK_IMPORTED_MODULE_17___default()(_templateObject()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, function (_ref) {
        var client = _ref.client,
            loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return __jsx(_component_views_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        });
        if (error) return __jsx(_component_views_Error__WEBPACK_IMPORTED_MODULE_19__["default"], {
          code: "502",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-935986384" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-935986384" + " " + "tiendas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-935986384",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "TIENDAS DISPONIBLES"), __jsx(_component_carousel_BrandDisplayerCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
          data: data.getBrands,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-935986384" + " " + "ofertas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-935986384",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "HASTA 50% DE DESCUENTO"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_12__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.discount > 50;
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-935986384" + " " + "ofertas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-935986384",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "ZAPATILLAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_12__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes("zapatillas");
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-935986384" + " " + "ofertas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-935986384",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "CASACAS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_12__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes("casaca");
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        })), __jsx("div", {
          className: "jsx-935986384" + " " + "ofertas",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-935986384",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "POLOS"), __jsx(_component_carousel_ProductosMini__WEBPACK_IMPORTED_MODULE_12__["default"], {
          data: data.getProducts.filter(function (e) {
            return e.tags.includes("polo");
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "935986384",
        __self: this
      }, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap\");.container.jsx-935986384{max-width:1150px;width:100%;padding:0;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-935986384{padding-left:10px;}h2.jsx-935986384{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-935986384 h2.jsx-935986384{font-size:0.9em;}.ofertas.jsx-935986384{padding-left:10px;}.tiendas.jsx-935986384,.ofertas.jsx-935986384{margin-top:2.5rem;}@media (min-width:660px){.container.jsx-935986384{padding-top:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dzQixBQUV1RyxBQUV2RSxBQU9DLEFBR0gsQUFNQyxBQUdFLEFBSUEsQUFJQyxlQWhCSCxDQU1sQixDQWhCYSxBQTJCWCxDQXBCRixBQVlBLEFBSUEsVUF0QlksR0FVVSxPQVRKLGFBVVMsR0FUTixtQkFDckIsR0FTQSIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudC92aWV3cy9TcGlubmVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJhbmREaXNwbGF5ZXJDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50L2Nhcm91c2VsL0JyYW5kRGlzcGxheWVyQ2Fyb3VzZWxcIjtcbmltcG9ydCBQcm9kdWN0b3NNaW5pIGZyb20gXCIuLi9jb21wb25lbnQvY2Fyb3VzZWwvUHJvZHVjdG9zTWluaVwiO1xuaW1wb3J0IE1haW5EaXNwbGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9NYWluRGlzcGxheWVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBRdWVyeSwgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgVGFnRGlzcGxheWVyIGZyb20gXCIuLi9jb21wb25lbnQvVGFnRGlzcGxheWVyXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL2NvbXBvbmVudC92aWV3cy9FcnJvclwiO1xuaW1wb3J0IElzT2ZmbGluZSBmcm9tIFwiLi4vdXRpbHMvSXNPZmZsaW5lXCI7XG5jbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vdG8gaW1wbGVtZW50IG9uIHByb2R1Y3RcblxuICBjb21wYXJ0aXIgPSAoZSwgbmFtZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW5hdmlnYXRvci5zaGFyZSkge1xuICAgICAgYWxlcnQoXCJubyBmdW5jYVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF2aWdhdG9yXG4gICAgICAuc2hhcmUoe1xuICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgdGV4dDogXCJCdWNpYXJhdGkgU3RvcmVcIixcbiAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBpY29uOiBcIi9zdGF0aWMvbWFpblZpZXcvcG9sby5qcGdcIlxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGFsZXJ0KFwiY29udGVuaWRvIGNvbXBhcnRpZG9cIikpXG4gICAgICAuY2F0Y2goZXJyID0+IG51bGwpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SXNPZmZsaW5lPk9GRkxJTkU8L0lzT2ZmbGluZT5cblxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxNYWluRGlzcGxheWVyIC8+XG4gICAgICAgICAgPFRhZ0Rpc3BsYXllciAvPlxuICAgICAgICAgIDxRdWVyeVxuICAgICAgICAgICAgcXVlcnk9e2dxbGBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RzIHtcbiAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgICAgICAgZGlzY291bnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2V0QnJhbmRzIHtcbiAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBjbGllbnQsIGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIGNvZGU9XCI1MDJcIiAvPjtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpZW5kYXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+VElFTkRBUyBESVNQT05JQkxFUzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJyYW5kRGlzcGxheWVyQ2Fyb3VzZWwgZGF0YT17ZGF0YS5nZXRCcmFuZHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZXJ0YXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+SEFTVEEgNTAlIERFIERFU0NVRU5UTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Rvc01pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKGUgPT4gZS5kaXNjb3VudCA+IDUwKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmVydGFzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlpBUEFUSUxMQVM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NNaW5pXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhLmdldFByb2R1Y3RzLmZpbHRlcihlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFncy5pbmNsdWRlcyhcInphcGF0aWxsYXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZlcnRhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5DQVNBQ0FTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5nZXRQcm9kdWN0cy5maWx0ZXIoZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhZ3MuaW5jbHVkZXMoXCJjYXNhY2FcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZlcnRhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5QT0xPUzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Rvc01pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEuZ2V0UHJvZHVjdHMuZmlsdGVyKGUgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YWdzLmluY2x1ZGVzKFwicG9sb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvUXVlcnk+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpZW5kYXMge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGllbmRhcyBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub2ZlcnRhcyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aWVuZGFzLFxuICAgICAgICAgICAgLm9mZXJ0YXMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjYwcHgpIHtcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/pages/index.js */")));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.455bf403112fa876c54c.hot-update.js.map