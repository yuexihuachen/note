/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../client/src/components/login/index.tsx":
/*!************************************************!*\
  !*** ../client/src/components/login/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../client/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../client/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../client/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "../client/src/components/login/index.scss");



var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





function Login() {
  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      uname = _useState2[0],
      setUname = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      pwd = _useState4[0],
      setPwd = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      hasLogin = _useState6[0],
      setHasLogin = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/isLogin').then(function (response) {
      var _a, _b;

      setHasLogin(!!((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.isLogin));
    });
  }, []);

  var setLogin = function setLogin() {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _a, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/login', {
                uname: uname,
                pwd: pwd
              });

            case 2:
              result = _context.sent;

              if ((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.message.includes('success')) {
                setHasLogin(true);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  var handleKeyLocate = function handleKeyLocate(e) {
    if (e.code === 'Enter') {
      setLogin();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal ".concat(hasLogin ? '' : 'is-active')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-background"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "control has-icons-left has-icons-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    value: uname,
    onChange: function onChange(e) {
      return setUname(e.target.value);
    },
    className: "input",
    type: "email",
    onKeyDown: handleKeyLocate,
    placeholder: "\u7528\u6237\u540D"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fas icon-user"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    value: pwd,
    onChange: function onChange(e) {
      return setPwd(e.target.value);
    },
    className: "input",
    type: "password",
    onKeyDown: handleKeyLocate,
    placeholder: "\u5BC6\u7801"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fas icon-lock"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    onClick: setLogin,
    className: "button is-success is-fullwidth"
  }, "\u767B\u5F55"))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "../client/src/pages/write/App.tsx":
/*!*****************************************!*\
  !*** ../client/src/pages/write/App.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/content */ "../client/src/pages/write/features/content/index.tsx");
/* harmony import */ var _features_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/header */ "../client/src/pages/write/features/header/index.tsx");
/* harmony import */ var _features_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/footer */ "../client/src/pages/write/features/footer/index.tsx");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/login */ "../client/src/components/login/index.tsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "../client/src/pages/write/App.scss");







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_header__WEBPACK_IMPORTED_MODULE_2__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_content__WEBPACK_IMPORTED_MODULE_1__.Content, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_footer__WEBPACK_IMPORTED_MODULE_3__.Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_login__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "../client/src/pages/write/app/hooks.ts":
/*!**********************************************!*\
  !*** ../client/src/pages/write/app/hooks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch),
/* harmony export */   "useAppSelector": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../client/node_modules/react-redux/es/index.js");
 // Use throughout your app instead of plain `useDispatch` and `useSelector`

var useAppDispatch = function useAppDispatch() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
};
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "../client/src/pages/write/app/services/category.ts":
/*!**********************************************************!*\
  !*** ../client/src/pages/write/app/services/category.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryApi": () => (/* binding */ categoryApi),
/* harmony export */   "getCategoryData": () => (/* binding */ getCategoryData),
/* harmony export */   "useGetCategoryByNameQuery": () => (/* binding */ useGetCategoryByNameQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "../client/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "../client/node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "../client/node_modules/nanoid/index.browser.js");

 // Define a service using a base URL and expected endpoints

var categoryApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  reducerPath: 'category',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({
    baseUrl: '/',
    prepareHeaders: function prepareHeaders(headers, _ref) {
      var getState = _ref.getState;
      headers.set('requestId', "".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)()));
      var token = getState();

      if (token) {
        headers.set('authorization', "Bearer ".concat(token));
      }

      return headers;
    }
  }),
  endpoints: function endpoints(builder) {
    return {
      getCategoryByName: builder.query({
        query: function query(name) {
          return {
            url: "".concat(name),
            method: 'GET',
            headers: {
              'content-type': 'text/plain'
            },
            params: {
              name: name
            }
          };
        }
      })
    };
  }
});
var useGetCategoryByNameQuery = categoryApi.useGetCategoryByNameQuery;

var getCategoryData = function getCategoryData(state) {
  return state;
};

/***/ }),

/***/ "../client/src/pages/write/app/store.ts":
/*!**********************************************!*\
  !*** ../client/src/pages/write/app/store.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../client/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "../client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/category */ "../client/src/pages/write/app/services/category.ts");
/* harmony import */ var _features_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/footer/footerSlice */ "../client/src/pages/write/features/footer/footerSlice.ts");


