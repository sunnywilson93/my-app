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
/* harmony import */ var piral_pwa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-pwa */ "./node_modules/piral-pwa/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var piral_ng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral-ng */ "./node_modules/piral-ng/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var react_pwa_install__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-pwa-install */ "./node_modules/react-pwa-install/es/index.js");
/* harmony import */ var _assets_download_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/download.png */ "./src/assets/download.png");
/* harmony import */ var _assets_download_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_download_png__WEBPACK_IMPORTED_MODULE_11__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var feedUrl =  false ? undefined : 'http://localhost:9000/api/v1/pilet';
var instance = Object(piral__WEBPACK_IMPORTED_MODULE_7__["createInstance"])({
  state: {
    components: Object.assign({}, _layout__WEBPACK_IMPORTED_MODULE_9__["layout"]),
    errorComponents: Object.assign({}, _layout__WEBPACK_IMPORTED_MODULE_9__["errors"]),
    routes: {
      '/': piral__WEBPACK_IMPORTED_MODULE_7__["Dashboard"]
    }
  },
  plugins: [Object(piral_ng__WEBPACK_IMPORTED_MODULE_8__["createNgApi"])()].concat(_toConsumableArray(Object(piral__WEBPACK_IMPORTED_MODULE_7__["createStandardApi"])()), [Object(piral_pwa__WEBPACK_IMPORTED_MODULE_4__["createPwaApi"])()]),
  requestPilets: function requestPilets() {
    var result = fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
    return result;
  }
});

var App = function App() {
  var _useReactPWAInstall = Object(react_pwa_install__WEBPACK_IMPORTED_MODULE_10__["useReactPWAInstall"])(),
      pwaInstall = _useReactPWAInstall.pwaInstall,
      supported = _useReactPWAInstall.supported,
      isInstalled = _useReactPWAInstall.isInstalled;

  var handleClick = function handleClick() {
    pwaInstall({
      title: 'Install Web App',
      logo: _assets_download_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      features: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, "Cool feature 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, "Cool feature 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, "Even cooler feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", null, "Works offline")),
      description: 'This is a very good app that does a lot of useful stuff. '
    }).then(function () {
      return alert('App installed successfully or instructions for install shown');
    })["catch"](function () {
      return alert('User opted out from installing');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, supported() && !isInstalled() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
    type: 'button',
    onClick: handleClick
  }, "Install App")
  /* )} */
  );
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_pwa_install__WEBPACK_IMPORTED_MODULE_10__["default"], {
  enableLogging: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](App, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](piral__WEBPACK_IMPORTED_MODULE_7__["Piral"], {
  instance: instance
})), document.querySelector('#app'));

/***/ })

})
//# sourceMappingURL=main.2fbf0d64b7c83036bcc9.hot-update.js.map