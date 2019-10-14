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
    down ? Math.abs(delta[0]) < 0 ? setGaa(true) : setGaa(false) : setGaa(true);
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
  }, ".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:".concat(width, "px;height:").concat(height, "px;background:white;margin-right:").concat(margin, "px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){.marcas,.productos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.marcas{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel__item{position:relative;z-index:").concat(gaa ? "1" : "-1", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rla2tlci9Eb2N1bWVudHMvcHJveWVjdG9zL2J1Y2NpYXJhdGkvY29tcG9uZW50L2Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGa0IsQUFHMkIsQUFHRCxBQUdGLEFBSVEsQUFhTixBQUdVLEFBR1AsQUFHRSxhQXpCdEIsRUFIQSxDQUhBLEFBNkJFLEVBR3VDLEdBdEJGLGtDQXVCckMsR0F0QnNDLGdCQVl0QyxzQkFYaUIsR0FjakIsY0FiNEMsNENBQ25CLHlCQUNELHdCQUNGLHNCQUNGLG9CQUNILHFGQUNuQiIsImZpbGUiOiIvaG9tZS9kZWtrZXIvRG9jdW1lbnRzL3Byb3llY3Rvcy9idWNjaWFyYXRpL2NvbXBvbmVudC9jYXJvdXNlbC9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlRHJhZywgdXNlU2Nyb2xsIH0gZnJvbSBcInJlYWN0LXVzZS1nZXN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gIHZhciBtYXJnaW4gPSBwYXJzZUludChwcm9wcy5tYXJnaW4sIDEwKTtcbiAgdmFyIHNsaWRlcyA9IHBhcnNlSW50KHByb3BzLnNsaWRlcywgMTApO1xuICB2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xuICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQocHJvcHMuaGVpZ2h0LCAxMCk7XG5cbiAgY29uc3QgW2ltbWVkaWF0ZSwgc2V0SW1tZWRpYXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbeyB4eSB9LCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7XG4gICAgeHk6IFswLCAwXSxcbiAgICBpbW1lZGlhdGU6IHRydWVcbiAgfSkpO1xuXG4gIGNvbnN0IFtnYWEsIHNldEdhYV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBiaW5kID0gdXNlRHJhZygoeyBkb3duLCBkZWx0YSwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xuICAgIC8vSGFuZGxlIG9uIG1vdXNldXAgY2xpY2sgZXZlbnRcbiAgICBkb3duXG4gICAgICA/IE1hdGguYWJzKGRlbHRhWzBdKSA8IDBcbiAgICAgICAgPyBzZXRHYWEodHJ1ZSlcbiAgICAgICAgOiBzZXRHYWEoZmFsc2UpXG4gICAgICA6IHNldEdhYSh0cnVlKTtcbiAgICBzZXRJbW1lZGlhdGUoZmFsc2UpO1xuICAgIHNldCh7XG4gICAgICB4eTogZG93blxuICAgICAgICA/IFtsb2NhbFswXSwgMF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKlxuICAgICAgICAgICAgICAobWFyZ2luICsgd2lkdGgpLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIF1cbiAgICB9KTtcblxuICAgIGlmICghZG93bikge1xuICAgICAgc2V0SW1tZWRpYXRlKHRydWUpO1xuICAgICAgbG9jYWxbMF0gPVxuICAgICAgICBNYXRoLnJvdW5kKGxvY2FsWzBdIC8gKG1hcmdpbiArIHdpZHRoKSArIDAuMyAqIGRpcmVjdGlvblswXSkgKlxuICAgICAgICAobWFyZ2luICsgd2lkdGgpO1xuICAgICAgaWYgKFxuICAgICAgICBsb2NhbFswXSA+IDAgfHxcbiAgICAgICAgKCF3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6OTUwcHgpXCIpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNikgfHxcbiAgICAgICAgKCF3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NjUwcHgpXCIpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNikgfHxcbiAgICAgICAgKCF3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTAwcHgpXCIpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNSlcbiAgICAgICkge1xuICAgICAgICBsb2NhbFswXSA9IDA7XG4gICAgICAgIHNldCh7XG4gICAgICAgICAgeHk6IFswLCAwXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjk1MHB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsb2NhbFswXSA8XG4gICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGxvY2FsWzBdID1cbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gMTAgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xuXG4gICAgICAgICAgc2V0KHtcbiAgICAgICAgICAgIHh5OiBbbG9jYWxbMF0sIDBdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsb2NhbFswXSA8IDExNTAgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpKSB7XG4gICAgICAgICAgbG9jYWxbMF0gPSAxMTUwIC0gMjUgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xuICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICB4eTogW2xvY2FsWzBdLCAwXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIHN0eWxlTmVlZGVkID0ge1xuICAgIHRyYW5zZm9ybTogeHkuaW50ZXJwb2xhdGUoKHgsIHkpID0+IGB0cmFuc2xhdGUzRCgke3h9cHgsMCwgMClgKSxcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICB0cmFuc2l0aW9uOiBpbW1lZGlhdGUgPyBcIi40c1wiIDogXCIwc1wiXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiIHsuLi5iaW5kKCl9PlxuICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbCAke3NsaWRlcyA8IDYgPyBwcm9wcy50eXBlIDogbnVsbH1gfVxuICAgICAgICBzdHlsZT17c3R5bGVOZWVkZWR9XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIDpnbG9iYWwoLmNhcm91c2VsX19pdGVtKSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAke21hcmdpbn1weDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgIDpnbG9iYWwoLm1hcmNhcywgLnByb2R1Y3Rvcykge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbCgubWFyY2FzKSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogJHtnYWEgPyBcIjFcIiA6IFwiLTFcIn07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/dekker/Documents/proyectos/bucciarati/component/carousel/Carousel.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.cea3dac042460b867a2e.hot-update.js.map