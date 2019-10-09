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

  var stopCLick = function stopCLick(e) {
    e.stopPropagation();
    console.log('fa');
  };

  var gaa = true;
  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var down = _ref.down,
        local = _ref.local,
        velocity = _ref.velocity,
        direction = _ref.direction;
    down ? gaa = false : gaa = true;
    set({
      xy: down ? [local[0], 0] : [Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width), 0]
    });

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
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
    onClick: function onClick(e) {
      stopCLick(e);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2977902252", [width, height, margin, gaa ? 'red' : 'blue']]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
    id: "2977902252",
    dynamic: [width, height, margin, gaa ? 'red' : 'blue'],
    __self: this
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){.marcas,.productos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.marcas{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel_item{position:relative;background:\xB4").concat(gaa ? 'red' : 'blue', "\xB4 margin-top:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBR1UsQUFHUCxBQUdFLGFBekJwQixFQUhBLENBSEEsQUE2QkMsRUFJaUIsR0F2Qm9CLHFDQUNDLGdCQVl0QyxFQVdBLG9CQXRCaUIsR0FjakIsY0FiNEMsNENBQ25CLHlCQUNELHdCQUNGLHNCQUNGLG9CQUNILHFGQUNsQiIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC9jYXJvdXNlbC9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IHsgdXNlRHJhZywgdXNlU2Nyb2xsIH0gZnJvbSAncmVhY3QtdXNlLWdlc3R1cmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xuXHR2YXIgbWFyZ2luID0gcGFyc2VJbnQocHJvcHMubWFyZ2luLCAxMCk7XG5cdHZhciBzbGlkZXMgPSBwYXJzZUludChwcm9wcy5zbGlkZXMsIDEwKTtcblx0dmFyIHdpZHRoID0gcGFyc2VJbnQocHJvcHMud2lkdGgsIDEwKTtcblx0dmFyIGhlaWdodCA9IHBhcnNlSW50KHByb3BzLmhlaWdodCwgMTApO1xuXHRjb25zdCBbXG5cdFx0eyB4eSB9LFxuXHRcdHNldFxuXHRdID0gdXNlU3ByaW5nKCgpID0+ICh7XG5cdFx0eHkgOiBbXG5cdFx0XHQwLFxuXHRcdFx0MFxuXHRcdF0sXG5cdH0pKTtcblxuXHRjb25zdCBzdG9wQ0xpY2sgPSAoZSk9Pntcblx0ICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cdCAgY29uc29sZS5sb2coJ2ZhJylcblx0fVxuXHRsZXQgZ2FhPSB0cnVlXG5cblx0Y29uc3QgYmluZCA9IHVzZURyYWcoKHsgZG93biwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xuXHRcdGRvd24gPyBnYWE9ZmFsc2U6IGdhYT10cnVlXG5cdFx0c2V0KHtcblx0XHRcdHh5IDogZG93blxuXHRcdFx0XHQ/IFtcblx0XHRcdFx0XHRcdGxvY2FsWzBdLFxuXHRcdFx0XHRcdFx0MFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0OiBbXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpLFxuXHRcdFx0XHRcdFx0MFxuXHRcdFx0XHRcdF1cblx0XHR9KTtcblxuXHRcdGlmICghZG93bikge1xuXHRcdFx0bG9jYWxbMF0gPSBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKiAobWFyZ2luICsgd2lkdGgpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRsb2NhbFswXSA+IDAgfHxcblx0XHRcdFx0KCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo5NTBweCknKS5tYXRjaGVzICYmIHNsaWRlcyA8IDYpIHx8XG5cdFx0XHRcdCghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6NjUwcHgpJykubWF0Y2hlcyAmJiBzbGlkZXMgPCA2KSB8fFxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjUwMHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNSlcblx0XHRcdCkge1xuXHRcdFx0XHRsb2NhbFswXSA9IDA7XG5cdFx0XHRcdHNldCh7XG5cdFx0XHRcdFx0eHkgOiBbXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0MFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjk1MHB4KScpLm1hdGNoZXMpIHtcblx0XHRcdFx0aWYgKGxvY2FsWzBdIDwgd2luZG93LmlubmVyV2lkdGggLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpKSB7XG5cdFx0XHRcdFx0bG9jYWxbMF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcblxuXHRcdFx0XHRcdHNldCh7XG5cdFx0XHRcdFx0XHR4eSA6IFtcblx0XHRcdFx0XHRcdFx0bG9jYWxbMF0sXG5cdFx0XHRcdFx0XHRcdDBcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGxvY2FsWzBdIDwgMTE1MCAtICh3aWR0aCAqIHNsaWRlcyArIG1hcmdpbiAqIChzbGlkZXMgLSAxKSkpIHtcblx0XHRcdFx0XHRsb2NhbFswXSA9IDExNTAgLSAyNSAtICh3aWR0aCAqIHNsaWRlcyArIG1hcmdpbiAqIChzbGlkZXMgLSAxKSk7XG5cdFx0XHRcdFx0c2V0KHtcblx0XHRcdFx0XHRcdHh5IDogW1xuXHRcdFx0XHRcdFx0XHRsb2NhbFswXSxcblx0XHRcdFx0XHRcdFx0MFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAgd2luZG93LmlubmVyV2lkdGggLSAod2lkdGggKiA1ICsgbWFyZ2luICogNCk7XG5cdFx0fVxuXHR9KTtcblx0dmFyIHN0eWxlTmVlZGVkID0ge1xuXHRcdHRyYW5zZm9ybSAgOiB4eS5pbnRlcnBvbGF0ZSgoeCwgeSkgPT4gYHRyYW5zbGF0ZTNEKCR7eH1weCwwLCAwKWApLFxuXHRcdHdoaXRlU3BhY2UgOiAnbm93cmFwJyxcblx0XHRtYXJnaW4gICAgIDogJzAgYXV0bydcblxuXHRcdC8vIGRpc3BsYXkgICAgICAgIDogc2xpZGVzIDwgNiA/ICdmbGV4JyA6ICdibG9jaycsXG5cdFx0Ly8ganVzdGlmeUNvbnRlbnQgOiBzbGlkZXMgPCA2ID8gJ2NlbnRlcicgOiBudWxsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyJyB7Li4uYmluZCgpfSBvbkNsaWNrPXsoZSk9PntzdG9wQ0xpY2soZSl9fT5cblx0XHRcdDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtzbGlkZXMgPCA2ID8gcHJvcHMudHlwZSA6IG51bGx9YH0gc3R5bGU9e3N0eWxlTmVlZGVkfT5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9hbmltYXRlZC5kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyOmhvdmVyIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6ICR7d2lkdGh9cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAke2hlaWdodH1weDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6ICR7bWFyZ2lufXB4O1xuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XG5cdFx0XHRcdFx0Omdsb2JhbCgubWFyY2FzLCAucHJvZHVjdG9zKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ6Z2xvYmFsKC5tYXJjYXMpIHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDpnbG9iYWwoLmNhcm91c2VsX2l0ZW0pIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IMK0JHtnYWE/J3JlZCc6J2JsdWUnfcK0XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.d932a7d8af8171ada309.hot-update.js.map