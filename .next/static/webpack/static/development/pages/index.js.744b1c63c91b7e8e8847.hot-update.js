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

  var stopCLick = function stopCLick(e) {
    e.stopPropagation();
    console.log('fa');
  };

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var down = _ref.down,
        local = _ref.local,
        velocity = _ref.velocity,
        direction = _ref.direction;
    down ? setGaa(false) : setGaa(true);
    console.log(gaa);
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2775270406", [width, height, margin, gaa ? "2" : '-2']]]) + " " + 'carousel-container',
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
    id: "2775270406",
    dynamic: [width, height, margin, gaa ? "2" : '-2'],
    __self: this
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){.marcas,.productos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.marcas{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel__item{position:relative;z-index:").concat(gaa ? "2" : '-2', "!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBR1UsQUFHUCxBQUdFLGFBekJwQixFQUhBLENBSEEsQUE2QkMsRUFHZ0QsR0F0QlgscUNBQ0MsT0FzQnRDLFNBVkEsc0JBWGlCLEdBY2pCLGNBYjRDLDRDQUNuQix5QkFDRCx3QkFDRixzQkFDRixvQkFDSCxxRkFDbEIiLCJmaWxlIjoiL2hvbWUvZGVra2VyL0RvY3VtZW50cy9wcm95ZWN0b3MvYnVjY2lhcmF0aS9jb21wb25lbnQvY2Fyb3VzZWwvQ2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgY29uZmlnIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB7IHVzZURyYWcsIHVzZVNjcm9sbCB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcblx0dmFyIG1hcmdpbiA9IHBhcnNlSW50KHByb3BzLm1hcmdpbiwgMTApO1xuXHR2YXIgc2xpZGVzID0gcGFyc2VJbnQocHJvcHMuc2xpZGVzLCAxMCk7XG5cdHZhciB3aWR0aCA9IHBhcnNlSW50KHByb3BzLndpZHRoLCAxMCk7XG5cdHZhciBoZWlnaHQgPSBwYXJzZUludChwcm9wcy5oZWlnaHQsIDEwKTtcblx0Y29uc3QgW1xuXHRcdHsgeHkgfSxcblx0XHRzZXRcblx0XSA9IHVzZVNwcmluZygoKSA9PiAoe1xuXHRcdHh5IDogW1xuXHRcdFx0MCxcblx0XHRcdDBcblx0XHRdLFxuXHR9KSk7XG4gICAgY29uc3QgW2dhYSwgc2V0R2FhXT0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgc3RvcENMaWNrID0gKGUpPT57XG5cdCAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXHQgIGNvbnNvbGUubG9nKCdmYScpXG5cdH1cblxuXHRjb25zdCBiaW5kID0gdXNlRHJhZygoeyBkb3duLCBsb2NhbCwgdmVsb2NpdHksIGRpcmVjdGlvbiB9KSA9PiB7XG5cdFx0ZG93biA/IHNldEdhYShmYWxzZSk6IHNldEdhYSh0cnVlKVxuXHRcdGNvbnNvbGUubG9nKGdhYSlcblx0XHRzZXQoe1xuXHRcdFx0eHkgOiBkb3duXG5cdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0bG9jYWxbMF0sXG5cdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQ6IFtcblx0XHRcdFx0XHRcdE1hdGgucm91bmQobG9jYWxbMF0gLyAobWFyZ2luICsgd2lkdGgpICsgMC4zICogZGlyZWN0aW9uWzBdKSAqIChtYXJnaW4gKyB3aWR0aCksXG5cdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFkb3duKSB7XG5cdFx0XHRsb2NhbFswXSA9IE1hdGgucm91bmQobG9jYWxbMF0gLyAobWFyZ2luICsgd2lkdGgpICsgMC4zICogZGlyZWN0aW9uWzBdKSAqIChtYXJnaW4gKyB3aWR0aCk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGxvY2FsWzBdID4gMCB8fFxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjk1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNikgfHxcblx0XHRcdFx0KCF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo2NTBweCknKS5tYXRjaGVzICYmIHNsaWRlcyA8IDYpIHx8XG5cdFx0XHRcdCghd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6NTAwcHgpJykubWF0Y2hlcyAmJiBzbGlkZXMgPCA1KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxvY2FsWzBdID0gMDtcblx0XHRcdFx0c2V0KHtcblx0XHRcdFx0XHR4eSA6IFtcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6OTUwcHgpJykubWF0Y2hlcykge1xuXHRcdFx0XHRpZiAobG9jYWxbMF0gPCB3aW5kb3cuaW5uZXJXaWR0aCAtICh3aWR0aCAqIHNsaWRlcyArIG1hcmdpbiAqIChzbGlkZXMgLSAxKSkpIHtcblx0XHRcdFx0XHRsb2NhbFswXSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTAgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xuXG5cdFx0XHRcdFx0c2V0KHtcblx0XHRcdFx0XHRcdHh5IDogW1xuXHRcdFx0XHRcdFx0XHRsb2NhbFswXSxcblx0XHRcdFx0XHRcdFx0MFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobG9jYWxbMF0gPCAxMTUwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xuXHRcdFx0XHRcdGxvY2FsWzBdID0gMTE1MCAtIDI1IC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcblx0XHRcdFx0XHRzZXQoe1xuXHRcdFx0XHRcdFx0eHkgOiBbXG5cdFx0XHRcdFx0XHRcdGxvY2FsWzBdLFxuXHRcdFx0XHRcdFx0XHQwXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vICB3aW5kb3cuaW5uZXJXaWR0aCAtICh3aWR0aCAqIDUgKyBtYXJnaW4gKiA0KTtcblx0XHR9XG5cdH0pO1xuXHR2YXIgc3R5bGVOZWVkZWQgPSB7XG5cdFx0dHJhbnNmb3JtICA6IHh5LmludGVycG9sYXRlKCh4LCB5KSA9PiBgdHJhbnNsYXRlM0QoJHt4fXB4LDAsIDApYCksXG5cdFx0d2hpdGVTcGFjZSA6ICdub3dyYXAnLFxuXHRcdG1hcmdpbiAgICAgOiAnMCBhdXRvJ1xuXG5cdFx0Ly8gZGlzcGxheSAgICAgICAgOiBzbGlkZXMgPCA2ID8gJ2ZsZXgnIDogJ2Jsb2NrJyxcblx0XHQvLyBqdXN0aWZ5Q29udGVudCA6IHNsaWRlcyA8IDYgPyAnY2VudGVyJyA6IG51bGxcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJvdXNlbC1jb250YWluZXInIHsuLi5iaW5kKCl9IG9uQ2xpY2s9eyhlKT0+e3N0b3BDTGljayhlKX19PlxuXHRcdFx0PGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BjYXJvdXNlbCAke3NsaWRlcyA8IDYgPyBwcm9wcy50eXBlIDogbnVsbH1gfSBzdHlsZT17c3R5bGVOZWVkZWR9PlxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2FuaW1hdGVkLmRpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuY2Fyb3VzZWwtY29udGFpbmVyIHtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXI6aG92ZXIge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lciA6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aDogJHt3aWR0aH1weDtcblx0XHRcdFx0XHRoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogJHttYXJnaW59cHg7XG5cdFx0XHRcdFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTUwcHgpIHtcblx0XHRcdFx0XHQ6Z2xvYmFsKC5tYXJjYXMsIC5wcm9kdWN0b3MpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDpnbG9iYWwoLm1hcmNhcykge1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Omdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHotaW5kZXg6ICR7Z2FhP1wiMlwiOictMid9IWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.744b1c63c91b7e8e8847.hot-update.js.map