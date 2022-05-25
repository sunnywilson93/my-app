webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@dbeining/react-atom/dist/react-atom.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dbeining/react-atom/dist/react-atom.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=__webpack_require__(/*! @libre/atom */ "./node_modules/@libre/atom/dist/index.esm.js")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(0));var r=o(2);t.initialize=r.initialize,t.useAtom=r.useAtom},function(e,t,o){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=o(3),u=r(o(4)),a=o(5),l=0,c=0;function s(e){var t=e.useLayoutEffect,o=e.useMemo,r=e.useState;return l+=1,{Atom:n.Atom,addChangeHandler:n.addChangeHandler,deref:n.deref,getValidator:n.getValidator,removeChangeHandler:n.removeChangeHandler,set:n.set,setValidator:n.setValidator,swap:n.swap,useAtom:function(e,i){var l;if(!(e instanceof n.Atom)){var s=JSON.stringify(e,null,"  ");throw TypeError(u.calledUseAtomWithNonAtom+"\n"+s)}var f,d=(i||{select:null}).select,m=n.deref(e),p=d||function(e){return e};try{p=o((function(){return a.memoLast(p)}),[d]),l=r({}),f=l[1]}catch(e){throw new TypeError(u.calledUseAtomOutsideFunctionComponent)}return t((function(){var t=f["@@react-atom/hook_id"]?f["@@react-atom/hook_id"]:"hook#"+ ++c;return f["@@react-atom/hook_id"]=t,n.addChangeHandler(e,f["@@react-atom/hook_id"],(function(e){var t=e.previous,o=e.current;a.isShallowEqual(p(t),p(o))||f({})})),function(){n.removeChangeHandler(e,f["@@react-atom/hook_id"])}}),[f,d]),p(m)}}}t.initialize=s,t.useAtom=function(e,t){if(l>1)throw Error(u.multipleInstantiations);var o=(t||{select:null}).select;return o?f(e,{select:o}):f(e)};var f=s({useLayoutEffect:i.useLayoutEffect,useMemo:i.useMemo,useState:i.useState}).useAtom},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calledUseAtomOutsideFunctionComponent="useAtom can only be called inside the body of a function component",t.calledUseAtomWithNonAtom="useAtom only accepts `react-atom` Atoms, but got:",t.calledDerefWithNonAtom="deref only accepts `react-atom` Atoms, but got:",t.multipleInstantiations="Multiple instances of react-atom have been detected, which will lead to unexpected bugs in the useAtom custom hook. This usually means react-atom has been initialized with `initialize(hooks)` in addition to importing the default Atom, useAtom, etc. directly. To avoid this error, only use the implementation returned from `initialize`."},function(e,t,o){"use strict";function r(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function n(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}Object.defineProperty(t,"__esModule",{value:!0}),t.isPOJO=n,t.isShallowEqual=function(e,t){if([e,t].every(n)||[e,t].every(Array.isArray)){if(r(e,t))return!0;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var o in e)if(!r(e[o],t[o]))return!1;return!0}return r(e,t)},t.memoLast=function(e){var t,o;return function(n){return r(t,n)||(t=n,o=e(n)),o}}}])}));
//# sourceMappingURL=react-atom.js.map

/***/ }),

/***/ "./node_modules/@libre/atom/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@libre/atom/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: addChangeHandler, removeChangeHandler, Atom, deref, getValidator, set, setValidator, swap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChangeHandler", function() { return addChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChangeHandler", function() { return removeChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deref", function() { return deref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidator", function() { return getValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValidator", function() { return setValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
var nextAtomUid = 0;
var stateByAtomId = Object.create(null);
var validatorByAtomId = Object.create(null);
var changeHandlersByAtomId = {};
/** @ignore */
function _useNextAtomId() {
    return nextAtomUid++;
}
/** @ignore */
function _getState(atom) {
    return stateByAtomId[atom["$$id"]];
}
/** @ignore */
function _setState(atom, state) {
    stateByAtomId[atom["$$id"]] = state;
}
/** @ignore */
function _getValidator(atom) {
    return validatorByAtomId[atom["$$id"]];
}
/** @ignore */
function _setValidator(atom, validator) {
    validatorByAtomId[atom["$$id"]] = validator;
}
/** @ignore */
function _initChangeHandlerDict(atom) {
    changeHandlersByAtomId[atom["$$id"]] = {};
}
/** @ignore */
function _addChangeHandler(atom, key, handler) {
    if (typeof changeHandlersByAtomId[atom["$$id"]][key] === "function") {
        throw new Error("Change handler already registered for key \"" + key + "\" on " + atom + ".\nRemove the existing handler before registering a new one.");
    }
    changeHandlersByAtomId[atom["$$id"]][key] = handler;
}
/** @ignore */
function _removeChangeHandler(atom, key) {
    delete changeHandlersByAtomId[atom["$$id"]][key];
}
/** @ignore */
function _runChangeHandlers(atom, previous, current) {
    Object.keys(changeHandlersByAtomId[atom["$$id"]]).forEach(function (k) {
        if (typeof changeHandlersByAtomId[atom["$$id"]][k] === "function") {
            changeHandlersByAtomId[atom["$$id"]][k]({ previous: previous, current: current });
        }
    });
}

/**
 * Registers a function to be run each time the state of `atom` changes.
 *
 * Will throw an Error if `key` is already taken by another handler.
 *
 * @example
```js

import {Atom, addChangeHandler, swap} from '@libre/atom'

const countAtom = Atom.of({ count: 0 })

addChangeHandler(countAtom, "log", ({current, previous}) => {
  console.log(previous, current)
})

swap(countAtom, (state) => ({ count: state.count + 1 }))


// stdout logs:
// { count: 0 }
// { count: 1 }

```
 */
function addChangeHandler(atom, key, handler) {
    _addChangeHandler(atom, key, handler);
}
/**
 * Deletes the `key` and the handler associated with `key` so that it not longer runs
 * when the state of `atom` changes.
 *
 * @example
```js

import {Atom, addChangeHandler, removeChangeHandler, swap} from '@libre/atom'

const countAtom = Atom.of({ count: 0 })

addChangeHandler(countAtom, "log", ({current, previous}) => {
  console.log(previous, current)
})

swap(countAtom, (state) => ({ count: state.count + 1 }))

// stdout logs:
// { count: 0 }
// { count: 1 }

removeChangeHandler(atom, "log")

swap(countAtom, (state) => ({ count: state.count + 1 }))

// nothing is logged
```
 */
function removeChangeHandler(atom, key) {
    _removeChangeHandler(atom, key);
}

/** @ignore */
function prettyPrint(val) {
    return JSON.stringify(val, null, "  ");
}

/**
 * A data structure useful for providing a controlled, predictable mechanism for mutability.
 * Allows multiple components of a program to share read/write access to some state in such
 * a way that no component can mutate another component's current reference to the state in
 * the middle of some process or asynchronous operation.
 *
 */
var Atom = /** @class */ (function () {
    /** @ignore */
    function Atom(state, _a) {
        var validator = (_a === void 0 ? {} : _a).validator;
        validator = validator || (function () { return true; });
        if (!validator(state)) {
            var errMsg = "Atom initialized with invalid state:\n\n" + prettyPrint(state) + "\n\naccording to validator function:\n" + validator + "\n\n";
            var err = Error(errMsg);
            err.name = "AtomInvalidStateError";
            throw err;
        }
        Object.defineProperty(this, "$$id", { value: _useNextAtomId() });
        _setState(this, state);
        _setValidator(this, validator);
        _initChangeHandlerDict(this);
        return this;
    }
    /**
     * Constructs a new instance of [[Atom]] with its internal state
     * set to `state`.
     *
     * @param S the type of the value being set as an [[Atom]]'s internal state
     * @example
  ```js
  
  import { Atom } from '@libre/atom'
  
  const a1 = Atom.of(0)
  const a2 = Atom.of("zero")
  const a3 = Atom.of({ count: 0 })
  ```
     */
    Atom.of = function (state, options) {
        return new Atom(state, options);
    };
    /** @ignore */
    Atom.prototype.toString = function () {
        return "Atom<" + prettyPrint(_getState(this)) + ">";
    };
    /** @ignore */
    Atom.prototype.inspect = function () {
        return this.toString();
    };
    return Atom;
}());

/** @ignore */
var expectedAtomButGot = "Expected an Atom instances, but got:";

/** @ignore */
function throwIfNotAtom(atom) {
    if (!(atom instanceof Atom)) {
        throw TypeError(expectedAtomButGot + "\n\n" + prettyPrint(atom));
    }
}

/**
 * Dereferences (i.e. "*reads*") the current state of an [[Atom]]. The dereferenced value
 * should ___not___ be mutated.
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref} from '@libre/atom'

const stateAtom = Atom.of({ count: 0 })

deref(stateAtom) // => { count: 0 }
```
 */
function deref(atom) {
    throwIfNotAtom(atom);
    return _getState(atom);
}

/**
 * Gets `atom`'s validator function
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref, getValidator, swap} from '@libre/atom'

const atom = Atom.of({ count: 0 }, { validator: (state) => isEven(state.count) })
const validator = getValidator(atom)
validator({ count: 3 }) // => false
validator({ count: 2 }) // => true
```
 */
function getValidator(atom) {
    throwIfNotAtom(atom);
    return _getValidator(atom);
}

/**
 * Sets `atom`s state to `nextState`.
 *
 * It is equivalent to `swap(atom, () => newState)`.
 *
 * @param <S> the type of `atom`'s inner state
 * @param atom an instance of [[Atom]]
 * @param nextState the value to which to set the state; it should be the same type/interface as current state
 *
  * @example
```js

import {Atom, deref, set} from '@libre/atom'

const atom = Atom.of({ count: 0 })

set(atom, { count: 100 })
deref(atom) // => { count: 100 }
```
 */
function set(atom, nextState) {
    throwIfNotAtom(atom);
    var validator = _getValidator(atom);
    var didValidate = validator(nextState);
    if (!didValidate) {
        var errMsg = "Attempted to set the state of\n\n" + atom + "\n\nwith:\n\n" + prettyPrint(nextState) + "\n\nbut it did not pass validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        var prevState = deref(atom);
        _setState(atom, nextState);
        _runChangeHandlers(atom, prevState, nextState);
    }
}

/**
 * Sets the `validator` for `atom`. `validator` must be a pure function of one argument,
 * which will be passed the intended new state on any state change. If the new state is
 * unacceptable, `validator` should return false or throw an exception. If the current state
 * is not acceptable to the new validator, an exception will be thrown and the validator will
 * not be changed.
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref, setValidator, set} from '@libre/atom'
import { _setValidator } from './internal-state';

const atom = Atom.of({ count: 0 }, {validator: (state) => isNumber(state.count) })
setValidator(atom, (state) => isOdd(state.count)) // Error; new validator rejected
set(atom, {count: "not number"}) // Error; new state not set
setValidator(atom, (state) => isEven(state.count)) // All good
set(atom, {count: 2}) // All good

```
 */
function setValidator(atom, validator) {
    throwIfNotAtom(atom);
    if (!validator(_getState(atom))) {
        var errMsg = "Could not set validator on\n\n" + atom + "\n\nbecause current state would be invalid according to new validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        _setValidator(atom, validator);
    }
}

/**
 * Swaps `atom`'s state with the value returned from applying `updateFn` to `atom`'s
 * current state. `updateFn` should be a pure function and ___not___ mutate `state`.
 *
 * @param <S> the type of `atom`'s inner state
 * @param atom an instance of [[Atom]]
 * @param updateFn a pure function that takes the current state and returns the next state; the next state should be of the same type/interface as the current state;
 *
 * @example
 * ```jsx
 *
 *import {Atom, swap} from '@libre/atom'
import {prettyPrint} from './prettyPrint'
 *
 *const stateAtom = Atom.of({ count: 0 })
 *const increment = () => swap(stateAtom, (state) => ({
 *  count: state.count + 1
 *}));
 * ```
 */
function swap(atom, updateFn) {
    throwIfNotAtom(atom);
    var prevState = _getState(atom);
    var nextState = updateFn(prevState);
    var validator = _getValidator(atom);
    var didValidate = validator(nextState);
    if (!didValidate) {
        var errMsg = "swap updateFn\n" + updateFn + "\n\nattempted to swap the state of\n\n" + atom + "\n\nwith:\n\n" + prettyPrint(nextState) + "\n\nbut it did not pass validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        _setState(atom, nextState);
        _runChangeHandlers(atom, prevState, nextState);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/mini-create-react-context/dist/esm/index.js'");

/***/ }),

/***/ "./node_modules/piral-base/esm/aggregate.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-base/esm/aggregate.js ***!
  \**************************************************/
/*! exports provided: createPilets, createPilet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPilets", function() { return createPilets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPilet", function() { return createPilet; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./node_modules/piral-base/esm/setup.js");


function checkCreateApi(createApi) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(createApi)) {
        console.warn('Invalid `createApi` function. Skipping pilet installation.');
        return false;
    }
    return true;
}
/**
 * Sets up the evaluated pilets to become integrated pilets.
 * @param createApi The function to create an API object for a pilet.
 * @param pilets The available evaluated app pilets.
 * @returns The integrated pilets.
 */
function createPilets(createApi, pilets) {
    const promises = [];
    if (checkCreateApi(createApi) && Array.isArray(pilets)) {
        for (const pilet of pilets) {
            promises.push(Object(_setup__WEBPACK_IMPORTED_MODULE_1__["setupPilet"])(pilet, createApi));
        }
    }
    return Promise.all(promises).then(() => pilets);
}
/**
 * Sets up an evaluated pilet to become an integrated pilet.
 * @param createApi The function to create an API object for the pilet.
 * @param pilet The available evaluated pilet.
 * @returns The integrated pilet.
 */
function createPilet(createApi, pilet) {
    const promises = [];
    if (checkCreateApi(createApi)) {
        promises.push(Object(_setup__WEBPACK_IMPORTED_MODULE_1__["setupPilet"])(pilet, createApi));
    }
    return Promise.all(promises).then(() => pilet);
}
//# sourceMappingURL=aggregate.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/api.js":
/*!********************************************!*\
  !*** ./node_modules/piral-base/esm/api.js ***!
  \********************************************/
/*! exports provided: initializeApi, mergeApis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApi", function() { return initializeApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeApis", function() { return mergeApis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function initializeApi(target, events) {
    return {
        on: events.on,
        off: events.off,
        emit: events.emit,
        meta: Object.assign({}, target),
    };
}
function mergeApis(api, extenders, target) {
    const frags = extenders.map((extender) => extender(api, target));
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(api, ...frags);
    return api;
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/cleanup.js":
/*!************************************************!*\
  !*** ./node_modules/piral-base/esm/cleanup.js ***!
  \************************************************/
/*! exports provided: cleanup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanup", function() { return cleanup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");

function cleanup(pilet) {
    const css = document.querySelector(`link[data-origin=${JSON.stringify(pilet.name)}]`);
    css === null || css === void 0 ? void 0 : css.remove();
    // check if this was actually set up using a require reference
    if ('requireRef' in pilet) {
        const depName = pilet.requireRef;
        delete window[depName];
    }
    // remove the pilet's evaluated modules from SystemJS (except the shared dependencies)
    if ('link' in pilet) {
        const basePath = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getBasePath"])(pilet.link);
        const dependencies = Object.keys(pilet.dependencies || {}).map((m) => pilet.dependencies[m]);
        [...System.entries()]
            .filter(([id]) => id.startsWith(basePath) && !dependencies.includes(id))
            .forEach(([id]) => System.delete(id));
    }
}
//# sourceMappingURL=cleanup.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/create.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-base/esm/create.js ***!
  \***********************************************/
/*! exports provided: startLoadingPilets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoadingPilets", function() { return startLoadingPilets; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies */ "./node_modules/piral-base/esm/strategies.js");


function startLoadingPilets(options) {
    const state = {
        loaded: false,
        pilets: [],
        error: undefined,
    };
    const notifiers = [];
    const call = (notifier) => notifier(state.error, state.pilets, state.loaded);
    const notify = () => notifiers.forEach(call);
    const setPilets = (error, pilets) => {
        state.error = error;
        state.pilets = pilets;
        notify();
    };
    const setLoaded = () => {
        state.loaded = true;
        notify();
    };
    const { strategy = _strategies__WEBPACK_IMPORTED_MODULE_1__["standardStrategy"] } = options;
    strategy(options, setPilets).then(setLoaded, setLoaded);
    return {
        connect(notifier) {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(notifier)) {
                notifiers.push(notifier);
                call(notifier);
            }
        },
        disconnect(notifier) {
            const index = notifiers.indexOf(notifier);
            index !== -1 && notifiers.splice(index, 1);
        },
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/dependency.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-base/esm/dependency.js ***!
  \***************************************************/
/*! exports provided: evalDependency, compileDependency, includeScriptDependency, includeDependency, includeBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalDependency", function() { return evalDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileDependency", function() { return compileDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeScriptDependency", function() { return includeScriptDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeDependency", function() { return includeDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeBundle", function() { return includeBundle; });
function tryResolve(name, parent) {
    try {
        return System.resolve(name, parent);
    }
    catch (_a) {
        // just ignore - will be handled differently later.
        return undefined;
    }
}
function requireModule(name, parent) {
    const moduleId = tryResolve(name, parent);
    const dependency = moduleId && System.get(moduleId);
    if (!dependency) {
        const error = new Error(`Cannot find module '${name}'`);
        error.code = 'MODULE_NOT_FOUND';
        throw error;
    }
    return dependency;
}
function checkPiletApp(name, app) {
    if (!app) {
        console.error('Invalid module found.', name);
    }
    else if (typeof app.setup !== 'function') {
        console.warn('Setup function is missing.', name);
    }
    else {
        return app;
    }
    return {
        setup() { },
    };
}
function checkPiletAppAsync(name, app) {
    return Promise.resolve(app).then((resolvedApp) => checkPiletApp(name, resolvedApp));
}
/**
 * Compiles the given content from a generic dependency.
 * @param name The name of the dependency to compile.
 * @param content The content of the dependency to compile.
 * @param link The optional link to the dependency.
 * @returns The evaluated dependency.
 */
function evalDependency(name, content, link = '') {
    const mod = {
        exports: {},
    };
    try {
        const sourceUrl = link && `\n//# sourceURL=${link}`;
        const importer = new Function('module', 'exports', 'require', content + sourceUrl);
        const parent = link || name;
        const require = (moduleId) => requireModule(moduleId, parent);
        importer(mod, mod.exports, require);
    }
    catch (e) {
        console.error(`Error while evaluating ${name}.`, e);
    }
    return mod.exports;
}
/**
 * Compiles the given content from a module with a dependency resolution.
 * @param name The name of the dependency to compile.
 * @param content The content of the dependency to compile.
 * @param link The optional link to the dependency.
 * @returns The evaluated module.
 */
function compileDependency(name, content, link = '') {
    const app = evalDependency(name, content, link);
    return checkPiletAppAsync(name, app);
}
function includeScript(piletName, depName, link, integrity, crossOrigin) {
    window[depName] = (moduleId) => requireModule(moduleId, link);
    return includeScriptDependency(link, integrity, crossOrigin).then((s) => checkPiletAppAsync(piletName, s.app), () => checkPiletApp(piletName));
}
/**
 * Includes a dependency as a script.
 * @param link The link to the script.
 * @param integrity The integrity for the script, if any.
 * @param crossOrigin Defines if cross-origin should be used.
 * @returns The script element.
 */
function includeScriptDependency(link, integrity, crossOrigin) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.async = true;
        s.src = link;
        if (integrity) {
            s.crossOrigin = crossOrigin || 'anonymous';
            s.integrity = integrity;
        }
        else if (crossOrigin) {
            s.crossOrigin = crossOrigin;
        }
        s.onload = () => resolve(s);
        s.onerror = () => reject();
        document.body.appendChild(s);
    });
}
/**
 * Includes the given single pilet script via its URL with a dependency resolution.
 * @param meta The meta data of the dependency to include.
 * @param crossOrigin The override for the cross-origin attribute.
 * @returns The evaluated module.
 */
