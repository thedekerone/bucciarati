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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      immediate = _useState[0],
      setImmediate = _useState[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      xy: [0, 0],
      immediate: true
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      xy = _useSpring2[0].xy,
      set = _useSpring2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      gaa = _useState2[0],
      setGaa = _useState2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_6__["useDrag"])(function (_ref) {
    var down = _ref.down,
        delta = _ref.delta,
        local = _ref.local,
        velocity = _ref.velocity,
        direction = _ref.direction;
    //Handle on mouseup click event
    down ? Math.abs(delta[0]) < 10 ? setGaa(true) : setGaa(false) : setGaa(true);
    setImmediate(false);
    set({
      xy: down ? [local[0], 0] : [Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width), 0]
    });

    if (!down) {
      setImmediate(true);
      local[0] = Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width);

      if (local[0] > 0 || !window.matchMedia("(max-width:950px)").matches && slides < 6 || !window.matchMedia("(max-width:650px)").matches && slides < 6 || !window.matchMedia("(max-width:500px)").matches && slides < 5) {
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia("(max-width:950px)").matches) {
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
      }
    }
  });
  var styleNeeded = {
    transform: xy.interpolate(function (x, y) {
      return "translate3D(".concat(x, "px,0, 0)");
    }),
    whiteSpace: "nowrap",
    margin: "0 auto",
    transition: immediate ? ".4s" : "0s"
  };
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2921671404", [width, height, margin, gaa ? "1" : "-1"]]]) + " " + "carousel-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    className: "carousel ".concat(slides < 6 ? props.type : null),
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2921671404",
    dynamic: [width, height, margin, gaa ? "1" : "-1"],
    __self: this
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){.marcas,.productos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.marcas{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel__item{position:relative;z-index:").concat(gaa ? "1" : "-1", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGa0IsQUFHMkIsQUFHRCxBQUdGLEFBSVEsQUFhTixBQUdVLEFBR1AsQUFHRSxhQXpCdEIsRUFIQSxDQUhBLEFBNkJFLEVBR3VDLEdBdEJGLGtDQXVCckMsR0F0QnNDLGdCQVl0QyxzQkFYaUIsR0FjakIsY0FiNEMsNENBQ25CLHlCQUNELHdCQUNGLHNCQUNGLG9CQUNILHFGQUNuQiIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC9jYXJvdXNlbC9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlRHJhZywgdXNlU2Nyb2xsIH0gZnJvbSBcInJlYWN0LXVzZS1nZXN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gIHZhciBtYXJnaW4gPSBwYXJzZUludChwcm9wcy5tYXJnaW4sIDEwKTtcbiAgdmFyIHNsaWRlcyA9IHBhcnNlSW50KHByb3BzLnNsaWRlcywgMTApO1xuICB2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xuICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQocHJvcHMuaGVpZ2h0LCAxMCk7XG5cbiAgY29uc3QgW2ltbWVkaWF0ZSwgc2V0SW1tZWRpYXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbeyB4eSB9LCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7XG4gICAgeHk6IFswLCAwXSxcbiAgICBpbW1lZGlhdGU6IHRydWVcbiAgfSkpO1xuXG4gIGNvbnN0IFtnYWEsIHNldEdhYV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBiaW5kID0gdXNlRHJhZygoeyBkb3duLCBkZWx0YSwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xuICAgIC8vSGFuZGxlIG9uIG1vdXNldXAgY2xpY2sgZXZlbnRcbiAgICBkb3duXG4gICAgICA/IE1hdGguYWJzKGRlbHRhWzBdKSA8IDEwXG4gICAgICAgID8gc2V0R2FhKHRydWUpXG4gICAgICAgIDogc2V0R2FhKGZhbHNlKVxuICAgICAgOiBzZXRHYWEodHJ1ZSk7XG4gICAgc2V0SW1tZWRpYXRlKGZhbHNlKTtcbiAgICBzZXQoe1xuICAgICAgeHk6IGRvd25cbiAgICAgICAgPyBbbG9jYWxbMF0sIDBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgTWF0aC5yb3VuZChsb2NhbFswXSAvIChtYXJnaW4gKyB3aWR0aCkgKyAwLjMgKiBkaXJlY3Rpb25bMF0pICpcbiAgICAgICAgICAgICAgKG1hcmdpbiArIHdpZHRoKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBpZiAoIWRvd24pIHtcbiAgICAgIHNldEltbWVkaWF0ZSh0cnVlKTtcbiAgICAgIGxvY2FsWzBdID1cbiAgICAgICAgTWF0aC5yb3VuZChsb2NhbFswXSAvIChtYXJnaW4gKyB3aWR0aCkgKyAwLjMgKiBkaXJlY3Rpb25bMF0pICpcbiAgICAgICAgKG1hcmdpbiArIHdpZHRoKTtcbiAgICAgIGlmIChcbiAgICAgICAgbG9jYWxbMF0gPiAwIHx8XG4gICAgICAgICghd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjk1MHB4KVwiKS5tYXRjaGVzICYmIHNsaWRlcyA8IDYpIHx8XG4gICAgICAgICghd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjY1MHB4KVwiKS5tYXRjaGVzICYmIHNsaWRlcyA8IDYpIHx8XG4gICAgICAgICghd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjUwMHB4KVwiKS5tYXRjaGVzICYmIHNsaWRlcyA8IDUpXG4gICAgICApIHtcbiAgICAgICAgbG9jYWxbMF0gPSAwO1xuICAgICAgICBzZXQoe1xuICAgICAgICAgIHh5OiBbMCwgMF1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo5NTBweClcIikubWF0Y2hlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbG9jYWxbMF0gPFxuICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICBsb2NhbFswXSA9XG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcblxuICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICB4eTogW2xvY2FsWzBdLCAwXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobG9jYWxbMF0gPCAxMTUwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xuICAgICAgICAgIGxvY2FsWzBdID0gMTE1MCAtIDI1IC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKTtcbiAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgeHk6IFtsb2NhbFswXSwgMF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHZhciBzdHlsZU5lZWRlZCA9IHtcbiAgICB0cmFuc2Zvcm06IHh5LmludGVycG9sYXRlKCh4LCB5KSA9PiBgdHJhbnNsYXRlM0QoJHt4fXB4LDAsIDApYCksXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgdHJhbnNpdGlvbjogaW1tZWRpYXRlID8gXCIuNHNcIiA6IFwiMHNcIlxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIiB7Li4uYmluZCgpfT5cbiAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwgJHtzbGlkZXMgPCA2ID8gcHJvcHMudHlwZSA6IG51bGx9YH1cbiAgICAgICAgc3R5bGU9e3N0eWxlTmVlZGVkfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lciA6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogJHttYXJnaW59cHg7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICA6Z2xvYmFsKC5tYXJjYXMsIC5wcm9kdWN0b3MpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpnbG9iYWwoLm1hcmNhcykge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6ICR7Z2FhID8gXCIxXCIgOiBcIi0xXCJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.63c3071762d98607969f.hot-update.js.map