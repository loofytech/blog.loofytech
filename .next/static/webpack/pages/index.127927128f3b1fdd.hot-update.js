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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AppContext */ \"./context/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { categories  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.appContext)();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useEffectOnce)(()=>{\n        fPost();\n    });\n    const fPost = async ()=>{\n        const http = await fetch(\"/data/posts.json\");\n        const data = await http.json();\n        if (data.status == 200) {\n            setPosts(data.data);\n        }\n    };\n    const handleCategory = (slug)=>{\n        console.log(slug);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative hero h-600 flex items-center lg:px-36\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-6xl text-white font-bold\",\n                                children: \"Startup Framework. Suit Up Your Startup\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-2xl text-white leading-7\",\n                                children: \"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-16 flex items-center gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white h-12 px-6 rounded-full border border-white\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-primary font-semibold\",\n                                            children: \"Get Started\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-transparent h-12 px-6 rounded-full border\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white\",\n                                            children: \"Learn More\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto lg:mx-56 lg:my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/3 mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-center text-3xl font-bold mb-5\",\n                                    children: \"Better Landing for Your Startup\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-400 text-center\",\n                                    children: \"We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-center text-3xl font-bold\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 gap-5 mt-8\",\n                                children: categories && categories.map((_, i)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"category h-48 rounded-2xl overflow-hidden cursor-pointer\",\n                                        onClick: ()=>handleCategory(_.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex h-full items-center px-10\",\n                                            style: {\n                                                background: \"linear-gradient(359.72deg, rgba(72, 43, 231, 0.73) 0.25%, rgba(0, 0, 0, 0.23) 99.77%), url(\".concat(_.image, \")\")\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-3xl font-bold text-white\",\n                                                children: _.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 20\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"mx-auto lg:mx-56\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mx-auto lg:mx-56 lg:my-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gap-5 grid md:grid-cols-2 lg:grid-cols-3\",\n                    children: posts && posts.map((_, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-5 rounded-xl\",\n                            style: {\n                                background: \"linear-gradient(180deg, rgba(47, 24, 147, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%), url(\".concat(_.images[0], \")\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-7\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-12 h-12 rounded-full overflow-hidden\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: _.user.photo,\n                                                width: 0,\n                                                height: 0,\n                                                className: \"w-full h-full object-cover\",\n                                                alt: \"user\",\n                                                unoptimized: true\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-5\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-white text-2xl leading-7 font-bold\",\n                                                    children: _.title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-white mt-3\",\n                                                    children: _.subtitle\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-t border-gray-500\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: \"/images/love.svg\",\n                                                width: 48,\n                                                height: 48,\n                                                alt: \"like\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-white font-bold\",\n                                                children: _.like\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\blog.loofytech\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ZAy2Q/S3GrrzLyBrTK1n1ftCjQA=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_4__.useEffectOnce\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDMUI7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ25CLG1EQUFLQTtnREFBQ29DLEtBQUs7Z0RBQW9CRyxPQUFPO2dEQUFJQyxRQUFRO2dEQUFJQyxLQUFJOzs7Ozs7MERBQzNELDhEQUFDbEI7Z0RBQUtKLFdBQVU7MERBQXdCUSxFQUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFyQjlCakI7Ozs7O29CQXlCcEI7Ozs7Ozs7Ozs7Ozs7QUFJUjtHQTFGd0J4Qjs7UUFJdEJELHNEQUFhQTs7O0tBSlNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgYXBwQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdE9uY2UgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qge2NhdGVnb3JpZXN9ID0gYXBwQ29udGV4dCgpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgZlBvc3QoKTtcbiAgfSk7XG5cbiAgY29uc3QgZlBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaHR0cCA9IGF3YWl0IGZldGNoKFwiL2RhdGEvcG9zdHMuanNvblwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgaHR0cC5qc29uKCk7XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBzZXRQb3N0cyhkYXRhLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5ID0gKHNsdWc6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNsdWcpXG4gIH1cblxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGhlcm8gaC02MDAgZmxleCBpdGVtcy1jZW50ZXIgbGc6cHgtMzZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+U3RhcnR1cCBGcmFtZXdvcmsuIFN1aXQgVXAgWW91ciBTdGFydHVwPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIGxlYWRpbmctN1wiPldlIGhhdmUgY3JlYXRlZCBhIG5ldyBwcm9kdWN0IHRoYXQgd2lsbCBoZWxwIGRlc2lnbmVycywgZGV2ZWxvcGVycyBhbmQgY29tcGFuaWVzIGNyZWF0ZSB3ZWJzaXRlcyBmb3IgdGhlaXIgc3RhcnR1cHMgcXVpY2tseSBhbmQgZWFzaWx5LjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgaC0xMiBweC02IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiPkdldCBTdGFydGVkPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgaC0xMiBweC02IHJvdW5kZWQtZnVsbCBib3JkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5MZWFybiBNb3JlPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBsZzpteC01NiBsZzpteS0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGQgbWItNVwiPkJldHRlciBMYW5kaW5nIGZvciBZb3VyIFN0YXJ0dXA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1jZW50ZXJcIj5XZSBoYXZlIGNyZWF0ZWQgYSBuZXcgcHJvZHVjdCB0aGF0IHdpbGwgaGVscCBkZXNpZ25lcnMsIGRldmVsb3BlcnMgYW5kIGNvbXBhbmllcyBjcmVhdGUgd2Vic2l0ZXMgZm9yIHRoZWlyIHN0YXJ0dXBzIHF1aWNrbHkgYW5kIGVhc2lseS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGRcIj5DYXRlZ29yaWVzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IG10LThcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLm1hcCgoXzogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2F0ZWdvcnkgaC00OCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeShfLnNsdWcpfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIgcHgtMTBcIiBzdHlsZT17e2JhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMzU5LjcyZGVnLCByZ2JhKDcyLCA0MywgMjMxLCAwLjczKSAwLjI1JSwgcmdiYSgwLCAwLCAwLCAwLjIzKSA5OS43NyUpLCB1cmwoJHtfLmltYWdlfSlgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57Xy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aHIgY2xhc3NOYW1lPVwibXgtYXV0byBsZzpteC01NlwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIGxnOm14LTU2IGxnOm15LTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC01IGdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcCgoXzogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJweS01IHJvdW5kZWQteGxcIiBzdHlsZT17e2JhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDQ3LCAyNCwgMTQ3LCAwLjAwMDEpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSksIHVybCgke18uaW1hZ2VzWzBdfSlgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtfLnVzZXIucGhvdG99XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgbGVhZGluZy03IGZvbnQtYm9sZFwiPntfLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIG10LTNcIj57Xy5zdWJ0aXRsZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ncmF5LTUwMFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1hZ2VzL2xvdmUuc3ZnXCJ9IHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gYWx0PVwibGlrZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj57Xy5saWtlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPjtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImFwcENvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdE9uY2UiLCJIb21lIiwiY2F0ZWdvcmllcyIsInBvc3RzIiwic2V0UG9zdHMiLCJmUG9zdCIsImh0dHAiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiaGFuZGxlQ2F0ZWdvcnkiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImJ1dHRvbiIsInNwYW4iLCJoMiIsImgzIiwibWFwIiwiXyIsImkiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW1hZ2UiLCJuYW1lIiwiaHIiLCJpbWFnZXMiLCJzcmMiLCJ1c2VyIiwicGhvdG8iLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVub3B0aW1pemVkIiwidGl0bGUiLCJzdWJ0aXRsZSIsImxpa2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});