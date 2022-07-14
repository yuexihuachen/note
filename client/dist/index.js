/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../client/src/pages/index/App.tsx":
/*!*****************************************!*\
  !*** ../client/src/pages/index/App.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/menu */ "../client/src/pages/index/features/menu/index.tsx");
/* harmony import */ var _features_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/content */ "../client/src/pages/index/features/content/index.tsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.scss */ "../client/src/pages/index/App.scss");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_menu__WEBPACK_IMPORTED_MODULE_1__.Menu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_content__WEBPACK_IMPORTED_MODULE_2__.Article, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "../client/src/pages/index/app/hooks.ts":
/*!**********************************************!*\
  !*** ../client/src/pages/index/app/hooks.ts ***!
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

/***/ "../client/src/pages/index/app/services/articles.ts":
/*!**********************************************************!*\
  !*** ../client/src/pages/index/app/services/articles.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articlesApi": () => (/* binding */ articlesApi),
/* harmony export */   "useGetSearchByNameQuery": () => (/* binding */ useGetSearchByNameQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "../client/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "../client/node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "../client/node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/index */ "../client/src/utils/index.ts");




var _query = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getQueryStringArgs)(); // Define a service using a base URL and expected endpoints


var articlesApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({
  reducerPath: 'articlesApi',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({
    baseUrl: '/',
    prepareHeaders: function prepareHeaders(headers, _ref) {
      var getState = _ref.getState;
      headers.set('requestId', "".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)()));
      var token = getState();

      if (token) {
        headers.set('authorization', "Bearer ");
      }

      return headers;
    }
  }),
  endpoints: function endpoints(builder) {
    return {
      getSearchByName: builder.query({
        query: function query(name) {
          return {
            url: "".concat(name),
            method: 'POST',
            body: {
              category: _query.cid,
              isPush: 1
            }
          };
        }
      })
    };
  }
});
var useGetSearchByNameQuery = articlesApi.useGetSearchByNameQuery;


/***/ }),

/***/ "../client/src/pages/index/app/services/category.ts":
/*!**********************************************************!*\
  !*** ../client/src/pages/index/app/services/category.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryApi": () => (/* binding */ categoryApi),
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


/***/ }),

/***/ "../client/src/pages/index/app/store.ts":
/*!**********************************************!*\
  !*** ../client/src/pages/index/app/store.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../client/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "../client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _features_content_indexSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/content/indexSlice */ "../client/src/pages/index/features/content/indexSlice.ts");
/* harmony import */ var _services_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/articles */ "../client/src/pages/index/app/services/articles.ts");
/* harmony import */ var _services_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/category */ "../client/src/pages/index/app/services/category.ts");


var _reducer;





var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: (_reducer = {
    articleReducer: _features_content_indexSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _services_articles__WEBPACK_IMPORTED_MODULE_2__.articlesApi.reducerPath, _services_articles__WEBPACK_IMPORTED_MODULE_2__.articlesApi.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _services_category__WEBPACK_IMPORTED_MODULE_3__.categoryApi.reducerPath, _services_category__WEBPACK_IMPORTED_MODULE_3__.categoryApi.reducer), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_services_articles__WEBPACK_IMPORTED_MODULE_2__.articlesApi.middleware, _services_category__WEBPACK_IMPORTED_MODULE_3__.categoryApi.middleware);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); //https://codesandbox.io/s/rtk-query-demo-lbp7n?from-embed=&file=/src/app/services/split/posts.ts
//https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?from-embed=&file=/src/test/server/index.ts

/***/ }),

/***/ "../client/src/pages/index/features/content/index.tsx":
/*!************************************************************!*\
  !*** ../client/src/pages/index/features/content/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../client/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/hooks */ "../client/src/pages/index/app/hooks.ts");
/* harmony import */ var _indexSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexSlice */ "../client/src/pages/index/features/content/indexSlice.ts");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "../client/node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ "../client/node_modules/remark-gfm/index.js");
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-raw */ "../client/node_modules/rehype-raw/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter */ "../client/node_modules/react-syntax-highlighter/dist/esm/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/one-dark.js */ "../client/node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/index/features/content/index.scss");


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










function Article() {
  var article = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_indexSlice__WEBPACK_IMPORTED_MODULE_3__.getArticle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "article-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "article content markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5__.ReactMarkdown, {
    children: decodeURIComponent(article),
    remarkPlugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6__["default"]],
    rehypePlugins: [rehype_raw__WEBPACK_IMPORTED_MODULE_7__["default"]],
    components: {
      code: function code(_a) {
        var node = _a.node,
            inline = _a.inline,
            className = _a.className,
            children = _a.children,
            props = __rest(_a, ["node", "inline", "className", "children"]);

        return !inline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          children: String(children).replace(/\n$/, ''),
          style: react_syntax_highlighter_dist_esm_styles_prism_one_dark_js__WEBPACK_IMPORTED_MODULE_9__["default"],
          language: 'javascript',
          PreTag: "div"
        }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("code", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          className: className
        }, props), children);
      }
    }
  })))));
}

