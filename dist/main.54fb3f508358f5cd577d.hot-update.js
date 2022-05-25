webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");


 // change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample';
Object(piral__WEBPACK_IMPORTED_MODULE_1__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_2__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_2__["errors"],
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log({
        res: res
      });
      return [{
        name: 'mario6-sample-pilet',
        version: '1.2.0',
        description: 'A sample pilet for playing Mario5.',
        author: {
          name: '',
          email: ''
        },
        requireRef: 'pr_93e526457f367ddacf7e5f409332fda',
        link: 'traders.ninjacart.in',
        spec: 'v1'
      }];
    });
  }
});

/***/ })

})
//# sourceMappingURL=main.54fb3f508358f5cd577d.hot-update.js.map