var _reducer;




var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
  reducer: (_reducer = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _services_category__WEBPACK_IMPORTED_MODULE_1__.categoryApi.reducerPath, _services_category__WEBPACK_IMPORTED_MODULE_1__.categoryApi.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, "SubmitReducer", _features_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__["default"]), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_services_category__WEBPACK_IMPORTED_MODULE_1__.categoryApi.middleware);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); //https://codesandbox.io/s/rtk-query-demo-lbp7n?from-embed=&file=/src/app/services/split/posts.ts
//https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?from-embed=&file=/src/test/server/index.ts

/***/ }),

/***/ "../client/src/pages/write/features/content/index.tsx":
/*!************************************************************!*\
  !*** ../client/src/pages/write/features/content/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../client/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "../client/node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! remark-gfm */ "../client/node_modules/remark-gfm/index.js");
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rehype-raw */ "../client/node_modules/rehype-raw/index.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror */ "../client/node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_footerSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footerSlice */ "../client/src/pages/write/features/footer/footerSlice.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/hooks */ "../client/src/pages/write/app/hooks.ts");
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/selection/active-line */ "../client/node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets */ "../client/node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-syntax-highlighter */ "../client/node_modules/react-syntax-highlighter/dist/esm/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/one-dark.js */ "../client/node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/write/features/content/index.scss");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













var editor = null;
function Content() {
  var _a;

  var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  var submitData = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_footer_footerSlice__WEBPACK_IMPORTED_MODULE_3__.getDate);

  var setValue = function setValue(value) {
    dispatch((0,_footer_footerSlice__WEBPACK_IMPORTED_MODULE_3__.changeContent)({
      content: value
    }));
  };

  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  if ((_a = react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__["default"] === null || react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__["default"] === void 0 ? void 0 : react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__["default"].codeTagProps) === null || _a === void 0 ? void 0 : _a.style) {
    react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__["default"].codeTagProps.style.whiteSpace = 'pre-wrap';
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (editor) {
      editor.setValue(submitData.content);
    }
  }, [editor]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    editor = codemirror__WEBPACK_IMPORTED_MODULE_2___default().fromTextArea(editorRef.current, {
      theme: "seti",
      lineNumbers: true,
      lineWrapping: true,
      direction: "ltl",
      styleActiveLine: true,
      matchBrackets: true,
      value: submitData.content
    });
    editor.on("change", function () {
      setValue(editor.getValue());
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
    ref: editorRef,
    value: submitData.content,
    onChange: function onChange(e) {
      setValue(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_9__.ReactMarkdown, {
    children: submitData.content,
    remarkPlugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_10__["default"]],
    rehypePlugins: [rehype_raw__WEBPACK_IMPORTED_MODULE_11__["default"]],
    components: {
      code: function code(_a) {
        var node = _a.node,
            inline = _a.inline,
            className = _a.className,
            children = _a.children,
            props = __rest(_a, ["node", "inline", "className", "children"]);

        return !inline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          children: String(children).replace(/\n$/, ''),
          style: react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_8__["default"],
          language: 'javascript',
          PreTag: "div"
        }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: className
        }, props), children);
      }
    }
  })))))));
}

/***/ }),

/***/ "../client/src/pages/write/features/footer/footerSlice.ts":
/*!****************************************************************!*\
  !*** ../client/src/pages/write/features/footer/footerSlice.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCategory": () => (/* binding */ changeCategory),
/* harmony export */   "changeContent": () => (/* binding */ changeContent),
/* harmony export */   "changeData": () => (/* binding */ changeData),
/* harmony export */   "changePush": () => (/* binding */ changePush),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDate": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
  title: '',
  category: '',
  content: '',
  isPush: 0
};
var submitSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeTitle: function changeTitle(state, action) {
      state.title = action.payload.title;
    },
    changeCategory: function changeCategory(state, action) {
      state.category = action.payload.category;
    },
    changeContent: function changeContent(state, action) {
      state.content = action.payload.content;
    },
    changePush: function changePush(state, action) {
      state.isPush = action.payload.isPush;
    },
    changeData: function changeData(state, action) {
      state = Object.assign(state, {
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content,
        isPush: action.payload.isPush
      });
    }
  }
});
var _submitSlice$actions = submitSlice.actions,
    changeTitle = _submitSlice$actions.changeTitle,
    changeCategory = _submitSlice$actions.changeCategory,
    changeContent = _submitSlice$actions.changeContent,
    changePush = _submitSlice$actions.changePush,
    changeData = _submitSlice$actions.changeData;

