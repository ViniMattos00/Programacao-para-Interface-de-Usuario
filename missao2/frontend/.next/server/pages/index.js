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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch('http://localhost:5000/');\n            if (!response.ok) {\n                throw new Error('Erro ao buscar dados');\n            }\n            const jsonData = await response.json();\n            setData(jsonData); // Atualiza o estado com o JSON retornado\n        } catch (err) {\n            setError(err.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Frontend Next.js is running!\"\n            }, void 0, false, {\n                fileName: \"/app/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchData,\n                children: \"Buscar Dados\"\n            }, void 0, false, {\n                fileName: \"/app/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Dados recebidos:\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(data, null, 2)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Ocorreu um erro:\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/app/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLElBQUk7SUFDckMsS0FBSyxNQUFFSSxLQUFLLE1BQUVDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxJQUFJO0lBRXZDLEtBQUssQ0FBQ00sU0FBUyxhQUFlLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUF3QjtZQUNyRCxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFzQjtZQUN4QyxDQUFDO1lBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDSixRQUFRLENBQUNLLElBQUk7WUFDcENULE9BQU8sQ0FBQ1EsUUFBUSxFQUFJLENBQXlDO1FBQy9ELENBQUMsQ0FBQyxLQUFLLEVBQUVFLEdBQUcsRUFBRSxDQUFDO1lBQ2JSLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDQyxPQUFPO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBNEI7Ozs7Ozt3RkFDL0JDLENBQU07Z0JBQUNDLE9BQU8sRUFBRVosU0FBUzswQkFBRSxDQUFZOzs7Ozs7WUFHdkNKLElBQUksZ0ZBQ0ZhLENBQUc7O2dHQUNESSxDQUFFO2tDQUFDLENBQWdCOzs7Ozs7Z0dBQ25CQyxDQUFHO2tDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3BCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O1lBSXJDRSxLQUFLLGdGQUNIVyxDQUFHOztnR0FDREksQ0FBRTtrQ0FBQyxDQUFnQjs7Ozs7O2dHQUNuQkksQ0FBQztrQ0FBRW5CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvIGFvIGJ1c2NhciBkYWRvcycpO1xuICAgICAgfVxuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXREYXRhKGpzb25EYXRhKTsgIC8vIEF0dWFsaXphIG8gZXN0YWRvIGNvbSBvIEpTT04gcmV0b3JuYWRvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Gcm9udGVuZCBOZXh0LmpzIGlzIHJ1bm5pbmchPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hEYXRhfT5CdXNjYXIgRGFkb3M8L2J1dHRvbj5cblxuICAgICAgey8qIE1vc3RyYXIgb3MgZGFkb3Mgb3UgdW0gZXJybywgY2FzbyBvY29ycmEgKi99XG4gICAgICB7ZGF0YSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPkRhZG9zIHJlY2ViaWRvczo8L2gyPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPk9jb3JyZXUgdW0gZXJybzo8L2gyPlxuICAgICAgICAgIDxwPntlcnJvcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb25EYXRhIiwianNvbiIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();