"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/pagination/dist/chunk-BIN3WWJN.mjs\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ \"(app-pages-browser)/./components/Search.tsx\");\n/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchCard */ \"(app-pages-browser)/./components/SearchCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Hero(param) {\n    let { avocats } = param;\n    _s();\n    const [currAvocats, setCurrAvocats] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(avocats.slice(0, 10));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex  w-full flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-sec1 w-full flex flex-col items-center text-white py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl text-center my-4 font-semibold\",\n                        children: \"Search The best Avocats\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-center text-xl mb-4\",\n                        children: \"Use the filters to find the avocats that suits you !\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center py-12 gap-8 w-full\",\n                children: [\n                    currAvocats.map((avocat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            avocat: avocat\n                        }, index, false, {\n                            fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.pagination_default, {\n                        total: 10,\n                        initialPage: 1,\n                        onChange: (page)=>{\n                            setCurrAvocats(avocats.slice((page - 1) * 10, page * 10));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/repos/Mouhami-front-end/components/Hero.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"b7w26fAkfr0snNIW4SaPj2dgmWM=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ2pCO0FBQ1E7QUFFTDtBQUVsQixTQUFTSSxLQUFLLEtBQWtDO1FBQWxDLEVBQUVDLE9BQU8sRUFBeUIsR0FBbEM7O0lBQzNCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FDNUNFLFFBQVFHLEtBQUssQ0FBQyxHQUFHO0lBRW5CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBMEM7Ozs7OztrQ0FHeEQsOERBQUNFO3dCQUFHRixXQUFVO2tDQUEyQjs7Ozs7O2tDQUd6Qyw4REFBQ1QsK0NBQU1BOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ1E7Z0JBQUlDLFdBQVU7O29CQUNaSixZQUFZTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3hCLDhEQUFDYixtREFBVUE7NEJBQUNZLFFBQVFBOzJCQUFhQzs7Ozs7a0NBRW5DLDhEQUFDZixpRUFBVUE7d0JBQ1RnQixPQUFPO3dCQUNQQyxhQUFhO3dCQUNiQyxVQUFVLENBQUNDOzRCQUNUWixlQUFlRixRQUFRRyxLQUFLLENBQUMsQ0FBQ1csT0FBTyxLQUFLLElBQUlBLE9BQU87d0JBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQTlCd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby50c3g/ZTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5pbXBvcnQgU2VhcmNoQ2FyZCBmcm9tIFwiLi9TZWFyY2hDYXJkXCI7XG5pbXBvcnQgeyBMYXd5ZXIgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7IGF2b2NhdHMgfTogeyBhdm9jYXRzOiBMYXd5ZXJbXSB9KSB7XG4gIGNvbnN0IFtjdXJyQXZvY2F0cywgc2V0Q3VyckF2b2NhdHNdID0gdXNlU3RhdGU8TGF3eWVyW10+KFxuICAgIGF2b2NhdHMuc2xpY2UoMCwgMTApXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlYzEgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgcHktOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1jZW50ZXIgbXktNCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgU2VhcmNoIFRoZSBiZXN0IEF2b2NhdHNcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGwgbWItNFwiPlxuICAgICAgICAgIFVzZSB0aGUgZmlsdGVycyB0byBmaW5kIHRoZSBhdm9jYXRzIHRoYXQgc3VpdHMgeW91ICFcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktMTIgZ2FwLTggdy1mdWxsXCI+XG4gICAgICAgIHtjdXJyQXZvY2F0cy5tYXAoKGF2b2NhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VhcmNoQ2FyZCBhdm9jYXQ9e2F2b2NhdH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgdG90YWw9ezEwfVxuICAgICAgICAgIGluaXRpYWxQYWdlPXsxfVxuICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZSkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VyckF2b2NhdHMoYXZvY2F0cy5zbGljZSgocGFnZSAtIDEpICogMTAsIHBhZ2UgKiAxMCkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiU2VhcmNoIiwiU2VhcmNoQ2FyZCIsInVzZVN0YXRlIiwiSGVybyIsImF2b2NhdHMiLCJjdXJyQXZvY2F0cyIsInNldEN1cnJBdm9jYXRzIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiYXZvY2F0IiwiaW5kZXgiLCJ0b3RhbCIsImluaXRpYWxQYWdlIiwib25DaGFuZ2UiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.tsx\n"));

/***/ })

});