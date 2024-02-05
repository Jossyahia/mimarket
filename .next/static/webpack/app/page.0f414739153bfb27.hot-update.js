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

/***/ "(app-pages-browser)/./components/WorkCard.jsx":
/*!*********************************!*\
  !*** ./components/WorkCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBackIosNew,ArrowForwardIos,Delete,Favorite,FavoriteBorder!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Delete.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBackIosNew,ArrowForwardIos,Delete,Favorite,FavoriteBorder!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Favorite.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowBackIosNew,ArrowForwardIos,Delete,Favorite,FavoriteBorder!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/FavoriteBorder.js\");\n/* harmony import */ var _styles_WorkCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/WorkCard.scss */ \"(app-pages-browser)/./styles/WorkCard.scss\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst WorkCard = (param)=>{\n    let { work } = param;\n    var _session_user, _session_user1;\n    _s();\n    const { _id, title, workPhotoPaths, creator, category, price } = work;\n    const { data: session, update } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const userId = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user._id;\n    const isUserCreator = userId === creator._id;\n    const wishlist = session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.wishlist;\n    const isLiked = wishlist === null || wishlist === void 0 ? void 0 : wishlist.find((item)=>(item === null || item === void 0 ? void 0 : item._id) === _id);\n    const handleDelete = async ()=>{\n        const hasConfirmed = confirm(\"Are you sure you want to delete this work?\");\n        if (hasConfirmed) {\n            try {\n                await fetch(\"api/work/\".concat(_id), {\n                    method: \"DELETE\"\n                });\n                window.location.reload();\n            } catch (err) {\n                console.log(err);\n            }\n        }\n    };\n    const patchWishlist = async ()=>{\n        try {\n            const response = await fetch(\"api/user/\".concat(userId, \"/wishlist/\").concat(_id), {\n                method: \"PATCH\"\n            });\n            const data = await response.json();\n            update({\n                user: {\n                    wishlist: data.wishlist\n                }\n            }); // update session\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const renderDeleteIcon = (e)=>{\n        e.stopPropagation();\n        handleDelete();\n    };\n    const renderFavoriteIcon = (e)=>{\n        e.stopPropagation();\n        patchWishlist();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"work-card\",\n        onClick: ()=>router.push(\"/work-details?id=\".concat(_id)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slider-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slider\",\n                    style: {\n                        transform: \"translateX(-\".concat(currentIndex * 100, \"%)\")\n                    },\n                    children: workPhotoPaths === null || workPhotoPaths === void 0 ? void 0 : workPhotoPaths.map((photo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"slide\"\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            isUserCreator ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon\",\n                onClick: renderDeleteIcon,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        borderRadius: \"50%\",\n                        backgroundColor: \"white\",\n                        padding: \"5px\",\n                        fontSize: \"30px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"icon\",\n                onClick: renderFavoriteIcon,\n                children: isLiked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        borderRadius: \"50%\",\n                        backgroundColor: \"white\",\n                        color: \"red\",\n                        padding: \"5px\",\n                        fontSize: \"30px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowBackIosNew_ArrowForwardIos_Delete_Favorite_FavoriteBorder_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        borderRadius: \"50%\",\n                        backgroundColor: \"white\",\n                        padding: \"5px\",\n                        fontSize: \"30px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\components\\\\WorkCard.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WorkCard, \"TDVp0gJ6+7L2PWYjUw47w4Zym7E=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = WorkCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkCard);\nvar _c;\n$RefreshReg$(_c, \"WorkCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV29ya0NhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBTTZCO0FBRUU7QUFDYztBQUNEO0FBQ1g7QUFFakMsTUFBTVEsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRTtRQUlUQyxlQUVFQTs7SUFMakIsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdQO0lBRWpFLE1BQU0sRUFBRVEsTUFBTVAsT0FBTyxFQUFFUSxNQUFNLEVBQUUsR0FBR2IsMkRBQVVBO0lBQzVDLE1BQU1jLFNBQVNULG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNVLElBQUksY0FBYlYsb0NBQUFBLGNBQWVDLEdBQUc7SUFDakMsTUFBTVUsZ0JBQWdCRixXQUFXTCxRQUFRSCxHQUFHO0lBQzVDLE1BQU1XLFdBQVdaLG9CQUFBQSwrQkFBQUEsaUJBQUFBLFFBQVNVLElBQUksY0FBYlYscUNBQUFBLGVBQWVZLFFBQVE7SUFDeEMsTUFBTUMsVUFBVUQscUJBQUFBLCtCQUFBQSxTQUFVRSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNZCxHQUFHLE1BQUtBO0lBRXZELE1BQU1lLGVBQWU7UUFDbkIsTUFBTUMsZUFBZUMsUUFBUTtRQUU3QixJQUFJRCxjQUFjO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUUsTUFBTSxZQUFnQixPQUFKbEIsTUFBTztvQkFDN0JtQixRQUFRO2dCQUNWO2dCQUNBQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07WUFDeEIsRUFBRSxPQUFPQyxLQUFLO2dCQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtJQUNGO0lBRUEsTUFBTUcsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1ULE1BQU0sWUFBK0JsQixPQUFuQlEsUUFBTyxjQUFnQixPQUFKUixNQUFPO2dCQUNqRW1CLFFBQVE7WUFDVjtZQUNBLE1BQU1iLE9BQU8sTUFBTXFCLFNBQVNDLElBQUk7WUFDaENyQixPQUFPO2dCQUFFRSxNQUFNO29CQUFFRSxVQUFVTCxLQUFLSyxRQUFRO2dCQUFDO1lBQUUsSUFBSSxpQkFBaUI7UUFDbEUsRUFBRSxPQUFPWSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEsTUFBTU0sbUJBQW1CLENBQUNDO1FBQ3hCQSxFQUFFQyxlQUFlO1FBQ2pCaEI7SUFDRjtJQUVBLE1BQU1pQixxQkFBcUIsQ0FBQ0Y7UUFDMUJBLEVBQUVDLGVBQWU7UUFDakJMO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtRQUNWQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQyxvQkFBd0IsT0FBSnJDOzswQkFFL0MsOERBQUNpQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQ0NDLFdBQVU7b0JBQ1ZJLE9BQU87d0JBQUVDLFdBQVcsZUFBa0MsT0FBbkJDLGVBQWUsS0FBSTtvQkFBSTs4QkFFekR0QywyQkFBQUEscUNBQUFBLGVBQWdCdUMsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUMzQiw4REFBQ1Y7NEJBQUlDLFdBQVU7MkJBQWFTOzs7Ozs7Ozs7Ozs7Ozs7MEJBT2xDLDhEQUFDVjtnQkFBSUMsV0FBVTs7Ozs7O1lBRWR4Qiw4QkFDQyw4REFBQ3VCO2dCQUFJQyxXQUFVO2dCQUFPQyxTQUFTTjswQkFDN0IsNEVBQUN0QyxnSkFBTUE7b0JBQ0xxRCxJQUFJO3dCQUNGQyxjQUFjO3dCQUNkQyxpQkFBaUI7d0JBQ2pCQyxTQUFTO3dCQUNUQyxVQUFVO29CQUNaOzs7Ozs7Ozs7OzBDQUlKLDhEQUFDZjtnQkFBSUMsV0FBVTtnQkFBT0MsU0FBU0g7MEJBQzVCcEIsd0JBQ0MsOERBQUNwQixnSkFBUUE7b0JBQ1BvRCxJQUFJO3dCQUNGQyxjQUFjO3dCQUNkQyxpQkFBaUI7d0JBQ2pCRyxPQUFPO3dCQUNQRixTQUFTO3dCQUNUQyxVQUFVO29CQUNaOzs7Ozs4Q0FHRiw4REFBQ3ZELGdKQUFjQTtvQkFDYm1ELElBQUk7d0JBQ0ZDLGNBQWM7d0JBQ2RDLGlCQUFpQjt3QkFDakJDLFNBQVM7d0JBQ1RDLFVBQVU7b0JBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Q7R0F2R01uRDs7UUFHOEJILHVEQUFVQTs7O0tBSHhDRztBQXlHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtDYXJkLmpzeD9kNDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFycm93QmFja0lvc05ldyxcbiAgQXJyb3dGb3J3YXJkSW9zLFxuICBEZWxldGUsXG4gIEZhdm9yaXRlLFxuICBGYXZvcml0ZUJvcmRlcixcbn0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxuaW1wb3J0IFwiQHN0eWxlcy9Xb3JrQ2FyZC5zY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgV29ya0NhcmQgPSAoeyB3b3JrIH0pID0+IHtcbiAgY29uc3QgeyBfaWQsIHRpdGxlLCB3b3JrUGhvdG9QYXRocywgY3JlYXRvciwgY2F0ZWdvcnksIHByaWNlIH0gPSB3b3JrO1xuXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgdXBkYXRlIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24/LnVzZXI/Ll9pZDtcbiAgY29uc3QgaXNVc2VyQ3JlYXRvciA9IHVzZXJJZCA9PT0gY3JlYXRvci5faWQ7XG4gIGNvbnN0IHdpc2hsaXN0ID0gc2Vzc2lvbj8udXNlcj8ud2lzaGxpc3Q7XG4gIGNvbnN0IGlzTGlrZWQgPSB3aXNobGlzdD8uZmluZCgoaXRlbSkgPT4gaXRlbT8uX2lkID09PSBfaWQpO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBoYXNDb25maXJtZWQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHdvcms/XCIpO1xuXG4gICAgaWYgKGhhc0NvbmZpcm1lZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmV0Y2goYGFwaS93b3JrLyR7X2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGF0Y2hXaXNobGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgYXBpL3VzZXIvJHt1c2VySWR9L3dpc2hsaXN0LyR7X2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB1cGRhdGUoeyB1c2VyOiB7IHdpc2hsaXN0OiBkYXRhLndpc2hsaXN0IH0gfSk7IC8vIHVwZGF0ZSBzZXNzaW9uXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJEZWxldGVJY29uID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGhhbmRsZURlbGV0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZhdm9yaXRlSWNvbiA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBwYXRjaFdpc2hsaXN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIlxuICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC93b3JrLWRldGFpbHM/aWQ9JHtfaWR9YCl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7Y3VycmVudEluZGV4ICogMTAwfSUpYCB9fVxuICAgICAgICA+XG4gICAgICAgICAge3dvcmtQaG90b1BhdGhzPy5tYXAoKHBob3RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7LyogLi4uIChzbGlkZXIgY29udGVudCkgKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+ey8qIC4uLiAoaW5mbyBjb250ZW50KSAqL308L2Rpdj5cblxuICAgICAge2lzVXNlckNyZWF0b3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiIG9uQ2xpY2s9e3JlbmRlckRlbGV0ZUljb259PlxuICAgICAgICAgIDxEZWxldGVcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIiBvbkNsaWNrPXtyZW5kZXJGYXZvcml0ZUljb259PlxuICAgICAgICAgIHtpc0xpa2VkID8gKFxuICAgICAgICAgICAgPEZhdm9yaXRlXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZhdm9yaXRlQm9yZGVyXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrQ2FyZDtcbiJdLCJuYW1lcyI6WyJBcnJvd0JhY2tJb3NOZXciLCJBcnJvd0ZvcndhcmRJb3MiLCJEZWxldGUiLCJGYXZvcml0ZSIsIkZhdm9yaXRlQm9yZGVyIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiV29ya0NhcmQiLCJ3b3JrIiwic2Vzc2lvbiIsIl9pZCIsInRpdGxlIiwid29ya1Bob3RvUGF0aHMiLCJjcmVhdG9yIiwiY2F0ZWdvcnkiLCJwcmljZSIsImRhdGEiLCJ1cGRhdGUiLCJ1c2VySWQiLCJ1c2VyIiwiaXNVc2VyQ3JlYXRvciIsIndpc2hsaXN0IiwiaXNMaWtlZCIsImZpbmQiLCJpdGVtIiwiaGFuZGxlRGVsZXRlIiwiaGFzQ29uZmlybWVkIiwiY29uZmlybSIsImZldGNoIiwibWV0aG9kIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicGF0Y2hXaXNobGlzdCIsInJlc3BvbnNlIiwianNvbiIsInJlbmRlckRlbGV0ZUljb24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVuZGVyRmF2b3JpdGVJY29uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInJvdXRlciIsInB1c2giLCJzdHlsZSIsInRyYW5zZm9ybSIsImN1cnJlbnRJbmRleCIsIm1hcCIsInBob3RvIiwiaW5kZXgiLCJzeCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJmb250U2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WorkCard.jsx\n"));

/***/ })

});