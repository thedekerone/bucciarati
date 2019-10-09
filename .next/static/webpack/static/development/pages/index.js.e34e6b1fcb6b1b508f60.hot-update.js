webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/carousel/Carousel.js":
/*!****************************************!*\
  !*** ./component/carousel/Carousel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");



var _jsxFileName = "/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



function Carousel(props) {
  var margin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.margin, 10);

  var slides = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.slides, 10);

  var width = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.width, 10);

  var height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(props.height, 10);

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      xy: [0, 0]
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      xy = _useSpring2[0].xy,
      set = _useSpring2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      gaa = _useState[0],
      setGaa = _useState[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var down = _ref.down,
        local = _ref.local,
        velocity = _ref.velocity,
        direction = _ref.direction;
    set({
      xy: down ? [local[0], 0] : [Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width), 0]
    });
    down ? setGaa(false) : setGaa(true);
    console.log(gaa);

    if (!down) {
      local[0] = Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width);

      if (local[0] > 0 || !window.matchMedia('(max-width:950px)').matches && slides < 6 || !window.matchMedia('(max-width:650px)').matches && slides < 6 || !window.matchMedia('(max-width:500px)').matches && slides < 5) {
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia('(max-width:950px)').matches) {
        if (local[0] < window.innerWidth - (width * slides + margin * (slides - 1))) {
          local[0] = window.innerWidth - 10 - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      } else {
        if (local[0] < 1150 - (width * slides + margin * (slides - 1))) {
          local[0] = 1150 - 25 - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      } //  window.innerWidth - (width * 5 + margin * 4);

    }
  });
  var styleNeeded = {
    transform: xy.interpolate(function (x, y) {
      return "translate3D(".concat(x, "px,0, 0)");
    }),
    whiteSpace: 'nowrap',
    margin: '0 auto' // display        : slides < 6 ? 'flex' : 'block',
    // justifyContent : slides < 6 ? 'center' : null

  };
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onDrag: function onDrag() {
      console.log('xd');
    }
  }, bind(), {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["564115211", [width, height, margin, gaa ? "1" : '-1']]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    className: "carousel ".concat(slides < 6 ? props.type : null),
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "564115211",
    dynamic: [width, height, margin, gaa ? "1" : '-1'],
    __self: this
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){.marcas,.productos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.marcas{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel__item{position:relative;z-index:").concat(gaa ? "1" : '-1', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBR1UsQUFHUCxBQUdFLGFBekJwQixFQUhBLENBSEEsQUE2QkMsRUFHc0MsR0F0QkQsa0NBdUJyQyxHQXRCc0MsZ0JBWXRDLHNCQVhpQixHQWNqQixjQWI0Qyw0Q0FDbkIseUJBQ0Qsd0JBQ0Ysc0JBQ0Ysb0JBQ0gscUZBQ2xCIiwiZmlsZSI6Ii9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgeyB1c2VEcmFnLCB1c2VTY3JvbGwgfSBmcm9tICdyZWFjdC11c2UtZ2VzdHVyZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG5cdHZhciBtYXJnaW4gPSBwYXJzZUludChwcm9wcy5tYXJnaW4sIDEwKTtcblx0dmFyIHNsaWRlcyA9IHBhcnNlSW50KHByb3BzLnNsaWRlcywgMTApO1xuXHR2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xuXHR2YXIgaGVpZ2h0ID0gcGFyc2VJbnQocHJvcHMuaGVpZ2h0LCAxMCk7XG5cdGNvbnN0IFtcblx0XHR7IHh5IH0sXG5cdFx0c2V0XG5cdF0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcblx0XHR4eSA6IFtcblx0XHRcdDAsXG5cdFx0XHQwXG5cdFx0XSxcblx0fSkpO1xuICAgIGNvbnN0IFtnYWEsIHNldEdhYV09IHVzZVN0YXRlKHRydWUpXG5cblxuXHRjb25zdCBiaW5kID0gdXNlRHJhZygoeyBkb3duLCBsb2NhbCwgdmVsb2NpdHksIGRpcmVjdGlvbiB9KSA9PiB7XG5cblx0XHRzZXQoe1xuXHRcdFx0eHkgOiBkb3duXG5cdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0bG9jYWxbMF0sXG5cdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQ6IFtcblx0XHRcdFx0XHRcdE1hdGgucm91bmQobG9jYWxbMF0gLyAobWFyZ2luICsgd2lkdGgpICsgMC4zICogZGlyZWN0aW9uWzBdKSAqIChtYXJnaW4gKyB3aWR0aCksXG5cdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XVxuXHRcdH0pO1xuXHRcdGRvd24gPyBzZXRHYWEoZmFsc2UpOiBzZXRHYWEodHJ1ZSlcblx0XHRjb25zb2xlLmxvZyhnYWEpXG5cdFx0aWYgKCFkb3duKSB7XG5cdFx0XHRcblx0XHRcdGxvY2FsWzBdID0gTWF0aC5yb3VuZChsb2NhbFswXSAvIChtYXJnaW4gKyB3aWR0aCkgKyAwLjMgKiBkaXJlY3Rpb25bMF0pICogKG1hcmdpbiArIHdpZHRoKTtcblx0XHRcdGlmIChcblx0XHRcdFx0bG9jYWxbMF0gPiAwIHx8XG5cdFx0XHRcdCghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6OTUwcHgpJykubWF0Y2hlcyAmJiBzbGlkZXMgPCA2KSB8fFxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjY1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNikgfHxcblx0XHRcdFx0KCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo1MDBweCknKS5tYXRjaGVzICYmIHNsaWRlcyA8IDUpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9jYWxbMF0gPSAwO1xuXHRcdFx0XHRzZXQoe1xuXHRcdFx0XHRcdHh5IDogW1xuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdDBcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo5NTBweCknKS5tYXRjaGVzKSB7XG5cdFx0XHRcdGlmIChsb2NhbFswXSA8IHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xuXHRcdFx0XHRcdGxvY2FsWzBdID0gd2luZG93LmlubmVyV2lkdGggLSAxMCAtICh3aWR0aCAqIHNsaWRlcyArIG1hcmdpbiAqIChzbGlkZXMgLSAxKSk7XG5cblx0XHRcdFx0XHRzZXQoe1xuXHRcdFx0XHRcdFx0eHkgOiBbXG5cdFx0XHRcdFx0XHRcdGxvY2FsWzBdLFxuXHRcdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChsb2NhbFswXSA8IDExNTAgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpKSB7XG5cdFx0XHRcdFx0bG9jYWxbMF0gPSAxMTUwIC0gMjUgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xuXHRcdFx0XHRcdHNldCh7XG5cdFx0XHRcdFx0XHR4eSA6IFtcblx0XHRcdFx0XHRcdFx0bG9jYWxbMF0sXG5cdFx0XHRcdFx0XHRcdDBcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gIHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogNSArIG1hcmdpbiAqIDQpO1xuXHRcdH1cblx0fSk7XG5cdHZhciBzdHlsZU5lZWRlZCA9IHtcblx0XHR0cmFuc2Zvcm0gIDogeHkuaW50ZXJwb2xhdGUoKHgsIHkpID0+IGB0cmFuc2xhdGUzRCgke3h9cHgsMCwgMClgKSxcblx0XHR3aGl0ZVNwYWNlIDogJ25vd3JhcCcsXG5cdFx0bWFyZ2luICAgICA6ICcwIGF1dG8nXG5cblx0XHQvLyBkaXNwbGF5ICAgICAgICA6IHNsaWRlcyA8IDYgPyAnZmxleCcgOiAnYmxvY2snLFxuXHRcdC8vIGp1c3RpZnlDb250ZW50IDogc2xpZGVzIDwgNiA/ICdjZW50ZXInIDogbnVsbFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsLWNvbnRhaW5lcicgb25EcmFnPXsoKT0+e1xuXHRcdFx0Y29uc29sZS5sb2coJ3hkJylcblx0XHR9fSB7Li4uYmluZCgpfT5cblx0XHRcdDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtzbGlkZXMgPCA2ID8gcHJvcHMudHlwZSA6IG51bGx9YH0gc3R5bGU9e3N0eWxlTmVlZGVkfT5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9hbmltYXRlZC5kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyOmhvdmVyIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6ICR7d2lkdGh9cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAke2hlaWdodH1weDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6ICR7bWFyZ2lufXB4O1xuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XG5cdFx0XHRcdFx0Omdsb2JhbCgubWFyY2FzLCAucHJvZHVjdG9zKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ6Z2xvYmFsKC5tYXJjYXMpIHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDpnbG9iYWwoLmNhcm91c2VsX19pdGVtKSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAke2dhYT9cIjFcIjonLTEnfTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.e34e6b1fcb6b1b508f60.hot-update.js.map