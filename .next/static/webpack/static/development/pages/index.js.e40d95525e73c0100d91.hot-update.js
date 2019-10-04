webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/Spinner */ "./component/views/Spinner.js");
/* harmony import */ var _views_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Error */ "./component/views/Error.js");

var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\bucciarati-store\\component\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\t{\n\t\t\tgetUsers {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t\tpassword\n\t\t\t}\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Navbar = function Navbar(_ref) {
  var handleClick = _ref.handleClick;
  var textInput;
  var GET_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      display = _useState[0],
      setDisplay = _useState[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    _routes__WEBPACK_IMPORTED_MODULE_4__["Router"].pushRoute('producto', {
      tag: textInput.value
    });
  };

  var handleLogin = function handleLogin(client) {
    console.log('aea');
    localStorage.setItem('usuario', 'dekker3');
    localStorage.setItem('password', 'internetes');
    client.resetStore();
    console.log(localStorage);
  };

  var handleLogout = function handleLogout(client) {
    localStorage.removeItem('usuario');
    localStorage.removeItem('password');
    client.resetStore();
    console.log(localStorage);
  };

  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_USER,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, function (_ref2) {
    var client = _ref2.client,
        loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return __jsx(_views_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    });
    if (error) return __jsx(_views_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
      code: "502",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    });
    return __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "aea"); // return (
    // 	<div className='navbar-container'>
    // 		<div className='navbar'>
    // 			<div className='main-navbar'>
    // 				<div className='logo'>
    // 					<Link route='/'>
    // 						<a>
    // 							{' '}
    // 							<img
    // 								className='main-navbar__title'
    // 								src='/static/logo2.webp'
    // 								width='100%'
    // 								alt=''
    // 							/>
    // 						</a>
    // 					</Link>
    // 				</div>
    // 				<nav className='main-navbar__items'>
    // 					<ul>
    // 						<li>
    // 							<Link route='producto' params={{ tag: 'hombre' }}>
    // 								<a>Hombres</a>
    // 							</Link>
    // 						</li>
    // 						<li>
    // 							<Link route='producto' params={{ tag: 'mujer' }}>
    // 								<a>Mujeres</a>
    // 							</Link>
    // 						</li>
    // 						<li>
    // 							<Link route='producto' params={{ tag: 'niño' }}>
    // 								<a>Niños</a>
    // 							</Link>
    // 						</li>
    // 						<li>
    // 							<Link route='producto' params={{ tag: '' }}>
    // 								<a>Accesorios</a>
    // 							</Link>
    // 						</li>
    // 						<li>
    // 							<Link route='producto' params={{ tag: '' }}>
    // 								<a>Regalos</a>
    // 							</Link>
    // 						</li>
    // 					</ul>
    // 				</nav>
    // 				<span className='main-navbar__icon'>
    // 					<form
    // 						onSubmit={(e) => {
    // 							handleSubmit(e);
    // 						}}>
    // 						<input
    // 							type='search'
    // 							onFocus={() => {
    // 								setDisplay(false);
    // 							}}
    // 							ref={(input) => (textInput = input)}
    // 							onBlur={() => {
    // 								setDisplay(true);
    // 							}}
    // 							name='search'
    // 							id='search'
    // 							placeholder='Search'
    // 						/>
    // 						<img
    // 							className='search-icon'
    // 							src='/static/icons/icons8-search.svg'
    // 							width='30px'
    // 							alt='search'
    // 						/>
    // 					</form>
    // 				</span>
    // 				<img
    // 					onClick={() => {
    // 						handleClick();
    // 					}}
    // 					className='icon-menu'
    // 					width='30px'
    // 					src='/static/icons/menu.svg'
    // 					alt='menu'
    // 				/>
    // 				<div className='login'>
    // 					<h1
    // 						onClick={() => {
    // 							handleLogin(client);
    // 						}}>
    // 						Login
    // 					</h1>
    // 					<h1
    // 						onClick={() => {
    // 							handleLogout(client);
    // 						}}>
    // 						Logout
    // 					</h1>
    // 					<p>{data.getUsers[0].username}</p>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // );

    __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "\n\t\t\t\t\t\t.navbar-container {\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 60px;\n\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.navbar {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tbackground: white;\n\t\t\t\t\t\t\tposition: fixed;\n\t\t\t\t\t\t\tz-index: 1000;\n\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\t-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n\t\t\t\t\t\t\t-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n\t\t\t\t\t\t\tbox-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n\t\t\t\t\t\t\tz-index: 100;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.navbar h1 {\n\t\t\t\t\t\t\tmargin: .5rem 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.main-navbar {\n\t\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\tpadding: .5rem 1rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\tmargin: 0 .8em;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.logo {\n\t\t\t\t\t\t\tdisplay: ".concat(display ? 'flex' : 'none', ";\n\t\t\t\t\t\t\talign-items: flex-end;\n\t\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search {\n\t\t\t\t\t\t\tpadding: .6rem;\n\t\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tborder-radius: 15px;\n\t\t\t\t\t\t\tbackground: #dee8ef;\n\t\t\t\t\t\t\ttransition: .5s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search::placeholder {\n\t\t\t\t\t\t\tcolor: grey;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search:focus {\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.main-navbar__items {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.main-navbar__items li:hover a {\n\t\t\t\t\t\t\tcolor: #fd486b;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.main-navbar__icon {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\talign-item: center;\n\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\tflex-grow: 1;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.main-navbar__title {\n\t\t\t\t\t\t\tcolor: #e84855;\n\t\t\t\t\t\t\tfont-size: 1.2rem;\n\t\t\t\t\t\t\twidth: 50px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.categorias {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\talign-item: center;\n\t\t\t\t\t\t\tpadding-right: 1rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.icon-menu {\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t\ttransition-property: width, opacity;\n\t\t\t\t\t\t\ttransition-duration: 1s, 0s;\n\t\t\t\t\t\t\tdisplay: ").concat(display ? 'block' : 'none', ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.search-icon {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media (min-width: 660px) {\n\t\t\t\t\t\t\t.logo {\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\twidth: 225px;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.icon-menu {\n\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.search-icon {\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__icon {\n\t\t\t\t\t\t\t\tflex-grow: 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__items {\n\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t#search {\n\t\t\t\t\t\t\t\twidth: 170px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__items ul {\n\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\twidth: 460px;\n\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\theight: 2rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__items a {\n\t\t\t\t\t\t\t\tfont-size: 1.5em;\n\t\t\t\t\t\t\t\tcolor: black;\n\t\t\t\t\t\t\t\tletter-spacing: -1px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__items ul li {\n\t\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\t\tfont-size: .7rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t.main-navbar__title {\n\t\t\t\t\t\t\t\tfont-size: 1.7rem;\n\t\t\t\t\t\t\t\twidth: 65px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.e40d95525e73c0100d91.hot-update.js.map