function includeDependency(meta, crossOrigin) {
    return includeScript(meta.name, meta.requireRef, meta.link, meta.integrity, crossOrigin);
}
/**
 * Includes the given bundle script via its URL with a dependency resolution.
 * @param meta The meta data of the dependency to include.
 * @param crossOrigin The override for the cross-origin attribute.
 * @returns The evaluated module.
 */
function includeBundle(meta, crossOrigin) {
    var _a;
    return includeScript((_a = meta.name) !== null && _a !== void 0 ? _a : '(bundle)', meta.bundle, meta.link, meta.integrity, crossOrigin);
}
//# sourceMappingURL=dependency.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/events.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-base/esm/events.js ***!
  \***********************************************/
/*! exports provided: createListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListener", function() { return createListener; });
function nameOf(type) {
    return `piral-${type}`;
}
/**
 * Creates a new Piral app shell event emitter.
 * Uses a custom event dispatcher with a state for usage control.
 * @param state The optional state object to identify the instance.
 * @returns The event emitter.
 */
function createListener(state = {}) {
    const eventListeners = [];
    return {
        on(type, callback) {
            const listener = ({ detail }) => detail && detail.state === state && callback(detail.arg);
            document.body.addEventListener(nameOf(type), listener);
            eventListeners.push([callback, listener]);
            return this;
        },
        off(type, callback) {
            const [listener] = eventListeners.filter((m) => m[0] === callback);
            if (listener) {
                document.body.removeEventListener(nameOf(type), listener[1]);
                eventListeners.splice(eventListeners.indexOf(listener), 1);
            }
            return this;
        },
        emit(type, arg) {
            const ce = document.createEvent('CustomEvent');
            ce.initCustomEvent(nameOf(type), false, false, {
                arg,
                state,
            });
            document.body.dispatchEvent(ce);
            return this;
        },
    };
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/fetch.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-base/esm/fetch.js ***!
  \**********************************************/
/*! exports provided: fetchDependency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDependency", function() { return fetchDependency; });
/**
 * Uses the `fetch` function (must be available). If you
 * use this function make sure to use, e.g., `whatwg-fetch`
 * which comes with polyfills for older browsers.
 * @param url The URL to GET.
 * @returns A promise leading to the raw text content.
 */
function fetchDependency(url) {
    return fetch(url, {
        method: 'GET',
        cache: 'force-cache',
    }).then((m) => m.text());
}
//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-base/esm/index.js ***!
  \**********************************************/
/*! exports provided: initializeApi, mergeApis, startLoadingPilets, createListener, loadMetadata, loadPilets, loadFrom, extendLoader, getDefaultLoader, setupSinglePilet, setupMultiPilet, setupPilet, createProgressiveStrategy, blazingStrategy, asyncStrategy, standardStrategy, syncStrategy, createDeferredStrategy, isfunc, createEmptyModule, getBasePath, setBasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/piral-base/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApi", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["initializeApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeApis", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["mergeApis"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/piral-base/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLoadingPilets", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["startLoadingPilets"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./node_modules/piral-base/esm/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createListener", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["createListener"]; });

/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load */ "./node_modules/piral-base/esm/load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadMetadata", function() { return _load__WEBPACK_IMPORTED_MODULE_3__["loadMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadPilets", function() { return _load__WEBPACK_IMPORTED_MODULE_3__["loadPilets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFrom", function() { return _load__WEBPACK_IMPORTED_MODULE_3__["loadFrom"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./node_modules/piral-base/esm/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendLoader", function() { return _loader__WEBPACK_IMPORTED_MODULE_4__["extendLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultLoader", function() { return _loader__WEBPACK_IMPORTED_MODULE_4__["getDefaultLoader"]; });

/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setup */ "./node_modules/piral-base/esm/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSinglePilet", function() { return _setup__WEBPACK_IMPORTED_MODULE_5__["setupSinglePilet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupMultiPilet", function() { return _setup__WEBPACK_IMPORTED_MODULE_5__["setupMultiPilet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupPilet", function() { return _setup__WEBPACK_IMPORTED_MODULE_5__["setupPilet"]; });

/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategies */ "./node_modules/piral-base/esm/strategies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProgressiveStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["createProgressiveStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blazingStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["blazingStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["asyncStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "standardStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["standardStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["syncStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDeferredStrategy", function() { return _strategies__WEBPACK_IMPORTED_MODULE_6__["createDeferredStrategy"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/piral-base/esm/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isfunc", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["isfunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyModule", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["createEmptyModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBasePath", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["getBasePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBasePath", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["setBasePath"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/legacy.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-base/esm/legacy.js ***!
  \***********************************************/
/*! exports provided: loadLegacyPilet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLegacyPilet", function() { return loadLegacyPilet; });
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./node_modules/piral-base/esm/load.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/piral-base/esm/fetch.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");
/* harmony import */ var _dependency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependency */ "./node_modules/piral-base/esm/dependency.js");




/**
 * Loads a legacy (v0) or invalid pilet.
 * @param meta The metadata of the pilet.
 * @returns The evaluated pilet that can now be integrated.
 */
function loadLegacyPilet(meta) {
    const name = meta.name;
    if ('link' in meta && meta.link) {
        const link = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setBasePath"])(meta, meta.link);
        return Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["fetchDependency"])(link).then((content) => Object(_load__WEBPACK_IMPORTED_MODULE_0__["loadFrom"])(meta, () => Object(_dependency__WEBPACK_IMPORTED_MODULE_3__["compileDependency"])(name, content, link)));
    }
    else if ('content' in meta && meta.content) {
        const content = meta.content;
        return Object(_load__WEBPACK_IMPORTED_MODULE_0__["loadFrom"])(meta, () => Object(_dependency__WEBPACK_IMPORTED_MODULE_3__["compileDependency"])(name, content, undefined));
    }
    else {
        console.warn('Empty pilet found!', name);
    }
    return Promise.resolve(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createEmptyModule"])(meta));
}
//# sourceMappingURL=legacy.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/load.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-base/esm/load.js ***!
  \*********************************************/
/*! exports provided: loadMetadata, loadPilets, loadFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMetadata", function() { return loadMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPilets", function() { return loadPilets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFrom", function() { return loadFrom; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");
/* harmony import */ var _dependency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependency */ "./node_modules/piral-base/esm/dependency.js");


const depContext = {};
function loadSharedDependencies(sharedDependencies) {
    if (sharedDependencies && typeof sharedDependencies === 'object') {
        const sharedDependencyNames = Object.keys(sharedDependencies);
        return Promise.all(sharedDependencyNames.map((name) => {
            return depContext[name] || (depContext[name] = Object(_dependency__WEBPACK_IMPORTED_MODULE_1__["includeScriptDependency"])(sharedDependencies[name]));
        }));
    }
    return Promise.resolve();
}
function checkFetchPilets(fetchPilets) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(fetchPilets)) {
        console.error('Could not get the pilets. Provide a valid `fetchPilets` function.');
        return false;
    }
    return true;
}
/**
 * Loads the pilets metadata and puts them in the cache, if provided.
 * @param fetchPilets The function to resolve the pilets.
 * @param cache The optional cache to use initially and update later.
 */
function loadMetadata(fetchPilets) {
    if (checkFetchPilets(fetchPilets)) {
        return fetchPilets().then((pilets) => {
            if (!Array.isArray(pilets)) {
                throw new Error('The fetched pilets metadata is not an array.');
            }
            return pilets.map((meta) => (Object.assign({}, meta)));
        });
    }
    return Promise.resolve([]);
}
/**
 * Loads the pilets by first getting them, then evaluating the raw content.
 * @param fetchPilets The function to resolve the pilets.
 * @param fetchDependency A function to fetch the dependencies. By default, `fetch` is used.
 * @param dependencies The availablly global dependencies, if any.
 * @returns A promise leading to the evaluated pilets.
 */
function loadPilets(fetchPilets, loadPilet) {
    return loadMetadata(fetchPilets).then((pilets) => Promise.all(pilets.map(loadPilet)));
}
/**
 * Loads a pilet from the specified metadata and loader function.
 * @param meta The metadata of the pilet.
 * @param loadPilet The loader function derived for the pilet.
 * @returns The evaluated pilet, which can then be integrated.
 */
function loadFrom(meta, loadPilet) {
    return loadSharedDependencies(meta.dependencies)
        .then(loadPilet)
        .then((app) => (Object.assign(Object.assign({}, app), meta)));
}
//# sourceMappingURL=load.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/loader.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-base/esm/loader.js ***!
  \***********************************************/
/*! exports provided: extendLoader, getDefaultLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendLoader", function() { return extendLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultLoader", function() { return getDefaultLoader; });
/* harmony import */ var _dependency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependency */ "./node_modules/piral-base/esm/dependency.js");
/* harmony import */ var _umd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./umd */ "./node_modules/piral-base/esm/umd.js");
/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy */ "./node_modules/piral-base/esm/legacy.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system */ "./node_modules/piral-base/esm/system.js");




const inBrowser = typeof document !== 'undefined';
/**
 * Extends the default loader with the spec loaders, if any are given.
 * @param fallback The loader to use if none of the spec loaders matches.
 * @param specLoaders The spec loaders to use.
 * @returns The loader.
 */
function extendLoader(fallback, specLoaders) {
    if (typeof specLoaders === 'object' && specLoaders) {
        return (meta) => {
            if (typeof meta.spec === 'string') {
                const loaderOverride = specLoaders[meta.spec];
                if (typeof loaderOverride === 'function') {
                    return loaderOverride(meta);
                }
            }
            return fallback(meta);
        };
    }
    return fallback;
}
/**
 * Gets the default loader provided by piral-base.
 * @param config The loader configuration.
 * @returns The function to load a pilet from metadata.
 */
function getDefaultLoader(config = {}) {
    return (meta) => {
        if (inBrowser && 'link' in meta && meta.spec === 'v2') {
            return Object(_system__WEBPACK_IMPORTED_MODULE_3__["loadSystemPilet"])(meta);
        }
        else if (inBrowser && 'requireRef' in meta && meta.spec !== 'v2') {
            return Object(_umd__WEBPACK_IMPORTED_MODULE_1__["loadUmdPilet"])(meta, config, _dependency__WEBPACK_IMPORTED_MODULE_0__["includeDependency"]);
        }
        else if (inBrowser && 'bundle' in meta && meta.bundle) {
            return Object(_umd__WEBPACK_IMPORTED_MODULE_1__["loadUmdPilet"])(meta, config, _dependency__WEBPACK_IMPORTED_MODULE_0__["includeBundle"]);
        }
        else {
            return Object(_legacy__WEBPACK_IMPORTED_MODULE_2__["loadLegacyPilet"])(meta);
        }
    };
}
//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/setup.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-base/esm/setup.js ***!
  \**********************************************/
/*! exports provided: setupSinglePilet, setupMultiPilet, setupPilet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSinglePilet", function() { return setupSinglePilet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMultiPilet", function() { return setupMultiPilet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPilet", function() { return setupPilet; });
/* harmony import */ var _cleanup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanup */ "./node_modules/piral-base/esm/cleanup.js");

function logError(name, e) {
    console.error(`Error while setting up ${name}.`, e);
}
function withCatch(result, name) {
    if (result instanceof Promise) {
        return result.catch((e) => logError(name, e));
    }
    return result;
}
/**
 * Sets up the given single pilet by calling the exported `setup`
 * function on the pilet with the created API.
 * @param app The pilet's evaluated content.
 * @param api The generated API for the pilet.
 */
function setupSinglePilet(app, api) {
    try {
        const result = app.setup(api);
        const evtName = 'unload-pilet';
        const handler = (e) => {
            if (e.name === app.name) {
                api.off(evtName, handler);
                if (typeof app.teardown === 'function') {
                    app.teardown(api);
                }
                Object(_cleanup__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(app);
            }
        };
        api.on(evtName, handler);
        return withCatch(result, app === null || app === void 0 ? void 0 : app.name);
    }
    catch (e) {
        logError(app === null || app === void 0 ? void 0 : app.name, e);
    }
}
/**
 * Sets up the given multi pilet by calling the exported `setup`
 * function on the pilet with the API factory.
 * @param app The pilet's evaluated content.
 * @param apiFactory The API factory to be used in the bundle.
 */
function setupMultiPilet(app, apiFactory) {
    try {
        return withCatch(app.setup(apiFactory), app === null || app === void 0 ? void 0 : app.name);
    }
    catch (e) {
        logError(app === null || app === void 0 ? void 0 : app.name, e);
    }
}
/**
 * Sets up the given pilet by calling the exported `setup` function
 * on the pilet.
 * @param app The pilet's evaluated content.
 * @param apiFactory The API factory to be used in the bundle.
 */
function setupPilet(app, apiFactory) {
    if ('bundle' in app) {
        return setupMultiPilet(app, apiFactory);
    }
    else {
        return setupSinglePilet(app, apiFactory(app));
    }
}
//# sourceMappingURL=setup.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/strategies.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-base/esm/strategies.js ***!
  \***************************************************/
/*! exports provided: createProgressiveStrategy, blazingStrategy, asyncStrategy, standardStrategy, syncStrategy, createDeferredStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgressiveStrategy", function() { return createProgressiveStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blazingStrategy", function() { return blazingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncStrategy", function() { return asyncStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardStrategy", function() { return standardStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncStrategy", function() { return syncStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeferredStrategy", function() { return createDeferredStrategy; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./node_modules/piral-base/esm/loader.js");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./node_modules/piral-base/esm/load.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system */ "./node_modules/piral-base/esm/system.js");
/* harmony import */ var _aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aggregate */ "./node_modules/piral-base/esm/aggregate.js");




function evalAll(createApi, oldModules, newModules) {
    if (!Array.isArray(oldModules)) {
        return Promise.reject(`The existing pilets must be passed as an array.`);
    }
    try {
        for (const oldModule of oldModules) {
            const [newModule] = newModules.filter((m) => m.name === oldModule.name);
            if (newModule) {
                newModules.splice(newModules.indexOf(newModule), 1);
            }
        }
        return Object(_aggregate__WEBPACK_IMPORTED_MODULE_3__["createPilets"])(createApi, [...oldModules, ...newModules]);
    }
    catch (err) {
        return Promise.reject(err);
    }
}
/**
 * This strategy is dependent on the async parameter. If false it will start rendering when
 * everything has been received, otherwise it will start rendering when the metadata has been
 * received. In any case it will evaluate pilets as fast as possible.
 * @param async Uses the asynchronous mode.
 */
function createProgressiveStrategy(async) {
    return (options, cb) => {
        const { fetchPilets, dependencies = {}, createApi, config, pilets = [], loadPilet = Object(_loader__WEBPACK_IMPORTED_MODULE_0__["getDefaultLoader"])(config), loaders, } = options;
        const loader = Object(_load__WEBPACK_IMPORTED_MODULE_1__["loadMetadata"])(fetchPilets);
        const loadSingle = Object(_loader__WEBPACK_IMPORTED_MODULE_0__["extendLoader"])(loadPilet, loaders);
        return Object(_system__WEBPACK_IMPORTED_MODULE_2__["registerDependencies"])(dependencies).then(() => Object(_aggregate__WEBPACK_IMPORTED_MODULE_3__["createPilets"])(createApi, pilets).then((allModules) => {
            if (async && allModules.length > 0) {
                cb(undefined, [...allModules]);
            }
            const followUp = loader.then((metadata) => {
                const promises = metadata.map((m) => loadSingle(m).then((mod) => {
                    const available = pilets.filter((m) => m.name === mod.name).length === 0;
                    if (available) {
                        return Object(_aggregate__WEBPACK_IMPORTED_MODULE_3__["createPilet"])(createApi, mod).then((newModule) => {
                            allModules.push(newModule);
                            if (async) {
                                cb(undefined, [...allModules]);
                            }
                        });
                    }
                }));
                return Promise.all(promises).then(() => {
                    if (!async) {
                        cb(undefined, allModules);
                    }
                });
            });
            return async ? loader.then() : followUp.then();
        }));
    };
}
/**
 * This strategy starts rendering when the pilets metadata has been received.
 * Evaluates the pilets once available without waiting for all pilets to be
 * available.
 */
function blazingStrategy(options, cb) {
    const strategy = createProgressiveStrategy(true);
    return strategy(options, cb);
}
/**
 * The async strategy picked when no strategy is declared and async is set to
 * true. Directly renders, but waits for all pilets to be available before
 * evaluating them.
 */
function asyncStrategy(options, cb) {
    standardStrategy(options, cb);
    return Promise.resolve();
}
/**
 * The standard strategy that is used if no strategy is declared and async is
 * false. Loads and evaluates all pilets before rendering.
 */
function standardStrategy(options, cb) {
    const { fetchPilets, dependencies = {}, createApi, config, pilets = [], loadPilet = Object(_loader__WEBPACK_IMPORTED_MODULE_0__["getDefaultLoader"])(config), loaders, } = options;
    const loadSingle = Object(_loader__WEBPACK_IMPORTED_MODULE_0__["extendLoader"])(loadPilet, loaders);
    return Object(_system__WEBPACK_IMPORTED_MODULE_2__["registerDependencies"])(dependencies)
        .then(() => Object(_load__WEBPACK_IMPORTED_MODULE_1__["loadPilets"])(fetchPilets, loadSingle))
        .then((newModules) => evalAll(createApi, pilets, newModules))
        .then((modules) => cb(undefined, modules))
        .catch((error) => cb(error, []));
}
/**
 * The strategy that could be used for special purposes, e.g., SSR or specific
 * builds of the Piral instance. This strategy ignores the fetcher and only
 * considers the already given pilets.
 */
function syncStrategy(options, cb) {
    const { createApi, dependencies = {}, pilets = [] } = options;
    return Object(_system__WEBPACK_IMPORTED_MODULE_2__["registerDependencies"])(dependencies).then(() => evalAll(createApi, pilets, []).then((modules) => cb(undefined, modules), (err) => cb(err, [])));
}
/**
 * Creates a strategy that deferres the actual loading until a trigger promise resolves.
 * The loading spinner is not shown during this time and pilets are supposed to appear directly.
 * @param trigger The trigger resolving when the strategy should be applied.
 * @param strategy The strategy to apply. Falls back to the standard strategy.
 * @returns A pilet loading strategy.
 */
function createDeferredStrategy(trigger, strategy = standardStrategy) {
    return (options, cb) => {
        cb(undefined, []);
        trigger.then(() => strategy(options, cb));
        return Promise.resolve();
    };
}
//# sourceMappingURL=strategies.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/system.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-base/esm/system.js ***!
  \***********************************************/
/*! exports provided: loadSystemPilet, loadSystemModule, registerDependencies, registerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSystemPilet", function() { return loadSystemPilet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSystemModule", function() { return loadSystemModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDependencies", function() { return registerDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerModule", function() { return registerModule; });
/* harmony import */ var systemjs_dist_system_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! systemjs/dist/system.js */ "./node_modules/systemjs/dist/system.js");
/* harmony import */ var systemjs_dist_system_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_system_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var systemjs_dist_extras_named_register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systemjs/dist/extras/named-register.js */ "./node_modules/systemjs/dist/extras/named-register.js");
/* harmony import */ var systemjs_dist_extras_named_register_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_extras_named_register_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");



function isPrimitiveExport(content) {
    const type = typeof content;
    return (type === 'number' ||
        type === 'boolean' ||
        type === 'symbol' ||
        type === 'string' ||
        type === 'bigint' ||
        Array.isArray(content));
}
const systemRegister = System.constructor.prototype.register;
System.constructor.prototype.register = function (...args) {
    const getContent = args.pop();
    args.push((_export, ctx) => {
        const exp = (...p) => {
            if (p.length === 1) {
                const content = p[0];
                if (content instanceof Promise) {
                    return content.then(exp);
                }
                else if (typeof content === 'function') {
                    _export('__esModule', true);
                    Object.keys(content).forEach((prop) => {
                        _export(prop, content[prop]);
                    });
                    _export('default', content);
                }
                else if (isPrimitiveExport(content)) {
                    _export('__esModule', true);
                    _export('default', content);
                }
                else if (content) {
                    _export(content);
                    if (typeof content === 'object' && !('default' in content)) {
                        _export('default', content);
                    }
                }
            }
            else {
                _export(...p);
            }
        };
        return getContent(exp, ctx);
    });
    return systemRegister.apply(this, args);
};
/**
 * Loads the provided SystemJS-powered pilet.
 * @param meta The pilet's metadata.
 */
function loadSystemPilet(meta) {
    const deps = meta.dependencies;
    const link = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setBasePath"])(meta, meta.link);
    if (deps) {
        for (const depName of Object.keys(deps)) {
            if (!System.has(depName)) {
                registerModule(depName, () => System.import(deps[depName]));
            }
        }
    }
    return loadSystemModule(link).then(([_, app]) => (Object.assign(Object.assign({}, app), meta)));
}
/**
 * Loads the provided modules by their URL. Performs a
 * SystemJS import.
 * @param modules The names of the modules to resolve.
 */
function loadSystemModule(source) {
    return System.import(source).then((value) => [source, value], (error) => {
        console.error('Failed to load SystemJS module', source, error);
        return [source, {}];
    });
}
/**
 * Registers all static global dependencies in the system.
 * @param modules The modules to register as dependencies.
 * @returns A promise when SystemJS included all dependencies.
 */
function registerDependencies(modules) {
    const moduleNames = Object.keys(modules);
    moduleNames.forEach((name) => registerModule(name, () => modules[name]));
    return Promise.all(moduleNames.map((name) => System.import(name)));
}
/**
 * Registers a plain module in SystemJS.
 * @param name The name of the module
 * @param resolve The resolver for the module's content.
 */
function registerModule(name, resolve) {
    System.register(name, [], (_exports) => ({
        execute() {
            const content = resolve();
            if (content instanceof Promise) {
                return content.then(_exports);
            }
            else {
                _exports(content);
            }
        },
    }));
}
//# sourceMappingURL=system.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/types.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-base/esm/types.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/umd.js":
/*!********************************************!*\
  !*** ./node_modules/piral-base/esm/umd.js ***!
  \********************************************/
/*! exports provided: loadUmdPilet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUmdPilet", function() { return loadUmdPilet; });
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./node_modules/piral-base/esm/load.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-base/esm/utils.js");


/**
 * Loads the provided UMD-powered pilet.
 * @param meta The pilet's metadata.
 * @param config The configuration for loading the pilet.
 * @param loader The associated loader, either for bundle or single mode.
 */
function loadUmdPilet(meta, config, loader) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setBasePath"])(meta, meta.link);
    return Object(_load__WEBPACK_IMPORTED_MODULE_0__["loadFrom"])(meta, () => loader(meta, config.crossOrigin));
}
//# sourceMappingURL=umd.js.map

/***/ }),

/***/ "./node_modules/piral-base/esm/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-base/esm/utils.js ***!
  \**********************************************/
/*! exports provided: isfunc, createEmptyModule, getBasePath, setBasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isfunc", function() { return isfunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyModule", function() { return createEmptyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasePath", function() { return getBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasePath", function() { return setBasePath; });
function isfunc(f) {
    return typeof f === 'function';
}
function createEmptyModule(meta) {
    return Object.assign(Object.assign({}, meta), { setup() { } });
}
function getBasePath(link) {
    if (link) {
        const idx = link.lastIndexOf('/');
        return link.substr(0, idx + 1);
    }
    return link;
}
function setBasePath(meta, link) {
    meta.basePath = getBasePath(link);
    return link;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/piral-core/debug-piral.js":
/*!************************************************!*\
  !*** ./node_modules/piral-core/debug-piral.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.integrate = void 0;
var react_atom_1 = __webpack_require__(/*! @dbeining/react-atom */ "./node_modules/@dbeining/react-atom/dist/react-atom.js");
var piral_debug_utils_1 = __webpack_require__(/*! piral-debug-utils */ "./node_modules/piral-debug-utils/esm/index.js");
function integrate(context, options, debug) {
    if (debug === void 0) { debug = {}; }
    (0, piral_debug_utils_1.installPiralDebug)(__assign(__assign({}, debug), { createApi: options.createApi, loadPilet: options.loadPilet, injectPilet: context.injectPilet, fireEvent: context.emit, getDependencies: function () {
            return Object.keys(options.dependencies);
        }, getExtensions: function () {
            return context.readState(function (s) { return Object.keys(s.registry.extensions); });
        }, getRoutes: function () {
            var registeredRoutes = context.readState(function (state) { return Object.keys(state.registry.pages); });
            var componentRoutes = context.readState(function (state) { return Object.keys(state.routes); });
            return __spreadArray(__spreadArray([], componentRoutes, true), registeredRoutes, true);
        }, getGlobalState: function () {
            return context.readState(function (s) { return s; });
        }, getPilets: function () {
            return context.readState(function (s) { return s.modules; });
        }, setPilets: function (modules) {
            context.dispatch(function (state) { return (__assign(__assign({}, state), { modules: modules })); });
        }, integrate: function (dbg) {
            context.dispatch(function (s) { return (__assign(__assign({}, s), { components: __assign(__assign({}, s.components), dbg.components), routes: __assign(__assign({}, s.routes), dbg.routes), registry: __assign(__assign({}, s.registry), { wrappers: __assign(__assign({}, s.registry.wrappers), dbg.wrappers) }) })); });
            (0, react_atom_1.addChangeHandler)(context.state, 'debugging', function (_a) {
                var previous = _a.previous, current = _a.current;
                var pilets = current.modules !== previous.modules;
                var pages = current.registry.pages !== previous.registry.pages || current.routes !== previous.routes;
                var extensions = current.registry.extensions !== previous.registry.extensions;
                var state = current !== previous;
                dbg.onChange(previous, current, {
                    pilets: pilets,
                    pages: pages,
                    extensions: extensions,
                    state: state
                });
            });
        } }));
}
exports.integrate = integrate;