var getDate = function getDate(state) {
  return state.SubmitReducer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitSlice.reducer);

/***/ }),

/***/ "../client/src/pages/write/features/footer/index.tsx":
/*!***********************************************************!*\
  !*** ../client/src/pages/write/features/footer/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../client/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footerSlice */ "../client/src/pages/write/features/footer/footerSlice.ts");
/* harmony import */ var _app_services_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/category */ "../client/src/pages/write/app/services/category.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/hooks */ "../client/src/pages/write/app/hooks.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/index */ "../client/src/utils/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/write/features/footer/index.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "../client/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};








function Footer() {
  var _this = this;

  var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  var submitData = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.getDate);

  var _useGetCategoryByName = (0,_app_services_category__WEBPACK_IMPORTED_MODULE_3__.useGetCategoryByNameQuery)('getCategory'),
      data = _useGetCategoryByName.data;

  var setPush = function setPush(value) {
    dispatch((0,_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.changePush)({
      isPush: value ? 1 : 0
    }));
  };

  var addNote = function addNote() {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var category_id, title, content, category, isPush, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              category_id = data.data.length && data.data[0].category_id;
              title = submitData.title, content = submitData.content, category = submitData.category, isPush = submitData.isPush;
              response = {
                data: {}
              };

              if (!(!title || !content)) {
                _context.next = 7;
                break;
              }

              response.data = {
                code: -1,
                message: '日记标题或内容不能为空'
              };
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/setArticle', {
                title: title,
                content: encodeURIComponent(content),
                isPush: isPush,
                category: category.length ? category : category_id
              });

            case 9:
              response = _context.sent;

            case 10:
              return _context.abrupt("return", response);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  var updateNote = function updateNote(id) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var title, content, category, isPush, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              title = submitData.title, content = submitData.content, category = submitData.category, isPush = submitData.isPush;
              response = {
                data: {}
              };

              if (!(!title || !content)) {
                _context2.next = 6;
                break;
              }

              response.data = {
                code: -1,
                message: '日记标题或内容不能为空'
              };
              _context2.next = 9;
              break;

            case 6:
              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post('/setArticle', {
                id: id,
                title: title,
                content: encodeURIComponent(content),
                isPush: isPush,
                category: category
              });

            case 8:
              response = _context2.sent;

            case 9:
              return _context2.abrupt("return", response);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  };

  var onSubmit = function onSubmit() {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var params, id, response, msg, _response, _msg;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = new URLSearchParams(location.search);
              id = params.get('id');

              if (!id) {
                _context3.next = 10;
                break;
              }

              _context3.next = 5;
              return updateNote(id);

            case 5:
              response = _context3.sent;
              msg = response === null || response === void 0 ? void 0 : response.data;
              (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.returnResult)(msg);
              _context3.next = 15;
              break;

            case 10:
              _context3.next = 12;
              return addNote();

            case 12:
              _response = _context3.sent;
              _msg = _response === null || _response === void 0 ? void 0 : _response.data;
              (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.returnResult)(_msg);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var params = new URLSearchParams(location.search);
    var id = params.get('id');

    if (id) {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post('/searchNote', {
        article_id: id
      }).then(function (response) {
        var _a, _b;

        if ((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) {
          var _data = response.data.data[0];
          dispatch((0,_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.changeData)({
            title: _data.title,
            category: _data.category_id,
            content: decodeURIComponent(_data.content),
            isPush: _data.is_push
          }));
        }
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "headers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "checkbox is-push"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "checkbox",
    checked: submitData.isPush,
    onChange: function onChange(e) {
      return setPush(e.target.checked);
    }
  }), "\u662F\u5426\u53D1\u5E03")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "hero is-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: onSubmit,
    className: "button  is-success is-fullwidth "
  }, "\u63D0\u4EA4"))))))));
}

/***/ }),

/***/ "../client/src/pages/write/features/header/index.tsx":
/*!***********************************************************!*\
  !*** ../client/src/pages/write/features/header/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_services_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/services/category */ "../client/src/pages/write/app/services/category.ts");