/***/ }),

/***/ "../client/src/pages/index/features/content/indexSlice.ts":
/*!****************************************************************!*\
  !*** ../client/src/pages/index/features/content/indexSlice.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleSlice": () => (/* binding */ articleSlice),
/* harmony export */   "changeContent": () => (/* binding */ changeContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getArticle": () => (/* binding */ getArticle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
 // Define the initial state using that type

var initialState = {
  content: ''
};
var articleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'article',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    changeContent: function changeContent(state, action) {
      state.content = action.payload.content;
    }
  }
});
var changeContent = articleSlice.actions.changeContent;

var getArticle = function getArticle(state) {
  return state.articleReducer.content;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleSlice.reducer);

/***/ }),

/***/ "../client/src/pages/index/features/menu/index.tsx":
/*!*********************************************************!*\
  !*** ../client/src/pages/index/features/menu/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../client/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/hooks */ "../client/src/pages/index/app/hooks.ts");
/* harmony import */ var _app_services_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/articles */ "../client/src/pages/index/app/services/articles.ts");
/* harmony import */ var _app_services_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/category */ "../client/src/pages/index/app/services/category.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/index */ "../client/src/utils/index.ts");
/* harmony import */ var _content_indexSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/indexSlice */ "../client/src/pages/index/features/content/indexSlice.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "../client/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/index/features/menu/index.scss");









var query = (0,_utils_index__WEBPACK_IMPORTED_MODULE_5__.getQueryStringArgs)();
function Menu() {
  var dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  var categorys = (0,_app_services_category__WEBPACK_IMPORTED_MODULE_4__.useGetCategoryByNameQuery)('getCategory');

  var _useGetSearchByNameQu = (0,_app_services_articles__WEBPACK_IMPORTED_MODULE_3__.useGetSearchByNameQuery)('checkNote'),
      data = _useGetSearchByNameQu.data,
      isLoading = _useGetSearchByNameQu.isLoading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      articleId = _useState2[0],
      setArticleId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      category = _useState4[0],
      setCategory = _useState4[1];

  var fetchArticle = function fetchArticle(id) {
    axios__WEBPACK_IMPORTED_MODULE_7___default().post('/checkNote', {
      article_id: id
    }).then(function (response) {
      var res = response.data.data;

      if (res && res.length) {
        dispatch((0,_content_indexSlice__WEBPACK_IMPORTED_MODULE_6__.changeContent)({
          content: res[0].content
        }));
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _a;

    if ((_a = categorys === null || categorys === void 0 ? void 0 : categorys.data) === null || _a === void 0 ? void 0 : _a.data) {
      var categoryName = categorys.data.data.find(function (item) {
        return item.category_id == query.cid;
      });
      setCategory(categoryName.category_name);
    }
  }, [categorys.isLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!isLoading && data.data.length) {
      setArticleId(data.data[0].article_id);
      fetchArticle(data.data[0].article_id);
    }
  }, [isLoading]);

  var choiceArticle = function choiceArticle(id) {
    setArticleId(id);
    fetchArticle(id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "asider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "sidebar-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "sidebar-heading"
  }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "sidebar-ul sidebar-group-items"
  }, !isLoading && data.data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      onClick: function onClick() {
        choiceArticle(item.article_id);
      },
      key: item.article_id,
      className: "".concat(articleId === item.article_id ? 'sidebar-items' : '')
    }, item.title);
  }))));
}

/***/ }),

/***/ "../client/src/pages/index/index.tsx":
/*!*******************************************!*\
  !*** ../client/src/pages/index/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../client/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../client/node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../client/node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "../client/src/pages/index/App.tsx");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/store */ "../client/src/pages/index/app/store.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "../client/src/pages/index/index.scss");






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
  var str = '操作成功';

  if (result) {
    str = '操作失败';
  }

  alert(str);
};



/***/ }),

/***/ "../client/src/pages/index/App.scss":
/*!******************************************!*\
  !*** ../client/src/pages/index/App.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/index/features/content/index.scss":
/*!*************************************************************!*\
  !*** ../client/src/pages/index/features/content/index.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/index/features/menu/index.scss":
/*!**********************************************************!*\
  !*** ../client/src/pages/index/features/menu/index.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../client/src/pages/index/index.scss":
/*!********************************************!*\
  !*** ../client/src/pages/index/index.scss ***!
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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common.frame"], () => (__webpack_require__("../client/src/pages/index/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map