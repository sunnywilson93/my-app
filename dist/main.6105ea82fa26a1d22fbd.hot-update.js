webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es/reflect */ "./node_modules/core-js/es/reflect/index.js");
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable/reflect */ "./node_modules/core-js/stable/reflect/index.js");
/* harmony import */ var core_js_stable_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_features_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/features/reflect */ "./node_modules/core-js/features/reflect/index.js");
/* harmony import */ var core_js_features_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_reflect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/fesm2015/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var piral_ng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral-ng */ "./node_modules/piral-ng/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var feedUrl =  false ? undefined : 'http://localhost:9000/api/v1/pilet';
var instance = Object(piral__WEBPACK_IMPORTED_MODULE_6__["createInstance"])({
  state: {
    components: Object.assign({}, _layout__WEBPACK_IMPORTED_MODULE_8__["layout"]),
    errorComponents: Object.assign({}, _layout__WEBPACK_IMPORTED_MODULE_8__["errors"]),
    routes: {
      '/': piral__WEBPACK_IMPORTED_MODULE_6__["Dashboard"]
    }
  },
  plugins: [Object(piral_ng__WEBPACK_IMPORTED_MODULE_7__["createNgApi"])()].concat(_toConsumableArray(Object(piral__WEBPACK_IMPORTED_MODULE_6__["createStandardApi"])())),
  requestPilets: function requestPilets() {
    var result = fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
    var items = [{
      "name": "my-pilet-react",
      "version": "1.0.0",
      "link": "https://google.com",
      "requireRef": "wp4Chunkpr_mypiletreact",
      "integrity": "sha256-jAcIxZkNiXPbKuETJxUldJGuTJArzO2MJWw8JdLUYfw=",
      "dependencies": {},
      "spec": "v2"
    }, {
      "name": "my-angular-pillet",
      "version": "1.0.0",
      "link": "http://localhost:9000/files/my-angular-pillet/1.0.0/index.js",
      "requireRef": "wp4Chunkpr_myangularpillet",
      "integrity": "sha256-kOqIuGGav5+0jUxTKa2OThXOBZAsjxxrVAp/1opqEd8=",
      "dependencies": {},
      "spec": "v2"
    }];
    return result;
  }
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](piral__WEBPACK_IMPORTED_MODULE_6__["Piral"], {
  instance: instance
}), document.querySelector('#app'));

/***/ })

})
//# sourceMappingURL=main.6105ea82fa26a1d22fbd.hot-update.js.map