/* harmony import */ var _footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footerSlice */ "../client/src/pages/write/features/footer/footerSlice.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/hooks */ "../client/src/pages/write/app/hooks.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/write/features/header/index.scss");





function Header() {
  var _useGetCategoryByName = (0,_app_services_category__WEBPACK_IMPORTED_MODULE_1__.useGetCategoryByNameQuery)('getCategory'),
      data = _useGetCategoryByName.data,
      isLoading = _useGetCategoryByName.isLoading;

  var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  var submitData = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.getDate);

  var setTitle = function setTitle(value) {
    dispatch((0,_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.changeTitle)({
      title: value
    }));
  };

  var setValue = function setValue(value) {
    dispatch((0,_footer_footerSlice__WEBPACK_IMPORTED_MODULE_2__.changeCategory)({
      category: value
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "headers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "input is-large",
    value: submitData.title,
    autoComplete: "off",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    type: "text",
    placeholder: "\u6587\u7AE0\u6807\u9898"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "hero is-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "select is-large select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "select",
    value: submitData.category,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }, !isLoading && data.data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: item.category_id,
      value: item.category_id
    }, item.category_name);
  }))))))))));
} // const mapState = (state: any) => state.SubmitReducer
// const actionCreators = {
//   changeTitle, 
//   changeCategory
// };
// export const ConnectedHeader = connect(
//   mapState,
//   actionCreators
// )(Header);

/***/ }),

/***/ "../client/src/pages/write/index.tsx":
/*!*******************************************!*\
  !*** ../client/src/pages/write/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../client/node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../client/node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "../client/src/pages/write/App.tsx");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/store */ "../client/src/pages/write/app/store.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/write/index.scss");






react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root')).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: _app_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)));

/***/ }),

/***/ "../client/src/utils/index.ts":
/*!************************************!*\
  !*** ../client/src/utils/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepClone": () => (/* binding */ deepClone),
/* harmony export */   "getQueryStringArgs": () => (/* binding */ getQueryStringArgs),
/* harmony export */   "getUrlStrArgs": () => (/* binding */ getUrlStrArgs),
/* harmony export */   "returnResult": () => (/* binding */ returnResult)
/* harmony export */ });
var deepClone = function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
};
/*
    例子 : https://mc.hujiang.com?a=1&b=2&c=3
*/


var getQueryStringArgs = function getQueryStringArgs() {
  if (!location.search) return {};
  var qs = location.search.substring(1).split("&");
  var args = {};

  for (var i = 0; i < qs.length; i++) {
    var idx = qs[i].indexOf("=");
    var name = qs[i].substring(0, idx);
    var val = qs[i].substring(idx + 1);
    args[name] = decodeURIComponent(val);
  }

  return args;
};
/*
      说明 : https://mc.hujiang.com/{ classid }/{ productid }/{ pointid }
      例子 : https://mc.hujiang.com/1345334/1/3
  */


var getUrlStrArgs = function getUrlStrArgs() {
  var strNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  // 取得url路径字符串
  var pathStr = location.pathname;

  if (pathStr.endsWith('/')) {
    pathStr = pathStr.slice(0, pathStr.length - 1);
  }

  var qs = pathStr.split("/");
  var args = [];
  var len = qs.length; // 逐个将每一项添加到 args 对象中

  for (var i = strNum; i >= 1; i--) {
    args[args.length] = qs[len - i];
  }

  return args;
};

var returnResult = function returnResult(result) {
  var str = result.message ? result.message : '操作成功';

  if (result.code) {
    str = result.message ? result.message : '操作失败';
  }

  alert(str);
};



/***/ }),

/***/ "../client/src/components/login/index.scss":
/*!*************************************************!*\
  !*** ../client/src/components/login/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/write/App.scss":
/*!******************************************!*\
  !*** ../client/src/pages/write/App.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/write/features/content/index.scss":
/*!*************************************************************!*\
  !*** ../client/src/pages/write/features/content/index.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/write/features/footer/index.scss":
/*!************************************************************!*\
  !*** ../client/src/pages/write/features/footer/index.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/write/features/header/index.scss":
/*!************************************************************!*\
  !*** ../client/src/pages/write/features/header/index.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/write/index.scss":
/*!********************************************!*\
  !*** ../client/src/pages/write/index.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"write": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbuild"] = self["webpackChunkbuild"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common.frame"], () => (__webpack_require__("../client/src/pages/write/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=write.js.map