/***/ }),

/***/ "./node_modules/piral-core/esm/Piral.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-core/esm/Piral.js ***!
  \**********************************************/
/*! exports provided: Piral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piral", function() { return Piral; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/state/index.js");
/* harmony import */ var _createInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createInstance */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/components/index.js");
/* harmony import */ var _RootListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RootListener */ "./node_modules/piral-core/esm/RootListener.js");





/**
 * Represents the Piral app shell frame. Use this component together
 * with an existing instance to render the app shell.
 * Includes layout and routing handling. Wires the state container
 * to the generated views.
 *
 * @example
```jsx
const app = (
  <Piral instance={yourPiralInstance}>
    <Define name="Layout" component={MyLayout} />
  </Piral>
);
```
 */
const Piral = ({ instance = Object(_createInstance__WEBPACK_IMPORTED_MODULE_2__["createInstance"])(), breakpoints, children }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_state__WEBPACK_IMPORTED_MODULE_1__["StateContext"].Provider, { value: instance.context },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveLayout"], { breakpoints: breakpoints }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["Mediator"], { options: instance.options, key: instance.id }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RootListener__WEBPACK_IMPORTED_MODULE_4__["RootListener"], null),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralView"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PortalRenderer"], { id: "root" }),
        children)));
Piral.displayName = 'Piral';
//# sourceMappingURL=Piral.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/RootListener.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/RootListener.js ***!
  \*****************************************************/
/*! exports provided: RootListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootListener", function() { return RootListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./node_modules/piral-core/esm/modules/index.js");



const RootListener = () => {
    const context = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useGlobalStateContext"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
        if (typeof document !== 'undefined') {
            const handler = (ev) => {
                ev.stopPropagation();
                const { target, props } = ev.detail;
                const [dispose, update] = Object(_modules__WEBPACK_IMPORTED_MODULE_2__["renderElement"])(context, target, props);
                target.dispose = dispose;
                target.update = update;
            };
            document.body.addEventListener('render-html', handler, false);
            return () => {
                document.body.removeEventListener('render-html', handler, false);
            };
        }
    }, [context]);
    return null;
};
//# sourceMappingURL=RootListener.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-core/esm/components/index.js ***!
  \*********************************************************/
/*! exports provided: getPiralComponent, PiralError, PiralLoadingIndicator, PiralRouter, PiralRouteSwitch, PiralLayout, PiralDebug, DefaultErrorInfo, DefaultLayout, DefaultLoadingIndicator, DefaultRouter, DefaultRouteSwitch, ErrorBoundary, ExtensionSlot, Mediator, PiralRoutes, PiralView, PortalRenderer, ResponsiveLayout, SetComponent, SetError, SetErrors, SetLayout, SetProvider, SetRedirect, SetRoute, SwitchErrorInfo, wrapComponent */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/components/index.js'");

/***/ }),

/***/ "./node_modules/piral-core/esm/createInstance.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-core/esm/createInstance.js ***!
  \*******************************************************/
/*! exports provided: createInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./node_modules/piral-core/esm/modules/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/state/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./node_modules/piral-core/esm/helpers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-core/esm/utils/index.js");






/**
 * Creates a new PiralInstance component, which can be used for
 * bootstrapping the application easily.
 *
 * @example
```jsx
const instance = createInstance({
  requestPilets() {
    return fetch(...);
  },
});

const app = (
  <Piral instance={instance}>
    <Define name="Layout" component={MyLayout} />
  </Piral>
);
render(app, document.querySelector('#app'));
```
 */
function createInstance(config = {}) {
    const { id = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["generateId"])(), state, actions, availablePilets = [], plugins, requestPilets = _modules__WEBPACK_IMPORTED_MODULE_2__["defaultModuleRequester"], loaderConfig, async = false, shareDependencies = _modules__WEBPACK_IMPORTED_MODULE_2__["defaultDependencySelector"], loadPilet, loaders, debug, apiFactory = _modules__WEBPACK_IMPORTED_MODULE_2__["defaultApiFactory"], } = config;
    const globalState = Object(_state__WEBPACK_IMPORTED_MODULE_3__["createGlobalState"])(state);
    const events = Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["createListener"])(globalState);
    const context = Object(_state__WEBPACK_IMPORTED_MODULE_3__["createActions"])(globalState, events);
    const definedPlugins = plugins || [];
    const usedPlugins = Array.isArray(definedPlugins) ? definedPlugins : [definedPlugins];
    const createApi = apiFactory(context, usedPlugins);
    const root = createApi({
        name: 'root',
        version: "1.0.0" || false,
        spec: '',
    });
    const options = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["createPiletOptions"])({
        context,
        createApi,
        loaders,
        loadPilet,
        availablePilets,
        loaderConfig,
        shareDependencies,
        strategy: Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["isfunc"])(async) ? async : async ? piral_base__WEBPACK_IMPORTED_MODULE_1__["blazingStrategy"] : piral_base__WEBPACK_IMPORTED_MODULE_1__["standardStrategy"],
        requestPilets,
        debug,
    });
    if (actions) {
        Object(_state__WEBPACK_IMPORTED_MODULE_3__["includeActions"])(context, actions);
    }
    context.options = options;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(events, {
        id,
        createApi,
        context,
        root,
        options,
    });
}
//# sourceMappingURL=createInstance.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/helpers.js":
/*!************************************************!*\
  !*** ./node_modules/piral-core/esm/helpers.js ***!
  \************************************************/
/*! exports provided: createPiletOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPiletOptions", function() { return createPiletOptions; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./node_modules/piral-core/esm/modules/index.js");


function createPiletOptions({ context, loaders, loaderConfig, availablePilets, strategy, createApi, loadPilet, requestPilets, shareDependencies, debug, }) {
    const options = {
        config: loaderConfig,
        strategy,
        loadPilet: Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["extendLoader"])(loadPilet !== null && loadPilet !== void 0 ? loadPilet : Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["getDefaultLoader"])(loaderConfig), loaders),
        createApi,
        pilets: availablePilets,
        fetchPilets: requestPilets,
        dependencies: shareDependencies(_modules__WEBPACK_IMPORTED_MODULE_1__["globalDependencies"]),
    };
    // if we build the debug version of piral (debug and emulator build)
    if (true) {
        const { integrate } = __webpack_require__(/*! ../debug-piral */ "./node_modules/piral-core/debug-piral.js");
        integrate(context, options, debug);
    }
    // if we build the emulator version of piral (shipped to pilets)
    if (false) {}
    return options;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/index.js ***!
  \****************************************************/
/*! exports provided: useAction, useActions, useGlobalStateContext, useGlobalState, useMedia, useSetter, useSharedData */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/hooks/index.js'");

/***/ }),

/***/ "./node_modules/piral-core/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-core/esm/index.js ***!
  \**********************************************/
/*! exports provided: createInstance, Piral, createPiletOptions, getPiralComponent, PiralError, PiralLoadingIndicator, PiralRouter, PiralRouteSwitch, PiralLayout, PiralDebug, DefaultErrorInfo, DefaultLayout, DefaultLoadingIndicator, DefaultRouter, DefaultRouteSwitch, ErrorBoundary, ExtensionSlot, Mediator, PiralRoutes, PiralView, PortalRenderer, ResponsiveLayout, SetComponent, SetError, SetErrors, SetLayout, SetProvider, SetRedirect, SetRoute, SwitchErrorInfo, wrapComponent, useAction, useActions, useGlobalStateContext, useGlobalState, useMedia, useSetter, useSharedData, includeActions, createActions, createGlobalState, StateContext, withApi, compare, createDataView, createDataOptions, getDataExpiration, toExtension, reactifyContent, attachDomPortal, changeDomPortal, convertComponent, renderInDom, generateId, buildName, removeIndicator, none, noop, prependItem, appendItem, prependItems, appendItems, excludeItem, includeItem, replaceOrAddItem, removeNested, excludeOn, updateKey, withKey, withoutKey, tryParseJson, defaultLayouts, defaultBreakpoints, getCurrentLayout, defaultRender, withAll, withPage, withoutPage, withExtension, withoutExtension, withRootExtension, withProvider, withRoute, storage, cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createInstance */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return _createInstance__WEBPACK_IMPORTED_MODULE_0__["createInstance"]; });

