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
exports.id = "app/api/work/[id]/route";
exports.ids = ["app/api/work/[id]/route"];
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

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwork%2F%5Bid%5D%2Froute&page=%2Fapi%2Fwork%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwork%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwork%2F%5Bid%5D%2Froute&page=%2Fapi%2Fwork%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwork%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_Desktop_mimarket_app_api_work_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/work/[id]/route.js */ \"(rsc)/./app/api/work/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/work/[id]/route\",\n        pathname: \"/api/work/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/work/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\Desktop\\\\mimarket\\\\app\\\\api\\\\work\\\\[id]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_Desktop_mimarket_app_api_work_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/work/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3b3JrJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRndvcmslMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRndvcmslMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q0Rlc2t0b3AlNUNtaW1hcmtldCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDSFAlNUNEZXNrdG9wJTVDbWltYXJrZXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvP2U5NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxtaW1hcmtldFxcXFxhcHBcXFxcYXBpXFxcXHdvcmtcXFxcW2lkXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd29yay9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvd29yay9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93b3JrL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXG1pbWFya2V0XFxcXGFwcFxcXFxhcGlcXFxcd29ya1xcXFxbaWRdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3dvcmsvW2lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwork%2F%5Bid%5D%2Froute&page=%2Fapi%2Fwork%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwork%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/work/[id]/route.js":
/*!************************************!*\
  !*** ./app/api/work/[id]/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var _models_Work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Work */ \"(rsc)/./models/Work.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mongodb_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mongodb/database */ \"(rsc)/./mongodb/database.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ \"(rsc)/./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst GET = async (req, { params })=>{\n    try {\n        await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        const work = await _models_Work__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(params.id).populate(\"creator\");\n        if (!work) return new Response(\"The Work Not Found\", {\n            status: 404\n        });\n        return new Response(JSON.stringify(work), {\n            status: 200\n        });\n    } catch (err) {\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n};\nconst PATCH = async (req, { params })=>{\n    try {\n        await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        const data = await req.formData();\n        // Create Supabase client\n        const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(\"https://frsmcjzgunhzcsxffmyj.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyc21janpndW5oemNzeGZmbXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNTYwMjIsImV4cCI6MjAxNzgzMjAyMn0.7E5qeYynBjG6npduH8eUtm2rUuSnfOOdNbZnV9AHRJw\");\n        /* Extract info from the data */ const creator = data.get(\"creator\");\n        const category = data.get(\"category\");\n        const title = data.get(\"title\");\n        const description = data.get(\"description\");\n        const price = data.get(\"price\");\n        /* Get an array of uploaded photos */ const photos = data.getAll(\"workPhotoPaths\");\n        const bucket = \"fastfastfood\";\n        const workPhotoPaths = [];\n        /* Process and store each photo  */ for (const photo of photos){\n            if (photo instanceof Object) {\n                const ext = photo.name.split(\".\").pop();\n                const newphotosName = uniqid__WEBPACK_IMPORTED_MODULE_3___default()() + \".\" + ext;\n                // Read the photo as an ArrayBuffer\n                const bytes = await photo.arrayBuffer();\n                // Convert it to a Buffer\n                const buffer = Buffer.from(bytes);\n                // Define the destination path for the uploaded file\n                const workImagePath = `${newphotosName}`;\n                // Upload the buffer to Supabase Storage\n                const { data: uploadResult, error } = await supabase.storage.from(bucket) // Replace with your Supabase storage bucket name\n                .upload(workImagePath, buffer, {\n                    contentType: photo.type,\n                    upsert: true\n                });\n                if (error) {\n                    console.error(error);\n                    return new Response(\"Error updating the Work\", {\n                        status: 500\n                    });\n                }\n                // Store the file path in an array\n                workPhotoPaths.push(uploadResult.Key);\n                console.log(\"updated\");\n            } else {\n                // If it's an old photo\n                workPhotoPaths.push(photo);\n                console.log(photo);\n            }\n        }\n        /* Find the existing Work */ const existingWork = await _models_Work__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(params.id);\n        if (!existingWork) {\n            return new Response(\"The Work Not Found\", {\n                status: 404\n            });\n        }\n        /* Update the Work with the new data */ existingWork.category = category;\n        existingWork.title = title;\n        existingWork.description = description;\n        existingWork.price = price;\n        existingWork.workPhotoPaths = workPhotoPaths;\n        await existingWork.save();\n        return new Response(\"Successfully updated the Work\", {\n            status: 200\n        });\n    } catch (err) {\n        console.error(err);\n        return new Response(\"Error updating the Work\", {\n            status: 500\n        });\n    }\n};\nconst DELETE = async (req, { params })=>{\n    try {\n        await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();\n        await _models_Work__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(params.id);\n        return new Response(\"Successfully deleted the Work\", {\n            status: 200\n        });\n    } catch (err) {\n        console.log(err);\n        return new Response(\"Error deleting the Work\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRUMsUUFBUTtZQUFJO1FBQzFEO1FBRUEscUNBQXFDLEdBQ3JDOEMsYUFBYWhDLFFBQVEsR0FBR0E7UUFDeEJnQyxhQUFhL0IsS0FBSyxHQUFHQTtRQUNyQitCLGFBQWE5QixXQUFXLEdBQUdBO1FBQzNCOEIsYUFBYTdCLEtBQUssR0FBR0E7UUFDckI2QixhQUFhekIsY0FBYyxHQUFHQTtRQUU5QixNQUFNeUIsYUFBYUMsSUFBSTtRQUV2QixPQUFPLElBQUloRCxTQUFTLGlDQUFpQztZQUFFQyxRQUFRO1FBQUk7SUFDckUsRUFBRSxPQUFPRyxLQUFLO1FBQ1p1QyxRQUFRTixLQUFLLENBQUNqQztRQUNkLE9BQU8sSUFBSUosU0FBUywyQkFBMkI7WUFBRUMsUUFBUTtRQUFJO0lBQy9EO0FBQ0YsRUFBRTtBQUVLLE1BQU1nRCxTQUFTLE9BQU92RCxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUMxQyxJQUFJO1FBQ0YsTUFBTUwsOERBQVdBO1FBQ2pCLE1BQU1GLG9EQUFJQSxDQUFDOEQsaUJBQWlCLENBQUN2RCxPQUFPRyxFQUFFO1FBRXRDLE9BQU8sSUFBSUUsU0FBUyxpQ0FBaUM7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFLEVBQUUsT0FBT0csS0FBSztRQUNadUMsUUFBUUcsR0FBRyxDQUFDMUM7UUFDWixPQUFPLElBQUlKLFNBQVMsMkJBQTJCO1lBQUVDLFFBQVE7UUFBSTtJQUMvRDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvLi9hcHAvYXBpL3dvcmsvW2lkXS9yb3V0ZS5qcz9mYjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3JrIGZyb20gXCJAbW9kZWxzL1dvcmtcIjtcclxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkBtb25nb2RiL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcSwgeyBwYXJhbXMgfSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG5cclxuICAgIGNvbnN0IHdvcmsgPSBhd2FpdCBXb3JrLmZpbmRCeUlkKHBhcmFtcy5pZCkucG9wdWxhdGUoXCJjcmVhdG9yXCIpO1xyXG5cclxuICAgIGlmICghd29yaykgcmV0dXJuIG5ldyBSZXNwb25zZShcIlRoZSBXb3JrIE5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkod29yayksIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBVENIID0gYXN5bmMgKHJlcSwgeyBwYXJhbXMgfSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcclxuICAgIC8vIENyZWF0ZSBTdXBhYmFzZSBjbGllbnRcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxyXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwsXHJcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXHJcbiAgICApO1xyXG4gICAgLyogRXh0cmFjdCBpbmZvIGZyb20gdGhlIGRhdGEgKi9cclxuICAgIGNvbnN0IGNyZWF0b3IgPSBkYXRhLmdldChcImNyZWF0b3JcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRhdGEuZ2V0KFwiY2F0ZWdvcnlcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRhdGEuZ2V0KFwidGl0bGVcIik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCBwcmljZSA9IGRhdGEuZ2V0KFwicHJpY2VcIik7XHJcblxyXG4gICAgLyogR2V0IGFuIGFycmF5IG9mIHVwbG9hZGVkIHBob3RvcyAqL1xyXG4gICAgY29uc3QgcGhvdG9zID0gZGF0YS5nZXRBbGwoXCJ3b3JrUGhvdG9QYXRoc1wiKTtcclxuICAgIGNvbnN0IGJ1Y2tldCA9IFwiZmFzdGZhc3Rmb29kXCI7XHJcbiAgICBjb25zdCB3b3JrUGhvdG9QYXRocyA9IFtdO1xyXG5cclxuICAgIC8qIFByb2Nlc3MgYW5kIHN0b3JlIGVhY2ggcGhvdG8gICovXHJcbiAgICBmb3IgKGNvbnN0IHBob3RvIG9mIHBob3Rvcykge1xyXG4gICAgICBpZiAocGhvdG8gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICBjb25zdCBleHQgPSBwaG90by5uYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcclxuICAgICAgICBjb25zdCBuZXdwaG90b3NOYW1lID0gdW5pcWlkKCkgKyBcIi5cIiArIGV4dDtcclxuICAgICAgICAvLyBSZWFkIHRoZSBwaG90byBhcyBhbiBBcnJheUJ1ZmZlclxyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcGhvdG8uYXJyYXlCdWZmZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBpdCB0byBhIEJ1ZmZlclxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkZXN0aW5hdGlvbiBwYXRoIGZvciB0aGUgdXBsb2FkZWQgZmlsZVxyXG4gICAgICAgIGNvbnN0IHdvcmtJbWFnZVBhdGggPSBgJHtuZXdwaG90b3NOYW1lfWA7XHJcblxyXG4gICAgICAgIC8vIFVwbG9hZCB0aGUgYnVmZmVyIHRvIFN1cGFiYXNlIFN0b3JhZ2VcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVwbG9hZFJlc3VsdCwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAgIC5mcm9tKGJ1Y2tldCkgLy8gUmVwbGFjZSB3aXRoIHlvdXIgU3VwYWJhc2Ugc3RvcmFnZSBidWNrZXQgbmFtZVxyXG4gICAgICAgICAgLnVwbG9hZCh3b3JrSW1hZ2VQYXRoLCBidWZmZXIsIHtcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IHBob3RvLnR5cGUsXHJcbiAgICAgICAgICAgIHVwc2VydDogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVycm9yIHVwZGF0aW5nIHRoZSBXb3JrXCIsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgZmlsZSBwYXRoIGluIGFuIGFycmF5XHJcbiAgICAgICAgd29ya1Bob3RvUGF0aHMucHVzaCh1cGxvYWRSZXN1bHQuS2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgaXQncyBhbiBvbGQgcGhvdG9cclxuICAgICAgICB3b3JrUGhvdG9QYXRocy5wdXNoKHBob3RvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwaG90byk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGaW5kIHRoZSBleGlzdGluZyBXb3JrICovXHJcbiAgICBjb25zdCBleGlzdGluZ1dvcmsgPSBhd2FpdCBXb3JrLmZpbmRCeUlkKHBhcmFtcy5pZCk7XHJcblxyXG4gICAgaWYgKCFleGlzdGluZ1dvcmspIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIlRoZSBXb3JrIE5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFVwZGF0ZSB0aGUgV29yayB3aXRoIHRoZSBuZXcgZGF0YSAqL1xyXG4gICAgZXhpc3RpbmdXb3JrLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICBleGlzdGluZ1dvcmsudGl0bGUgPSB0aXRsZTtcclxuICAgIGV4aXN0aW5nV29yay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgZXhpc3RpbmdXb3JrLnByaWNlID0gcHJpY2U7XHJcbiAgICBleGlzdGluZ1dvcmsud29ya1Bob3RvUGF0aHMgPSB3b3JrUGhvdG9QYXRocztcclxuXHJcbiAgICBhd2FpdCBleGlzdGluZ1dvcmsuc2F2ZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJTdWNjZXNzZnVsbHkgdXBkYXRlZCB0aGUgV29ya1wiLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVycm9yIHVwZGF0aW5nIHRoZSBXb3JrXCIsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURSA9IGFzeW5jIChyZXEsIHsgcGFyYW1zIH0pID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvREIoKTtcclxuICAgIGF3YWl0IFdvcmsuZmluZEJ5SWRBbmREZWxldGUocGFyYW1zLmlkKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgdGhlIFdvcmtcIiwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRXJyb3IgZGVsZXRpbmcgdGhlIFdvcmtcIiwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJXb3JrIiwid3JpdGVGaWxlIiwiY29ubmVjdFRvREIiLCJjcmVhdGVDbGllbnQiLCJ1bmlxaWQiLCJHRVQiLCJyZXEiLCJwYXJhbXMiLCJ3b3JrIiwiZmluZEJ5SWQiLCJpZCIsInBvcHVsYXRlIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiUEFUQ0giLCJkYXRhIiwiZm9ybURhdGEiLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImNyZWF0b3IiLCJnZXQiLCJjYXRlZ29yeSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBob3RvcyIsImdldEFsbCIsImJ1Y2tldCIsIndvcmtQaG90b1BhdGhzIiwicGhvdG8iLCJPYmplY3QiLCJleHQiLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJuZXdwaG90b3NOYW1lIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJ3b3JrSW1hZ2VQYXRoIiwidXBsb2FkUmVzdWx0IiwiZXJyb3IiLCJzdG9yYWdlIiwidXBsb2FkIiwiY29udGVudFR5cGUiLCJ0eXBlIiwidXBzZXJ0IiwiY29uc29sZSIsInB1c2giLCJLZXkiLCJsb2ciLCJleGlzdGluZ1dvcmsiLCJzYXZlIiwiREVMRVRFIiwiZmluZEJ5SWRBbmREZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/work/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/Work.js":
