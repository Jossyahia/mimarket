"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_Desktop_mimarket_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_Desktop_mimarket_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q0Rlc2t0b3AlNUNtaW1hcmtldCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSFAlNUNEZXNrdG9wJTVDbWltYXJrZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvP2U3ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxtaW1hcmtldFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXG1pbWFya2V0XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _mongodb_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mongodb/database */ \"(rsc)/./mongodb/database.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_0__.connectToDB)();\n                /* Check if the user exists */ const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                /* Compare password */ const isMatch = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                return user;\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session }) {\n            const sessionUser = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            session.user = {\n                ...session.user,\n                ...sessionUser._doc\n            };\n            return session;\n        },\n        async signIn ({ account, profile }) {\n            if (account.provider === \"google\") {\n                try {\n                    await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_0__.connectToDB)();\n                    /* Check is the user exist */ let user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        email: profile.email\n                    });\n                    if (!user) {\n                        user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n                            email: profile.email,\n                            username: profile.name,\n                            profileImagePath: profile.picture,\n                            wishlist: [],\n                            cart: [],\n                            order: [],\n                            work: []\n                        });\n                    }\n                    return user;\n                } catch (err) {\n                    console.log(\"Error checking if user exists: \", err.message);\n                }\n            }\n            return true;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2Y7QUFDdUI7QUFDVTtBQUVsQztBQUNHO0FBRW5DLE1BQU1NLFVBQVVMLGdEQUFRQSxDQUFDO0lBQ3ZCTSxXQUFXO1FBQ1RMLHNFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsZUFBZTtnQkFDYkMsUUFBUTtvQkFDTkMsUUFBUTtvQkFDUkMsYUFBYTtvQkFDYkMsZUFBZTtnQkFDakI7WUFDRjtRQUNGO1FBQ0FmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLE1BQU07WUFDTixNQUFNQyxXQUFVQyxXQUFXLEVBQUVDLEdBQUc7Z0JBQzlCLE1BQU10Qiw4REFBV0E7Z0JBRWpCLDRCQUE0QixHQUM1QixNQUFNdUIsT0FBTyxNQUFNbkIsb0RBQUlBLENBQUNvQixPQUFPLENBQUM7b0JBQUVDLE9BQU9KLFlBQVlJLEtBQUs7Z0JBQUM7Z0JBRTNELElBQUksQ0FBQ0YsTUFBTTtvQkFDVCxNQUFNLElBQUlHLE1BQU07Z0JBQ2xCO2dCQUVBLG9CQUFvQixHQUNwQixNQUFNQyxVQUFVLE1BQU10QixpREFBT0EsQ0FBQ2dCLFlBQVlPLFFBQVEsRUFBRUwsS0FBS0ssUUFBUTtnQkFFakUsSUFBSSxDQUFDRCxTQUFTO29CQUNaLE1BQU0sSUFBSUQsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0g7WUFDVDtRQUNGO0tBQ0Q7SUFFRE0sUUFBUXBCLFFBQVFDLEdBQUcsQ0FBQ29CLGVBQWU7SUFFbkNDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2QixNQUFNQyxjQUFjLE1BQU03QixvREFBSUEsQ0FBQ29CLE9BQU8sQ0FBQztnQkFBRUMsT0FBT08sUUFBUVQsSUFBSSxDQUFDRSxLQUFLO1lBQUM7WUFDbkVPLFFBQVFULElBQUksQ0FBQ1csRUFBRSxHQUFHRCxZQUFZRSxHQUFHLENBQUNDLFFBQVE7WUFFMUNKLFFBQVFULElBQUksR0FBRztnQkFBRSxHQUFHUyxRQUFRVCxJQUFJO2dCQUFFLEdBQUdVLFlBQVlJLElBQUk7WUFBQztZQUV0RCxPQUFPTDtRQUNUO1FBRUEsTUFBTU0sUUFBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUMvQixJQUFJRCxRQUFRRSxRQUFRLEtBQUssVUFBVTtnQkFDakMsSUFBSTtvQkFDRixNQUFNekMsOERBQVdBO29CQUVqQiwyQkFBMkIsR0FDM0IsSUFBSXVCLE9BQU8sTUFBTW5CLG9EQUFJQSxDQUFDb0IsT0FBTyxDQUFDO3dCQUFFQyxPQUFPZSxRQUFRZixLQUFLO29CQUFDO29CQUVyRCxJQUFJLENBQUNGLE1BQU07d0JBQ1RBLE9BQU8sTUFBTW5CLG9EQUFJQSxDQUFDc0MsTUFBTSxDQUFDOzRCQUN2QmpCLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCa0IsVUFBVUgsUUFBUXJCLElBQUk7NEJBQ3RCeUIsa0JBQWtCSixRQUFRSyxPQUFPOzRCQUNqQ0MsVUFBVSxFQUFFOzRCQUNaQyxNQUFNLEVBQUU7NEJBQ1JDLE9BQU8sRUFBRTs0QkFDVEMsTUFBTSxFQUFFO3dCQUNWO29CQUNGO29CQUVBLE9BQU8xQjtnQkFDVCxFQUFFLE9BQU8yQixLQUFLO29CQUNaQyxRQUFRQyxHQUFHLENBQUMsbUNBQW1DRixJQUFJRyxPQUFPO2dCQUM1RDtZQUNGO1lBRUEsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvREIgfSBmcm9tIFwiQG1vbmdvZGIvZGF0YWJhc2VcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcblxuICAgICAgICAvKiBDaGVjayBpZiB0aGUgdXNlciBleGlzdHMgKi9cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEVtYWlsIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQ29tcGFyZSBwYXNzd29yZCAqL1xuICAgICAgICBjb25zdCBpc01hdGNoID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcblxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcblxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiB9KSB7XG4gICAgICBjb25zdCBzZXNzaW9uVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSBzZXNzaW9uVXNlci5faWQudG9TdHJpbmcoKTtcblxuICAgICAgc2Vzc2lvbi51c2VyID0geyAuLi5zZXNzaW9uLnVzZXIsIC4uLnNlc3Npb25Vc2VyLl9kb2MgfVxuICAgICAgICAgICAgXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuXG4gICAgYXN5bmMgc2lnbkluKHsgYWNjb3VudCwgcHJvZmlsZSB9KSB7XG4gICAgICBpZiAoYWNjb3VudC5wcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG5cbiAgICAgICAgICAvKiBDaGVjayBpcyB0aGUgdXNlciBleGlzdCAqL1xuICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XG5cbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgICAgICB1c2VybmFtZTogcHJvZmlsZS5uYW1lLFxuICAgICAgICAgICAgICBwcm9maWxlSW1hZ2VQYXRoOiBwcm9maWxlLnBpY3R1cmUsXG4gICAgICAgICAgICAgIHdpc2hsaXN0OiBbXSxcbiAgICAgICAgICAgICAgY2FydDogW10sXG4gICAgICAgICAgICAgIG9yZGVyOiBbXSxcbiAgICAgICAgICAgICAgd29yazogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjaGVja2luZyBpZiB1c2VyIGV4aXN0czogXCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RCIiwiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJVc2VyIiwiY29tcGFyZSIsImhhbmRsZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiaXNNYXRjaCIsInBhc3N3b3JkIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInNlc3Npb25Vc2VyIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsIl9kb2MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsInByb3ZpZGVyIiwiY3JlYXRlIiwidXNlcm5hbWUiLCJwcm9maWxlSW1hZ2VQYXRoIiwicGljdHVyZSIsIndpc2hsaXN0IiwiY2FydCIsIm9yZGVyIiwid29yayIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"Username already exists\"\n        ],\n        required: [\n            true,\n            \"Username is required\"\n        ]\n    },\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    password: {\n        type: String\n    },\n    profileImagePath: {\n        type: String,\n        required: [\n            true,\n            \"Profile image is required\"\n        ]\n    },\n    wishlist: {\n        type: Array,\n        default: []\n    },\n    cart: {\n        type: Array,\n        default: []\n    },\n    orders: {\n        type: Array,\n        default: []\n    },\n    works: {\n        type: Array,\n        default: []\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUM1QkksVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUEwQjtRQUN6Q0MsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7SUFDQUMsT0FBTztRQUNMSixNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF1QjtRQUN0Q0MsVUFBVTtZQUFDO1lBQU07U0FBb0I7SUFDdkM7SUFDQUUsVUFBVTtRQUNSTCxNQUFNQztJQUNSO0lBQ0FLLGtCQUFrQjtRQUNoQk4sTUFBTUM7UUFDTkUsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUksVUFBVTtRQUNSUCxNQUFNUTtRQUNOQyxTQUFTLEVBQUU7SUFDYjtJQUNBQyxNQUFNO1FBQ0pWLE1BQU1RO1FBQ05DLFNBQVMsRUFBRTtJQUNiO0lBQ0FFLFFBQVE7UUFDTlgsTUFBTVE7UUFDTkMsU0FBUyxFQUFFO0lBQ2I7SUFDQUcsT0FBTztRQUNMWixNQUFNUTtRQUNOQyxTQUFTLEVBQUU7SUFDYjtBQUNGO0FBRUEsTUFBTUksT0FBT2hCLDRDQUFNQSxDQUFDZ0IsSUFBSSxJQUFJakIsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVlLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiBbdHJ1ZSwgXCJVc2VybmFtZSBhbHJlYWR5IGV4aXN0c1wiXSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIl0sXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHVuaXF1ZTogW3RydWUsIFwiRW1haWwgYWxyZWFkeSBleGlzdHNcIl0sXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgcHJvZmlsZUltYWdlUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUHJvZmlsZSBpbWFnZSBpcyByZXF1aXJlZFwiXSxcbiAgfSxcbiAgd2lzaGxpc3Q6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiBbXSxcbiAgfSxcbiAgY2FydDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6IFtdLFxuICB9LFxuICBvcmRlcnM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiBbXSxcbiAgfSxcbiAgd29ya3M6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiBbXSxcbiAgfVxufSlcblxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGVJbWFnZVBhdGgiLCJ3aXNobGlzdCIsIkFycmF5IiwiZGVmYXVsdCIsImNhcnQiLCJvcmRlcnMiLCJ3b3JrcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/database.js":
/*!*****************************!*\
  !*** ./mongodb/database.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // Track the connection\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    try {\n        if (isConnected) {\n            console.log(\"MongoDB is already connected!\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO);\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (err) {\n        isConnected = false;\n        console.error(\"MongoDB connection error:\", err.message);\n        throw new Error(\"MongoDB connection error\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2RhdGFiYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjLE9BQU8sdUJBQXVCO0FBRXpDLE1BQU1DLGNBQWM7SUFDekJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJO1FBQ0YsSUFBSUMsYUFBYTtZQUNmRyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBRUEsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUV4Q1IsY0FBYztRQUVkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9LLEtBQUs7UUFDWlQsY0FBYztRQUNkRyxRQUFRTyxLQUFLLENBQUMsNkJBQTZCRCxJQUFJRSxPQUFPO1FBQ3RELE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvLi9tb25nb2RiL2RhdGFiYXNlLmpzP2Y2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTsgLy8gVHJhY2sgdGhlIGNvbm5lY3Rpb25cblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xuICBtb25nb29zZS5zZXQoXCJzdHJpY3RRdWVyeVwiLCB0cnVlKTtcblxuICB0cnkge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGVkIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPKTtcblxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0ZWRcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgY29uc29sZS5lcnJvcihcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvclwiKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HTyIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();