/* harmony import */ var _Piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Piral", function() { return _Piral__WEBPACK_IMPORTED_MODULE_1__["Piral"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./node_modules/piral-core/esm/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPiletOptions", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["createPiletOptions"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPiralComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["getPiralComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralError", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLoadingIndicator", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralLoadingIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRouter", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRouteSwitch", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralRouteSwitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLayout", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDebug", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorInfo", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DefaultErrorInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayout", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DefaultLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingIndicator", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DefaultLoadingIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultRouter", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DefaultRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultRouteSwitch", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["DefaultRouteSwitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionSlot", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ExtensionSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["Mediator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRoutes", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralView", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PiralView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalRenderer", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["PortalRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveLayout", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetError", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetErrors", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLayout", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetProvider", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetRedirect", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetRedirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetRoute", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SetRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchErrorInfo", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["SwitchErrorInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_3__["wrapComponent"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAction", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalStateContext", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalStateContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalState", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetter", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useSetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSharedData", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["useSharedData"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeActions", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["includeActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["createActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["createGlobalState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["StateContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApi", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["withApi"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-core/esm/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["compare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDataView", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["createDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDataOptions", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["createDataOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataExpiration", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getDataExpiration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toExtension", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["toExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactifyContent", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["reactifyContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attachDomPortal", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["attachDomPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeDomPortal", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["changeDomPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["convertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderInDom", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["renderInDom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["generateId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildName", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["buildName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndicator", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["removeIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "none", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["none"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["prependItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["appendItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["prependItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendItems", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["appendItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "excludeItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["excludeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["includeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceOrAddItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["replaceOrAddItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNested", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["removeNested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "excludeOn", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["excludeOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateKey", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["updateKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withKey", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutKey", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withoutKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryParseJson", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["tryParseJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultLayouts", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["defaultLayouts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBreakpoints", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["defaultBreakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentLayout", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getCurrentLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRender", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["defaultRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAll", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPage", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutPage", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withoutPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withExtension", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutExtension", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withoutExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRootExtension", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withRootExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withProvider", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["withRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["cookie"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/piral-core/esm/types/index.js");
/* empty/unused harmony star reexport */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/index.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/index.js ***!
  \******************************************************/
/*! exports provided: createExtenders, defaultApiFactory, globalDependencies, defaultDependencySelector, defaultModuleRequester, renderElement */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/modules/index.js'");

/***/ }),

/***/ "./node_modules/piral-core/esm/state/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/state/index.js ***!
  \****************************************************/
/*! exports provided: includeActions, createActions, createGlobalState, StateContext, withApi */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/state/index.js'");

/***/ }),

/***/ "./node_modules/piral-core/esm/types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/types/index.js'");

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/index.js ***!
  \****************************************************/
/*! exports provided: compare, createDataView, createDataOptions, getDataExpiration, toExtension, reactifyContent, attachDomPortal, changeDomPortal, convertComponent, renderInDom, generateId, buildName, removeIndicator, none, noop, prependItem, appendItem, prependItems, appendItems, excludeItem, includeItem, replaceOrAddItem, removeNested, excludeOn, updateKey, withKey, withoutKey, tryParseJson, defaultLayouts, defaultBreakpoints, getCurrentLayout, defaultRender, withAll, withPage, withoutPage, withExtension, withoutExtension, withRootExtension, withProvider, withRoute, storage, cookie */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-core/esm/utils/index.js'");

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/Dashboard.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/Dashboard.js ***!
  \*******************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-dashboard/esm/components.js");



const Dashboard = (props) => {
    const tiles = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.registry.tiles);
    const { filter = () => true } = props;
    const children = Object.keys(tiles)
        .filter((tile) => filter(tiles[tile]))
        .map((tile) => {
        const { component: Component, preferences } = tiles[tile];
        const { initialColumns = 1, initialRows = 1, resizable = false } = preferences;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralDashboardTile"], { key: tile, columns: initialColumns, rows: initialRows, resizable: resizable, meta: preferences },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { columns: initialColumns, rows: initialRows })));
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralDashboardContainer"], Object.assign({}, props, { children: children }));
};
Dashboard.displayName = 'Dashboard';
//# sourceMappingURL=Dashboard.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/actions.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/actions.js ***!
  \*****************************************************/
/*! exports provided: registerTile, unregisterTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTile", function() { return registerTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterTile", function() { return unregisterTile; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function registerTile(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { tiles: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.registry.tiles, name, value) }) })));
}
function unregisterTile(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { tiles: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withoutKey"])(state.registry.tiles, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/components.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/components.js ***!
  \********************************************************/
/*! exports provided: PiralDashboardContainer, PiralDashboardTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardContainer", function() { return PiralDashboardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardTile", function() { return PiralDashboardTile; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralDashboardContainer = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('DashboardContainer');
const PiralDashboardTile = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('DashboardTile');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/create.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/create.js ***!
  \****************************************************/
/*! exports provided: createDashboardApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDashboardApi", function() { return createDashboardApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-dashboard/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/piral-dashboard/esm/default.js");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ "./node_modules/piral-dashboard/esm/Dashboard.js");




function getPreferences(defaultPreferences, customPreferences = {}) {
    return Object.assign(Object.assign({}, defaultPreferences), customPreferences);
}
function getTiles(items, defaultPreferences) {
    const tiles = {};
    let i = 0;
    for (const { component, preferences } of items) {
        tiles[`global-${i++}`] = {
            pilet: undefined,
            component,
            preferences: getPreferences(defaultPreferences, preferences),
        };
    }
    return tiles;
}
function withTiles(tiles) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ DashboardTile: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultTile"], DashboardContainer: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultContainer"] }, state.components), registry: Object.assign(Object.assign({}, state.registry), { tiles }) }));
}
/**
 * Creates the Pilet API extension for activating dashboard support.
 */
function createDashboardApi(config = {}) {
    const { tiles = [], defaultPreferences = {} } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch(Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withAll"])(withTiles(getTiles(tiles, defaultPreferences)), Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withRootExtension"])('piral-dashboard', _Dashboard__WEBPACK_IMPORTED_MODULE_3__["Dashboard"])));
        return (api, target) => {
            const pilet = target.name;
            let next = 0;
            return {
                registerTile(name, arg, preferences) {
                    if (typeof name !== 'string') {
                        preferences = arg;
                        arg = name;
                        name = next++;
                    }
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.registerTile(id, {
                        pilet,
                        component: Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withApi"])(context, arg, api, 'tile'),
                        preferences: getPreferences(defaultPreferences, preferences),
                    });
                    return () => api.unregisterTile(name);
                },
                unregisterTile(name) {
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.unregisterTile(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/default.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/default.js ***!
  \*****************************************************/
/*! exports provided: DefaultContainer, DefaultTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContainer", function() { return DefaultContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTile", function() { return DefaultTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultContainer = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_1__["ExtensionSlot"], { name: "dashboard", params: props, empty: () => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(props.children, 'default_dashboard') }));
const DefaultTile = (props) => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/index.js ***!
  \***************************************************/
/*! exports provided: createDashboardApi, PiralDashboardContainer, PiralDashboardTile, Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-dashboard/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDashboardApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createDashboardApi"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-dashboard/esm/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardContainer", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardTile", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardTile"]; });

/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard */ "./node_modules/piral-dashboard/esm/Dashboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return _Dashboard__WEBPACK_IMPORTED_MODULE_2__["Dashboard"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/piral-dashboard/esm/types.js");
/* empty/unused harmony star reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-dashboard/esm/types.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-dashboard/esm/types.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/DebugRouteSwitch.js":
/*!****************************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/DebugRouteSwitch.js ***!
  \****************************************************************/
/*! exports provided: freezeRouteRefresh, DebugRouteSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezeRouteRefresh", function() { return freezeRouteRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugRouteSwitch", function() { return DebugRouteSwitch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


const debugRouteCache = {
    active: 0,
    paths: [],
    refresh: undefined,
};
function freezeRouteRefresh() {
    debugRouteCache.active++;
    return () => {
        var _a;
        debugRouteCache.active--;
        if (!debugRouteCache.active) {
            (_a = debugRouteCache.refresh) === null || _a === void 0 ? void 0 : _a.call(debugRouteCache, (s) => s + 1);
        }
    };
}
const DebugRouteSwitch = ({ paths, NotFound }) => {
    const [_, triggerChange] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        debugRouteCache.refresh = triggerChange;
        return () => {
            debugRouteCache.refresh = undefined;
        };
    }, []);
    if (!debugRouteCache.active) {
        debugRouteCache.paths = paths;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
        debugRouteCache.paths.map(({ path, Component }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, key: path, path: path, component: Component }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: NotFound })));
};
//# sourceMappingURL=DebugRouteSwitch.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/DebugTracker.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/DebugTracker.js ***!
  \************************************************************/
/*! exports provided: DebugTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugTracker", function() { return DebugTracker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./node_modules/piral-debug-utils/esm/state.js");



const DebugTracker = () => {
    const route = Object(_state__WEBPACK_IMPORTED_MODULE_2__["useDebugState"])((s) => s.route);
    const history = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (route) {
            history.push(route.path, route.state);
        }
    }, [route]);
    // tslint:disable-next-line:no-null-keyword
    return null;
};
//# sourceMappingURL=DebugTracker.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/ExtensionCatalogue.js":
/*!******************************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/ExtensionCatalogue.js ***!
  \******************************************************************/
/*! exports provided: ExtensionCatalogue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionCatalogue", function() { return ExtensionCatalogue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


const ExtensionCatalogue = () => {
    const { state } = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
    if (state) {
        const { name = '', params = {} } = state;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("piral-extension", { name: name, params: JSON.stringify(params) });
    }
    return null;
};
//# sourceMappingURL=ExtensionCatalogue.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/VisualizationWrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/VisualizationWrapper.js ***!
  \********************************************************************/
/*! exports provided: VisualizationWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationWrapper", function() { return VisualizationWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./node_modules/piral-debug-utils/esm/state.js");


const moduleColor = {};
const Visualizer = ({ pilet, force, active }) => {
    const colors = [
        '#001F3F',
        '#0074D9',
        '#7FDBFF',
        '#39CCCC',
        '#3D9970',
        '#2ECC40',
        '#01FF70',
        '#FFDC00',
        '#FF851B',
        '#FF4136',
        '#85144B',
        '#F012BE',
        '#B10DC9',
    ];
    const container = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    const color = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => moduleColor[pilet] || (moduleColor[pilet] = colors[Object.keys(moduleColor).length % colors.length]), [pilet]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        let sibling = container.current && container.current.nextElementSibling;
        if (sibling && active) {
            const target = container.current.parentNode;
            const mouseIn = () => {
                if (container.current && sibling) {
                    const style = container.current.style;
                    style.display = 'block';
                    style.left = '0px';
                    style.top = '0px';
                    style.bottom = '0px';
                    style.right = '0px';
                    const targetRect = sibling.getBoundingClientRect();
                    const sourceRect = container.current.getBoundingClientRect();
                    style.left = targetRect.left - sourceRect.left + 'px';
                    style.top = targetRect.top - sourceRect.top + 'px';
                    style.bottom = -(targetRect.bottom - sourceRect.bottom) + 'px';
                    style.right = -(targetRect.right - sourceRect.right) + 'px';
                }
            };
            const mouseOut = () => {
                if (container.current) {
                    const style = container.current.style;
                    style.display = 'none';
                }
            };
            const append = () => {
                if (force) {
                    mouseIn();
                }
                else if (sibling) {
                    sibling.addEventListener('mouseover', mouseIn);
                    sibling.addEventListener('mouseout', mouseOut);
                }
            };
            const remove = () => {
                if (force) {
                    mouseOut();
                }
                else if (sibling) {
                    sibling.removeEventListener('mouseover', mouseIn);
                    sibling.removeEventListener('mouseout', mouseOut);
                }
            };
            const observer = new MutationObserver(() => {
                var _a;
                const newSibling = (_a = container.current) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
                if (newSibling !== sibling) {
                    remove();
                    sibling = newSibling;
                    append();
                }
            });
            append();
            observer.observe(target, { childList: true });
            return () => {
                remove();
                observer.disconnect();
            };
        }
    }, [active, force]);
    if (active) {
        const rect = {
            border: '1px solid red',
            display: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 99999999999,
            pointerEvents: 'none',
            borderColor: color,
        };
        const info = {
            color: 'white',
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: '8px',
            background: color,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: rect, ref: container },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: info }, pilet)));
    }
    // tslint:disable-next-line:no-null-keyword
    return null;
};
const VisualizationWrapper = ({ piral, children }) => {
    const { active, force } = Object(_state__WEBPACK_IMPORTED_MODULE_1__["useDebugState"])((m) => m.visualize);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Visualizer, { pilet: piral.meta.name, force: force, active: active }),
        children));
};
//# sourceMappingURL=VisualizationWrapper.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/debug.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/debug.js ***!
  \*****************************************************/
/*! exports provided: installPiralDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installPiralDebug", function() { return installPiralDebug; });
/* harmony import */ var _DebugTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DebugTracker */ "./node_modules/piral-debug-utils/esm/DebugTracker.js");
/* harmony import */ var _VisualizationWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisualizationWrapper */ "./node_modules/piral-debug-utils/esm/VisualizationWrapper.js");
/* harmony import */ var _ExtensionCatalogue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionCatalogue */ "./node_modules/piral-debug-utils/esm/ExtensionCatalogue.js");
/* harmony import */ var _decycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decycle */ "./node_modules/piral-debug-utils/esm/decycle.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./node_modules/piral-debug-utils/esm/state.js");





function installPiralDebug(options) {
    const { injectPilet, getGlobalState, getExtensions, getDependencies, getRoutes, getPilets, setPilets, fireEvent, integrate, createApi, loadPilet, customSettings = {}, } = options;
    const events = [];
    const legacyBrowser = !new Error().stack;
    const excludedRoutes = [_state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].cataloguePath];
    const selfSource = 'piral-debug-api';
    const debugApiVersion = 'v1';
    const settings = Object.assign(Object.assign({}, customSettings), { viewState: {
            value: _state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].viewState,
            type: 'boolean',
            label: 'State container logging',
            onChange(value) {
                sessionStorage.setItem('dbg:view-state', value ? 'on' : 'off');
            },
        }, loadPilets: {
            value: _state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].loadPilets,
            type: 'boolean',
            label: 'Load available pilets',
            onChange(value) {
                sessionStorage.setItem('dbg:load-pilets', value ? 'on' : 'off');
            },
        }, hardRefresh: {
            value: _state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].hardRefresh,
            type: 'boolean',
            label: 'Full refresh on change',
            onChange(value) {
                sessionStorage.setItem('dbg:hard-refresh', value ? 'on' : 'off');
            },
        }, viewOrigins: {
            value: _state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].viewOrigins,
            type: 'boolean',
            label: 'Visualize component origins',
            onChange(value, prev) {
                sessionStorage.setItem('dbg:view-origins', value ? 'on' : 'off');
                if (prev !== value) {
                    updateVisualize(value);
                }
            },
        }, extensionCatalogue: {
            value: _state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].extensionCatalogue,
            type: 'boolean',
            label: 'Enable extension catalogue',
            onChange(value) {
                sessionStorage.setItem('dbg:extension-catalogue', value ? 'on' : 'off');
            },
        } });
    const sendMessage = (content) => {
        window.postMessage({
            content,
            source: selfSource,
            version: debugApiVersion,
        }, '*');
    };
    const getSettings = () => {
        return Object.keys(settings).reduce((obj, key) => {
            const setting = settings[key];
            if (setting &&
                typeof setting === 'object' &&
                typeof setting.label === 'string' &&
                typeof setting.type === 'string' &&
                ['boolean', 'string', 'number'].includes(typeof setting.value)) {
                obj[key] = {
                    label: setting.label,
                    value: setting.value,
                    type: setting.type,
                };
            }
            return obj;
        }, {});
    };
    const updateSettings = (values) => {
        Object.keys(values).forEach((key) => {
            const setting = settings[key];
            switch (setting.type) {
                case 'boolean': {
                    const prev = setting.value;
                    const value = values[key];
                    setting.value = value;
                    setting.onChange(value, prev);
                    break;
                }
                case 'number': {
                    const prev = setting.value;
                    const value = values[key];
                    setting.value = value;
                    setting.onChange(value, prev);
                    break;
                }
                case 'string': {
                    const prev = setting.value;
                    const value = values[key];
                    setting.value = value;
                    setting.onChange(value, prev);
                    break;
                }
            }
        });
        sendMessage({
            settings: getSettings(),
            type: 'settings',
        });
    };
    const activatePilet = (pilet) => {
        try {
            const { createApi } = options;
            const newApi = createApi(pilet);
            injectPilet(pilet);
            pilet.setup(newApi);
        }
        catch (error) {
            console.error(error);
        }
    };
    const togglePilet = (name) => {
        const pilet = getPilets().find((m) => m.name === name);
        if (!pilet) {
            // nothing to do, obviously invalid call
        }
        else if (pilet.disabled) {
            if (pilet.original) {
                // everything is fine, let's use the cached version
                activatePilet(pilet.original);
            }
            else {
                // something fishy is going on - let's just try to activate the same pilet
                activatePilet(Object.assign(Object.assign({}, pilet), { disabled: false }));
            }
        }
        else {
            injectPilet({ name, disabled: true, original: pilet });
        }
    };
    const removePilet = (name) => {
        const pilets = getPilets().filter((m) => m.name !== name);
        injectPilet({ name });
        setPilets(pilets);
    };
    const appendPilet = (meta) => {
        const { loadPilet } = options;
        loadPilet(meta).then(activatePilet);
    };
    const toggleVisualize = () => {
        Object(_state__WEBPACK_IMPORTED_MODULE_4__["setState"])((s) => (Object.assign(Object.assign({}, s), { visualize: Object.assign(Object.assign({}, s.visualize), { force: !s.visualize.force }) })));
    };
    const updateVisualize = (active) => {
        Object(_state__WEBPACK_IMPORTED_MODULE_4__["setState"])((s) => (Object.assign(Object.assign({}, s), { visualize: Object.assign(Object.assign({}, s.visualize), { active }) })));
    };
    const goToRoute = (path, state) => {
        Object(_state__WEBPACK_IMPORTED_MODULE_4__["setState"])((s) => (Object.assign(Object.assign({}, s), { route: {
                path,
                state,
            } })));
    };
    const eventDispatcher = document.body.dispatchEvent;
    const systemResolve = System.constructor.prototype.resolve;
    const depMap = {};
    System.constructor.prototype.resolve = function (...args) {
        const [url, parent] = args;
        const result = systemResolve.call(this, ...args);
        if (parent) {
            const deps = depMap[parent] || {};
            deps[url] = result;
            depMap[parent] = deps;
        }
        return result;
    };
    const debugApi = {
        debug: debugApiVersion,
        instance: {
            name: "my-app",
            version: "1.0.0",
            dependencies: "@angular/common,@angular/common/http,@angular/compiler,@angular/core,@angular/forms,@angular/platform-browser,@angular/platform-browser-dynamic,@angular/router,piral-ng/common,rxjs,react,react-dom,react-router,react-router-dom,history,tslib,path-to-regexp,@libre/atom,@dbeining/react-atom",
        },
        build: {
            date: "2022-05-20T10:21:19.477Z",
            cli: "0.14.24",
            compat: "0.14",
        },
        pilets: {
            loadPilet,
            createApi,
        },
    };
    const details = {
        name: debugApi.instance.name,
        version: debugApi.instance.version,
        kind: debugApiVersion,
        mode:  false ? undefined : 'development',
        capabilities: [
            'events',
            'container',
            'routes',
            'pilets',
            'settings',
            'extensions',
            'dependencies',
            'dependency-map',
        ],
    };
    const start = () => {
        const container = Object(_decycle__WEBPACK_IMPORTED_MODULE_3__["decycle"])(getGlobalState());
        const routes = getRoutes().filter((r) => !excludedRoutes.includes(r));
        const extensions = getExtensions();
        const settings = getSettings();
        const dependencies = getDependencies();
        const pilets = getPilets().map((pilet) => ({
            name: pilet.name,
            version: pilet.version,
            disabled: pilet.disabled,
        }));
        sendMessage(Object.assign(Object.assign({ type: 'available' }, details), { state: {
                routes,
                pilets,
                container,
                settings,
                events,
                extensions,
                dependencies,
            } }));
    };
    const check = () => {
        sendMessage(Object.assign({ type: 'info' }, details));
    };
    const getDependencyMap = () => {
        const dependencyMap = {};
        const addDeps = (pilet, dependencies) => {
            const deps = dependencyMap[pilet] || [];
            for (const depName of Object.keys(dependencies)) {
                if (!deps.some((m) => m.demanded === depName)) {
                    deps.push({
                        demanded: depName,
                        resolved: dependencies[depName],
                    });
                }
            }
            dependencyMap[pilet] = deps;
        };
        const pilets = getPilets()
            .map((pilet) => ({
            name: pilet.name,
            link: pilet.link,
            base: pilet.base,
        }))
            .filter((m) => m.link);
        Object.keys(depMap).forEach((url) => {
            const dependencies = depMap[url];
            const pilet = pilets.find((p) => p.link === url);
            if (pilet) {
                addDeps(pilet.name, dependencies);
            }
            else if (!pilet) {
                const parent = pilets.find((p) => url.startsWith(p.base));
                if (parent) {
                    addDeps(parent.name, dependencies);
                }
            }
        });
        sendMessage({
            type: 'dependency-map',
            dependencyMap,
        });
    };
    document.body.dispatchEvent = function (ev) {
        if (ev.type.startsWith('piral-')) {
            events.unshift({
                id: events.length.toString(),
                name: ev.type.replace('piral-', ''),
                args: Object(_decycle__WEBPACK_IMPORTED_MODULE_3__["decycle"])(ev.detail.arg),
                time: Date.now(),
            });
            sendMessage({
                events,
                type: 'events',
            });
        }
        return eventDispatcher.call(this, ev);
    };
    window.addEventListener('storage', (event) => {
        if (!legacyBrowser && event.storageArea === sessionStorage) {
            // potentially unknowingly updated settings
            updateSettings({
                viewState: sessionStorage.getItem('dbg:view-state') !== 'off',
                loadPilets: sessionStorage.getItem('dbg:load-pilets') === 'on',
                hardRefresh: sessionStorage.getItem('dbg:hard-refresh') === 'on',
                viewOrigins: sessionStorage.getItem('dbg:view-origins') === 'on',
                extensionCatalogue: sessionStorage.getItem('dbg:extension-catalogue') !== 'off',
            });
        }
    });
    window.addEventListener('message', (event) => {
        const { source, version, content } = event.data;
        if (source !== selfSource && version === debugApiVersion) {
            switch (content.type) {
                case 'init':
                    return start();
                case 'check-piral':
                    return check();
                case 'get-dependency-map':
                    return getDependencyMap();
                case 'update-settings':
                    return updateSettings(content.settings);
                case 'append-pilet':
                    return appendPilet(content.meta);
                case 'remove-pilet':
                    return removePilet(content.name);
                case 'toggle-pilet':
                    return togglePilet(content.name);
                case 'emit-event':
                    return fireEvent(content.name, content.args);
                case 'goto-route':
                    return goToRoute(content.route, content.state);
                case 'visualize-all':
                    return toggleVisualize();
            }
        }
    });
    integrate({
        components: {
            Debug: _DebugTracker__WEBPACK_IMPORTED_MODULE_0__["DebugTracker"],
        },
        routes: {
            [_state__WEBPACK_IMPORTED_MODULE_4__["initialSettings"].cataloguePath]: _ExtensionCatalogue__WEBPACK_IMPORTED_MODULE_2__["ExtensionCatalogue"],
        },
        wrappers: {
            '*': _VisualizationWrapper__WEBPACK_IMPORTED_MODULE_1__["VisualizationWrapper"],
        },
        onChange(previous, current, changed) {
            if (changed.state) {
                if (settings.viewState.value) {
                    if (!legacyBrowser) {
                        // Chrome, Firefox, ... (full capability)
                        const err = new Error();
                        const lastLine = err.stack.split('\n')[7];
                        if (lastLine) {
                            const action = lastLine.replace(/^\s+at\s+(Atom\.|Object\.)?/, '');
                            console.group(`%c Piral State Change %c ${new Date().toLocaleTimeString()}`, 'color: gray; font-weight: lighter;', 'color: black; font-weight: bold;');
                            console.log('%c Previous', `color: #9E9E9E; font-weight: bold`, previous);
                            console.log('%c Action', `color: #03A9F4; font-weight: bold`, action);
                            console.log('%c Next', `color: #4CAF50; font-weight: bold`, current);
                            console.groupEnd();
                        }
                    }
                    else {
                        // IE 11, ... (does not know colors etc.)
                        console.log('Changed state', previous, current);
                    }
                }
                sendMessage({
                    type: 'container',
                    container: Object(_decycle__WEBPACK_IMPORTED_MODULE_3__["decycle"])(getGlobalState()),
                });
            }
            if (changed.pilets) {
                sendMessage({
                    type: 'pilets',
                    pilets: getPilets().map((pilet) => ({
                        name: pilet.name,
                        version: pilet.version,
                        disabled: !!pilet.disabled,
                    })),
                });
            }
            if (changed.pages) {
                sendMessage({
                    type: 'routes',
                    routes: getRoutes().filter((r) => !excludedRoutes.includes(r)),
                });
            }
            if (changed.extensions) {
                sendMessage({
                    type: 'extensions',
                    extensions: getExtensions(),
                });
            }
            if (changed.dependencies) {
                sendMessage({
                    type: 'dependencies',
                    dependencies: getDependencies(),
                });
            }
        },
    });
    window['dbg:piral'] = debugApi;
    start();
}
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/decycle.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/decycle.js ***!
  \*******************************************************/
/*! exports provided: decycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decycle", function() { return decycle; });
function decycle(obj) {
    const objects = [];
    const paths = [];
    const derez = (value, path) => {
        const _value = value && value.toJSON instanceof Function ? value.toJSON() : value;
        if (_value === null || _value === undefined) {
            return undefined;
        }
        else if (typeof _value === 'function') {
            return `<function>`;
        }
        else if (_value instanceof Error) {
            return `<error>`;
        }
        else if (_value instanceof Node) {
            return `<node>`;
        }
        else if (typeof _value === 'object') {
            for (let i = 0; i < objects.length; i++) {
                if (objects[i] === _value) {
                    return { $ref: paths[i] };
                }
            }
            objects.push(_value);
            paths.push(path);
            if (Array.isArray(_value)) {
                const nu = [];
                for (let i = 0; i < _value.length; i += 1) {
                    nu[i] = derez(_value[i], `${path}[${i}]`);
                }
                return nu;
            }
            else {
                const nu = {};
                for (const name in _value) {
                    if (Object.prototype.hasOwnProperty.call(_value, name)) {
                        nu[name] = derez(_value[name], `${path}[${JSON.stringify(name)}]`);
                    }
                }
                return nu;
            }
        }
        else if (typeof _value === 'symbol') {
            return '<symbol>';
        }
        else if (typeof _value === 'bigint') {
            return '<bigint>';
        }
        return _value;
    };
    return derez(obj, '$');
}
//# sourceMappingURL=decycle.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/emulator.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/emulator.js ***!
  \********************************************************/
/*! exports provided: withEmulatorPilets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmulatorPilets", function() { return withEmulatorPilets; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _DebugRouteSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebugRouteSwitch */ "./node_modules/piral-debug-utils/esm/DebugRouteSwitch.js");


function withEmulatorPilets(requestPilets, options) {
    const { loadPilet, createApi, injectPilet, integrate, piletApiFallback = '/$pilet-api' } = options;
    // check if pilets should be loaded
    const loadPilets = sessionStorage.getItem('dbg:load-pilets') === 'on';
    const noPilets = () => Promise.resolve([]);
    const requester = loadPilets ? requestPilets : noPilets;
    integrate === null || integrate === void 0 ? void 0 : integrate({
        components: {
            RouteSwitch: _DebugRouteSwitch__WEBPACK_IMPORTED_MODULE_1__["DebugRouteSwitch"],
        },
    });
    return () => {
        const promise = requester();
        // the window['dbg:pilet-api'] should point to an API address used as a proxy, fall back to '/$pilet-api' if unavailable
        const piletApi = window['dbg:pilet-api'] || piletApiFallback;
        // either take a full URI or make it an absolute path relative to the current origin
        const initialTarget = /^https?:/.test(piletApi)
            ? piletApi
            : `${location.origin}${piletApi[0] === '/' ? '' : '/'}${piletApi}`;
        const updateTarget = initialTarget.replace('http', 'ws');
        const ws = new WebSocket(updateTarget);
        const timeoutCache = {};
        const timeout = 150;
        const appendix = fetch(initialTarget)
            .then((res) => res.json())
            .then((item) => (Array.isArray(item) ? item : [item]));
        ws.onmessage = ({ data }) => {
            const hardRefresh = sessionStorage.getItem('dbg:hard-refresh') === 'on';
            if (!hardRefresh) {
                // standard setting is to just perform an inject
                const meta = JSON.parse(data);
                const name = meta.name;
                // like a debounce; only one change of the current pilet should be actively processed
                clearTimeout(timeoutCache[name]);
                // some bundlers may have fired before writing to the disk
                // so we give them a bit of time before actually loading the pilet
                timeoutCache[name] = setTimeout(() => {
                    // we should make sure to only refresh the page / router if pilets have been loaded
                    const unfreeze = Object(_DebugRouteSwitch__WEBPACK_IMPORTED_MODULE_1__["freezeRouteRefresh"])();
                    // tear down pilet
                    injectPilet({ name });
                    // load and evaluate pilet
                    loadPilet(meta).then((pilet) => {
                        try {
                            if (Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(injectPilet)) {
                                injectPilet(pilet);
                            }
                            // setup actual pilet
                            Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["setupPilet"])(pilet, createApi);
                            // disable route cache, should be zero again and lead to route refresh
                            unfreeze();
                        }
                        catch (error) {
                            console.error(error);
                        }
                    });
                }, timeout);
            }
            else {
                location.reload();
            }
        };
        return promise
            .catch((err) => {
            console.error(`Requesting the pilets failed. We'll continue loading without pilets (DEBUG only).`, err);
            return [];
        })
            .then((pilets) => appendix.then((debugPilets) => {
            const debugPiletNames = debugPilets.map((m) => m.name);
            const feedPilets = pilets.filter((m) => !debugPiletNames.includes(m.name));
            return [...feedPilets, ...debugPilets];
        }));
    };
}
//# sourceMappingURL=emulator.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/index.js ***!
  \*****************************************************/
/*! exports provided: installPiralDebug, withEmulatorPilets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./node_modules/piral-debug-utils/esm/debug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installPiralDebug", function() { return _debug__WEBPACK_IMPORTED_MODULE_0__["installPiralDebug"]; });

/* harmony import */ var _emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emulator */ "./node_modules/piral-debug-utils/esm/emulator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmulatorPilets", function() { return _emulator__WEBPACK_IMPORTED_MODULE_1__["withEmulatorPilets"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/piral-debug-utils/esm/types.js");
/* empty/unused harmony star reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/state.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/state.js ***!
  \*****************************************************/
/*! exports provided: initialSettings, setState, getState, subscribe, useDebugState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSettings", function() { return initialSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugState", function() { return useDebugState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialSettings = {
    viewState: sessionStorage.getItem('dbg:view-state') !== 'off',
    loadPilets: sessionStorage.getItem('dbg:load-pilets') === 'on',
    hardRefresh: sessionStorage.getItem('dbg:hard-refresh') === 'on',
    viewOrigins: sessionStorage.getItem('dbg:view-origins') === 'on',
    extensionCatalogue: sessionStorage.getItem('dbg:extension-catalogue') !== 'off',
    cataloguePath: '/$debug-extension-catalogue',
};
const listeners = [];
let state = {
    visualize: {
        active: initialSettings.viewOrigins,
        force: false,
    },
    catalogue: {
        active: initialSettings.extensionCatalogue,
        path: initialSettings.cataloguePath,
    },
    route: undefined,
};
function setState(dispatch) {
    const newState = dispatch(state);
    if (newState !== state) {
        state = newState;
        listeners.forEach((listener) => listener());
    }
}
function getState() {
    return state;
}
function subscribe(select, notify) {
    let prevState = select(state);
    const cb = () => {
        const nextState = select(state);
        if (prevState !== nextState) {
            prevState = nextState;
            notify(nextState);
        }
    };
    const unsubscribe = () => {
        const idx = listeners.indexOf(cb);
        if (idx !== -1) {
            listeners.splice(idx, 1);
        }
    };
    listeners.push(cb);
    return unsubscribe;
}
function useDebugState(select) {
    const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => select(getState()));
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => subscribe(select, setState), []);
    return state;
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/piral-debug-utils/esm/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-debug-utils/esm/types.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/create.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-ext/esm/create.js ***!
  \**********************************************/
/*! exports provided: createStandardApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStandardApi", function() { return createStandardApi; });
/* harmony import */ var piral_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-translate */ "./node_modules/piral-translate/esm/index.js");
/* harmony import */ var piral_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-dashboard */ "./node_modules/piral-dashboard/esm/index.js");
/* harmony import */ var piral_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-menu */ "./node_modules/piral-menu/esm/index.js");
/* harmony import */ var piral_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-notifications */ "./node_modules/piral-notifications/esm/index.js");
/* harmony import */ var piral_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-modals */ "./node_modules/piral-modals/esm/index.js");
/* harmony import */ var piral_feeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-feeds */ "./node_modules/piral-feeds/esm/index.js");






/**
 * Creates an array including all standard APIs from piral-ext.
 * @param settings Customizes the standard plugin settings.
 */
function createStandardApi(settings = {}) {
    const { locale = undefined, dashboard = undefined, menu = undefined, notifications = undefined, modals = undefined, feeds = undefined, } = settings;
    return [
        locale !== false && Object(piral_translate__WEBPACK_IMPORTED_MODULE_0__["createLocaleApi"])(locale),
        dashboard !== false && Object(piral_dashboard__WEBPACK_IMPORTED_MODULE_1__["createDashboardApi"])(dashboard),
        menu !== false && Object(piral_menu__WEBPACK_IMPORTED_MODULE_2__["createMenuApi"])(menu),
        notifications !== false && Object(piral_notifications__WEBPACK_IMPORTED_MODULE_3__["createNotificationsApi"])(notifications),
        modals !== false && Object(piral_modals__WEBPACK_IMPORTED_MODULE_4__["createModalsApi"])(modals),
        feeds !== false && Object(piral_feeds__WEBPACK_IMPORTED_MODULE_5__["createFeedsApi"])(feeds),
    ].filter(Boolean);
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-ext/esm/index.js ***!
  \*********************************************/
/*! exports provided: createStandardApi, PiralLanguagesPicker, setupLocalizer, createLocaleApi, getUserLocale, useDynamicLanguage, useTranslate, Languages, createDashboardApi, PiralDashboardContainer, PiralDashboardTile, Dashboard, createFeedsApi, useFeed, withFeed, createMenuApi, PiralMenuContainer, PiralMenuItem, Menu, createModalsApi, PiralModalsHost, PiralModalsDialog, Modals, createNotificationsApi, PiralNotificationsHost, PiralNotificationsToast, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-ext/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStandardApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createStandardApi"]; });

/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs */ "./node_modules/piral-ext/esm/libs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLanguagesPicker", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralLanguagesPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLocalizer", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["setupLocalizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocaleApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createLocaleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["getUserLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDynamicLanguage", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["useDynamicLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTranslate", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["useTranslate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["Languages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDashboardApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createDashboardApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardContainer", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardTile", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardTile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["Dashboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFeedsApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createFeedsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFeed", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["useFeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFeed", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["withFeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMenuApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createMenuApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuContainer", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralMenuContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuItem", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModalsApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createModalsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsHost", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralModalsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsDialog", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralModalsDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNotificationsApi", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["createNotificationsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsHost", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralNotificationsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsToast", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["PiralNotificationsToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _libs__WEBPACK_IMPORTED_MODULE_1__["Notifications"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/piral-ext/esm/types.js");
/* empty/unused harmony star reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/libs.js":
/*!********************************************!*\
  !*** ./node_modules/piral-ext/esm/libs.js ***!
  \********************************************/
/*! exports provided: PiralLanguagesPicker, setupLocalizer, createLocaleApi, getUserLocale, useDynamicLanguage, useTranslate, Languages, createDashboardApi, PiralDashboardContainer, PiralDashboardTile, Dashboard, createFeedsApi, useFeed, withFeed, createMenuApi, PiralMenuContainer, PiralMenuItem, Menu, createModalsApi, PiralModalsHost, PiralModalsDialog, Modals, createNotificationsApi, PiralNotificationsHost, PiralNotificationsToast, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-translate */ "./node_modules/piral-translate/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLanguagesPicker", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["PiralLanguagesPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLocalizer", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["setupLocalizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocaleApi", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["createLocaleApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["getUserLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDynamicLanguage", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["useDynamicLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTranslate", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["useTranslate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return piral_translate__WEBPACK_IMPORTED_MODULE_0__["Languages"]; });

/* harmony import */ var piral_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-dashboard */ "./node_modules/piral-dashboard/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDashboardApi", function() { return piral_dashboard__WEBPACK_IMPORTED_MODULE_1__["createDashboardApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardContainer", function() { return piral_dashboard__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDashboardTile", function() { return piral_dashboard__WEBPACK_IMPORTED_MODULE_1__["PiralDashboardTile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return piral_dashboard__WEBPACK_IMPORTED_MODULE_1__["Dashboard"]; });

/* harmony import */ var piral_feeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-feeds */ "./node_modules/piral-feeds/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFeedsApi", function() { return piral_feeds__WEBPACK_IMPORTED_MODULE_2__["createFeedsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFeed", function() { return piral_feeds__WEBPACK_IMPORTED_MODULE_2__["useFeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFeed", function() { return piral_feeds__WEBPACK_IMPORTED_MODULE_2__["withFeed"]; });

/* harmony import */ var piral_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral-menu */ "./node_modules/piral-menu/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMenuApi", function() { return piral_menu__WEBPACK_IMPORTED_MODULE_3__["createMenuApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuContainer", function() { return piral_menu__WEBPACK_IMPORTED_MODULE_3__["PiralMenuContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuItem", function() { return piral_menu__WEBPACK_IMPORTED_MODULE_3__["PiralMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return piral_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"]; });

/* harmony import */ var piral_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-modals */ "./node_modules/piral-modals/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModalsApi", function() { return piral_modals__WEBPACK_IMPORTED_MODULE_4__["createModalsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsHost", function() { return piral_modals__WEBPACK_IMPORTED_MODULE_4__["PiralModalsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsDialog", function() { return piral_modals__WEBPACK_IMPORTED_MODULE_4__["PiralModalsDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return piral_modals__WEBPACK_IMPORTED_MODULE_4__["Modals"]; });

/* harmony import */ var piral_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-notifications */ "./node_modules/piral-notifications/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNotificationsApi", function() { return piral_notifications__WEBPACK_IMPORTED_MODULE_5__["createNotificationsApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsHost", function() { return piral_notifications__WEBPACK_IMPORTED_MODULE_5__["PiralNotificationsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsToast", function() { return piral_notifications__WEBPACK_IMPORTED_MODULE_5__["PiralNotificationsToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return piral_notifications__WEBPACK_IMPORTED_MODULE_5__["Notifications"]; });







//# sourceMappingURL=libs.js.map

/***/ }),

/***/ "./node_modules/piral-ext/esm/types.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-ext/esm/types.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/actions.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-feeds/esm/actions.js ***!
  \*************************************************/
/*! exports provided: createFeed, destroyFeed, loadFeed, loadedFeed, updateFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeed", function() { return createFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyFeed", function() { return destroyFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFeed", function() { return loadFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedFeed", function() { return loadedFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFeed", function() { return updateFeed; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function createFeed(ctx, id) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.feeds, id, {
            data: undefined,
            error: undefined,
            loaded: false,
            loading: false,
        }) })));
}
function destroyFeed(ctx, id) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withoutKey"])(state.feeds, id) })));
}
function loadFeed(ctx, options) {
    const { id } = options;
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.feeds, id, {
            data: undefined,
            error: undefined,
            loaded: false,
            loading: true,
        }) })));
    return options.initialize().then((baseData) => {
        loadedFeed(ctx, id, baseData, undefined);
        options.dispose = options.connect((item) => {
            updateFeed(ctx, id, item, options.update);
        });
    }, (err) => loadedFeed(ctx, id, undefined, err));
}
function loadedFeed(ctx, id, data, error) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.feeds, id, {
            loading: false,
            loaded: true,
            error,
            data,
        }) })));
}
function updateFeed(ctx, id, item, reducer) {
    const feed = ctx.readState((state) => state.feeds[id]);
    const result = reducer(feed.data, item);
    if (result instanceof Promise) {
        return result
            .then((data) => loadedFeed(ctx, id, data, undefined))
            .catch((error) => loadedFeed(ctx, id, undefined, error));
    }
    else if (result !== feed.data) {
        loadedFeed(ctx, id, result, undefined);
    }
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/create.js":
/*!************************************************!*\
  !*** ./node_modules/piral-feeds/esm/create.js ***!
  \************************************************/
/*! exports provided: createFeedsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeedsApi", function() { return createFeedsApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-feeds/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _withFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withFeed */ "./node_modules/piral-feeds/esm/withFeed.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-feeds/esm/utils.js");




/**
 * Creates new Pilet API extensions for supporting simplified data feed connections.
 */
function createFeedsApi(config = {}) {
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch((state) => (Object.assign(Object.assign({}, state), { feeds: {} })));
        return (_, target) => {
            let feeds = 0;
            return {
                createConnector(resolver) {
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(target.name, feeds++);
                    const options = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createFeedOptions"])(id, resolver);
                    const invalidate = () => {
                        var _a;
                        (_a = options.dispose) === null || _a === void 0 ? void 0 : _a.call(options);
                        context.createFeed(options.id);
                    };
                    if (options.immediately) {
                        context.loadFeed(options);
                    }
                    else {
                        invalidate();
                    }
                    const connect = ((component) => Object(_withFeed__WEBPACK_IMPORTED_MODULE_2__["withFeed"])(component, options));
                    Object.keys(options.reducers).forEach((type) => {
                        const reducer = options.reducers[type];
                        if (typeof reducer === 'function') {
                            connect[type] = (...args) => {
                                context.updateFeed(id, args, (data, item) => reducer.call(connect, data, ...item));
                            };
                        }
                    });
                    connect.invalidate = invalidate;
                    return connect;
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-feeds/esm/index.js ***!
  \***********************************************/
/*! exports provided: createFeedsApi, useFeed, withFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-feeds/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFeedsApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createFeedsApi"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/piral-feeds/esm/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _useFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useFeed */ "./node_modules/piral-feeds/esm/useFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFeed", function() { return _useFeed__WEBPACK_IMPORTED_MODULE_2__["useFeed"]; });

/* harmony import */ var _withFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withFeed */ "./node_modules/piral-feeds/esm/withFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFeed", function() { return _withFeed__WEBPACK_IMPORTED_MODULE_3__["withFeed"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/types.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-feeds/esm/types.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/useFeed.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-feeds/esm/useFeed.js ***!
  \*************************************************/
/*! exports provided: useFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFeed", function() { return useFeed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


/**
 * Hook that returns the connected feed.
 * @param options The options for retrieving the feed.
 */
function useFeed(options) {
    const { loaded, loading, error, data } = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.feeds[options.id]);
    const load = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useAction"])('loadFeed');
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!loaded && !loading) {
            load(options);
        }
    }, [loaded]);
    return [loaded, data, error];
}
//# sourceMappingURL=useFeed.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-feeds/esm/utils.js ***!
  \***********************************************/
/*! exports provided: createFeedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeedOptions", function() { return createFeedOptions; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");

const noop = () => { };
function createFeedOptions(id, resolver) {
    if (Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(resolver)) {
        return {
            id,
            initialize() {
                return resolver();
            },
            connect() {
                return noop;
            },
            update(data) {
                return Promise.resolve(data);
            },
            immediately: false,
            reducers: {},
        };
    }
    else {
        return {
            id,
            initialize() {
                return resolver.initialize();
            },
            connect(cb) {
                if (typeof resolver.connect === 'function') {
                    return resolver.connect(cb);
                }
                else {
                    return noop;
                }
            },
            update(data, item) {
                if (typeof resolver.update === 'function') {
                    return resolver.update(data, item);
                }
                else {
                    return Promise.resolve(data);
                }
            },
            immediately: resolver.immediately,
            reducers: resolver.reducers || {},
        };
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/piral-feeds/esm/withFeed.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-feeds/esm/withFeed.js ***!
  \**************************************************/
/*! exports provided: withFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFeed", function() { return withFeed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _useFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useFeed */ "./node_modules/piral-feeds/esm/useFeed.js");



function withFeed(Component, options) {
    const FeedView = (props) => {
        const [loaded, data, error] = Object(_useFeed__WEBPACK_IMPORTED_MODULE_2__["useFeed"])(options);
        if (!loaded) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_1__["PiralLoadingIndicator"], null);
        }
        else if (data) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props, { data: data }));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_1__["PiralError"], { type: "feed", error: error });
        }
    };
    FeedView.displayName = `FeedView_${options.id}`;
    return FeedView;
}
//# sourceMappingURL=withFeed.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/Menu.js":
/*!*********************************************!*\
  !*** ./node_modules/piral-menu/esm/Menu.js ***!
  \*********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-menu/esm/components.js");



const Menu = ({ type = 'general' }) => {
    const menuItems = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.registry.menuItems);
    const renderItems = Object.keys(menuItems)
        .filter((name) => menuItems[name].settings.type === type)
        .map((name) => ({
        name,
        Component: menuItems[name].component,
        meta: menuItems[name].settings,
    }));
    const children = renderItems.map(({ name, Component, meta }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralMenuItem"], { key: name, type: type, meta: meta },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, null))));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralMenuContainer"], { type: type }, children);
};
Menu.displayName = 'Menu';
//# sourceMappingURL=Menu.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/actions.js":
/*!************************************************!*\
  !*** ./node_modules/piral-menu/esm/actions.js ***!
  \************************************************/
/*! exports provided: registerMenuItem, unregisterMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMenuItem", function() { return registerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterMenuItem", function() { return unregisterMenuItem; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function registerMenuItem(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { menuItems: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.registry.menuItems, name, value) }) })));
}
function unregisterMenuItem(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { menuItems: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withoutKey"])(state.registry.menuItems, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/components.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-menu/esm/components.js ***!
  \***************************************************/
/*! exports provided: PiralMenuContainer, PiralMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralMenuContainer", function() { return PiralMenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralMenuItem", function() { return PiralMenuItem; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralMenuContainer = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('MenuContainer');
const PiralMenuItem = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('MenuItem');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/create.js":
/*!***********************************************!*\
  !*** ./node_modules/piral-menu/esm/create.js ***!
  \***********************************************/
/*! exports provided: createMenuApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuApi", function() { return createMenuApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-menu/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/piral-menu/esm/default.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./node_modules/piral-menu/esm/Menu.js");




function getSettings(defaultSettings, customSettings = {}) {
    return Object.assign(Object.assign({ type: 'general' }, defaultSettings), customSettings);
}
function getMenuItems(items, defaultSettings) {
    const menuItems = {};
    let i = 0;
    for (const { component, settings } of items) {
        menuItems[`global-${i++}`] = {
            pilet: undefined,
            component,
            settings: getSettings(defaultSettings, settings),
        };
    }
    return menuItems;
}
function withMenu(menuItems) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ MenuContainer: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultContainer"], MenuItem: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultItem"] }, state.components), registry: Object.assign(Object.assign({}, state.registry), { menuItems }) }));
}
/**
 * Creates new Pilet API extensions for integration of menu items.
 */
function createMenuApi(config = {}) {
    const { items = [], defaultSettings = {} } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch(Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withAll"])(withMenu(getMenuItems(items, defaultSettings)), Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withRootExtension"])('piral-menu', _Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"])));
        return (api, target) => {
            const pilet = target.name;
            let next = 0;
            return {
                registerMenu(name, arg, settings) {
                    if (typeof name !== 'string') {
                        settings = arg;
                        arg = name;
                        name = next++;
                    }
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.registerMenuItem(id, {
                        pilet,
                        component: Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withApi"])(context, arg, api, 'menu'),
                        settings: getSettings(defaultSettings, settings),
                    });
                    return () => api.unregisterMenu(name);
                },
                unregisterMenu(name) {
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.unregisterMenuItem(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/default.js":
/*!************************************************!*\
  !*** ./node_modules/piral-menu/esm/default.js ***!
  \************************************************/
/*! exports provided: DefaultContainer, DefaultItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContainer", function() { return DefaultContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultItem", function() { return DefaultItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultContainer = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral_core__WEBPACK_IMPORTED_MODULE_1__["ExtensionSlot"], { name: `menu_${props.type}`, params: props, empty: () => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(props.children, 'default_menu') }));
const DefaultItem = (props) => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-menu/esm/index.js ***!
  \**********************************************/
/*! exports provided: createMenuApi, PiralMenuContainer, PiralMenuItem, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-menu/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMenuApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createMenuApi"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-menu/esm/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuContainer", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralMenuContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralMenuItem", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralMenuItem"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./node_modules/piral-menu/esm/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/piral-menu/esm/types.js");
/* empty/unused harmony star reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-menu/esm/types.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-menu/esm/types.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/Modals.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-modals/esm/Modals.js ***!
  \*************************************************/
/*! exports provided: Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-modals/esm/components.js");



function closeAll(modals) {
    modals.forEach((m) => m.close());
}
function findModal(modals, name) {
    if (name) {
        const [modal] = Object.keys(modals)
            .filter((m) => modals[m].name === name)
            .map((m) => modals[m]);
        return modal;
    }
    return undefined;
}
const Modals = () => {
    const modals = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.registry.modals);
    const dialogs = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.modals);
    const close = () => closeAll(dialogs);
    const children = dialogs
        .map((n) => {
        const reg = modals[n.name] || findModal(modals, n.alternative);
        const Component = reg && reg.component;
        const defaults = reg && reg.defaults;
        const options = Object.assign(Object.assign({}, defaults), n.options);
        return (Component && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralModalsDialog"], Object.assign({}, n, { options: options, defaults: reg.defaults, layout: reg.layout, key: n.name }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { onClose: n.close, options: options }))));
    })
        .filter(Boolean);
    const open = children.length > 0;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralModalsHost"], { open: open, close: close }, children));
};
Modals.displayName = 'Modals';
//# sourceMappingURL=Modals.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/actions.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-modals/esm/actions.js ***!
  \**************************************************/
/*! exports provided: openModal, closeModal, registerModal, unregisterModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerModal", function() { return registerModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterModal", function() { return unregisterModal; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function openModal(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { modals: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["prependItem"])(state.modals, dialog) })));
}
function closeModal(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { modals: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["excludeOn"])(state.modals, (modal) => modal.id === dialog.id) })));
}
function registerModal(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { modals: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.registry.modals, name, value) }) })));
}
function unregisterModal(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { modals: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["withoutKey"])(state.registry.modals, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/components.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-modals/esm/components.js ***!
  \*****************************************************/
/*! exports provided: PiralModalsHost, PiralModalsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralModalsHost", function() { return PiralModalsHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralModalsDialog", function() { return PiralModalsDialog; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralModalsHost = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('ModalsHost');
const PiralModalsDialog = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('ModalsDialog');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/create.js":
/*!*************************************************!*\
  !*** ./node_modules/piral-modals/esm/create.js ***!
  \*************************************************/
/*! exports provided: createModalsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModalsApi", function() { return createModalsApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-modals/esm/actions.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/piral-modals/esm/default.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals */ "./node_modules/piral-modals/esm/Modals.js");




function getModalDialogs(dialogs) {
    const modals = {};
    for (const { name, component, defaults, layout = {} } of dialogs) {
        modals[`global-${name}`] = {
            pilet: undefined,
            name,
            component,
            defaults,
            layout,
        };
    }
    return modals;
}
function withModals(modals) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ ModalsHost: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultHost"], ModalsDialog: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultDialog"] }, state.components), registry: Object.assign(Object.assign({}, state.registry), { modals }), modals: [] }));
}
/**
 * Creates new Pilet API extensions for support modal dialogs.
 */
function createModalsApi(config = {}) {
    const { dialogs = [], selectId = (name) => `${name}-${~~(Math.random() * 10000)}` } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch(Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withAll"])(withModals(getModalDialogs(dialogs)), Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withRootExtension"])('piral-modals', _Modals__WEBPACK_IMPORTED_MODULE_3__["Modals"])));
        return (api, target) => {
            const pilet = target.name;
            return {
                showModal(simpleName, options) {
                    const name = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, simpleName);
                    const dialog = {
                        id: selectId(name),
                        name,
                        alternative: simpleName,
                        options,
                        close() {
                            setTimeout(() => context.closeModal(dialog), 0);
                        },
                    };
                    context.openModal(dialog);
                    return dialog.close;
                },
                registerModal(name, arg, defaults, layout = {}) {
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.registerModal(id, {
                        pilet,
                        name,
                        component: Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["withApi"])(context, arg, api, 'modal'),
                        defaults,
                        layout,
                    });
                    return () => api.unregisterModal(name);
                },
                unregisterModal(name) {
                    const id = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["buildName"])(pilet, name);
                    context.unregisterModal(id);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/default.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-modals/esm/default.js ***!
  \**************************************************/
/*! exports provided: DefaultHost, DefaultDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHost", function() { return DefaultHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDialog", function() { return DefaultDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultHost = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "piral-modals-host", key: "default_modals" }, props.open && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "piral-modals-overlay" }, props.children)));
const DefaultDialog = (props) => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(props.children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/piral-modals/esm/index.js ***!
  \************************************************/
/*! exports provided: createModalsApi, PiralModalsHost, PiralModalsDialog, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-modals/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModalsApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createModalsApi"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-modals/esm/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsHost", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralModalsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralModalsDialog", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralModalsDialog"]; });

/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals */ "./node_modules/piral-modals/esm/Modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _Modals__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/piral-modals/esm/types.js");
/* empty/unused harmony star reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-modals/esm/types.js":
/*!************************************************!*\
  !*** ./node_modules/piral-modals/esm/types.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/Notifications.js":
/*!***************************************************************!*\
  !*** ./node_modules/piral-notifications/esm/Notifications.js ***!
  \***************************************************************/
/*! exports provided: Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return Notifications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-notifications/esm/components.js");



const Notifications = () => {
    const notifications = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.notifications);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralNotificationsHost"], null, notifications.map(({ component: Component, close, options, id }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralNotificationsToast"], { onClose: close, options: options, key: id },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { onClose: close, options: options }))))));
};
Notifications.displayName = 'Notifications';
//# sourceMappingURL=Notifications.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/actions.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/actions.js ***!
  \*********************************************************/
/*! exports provided: openNotification, closeNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNotification", function() { return openNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNotification", function() { return closeNotification; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function openNotification(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { notifications: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["prependItem"])(state.notifications, dialog) })));
}
function closeNotification(ctx, dialog) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { notifications: Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["excludeOn"])(state.notifications, (notification) => notification.id === dialog.id) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/components.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-notifications/esm/components.js ***!
  \************************************************************/
/*! exports provided: PiralNotificationsHost, PiralNotificationsToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsHost", function() { return PiralNotificationsHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsToast", function() { return PiralNotificationsToast; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralNotificationsHost = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('NotificationsHost');
const PiralNotificationsToast = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('NotificationsToast');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/create.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/create.js ***!
  \********************************************************/
/*! exports provided: createNotificationsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotificationsApi", function() { return createNotificationsApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-notifications/esm/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default */ "./node_modules/piral-notifications/esm/default.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notifications */ "./node_modules/piral-notifications/esm/Notifications.js");





function isElement(element) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(element);
}
function toComponent(component) {
    if (typeof component === 'string') {
        const text = component;
        return () => Object(piral_core__WEBPACK_IMPORTED_MODULE_2__["defaultRender"])(text);
    }
    else if (Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(component)) {
        const element = component;
        return () => element;
    }
    return component;
}
function createNotification(context, id, content, defaultOptions, customOptions = {}) {
    const options = Object.assign(Object.assign({}, defaultOptions), customOptions);
    const notification = {
        id,
        component: toComponent(content),
        options,
        close() {
            setTimeout(() => context.closeNotification(notification), 0);
        },
    };
    if (typeof options.autoClose === 'number' && options.autoClose > 0) {
        setTimeout(notification.close, options.autoClose);
    }
    return notification;
}
function getNotifications(context, messages, defaultOptions) {
    const notifications = [];
    let i = 0;
    for (const { content, options } of messages) {
        notifications.push(createNotification(context, `global-${i++}`, content, defaultOptions, options));
    }
    return notifications;
}
function withNotifications(notifications) {
    return (state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ NotificationsHost: _default__WEBPACK_IMPORTED_MODULE_3__["DefaultHost"], NotificationsToast: _default__WEBPACK_IMPORTED_MODULE_3__["DefaultToast"] }, state.components), notifications }));
}
/**
 * Creates new Pilet API extensions for showing notifications.
 */
function createNotificationsApi(config = {}) {
    const { defaultOptions = {}, selectId = () => `${~~(Math.random() * 10000)}`, messages = [] } = config;
    return (context) => {
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_0__);
        context.dispatch(Object(piral_core__WEBPACK_IMPORTED_MODULE_2__["withAll"])(withNotifications(getNotifications(context, messages, defaultOptions)), Object(piral_core__WEBPACK_IMPORTED_MODULE_2__["withRootExtension"])('piral-notifications', _Notifications__WEBPACK_IMPORTED_MODULE_4__["Notifications"])));
        return (api) => ({
            showNotification(content, customOptions) {
                const Component = typeof content === 'string'
                    ? content
                    : isElement(content)
                        ? content
                        : Object(piral_core__WEBPACK_IMPORTED_MODULE_2__["withApi"])(context, content, api, 'extension');
                const notification = createNotification(context, selectId(), Component, defaultOptions, customOptions);
                context.openNotification(notification);
                return notification.close;
            },
        });
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-notifications/esm/default.js ***!
  \*********************************************************/
/*! exports provided: DefaultHost, DefaultToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHost", function() { return DefaultHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultToast", function() { return DefaultToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


const DefaultHost = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "piral-notifications-host", key: "default_notifications" }, props.children));
const DefaultToast = ({ children }) => Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(children);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-notifications/esm/index.js ***!
  \*******************************************************/
/*! exports provided: createNotificationsApi, PiralNotificationsHost, PiralNotificationsToast, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/piral-notifications/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNotificationsApi", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["createNotificationsApi"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-notifications/esm/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsHost", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralNotificationsHost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralNotificationsToast", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["PiralNotificationsToast"]; });

/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./node_modules/piral-notifications/esm/Notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _Notifications__WEBPACK_IMPORTED_MODULE_2__["Notifications"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/piral-notifications/esm/types.js");
/* empty/unused harmony star reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-notifications/esm/types.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-notifications/esm/types.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/Languages.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-translate/esm/Languages.js ***!
  \*******************************************************/
/*! exports provided: Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-translate/esm/components.js");



const Languages = () => {
    const { available, selected } = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((m) => m.language);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralLanguagesPicker"], { selected: selected, available: available });
};
//# sourceMappingURL=Languages.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/actions.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/actions.js ***!
  \*****************************************************/
/*! exports provided: createActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return createActions; });
function createActions(localizer) {
    return {
        selectLanguage(ctx, selected) {
            ctx.dispatch((state) => {
                localizer.language = selected;
                const previousLanguage = state.language.selected;
                const currentLanguage = selected;
                // emit this event *after* we changed the state container
                setTimeout(() => {
                    ctx.emit('select-language', {
                        previousLanguage,
                        currentLanguage,
                    });
                }, 0);
                return Object.assign(Object.assign({}, state), { language: Object.assign(Object.assign({}, state.language), { loading: selected === undefined, selected }) });
            });
        },
        translate(_, key, variables) {
            return localizer && localizer.localizeGlobal(key, variables);
        },
        setTranslations(ctx, language, data) {
            localizer.messages[language] = data.global;
            for (const item of data.locals) {
                const api = ctx.apis[item.name];
                if (api) {
                    const translations = api.getTranslations();
                    translations[language] = item.value;
                    api.setTranslations(translations);
                }
            }
        },
        getTranslations(ctx, language) {
            return {
                global: localizer.messages[language],
                locals: Object.keys(ctx.apis).map((name) => ({
                    name,
                    value: ctx.apis[name].getTranslations()[language],
                })),
            };
        },
    };
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/components.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-translate/esm/components.js ***!
  \********************************************************/
/*! exports provided: PiralLanguagesPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralLanguagesPicker", function() { return PiralLanguagesPicker; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const PiralLanguagesPicker = Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"])('LanguagesPicker');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/create.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-translate/esm/create.js ***!
  \****************************************************/
/*! exports provided: setupLocalizer, createLocaleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLocalizer", function() { return setupLocalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocaleApi", function() { return createLocaleApi; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-translate/esm/actions.js");
/* harmony import */ var _localize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localize */ "./node_modules/piral-translate/esm/localize.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/piral-translate/esm/default.js");



/**
 * Sets up a new localizer by using the given config.
 * @param config The configuration for the new localizer.
 */
function setupLocalizer(config = {}) {
    const msgs = config.messages || {};
    const languages = Object.keys(msgs);
    const defaultLang = languages[0] || 'en';
    const computeLang = config.language;
    const usedLang = typeof computeLang === 'function' ? computeLang(languages, defaultLang, 'en') : computeLang;
    const language = usedLang || defaultLang;
    return new _localize__WEBPACK_IMPORTED_MODULE_1__["Localizer"](msgs, language, languages.length ? languages : [language], config.fallback);
}
/**
 * Creates new Pilet API extensions for localization.
 * @param localizer The specific localizer to be used, if any.
 */
function createLocaleApi(localizer = setupLocalizer()) {
    return (context) => {
        context.defineActions(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["createActions"])(localizer));
        context.dispatch((state) => (Object.assign(Object.assign({}, state), { components: Object.assign({ LanguagesPicker: _default__WEBPACK_IMPORTED_MODULE_2__["DefaultPicker"] }, state.components), language: {
                loading: false,
                available: localizer.languages,
                selected: localizer.language,
            } })));
        return (api) => {
            let localTranslations = {};
            return {
                getCurrentLanguage(cb) {
                    const selected = context.readState((s) => s.language.selected);
                    if (cb) {
                        cb(selected);
                        const handler = (ev) => {
                            cb(ev.currentLanguage);
                        };
                        api.on('select-language', handler);
                        return () => api.off('select-language', handler);
                    }
                    return selected;
                },
                setTranslations(messages) {
                    localTranslations = messages;
                },
                getTranslations() {
                    return localTranslations;
                },
                translate(tag, variables) {
                    return localizer.localizeLocal(localTranslations, tag, variables);
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/current.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/current.js ***!
  \*****************************************************/
/*! exports provided: getUserLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return getUserLocale; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

function getUserLocaleUnchecked(defaultLocale, remoteLocale) {
    const storedLocale = piral_core__WEBPACK_IMPORTED_MODULE_0__["cookie"].getItem('_culture') || piral_core__WEBPACK_IMPORTED_MODULE_0__["storage"].getItem('locale');
    if (storedLocale) {
        return storedLocale;
    }
    else if (remoteLocale) {
        return remoteLocale.toLowerCase().substring(0, 2);
    }
    else if (navigator.language) {
        return navigator.language.substring(0, 2);
    }
    return defaultLocale;
}
function getUserLocale(availableLocales, defaultLocale, fallbackLocale) {
    const selected = getUserLocaleUnchecked(defaultLocale, fallbackLocale || '');
    if (availableLocales.indexOf(selected) !== -1) {
        return selected;
    }
    return defaultLocale;
}
//# sourceMappingURL=current.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/default.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-translate/esm/default.js ***!
  \*****************************************************/
/*! exports provided: DefaultPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPicker", function() { return DefaultPicker; });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");

const DefaultPicker = (props) => Object(piral_core__WEBPACK_IMPORTED_MODULE_0__["defaultRender"])(undefined);
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/hooks.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/hooks.js ***!
  \***************************************************/
/*! exports provided: useDynamicLanguage, useTranslate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDynamicLanguage", function() { return useDynamicLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslate", function() { return useTranslate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");


function useDynamicLanguage(defaultSelected, load) {
    const [selected, setSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSelected);
    const { selectLanguage, setTranslations, getTranslations } = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useActions"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        let active = true;
        const current = getTranslations(selected);
        selectLanguage(undefined);
        load(selected, current).then((result) => {
            if (active) {
                setTranslations(selected, result);
                selectLanguage(selected);
            }
        }, (err) => console.error(err));
        return () => {
            active = false;
        };
    }, [selected]);
    return [selected, setSelected];
}
function useTranslate() {
    const { translate } = Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useActions"])();
    Object(piral_core__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((m) => m.language.selected);
    return translate;
}
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/index.js ***!
  \***************************************************/
/*! exports provided: PiralLanguagesPicker, setupLocalizer, createLocaleApi, getUserLocale, useDynamicLanguage, useTranslate, Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/piral-translate/esm/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLanguagesPicker", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralLanguagesPicker"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/piral-translate/esm/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupLocalizer", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["setupLocalizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocaleApi", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["createLocaleApi"]; });

/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current */ "./node_modules/piral-translate/esm/current.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return _current__WEBPACK_IMPORTED_MODULE_2__["getUserLocale"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./node_modules/piral-translate/esm/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDynamicLanguage", function() { return _hooks__WEBPACK_IMPORTED_MODULE_3__["useDynamicLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTranslate", function() { return _hooks__WEBPACK_IMPORTED_MODULE_3__["useTranslate"]; });

/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Languages */ "./node_modules/piral-translate/esm/Languages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return _Languages__WEBPACK_IMPORTED_MODULE_4__["Languages"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./node_modules/piral-translate/esm/types.js");
/* empty/unused harmony star reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/localize.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-translate/esm/localize.js ***!
  \******************************************************/
/*! exports provided: Localizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localizer", function() { return Localizer; });
function defaultFallback(key, language) {
    if (false) {}
    else {
        if (language) {
            console.warn(`Missing translation of "${key}" in language "${language}".`);
            return `__${language}_${key}__`;
        }
        else {
            return '';
        }
    }
}
function formatMessage(message, variables) {
    return message.replace(/{{\s*([A-Za-z0-9_.]+)\s*}}/g, (_match, p1) => {
        return p1 in variables ? variables[p1] || '' : `{{${p1}}}`;
    });
}
class Localizer {
    /**
     * Creates a new instance of a localizer.
     */
    constructor(messages, language, languages, fallback = defaultFallback) {
        this.messages = messages;
        this.language = language;
        this.languages = languages;
        this.fallback = fallback;
    }
    /**
     * Localizes the given key via the global translations.
     * @param key The key of the translation snippet.
     * @param variables The optional variables to use.
     */
    localizeGlobal(key, variables) {
        return this.localizeBase(key, variables);
    }
    /**
     * Localizes the given key via the local translations.
     * Uses the global translations as fallback mechanism.
     * @param localMessages The local translations to prefer.
     * @param key The key of the translation snippet.
     * @param variables The optional variables to use.
     */
    localizeLocal(localMessages, key, variables) {
        const message = this.translateMessage(localMessages, key, variables);
        if (message === undefined) {
            return this.localizeBase(key, variables);
        }
        return message;
    }
    localizeBase(key, variables) {
        const message = this.translateMessage(this.messages, key, variables);
        if (message === undefined) {
            return this.fallback(key, this.language);
        }
        return message;
    }
    translateMessage(messages, key, variables) {
        const language = this.language;
        const translations = language && messages[language];
        const translation = translations && translations[key];
        return translation && (variables ? formatMessage(translation, variables) : translation);
    }
}
//# sourceMappingURL=localize.js.map

/***/ }),

/***/ "./node_modules/piral-translate/esm/types.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/types.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  HashRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(context.location) === Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, style, activeStyle);
    }

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),
    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func])
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __HistoryContext, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__HistoryContext", function() { return historyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
      true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/react-router/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/systemjs/dist/extras/named-register.js":
/*!*************************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/named-register.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/systemjs/dist/extras/named-register.js'");

/***/ }),

/***/ "./node_modules/systemjs/dist/system.js":
/*!**********************************************!*\
  !*** ./node_modules/systemjs/dist/system.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
* SystemJS 6.12.1
*/
(function () {

  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl = baseEl.href;
  }

  if (!baseUrl && typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

    var u;
    for (u in json.scopes || {}) {
      var resolvedScope = resolveUrl(u, baseUrl);
      resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
    }

    for (u in json.depcache || {})
      outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
    
    for (u in json.integrity || {})
      outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype = SystemJS.prototype;

  systemJSPrototype.import = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype.createContext = function (parentId) {
    var loader = this;
    return {
      url: parentId,
      resolve: function (id, parentUrl) {
        return Promise.resolve(loader.resolve(id, parentUrl || parentId));
      }
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err, isErrSource) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    
    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2, 'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name === 'string') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name && name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    }, function (err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader, load, err, true);
      throw err;
    });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined,

      // parent instantiator / executor
      p: undefined
    };
  }

  function instantiateAll (loader, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, parent, loaded);
        }));
      })
      .catch(function (err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader, load, err, false);
        throw err;
      });
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id])
      return;
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader, depLoad, seen);
        if (depLoadPromise) 
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      }
      catch (err) {
        load.e = null;
        load.er = err;
        triggerOnload(loader, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return Promise.all(depLoadPromises).then(doExec);

    return doExec();

    function doExec () {
      try {
        var execPromise = load.e.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            load.E = null; // indicates completion
            if (true) triggerOnload(loader, load, null, true);
          }, function (err) {
            load.er = err;
            load.E = null;
            if (true) triggerOnload(loader, load, err, true);
            throw err;
          });
          return load.E = execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        load.L = load.I = undefined;
      }
      catch (err) {
        load.er = err;
        throw err;
      }
      finally {
        load.e = null;
        triggerOnload(loader, load, load.er, true);
      }
    }
  }

  envGlobal.System = new SystemJS();

  /*
   * SystemJS browser attachments for script and import map processing
   */

  var importMapPromise = Promise.resolve();
  var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };

  // Scripts are processed immediately, on the first System.import, and on DOMReady.
  // Import map scripts are processed only once (by being marked) and in order for each phase.
  // This is to avoid using DOM mutation observers in core, although that would be an alternative.
  var processFirst = hasDocument;
  systemJSPrototype.prepareImport = function (doProcessScripts) {
    if (processFirst || doProcessScripts) {
      processScripts();
      processFirst = false;
    }
    return importMapPromise;
  };
  if (hasDocument) {
    processScripts();
    window.addEventListener('DOMContentLoaded', processScripts);
  }

  function processScripts () {
    [].forEach.call(document.querySelectorAll('script'), function (script) {
      if (script.sp) // sp marker = systemjs processed
        return;
      // TODO: deprecate systemjs-module in next major now that we have auto import
      if (script.type === 'systemjs-module') {
        script.sp = true;
        if (!script.src)
          return;
        System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl)).catch(function (e) {
          // if there is a script load error, dispatch an "error" event
          // on the script tag.
          if (e.message.indexOf('https://git.io/JvFET#3') > -1) {
            var event = document.createEvent('Event');
            event.initEvent('error', false, false);
            script.dispatchEvent(event);
          }
          return Promise.reject(e);
        });
      }
      else if (script.type === 'systemjs-importmap') {
        script.sp = true;
        // The passThrough property is for letting the module types fetch implementation know that this is not a SystemJS module.
        var fetchPromise = script.src ? (System.fetch || fetch)(script.src, { integrity: script.integrity, passThrough: true }).then(function (res) {
          if (!res.ok)
            throw Error('Invalid status code: ' + res.status);
          return res.text();
        }).catch(function (err) {
          err.message = errMsg('W4', 'Error fetching systemjs-import map ' + script.src) + '\n' + err.message;
          console.warn(err);
          if (typeof script.onerror === 'function') {
              script.onerror();
          }
          return '{}';
        }) : script.innerHTML;
        importMapPromise = importMapPromise.then(function () {
          return fetchPromise;
        }).then(function (text) {
          extendImportMap(importMap, text, script.src || baseUrl);
        });
      }
    });
  }

  function extendImportMap (importMap, newMapText, newMapUrl) {
    var newMap = {};
    try {
      newMap = JSON.parse(newMapText);
    } catch (err) {
      console.warn(Error((errMsg('W5', "systemjs-importmap contains invalid JSON") + '\n\n' + newMapText + '\n' )));
    }
    resolveAndComposeImportMap(newMap, newMapUrl, importMap);
  }

  /*
   * Script instantiation loading
   */

  if (hasDocument) {
    window.addEventListener('error', function (evt) {
      lastWindowErrorUrl = evt.filename;
      lastWindowError = evt.error;
    });
    var baseOrigin = location.origin;
  }

  systemJSPrototype.createScript = function (url) {
    var script = document.createElement('script');
    script.async = true;
    // Only add cross origin for actual cross origin
    // this is because Safari triggers for all
    // - https://bugs.webkit.org/show_bug.cgi?id=171566
    if (url.indexOf(baseOrigin + '/'))
      script.crossOrigin = 'anonymous';
    var integrity = importMap.integrity[url];
    if (integrity)
      script.integrity = integrity;
    script.src = url;
    return script;
  };

  // Auto imports -> script tags can be inlined directly for load phase
  var lastAutoImportDeps, lastAutoImportTimeout;
  var autoImportCandidates = {};
  var systemRegister = systemJSPrototype.register;
  systemJSPrototype.register = function (deps, declare) {
    if (hasDocument && document.readyState === 'loading' && typeof deps !== 'string') {
      var scripts = document.querySelectorAll('script[src]');
      var lastScript = scripts[scripts.length - 1];
      if (lastScript) {
        lastAutoImportDeps = deps;
        // if this is already a System load, then the instantiate has already begun
        // so this re-import has no consequence
        var loader = this;
        lastAutoImportTimeout = setTimeout(function () {
          autoImportCandidates[lastScript.src] = [deps, declare];
          loader.import(lastScript.src);
        });
      }
    }
    else {
      lastAutoImportDeps = undefined;
    }
    return systemRegister.call(this, deps, declare);
  };

  var lastWindowErrorUrl, lastWindowError;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var autoImportRegistration = autoImportCandidates[url];
    if (autoImportRegistration) {
      delete autoImportCandidates[url];
      return autoImportRegistration;
    }
    var loader = this;
    return Promise.resolve(systemJSPrototype.createScript(url)).then(function (script) {
      return new Promise(function (resolve, reject) {
        script.addEventListener('error', function () {
          reject(Error(errMsg(3, 'Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : ''))));
        });
        script.addEventListener('load', function () {
          document.head.removeChild(script);
          // Note that if an error occurs that isn't caught by this if statement,
          // that getRegister will return null and a "did not instantiate" error will be thrown.
          if (lastWindowErrorUrl === url) {
            reject(lastWindowError);
          }
          else {
            var register = loader.getRegister(url);
            // Clear any auto import registration for dynamic import scripts during load
            if (register && register[0] === lastAutoImportDeps)
              clearTimeout(lastAutoImportTimeout);
            resolve(register);
          }
        });
        document.head.appendChild(script);
      });
    });
  };

  /*
   * Fetch loader, sets up shouldFetch and fetch hooks
   */
  systemJSPrototype.shouldFetch = function () {
    return false;
  };
  if (typeof fetch !== 'undefined')
    systemJSPrototype.fetch = fetch;

  var instantiate = systemJSPrototype.instantiate;
  var jsContentTypeRegEx = /^(text|application)\/(x-)?javascript(;|$)/;
  systemJSPrototype.instantiate = function (url, parent) {
    var loader = this;
    if (!this.shouldFetch(url))
      return instantiate.apply(this, arguments);
    return this.fetch(url, {
      credentials: 'same-origin',
      integrity: importMap.integrity[url]
    })
    .then(function (res) {
      if (!res.ok)
        throw Error(errMsg(7, res.status + ' ' + res.statusText + ', loading ' + url + (parent ? ' from ' + parent : '')));
      var contentType = res.headers.get('content-type');
      if (!contentType || !jsContentTypeRegEx.test(contentType))
        throw Error(errMsg(4, 'Unknown Content-Type "' + contentType + '", loading ' + url + (parent ? ' from ' + parent : '')));
      return res.text().then(function (source) {
        if (source.indexOf('//# sourceURL=') < 0)
          source += '\n//# sourceURL=' + url;
        (0, eval)(source);
        return loader.getRegister(url);
      });
    });
  };

  systemJSPrototype.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || !true  || baseUrl;
    return resolveImportMap((importMap), resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function throwUnresolved (id, parentUrl) {
    throw Error(errMsg(8, "Unable to resolve bare specifier '" + id + (parentUrl ? "' from " + parentUrl : "'")));
  }

  var systemInstantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var preloads = (importMap).depcache[url];
    if (preloads) {
      for (var i = 0; i < preloads.length; i++)
        getOrCreateLoad(this, this.resolve(preloads[i], url), url);
    }
    return systemInstantiate.call(this, url, firstParentUrl);
  };

  /*
   * Supports loading System.register in workers
   */

  if (hasSelf && typeof importScripts === 'function')
    systemJSPrototype.instantiate = function (url) {
      var loader = this;
      return Promise.resolve().then(function () {
        importScripts(url);
        return loader.getRegister(url);
      });
    };

  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */
  (function (global) {
    var systemJSPrototype = global.System.constructor.prototype;

    // safari unpredictably lists some new globals first or second in object order
    var firstGlobalProp, secondGlobalProp, lastGlobalProp;
    function getGlobalProp (useFirstGlobalProp) {
      var cnt = 0;
      var foundLastProp, result;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
          return p;
        if (foundLastProp) {
          lastGlobalProp = p;
          result = useFirstGlobalProp && result || p;
        }
        else {
          foundLastProp = p === lastGlobalProp;
        }
        cnt++;
      }
      return result;
    }

    function noteGlobalProps () {
      // alternatively Object.keys(global).pop()
      // but this may be faster (pending benchmarks)
      firstGlobalProp = secondGlobalProp = undefined;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (!firstGlobalProp)
          firstGlobalProp = p;
        else if (!secondGlobalProp)
          secondGlobalProp = p;
        lastGlobalProp = p;
      }
      return lastGlobalProp;
    }

    var impt = systemJSPrototype.import;
    systemJSPrototype.import = function (id, parentUrl) {
      noteGlobalProps();
      return impt.call(this, id, parentUrl);
    };

    var emptyInstantiation = [[], function () { return {} }];

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      var lastRegister = getRegister.call(this);
      if (lastRegister)
        return lastRegister;

      // no registration -> attempt a global detection as difference from snapshot
      // when multiple globals, we take the global value to be the last defined new global object property
      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
      // note in Edge, deleting and re-adding a global does not change its ordering
      var globalProp = getGlobalProp(this.firstGlobalProp);
      if (!globalProp)
        return emptyInstantiation;

      var globalExport;
      try {
        globalExport = global[globalProp];
      }
      catch (e) {
        return emptyInstantiation;
      }

      return [[], function (_export) {
        return {
          execute: function () {
            _export(globalExport);
            _export({ default: globalExport, __useDefault: true });
          }
        };
      }];
    };

    var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

    function shouldSkipProperty(p) {
      return !global.hasOwnProperty(p)
        || !isNaN(p) && p < global.length
        || isIE11 && global[p] && typeof window !== 'undefined' && global[p].parent === window;
    }
  })(typeof self !== 'undefined' ? self : global);

  /*
   * Loads JSON, CSS, Wasm module types based on file extension
   * filters and content type verifications
   */
  (function(global) {
    var systemJSPrototype = global.System.constructor.prototype;

    var moduleTypesRegEx = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;
    systemJSPrototype.shouldFetch = function (url) {
      return moduleTypesRegEx.test(url);
    };

    var jsonContentType = /^application\/json(;|$)/;
    var cssContentType = /^text\/css(;|$)/;
    var wasmContentType = /^application\/wasm(;|$)/;

    var fetch = systemJSPrototype.fetch;
    systemJSPrototype.fetch = function (url, options) {
      return fetch(url, options)
      .then(function (res) {
        if (options.passThrough)
          return res;

        if (!res.ok)
          return res;
        var contentType = res.headers.get('content-type');
        if (jsonContentType.test(contentType))
          return res.json()
          .then(function (json) {
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(json) + ')}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (cssContentType.test(contentType))
          return res.text()
          .then(function (source) {
            source = source.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g, function (match, quotes, relUrl1, relUrl2) {
              return 'url(' + quotes + resolveUrl(relUrl1 || relUrl2, url) + quotes + ')';
            });
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(' + JSON.stringify(source) + ');e("default",s)}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (wasmContentType.test(contentType))
          return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(res) : res.arrayBuffer().then(WebAssembly.compile))
          .then(function (module) {
            if (!global.System.wasmModules)
              global.System.wasmModules = Object.create(null);
            global.System.wasmModules[url] = module;
            // we can only set imports if supported (eg early Safari doesnt support)
            var deps = [];
            var setterSources = [];
            if (WebAssembly.Module.imports)
              WebAssembly.Module.imports(module).forEach(function (impt) {
                var key = JSON.stringify(impt.module);
                if (deps.indexOf(key) === -1) {
                  deps.push(key);
                  setterSources.push('function(m){i[' + key + ']=m}');
                }
              });
            return new Response(new Blob([
              'System.register([' + deps.join(',') + '],function(e){var i={};return{setters:[' + setterSources.join(',') +
              '],execute:function(){return WebAssembly.instantiate(System.wasmModules[' + JSON.stringify(url) +
              '],i).then(function(m){e(m.exports)})}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        return res;
      });
    };
  })(typeof self !== 'undefined' ? self : global);

  var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || (load.p && load.p.e !== null) || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}




/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/zone.js/fesm2015/zone.js":
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @license Angular v14.0.0-next.5
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
((function (global) {
    const performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.
    const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
    function __symbol__(name) {
        return symbolPrefix + name;
    }
    const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    class Zone {
        constructor(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        static assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        }
        static get root() {
            let zone = Zone.current;
            while (zone.parent) {
                zone = zone.parent;
            }
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        // tslint:disable-next-line:require-internal-with-underscore
        static __load_patch(name, fn, ignoreDuplicate = false) {
            if (patches.hasOwnProperty(name)) {
                // `checkDuplicate` option is defined from global variable
                // so it works for all modules.
                // `ignoreDuplicate` can work for the specified module
                if (!ignoreDuplicate && checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                const perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (let i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    Zone.__symbol__ = __symbol__;
    const DELEGATE_ZS = {
        name: '',
        onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
        onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
        onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
    };
    class _ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone =
                zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone =
                zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                // clang-format off
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                // clang-format on
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn) {
            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0;
            // tslint:disable-next-line:require-internal-with-underscore
            this._zoneDelegates = null;
            // tslint:disable-next-line:require-internal-with-underscore
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            if (!callback) {
                throw new Error('callback is not defined');
            }
            this.callback = callback;
            const self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        static invokeTask(task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        // tslint:disable-next-line:require-internal-with-underscore
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
            }
        }
        toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__('setTimeout');
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function nativeScheduleMicroTask(func) {
        if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
        }
        if (nativeMicroTaskQueuePromise) {
            let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
            if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
            }
            nativeThen.call(nativeMicroTaskQueuePromise, func);
        }
        else {
            global[symbolSetTimeout](func, 0);
        }
    }
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            nativeScheduleMicroTask(drainMicroTaskQueue);
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = { name: 'NO ZONE' };
    const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    const patches = {};
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: () => _currentZoneFrame,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
        patchEventTarget: () => [],
        patchOnProperties: noop,
        patchMethod: () => noop,
        bindArguments: () => [],
        patchThen: () => noop,
        patchMacroTask: () => noop,
        patchEventPrototype: () => noop,
        isIEOrEdge: () => false,
        getGlobalObjects: () => undefined,
        ObjectDefineProperty: () => noop,
        ObjectGetOwnPropertyDescriptor: () => undefined,
        ObjectCreate: () => undefined,
        ArraySlice: () => [],
        patchClass: () => noop,
        wrapWithCurrentZone: () => noop,
        filterProperties: () => [],
        attachOriginToPatched: () => noop,
        _redefineProperty: () => noop,
        patchCallbacks: () => noop,
        nativeScheduleMicroTask: nativeScheduleMicroTask
    };
    let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() { }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
}))(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor['name'];
    for (let i = 0; i < fnNames.length; i++) {
        const name = fnNames[i];
        const delegate = prototype[name];
        if (delegate) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) {
                continue;
            }
            prototype[name] = ((delegate) => {
                const patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    let eventNameSymbol = zoneSymbolEventNames$1[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.substr(2);
    let eventNameSymbol = zoneSymbolEventNames$1[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        const previousValue = target[eventNameSymbol];
        if (typeof previousValue === 'function') {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        originalDescSet && originalDescSet.call(target, null);
        target[eventNameSymbol] = newValue;
        if (typeof newValue === 'function') {
            target.addEventListener(eventName, wrapFn, false);
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        const listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (let i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        const onProperties = [];
        for (const prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (let j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        const a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function () { });
    let prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    let proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
        const meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    });
}
function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = (e) => {
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = () => {
        while (_uncaughtPromiseErrors.length) {
            const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
            try {
                uncaughtPromiseError.zone.runGuarded(() => {
                    if (uncaughtPromiseError.throwOriginal) {
                        throw uncaughtPromiseError.rejection;
                    }
                    throw uncaughtPromiseError;
                });
            }
            catch (error) {
                handleUnhandledRejection(error);
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v) => {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    const once = function () {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(() => {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(() => {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (let i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    let uncaughtPromiseError = value;
                    try {
                        // Here we throws a new Error to print more readable error log
                        // and if the value is not an error, zone.js builds an `Error`
                        // Object here to attach the stack information.
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        uncaughtPromiseError = err;
                    }
                    if (isDisableWrappingUncaughtPromiseRejection) {
                        // If disable wrapping uncaught promise reject
                        // use the value instead of wrapping it.
                        uncaughtPromiseError.throwOriginal = true;
                    }
                    uncaughtPromiseError.rejection = value;
                    uncaughtPromiseError.promise = promise;
                    uncaughtPromiseError.zone = Zone.current;
                    uncaughtPromiseError.task = Zone.currentTask;
                    _uncaughtPromiseErrors.push(uncaughtPromiseError);
                    api.scheduleMicroTask(); // to make sure that it is running
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected :
                forwardRejection;
        zone.scheduleMicroTask(source, () => {
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    const noop = function () { };
    const AggregateError = global.AggregateError;
    class ZoneAwarePromise {
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static any(values) {
            if (!values || typeof values[Symbol.iterator] !== 'function') {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            const promises = [];
            let count = 0;
            try {
                for (let v of values) {
                    count++;
                    promises.push(ZoneAwarePromise.resolve(v));
                }
            }
            catch (err) {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            if (count === 0) {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
            }
            let finished = false;
            const errors = [];
            return new ZoneAwarePromise((resolve, reject) => {
                for (let i = 0; i < promises.length; i++) {
                    promises[i].then(v => {
                        if (finished) {
                            return;
                        }
                        finished = true;
                        resolve(v);
                    }, err => {
                        errors.push(err);
                        count--;
                        if (count === 0) {
                            finished = true;
                            reject(new AggregateError(errors, 'All promises were rejected'));
                        }
                    });
                }
            });
        }
        ;
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            return ZoneAwarePromise.allWithCallback(values);
        }
        static allSettled(values) {
            const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
            return P.allWithCallback(values, {
                thenCallback: (value) => ({ status: 'fulfilled', value }),
                errorCallback: (err) => ({ status: 'rejected', reason: err })
            });
        }
        static allWithCallback(values, callback) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                const curValueIndex = valueIndex;
                try {
                    value.then((value) => {
                        resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                        unresolvedCount--;
                        if (unresolvedCount === 0) {
                            resolve(resolvedValues);
                        }
                    }, (err) => {
                        if (!callback) {
                            reject(err);
                        }
                        else {
                            resolvedValues[curValueIndex] = callback.errorCallback(err);
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }
                    });
                }
                catch (thenErr) {
                    reject(thenErr);
                }
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        }
        constructor(executor) {
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        get [Symbol.toStringTag]() {
            return 'Promise';
        }
        get [Symbol.species]() {
            return ZoneAwarePromise;
        }
        then(onFulfilled, onRejected) {
            let C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
            }
            const chainPromise = new C(noop);
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            let C = this.constructor[Symbol.species];
            if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
            }
            const chainPromise = new C(noop);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject) => {
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function (self, args) {
            let resultPromise = fn.apply(self, args);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        patchMethod(global, 'fetch', delegate => zoneify(delegate));
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', (global) => {
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
        if (typeof this === 'function') {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                const nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                const nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (typeof Promise === 'function' && this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        // Note: We pass the `options` object as the event handler too. This is not compatible with the
        // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
        // without an actual handler.
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
    const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    const PREPEND_EVENT_LISTENER = 'prependListener';
    const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    const invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        const delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event) => delegate.handleEvent(event);
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        // need to try/catch error here, otherwise, the error in one event listener
        // will break the executions of the other event listeners. Also error will
        // not remove the event listener when `once` options is true.
        let error;
        try {
            task.invoke(task, target, [event]);
        }
        catch (err) {
            error = err;
        }
        const options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
        }
        return error;
    };
    function globalCallback(context, event, isCapture) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = context || event.target || _global;
        const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
        if (tasks) {
            const errors = [];
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                const err = invokeTask(tasks[0], target, event);
                err && errors.push(err);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    const err = invokeTask(copyTasks[i], target, event);
                    err && errors.push(err);
                }
            }
            // Since there is only one error, we don't need to schedule microTask
            // to throw the error.
            if (errors.length === 1) {
                throw errors[0];
            }
            else {
                for (let i = 0; i < errors.length; i++) {
                    const err = errors[i];
                    api.nativeScheduleMicroTask(() => {
                        throw err;
                    });
                }
            }
        }
    }
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function (event) {
        return globalCallback(this, event, false);
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function (event) {
        return globalCallback(this, event, true);
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        let returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        let proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {};
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        /**
         * This util function will build an option object with passive option
         * to handle all possible input from the user.
         */
        function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
                // doesn't support passive but user want to pass an object as options.
                // this will not work on some old browser, so we just pass a boolean
                // as useCapture parameter
                return !!options.capture;
            }
            if (!passiveSupported || !passive) {
                return options;
            }
            if (typeof options === 'boolean') {
                return { capture: options, passive: true };
            }
            if (!options) {
                return { passive: true };
            }
            if (typeof options === 'object' && options.passive !== false) {
                return Object.assign(Object.assign({}, options), { passive: true });
            }
            return options;
        }
        const customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames[task.eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function (task, delegate) {
            const typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
        const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
        const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                let delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                const options = buildEventListenerOptions(arguments[2], passive);
                if (unpatchedEvents) {
                    // check upatched list
                    for (let i = 0; i < unpatchedEvents.length; i++) {
                        if (eventName === unpatchedEvents[i]) {
                            if (passive) {
                                return nativeListener.call(target, eventName, delegate, options);
                            }
                            else {
                                return nativeListener.apply(this, arguments);
                            }
                        }
                    }
                }
                const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                const once = options && typeof options === 'object' ? options.once : false;
                const zone = Zone.current;
                let symbolEventNames = zoneSymbolEventNames[eventName];
                if (!symbolEventNames) {
                    prepareEventNames(eventName, eventNameToString);
                    symbolEventNames = zoneSymbolEventNames[eventName];
                }
                const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                let source;
                const constructorName = target.constructor['name'];
                const targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            const target = this || _global;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
            }
            const options = arguments[2];
            const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            const delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            const symbolEventNames = zoneSymbolEventNames[eventName];
            let symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (let i = 0; i < existingTasks.length; i++) {
                    const existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                            // in the target, we have an event listener which is added by on_property
                            // such as target.onclick = function() {}, so we need to clear this internal
                            // property too if all delegates all removed
                            if (typeof eventName === 'string') {
                                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                target[onPropertySymbol] = null;
                            }
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            let eventName = arguments[0];
            if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
            }
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (let i = 0; i < tasks.length; i++) {
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            let eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for (let i = 0; i < keys.length; i++) {
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const symbolEventNames = zoneSymbolEventNames[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    let results = [];
    for (let i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    if (!eventName) {
        const foundTasks = [];
        for (let prop in target) {
            const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            let evtName = match && match[1];
            if (evtName && (!eventName || evtName === eventName)) {
                const tasks = target[prop];
                if (tasks) {
                    for (let i = 0; i < tasks.length; i++) {
                        foundTasks.push(tasks[i]);
                    }
                }
            }
        }
        return foundTasks;
    }
    let symbolEventName = zoneSymbolEventNames[eventName];
    if (!symbolEventName) {
        prepareEventNames(eventName);
        symbolEventName = zoneSymbolEventNames[eventName];
    }
    const captureFalseTasks = target[symbolEventName[FALSE_STR]];
    const captureTrueTasks = target[symbolEventName[TRUE_STR]];
    if (!captureFalseTasks) {
        return captureTrueTasks ? captureTrueTasks.slice() : [];
    }
    else {
        return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
            captureFalseTasks.slice();
    }
}
function patchEventPrototype(global, api) {
    const Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                const source = `${targetName}.${method}::` + callback;
                const prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    const tip = ignoreProperties.filter(ip => ip.target === target);
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
    return Object.getOwnPropertyNames(target)
        .filter(name => name.startsWith('on') && name.length > 2)
        .map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    const ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    let patchTargets = [];
    if (isBrowser) {
        const internalWindow = window;
        patchTargets = patchTargets.concat([
            'Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement',
            'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker'
        ]);
        const ignoreErrorProperties = isIE() ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
    }
    patchTargets = patchTargets.concat([
        'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest',
        'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket'
    ]);
    for (let i = 0; i < patchTargets.length; i++) {
        const target = _global[patchTargets[i]];
        target && target.prototype &&
            patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
    // Collect native event names by looking at properties
    // on the global namespace, e.g. 'onclick'.
    const eventNames = getOnEventNames(global);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
        globalSources,
        zoneSymbolEventNames,
        eventNames,
        isBrowser,
        isMix,
        isNode,
        TRUE_STR,
        FALSE_STR,
        ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR
    });
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {};
    function scheduleTask(task) {
        const data = task.data;
        data.args[0] = function () {
            return task.invoke.apply(this, arguments);
        };
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative.call(window, task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, (delegate) => function (self, args) {
            if (typeof args[0] === 'function') {
                const options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                const callback = args[0];
                args[0] = function timer() {
                    try {
                        return callback.apply(this, arguments);
                    }
                    finally {
                        // issue-934, task will be cancelled
                        // even it is a periodic task such as
                        // setInterval
                        // https://github.com/angular/angular/issues/40387
                        // Cleanup tasksByHandleId should be handled before scheduleTask
                        // Since some zoneSpec may intercept and doesn't trigger
                        // scheduleFn(scheduleTask) provided here.
                        if (!(options.isPeriodic)) {
                            if (typeof options.handleId === 'number') {
                                // in non-nodejs env, we remove timerId
                                // from local cache
                                delete tasksByHandleId[options.handleId];
                            }
                            else if (options.handleId) {
                                // Node returns complex objects as handleIds
                                // we remove task reference from timer object
                                options.handleId[taskSymbol] = null;
                            }
                        }
                    }
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        });
    clearNative =
        patchMethod(window, cancelName, (delegate) => function (self, args) {
            const id = args[0];
            let task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    const { isBrowser, isMix } = api.getGlobalObjects();
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (let i = 0; i < eventNames.length; i++) {
        const eventName = eventNames[i];
        const falseEventName = eventName + FALSE_STR;
        const trueEventName = eventName + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    const EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('legacy', (global) => {
    const legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
    api.patchMethod(global, 'queueMicrotask', delegate => {
        return function (self, args) {
            Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
        };
    });
});
Zone.__load_patch('timers', (global) => {
    const set = 'set';
    const clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', (global) => {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
    const blockingMethods = ['alert', 'prompt', 'confirm'];
    for (let i = 0; i < blockingMethods.length; i++) {
        const name = blockingMethods[i];
        patchMethod(global, name, (delegate, symbol, name) => {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
    }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
    patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
    patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
    propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        const XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = 'readystatechange';
        const SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            const newListener = target[XHR_LISTENER] = () => {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        // Also if the request failed without response (status = 0), the load event handler
                        // will not be triggered, in that case, we should also invoke the placeholder callback
                        // to close the XMLHttpRequest::send macroTask.
                        // https://github.com/angular/angular/issues/38795
                        const loadTasks = target[Zone.__symbol__('loadfalse')];
                        if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target[Zone.__symbol__('loadfalse')];
                                for (let i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        });
        const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        });
        const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
            const task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        });
    }
});
Zone.__load_patch('geolocation', (global) => {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            const eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(eventTask => {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=main.c726654f56ed511de5e1.hot-update.js.map