"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AppContext */ \"./context/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { categories  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.appContext)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useEffectOnce)(()=>{\n        fPost();\n    });\n    const fPost = async ()=>{\n        const http = await fetch(\"/data/posts.json\");\n        const data = await http.json();\n        if (data.status == 200) {\n            setPosts(data.data);\n        }\n    };\n    const handleCategory = (slug)=>{\n        console.log(slug);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative hero h-600 flex items-center lg:px-36\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-6xl text-white font-bold\",\n                                children: \"Startup Framework. Suit Up Your Startup\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-2xl text-white leading-7\",\n                                children: \"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-16 flex items-center gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white h-12 px-6 rounded-full border border-white\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-primary font-semibold\",\n                                            children: \"Get Started\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-transparent h-12 px-6 rounded-full border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto lg:mx-56 lg:my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/3 mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-center text-3xl font-bold mb-5\",\n                                    children: \"Better Landing for Your Startup\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-400 text-center\",\n                                    children: \"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-center text-3xl font-bold\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 gap-5 mt-8\",\n                                children: categories && categories.map((_, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"category h-48 rounded-2xl overflow-hidden cursor-pointer\",\n                                        onClick: ()=>handleCategory(_.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex h-full items-center px-10\",\n                                            style: {\n                                                background: \"linear-gradient(359.72deg, rgba(72, 43, 231, 0.73) 0.25%, rgba(0, 0, 0, 0.23) 99.77%), url(\".concat(_.image, \")\")\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-3xl font-bold text-white\",\n                                                children: _.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 20\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"mx-auto lg:mx-56\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto lg:mx-56 lg:my-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gap-5 grid md:grid-cols-2 lg:grid-cols-3\",\n                    children: posts && posts.map((_, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-7 py-5 rounded-xl\",\n                                style: {\n                                    background: \"linear-gradient(180deg, rgba(47, 24, 147, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%), url(\".concat(_.images[0], \")\")\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-12 h-12 rounded-full overflow-hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _.user.photo,\n                                            width: 0,\n                                            height: 0,\n                                            className: \"w-full h-full object-cover\",\n                                            alt: \"user\",\n                                            unoptimized: true\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-white text-2xl leading-7 font-bold\",\n                                                children: _.title\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm text-white mt-3\",\n                                                children: _.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ZAy2Q/S3GrrzLyBrTK1n1ftCjQA=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useEffectOnce\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUlSO0dBdkZ3QnhCOztRQUl0QkQsc0RBQWFBOzs7S0FKU0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBhcHBDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0T25jZSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7Y2F0ZWdvcmllc30gPSBhcHBDb250ZXh0KCk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8YW55PihudWxsKTtcblxuICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBmUG9zdCgpO1xuICB9KTtcblxuICBjb25zdCBmUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBodHRwID0gYXdhaXQgZmV0Y2goXCIvZGF0YS9wb3N0cy5qc29uXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBodHRwLmpzb24oKTtcblxuICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIHNldFBvc3RzKGRhdGEuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnkgPSAoc2x1Zzogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2x1ZylcbiAgfVxuXG4gIHJldHVybiA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaGVybyBoLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBsZzpweC0zNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5TdGFydHVwIEZyYW1ld29yay4gU3VpdCBVcCBZb3VyIFN0YXJ0dXA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtMnhsIHRleHQtd2hpdGUgbGVhZGluZy03XCI+V2UgaGF2ZSBjcmVhdGVkIGEgbmV3IHByb2R1Y3QgdGhhdCB3aWxsIGhlbHAgZGVzaWduZXJzLCBkZXZlbG9wZXJzIGFuZCBjb21wYW5pZXMgY3JlYXRlIHdlYnNpdGVzIGZvciB0aGVpciBzdGFydHVwcyBxdWlja2x5IGFuZCBlYXNpbHkuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IGZsZXggaXRlbXMtY2VudGVyIGdhcC01XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTEyIHB4LTYgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+R2V0IFN0YXJ0ZWQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBoLTEyIHB4LTYgcm91bmRlZC1mdWxsIGJvcmRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkxlYXJuIE1vcmU8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi80XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIGxnOm14LTU2IGxnOm15LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBteC1hdXRvXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCBtYi01XCI+QmV0dGVyIExhbmRpbmcgZm9yIFlvdXIgU3RhcnR1cDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LWNlbnRlclwiPldlIGhhdmUgY3JlYXRlZCBhIG5ldyBwcm9kdWN0IHRoYXQgd2lsbCBoZWxwIGRlc2lnbmVycywgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzIGNyZWF0ZSB3ZWJzaXRlcyBmb3IgdGhlaXIgc3RhcnR1cHMgcXVpY2tseSBhbmQgZWFzaWx5LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTZcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZFwiPkNhdGVnb3JpZXM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgbXQtOFwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKChfOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjYXRlZ29yeSBoLTQ4IHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5KF8uc2x1Zyl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBweC0xMFwiIHN0eWxlPXt7YmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgzNTkuNzJkZWcsIHJnYmEoNzIsIDQzLCAyMzEsIDAuNzMpIDAuMjUlLCByZ2JhKDAsIDAsIDAsIDAuMjMpIDk5Ljc3JSksIHVybCgke18uaW1hZ2V9KWB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntfLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxociBjbGFzc05hbWU9XCJteC1hdXRvIGxnOm14LTU2XCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbGc6bXgtNTYgbGc6bXktMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTUgZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICB7cG9zdHMgJiYgcG9zdHMubWFwKChfOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC03IHB5LTUgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNDcsIDI0LCAxNDcsIDAuMDAwMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKSwgdXJsKCR7Xy5pbWFnZXNbMF19KWB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e18udXNlci5waG90b31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXswfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwidXNlclwiXG4gICAgICAgICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBsZWFkaW5nLTcgZm9udC1ib2xkXCI+e18udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgbXQtM1wiPntfLnN1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz4pXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPjtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImFwcENvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdE9uY2UiLCJIb21lIiwiY2F0ZWdvcmllcyIsInBvc3RzIiwic2V0UG9zdHMiLCJmUG9zdCIsImh0dHAiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiaGFuZGxlQ2F0ZWdvcnkiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsInNwYW4iLCJoMiIsImgzIiwibWFwIiwiXyIsImkiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW1hZ2UiLCJuYW1lIiwiaHIiLCJpbWFnZXMiLCJzcmMiLCJ1c2VyIiwicGhvdG8iLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVub3B0aW1pemVkIiwidGl0bGUiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});