/*!************************!*\
  !*** ./models/Work.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WorkSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    creator: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"User\"\n    },\n    category: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    price: {\n        type: Number\n    },\n    workPhotoPaths: [\n        {\n            type: String\n        }\n    ]\n});\nconst Work = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Work || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Work\", WorkSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Work);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvV29yay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUM1QkksU0FBUztRQUNQQyxNQUFNTCw0Q0FBTUEsQ0FBQ00sS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO0lBQ1A7SUFDQUMsVUFBVTtRQUNSSixNQUFNSztJQUNSO0lBQ0FDLE9BQU87UUFDTE4sTUFBTUs7SUFDUjtJQUNBRSxhQUFhO1FBQ1hQLE1BQU1LO0lBQ1I7SUFDQUcsT0FBTztRQUNMUixNQUFNUztJQUNSO0lBQ0FDLGdCQUFnQjtRQUFDO1lBQUNWLE1BQU1LO1FBQU07S0FBRTtBQUNsQztBQUVBLE1BQU1NLE9BQU9kLDRDQUFNQSxDQUFDYyxJQUFJLElBQUlmLCtDQUFLQSxDQUFDLFFBQVFFO0FBQzFDLGlFQUFlYSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0Ly4vbW9kZWxzL1dvcmsuanM/NGQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCBXb3JrU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNyZWF0b3I6IHtcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiBcIlVzZXJcIlxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICB0eXBlOiBOdW1iZXJcbiAgfSxcbiAgd29ya1Bob3RvUGF0aHM6IFt7dHlwZTogU3RyaW5nfV1cbn0pXG5cbmNvbnN0IFdvcmsgPSBtb2RlbHMuV29yayB8fCBtb2RlbChcIldvcmtcIiwgV29ya1NjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IFdvcmsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJXb3JrU2NoZW1hIiwiY3JlYXRvciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY2F0ZWdvcnkiLCJTdHJpbmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJ3b3JrUGhvdG9QYXRocyIsIldvcmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Work.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/database.js":
/*!*****************************!*\
  !*** ./mongodb/database.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // Track the connection\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    try {\n        if (isConnected) {\n            console.log(\"MongoDB is already connected!\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO);\n        isConnected = true;\n        console.log(\"MongoDB connected\");\n    } catch (err) {\n        isConnected = false;\n        console.error(\"MongoDB connection error:\", err.message);\n        throw new Error(\"MongoDB connection error\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2RhdGFiYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjLE9BQU8sdUJBQXVCO0FBRXpDLE1BQU1DLGNBQWM7SUFDekJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJO1FBQ0YsSUFBSUMsYUFBYTtZQUNmRyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBRUEsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUV4Q1IsY0FBYztRQUVkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9LLEtBQUs7UUFDWlQsY0FBYztRQUNkRyxRQUFRTyxLQUFLLENBQUMsNkJBQTZCRCxJQUFJRSxPQUFPO1FBQ3RELE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvLi9tb25nb2RiL2RhdGFiYXNlLmpzP2Y2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7IC8vIFRyYWNrIHRoZSBjb25uZWN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGVkIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR08pO1xyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvclwiKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HTyIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/uniqid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwork%2F%5Bid%5D%2Froute&page=%2Fapi%2Fwork%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwork%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDesktop%5Cmimarket&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();