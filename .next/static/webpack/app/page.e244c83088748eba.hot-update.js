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

/***/ "(app-pages-browser)/./components/WorkList.jsx":
/*!*********************************!*\
  !*** ./components/WorkList.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_WorkList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/WorkList.scss */ \"(app-pages-browser)/./styles/WorkList.scss\");\n/* harmony import */ var _WorkCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkCard */ \"(app-pages-browser)/./components/WorkCard.jsx\");\n\n\n\nconst WorkList = (param)=>{\n    let { data } = param;\n    if (!data || data.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No work items available.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkList.jsx\",\n            lineNumber: 6,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"work-list\",\n        children: data.map((work)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WorkCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                work: work\n            }, work._id, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkList.jsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkList.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WorkList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkList);\nvar _c;\n$RefreshReg$(_c, \"WorkList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV29ya0xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBQ0c7QUFFbEMsTUFBTUMsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRTtJQUN4QixJQUFJLENBQUNBLFFBQVFBLEtBQUtDLE1BQU0sS0FBSyxHQUFHO1FBQzlCLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkosS0FBS0ssR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDUixpREFBUUE7Z0JBQWdCUSxNQUFNQTtlQUFoQkEsS0FBS0MsR0FBRzs7Ozs7Ozs7OztBQUkvQjtLQVpNUjtBQWNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29ya0xpc3QuanN4PzBlZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHN0eWxlcy9Xb3JrTGlzdC5zY3NzXCI7XG5pbXBvcnQgV29ya0NhcmQgZnJvbSBcIi4vV29ya0NhcmRcIjtcblxuY29uc3QgV29ya0xpc3QgPSAoeyBkYXRhIH0pID0+IHtcbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxwPk5vIHdvcmsgaXRlbXMgYXZhaWxhYmxlLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1saXN0XCI+XG4gICAgICB7ZGF0YS5tYXAoKHdvcmspID0+IChcbiAgICAgICAgPFdvcmtDYXJkIGtleT17d29yay5faWR9IHdvcms9e3dvcmt9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtMaXN0O1xuIl0sIm5hbWVzIjpbIldvcmtDYXJkIiwiV29ya0xpc3QiLCJkYXRhIiwibGVuZ3RoIiwicCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIndvcmsiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WorkList.jsx\n"));

/***/ })

});