webpackHotUpdate("main",{

/***/ "./node_modules/@angular/common/fesm2015/http.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpContext, HttpContextToken, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpContext", function() { return HttpContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpContextToken", function() { return HttpContextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfInterceptor; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/**
 * @license Angular v12.2.16
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = () => {
                this.headers = new Map();
                headers.split('\n').forEach(line => {
                    const index = line.indexOf(':');
                    if (index > 0) {
                        const name = line.slice(0, index);
                        const key = name.toLowerCase();
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            this.headers.get(key).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = () => {
                this.headers = new Map();
                Object.keys(headers).forEach(name => {
                    let values = headers[name];
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(update => this.applyUpdate(update));
                this.lazyUpdate = null;
            }
        }
    }
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach(key => {
            this.headers.set(key, other.headers.get(key));
            this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    }
    clone(update) {
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                let value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                const toDelete = update.value;
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(value => toDelete.indexOf(value) === -1);
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * @internal
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
function paramParser(rawParams, codec) {
    const map = new Map();
    if (rawParams.length > 0) {
        // The `window.location.search` can be used while creating an instance of the `HttpParams` class
        // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
        // may start with the `?` char, so we strip it if it's present.
        const params = rawParams.replace(/^\?/, '').split('&');
        params.forEach((param) => {
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */
const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
    '40': '@',
    '3A': ':',
    '24': '$',
    '2C': ',',
    '3B': ';',
    '2B': '+',
    '3D': '=',
    '3F': '?',
    '2F': '/',
};
function standardEncoding(v) {
    return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => { var _a; return (_a = STANDARD_ENCODING_REPLACEMENTS[t]) !== null && _a !== void 0 ? _a : s; });
}
function valueToString(value) {
    return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
    constructor(options = {}) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(key => {
                const value = options.fromObject[key];
                this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params) {
        const updates = [];
        Object.keys(params).forEach(param => {
            const value = params[param];
            if (Array.isArray(value)) {
                value.forEach(_value => {
                    updates.push({ param, value: _value, op: 'a' });
                });
            }
            else {
                updates.push({ param, value: value, op: 'a' });
            }
        });
        return this.clone(updates);
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString() {
        this.init();
        return this.keys()
            .map(key => {
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(param => param !== '')
            .join('&');
    }
    clone(update) {
        const clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
    }
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
            this.updates.forEach(update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                        base.push(valueToString(update.value));
                        this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            let base = this.map.get(update.param) || [];
                            const idx = base.indexOf(valueToString(update.value));
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                this.map.set(update.param, base);
                            }
                            else {
                                this.map.delete(update.param);
                            }
                        }
                        else {
                            this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
    constructor() {
        this.map = new Map();
    }
    /**
     * Store a value in the context. If a value is already present it will be overwritten.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     * @param value The value to store.
     *
     * @returns A reference to itself for easy chaining.
     */
    set(token, value) {
        this.map.set(token, value);
        return this;
    }
    /**
     * Retrieve the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns The stored value or default if one is defined.
     */
    get(token) {
        if (!this.map.has(token)) {
            this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
    }
    /**
     * Delete the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns A reference to itself for easy chaining.
     */
    delete(token) {
        this.map.delete(token);
        return this;
    }
    /**
     * @returns a list of tokens currently stored in the context.
     */
    keys() {
        return this.map.keys();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */
function isUrlSearchParams(value) {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.context) {
                this.context = options.context;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no context have been passed in, construct a new HttpContext instance.
        if (!this.context) {
            this.context = new HttpContext();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            isUrlSearchParams(this.body) || typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, boolean and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            typeof this.body === 'boolean') {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    clone(update = {}) {
        var _a;
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        // Pass on context if needed
        const context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            context,
            reportProgress,
            responseType,
            withCredentials,
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
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init, defaultStatus = 200 /* Ok */, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        context: options.context,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers,
                context: options.context,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((req) => this.handler.handle(req)));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        const res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof HttpResponse));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
        return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
        return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilities of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
        /**
         * A resolved promise that can be used to schedule microtasks in the event handlers.
         */
        this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
                this.resolvedPromise.then(() => {
                    // Cleanup the page.
                    cleanup();
                    // Check whether the response callback has run.
                    if (!finished) {
                        // It hasn't, something went wrong with the request. Return an error via
                        // the Observable error path. All JSONP errors have status 0.
                        observer.error(new HttpErrorResponse({
                            url,
                            status: 0,
                            statusText: 'JSONP Error',
                            error: new Error(JSONP_ERR_NO_CALLBACK),
                        }));
                        return;
                    }
                    // Success. body either contains the response body or null if none was
                    // returned.
                    observer.next(new HttpResponse({
                        body,
                        status: 200 /* Ok */,
                        statusText: 'OK',
                        url,
                    }));
                    // Complete the stream, the response is over.
                    observer.complete();
                });
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
class HttpXhrBackend {
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the HttpClientJsonpModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            const partialFromXhr = () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                const status = xhr.status === 1223 ? 204 /* NoContent */ : xhr.status;
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            const onLoad = () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                let body = null;
                if (status !== 204 /* NoContent */) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 /* Ok */ : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            const onError = (error) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            const onDownProgress = (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            const onUpProgress = (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            xhr.addEventListener('timeout', onError);
            xhr.addEventListener('abort', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                if (xhr.readyState !== xhr.DONE) {
                    xhr.abort();
                }
            };
        });
    }
}
HttpXhrBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
HttpXhrBackend.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["XhrFactory"] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    intercept(req, next) {
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    handle(req) {
        if (this.chain === null) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
}
HttpClientModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */
const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_0__["XhrFactory"];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@angular/forms/fesm2015/forms.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MaxValidator, MinLengthValidator, MinValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bi, ɵangular_packages_forms_forms_bj, ɵangular_packages_forms_forms_bk, ɵangular_packages_forms_forms_bl, ɵangular_packages_forms_forms_bm, ɵangular_packages_forms_forms_bn, ɵangular_packages_forms_forms_bo, ɵangular_packages_forms_forms_bp, ɵangular_packages_forms_forms_bq, ɵangular_packages_forms_forms_br, ɵangular_packages_forms_forms_bs, ɵangular_packages_forms_forms_bt, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValidator", function() { return MaxValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValidator", function() { return MinValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MAX_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return MIN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bg", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bh", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bi", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bj", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bk", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bl", function() { return minValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bm", function() { return maxValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bn", function() { return requiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bo", function() { return requiredTrueValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bp", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bq", function() { return minLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_br", function() { return maxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bs", function() { return patternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bt", function() { return nullValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return BaseControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return BuiltInControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return ngGroupStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return RadioControlRegistryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/**
 * @license Angular v12.2.16
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for all ControlValueAccessor classes defined in Forms package.
 * Contains common logic and utility functions.
 *
 * Note: this is an *internal-only* class and should not be extended or used directly in
 * applications code.
 */
class BaseControlValueAccessor {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * The registered callback function called when a change or input event occurs on the input
         * element.
         * @nodoc
         */
        this.onChange = (_) => { };
        /**
         * The registered callback function called when a blur event occurs on the input element.
         * @nodoc
         */
        this.onTouched = () => { };
    }
    /**
     * Helper method that sets a property on a target element using the current Renderer
     * implementation.
     * @nodoc
     */
    setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */
    setDisabledState(isDisabled) {
        this.setProperty('disabled', isDisabled);
    }
}
BaseControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"] }
];
BaseControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/**
 * Base class for all built-in ControlValueAccessor classes (except DefaultValueAccessor, which is
 * used in case no other CVAs can be found). We use this class to distinguish between default CVA,
 * built-in CVAs and custom CVAs, so that Forms logic can recognize built-in CVAs and treat custom
 * ones with higher priority (when both built-in and custom CVAs are present).
 *
 * Note: this is an *internal-only* class and should not be extended or used directly in
 * applications code.
 */
class BuiltInControlValueAccessor extends BaseControlValueAccessor {
}
BuiltInControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"] }
];
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */
const NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CheckboxControlValueAccessor),
    multi: true,
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        this.setProperty('checked', value);
    }
}
CheckboxControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DefaultValueAccessor),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    const userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */
const COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
/**
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * {@searchKeywords ngDefaultControl}
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
 * you could also use it for custom components that have similar behavior and do not require special
 * processing. In order to attach the default value accessor to a custom element, add the
 * `ngDefaultControl` attribute as shown below.
 *
 * ```
 * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class DefaultValueAccessor extends BaseControlValueAccessor {
    constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        const normalizedValue = value == null ? '' : value;
        this.setProperty('value', normalizedValue);
    }
    /** @internal */
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    }
    /** @internal */
    _compositionStart() {
        this._composing = true;
    }
    /** @internal */
    _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    }
}
DefaultValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '$any(this)._handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '$any(this)._compositionStart()',
                    '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] }
];
DefaultValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
function hasValidLength(value) {
    // non-strict comparison is intentional, to check for both `null` and `undefined` values
    return value != null && typeof value.length === 'number';
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */
const NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with
 * `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * @publicApi
 */
const NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */
class Validators {
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static min(min) {
        return minValidator(min);
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static max(max) {
        return maxValidator(max);
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static required(control) {
        return requiredValidator(control);
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static requiredTrue(control) {
        return requiredTrueValidator(control);
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular
     * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common usecases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML
     * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static email(control) {
        return emailValidator(control);
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static minLength(minLength) {
        return minLengthValidator(minLength);
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static maxLength(maxLength) {
        return maxLengthValidator(maxLength);
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * ### Pattern matching with the global or sticky flag
     *
     * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
     * can produce different results on the same input when validations are run consecutively. This is
     * due to how the behavior of `RegExp.prototype.test` is
     * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
     * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
     * Due to this behavior, it is recommended that when using
     * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
     * flag enabled.
     *
     * ```typescript
     * // Not recommended (since the `g` flag is used)
     * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
     *
     * // Good
     * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static pattern(pattern) {
        return patternValidator(pattern);
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static nullValidator(control) {
        return nullValidator(control);
    }
    static compose(validators) {
        return compose(validators);
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see `updateValueAndValidity()`
     *
     */
    static composeAsync(validators) {
        return composeAsync(validators);
    }
}
/**
 * Validator that requires the control's value to be greater than or equal to the provided number.
 * See `Validators.min` for additional information.
 */
function minValidator(min) {
    return (control) => {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = parseFloat(control.value);
        // Controls with NaN values after parsing should be treated as not having a
        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
    };
}
/**
 * Validator that requires the control's value to be less than or equal to the provided number.
 * See `Validators.max` for additional information.
 */
function maxValidator(max) {
    return (control) => {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = parseFloat(control.value);
        // Controls with NaN values after parsing should be treated as not having a
        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
    };
}
/**
 * Validator that requires the control have a non-empty value.
 * See `Validators.required` for additional information.
 */
function requiredValidator(control) {
    return isEmptyInputValue(control.value) ? { 'required': true } : null;
}
/**
 * Validator that requires the control's value be true. This validator is commonly
 * used for required checkboxes.
 * See `Validators.requiredTrue` for additional information.
 */
function requiredTrueValidator(control) {
    return control.value === true ? null : { 'required': true };
}
/**
 * Validator that requires the control's value pass an email validation test.
 * See `Validators.email` for additional information.
 */
function emailValidator(control) {
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
}
/**
 * Validator that requires the length of the control's value to be greater than or equal
 * to the provided minimum length. See `Validators.minLength` for additional information.
 */
function minLengthValidator(minLength) {
    return (control) => {
        if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
            // don't validate empty values to allow optional controls
            // don't validate values without `length` property
            return null;
        }
        return control.value.length < minLength ?
            { 'minlength': { 'requiredLength': minLength, 'actualLength': control.value.length } } :
            null;
    };
}
/**
 * Validator that requires the length of the control's value to be less than or equal
 * to the provided maximum length. See `Validators.maxLength` for additional information.
 */
function maxLengthValidator(maxLength) {
    return (control) => {
        return hasValidLength(control.value) && control.value.length > maxLength ?
            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': control.value.length } } :
            null;
    };
}
/**
 * Validator that requires the control's value to match a regex pattern.
 * See `Validators.pattern` for additional information.
 */
function patternValidator(pattern) {
    if (!pattern)
        return nullValidator;
    let regex;
    let regexStr;
    if (typeof pattern === 'string') {
        regexStr = '';
        if (pattern.charAt(0) !== '^')
            regexStr += '^';
        regexStr += pattern;
        if (pattern.charAt(pattern.length - 1) !== '$')
            regexStr += '$';
        regex = new RegExp(regexStr);
    }
    else {
        regexStr = pattern.toString();
        regex = pattern;
    }
    return (control) => {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = control.value;
        return regex.test(value) ? null :
            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
    };
}
/**
 * Function that has `ValidatorFn` shape, but performs no operation.
 */
function nullValidator(control) {
    return null;
}
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    const obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error(`Expected validator to return Promise or Observable.`);
    }
    return obs;
}
function mergeErrors(arrayOfErrors) {
    let res = {};
    // Not using Array.reduce here due to a Chrome 80 bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    arrayOfErrors.forEach((errors) => {
        res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
    });
    return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
    return validators.map(validator => validator(control));
}
function isValidatorFn(validator) {
    return !validator.validate;
}
/**
 * Given the list of validators that may contain both functions as well as classes, return the list
 * of validator functions (convert validator classes into validator functions). This is needed to
 * have consistent structure in validators list before composing them.
 *
 * @param validators The set of validators that may contain validators both in plain function form
 *     as well as represented as a validator class.
 */
function normalizeValidators(validators) {
    return validators.map(validator => {
        return isValidatorFn(validator) ?
            validator :
            ((c) => validator.validate(c));
    });
}
/**
 * Merges synchronous validators into a single validator function.
 * See `Validators.compose` for additional information.
 */
function compose(validators) {
    if (!validators)
        return null;
    const presentValidators = validators.filter(isPresent);
    if (presentValidators.length == 0)
        return null;
    return function (control) {
        return mergeErrors(executeValidators(control, presentValidators));
    };
}
/**
 * Accepts a list of validators of different possible shapes (`Validator` and `ValidatorFn`),
 * normalizes the list (converts everything to `ValidatorFn`) and merges them into a single
 * validator function.
 */
function composeValidators(validators) {
    return validators != null ? compose(normalizeValidators(validators)) : null;
}
/**
 * Merges asynchronous validators into a single validator function.
 * See `Validators.composeAsync` for additional information.
 */
function composeAsync(validators) {
    if (!validators)
        return null;
    const presentValidators = validators.filter(isPresent);
    if (presentValidators.length == 0)
        return null;
    return function (control) {
        const observables = executeValidators(control, presentValidators).map(toObservable);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mergeErrors));
    };
}
/**
 * Accepts a list of async validators of different possible shapes (`AsyncValidator` and
 * `AsyncValidatorFn`), normalizes the list (converts everything to `AsyncValidatorFn`) and merges
 * them into a single validator function.
 */
function composeAsyncValidators(validators) {
    return validators != null ? composeAsync(normalizeValidators(validators)) :
        null;
}
/**
 * Merges raw control validators with a given directive validator and returns the combined list of
 * validators as an array.
 */
function mergeValidators(controlValidators, dirValidator) {
    if (controlValidators === null)
        return [dirValidator];
    return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] :
        [controlValidators, dirValidator];
}
/**
 * Retrieves the list of raw synchronous validators attached to a given control.
 */
function getControlValidators(control) {
    return control._rawValidators;
}
/**
 * Retrieves the list of raw asynchronous validators attached to a given control.
 */
function getControlAsyncValidators(control) {
    return control._rawAsyncValidators;
}
/**
 * Accepts a singleton validator, an array, or null, and returns an array type with the provided
 * validators.
 *
 * @param validators A validator, validators, or null.
 * @returns A validators array.
 */
function makeValidatorsArray(validators) {
    if (!validators)
        return [];
    return Array.isArray(validators) ? validators : [validators];
}
/**
 * Determines whether a validator or validators array has a given validator.
 *
 * @param validators The validator or validators to compare against.
 * @param validator The validator to check.
 * @returns Whether the validator is present.
 */
function hasValidator(validators, validator) {
    return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
/**
 * Combines two arrays of validators into one. If duplicates are provided, only one will be added.
 *
 * @param validators The new validators.
 * @param currentValidators The base array of currrent validators.
 * @returns An array of validators.
 */
function addValidators(validators, currentValidators) {
    const current = makeValidatorsArray(currentValidators);
    const validatorsToAdd = makeValidatorsArray(validators);
    validatorsToAdd.forEach((v) => {
        // Note: if there are duplicate entries in the new validators array,
        // only the first one would be added to the current list of validarors.
        // Duplicate ones would be ignored since `hasValidator` would detect
        // the presence of a validator function and we update the current list in place.
        if (!hasValidator(current, v)) {
            current.push(v);
        }
    });
    return current;
}
function removeValidators(validators, currentValidators) {
    return makeValidatorsArray(currentValidators).filter(v => !hasValidator(validators, v));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */
class AbstractControlDirective {
    constructor() {
        /**
         * Set of synchronous validators as they were provided while calling `setValidators` function.
         * @internal
         */
        this._rawValidators = [];
        /**
         * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
         * function.
         * @internal
         */
        this._rawAsyncValidators = [];
        /*
         * The set of callbacks to be invoked when directive instance is being destroyed.
         */
        this._onDestroyCallbacks = [];
    }
    /**
     * @description
     * Reports the value of the control if it is present, otherwise null.
     */
    get value() {
        return this.control ? this.control.value : null;
    }
    /**
     * @description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     */
    get valid() {
        return this.control ? this.control.valid : null;
    }
    /**
     * @description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     */
    get invalid() {
        return this.control ? this.control.invalid : null;
    }
    /**
     * @description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     */
    get pending() {
        return this.control ? this.control.pending : null;
    }
    /**
     * @description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     */
    get disabled() {
        return this.control ? this.control.disabled : null;
    }
    /**
     * @description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     */
    get enabled() {
        return this.control ? this.control.enabled : null;
    }
    /**
     * @description
     * Reports the control's validation errors. If the control is not present, null is returned.
     */
    get errors() {
        return this.control ? this.control.errors : null;
    }
    /**
     * @description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     */
    get pristine() {
        return this.control ? this.control.pristine : null;
    }
    /**
     * @description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     */
    get dirty() {
        return this.control ? this.control.dirty : null;
    }
    /**
     * @description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */
    get touched() {
        return this.control ? this.control.touched : null;
    }
    /**
     * @description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     */
    get status() {
        return this.control ? this.control.status : null;
    }
    /**
     * @description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */
    get untouched() {
        return this.control ? this.control.untouched : null;
    }
    /**
     * @description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     */
    get statusChanges() {
        return this.control ? this.control.statusChanges : null;
    }
    /**
     * @description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     */
    get valueChanges() {
        return this.control ? this.control.valueChanges : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return null;
    }
    /**
     * Sets synchronous validators for this directive.
     * @internal
     */
    _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
    }
    /**
     * Sets asynchronous validators for this directive.
     * @internal
     */
    _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     */
    get validator() {
        return this._composedValidatorFn || null;
    }
    /**
     * @description
     * Asynchronous validator function composed of all the asynchronous validators registered with
     * this directive.
     */
    get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
    }
    /**
     * Internal function to register callbacks that should be invoked
     * when directive instance is being destroyed.
     * @internal
     */
    _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
    }
    /**
     * Internal function to invoke all registered "on destroy" callbacks.
     * Note: calling this function also clears the list of callbacks.
     * @internal
     */
    _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach(fn => fn());
        this._onDestroyCallbacks = [];
    }
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    reset(value = undefined) {
        if (this.control)
            this.control.reset(value);
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
class ControlContainer extends AbstractControlDirective {
    /**
     * @description
     * The top-level form directive for the control.
     */
    get formDirective() {
        return null;
    }
    /**
     * @description
     * The path to this group.
     */
    get path() {
        return null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */
class NgControl extends AbstractControlDirective {
    constructor() {
        super(...arguments);
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */
        this._parent = null;
        /**
         * @description
         * The name for the control
         */
        this.name = null;
        /**
         * @description
         * The value accessor for the control
         */
        this.valueAccessor = null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class AbstractControlStatus {
    constructor(cd) {
        this._cd = cd;
    }
    is(status) {
        var _a, _b, _c;
        // Currently with ViewEngine (in AOT mode) it's not possible to use private methods in host
        // bindings.
        // TODO: once ViewEngine is removed, this function should be refactored:
        //  - make the `is` method `protected`, so it's not accessible publicly
        //  - move the `submitted` status logic to the `NgControlStatusGroup` class
        //    and make it `private` or `protected` too.
        if (status === 'submitted') {
            // We check for the `submitted` field from `NgForm` and `FormGroupDirective` classes, but
            // we avoid instanceof checks to prevent non-tree-shakable references to those types.
            return !!((_a = this._cd) === null || _a === void 0 ? void 0 : _a.submitted);
        }
        return !!((_c = (_b = this._cd) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c[status]);
    }
}
const ngControlStatusHost = {
    '[class.ng-untouched]': 'is("untouched")',
    '[class.ng-touched]': 'is("touched")',
    '[class.ng-pristine]': 'is("pristine")',
    '[class.ng-dirty]': 'is("dirty")',
    '[class.ng-valid]': 'is("valid")',
    '[class.ng-invalid]': 'is("invalid")',
    '[class.ng-pending]': 'is("pending")',
};
const ngGroupStatusHost = {
    '[class.ng-untouched]': 'is("untouched")',
    '[class.ng-touched]': 'is("touched")',
    '[class.ng-pristine]': 'is("pristine")',
    '[class.ng-dirty]': 'is("dirty")',
    '[class.ng-valid]': 'is("valid")',
    '[class.ng-invalid]': 'is("invalid")',
    '[class.ng-pending]': 'is("pending")',
    '[class.ng-submitted]': 'is("submitted")',
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgControlStatus extends AbstractControlStatus {
    constructor(cd) {
        super(cd);
    }
}
NgControlStatus.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
];
NgControlStatus.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc). On groups, this includes the additional
 * class ng-submitted.
 *
 * @see `NgControlStatus`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgControlStatusGroup extends AbstractControlStatus {
    constructor(cd) {
        super(cd);
    }
}
NgControlStatusGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngGroupStatusHost
            },] }
];
NgControlStatusGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
const formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
const formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
const ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
const ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlParentException() {
    return new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
    return new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
    return new Error(`formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
    return new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
    return new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
const disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });
`;
function ngModelWarning(directiveName) {
    return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName'}#use-with-ngmodel
  `;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlPath(name, parent) {
    return [...parent.path, name];
}
/**
 * Links a Form control and a Form directive by setting up callbacks (such as `onChange`) on both
 * instances. This function is typically invoked when form directive is being initialized.
 *
 * @param control Form control instance that should be linked.
 * @param dir Directive that should be linked with a given control.
 */
function setUpControl(control, dir) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
    }
    setUpValidators(control, dir);
    dir.valueAccessor.writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    setUpDisabledChangeHandler(control, dir);
}
/**
 * Reverts configuration performed by the `setUpControl` control function.
 * Effectively disconnects form control with a given form directive.
 * This function is typically invoked when corresponding form directive is being destroyed.
 *
 * @param control Form control which should be cleaned up.
 * @param dir Directive that should be disconnected from a given control.
 * @param validateControlPresenceOnChange Flag that indicates whether onChange handler should
 *     contain asserts to verify that it's not called once directive is destroyed. We need this flag
 *     to avoid potentially breaking changes caused by better control cleanup introduced in #39235.
 */
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
    const noop = () => {
        if (validateControlPresenceOnChange && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            _noControlError(dir);
        }
    };
    // The `valueAccessor` field is typically defined on FromControl and FormControlName directive
    // instances and there is a logic in `selectValueAccessor` function that throws if it's not the
    // case. We still check the presence of `valueAccessor` before invoking its methods to make sure
    // that cleanup works correctly if app code or tests are setup to ignore the error thrown from
    // `selectValueAccessor`. See https://github.com/angular/angular/issues/40521.
    if (dir.valueAccessor) {
        dir.valueAccessor.registerOnChange(noop);
        dir.valueAccessor.registerOnTouched(noop);
    }
    cleanUpValidators(control, dir);
    if (control) {
        dir._invokeOnDestroyCallbacks();
        control._registerOnCollectionChange(() => { });
    }
}
function registerOnValidatorChange(validators, onChange) {
    validators.forEach((validator) => {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(onChange);
    });
}
/**
 * Sets up disabled change handler function on a given form control if ControlValueAccessor
 * associated with a given directive instance supports the `setDisabledState` call.
 *
 * @param control Form control where disabled change handler should be setup.
 * @param dir Corresponding directive instance associated with this control.
 */
function setUpDisabledChangeHandler(control, dir) {
    if (dir.valueAccessor.setDisabledState) {
        const onDisabledChange = (isDisabled) => {
            dir.valueAccessor.setDisabledState(isDisabled);
        };
        control.registerOnDisabledChange(onDisabledChange);
        // Register a callback function to cleanup disabled change handler
        // from a control instance when a directive is destroyed.
        dir._registerOnDestroy(() => {
            control._unregisterOnDisabledChange(onDisabledChange);
        });
    }
}
/**
 * Sets up sync and async directive validators on provided form control.
 * This function merges validators from the directive into the validators of the control.
 *
 * @param control Form control where directive validators should be setup.
 * @param dir Directive instance that contains validators to be setup.
 */
function setUpValidators(control, dir) {
    const validators = getControlValidators(control);
    if (dir.validator !== null) {
        control.setValidators(mergeValidators(validators, dir.validator));
    }
    else if (typeof validators === 'function') {
        // If sync validators are represented by a single validator function, we force the
        // `Validators.compose` call to happen by executing the `setValidators` function with
        // an array that contains that function. We need this to avoid possible discrepancies in
        // validators behavior, so sync validators are always processed by the `Validators.compose`.
        // Note: we should consider moving this logic inside the `setValidators` function itself, so we
        // have consistent behavior on AbstractControl API level. The same applies to the async
        // validators logic below.
        control.setValidators([validators]);
    }
    const asyncValidators = getControlAsyncValidators(control);
    if (dir.asyncValidator !== null) {
        control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
    }
    else if (typeof asyncValidators === 'function') {
        control.setAsyncValidators([asyncValidators]);
    }
    // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    const onValidatorChange = () => control.updateValueAndValidity();
    registerOnValidatorChange(dir._rawValidators, onValidatorChange);
    registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
/**
 * Cleans up sync and async directive validators on provided form control.
 * This function reverts the setup performed by the `setUpValidators` function, i.e.
 * removes directive-specific validators from a given control instance.
 *
 * @param control Form control from where directive validators should be removed.
 * @param dir Directive instance that contains validators to be removed.
 * @returns true if a control was updated as a result of this action.
 */
function cleanUpValidators(control, dir) {
    let isControlUpdated = false;
    if (control !== null) {
        if (dir.validator !== null) {
            const validators = getControlValidators(control);
            if (Array.isArray(validators) && validators.length > 0) {
                // Filter out directive validator function.
                const updatedValidators = validators.filter(validator => validator !== dir.validator);
                if (updatedValidators.length !== validators.length) {
                    isControlUpdated = true;
                    control.setValidators(updatedValidators);
                }
            }
        }
        if (dir.asyncValidator !== null) {
            const asyncValidators = getControlAsyncValidators(control);
            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
                // Filter out directive async validator function.
                const updatedAsyncValidators = asyncValidators.filter(asyncValidator => asyncValidator !== dir.asyncValidator);
                if (updatedAsyncValidators.length !== asyncValidators.length) {
                    isControlUpdated = true;
                    control.setAsyncValidators(updatedAsyncValidators);
                }
            }
        }
    }
    // Clear onValidatorChange callbacks by providing a noop function.
    const noop = () => { };
    registerOnValidatorChange(dir._rawValidators, noop);
    registerOnValidatorChange(dir._rawAsyncValidators, noop);
    return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange((newValue) => {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(() => {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    const onChange = (newValue, emitModelEvent) => {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    };
    control.registerOnChange(onChange);
    // Register a callback function to cleanup onChange handler
    // from a control instance when a directive is destroyed.
    dir._registerOnDestroy(() => {
        control._unregisterOnChange(onChange);
    });
}
/**
 * Links a FormGroup or FormArray instance and corresponding Form directive by setting up validators
 * present in the view.
 *
 * @param control FormGroup or FormArray instance that should be linked.
 * @param dir Directive that provides view validators.
 */
function setUpFormContainer(control, dir) {
    if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode))
        _throwError(dir, 'Cannot find control with');
    setUpValidators(control, dir);
}
/**
 * Reverts the setup performed by the `setUpFormContainer` function.
 *
 * @param control FormGroup or FormArray instance that should be cleaned up.
 * @param dir Directive that provided view validators.
 * @returns true if a control was updated as a result of this action.
 */
function cleanUpFormContainer(control, dir) {
    return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    let messageEnd;
    if (dir.path.length > 1) {
        messageEnd = `path: '${dir.path.join(' -> ')}'`;
    }
    else if (dir.path[0]) {
        messageEnd = `name: '${dir.path}'`;
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(`${message} ${messageEnd}`);
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    const change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
    // Check if a given value accessor is an instance of a class that directly extends
    // `BuiltInControlValueAccessor` one.
    return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(dir => {
        const control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    let defaultAccessor = undefined;
    let builtinAccessor = undefined;
    let customAccessor = undefined;
    valueAccessors.forEach((v) => {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode))
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode))
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        _throwError(dir, 'No valid value accessor for form control with');
    }
    return null;
}
function removeListItem(list, el) {
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        console.warn(ngModelWarning(name));
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
const DISABLED = 'DISABLED';
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!Array.isArray(path)) {
        path = path.split(delimiter);
    }
    if (Array.isArray(path) && path.length === 0)
        return null;
    // Not using Array.reduce here due to a Chrome 80 bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    let controlToFind = control;
    path.forEach((name) => {
        if (controlToFind instanceof FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ?
                controlToFind.controls[name] :
                null;
        }
        else if (controlToFind instanceof FormArray) {
            controlToFind = controlToFind.at(name) || null;
        }
        else {
            controlToFind = null;
        }
    });
    return controlToFind;
}
/**
 * Gets validators from either an options object or given validators.
 */
function pickValidators(validatorOrOpts) {
    return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
/**
 * Creates validator function by combining provided validators.
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * Gets async validators from either an options object or given validators.
 */
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
    return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
/**
 * Creates async validator function by combining provided async validators.
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
        asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */
class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validators The function or array of functions that is used to determine the validity of
     *     this control synchronously.
     * @param asyncValidators The function or array of functions that is used to determine validity of
     *     this control asynchronously.
     */
    constructor(validators, asyncValidators) {
        /**
         * Indicates that a control has its own pending asynchronous validation in progress.
         *
         * @internal
         */
        this._hasOwnPendingAsyncValidator = false;
        /** @internal */
        this._onCollectionChange = () => { };
        this._parent = null;
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
        this._rawValidators = validators;
        this._rawAsyncValidators = asyncValidators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
    }
    /**
     * Returns the function that is used to determine the validity of this control synchronously.
     * If multiple validators have been added, this will be a single composed function.
     * See `Validators.compose()` for additional information.
     */
    get validator() {
        return this._composedValidatorFn;
    }
    set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
    }
    /**
     * Returns the function that is used to determine the validity of this control asynchronously.
     * If multiple validators have been added, this will be a single composed function.
     * See `Validators.compose()` for additional information.
     */
    get asyncValidator() {
        return this._composedAsyncValidatorFn;
    }
    set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
    }
    /**
     * The parent control.
     */
    get parent() {
        return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() {
        return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() {
        return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() {
        return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control is disabled, false otherwise.
     */
    get disabled() {
        return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @returns True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     * @see {@link AbstractControl.status}
     *
     */
    get enabled() {
        return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() {
        return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */
    get untouched() {
        return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     */
    get updateOn() {
        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
    }
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing synchronous validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * If you want to add a new validator without affecting existing ones, consider
     * using `addValidators()` method instead.
     */
    setValidators(validators) {
        this._rawValidators = validators;
        this._composedValidatorFn = coerceToValidator(validators);
    }
    /**
     * Sets the asynchronous validators that are active on this control. Calling this
     * overwrites any existing asynchronous validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * If you want to add a new validator without affecting existing ones, consider
     * using `addAsyncValidators()` method instead.
     */
    setAsyncValidators(validators) {
        this._rawAsyncValidators = validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(validators);
    }
    /**
     * Add a synchronous validator or validators to this control, without affecting other validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * Adding a validator that already exists will have no effect. If duplicate validator functions
     * are present in the `validators` array, only the first instance would be added to a form
     * control.
     *
     * @param validators The new validator function or functions to add to this control.
     */
    addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
    }
    /**
     * Add an asynchronous validator or validators to this control, without affecting other
     * validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * Adding a validator that already exists will have no effect.
     *
     * @param validators The new asynchronous validator function or functions to add to this control.
     */
    addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
    }
    /**
     * Remove a synchronous validator from this control, without affecting other validators.
     * Validators are compared by function reference; you must pass a reference to the exact same
     * validator function as the one that was originally set. If a provided validator is not found,
     * it is ignored.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param validators The validator or validators to remove.
     */
    removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
    }
    /**
     * Remove an asynchronous validator from this control, without affecting other validators.
     * Validators are compared by function reference; you must pass a reference to the exact same
     * validator function as the one that was originally set. If a provided validator is not found, it
     * is ignored.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param validators The asynchronous validator or validators to remove.
     */
    removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
    }
    /**
     * Check whether a synchronous validator function is present on this control. The provided
     * validator must be a reference to the exact same function that was provided.
     *
     * @param validator The validator to check for presence. Compared by function reference.
     * @returns Whether the provided validator was found on this control.
     */
    hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
    }
    /**
     * Check whether an asynchronous validator function is present on this control. The provided
     * validator must be a reference to the exact same function that was provided.
     *
     * @param validator The asynchronous validator to check for presence. Compared by function
     *     reference.
     * @returns Whether the provided asynchronous validator was found on this control.
     */
    hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
    }
    /**
     * Empties out the synchronous validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    clearValidators() {
        this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    clearAsyncValidators() {
        this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsTouched(opts = {}) {
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     */
    markAllAsTouched() {
        this.markAsTouched({ onlySelf: true });
        this._forEachChild((control) => control.markAllAsTouched());
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see `markAsTouched()`
     * @see `markAsDirty()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsUntouched(opts = {}) {
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild((control) => {
            control.markAsUntouched({ onlySelf: true });
        });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsPristine()`
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsDirty(opts = {}) {
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see `markAsTouched()`
     * @see `markAsUntouched()`
     * @see `markAsDirty()`
     *
     * @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsPristine(opts = {}) {
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild((control) => {
            control.markAsPristine({ onlySelf: true });
        });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    markAsPending(opts = {}) {
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    disable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
            control.disable(Object.assign(Object.assign({}, opts), { onlySelf: true }));
        });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors(Object.assign(Object.assign({}, opts), { skipPristineCheck }));
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    enable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
            control.enable(Object.assign(Object.assign({}, opts), { onlySelf: true }));
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(Object.assign(Object.assign({}, opts), { skipPristineCheck }));
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
    }
    _updateAncestors(opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
            }
            this._parent._updateTouched();
        }
    }
    /**
     * @param parent Sets the parent of the control
     */
    setParent(parent) {
        this._parent = parent;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    }
    /** @internal */
    _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    }
    _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(emitEvent) {
        if (this.asyncValidator) {
            this.status = PENDING;
            this._hasOwnPendingAsyncValidator = true;
            const obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe((errors) => {
                this._hasOwnPendingAsyncValidator = false;
                // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.
                this.setErrors(errors, { emitEvent });
            });
        }
    }
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            this._hasOwnPendingAsyncValidator = false;
        }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     *
     * ### Retrieve a control in a FormArray
     *
     * When accessing an element inside a FormArray, you can use an element index.
     * For example, to get a `price` control from the first element in an `items` array you can use:
     *
     * * `this.form.get('items.0.price');`
     *
     * -OR-
     *
     * * `this.form.get(['items', 0, 'price']);`
     */
    get(path) {
        return _find(this, path, '.');
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     */
    get root() {
        let x = this;
        while (x._parent) {
            x = x._parent;
        }
        return x;
    }
    /** @internal */
    _updateControlsErrors(emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
    /** @internal */
    _initObservables() {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
    /** @internal */
    _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
    }
    /** @internal */
    _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
    }
    /** @internal */
    _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
    }
    /** @internal */
    _updatePristine(opts = {}) {
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /** @internal */
    _updateTouched(opts = {}) {
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /** @internal */
    _isBoxedValue(formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /** @internal */
    _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
    }
    /** @internal */
    _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * @internal
     */
    _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
    }
}
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events. See [usage examples below](#usage-notes).
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a synchronous validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */
class FormControl extends AbstractControl {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        /** @internal */
        this._onChange = [];
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */
    patchValue(value, options = {}) {
        this.setValue(value, options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    reset(formState = null, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    }
    /**
     * @internal
     */
    _updateValue() { }
    /**
     * @internal
     */
    _anyControls(condition) {
        return false;
    }
    /**
     * @internal
     */
    _allControlsDisabled() {
        return this.disabled;
    }
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */
    registerOnChange(fn) {
        this._onChange.push(fn);
    }
    /**
     * Internal function to unregister a change events listener.
     * @internal
     */
    _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
    }
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /**
     * Internal function to unregister a disabled event listener.
     * @internal
     */
    _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
    }
    /**
     * @internal
     */
    _forEachChild(cb) { }
    /** @internal */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    }
    _applyFormState(formState) {
        if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    }
}
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */
class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    }
    /**
     * Add a control to this group.
     *
     * If a control with a given name already exists, it would *not* be replaced with a new one.
     * If you want to replace an existing control, use the {@link FormGroup#setControl setControl}
     * method instead. This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     * @param options Specifies whether this FormGroup instance should emit events after a new
     *     control is added.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * added. When false, no events are emitted.
     */
    addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Remove a control from this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to remove from the collection
     * @param options Specifies whether this FormGroup instance should emit events after a
     *     control is removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * removed. When false, no events are emitted.
     */
    removeControl(name, options = {}) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(() => { });
        delete (this.controls[name]);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Replace an existing control.
     *
     * If a control with a given name does not exist in this `FormGroup`, it will be added.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     * @param options Specifies whether this FormGroup instance should emit events after an
     *     existing control is replaced.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * replaced with a new one. When false, no events are emitted.
     */
    setControl(name, control, options = {}) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(() => { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param controlName The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(name => {
            this._throwIfControlMissing(name);
            this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control value
     * is updated. When false, no events are emitted. The configuration options are passed to
     * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
     */
    patchValue(value, options = {}) {
        // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
        // `patchValue` can be called recursively and inner data structures might have these values, so
        // we just ignore such cases when a field containing FormGroup instance receives `null` or
        // `undefined` as a value.
        if (value == null /* both `null` and `undefined` */)
            return;
        Object.keys(value).forEach(name => {
            if (this.controls[name]) {
                this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(form.value);  // {last: 'last'}
     * console.log(form.get('first').status);  // 'DISABLED'
     * ```
     */
    reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
        });
    }
    /** @internal */
    _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /** @internal */
    _throwIfControlMissing(name) {
        if (!Object.keys(this.controls).length) {
            throw new Error(`
        There are no form controls registered with this group yet. If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.controls[name]) {
            throw new Error(`Cannot find form control with name: ${name}.`);
        }
    }
    /** @internal */
    _forEachChild(cb) {
        Object.keys(this.controls).forEach(key => {
            // The list of controls can change (for ex. controls might be removed) while the loop
            // is running (as a result of invoking Forms API in `valueChanges` subscription), so we
            // have to null check before invoking the callback.
            const control = this.controls[key];
            control && cb(control, key);
        });
    }
    /** @internal */
    _setUpControls() {
        this._forEachChild((control) => {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        });
    }
    /** @internal */
    _updateValue() {
        this.value = this._reduceValue();
    }
    /** @internal */
    _anyControls(condition) {
        for (const controlName of Object.keys(this.controls)) {
            const control = this.controls[controlName];
            if (this.contains(controlName) && condition(control)) {
                return true;
            }
        }
        return false;
    }
    /** @internal */
    _reduceValue() {
        return this._reduceChildren({}, (acc, control, name) => {
            if (control.enabled || this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    }
    /** @internal */
    _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
            res = fn(res, control, name);
        });
        return res;
    }
    /** @internal */
    _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /** @internal */
    _checkAllValuesPresent(value) {
        this._forEachChild((control, name) => {
            if (value[name] === undefined) {
                throw new Error(`Must supply a value for form control with name: '${name}'.`);
            }
        });
    }
}
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */
class FormArray extends AbstractControl {
    /**
     * Creates a new `FormArray` instance.
     *
     * @param controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    at(index) {
        return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     * @param options Specifies whether this FormArray instance should emit events after a new
     *     control is added.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * inserted. When false, no events are emitted.
     */
    push(control, options = {}) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     * @param options Specifies whether this FormArray instance should emit events after a new
     *     control is inserted.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * inserted. When false, no events are emitted.
     */
    insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     * @param options Specifies whether this FormArray instance should emit events after a
     *     control is removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * removed. When false, no events are emitted.
     */
    removeAt(index, options = {}) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(() => { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     * @param options Specifies whether this FormArray instance should emit events after an
     *     existing control is replaced with a new one.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * replaced with a new one. When false, no events are emitted.
     */
    setControl(index, control, options = {}) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(() => { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Length of the control array.
     */
    get length() {
        return this.controls.length;
    }
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        value.forEach((newValue, index) => {
            this._throwIfControlMissing(index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control value
     * is updated. When false, no events are emitted. The configuration options are passed to
     * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
     */
    patchValue(value, options = {}) {
        // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
        // `patchValue` can be called recursively and inner data structures might have these values, so
        // we just ignore such cases when a field containing FormArray instance receives `null` or
        // `undefined` as a value.
        if (value == null /* both `null` and `undefined` */)
            return;
        value.forEach((newValue, index) => {
            if (this.at(index)) {
                this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(arr.value);  // ['last']
     * console.log(arr.at(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    getRawValue() {
        return this.controls.map((control) => {
            return control instanceof FormControl ? control.value : control.getRawValue();
        });
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * @param options Specifies whether this FormArray instance should emit events after all
     *     controls are removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when all controls
     * in this FormArray instance are removed. When false, no events are emitted.
     *
     * @usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     */
    clear(options = {}) {
        if (this.controls.length < 1)
            return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => { }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /** @internal */
    _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /** @internal */
    _throwIfControlMissing(index) {
        if (!this.controls.length) {
            throw new Error(`
        There are no form controls registered with this array yet. If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.at(index)) {
            throw new Error(`Cannot find form control at index ${index}`);
        }
    }
    /** @internal */
    _forEachChild(cb) {
        this.controls.forEach((control, index) => {
            cb(control, index);
        });
    }
    /** @internal */
    _updateValue() {
        this.value =
            this.controls.filter((control) => control.enabled || this.disabled)
                .map((control) => control.value);
    }
    /** @internal */
    _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
    }
    /** @internal */
    _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
    }
    /** @internal */
    _checkAllValuesPresent(value) {
        this._forEachChild((control, i) => {
            if (value[i] === undefined) {
                throw new Error(`Must supply a value for form control at index: ${i}.`);
            }
        });
    }
    /** @internal */
    _allControlsDisabled() {
        for (const control of this.controls) {
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    }
    _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgForm)
};
const ɵ0 = () => Promise.resolve(null);
const resolvedPromise = (ɵ0)();
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgForm extends ControlContainer {
    constructor(validators, asyncValidators) {
        super();
        /**
         * @description
         * Returns whether the form submission has been triggered.
         */
        this.submitted = false;
        this._directives = [];
        /**
         * @description
         * Event emitter for the "ngSubmit" event
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }
    /** @nodoc */
    ngAfterViewInit() {
        this._setUpdateStrategy();
    }
    /**
     * @description
     * The directive instance.
     */
    get formDirective() {
        return this;
    }
    /**
     * @description
     * The internal `FormGroup` instance.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * Returns a map of the controls in this group.
     */
    get controls() {
        return this.form.controls;
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */
    addControl(dir) {
        resolvedPromise.then(() => {
            const container = this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            this._directives.push(dir);
        });
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */
    getControl(dir) {
        return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */
    removeControl(dir) {
        resolvedPromise.then(() => {
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeListItem(this._directives, dir);
        });
    }
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    addFormGroup(dir) {
        resolvedPromise.then(() => {
            const container = this._findContainer(dir.path);
            const group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    }
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    removeFormGroup(dir) {
        resolvedPromise.then(() => {
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    getFormGroup(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */
    updateModel(dir, value) {
        resolvedPromise.then(() => {
            const ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
        });
    }
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */
    setValue(value) {
        this.control.setValue(value);
    }
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    onSubmit($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    onReset() {
        this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        this.submitted = false;
    }
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    }
    /** @internal */
    _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    }
}
NgForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] }
];
NgForm.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgForm.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */
class AbstractFormGroupDirective extends ControlContainer {
    /** @nodoc */
    ngOnInit() {
        this._checkParentType();
        // Register the group with its parent group.
        this.formDirective.addFormGroup(this);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.formDirective) {
            // Remove the group from its parent group.
            this.formDirective.removeFormGroup(this);
        }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */
    get control() {
        return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /** @internal */
    _checkParentType() { }
}
AbstractFormGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function modelParentException() {
    return new Error(`
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
    return new Error(`
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
    return new Error(`If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
    return new Error(`
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgModelGroup)
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgModelGroup extends AbstractFormGroupDirective {
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @internal */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw modelGroupParentException();
        }
    }
}
NgModelGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
];
NgModelGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgModelGroup.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NgModel)
};
const ɵ0$1 = () => Promise.resolve(null);
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have an old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel`s have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
const resolvedPromise$1 = (ɵ0$1)();
/**
 * @description
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the domain model's value in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like the validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex:
 * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
 * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
 * for direct access. See a full list of properties directly available in
 * `AbstractControlDirective`.
 *
 * @see `RadioControlValueAccessor`
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel `name` attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. Here,
 * an attribute identified as name is used within a custom form control component. To still be able
 * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
 *
 * ```html
 * <form>
 *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-custom-form-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgModel extends NgControl {
    constructor(parent, validators, asyncValidators, valueAccessors) {
        super();
        this.control = new FormControl();
        /** @internal */
        this._registered = false;
        /**
         * @description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
    }
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    }
    _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
    }
    _setUpStandalone() {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    }
    _checkForErrors() {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    }
    _checkParentType() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                throw formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                throw modelParentException();
            }
        }
    }
    _checkName() {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw missingNameException();
        }
    }
    _updateValue(value) {
        resolvedPromise$1.then(() => {
            this.control.setValue(value, { emitViewToModelChange: false });
        });
    }
    _updateDisabled(changes) {
        const disabledValue = changes['isDisabled'].currentValue;
        const isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(() => {
            if (isDisabled && !this.control.disabled) {
                this.control.disable();
            }
            else if (!isDisabled && this.control.disabled) {
                this.control.enable();
            }
        });
    }
}
NgModel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] }
];
NgModel.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
];
NgModel.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
class ɵNgNoValidate {
}
ɵNgNoValidate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => NumberValueAccessor),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NumberValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        const normalizedValue = value == null ? '' : value;
        this.setProperty('value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (value) => {
            fn(value == '' ? null : parseFloat(value));
        };
    }
}
NumberValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RadioControlValueAccessor),
    multi: true
};
function throwNameError() {
    throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
/**
 * Internal-only NgModule that works as a host for the `RadioControlRegistry` tree-shakable
 * provider. Note: the `InternalFormsSharedModule` can not be used here directly, since it's
 * declared *after* the `RadioControlRegistry` class and the `providedIn` doesn't support
 * `forwardRef` logic.
 */
class RadioControlRegistryModule {
}
RadioControlRegistryModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] }
];
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */
class RadioControlRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry. For internal use only.
     */
    add(control, accessor) {
        this._accessors.push([control, accessor]);
    }
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * @description
     * Selects a radio button. For internal use only.
     */
    select(accessor) {
        this._accessors.forEach((c) => {
            if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    }
    _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    }
}
RadioControlRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RadioControlRegistry_Factory() { return new RadioControlRegistry(); }, token: RadioControlRegistry, providedIn: RadioControlRegistryModule });
RadioControlRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: RadioControlRegistryModule },] }
];
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class RadioControlValueAccessor extends BuiltInControlValueAccessor {
    constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
        /**
         * The registered callback function called when a change event occurs on the input element.
         * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
         * to override the `onChange` function (which expects 1 argument) in the parent
         * `BaseControlValueAccessor` class.
         * @nodoc
         */
        this.onChange = () => { };
    }
    /** @nodoc */
    ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    }
    /** @nodoc */
    ngOnDestroy() {
        this._registry.remove(this);
    }
    /**
     * Sets the "checked" property value on the radio input element.
     * @nodoc
     */
    writeValue(value) {
        this._state = value === this.value;
        this.setProperty('checked', this._state);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
            fn(this.value);
            this._registry.select(this);
        };
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */
    fireUncheck(value) {
        this.writeValue(value);
    }
    _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    }
}
RadioControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] }
];
RadioControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: RadioControlRegistry },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
RadioControlValueAccessor.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RangeValueAccessor),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class RangeValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        this.setProperty('value', parseFloat(value));
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (value) => {
            fn(value == '' ? null : parseFloat(value));
        };
    }
}
RangeValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
const NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
const formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormControlDirective)
};
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormControlDirective extends NgControl {
    constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */
        this._ngModelWarningSent = false;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(disabledAttrWarning);
        }
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
            const previousForm = changes['form'].previousValue;
            if (previousForm) {
                cleanUpControl(previousForm, this, /* validateControlPresenceOnChange */ false);
            }
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
            }
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.form) {
            cleanUpControl(this.form, this, /* validateControlPresenceOnChange */ false);
        }
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * The `FormControl` bound to this directive.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    _isControlChanged(changes) {
        return changes.hasOwnProperty('form');
    }
}
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * @internal
 */
FormControlDirective._ngModelWarningSentOnce = false;
FormControlDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
];
FormControlDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormGroupDirective)
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormGroupDirective extends ControlContainer {
    constructor(validators, asyncValidators) {
        super();
        this.validators = validators;
        this.asyncValidators = asyncValidators;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * Callback that should be invoked when controls in FormGroup or FormArray collection change
         * (added or removed). This callback triggers corresponding DOM updates.
         */
        this._onCollectionChange = () => this._updateDomValue();
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */
        this.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */
        this.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
            this._oldForm = this.form;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.form) {
            cleanUpValidators(this.form, this);
            // Currently the `onCollectionChange` callback is rewritten each time the
            // `_registerOnCollectionChange` function is invoked. The implication is that cleanup should
            // happen *only* when the `onCollectionChange` callback was set by this directive instance.
            // Otherwise it might cause overriding a callback of some other directive instances. We should
            // consider updating this logic later to make it similar to how `onChange` callbacks are
            // handled, see https://github.com/angular/angular/issues/39732 for additional info.
            if (this.form._onCollectionChange === this._onCollectionChange) {
                this.form._registerOnCollectionChange(() => { });
            }
        }
    }
    /**
     * @description
     * Returns this directive's instance.
     */
    get formDirective() {
        return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */
    getControl(dir) {
        return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */
    removeControl(dir) {
        cleanUpControl(dir.control || null, dir, /* validateControlPresenceOnChange */ false);
        removeListItem(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    addFormGroup(dir) {
        this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */
    getFormGroup(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    addFormArray(dir) {
        this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    getFormArray(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */
    updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    onSubmit($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    onReset() {
        this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        this.submitted = false;
    }
    /** @internal */
    _updateDomValue() {
        this.directives.forEach(dir => {
            const oldCtrl = dir.control;
            const newCtrl = this.form.get(dir.path);
            if (oldCtrl !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(oldCtrl || null, dir);
                // Check whether new control at the same location inside the corresponding `FormGroup` is an
                // instance of `FormControl` and perform control setup only if that's the case.
                // Note: we don't need to clear the list of directives (`this.directives`) here, it would be
                // taken care of in the `removeControl` method invoked when corresponding `formControlName`
                // directive instance is being removed (invoked from `FormControlName.ngOnDestroy`).
                if (newCtrl instanceof FormControl) {
                    setUpControl(newCtrl, dir);
                    dir.control = newCtrl;
                }
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    }
    _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        // NOTE: this operation looks unnecessary in case no new validators were added in
        // `setUpFormContainer` call. Consider updating this code to match the logic in
        // `_cleanUpFormContainer` function.
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    _cleanUpFormContainer(dir) {
        if (this.form) {
            const ctrl = this.form.get(dir.path);
            if (ctrl) {
                const isControlUpdated = cleanUpFormContainer(ctrl, dir);
                if (isControlUpdated) {
                    // Run validity check only in case a control was updated (i.e. view validators were
                    // removed) as removing view validators might cause validity to change.
                    ctrl.updateValueAndValidity({ emitEvent: false });
                }
            }
        }
    }
    _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
            this._oldForm._registerOnCollectionChange(() => { });
        }
    }
    _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
            cleanUpValidators(this._oldForm, this);
        }
    }
    _checkFormPresent() {
        if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw missingFormException();
        }
    }
}
FormGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] }
];
FormGroupDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
    ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormGroupName)
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` to link, and
 * looks for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the {@link AbstractControl#get get} method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the {@link AbstractControl#get get} method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormGroupName extends AbstractFormGroupDirective {
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @internal */
    _checkParentType() {
        if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw groupParentException();
        }
    }
}
FormGroupName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
];
FormGroupName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
};
const formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormArrayName)
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormArrayName extends ControlContainer {
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /**
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     * @throws If the directive does not have a valid parent.
     * @nodoc
     */
    ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    }
    /**
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @nodoc
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */
    get control() {
        return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    _checkParentType() {
        if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw arrayParentException();
        }
    }
}
FormArrayName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
];
FormArrayName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormArrayName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
};
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FormControlName)
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see `FormControl`
 * @see `AbstractControl`
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel is deprecated
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormControlName extends NgControl {
    constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._added = false;
        /** @deprecated as of v6 */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        this._ngModelWarningSent = false;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(disabledAttrWarning);
        }
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
            }
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    _checkParentType() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                throw ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) &&
                !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                throw controlParentException();
            }
        }
    }
    _setUpControl() {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    }
}
/**
 * @description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * @internal
 */
FormControlName._ngModelWarningSentOnce = false;
FormControlName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
];
FormControlName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => SelectControlValueAccessor),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return `${value}`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in IE, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event#browser_compatibility
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class SelectControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
        super(...arguments);
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     * @nodoc
     */
    writeValue(value) {
        this.value = value;
        const id = this._getOptionId(value);
        if (id == null) {
            this.setProperty('selectedIndex', -1);
        }
        const valueString = _buildValueString(id, value);
        this.setProperty('value', valueString);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (valueString) => {
            this.value = this._getOptionValue(valueString);
            fn(this.value);
        };
    }
    /** @internal */
    _registerOption() {
        return (this._idCounter++).toString();
    }
    /** @internal */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
}
SelectControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] }
];
SelectControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgSelectOption {
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
        this._setElementValue(value);
        if (this._select)
            this._select.writeValue(this._select.value);
    }
    /** @internal */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
NgSelectOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
NgSelectOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
NgSelectOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => SelectMultipleControlValueAccessor),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return `${value}`;
    if (typeof value === 'string')
        value = `'${value}'`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */
class HTMLCollection {
}
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
 * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @see `SelectControlValueAccessor`
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
        super(...arguments);
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on one or of more of the select's options.
     * @nodoc
     */
    writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            const ids = value.map((v) => this._getOptionId(v));
            optionSelectedStateSetter = (opt, o) => {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
        }
        else {
            optionSelectedStateSetter = (opt, o) => {
                opt._setSelected(false);
            };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (_) => {
            const selected = [];
            if (_.selectedOptions !== undefined) {
                const options = _.selectedOptions;
                for (let i = 0; i < options.length; i++) {
                    const opt = options.item(i);
                    const val = this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                const options = _.options;
                for (let i = 0; i < options.length; i++) {
                    const opt = options.item(i);
                    if (opt.selected) {
                        const val = this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            this.value = selected;
            fn(selected);
        };
    }
    /** @internal */
    _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    }
    /** @internal */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id)._value, value))
                return id;
        }
        return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
}
SelectMultipleControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] }
];
SelectMultipleControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see `SelectMultipleControlValueAccessor`
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class ɵNgSelectMultipleOption {
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._value = value;
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
        if (this._select) {
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        }
        else {
            this._setElementValue(value);
        }
    }
    /** @internal */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @internal */
    _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
ɵNgSelectMultipleOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
ɵNgSelectMultipleOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
ɵNgSelectMultipleOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Method that updates string to integer if not alread a number
 *
 * @param value The value to convert to integer
 * @returns value of parameter in number or integer.
 */
function toNumber(value) {
    return typeof value === 'number' ? value : parseInt(value, 10);
}
/**
 * A base class for Validator-based Directives. The class contains common logic shared across such
 * Directives.
 *
 * For internal use only, this class is not intended for use outside of the Forms package.
 */
class AbstractValidatorDirective {
    constructor() {
        this._validator = nullValidator;
    }
    /**
     * Helper function invoked from child classes to process changes (from `ngOnChanges` hook).
     * @nodoc
     */
    handleChanges(changes) {
        if (this.inputName in changes) {
            const input = this.normalizeInput(changes[this.inputName].currentValue);
            this._validator = this.createValidator(input);
            if (this._onChange) {
                this._onChange();
            }
        }
    }
    /** @nodoc */
    validate(control) {
        return this._validator(control);
    }
    /** @nodoc */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
}
AbstractValidatorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"] }
];
/**
 * @description
 * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MaxValidator),
    multi: true
};
/**
 * A directive which installs the {@link MaxValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `max` attribute.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a max validator
 *
 * The following example shows how to add a max validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input type="number" ngModel max="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MaxValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'max';
        /** @internal */
        this.normalizeInput = (input) => parseFloat(input);
        /** @internal */
        this.createValidator = (max) => maxValidator(max);
    }
    /**
     * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
     * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
     * AOT mode. This could be refactored once ViewEngine is removed.
     * @nodoc
     */
    ngOnChanges(changes) {
        this.handleChanges(changes);
    }
}
MaxValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]',
                providers: [MAX_VALIDATOR],
                host: { '[attr.max]': 'max ?? null' }
            },] }
];
MaxValidator.propDecorators = {
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MinValidator),
    multi: true
};
/**
 * A directive which installs the {@link MinValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a min validator
 *
 * The following example shows how to add a min validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input type="number" ngModel min="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MinValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'min';
        /** @internal */
        this.normalizeInput = (input) => parseFloat(input);
        /** @internal */
        this.createValidator = (min) => minValidator(min);
    }
    /**
     * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
     * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
     * AOT mode. This could be refactored once ViewEngine is removed.
     * @nodoc
     */
    ngOnChanges(changes) {
        this.handleChanges(changes);
    }
}
MinValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]',
                providers: [MIN_VALIDATOR],
                host: { '[attr.min]': 'min ?? null' }
            },] }
];
MinValidator.propDecorators = {
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RequiredValidator),
    multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CheckboxRequiredValidator),
    multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class RequiredValidator {
    constructor() {
        this._required = false;
    }
    /**
     * @description
     * Tracks changes to the required attribute bound to this directive.
     */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = value != null && value !== false && `${value}` !== 'false';
        if (this._onChange)
            this._onChange();
    }
    /**
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    validate(control) {
        return this.required ? requiredValidator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
}
RequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
RequiredValidator.propDecorators = {
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an
 * ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
class CheckboxRequiredValidator extends RequiredValidator {
    /**
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    validate(control) {
        return this.required ? requiredTrueValidator(control) : null;
    }
}
CheckboxRequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => EmailValidator),
    multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel
 * binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
class EmailValidator {
    constructor() {
        this._enabled = false;
    }
    /**
     * @description
     * Tracks changes to the email attribute bound to this directive.
     */
    set email(value) {
        this._enabled = value === '' || value === true || value === 'true';
        if (this._onChange)
            this._onChange();
    }
    /**
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    validate(control) {
        return this._enabled ? emailValidator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
}
EmailValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] }
];
EmailValidator.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MinLengthValidator),
    multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MinLengthValidator {
    constructor() {
        this._validator = nullValidator;
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * Method that validates whether the value meets a minimum length requirement.
     * Returns the validation result if enabled, otherwise null.
     * @nodoc
     */
    validate(control) {
        return this.enabled() ? this._validator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    _createValidator() {
        this._validator =
            this.enabled() ? minLengthValidator(toNumber(this.minlength)) : nullValidator;
    }
    /** @nodoc */
    enabled() {
        return this.minlength != null /* both `null` and `undefined` */;
    }
}
MinLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'enabled() ? minlength : null' }
            },] }
];
MinLengthValidator.propDecorators = {
    minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MaxLengthValidator),
    multi: true
};
/**
 * A directive that adds max length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MaxLengthValidator {
    constructor() {
        this._validator = nullValidator;
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * Method that validates whether the value exceeds the maximum length requirement.
     * @nodoc
     */
    validate(control) {
        return this.enabled() ? this._validator(control) : null;
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    _createValidator() {
        this._validator =
            this.enabled() ? maxLengthValidator(toNumber(this.maxlength)) : nullValidator;
    }
    /** @nodoc */
    enabled() {
        return this.maxlength != null /* both `null` and `undefined` */;
    }
}
MaxLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'enabled() ? maxlength : null' }
            },] }
];
MaxLengthValidator.propDecorators = {
    maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PatternValidator),
    multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class PatternValidator {
    constructor() {
        this._validator = nullValidator;
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * Method that validates whether the value matches the pattern requirement.
     * @nodoc
     */
    validate(control) {
        return this._validator(control);
    }
    /**
     * Registers a callback function to call when the validator inputs change.
     * @nodoc
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    _createValidator() {
        this._validator = patternValidator(this.pattern);
    }
}
PatternValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] }
];
PatternValidator.propDecorators = {
    pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const SHARED_FORM_DIRECTIVES = [
    ɵNgNoValidate,
    NgSelectOption,
    ɵNgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
    MinValidator,
    MaxValidator,
];
const TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
const REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
class ɵInternalFormsSharedModule {
}
ɵInternalFormsSharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                imports: [RadioControlRegistryModule],
                exports: SHARED_FORM_DIRECTIVES,
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * Providers associated with this module:
 * * `RadioControlRegistry`
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */
class FormsModule {
}
FormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] }
];
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * Providers associated with this module:
 * * `FormBuilder`
 * * `RadioControlRegistry`
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */
class ReactiveFormsModule {
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    static withConfig(opts) {
        return {
            ngModule: ReactiveFormsModule,
            providers: [
                { provide: NG_MODEL_WITH_FORM_CONTROL_WARNING, useValue: opts.warnOnNgModelWithFormControl }
            ]
        };
    }
}
ReactiveFormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isAbstractControlOptions(options) {
    return options.asyncValidators !== undefined ||
        options.validators !== undefined ||
        options.updateOn !== undefined;
}
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * @publicApi
 */
class FormBuilder {
    group(controlsConfig, options = null) {
        const controls = this._reduceControls(controlsConfig);
        let validators = null;
        let asyncValidators = null;
        let updateOn = undefined;
        if (options != null) {
            if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
            }
            else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
        }
        return new FormGroup(controls, { asyncValidators, updateOn, validators });
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */
    control(formState, validatorOrOpts, asyncValidator) {
        return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * @param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     */
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        const controls = controlsConfig.map(c => this._createControl(c));
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /** @internal */
    _reduceControls(controlsConfig) {
        const controls = {};
        Object.keys(controlsConfig).forEach(controlName => {
            controls[controlName] = this._createControl(controlsConfig[controlName]);
        });
        return controls;
    }
    /** @internal */
    _createControl(controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            const value = controlConfig[0];
            const validator = controlConfig.length > 1 ? controlConfig[1] : null;
            const asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    }
}
FormBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function FormBuilder_Factory() { return new FormBuilder(); }, token: FormBuilder, providedIn: ReactiveFormsModule });
FormBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: ReactiveFormsModule },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('12.2.16');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathtoRegexp`.
 */

module.exports = pathtoRegexp;

/**
 * Match matching groups in a regular expression.
 */
var MATCHING_GROUP_REGEXP = /\((?!\?)/g;

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {Object} options
 * @return {RegExp}
 * @api private
 */

function pathtoRegexp(path, keys, options) {
  options = options || {};
  keys = keys || [];
  var strict = options.strict;
  var end = options.end !== false;
  var flags = options.sensitive ? '' : 'i';
  var extraOffset = 0;
  var keysOffset = keys.length;
  var i = 0;
  var name = 0;
  var m;

  if (path instanceof RegExp) {
    while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
      keys.push({
        name: name++,
        optional: false,
        offset: m.index
      });
    }

    return path;
  }

  if (Array.isArray(path)) {
    // Map array parts into regexps and return their source. We also pass
    // the same keys and options instance into every generation to get
    // consistent matching groups before we join the sources together.
    path = path.map(function (value) {
      return pathtoRegexp(value, keys, options).source;
    });

    return new RegExp('(?:' + path.join('|') + ')', flags);
  }

  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
    .replace(/\/\(/g, '/(?:')
    .replace(/([\/\.])/g, '\\$1')
    .replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (match, slash, format, key, capture, star, optional, offset) {
      slash = slash || '';
      format = format || '';
      capture = capture || '([^\\/' + format + ']+?)';
      optional = optional || '';

      keys.push({
        name: key,
        optional: !!optional,
        offset: offset + extraOffset
      });

      var result = ''
        + (optional ? '' : slash)
        + '(?:'
        + format + (optional ? slash : '') + capture
        + (star ? '((?:[\\/' + format + '].+?)?)' : '')
        + ')'
        + optional;

      extraOffset += result.length - match.length;

      return result;
    })
    .replace(/\*/g, function (star, index) {
      var len = keys.length

      while (len-- > keysOffset && keys[len].offset > index) {
        keys[len].offset += 3; // Replacement length minus asterisk length.
      }

      return '(.*)';
    });

  // This is a workaround for handling unnamed matching groups.
  while (m = MATCHING_GROUP_REGEXP.exec(path)) {
    var escapeCount = 0;
    var index = m.index;

    while (path.charAt(--index) === '\\') {
      escapeCount++;
    }

    // It's possible to escape the bracket.
    if (escapeCount % 2 === 1) {
      continue;
    }

    if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
      keys.splice(keysOffset + i, 0, {
        name: name++, // Unnamed matching groups must be consistently linear.
        optional: false,
        offset: m.index
      });
    }

    i++;
  }

  // If the path is non-ending, match until the end or a slash.
  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\/|$)'));

  return new RegExp(path, flags);
};


/***/ }),

/***/ "./node_modules/piral-core/dependencies.codegen":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/dependencies.codegen ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm2015/compiler.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var piral_ng_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral-ng/common */ "./node_modules/piral-ng/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _libre_atom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @libre/atom */ "./node_modules/@libre/atom/dist/index.esm.js");
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dbeining/react-atom */ "./node_modules/@dbeining/react-atom/dist/react-atom.js");
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_18__);



















/* harmony default export */ __webpack_exports__["default"] = (function(deps) {deps['my-app']={};deps["@angular/common"]=_angular_common__WEBPACK_IMPORTED_MODULE_0__;deps["@angular/common@12.2.16"]=_angular_common__WEBPACK_IMPORTED_MODULE_0__;deps["@angular/common/http"]=_angular_common_http__WEBPACK_IMPORTED_MODULE_1__;deps["@angular/compiler"]=_angular_compiler__WEBPACK_IMPORTED_MODULE_2__;deps["@angular/compiler@12.2.16"]=_angular_compiler__WEBPACK_IMPORTED_MODULE_2__;deps["@angular/core"]=_angular_core__WEBPACK_IMPORTED_MODULE_3__;deps["@angular/core@12.2.16"]=_angular_core__WEBPACK_IMPORTED_MODULE_3__;deps["@angular/forms"]=_angular_forms__WEBPACK_IMPORTED_MODULE_4__;deps["@angular/forms@12.2.16"]=_angular_forms__WEBPACK_IMPORTED_MODULE_4__;deps["@angular/platform-browser"]=_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__;deps["@angular/platform-browser@12.2.16"]=_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__;deps["@angular/platform-browser-dynamic"]=_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__;deps["@angular/platform-browser-dynamic@12.2.16"]=_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__;deps["@angular/router"]=_angular_router__WEBPACK_IMPORTED_MODULE_7__;deps["@angular/router@12.2.16"]=_angular_router__WEBPACK_IMPORTED_MODULE_7__;deps["piral-ng/common"]=piral_ng_common__WEBPACK_IMPORTED_MODULE_8__;deps["rxjs"]=rxjs__WEBPACK_IMPORTED_MODULE_9__;deps["rxjs@7.5.5"]=rxjs__WEBPACK_IMPORTED_MODULE_9__;deps["react"]=react__WEBPACK_IMPORTED_MODULE_10__;deps["react@17.0.2"]=react__WEBPACK_IMPORTED_MODULE_10__;deps["react-dom"]=react_dom__WEBPACK_IMPORTED_MODULE_11__;deps["react-dom@17.0.2"]=react_dom__WEBPACK_IMPORTED_MODULE_11__;deps["react-router"]=react_router__WEBPACK_IMPORTED_MODULE_12__;deps["react-router@5.3.3"]=react_router__WEBPACK_IMPORTED_MODULE_12__;deps["react-router-dom"]=react_router_dom__WEBPACK_IMPORTED_MODULE_13__;deps["react-router-dom@5.3.3"]=react_router_dom__WEBPACK_IMPORTED_MODULE_13__;deps["history"]=history__WEBPACK_IMPORTED_MODULE_14__;deps["history@4.10.1"]=history__WEBPACK_IMPORTED_MODULE_14__;deps["tslib"]=tslib__WEBPACK_IMPORTED_MODULE_15__;deps["tslib@2.4.0"]=tslib__WEBPACK_IMPORTED_MODULE_15__;deps["path-to-regexp"]=path_to_regexp__WEBPACK_IMPORTED_MODULE_16__;deps["path-to-regexp@0.1.7"]=path_to_regexp__WEBPACK_IMPORTED_MODULE_16__;deps["@libre/atom"]=_libre_atom__WEBPACK_IMPORTED_MODULE_17__;deps["@libre/atom@1.3.3"]=_libre_atom__WEBPACK_IMPORTED_MODULE_17__;deps["@dbeining/react-atom"]=_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_18__;deps["@dbeining/react-atom@4.1.21"]=_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_18__});

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/app.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/app.js ***!
  \****************************************************/
/*! exports provided: changeLayout, initialize, injectPilet, setComponent, setErrorComponent, setRoute, includeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLayout", function() { return changeLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPilet", function() { return injectPilet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComponent", function() { return setComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorComponent", function() { return setErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoute", function() { return setRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeProvider", function() { return includeProvider; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");

function changeLayout(ctx, current) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { app: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.app, 'layout', current) })));
}
function initialize(ctx, loading, error, modules) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { app: Object.assign(Object.assign({}, state.app), { error,
            loading }), modules })));
}
function injectPilet(ctx, pilet) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { modules: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replaceOrAddItem"])(state.modules, pilet, (m) => m.name === pilet.name), registry: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["removeNested"])(state.registry, (m) => m.pilet === pilet.name) })));
    ctx.emit('unload-pilet', {
        name: pilet.name,
    });
}
function setComponent(ctx, name, component) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { components: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.components, name, component) })));
}
function setErrorComponent(ctx, type, component) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { errorComponents: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.errorComponents, type, component) })));
}
function setRoute(ctx, path, component) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withRoute"])(path, component));
}
function includeProvider(ctx, provider) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withProvider"])(provider));
}
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/components.js":
/*!***********************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/components.js ***!
  \***********************************************************/
/*! exports provided: registerPage, unregisterPage, registerExtension, unregisterExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPage", function() { return registerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterPage", function() { return unregisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerExtension", function() { return registerExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterExtension", function() { return unregisterExtension; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");

function registerPage(ctx, name, value) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withPage"])(name, value));
}
function unregisterPage(ctx, name) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withoutPage"])(name));
}
function registerExtension(ctx, name, value) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withExtension"])(name, value));
}
function unregisterExtension(ctx, name, reference) {
    ctx.dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withoutExtension"])(name, reference));
}
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/data.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/data.js ***!
  \*****************************************************/
/*! exports provided: resetData, readDataItem, readDataValue, writeDataItem, tryWriteDataItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetData", function() { return resetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDataItem", function() { return readDataItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDataValue", function() { return readDataValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeDataItem", function() { return writeDataItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryWriteDataItem", function() { return tryWriteDataItem; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");

function resetData(ctx) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { data: {} })));
}
function readDataItem(ctx, key) {
    return ctx.readState((state) => state.data[key]);
}
function readDataValue(ctx, key) {
    const item = readDataItem(ctx, key);
    return item && item.value;
}
function writeDataItem(ctx, key, value, owner, target, expires) {
    const isNull = !value && typeof value === 'object';
    const data = isNull
        ? value
        : {
            value,
            owner,
            target,
            expires,
        };
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { data: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateKey"])(state.data, key, data) })));
    ctx.emit('store-data', {
        name: key,
        target,
        value,
        owner,
        expires,
    });
}
function tryWriteDataItem(ctx, key, value, owner, target, expires) {
    const item = readDataItem(ctx, key);
    if (item && item.owner !== owner) {
        console.error(`Invalid data write to '${key}'. This item currently belongs to '${item.owner}' (write attempted from '${owner}'). The action has been ignored.`);
        return false;
    }
    writeDataItem(ctx, key, value, owner, target, expires);
    return true;
}
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/define.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/define.js ***!
  \*******************************************************/
/*! exports provided: defineAction, defineActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineAction", function() { return defineAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineActions", function() { return defineActions; });
function defineAction(ctx, actionName, action) {
    ctx[actionName] = action.bind(ctx, ctx);
}
function defineActions(ctx, actions) {
    for (const actionName of Object.keys(actions)) {
        const action = actions[actionName];
        defineAction(ctx, actionName, action);
    }
}
//# sourceMappingURL=define.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/index.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/index.js ***!
  \******************************************************/
/*! exports provided: changeLayout, initialize, injectPilet, setComponent, setErrorComponent, setRoute, includeProvider, registerPage, unregisterPage, registerExtension, unregisterExtension, resetData, readDataItem, readDataValue, writeDataItem, tryWriteDataItem, defineAction, defineActions, destroyPortal, hidePortal, updatePortal, showPortal, dispatch, readState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./node_modules/piral-core/esm/actions/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeLayout", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["changeLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["initialize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectPilet", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["injectPilet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setComponent", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["setComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setErrorComponent", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["setErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRoute", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["setRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeProvider", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["includeProvider"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/actions/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPage", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["registerPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterPage", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["unregisterPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerExtension", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["registerExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterExtension", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["unregisterExtension"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./node_modules/piral-core/esm/actions/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetData", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["resetData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readDataItem", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["readDataItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readDataValue", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["readDataValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeDataItem", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["writeDataItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryWriteDataItem", function() { return _data__WEBPACK_IMPORTED_MODULE_2__["tryWriteDataItem"]; });

/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./define */ "./node_modules/piral-core/esm/actions/define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAction", function() { return _define__WEBPACK_IMPORTED_MODULE_3__["defineAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineActions", function() { return _define__WEBPACK_IMPORTED_MODULE_3__["defineActions"]; });

/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal */ "./node_modules/piral-core/esm/actions/portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyPortal", function() { return _portal__WEBPACK_IMPORTED_MODULE_4__["destroyPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePortal", function() { return _portal__WEBPACK_IMPORTED_MODULE_4__["hidePortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePortal", function() { return _portal__WEBPACK_IMPORTED_MODULE_4__["updatePortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPortal", function() { return _portal__WEBPACK_IMPORTED_MODULE_4__["showPortal"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/actions/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["dispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readState", function() { return _state__WEBPACK_IMPORTED_MODULE_5__["readState"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/portal.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/portal.js ***!
  \*******************************************************/
/*! exports provided: destroyPortal, hidePortal, updatePortal, showPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyPortal", function() { return destroyPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePortal", function() { return hidePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortal", function() { return updatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPortal", function() { return showPortal; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");

function destroyPortal(ctx, id) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { portals: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withoutKey"])(state.portals, id) })));
}
function hidePortal(ctx, id, entry) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { portals: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.portals, id, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["excludeItem"])(state.portals[id], entry)) })));
}
function updatePortal(ctx, id, current, next) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { portals: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.portals, id, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replaceOrAddItem"])(state.portals[id], next, (m) => m === current)) })));
}
function showPortal(ctx, id, entry) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { portals: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["withKey"])(state.portals, id, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["includeItem"])(state.portals[id], entry)) })));
}
//# sourceMappingURL=portal.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/actions/state.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/actions/state.js ***!
  \******************************************************/
/*! exports provided: dispatch, readState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readState", function() { return readState; });
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dbeining/react-atom */ "./node_modules/@dbeining/react-atom/dist/react-atom.js");
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__);

function dispatch(ctx, update) {
    Object(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__["swap"])(ctx.state, update);
}
function readState(ctx, read) {
    const state = Object(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__["deref"])(ctx.state);
    return read(state);
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/DefaultErrorInfo.js":
/*!********************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/DefaultErrorInfo.js ***!
  \********************************************************************/
/*! exports provided: DefaultErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorInfo", function() { return DefaultErrorInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionSlot */ "./node_modules/piral-core/esm/components/ExtensionSlot.js");
/* harmony import */ var _SwitchErrorInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchErrorInfo */ "./node_modules/piral-core/esm/components/SwitchErrorInfo.js");



/**
 * The default error info component. Just uses the "error" extension slot.
 * Leverage the default one by registration of respective extensions using
 * the "error" name.
 */
const DefaultErrorInfo = (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ExtensionSlot__WEBPACK_IMPORTED_MODULE_1__["ExtensionSlot"], { name: "error", params: props, empty: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SwitchErrorInfo__WEBPACK_IMPORTED_MODULE_2__["SwitchErrorInfo"], Object.assign({ key: "default_error" }, props)) }));
DefaultErrorInfo.displayName = 'DefaultErrorInfo';
//# sourceMappingURL=DefaultErrorInfo.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/DefaultLayout.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/DefaultLayout.js ***!
  \*****************************************************************/
/*! exports provided: DefaultLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayout", function() { return DefaultLayout; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");

/**
 * The default layout only rendering the provided children.
 */
const DefaultLayout = ({ children }) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["defaultRender"])(children);
DefaultLayout.displayName = 'DefaultLayout';
//# sourceMappingURL=DefaultLayout.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/DefaultLoader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/DefaultLoader.js ***!
  \*****************************************************************/
/*! exports provided: DefaultLoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingIndicator", function() { return DefaultLoadingIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The default loading indicator only displaying "Loading".
 */
const DefaultLoadingIndicator = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading");
DefaultLoadingIndicator.displayName = 'DefaultLoadingIndicator';
//# sourceMappingURL=DefaultLoader.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/DefaultRouteSwitch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/DefaultRouteSwitch.js ***!
  \**********************************************************************/
/*! exports provided: DefaultRouteSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRouteSwitch", function() { return DefaultRouteSwitch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");



const DefaultRouteSwitch = (_a) => {
    var { paths, NotFound } = _a, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["paths", "NotFound"]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], Object.assign({}, props),
        paths.map(({ path, Component }) => (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, key: path, path: path, component: Component }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], { component: NotFound })));
};
//# sourceMappingURL=DefaultRouteSwitch.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/DefaultRouter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/DefaultRouter.js ***!
  \*****************************************************************/
/*! exports provided: DefaultRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRouter", function() { return DefaultRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");



const DefaultRouter = ({ children }) => {
    const publicPath = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalState"])((s) => s.app.publicPath);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], { basename: publicPath }, children);
};
//# sourceMappingURL=DefaultRouter.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/ErrorBoundary.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/ErrorBoundary.js ***!
  \*****************************************************************/
/*! exports provided: ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/components/components.js");



/**
 * The component for catching errors and displaying error information.
 */
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            error: undefined,
        };
    }
    componentDidCatch(error) {
        const { piral, errorType } = this.props;
        const pilet = piral.meta.name;
        console.error(`[${pilet}] Exception in component of type "${errorType}".`, error);
        this.setState({
            error,
        });
    }
    render() {
        const _a = this.props, { children, piral, errorType } = _a, renderProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "piral", "errorType"]);
        const { error } = this.state;
        const rest = renderProps;
        if (error) {
            const pilet = piral.meta.name;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralError"], Object.assign({ type: errorType, error: error, pilet: pilet }, rest));
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["PiralLoadingIndicator"], null) }, children);
    }
}
//# sourceMappingURL=ErrorBoundary.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/ExtensionSlot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/ExtensionSlot.js ***!
  \*****************************************************************/
/*! exports provided: ExtensionSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionSlot", function() { return ExtensionSlot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");




function defaultOrder(extensions) {
    return extensions;
}
/**
 * The extension slot component to be used when the available
 * extensions of a given name should be rendered at a specific
 * location.
 */
function ExtensionSlot(props) {
    const { name, render = _utils__WEBPACK_IMPORTED_MODULE_3__["defaultRender"], empty, params, children, emptySkipsRender = false, order = defaultOrder, } = props;
    const extensions = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalState"])((s) => s.registry.extensions[name] || _utils__WEBPACK_IMPORTED_MODULE_3__["none"]);
    const isEmpty = extensions.length === 0 && Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["isfunc"])(empty);
    const content = isEmpty
        ? [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["defaultRender"])(empty(), 'empty')]
        : order(extensions).map(({ component: Component, reference, defaults = {} }, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, { key: `${(reference === null || reference === void 0 ? void 0 : reference.displayName) || '_'}${i}`, children: children, params: Object.assign(Object.assign({}, defaults), (params || {})) })));
    if (isEmpty && emptySkipsRender) {
        return content[0];
    }
    return render(content);
}
ExtensionSlot.displayName = `ExtensionSlot`;
//# sourceMappingURL=ExtensionSlot.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/ForeignComponentContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/ForeignComponentContainer.js ***!
  \*****************************************************************************/
/*! exports provided: ForeignComponentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignComponentContainer", function() { return ForeignComponentContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");


class ForeignComponentContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.local = {};
        this.handler = (ev) => {
            const { innerProps } = this.props;
            ev.stopPropagation();
            innerProps.piral.renderHtmlExtension(ev.detail.target, ev.detail.props);
        };
        this.setNode = (node) => {
            this.current = node;
        };
    }
    componentDidMount() {
        const node = this.current;
        const { $component, $context, innerProps } = this.props;
        const { mount } = $component;
        if (node && Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["isfunc"])(mount)) {
            mount(node, innerProps, $context, this.local);
            node.addEventListener('render-html', this.handler, false);
        }
        this.previous = node;
    }
    componentDidUpdate() {
        const { current, previous } = this;
        const { $component, $context, innerProps } = this.props;
        const { update } = $component;
        if (current !== previous) {
            previous && this.componentWillUnmount();
            current && this.componentDidMount();
        }
        else if (Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["isfunc"])(update)) {
            update(current, innerProps, $context, this.local);
        }
    }
    componentWillUnmount() {
        const node = this.previous;
        const { $component } = this.props;
        const { unmount } = $component;
        if (node && Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["isfunc"])(unmount)) {
            unmount(node, this.local);
            node.removeEventListener('render-html', this.handler, false);
        }
        this.previous = undefined;
    }
    render() {
        const { $portalId } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "data-portal-id": $portalId, ref: this.setNode });
    }
}
//# sourceMappingURL=ForeignComponentContainer.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/Mediator.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/Mediator.js ***!
  \************************************************************/
/*! exports provided: Mediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return Mediator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");




/**
 * The Mediator component for interfacing with pilets loading.
 */
const Mediator = ({ options }) => {
    const { initialize, readState } = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalStateContext"])();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        const shouldLoad = readState(s => s.app.loading);
        if (shouldLoad) {
            const { connect, disconnect } = Object(piral_base__WEBPACK_IMPORTED_MODULE_1__["startLoadingPilets"])(options);
            const notifier = (error, pilets, loaded) => {
                initialize(!loaded, error, pilets);
            };
            connect(notifier);
            return () => disconnect(notifier);
        }
    }, _utils__WEBPACK_IMPORTED_MODULE_3__["none"]);
    // tslint:disable-next-line:no-null-keyword
    return null;
};
//# sourceMappingURL=Mediator.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/PiralRoutes.js":
/*!***************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/PiralRoutes.js ***!
  \***************************************************************/
/*! exports provided: PiralRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralRoutes", function() { return PiralRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");



/**
 * The component for defining the exclusive routes to be used.
 */
const PiralRoutes = (_a) => {
    var { NotFound, RouteSwitch } = _a, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["NotFound", "RouteSwitch"]);
    const routes = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalState"])((s) => s.routes);
    const pages = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalState"])((s) => s.registry.pages);
    const paths = [];
    Object.keys(routes).map((path) => paths.push({ path, Component: routes[path] }));
    Object.keys(pages).map((path) => paths.push({ path, Component: pages[path].component }));
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RouteSwitch, Object.assign({ NotFound: NotFound, paths: paths }, props));
};
PiralRoutes.displayName = 'Routes';
//# sourceMappingURL=PiralRoutes.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/PiralView.js":
/*!*************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/PiralView.js ***!
  \*************************************************************/
/*! exports provided: PiralView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralView", function() { return PiralView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _PiralRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PiralRoutes */ "./node_modules/piral-core/esm/components/PiralRoutes.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/components/components.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");





const NotFound = (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralError"], Object.assign({ type: "not_found" }, props));
const PiralContent = () => {
    const { error, loading, layout } = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"])((m) => m.app);
    return error ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralError"], { type: "loading", error: error })) : loading ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralLoadingIndicator"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralLayout"], { currentLayout: layout },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PiralRoutes__WEBPACK_IMPORTED_MODULE_2__["PiralRoutes"], { NotFound: NotFound, RouteSwitch: _components__WEBPACK_IMPORTED_MODULE_3__["PiralRouteSwitch"] })));
};
const FallbackRouter = (props) => {
    const publicPath = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"])((s) => s.app.publicPath);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], Object.assign({ location: "/" }, props, { basename: publicPath }));
};
const Router = typeof window === 'undefined' ? FallbackRouter : _components__WEBPACK_IMPORTED_MODULE_3__["PiralRouter"];
const PiralProvider = ({ children }) => {
    const provider = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalState"])((m) => m.provider) || react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](provider, undefined, children);
};
/**
 * The component responsible for the generic view of the application.
 * This includes the global providers, the used Router, the current content and some convenience.
 */
const PiralView = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PiralProvider, null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Router, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PiralContent, null),
        children,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_3__["PiralDebug"], null))));
PiralView.displayName = 'PiralView';
//# sourceMappingURL=PiralView.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/PortalRenderer.js":
/*!******************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/PortalRenderer.js ***!
  \******************************************************************/
/*! exports provided: PortalRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalRenderer", function() { return PortalRenderer; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");


const PortalRenderer = ({ id }) => {
    const children = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useGlobalState"])((m) => m.portals[id]) || _utils__WEBPACK_IMPORTED_MODULE_1__["none"];
    return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["defaultRender"])(children);
};
//# sourceMappingURL=PortalRenderer.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/ResponsiveLayout.js":
/*!********************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/ResponsiveLayout.js ***!
  \********************************************************************/
/*! exports provided: ResponsiveLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveLayout", function() { return ResponsiveLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");



/**
 * The component capable of identifying and switching the currently used layout.
 */
const ResponsiveLayout = ({ breakpoints = _utils__WEBPACK_IMPORTED_MODULE_2__["defaultBreakpoints"], children }) => {
    const current = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((m) => m.app.layout) || 'desktop';
    const { changeLayout } = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useGlobalStateContext"])();
    const selected = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useMedia"])(breakpoints, _utils__WEBPACK_IMPORTED_MODULE_2__["defaultLayouts"], current);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        if (selected !== current) {
            changeLayout(selected);
        }
    }, [selected]);
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["defaultRender"])(children);
};
ResponsiveLayout.displayName = 'ResponsiveLayout';
//# sourceMappingURL=ResponsiveLayout.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetComponent.js":
/*!****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetComponent.js ***!
  \****************************************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");

/**
 * The component capable of setting a layout component at mounting.
 */
function SetComponent({ name, component, }) {
    const { setComponent } = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useGlobalStateContext"])();
    Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useSetter"])(() => component && setComponent(name, component));
    // tslint:disable-next-line:no-null-keyword
    return null;
}
//# sourceMappingURL=SetComponent.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetError.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetError.js ***!
  \************************************************************/
/*! exports provided: SetError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetError", function() { return SetError; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");

/**
 * The component capable of setting a globally defined error handler component at mounting.
 */
function SetError({ type, component, }) {
    const { setErrorComponent } = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useGlobalStateContext"])();
    Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useSetter"])(() => component && setErrorComponent(type, component));
    // tslint:disable-next-line:no-null-keyword
    return null;
}
//# sourceMappingURL=SetError.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetErrors.js":
/*!*************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetErrors.js ***!
  \*************************************************************/
/*! exports provided: SetErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetErrors", function() { return SetErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SetError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetError */ "./node_modules/piral-core/esm/components/SetError.js");


/**
 * The component capable of batch setting error handling components.
 */
function SetErrors({ errors = {} }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object.keys(errors).map((key) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SetError__WEBPACK_IMPORTED_MODULE_1__["SetError"], { type: key, component: errors[key], key: key })))));
}
//# sourceMappingURL=SetErrors.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetLayout.js":
/*!*************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetLayout.js ***!
  \*************************************************************/
/*! exports provided: SetLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLayout", function() { return SetLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SetComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetComponent */ "./node_modules/piral-core/esm/components/SetComponent.js");


/**
 * The component capable of batch setting layout components.
 */
function SetLayout({ layout = {} }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object.keys(layout).map((key) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SetComponent__WEBPACK_IMPORTED_MODULE_1__["SetComponent"], { name: key, component: layout[key], key: key })))));
}
//# sourceMappingURL=SetLayout.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetProvider.js":
/*!***************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetProvider.js ***!
  \***************************************************************/
/*! exports provided: SetProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetProvider", function() { return SetProvider; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");

/**
 * The component capable of setting a global provider at mounting.
 */
function SetProvider({ provider }) {
    const { includeProvider } = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useGlobalStateContext"])();
    Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useSetter"])(() => provider && includeProvider(provider));
    // tslint:disable-next-line:no-null-keyword
    return null;
}
//# sourceMappingURL=SetProvider.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetRedirect.js":
/*!***************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetRedirect.js ***!
  \***************************************************************/
/*! exports provided: SetRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRedirect", function() { return SetRedirect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");



/**
 * The component capable of setting a global redirect route at mounting.
 */
function SetRedirect({ from, to }) {
    const { setRoute } = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useGlobalStateContext"])();
    Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetter"])(() => setRoute(from, () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: to })));
    // tslint:disable-next-line:no-null-keyword
    return null;
}
//# sourceMappingURL=SetRedirect.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SetRoute.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SetRoute.js ***!
  \************************************************************/
/*! exports provided: SetRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRoute", function() { return SetRoute; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");

/**
 * The component capable of setting a global route at mounting.
 */
function SetRoute({ path, component }) {
    const { setRoute } = Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useGlobalStateContext"])();
    Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useSetter"])(() => component && setRoute(path, component));
    // tslint:disable-next-line:no-null-keyword
    return null;
}
//# sourceMappingURL=SetRoute.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/SwitchErrorInfo.js":
/*!*******************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/SwitchErrorInfo.js ***!
  \*******************************************************************/
/*! exports provided: SwitchErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchErrorInfo", function() { return SwitchErrorInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");



function renderComponent(components, props) {
    const name = props.type;
    const Component = components[name];
    if (true) {
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => console.error('[dev-info] An error occurred in the Piral instance.', props), _utils__WEBPACK_IMPORTED_MODULE_2__["none"]);
    }
    if (!Component) {
        const Unknown = components.unknown;
        if (Unknown) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Unknown, Object.assign({}, props, { type: "unknown" }));
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["defaultRender"])(`Error: ${props.type}`);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props));
}
const SwitchErrorInfo = (props) => {
    const components = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((m) => m.errorComponents);
    return renderComponent(components, props);
};
//# sourceMappingURL=SwitchErrorInfo.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/components.js":
/*!**************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/components.js ***!
  \**************************************************************/
/*! exports provided: getPiralComponent, PiralError, PiralLoadingIndicator, PiralRouter, PiralRouteSwitch, PiralLayout, PiralDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPiralComponent", function() { return getPiralComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralError", function() { return PiralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralLoadingIndicator", function() { return PiralLoadingIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralRouter", function() { return PiralRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralRouteSwitch", function() { return PiralRouteSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralLayout", function() { return PiralLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiralDebug", function() { return PiralDebug; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");


function getPiralComponent(name) {
    return (props) => {
        const Component = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])((s) => s.components[name]);
        // tslint:disable-next-line:no-null-keyword
        return Component ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props)) : null;
    };
}
/**
 * Gets the currently registered ErrorInfo component.
 * By default the DefaultErrorInfo component is used.
 */
const PiralError = getPiralComponent('ErrorInfo');
/**
 * Gets the currently registered LoadingIndicator component.
 * By default only Loading is rendered.
 */
const PiralLoadingIndicator = getPiralComponent('LoadingIndicator');
/**
 * Gets the currently registered Router component.
 * By default the BrowserRouter is used.
 */
const PiralRouter = getPiralComponent('Router');
/**
 * Gets the currently registered Route Switch component.
 * By default the DefaultRouteSwitch component is used.
 */
const PiralRouteSwitch = getPiralComponent('RouteSwitch');
/**
 * Gets the currently registered Layout component.
 * By default the children are rendered.
 */
const PiralLayout = getPiralComponent('Layout');
/**
 * Gets the currently registered Debug component.
 * By default nothing is used.
 */
const PiralDebug = getPiralComponent('Debug');
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-core/esm/components/index.js ***!
  \*********************************************************/
/*! exports provided: getPiralComponent, PiralError, PiralLoadingIndicator, PiralRouter, PiralRouteSwitch, PiralLayout, PiralDebug, DefaultErrorInfo, DefaultLayout, DefaultLoadingIndicator, DefaultRouter, DefaultRouteSwitch, ErrorBoundary, ExtensionSlot, Mediator, PiralRoutes, PiralView, PortalRenderer, ResponsiveLayout, SetComponent, SetError, SetErrors, SetLayout, SetProvider, SetRedirect, SetRoute, SwitchErrorInfo, wrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/components/components.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPiralComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["getPiralComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralError", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLoadingIndicator", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralLoadingIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRouter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRouteSwitch", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralRouteSwitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralLayout", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralDebug", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["PiralDebug"]; });

/* harmony import */ var _DefaultErrorInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultErrorInfo */ "./node_modules/piral-core/esm/components/DefaultErrorInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorInfo", function() { return _DefaultErrorInfo__WEBPACK_IMPORTED_MODULE_1__["DefaultErrorInfo"]; });

/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultLayout */ "./node_modules/piral-core/esm/components/DefaultLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayout", function() { return _DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayout"]; });

/* harmony import */ var _DefaultLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultLoader */ "./node_modules/piral-core/esm/components/DefaultLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingIndicator", function() { return _DefaultLoader__WEBPACK_IMPORTED_MODULE_3__["DefaultLoadingIndicator"]; });

/* harmony import */ var _DefaultRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultRouter */ "./node_modules/piral-core/esm/components/DefaultRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultRouter", function() { return _DefaultRouter__WEBPACK_IMPORTED_MODULE_4__["DefaultRouter"]; });

/* harmony import */ var _DefaultRouteSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultRouteSwitch */ "./node_modules/piral-core/esm/components/DefaultRouteSwitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultRouteSwitch", function() { return _DefaultRouteSwitch__WEBPACK_IMPORTED_MODULE_5__["DefaultRouteSwitch"]; });

/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorBoundary */ "./node_modules/piral-core/esm/components/ErrorBoundary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__["ErrorBoundary"]; });

/* harmony import */ var _ExtensionSlot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExtensionSlot */ "./node_modules/piral-core/esm/components/ExtensionSlot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionSlot", function() { return _ExtensionSlot__WEBPACK_IMPORTED_MODULE_7__["ExtensionSlot"]; });

/* harmony import */ var _Mediator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mediator */ "./node_modules/piral-core/esm/components/Mediator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mediator", function() { return _Mediator__WEBPACK_IMPORTED_MODULE_8__["Mediator"]; });

/* harmony import */ var _PiralRoutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PiralRoutes */ "./node_modules/piral-core/esm/components/PiralRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralRoutes", function() { return _PiralRoutes__WEBPACK_IMPORTED_MODULE_9__["PiralRoutes"]; });

/* harmony import */ var _PiralView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PiralView */ "./node_modules/piral-core/esm/components/PiralView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PiralView", function() { return _PiralView__WEBPACK_IMPORTED_MODULE_10__["PiralView"]; });

/* harmony import */ var _PortalRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PortalRenderer */ "./node_modules/piral-core/esm/components/PortalRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalRenderer", function() { return _PortalRenderer__WEBPACK_IMPORTED_MODULE_11__["PortalRenderer"]; });

/* harmony import */ var _ResponsiveLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ResponsiveLayout */ "./node_modules/piral-core/esm/components/ResponsiveLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveLayout", function() { return _ResponsiveLayout__WEBPACK_IMPORTED_MODULE_12__["ResponsiveLayout"]; });

/* harmony import */ var _SetComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SetComponent */ "./node_modules/piral-core/esm/components/SetComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return _SetComponent__WEBPACK_IMPORTED_MODULE_13__["SetComponent"]; });

/* harmony import */ var _SetError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SetError */ "./node_modules/piral-core/esm/components/SetError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetError", function() { return _SetError__WEBPACK_IMPORTED_MODULE_14__["SetError"]; });

/* harmony import */ var _SetErrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SetErrors */ "./node_modules/piral-core/esm/components/SetErrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetErrors", function() { return _SetErrors__WEBPACK_IMPORTED_MODULE_15__["SetErrors"]; });

/* harmony import */ var _SetLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SetLayout */ "./node_modules/piral-core/esm/components/SetLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLayout", function() { return _SetLayout__WEBPACK_IMPORTED_MODULE_16__["SetLayout"]; });

/* harmony import */ var _SetProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SetProvider */ "./node_modules/piral-core/esm/components/SetProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetProvider", function() { return _SetProvider__WEBPACK_IMPORTED_MODULE_17__["SetProvider"]; });

/* harmony import */ var _SetRedirect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SetRedirect */ "./node_modules/piral-core/esm/components/SetRedirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetRedirect", function() { return _SetRedirect__WEBPACK_IMPORTED_MODULE_18__["SetRedirect"]; });

/* harmony import */ var _SetRoute__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SetRoute */ "./node_modules/piral-core/esm/components/SetRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetRoute", function() { return _SetRoute__WEBPACK_IMPORTED_MODULE_19__["SetRoute"]; });

/* harmony import */ var _SwitchErrorInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SwitchErrorInfo */ "./node_modules/piral-core/esm/components/SwitchErrorInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchErrorInfo", function() { return _SwitchErrorInfo__WEBPACK_IMPORTED_MODULE_20__["SwitchErrorInfo"]; });

/* harmony import */ var _wrapComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wrapComponent */ "./node_modules/piral-core/esm/components/wrapComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _wrapComponent__WEBPACK_IMPORTED_MODULE_21__["wrapComponent"]; });























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/components/wrapComponent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/piral-core/esm/components/wrapComponent.js ***!
  \*****************************************************************/
/*! exports provided: wrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return wrapComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _PortalRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortalRenderer */ "./node_modules/piral-core/esm/components/PortalRenderer.js");
/* harmony import */ var _ForeignComponentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForeignComponentContainer */ "./node_modules/piral-core/esm/components/ForeignComponentContainer.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./node_modules/piral-core/esm/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");






// this is an arbitrary start number to have 6 digits
let portalIdBase = 123456;
function wrapReactComponent(Component, captured, Wrapper) {
    return (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, Object.assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props, captured))));
}
function wrapForeignComponent(component, captured, Wrapper) {
    return react__WEBPACK_IMPORTED_MODULE_0__["memo"]((props) => {
        const { state, readState, destroyPortal } = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useGlobalStateContext"])();
        const router = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](react_router__WEBPACK_IMPORTED_MODULE_1__["__RouterContext"]);
        const id = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => (portalIdBase++).toString(26), _utils__WEBPACK_IMPORTED_MODULE_5__["none"]);
        const context = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ({ router, state, readState }), [router, state]);
        const innerProps = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => (Object.assign(Object.assign({}, props), captured)), [props]);
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => () => destroyPortal(id), _utils__WEBPACK_IMPORTED_MODULE_5__["none"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, Object.assign({}, props),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PortalRenderer__WEBPACK_IMPORTED_MODULE_2__["PortalRenderer"], { id: id }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ForeignComponentContainer__WEBPACK_IMPORTED_MODULE_3__["ForeignComponentContainer"], { innerProps: innerProps, "$portalId": id, "$component": component, "$context": context })));
    });
}
function isNotExotic(component) {
    return !component.$$typeof;
}
function wrapComponent(converters, component, captured, Wrapper) {
    if (!component) {
        const pilet = captured.piral.meta.name;
        console.error(`[${pilet}] The given value is not a valid component.`);
        // tslint:disable-next-line:no-null-keyword
        component = () => null;
    }
    if (typeof component === 'object' && isNotExotic(component)) {
        const result = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["convertComponent"])(converters[component.type], component);
        return wrapForeignComponent(result, captured, Wrapper);
    }
    return wrapReactComponent(component, captured, Wrapper);
}
//# sourceMappingURL=wrapComponent.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/action.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/action.js ***!
  \*****************************************************/
/*! exports provided: useAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAction", function() { return useAction; });
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalState */ "./node_modules/piral-core/esm/hooks/globalState.js");

/**
 * Hook that gets an action for manipulating the global state.
 * @param action The name of the action to retrieve.
 */
function useAction(action) {
    const ctx = Object(_globalState__WEBPACK_IMPORTED_MODULE_0__["useGlobalStateContext"])();
    return ctx[action];
}
//# sourceMappingURL=action.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/actions.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/actions.js ***!
  \******************************************************/
/*! exports provided: useActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return useActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_stateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/stateContext */ "./node_modules/piral-core/esm/state/stateContext.js");



/**
 * Hook that gets the actions for manipulating the global state.
 */
function useActions() {
    const _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_state_stateContext__WEBPACK_IMPORTED_MODULE_2__["StateContext"]), { state } = _a, actions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["state"]);
    return actions;
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/globalState.js":
/*!**********************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/globalState.js ***!
  \**********************************************************/
/*! exports provided: useGlobalStateContext, useGlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobalStateContext", function() { return useGlobalStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobalState", function() { return useGlobalState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dbeining/react-atom */ "./node_modules/@dbeining/react-atom/dist/react-atom.js");
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_stateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/stateContext */ "./node_modules/piral-core/esm/state/stateContext.js");



const useGlobalAtom = typeof window !== 'undefined' ? _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_1__["useAtom"] : useDirectAtom;
function useDirectAtom(atom, opts) {
    const state = Object(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_1__["deref"])(atom);
    const select = opts && opts.select;
    return typeof select === 'function' ? select(state) : state;
}
/**
 * Hook to obtain the global state context, which gives you directly
 * all actions, state, and more of the Piral instance.
 * If you are only interested in reading out the state, use the
 * `useGlobalState` hook instead.
 */
function useGlobalStateContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_state_stateContext__WEBPACK_IMPORTED_MODULE_2__["StateContext"]);
}
function useGlobalState(select) {
    const { state } = useGlobalStateContext();
    return useGlobalAtom(state, select && { select });
}
//# sourceMappingURL=globalState.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/index.js ***!
  \****************************************************/
/*! exports provided: useAction, useActions, useGlobalStateContext, useGlobalState, useMedia, useSetter, useSharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/piral-core/esm/hooks/action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAction", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["useAction"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-core/esm/hooks/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["useActions"]; });

/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalState */ "./node_modules/piral-core/esm/hooks/globalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalStateContext", function() { return _globalState__WEBPACK_IMPORTED_MODULE_2__["useGlobalStateContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalState", function() { return _globalState__WEBPACK_IMPORTED_MODULE_2__["useGlobalState"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media */ "./node_modules/piral-core/esm/hooks/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _media__WEBPACK_IMPORTED_MODULE_3__["useMedia"]; });

/* harmony import */ var _setter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setter */ "./node_modules/piral-core/esm/hooks/setter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetter", function() { return _setter__WEBPACK_IMPORTED_MODULE_4__["useSetter"]; });

/* harmony import */ var _sharedData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharedData */ "./node_modules/piral-core/esm/hooks/sharedData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSharedData", function() { return _sharedData__WEBPACK_IMPORTED_MODULE_5__["useSharedData"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/media.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/media.js ***!
  \****************************************************/
/*! exports provided: useMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/piral-core/esm/utils/helpers.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/media */ "./node_modules/piral-core/esm/utils/media.js");



/**
 * Hook to detect layout changes (e.g., which UI breakpoint was hit).
 * @param queries The available queries matching the breakpoints.
 * @param values The values mapping to the breakpoints
 * @param defaultValue The default value.
 */
function useMedia(queries, values, defaultValue) {
    const match = () => Object(_utils_media__WEBPACK_IMPORTED_MODULE_2__["getCurrentLayout"])(queries, values, defaultValue);
    const [value, update] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(match);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (typeof document !== 'undefined') {
            const handler = () => update(match);
            window.addEventListener('resize', handler);
            return () => window.removeEventListener('resize', handler);
        }
    }, _utils_helpers__WEBPACK_IMPORTED_MODULE_1__["none"]);
    return value;
}
//# sourceMappingURL=media.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/setter.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/setter.js ***!
  \*****************************************************/
/*! exports provided: useSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetter", function() { return useSetter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/piral-core/esm/utils/helpers.js");


function useMainEffect(cb) {
    cb();
}
const useEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : useMainEffect;
/**
 * Hook for running the callback once on mount.
 * @param cb The callback to be invoked on mounting.
 */
function useSetter(cb) {
    useEffect(cb, _utils_helpers__WEBPACK_IMPORTED_MODULE_1__["none"]);
}
//# sourceMappingURL=setter.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/hooks/sharedData.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-core/esm/hooks/sharedData.js ***!
  \*********************************************************/
/*! exports provided: useSharedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSharedData", function() { return useSharedData; });
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalState */ "./node_modules/piral-core/esm/hooks/globalState.js");

function useSharedData(s) {
    const select = s || ((m) => m);
    return Object(_globalState__WEBPACK_IMPORTED_MODULE_0__["useGlobalState"])((s) => select(s.data));
}
//# sourceMappingURL=sharedData.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/api.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/api.js ***!
  \****************************************************/
/*! exports provided: createExtenders, defaultApiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtenders", function() { return createExtenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultApiFactory", function() { return defaultApiFactory; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/piral-core/esm/modules/core.js");


function createExtenders(context, apis) {
    const creators = [_core__WEBPACK_IMPORTED_MODULE_1__["createCoreApi"], ...apis.filter(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])];
    return creators.map((c) => {
        const ctx = c(context);
        if (Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(ctx)) {
            return ctx;
        }
        else {
            return () => (Object.assign({}, ctx));
        }
    });
}
function defaultApiFactory(context, apis) {
    const extenders = createExtenders(context, apis);
    return (target) => {
        const api = Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["initializeApi"])(target, context);
        context.apis[target.name] = api;
        return Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["mergeApis"])(api, extenders, target);
    };
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/core.js ***!
  \*****************************************************/
/*! exports provided: createCoreApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoreApi", function() { return createCoreApi; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/piral-core/esm/modules/element.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./node_modules/piral-core/esm/state/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./node_modules/piral-core/esm/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");




function createCoreApi(context) {
    return (api, meta) => {
        const pilet = meta.name;
        return {
            getData(name) {
                return context.readDataValue(name);
            },
            setData(name, value, options) {
                const { target = 'memory', expires } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createDataOptions"])(options);
                const expiration = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDataExpiration"])(expires);
                return context.tryWriteDataItem(name, value, pilet, target, expiration);
            },
            registerPage(route, arg, meta = {}) {
                const component = Object(_state__WEBPACK_IMPORTED_MODULE_1__["withApi"])(context, arg, api, 'page', undefined, { meta });
                context.registerPage(route, {
                    pilet,
                    meta,
                    component,
                });
                return () => api.unregisterPage(route);
            },
            unregisterPage(route) {
                context.unregisterPage(route);
            },
            registerExtension(name, arg, defaults) {
                context.registerExtension(name, {
                    pilet,
                    component: Object(_state__WEBPACK_IMPORTED_MODULE_1__["withApi"])(context, arg, api, 'extension'),
                    reference: arg,
                    defaults,
                });
                return () => api.unregisterExtension(name, arg);
            },
            unregisterExtension(name, arg) {
                context.unregisterExtension(name, arg);
            },
            renderHtmlExtension(element, props) {
                const [dispose] = Object(_element__WEBPACK_IMPORTED_MODULE_0__["renderElement"])(context, element, props);
                return dispose;
            },
            Extension: _components__WEBPACK_IMPORTED_MODULE_2__["ExtensionSlot"],
        };
    };
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/dependencies.js":
/*!*************************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/dependencies.js ***!
  \*************************************************************/
/*! exports provided: globalDependencies, defaultDependencySelector, defaultModuleRequester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDependencies", function() { return globalDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDependencySelector", function() { return defaultDependencySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModuleRequester", function() { return defaultModuleRequester; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");
/* harmony import */ var _dependencies_codegen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dependencies.codegen */ "./node_modules/piral-core/dependencies.codegen");


/**
 * The global dependencies, which represent the dependencies
 * shared from the app shell itself.
 */
const globalDependencies = {};
if (Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(_dependencies_codegen__WEBPACK_IMPORTED_MODULE_1__["default"])) {
    Object(_dependencies_codegen__WEBPACK_IMPORTED_MODULE_1__["default"])(globalDependencies);
}
/**
 * The default dependency selector, which just returns the provided
 * dependencies.
 */
function defaultDependencySelector(dependencies) {
    return dependencies;
}
/**
 * The default pilet requester, which just returns an empty array.
 * Use your own code to connect to the feed service.
 *
 * @example
```js
return fetch('https://feed.piral.cloud/api/v1/pilet/sample')
  .then(res => res.json())
  .then(res => res.items);
```
 */
function defaultModuleRequester() {
    return Promise.resolve([]);
}
//# sourceMappingURL=dependencies.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/element.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/element.js ***!
  \********************************************************/
/*! exports provided: renderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./node_modules/piral-core/esm/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");


if (typeof window !== 'undefined' && 'customElements' in window) {
    class PiralExtension extends HTMLElement {
        constructor() {
            super(...arguments);
            this.dispose = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this.update = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this.props = {
                name: this.getAttribute('name'),
                params: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["tryParseJson"])(this.getAttribute('params')),
                empty: undefined,
                children: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["reactifyContent"])(this.childNodes),
            };
        }
        get params() {
            return this.props.params;
        }
        set params(value) {
            this.props.params = value;
            this.update(this.props);
        }
        get name() {
            return this.props.name;
        }
        set name(value) {
            this.props.name = value;
            this.update(this.props);
        }
        get empty() {
            return this.props.empty;
        }
        set empty(value) {
            this.props.empty = value;
            this.update(this.props);
        }
        connectedCallback() {
            if (this.isConnected) {
                this.dispatchEvent(new CustomEvent('render-html', {
                    bubbles: true,
                    detail: {
                        target: this,
                        props: this.props,
                    },
                }));
            }
        }
        disconnectedCallback() {
            this.dispose();
            this.dispose = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this.update = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
        }
        attributeChangedCallback(name, _, newValue) {
            switch (name) {
                case 'name':
                    this.name = newValue;
                    break;
                case 'params':
                    this.params = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["tryParseJson"])(newValue);
                    break;
            }
        }
        static get observedAttributes() {
            return ['name', 'params'];
        }
    }
    customElements.define('piral-extension', PiralExtension);
}
function renderElement(context, element, props) {
    let [id, portal] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["renderInDom"])(context, element, _components__WEBPACK_IMPORTED_MODULE_0__["ExtensionSlot"], props);
    const evName = 'extension-props-changed';
    const handler = (ev) => update(ev.detail);
    const dispose = () => {
        context.hidePortal(id, portal);
        element.removeEventListener(evName, handler);
    };
    const update = (newProps) => {
        [id, portal] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["changeDomPortal"])(id, portal, context, element, _components__WEBPACK_IMPORTED_MODULE_0__["ExtensionSlot"], newProps);
    };
    element.addEventListener(evName, handler);
    return [dispose, update];
}
//# sourceMappingURL=element.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/modules/index.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/modules/index.js ***!
  \******************************************************/
/*! exports provided: createExtenders, defaultApiFactory, globalDependencies, defaultDependencySelector, defaultModuleRequester, renderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/piral-core/esm/modules/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExtenders", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createExtenders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultApiFactory", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["defaultApiFactory"]; });

/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies */ "./node_modules/piral-core/esm/modules/dependencies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalDependencies", function() { return _dependencies__WEBPACK_IMPORTED_MODULE_1__["globalDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDependencySelector", function() { return _dependencies__WEBPACK_IMPORTED_MODULE_1__["defaultDependencySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultModuleRequester", function() { return _dependencies__WEBPACK_IMPORTED_MODULE_1__["defaultModuleRequester"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element */ "./node_modules/piral-core/esm/modules/element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return _element__WEBPACK_IMPORTED_MODULE_2__["renderElement"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/state/createActions.js":
/*!************************************************************!*\
  !*** ./node_modules/piral-core/esm/state/createActions.js ***!
  \************************************************************/
/*! exports provided: includeActions, createActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeActions", function() { return includeActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return createActions; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./node_modules/piral-core/esm/actions/index.js");

function createContext(state, events) {
    const ctx = Object.assign(Object.assign({}, events), { apis: {}, converters: {
            html: ({ component }) => component,
        }, state });
    return ctx;
}
function includeActions(ctx, actions) {
    const actionNames = Object.keys(actions);
    for (const actionName of actionNames) {
        const action = actions[actionName];
        ctx[actionName] = action.bind(ctx, ctx);
    }
}
function createActions(state, events) {
    const context = createContext(state, events);
    includeActions(context, _actions__WEBPACK_IMPORTED_MODULE_0__);
    return context;
}
//# sourceMappingURL=createActions.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/state/createGlobalState.js":
/*!****************************************************************!*\
  !*** ./node_modules/piral-core/esm/state/createGlobalState.js ***!
  \****************************************************************/
/*! exports provided: createGlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dbeining/react-atom */ "./node_modules/@dbeining/react-atom/dist/react-atom.js");
/* harmony import */ var _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./node_modules/piral-core/esm/components/index.js");


function extend(defaultState, customState) {
    for (const key of Object.keys(customState)) {
        if (key === '__proto__' || key === 'constructor') {
            continue;
        }
        const value = customState[key];
        const original = defaultState[key];
        const nested = typeof original === 'object' && typeof value === 'object';
        defaultState[key] = nested ? extend(original, value) : value;
    }
    return defaultState;
}
function createGlobalState(customState = {}) {
    const defaultState = {
        app: {
            error: undefined,
            loading: typeof window !== 'undefined',
            layout: 'desktop',
            publicPath: "/" || false,
        },
        components: {
            ErrorInfo: _components__WEBPACK_IMPORTED_MODULE_1__["DefaultErrorInfo"],
            LoadingIndicator: _components__WEBPACK_IMPORTED_MODULE_1__["DefaultLoadingIndicator"],
            Router: _components__WEBPACK_IMPORTED_MODULE_1__["DefaultRouter"],
            RouteSwitch: _components__WEBPACK_IMPORTED_MODULE_1__["DefaultRouteSwitch"],
            Layout: _components__WEBPACK_IMPORTED_MODULE_1__["DefaultLayout"],
        },
        errorComponents: {},
        registry: {
            extensions: {},
            pages: {},
            wrappers: {},
        },
        routes: {},
        data: {},
        portals: {},
        modules: [],
    };
    return _dbeining_react_atom__WEBPACK_IMPORTED_MODULE_0__["Atom"].of(extend(defaultState, customState));
}
//# sourceMappingURL=createGlobalState.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/state/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/state/index.js ***!
  \****************************************************/
/*! exports provided: includeActions, createActions, createGlobalState, StateContext, withApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createActions */ "./node_modules/piral-core/esm/state/createActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeActions", function() { return _createActions__WEBPACK_IMPORTED_MODULE_0__["includeActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createActions", function() { return _createActions__WEBPACK_IMPORTED_MODULE_0__["createActions"]; });

/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGlobalState */ "./node_modules/piral-core/esm/state/createGlobalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _createGlobalState__WEBPACK_IMPORTED_MODULE_1__["createGlobalState"]; });

/* harmony import */ var _stateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateContext */ "./node_modules/piral-core/esm/state/stateContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return _stateContext__WEBPACK_IMPORTED_MODULE_2__["StateContext"]; });

/* harmony import */ var _withApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withApi */ "./node_modules/piral-core/esm/state/withApi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApi", function() { return _withApi__WEBPACK_IMPORTED_MODULE_3__["withApi"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/state/stateContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/piral-core/esm/state/stateContext.js ***!
  \***********************************************************/
/*! exports provided: StateContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StateContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
/* harmony default export */ __webpack_exports__["default"] = (StateContext);
//# sourceMappingURL=stateContext.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/state/withApi.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/state/withApi.js ***!
  \******************************************************/
/*! exports provided: withApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApi", function() { return withApi; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./node_modules/piral-core/esm/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/piral-core/esm/utils/index.js");



const DefaultWrapper = (props) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["defaultRender"])(props.children);
function getWrapper(wrappers, wrapperType) {
    const WrapAll = wrappers['*'];
    const WrapType = wrappers[wrapperType];
    if (WrapAll && WrapType) {
        return (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapAll, Object.assign({}, props),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapType, Object.assign({}, props))));
    }
    return WrapType || WrapAll || DefaultWrapper;
}
function makeWrapper(context, outerProps, wrapperType, errorType) {
    const OuterWrapper = context.readState((m) => getWrapper(m.registry.wrappers, wrapperType));
    return (props) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OuterWrapper, Object.assign({}, outerProps, props),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_1__["ErrorBoundary"], Object.assign({}, outerProps, props, { errorType: errorType }), props.children)));
}
function withApi(context, component, piral, errorType, wrapperType = errorType, captured = {}) {
    const outerProps = Object.assign(Object.assign({}, captured), { piral });
    const converters = context.converters;
    const Wrapper = makeWrapper(context, outerProps, wrapperType, errorType);
    return Object(_components__WEBPACK_IMPORTED_MODULE_1__["wrapComponent"])(converters, component, outerProps, Wrapper);
}
//# sourceMappingURL=withApi.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/api.js":
/*!**************************************************!*\
  !*** ./node_modules/piral-core/esm/types/api.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/common.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/common.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/components.js":
/*!*********************************************************!*\
  !*** ./node_modules/piral-core/esm/types/components.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/config.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/config.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/custom.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/custom.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=custom.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/data.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-core/esm/types/data.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/extension.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-core/esm/types/extension.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=extension.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/piral-core/esm/types/api.js");
/* empty/unused harmony star reexport *//* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/piral-core/esm/types/common.js");
/* empty/unused harmony star reexport *//* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/piral-core/esm/types/components.js");
/* empty/unused harmony star reexport *//* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./node_modules/piral-core/esm/types/config.js");
/* empty/unused harmony star reexport *//* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom */ "./node_modules/piral-core/esm/types/custom.js");
/* empty/unused harmony star reexport *//* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./node_modules/piral-core/esm/types/data.js");
/* empty/unused harmony star reexport *//* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extension */ "./node_modules/piral-core/esm/types/extension.js");
/* empty/unused harmony star reexport *//* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instance */ "./node_modules/piral-core/esm/types/instance.js");
/* empty/unused harmony star reexport *//* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ "./node_modules/piral-core/esm/types/layout.js");
/* empty/unused harmony star reexport *//* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugin */ "./node_modules/piral-core/esm/types/plugin.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/types/state.js");
/* empty/unused harmony star reexport *//* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/piral-core/esm/types/utils.js");
/* empty/unused harmony star reexport */











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-core/esm/types/instance.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=instance.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/layout.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/layout.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/plugin.js":
/*!*****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/plugin.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/state.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/state.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/types/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/types/utils.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/compare.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/compare.js ***!
  \******************************************************/
/*! exports provided: compare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
function compareObjects(a, b) {
    for (const i in a) {
        if (!(i in b)) {
            return false;
        }
    }
    for (const i in b) {
        if (!compare(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
function compare(a, b) {
    if (a !== b) {
        const ta = typeof a;
        const tb = typeof b;
        if (ta === tb && ta === 'object' && a && b) {
            return compareObjects(a, b);
        }
        return false;
    }
    return true;
}
//# sourceMappingURL=compare.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/data.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/data.js ***!
  \***************************************************/
/*! exports provided: createDataView, createDataOptions, getDataExpiration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataView", function() { return createDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataOptions", function() { return createDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataExpiration", function() { return getDataExpiration; });
const defaultTarget = 'memory';
function createDataView(data) {
    const proxyName = 'Proxy';
    return (window[proxyName] &&
        new Proxy(data, {
            get(target, name) {
                const item = target[name];
                return item && item.value;
            },
            set(_target, _name, _value) {
                return true;
            },
        }));
}
function createDataOptions(options = defaultTarget) {
    if (typeof options === 'string') {
        return {
            target: options,
        };
    }
    else if (options && typeof options === 'object' && !Array.isArray(options)) {
        return options;
    }
    else {
        return {
            target: defaultTarget,
        };
    }
}
function getDataExpiration(expires) {
    if (typeof expires === 'number') {
        return expires;
    }
    else if (expires instanceof Date) {
        return expires.valueOf();
    }
    return -1;
}
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/extension.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/extension.js ***!
  \********************************************************/
/*! exports provided: toExtension, reactifyContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExtension", function() { return toExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactifyContent", function() { return reactifyContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function removeAll(nodes) {
    nodes.forEach((node) => node.remove());
}
const SlotCarrier = ({ nodes }) => {
    const host = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
        var _a;
        (_a = host.current) === null || _a === void 0 ? void 0 : _a.append(...nodes);
        return () => removeAll(nodes);
    }, [nodes]);
    if (nodes.length) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("slot", { ref: host });
    }
    return null;
};
/**
 * Transforms the given component to an extension component.
 * @param Component The component to transform.
 * @returns The extension component (receiving its props via params).
 */
function toExtension(Component) {
    return (props) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, props.params));
}
/**
 * Reactifies the list of child nodes to a React Node by removing the
 * nodes from the DOM and carrying it in a React Node, where it would be
 * attached at a slot.
 * @param childNodes The child nodes to reactify.
 * @returns The React Node.
 */
function reactifyContent(childNodes) {
    const nodes = Array.prototype.filter.call(childNodes, Boolean);
    removeAll(nodes);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SlotCarrier, { nodes: nodes });
}
//# sourceMappingURL=extension.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/foreign.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/foreign.js ***!
  \******************************************************/
/*! exports provided: attachDomPortal, changeDomPortal, convertComponent, renderInDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachDomPortal", function() { return attachDomPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDomPortal", function() { return changeDomPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertComponent", function() { return convertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderInDom", function() { return renderInDom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


function attachDomPortal(id, context, element, component, props) {
    const portal = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props), element);
    context.showPortal(id, portal);
    return [id, portal];
}
function changeDomPortal(id, current, context, element, component, props) {
    const next = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props), element);
    context.updatePortal(id, current, next);
    return [id, next];
}
function convertComponent(converter, component) {
    if (typeof converter !== 'function') {
        throw new Error(`No converter for component of type "${component.type}" registered.`);
    }
    return converter(component);
}
function renderInDom(context, element, component, props) {
    const portalId = 'data-portal-id';
    let parent = element;
    while (parent) {
        if (parent instanceof Element && parent.hasAttribute(portalId)) {
            const id = parent.getAttribute(portalId);
            return attachDomPortal(id, context, element, component, props);
        }
        parent = parent.parentNode || parent.host;
    }
    return attachDomPortal('root', context, element, component, props);
}
//# sourceMappingURL=foreign.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/guid.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/guid.js ***!
  \***************************************************/
/*! exports provided: generateId, buildName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildName", function() { return buildName; });
function rand(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
}
function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, rand);
}
function buildName(prefix, name) {
    return `${prefix}://${name}`;
}
//# sourceMappingURL=guid.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/helpers.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/helpers.js ***!
  \******************************************************/
/*! exports provided: removeIndicator, none, noop, prependItem, appendItem, prependItems, appendItems, excludeItem, includeItem, replaceOrAddItem, removeNested, excludeOn, updateKey, withKey, withoutKey, tryParseJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndicator", function() { return removeIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "none", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependItem", function() { return prependItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendItem", function() { return appendItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependItems", function() { return prependItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendItems", function() { return appendItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excludeItem", function() { return excludeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeItem", function() { return includeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceOrAddItem", function() { return replaceOrAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNested", function() { return removeNested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excludeOn", function() { return excludeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKey", function() { return updateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withKey", function() { return withKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutKey", function() { return withoutKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParseJson", function() { return tryParseJson; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// tslint:disable-next-line
const removeIndicator = null;
// to avoid creating unnecessary empty arrays
const none = [];
// to avoid creating unnecessary empty functions
const noop = () => { };
function prependItem(items, item) {
    return [item, ...(items || none)];
}
function appendItem(items, item) {
    return [...(items || none), item];
}
function prependItems(items, newItems) {
    return [...newItems, ...(items || none)];
}
function appendItems(items, newItems) {
    return [...(items || none), ...newItems];
}
function excludeItem(items, item) {
    return (items || none).filter((m) => m !== item);
}
function includeItem(items, item) {
    return appendItem(excludeItem(items, item), item);
}
function replaceOrAddItem(items, item, predicate) {
    const newItems = [...(items || none)];
    for (let i = 0; i < newItems.length; i++) {
        if (predicate(newItems[i])) {
            newItems[i] = item;
            return newItems;
        }
    }
    newItems.push(item);
    return newItems;
}
function removeNested(obj, predicate) {
    return Object.keys(obj).reduce((entries, key) => {
        const item = obj[key];
        entries[key] = Object.keys(item).reduce((all, key) => {
            const value = item[key];
            if (Array.isArray(value)) {
                all[key] = excludeOn(value, predicate);
            }
            else if (!value || !predicate(value)) {
                all[key] = value;
            }
            return all;
        }, {});
        return entries;
    }, {});
}
function excludeOn(items, predicate) {
    return (items || none).filter((m) => !predicate(m));
}
function updateKey(obj, key, value) {
    return value === removeIndicator ? withoutKey(obj, key) : withKey(obj, key, value);
}
function withKey(obj, key, value) {
    return Object.assign(Object.assign({}, obj), { [key]: value });
}
function withoutKey(obj, key) {
    const _a = obj || {}, _b = key, _ = _a[_b], newObj = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return newObj;
}
function tryParseJson(content) {
    try {
        return JSON.parse(content);
    }
    catch (_a) {
        return {};
    }
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/index.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/index.js ***!
  \****************************************************/
/*! exports provided: compare, createDataView, createDataOptions, getDataExpiration, toExtension, reactifyContent, attachDomPortal, changeDomPortal, convertComponent, renderInDom, generateId, buildName, removeIndicator, none, noop, prependItem, appendItem, prependItems, appendItems, excludeItem, includeItem, replaceOrAddItem, removeNested, excludeOn, updateKey, withKey, withoutKey, tryParseJson, defaultLayouts, defaultBreakpoints, getCurrentLayout, defaultRender, withAll, withPage, withoutPage, withExtension, withoutExtension, withRootExtension, withProvider, withRoute, storage, cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare */ "./node_modules/piral-core/esm/utils/compare.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return _compare__WEBPACK_IMPORTED_MODULE_0__["compare"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/piral-core/esm/utils/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDataView", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["createDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDataOptions", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["createDataOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataExpiration", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["getDataExpiration"]; });

/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension */ "./node_modules/piral-core/esm/utils/extension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toExtension", function() { return _extension__WEBPACK_IMPORTED_MODULE_2__["toExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactifyContent", function() { return _extension__WEBPACK_IMPORTED_MODULE_2__["reactifyContent"]; });

/* harmony import */ var _foreign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foreign */ "./node_modules/piral-core/esm/utils/foreign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attachDomPortal", function() { return _foreign__WEBPACK_IMPORTED_MODULE_3__["attachDomPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeDomPortal", function() { return _foreign__WEBPACK_IMPORTED_MODULE_3__["changeDomPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertComponent", function() { return _foreign__WEBPACK_IMPORTED_MODULE_3__["convertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderInDom", function() { return _foreign__WEBPACK_IMPORTED_MODULE_3__["renderInDom"]; });

/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid */ "./node_modules/piral-core/esm/utils/guid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return _guid__WEBPACK_IMPORTED_MODULE_4__["generateId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildName", function() { return _guid__WEBPACK_IMPORTED_MODULE_4__["buildName"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./node_modules/piral-core/esm/utils/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndicator", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["removeIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "none", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["none"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependItem", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["prependItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendItem", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["appendItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependItems", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["prependItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendItems", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["appendItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "excludeItem", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["excludeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includeItem", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["includeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceOrAddItem", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["replaceOrAddItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNested", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["removeNested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "excludeOn", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["excludeOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateKey", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["updateKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withKey", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["withKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutKey", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["withoutKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryParseJson", function() { return _helpers__WEBPACK_IMPORTED_MODULE_5__["tryParseJson"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media */ "./node_modules/piral-core/esm/utils/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultLayouts", function() { return _media__WEBPACK_IMPORTED_MODULE_6__["defaultLayouts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBreakpoints", function() { return _media__WEBPACK_IMPORTED_MODULE_6__["defaultBreakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentLayout", function() { return _media__WEBPACK_IMPORTED_MODULE_6__["getCurrentLayout"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react */ "./node_modules/piral-core/esm/utils/react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRender", function() { return _react__WEBPACK_IMPORTED_MODULE_7__["defaultRender"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state */ "./node_modules/piral-core/esm/utils/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAll", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPage", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutPage", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withoutPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withExtension", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withoutExtension", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withoutExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRootExtension", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withRootExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withProvider", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return _state__WEBPACK_IMPORTED_MODULE_8__["withRoute"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage */ "./node_modules/piral-core/esm/utils/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_9__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return _storage__WEBPACK_IMPORTED_MODULE_9__["cookie"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/media.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/media.js ***!
  \****************************************************/
/*! exports provided: defaultLayouts, defaultBreakpoints, getCurrentLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLayouts", function() { return defaultLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBreakpoints", function() { return defaultBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLayout", function() { return getCurrentLayout; });
/* harmony import */ var piral_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-base */ "./node_modules/piral-base/esm/index.js");

const defaultLayouts = ['desktop', 'tablet', 'mobile'];
const defaultBreakpoints = ['(min-width: 991px)', '(min-width: 481px)', '(max-width: 480px)'];
const mm = typeof window === 'undefined' || !Object(piral_base__WEBPACK_IMPORTED_MODULE_0__["isfunc"])(window.matchMedia)
    ? () => ({ matches: undefined })
    : (q) => window.matchMedia(q);
function getCurrentLayout(breakpoints, layouts, defaultLayout) {
    const query = breakpoints.findIndex((q) => mm(q).matches);
    const layout = layouts[query];
    return layout !== undefined ? layout : defaultLayout;
}
//# sourceMappingURL=media.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/react.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/react.js ***!
  \****************************************************/
/*! exports provided: defaultRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRender", function() { return defaultRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function defaultRender(children, key) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: key }, children);
}
//# sourceMappingURL=react.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/state.js":
/*!****************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/state.js ***!
  \****************************************************/
/*! exports provided: withAll, withPage, withoutPage, withExtension, withoutExtension, withRootExtension, withProvider, withRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAll", function() { return withAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPage", function() { return withPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutPage", function() { return withoutPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withExtension", function() { return withExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutExtension", function() { return withoutExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRootExtension", function() { return withRootExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProvider", function() { return withProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRoute", function() { return withRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension */ "./node_modules/piral-core/esm/utils/extension.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./node_modules/piral-core/esm/utils/helpers.js");



/**
 * Returns a dispatcher that includes all mentioned dispatchers.
 * @param dispatchers The dispatchers to include.
 */
function withAll(...dispatchers) {
    return (state) => {
        for (const dispatcher of dispatchers) {
            state = dispatcher(state);
        }
        return state;
    };
}
/**
 * Returns a dispatcher that adds a page registration.
 * @param name The path of the page to register.
 * @param value The value of the page to register.
 * @returns The dispatcher.
 */
function withPage(name, value) {
    return (state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { pages: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["withKey"])(state.registry.pages, name, value) }) }));
}
/**
 * Returns a dispatcher that removes a page registration.
 * @param name The path of the page to unregister.
 * @returns The dispatcher.
 */
function withoutPage(name) {
    return (state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { pages: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["withoutKey"])(state.registry.pages, name) }) }));
}
/**
 * Returns a dispatcher that adds an extension registration.
 * @param name The name of the extension to register.
 * @param value The value of the extension to register.
 * @returns The dispatcher.
 */
function withExtension(name, value) {
    return (state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { extensions: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["withKey"])(state.registry.extensions, name, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["appendItem"])(state.registry.extensions[name], value)) }) }));
}
/**
 * Returns a dispatcher that removes an extension registration.
 * @param name The name of the extension to unregister.
 * @param reference The reference for the extension.
 * @returns The dispatcher.
 */
function withoutExtension(name, reference) {
    return (state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { extensions: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["withKey"])(state.registry.extensions, name, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["excludeOn"])(state.registry.extensions[name], (m) => m.reference === reference)) }) }));
}
/**
 * Returns a dispatcher that adds an extension registration from the root (no Pilet API).
 * @param name The name of the extension to register.
 * @param component The extension's component to use.
 * @returns The dispatcher.
 */
function withRootExtension(name, component) {
    return withExtension(name, {
        component: Object(_extension__WEBPACK_IMPORTED_MODULE_1__["toExtension"])(component),
        defaults: {},
        pilet: '',
        reference: component,
    });
}
/**
 * Returns a dispatcher that adds another provider.
 * @param provider The provider to include.
 * @returns The dispatcher.
 */
function withProvider(provider) {
    const wrapper = (props) => Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(provider, props);
    return (state) => (Object.assign(Object.assign({}, state), { provider: !state.provider ? wrapper : (props) => Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(state.provider, undefined, wrapper(props)) }));
}
/**
 * Returns a dispatcher that registers another route.
 * @param path The path of the route to register.
 * @param component The component representing the route.
 * @returns The dispatcher.
 */
function withRoute(path, component) {
    return (state) => (Object.assign(Object.assign({}, state), { routes: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["withKey"])(state.routes, path, component) }));
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/piral-core/esm/utils/storage.js":
/*!******************************************************!*\
  !*** ./node_modules/piral-core/esm/utils/storage.js ***!
  \******************************************************/
/*! exports provided: storage, cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return cookie; });
const crx = /\s*(.*?)=(.*?)($|;|,(?! ))/g;
const storage = {
    setItem(name, data) {
        return localStorage.setItem(name, data);
    },
    getItem(name) {
        return localStorage.getItem(name);
    },
    removeItem(name) {
        return localStorage.removeItem(name);
    },
};
const cookie = {
    setItem(name, data, expires = '') {
        const domain = location.hostname;
        const domainPart = domain ? `domain=.${domain};` : '';
        document.cookie = `${name}=${encodeURIComponent(data)};expires="${expires}";path=/;${domainPart}`;
    },
    getItem(name) {
        return document.cookie.replace(crx, (_m, p1, p2) => (name === p1 ? p2 : ''));
    },
    removeItem(name) {
        this.setItem(name, '', '-1');
    },
};
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/piral-ng/common.js":
/*!*****************************************!*\
  !*** ./node_modules/piral-ng/common.js ***!
  \*****************************************/
/*! exports provided: SharedModule, NgExtension, ResourceUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_SharedModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/SharedModule */ "./node_modules/piral-ng/esm/SharedModule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _esm_SharedModule__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _esm_NgExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/NgExtension */ "./node_modules/piral-ng/esm/NgExtension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgExtension", function() { return _esm_NgExtension__WEBPACK_IMPORTED_MODULE_1__["NgExtension"]; });

/* harmony import */ var _esm_ResourceUrlPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/ResourceUrlPipe */ "./node_modules/piral-ng/esm/ResourceUrlPipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceUrlPipe", function() { return _esm_ResourceUrlPipe__WEBPACK_IMPORTED_MODULE_2__["ResourceUrlPipe"]; });






/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/index.js ***!
  \**********************************************/
/*! exports provided: Observable, ConnectableObservable, observable, animationFrames, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler, async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, lastValueFrom, firstValueFrom, ArgumentOutOfRangeError, EmptyError, NotFoundError, ObjectUnsubscribedError, SequenceError, TimeoutError, UnsubscriptionError, bindCallback, bindNodeCallback, combineLatest, concat, connectable, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config, audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatestAll, combineLatestWith, concatAll, concatMap, concatMapTo, concatWith, connect, count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, groupBy, ignoreElements, isEmpty, last, map, mapTo, materialize, max, mergeAll, flatMap, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, observeOn, pairwise, pluck, publish, publishBehavior, publishLast, publishReplay, raceWith, reduce, repeat, repeatWhen, retry, retryWhen, refCount, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zipAll, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]; });

/* harmony import */ var _internal_observable_dom_animationFrames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/observable/dom/animationFrames */ "./node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrames", function() { return _internal_observable_dom_animationFrames__WEBPACK_IMPORTED_MODULE_3__["animationFrames"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/dist/esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "async", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["asyncScheduler"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/dist/esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queueScheduler"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrameScheduler"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/dist/esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/dist/esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/lastValueFrom */ "./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return _internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_21__["lastValueFrom"]; });

/* harmony import */ var _internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/firstValueFrom */ "./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return _internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_22__["firstValueFrom"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_23__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_24__["EmptyError"]; });

/* harmony import */ var _internal_util_NotFoundError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/NotFoundError */ "./node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return _internal_util_NotFoundError__WEBPACK_IMPORTED_MODULE_25__["NotFoundError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_26__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_SequenceError__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/util/SequenceError */ "./node_modules/rxjs/dist/esm5/internal/util/SequenceError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SequenceError", function() { return _internal_util_SequenceError__WEBPACK_IMPORTED_MODULE_27__["SequenceError"]; });

/* harmony import */ var _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/operators/timeout */ "./node_modules/rxjs/dist/esm5/internal/operators/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_28__["TimeoutError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_29__["UnsubscriptionError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_30__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_31__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_32__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/dist/esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_33__["concat"]; });

/* harmony import */ var _internal_observable_connectable__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/connectable */ "./node_modules/rxjs/dist/esm5/internal/observable/connectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectable", function() { return _internal_observable_connectable__WEBPACK_IMPORTED_MODULE_34__["connectable"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/dist/esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_35__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_36__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_37__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_38__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_39__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_40__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/dist/esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_41__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/dist/esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_42__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/dist/esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_43__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_44__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/dist/esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_45__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_46__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_47__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/dist/esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_48__["pairs"]; });

/* harmony import */ var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/rxjs/dist/esm5/internal/observable/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_49__["partition"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/dist/esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_50__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/dist/esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_51__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_52__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/dist/esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_53__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/dist/esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_54__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/dist/esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_55__["zip"]; });

/* harmony import */ var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_56__["scheduled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_36__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_45__["NEVER"]; });

/* harmony import */ var _internal_types__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./internal/types */ "./node_modules/rxjs/dist/esm5/internal/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_58__["config"]; });

/* harmony import */ var _internal_operators_audit__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./internal/operators/audit */ "./node_modules/rxjs/dist/esm5/internal/operators/audit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audit", function() { return _internal_operators_audit__WEBPACK_IMPORTED_MODULE_59__["audit"]; });

/* harmony import */ var _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./internal/operators/auditTime */ "./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_60__["auditTime"]; });

/* harmony import */ var _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./internal/operators/buffer */ "./node_modules/rxjs/dist/esm5/internal/operators/buffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_61__["buffer"]; });

/* harmony import */ var _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./internal/operators/bufferCount */ "./node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferCount", function() { return _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_62__["bufferCount"]; });

/* harmony import */ var _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./internal/operators/bufferTime */ "./node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferTime", function() { return _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_63__["bufferTime"]; });

/* harmony import */ var _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./internal/operators/bufferToggle */ "./node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_64__["bufferToggle"]; });

/* harmony import */ var _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./internal/operators/bufferWhen */ "./node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_65__["bufferWhen"]; });

/* harmony import */ var _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./internal/operators/catchError */ "./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_66__["catchError"]; });

/* harmony import */ var _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./internal/operators/combineAll */ "./node_modules/rxjs/dist/esm5/internal/operators/combineAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineAll", function() { return _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_67__["combineAll"]; });

/* harmony import */ var _internal_operators_combineLatestAll__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./internal/operators/combineLatestAll */ "./node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatestAll", function() { return _internal_operators_combineLatestAll__WEBPACK_IMPORTED_MODULE_68__["combineLatestAll"]; });

/* harmony import */ var _internal_operators_combineLatestWith__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./internal/operators/combineLatestWith */ "./node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatestWith", function() { return _internal_operators_combineLatestWith__WEBPACK_IMPORTED_MODULE_69__["combineLatestWith"]; });

/* harmony import */ var _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./internal/operators/concatAll */ "./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_70__["concatAll"]; });

/* harmony import */ var _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./internal/operators/concatMap */ "./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_71__["concatMap"]; });

/* harmony import */ var _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./internal/operators/concatMapTo */ "./node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_72__["concatMapTo"]; });

/* harmony import */ var _internal_operators_concatWith__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./internal/operators/concatWith */ "./node_modules/rxjs/dist/esm5/internal/operators/concatWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatWith", function() { return _internal_operators_concatWith__WEBPACK_IMPORTED_MODULE_73__["concatWith"]; });

/* harmony import */ var _internal_operators_connect__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./internal/operators/connect */ "./node_modules/rxjs/dist/esm5/internal/operators/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _internal_operators_connect__WEBPACK_IMPORTED_MODULE_74__["connect"]; });

/* harmony import */ var _internal_operators_count__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./internal/operators/count */ "./node_modules/rxjs/dist/esm5/internal/operators/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _internal_operators_count__WEBPACK_IMPORTED_MODULE_75__["count"]; });

/* harmony import */ var _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./internal/operators/debounce */ "./node_modules/rxjs/dist/esm5/internal/operators/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_76__["debounce"]; });

/* harmony import */ var _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./internal/operators/debounceTime */ "./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_77__["debounceTime"]; });

/* harmony import */ var _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./internal/operators/defaultIfEmpty */ "./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_78__["defaultIfEmpty"]; });

/* harmony import */ var _internal_operators_delay__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./internal/operators/delay */ "./node_modules/rxjs/dist/esm5/internal/operators/delay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _internal_operators_delay__WEBPACK_IMPORTED_MODULE_79__["delay"]; });

/* harmony import */ var _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./internal/operators/delayWhen */ "./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_80__["delayWhen"]; });

/* harmony import */ var _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./internal/operators/dematerialize */ "./node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dematerialize", function() { return _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_81__["dematerialize"]; });

/* harmony import */ var _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./internal/operators/distinct */ "./node_modules/rxjs/dist/esm5/internal/operators/distinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_82__["distinct"]; });

/* harmony import */ var _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./internal/operators/distinctUntilChanged */ "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_83__["distinctUntilChanged"]; });

/* harmony import */ var _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./internal/operators/distinctUntilKeyChanged */ "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_84__["distinctUntilKeyChanged"]; });

/* harmony import */ var _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./internal/operators/elementAt */ "./node_modules/rxjs/dist/esm5/internal/operators/elementAt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAt", function() { return _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_85__["elementAt"]; });

/* harmony import */ var _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./internal/operators/endWith */ "./node_modules/rxjs/dist/esm5/internal/operators/endWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endWith", function() { return _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_86__["endWith"]; });

/* harmony import */ var _internal_operators_every__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./internal/operators/every */ "./node_modules/rxjs/dist/esm5/internal/operators/every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _internal_operators_every__WEBPACK_IMPORTED_MODULE_87__["every"]; });

/* harmony import */ var _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./internal/operators/exhaust */ "./node_modules/rxjs/dist/esm5/internal/operators/exhaust.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaust", function() { return _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_88__["exhaust"]; });

/* harmony import */ var _internal_operators_exhaustAll__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./internal/operators/exhaustAll */ "./node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaustAll", function() { return _internal_operators_exhaustAll__WEBPACK_IMPORTED_MODULE_89__["exhaustAll"]; });

/* harmony import */ var _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./internal/operators/exhaustMap */ "./node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_90__["exhaustMap"]; });

/* harmony import */ var _internal_operators_expand__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./internal/operators/expand */ "./node_modules/rxjs/dist/esm5/internal/operators/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return _internal_operators_expand__WEBPACK_IMPORTED_MODULE_91__["expand"]; });

/* harmony import */ var _internal_operators_filter__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./internal/operators/filter */ "./node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _internal_operators_filter__WEBPACK_IMPORTED_MODULE_92__["filter"]; });

/* harmony import */ var _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./internal/operators/finalize */ "./node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_93__["finalize"]; });

/* harmony import */ var _internal_operators_find__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./internal/operators/find */ "./node_modules/rxjs/dist/esm5/internal/operators/find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _internal_operators_find__WEBPACK_IMPORTED_MODULE_94__["find"]; });

/* harmony import */ var _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./internal/operators/findIndex */ "./node_modules/rxjs/dist/esm5/internal/operators/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_95__["findIndex"]; });

/* harmony import */ var _internal_operators_first__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./internal/operators/first */ "./node_modules/rxjs/dist/esm5/internal/operators/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _internal_operators_first__WEBPACK_IMPORTED_MODULE_96__["first"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/dist/esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_97__["groupBy"]; });

/* harmony import */ var _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./internal/operators/ignoreElements */ "./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_98__["ignoreElements"]; });

/* harmony import */ var _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./internal/operators/isEmpty */ "./node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_99__["isEmpty"]; });

/* harmony import */ var _internal_operators_last__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./internal/operators/last */ "./node_modules/rxjs/dist/esm5/internal/operators/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _internal_operators_last__WEBPACK_IMPORTED_MODULE_100__["last"]; });

/* harmony import */ var _internal_operators_map__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./internal/operators/map */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _internal_operators_map__WEBPACK_IMPORTED_MODULE_101__["map"]; });

/* harmony import */ var _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./internal/operators/mapTo */ "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapTo", function() { return _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_102__["mapTo"]; });

/* harmony import */ var _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./internal/operators/materialize */ "./node_modules/rxjs/dist/esm5/internal/operators/materialize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialize", function() { return _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_103__["materialize"]; });

/* harmony import */ var _internal_operators_max__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./internal/operators/max */ "./node_modules/rxjs/dist/esm5/internal/operators/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _internal_operators_max__WEBPACK_IMPORTED_MODULE_104__["max"]; });

/* harmony import */ var _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./internal/operators/mergeAll */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_105__["mergeAll"]; });

/* harmony import */ var _internal_operators_flatMap__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./internal/operators/flatMap */ "./node_modules/rxjs/dist/esm5/internal/operators/flatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _internal_operators_flatMap__WEBPACK_IMPORTED_MODULE_106__["flatMap"]; });

/* harmony import */ var _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./internal/operators/mergeMap */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_107__["mergeMap"]; });

/* harmony import */ var _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./internal/operators/mergeMapTo */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_108__["mergeMapTo"]; });

/* harmony import */ var _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./internal/operators/mergeScan */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScan", function() { return _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_109__["mergeScan"]; });

/* harmony import */ var _internal_operators_mergeWith__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./internal/operators/mergeWith */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return _internal_operators_mergeWith__WEBPACK_IMPORTED_MODULE_110__["mergeWith"]; });

/* harmony import */ var _internal_operators_min__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./internal/operators/min */ "./node_modules/rxjs/dist/esm5/internal/operators/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _internal_operators_min__WEBPACK_IMPORTED_MODULE_111__["min"]; });

/* harmony import */ var _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./internal/operators/multicast */ "./node_modules/rxjs/dist/esm5/internal/operators/multicast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_112__["multicast"]; });

/* harmony import */ var _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./internal/operators/observeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_113__["observeOn"]; });

/* harmony import */ var _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./internal/operators/pairwise */ "./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_114__["pairwise"]; });

/* harmony import */ var _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./internal/operators/pluck */ "./node_modules/rxjs/dist/esm5/internal/operators/pluck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_115__["pluck"]; });

/* harmony import */ var _internal_operators_publish__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./internal/operators/publish */ "./node_modules/rxjs/dist/esm5/internal/operators/publish.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return _internal_operators_publish__WEBPACK_IMPORTED_MODULE_116__["publish"]; });

/* harmony import */ var _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./internal/operators/publishBehavior */ "./node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_117__["publishBehavior"]; });

/* harmony import */ var _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./internal/operators/publishLast */ "./node_modules/rxjs/dist/esm5/internal/operators/publishLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishLast", function() { return _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_118__["publishLast"]; });

/* harmony import */ var _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./internal/operators/publishReplay */ "./node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishReplay", function() { return _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_119__["publishReplay"]; });

/* harmony import */ var _internal_operators_raceWith__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./internal/operators/raceWith */ "./node_modules/rxjs/dist/esm5/internal/operators/raceWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raceWith", function() { return _internal_operators_raceWith__WEBPACK_IMPORTED_MODULE_120__["raceWith"]; });

/* harmony import */ var _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./internal/operators/reduce */ "./node_modules/rxjs/dist/esm5/internal/operators/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_121__["reduce"]; });

/* harmony import */ var _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./internal/operators/repeat */ "./node_modules/rxjs/dist/esm5/internal/operators/repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_122__["repeat"]; });

/* harmony import */ var _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./internal/operators/repeatWhen */ "./node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_123__["repeatWhen"]; });

/* harmony import */ var _internal_operators_retry__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./internal/operators/retry */ "./node_modules/rxjs/dist/esm5/internal/operators/retry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _internal_operators_retry__WEBPACK_IMPORTED_MODULE_124__["retry"]; });

/* harmony import */ var _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./internal/operators/retryWhen */ "./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retryWhen", function() { return _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_125__["retryWhen"]; });

/* harmony import */ var _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./internal/operators/refCount */ "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_126__["refCount"]; });

/* harmony import */ var _internal_operators_sample__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./internal/operators/sample */ "./node_modules/rxjs/dist/esm5/internal/operators/sample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _internal_operators_sample__WEBPACK_IMPORTED_MODULE_127__["sample"]; });

/* harmony import */ var _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./internal/operators/sampleTime */ "./node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sampleTime", function() { return _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_128__["sampleTime"]; });

/* harmony import */ var _internal_operators_scan__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./internal/operators/scan */ "./node_modules/rxjs/dist/esm5/internal/operators/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _internal_operators_scan__WEBPACK_IMPORTED_MODULE_129__["scan"]; });

/* harmony import */ var _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./internal/operators/sequenceEqual */ "./node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_130__["sequenceEqual"]; });

/* harmony import */ var _internal_operators_share__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./internal/operators/share */ "./node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _internal_operators_share__WEBPACK_IMPORTED_MODULE_131__["share"]; });

/* harmony import */ var _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./internal/operators/shareReplay */ "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareReplay", function() { return _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_132__["shareReplay"]; });

/* harmony import */ var _internal_operators_single__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./internal/operators/single */ "./node_modules/rxjs/dist/esm5/internal/operators/single.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _internal_operators_single__WEBPACK_IMPORTED_MODULE_133__["single"]; });

/* harmony import */ var _internal_operators_skip__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./internal/operators/skip */ "./node_modules/rxjs/dist/esm5/internal/operators/skip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _internal_operators_skip__WEBPACK_IMPORTED_MODULE_134__["skip"]; });

/* harmony import */ var _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./internal/operators/skipLast */ "./node_modules/rxjs/dist/esm5/internal/operators/skipLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_135__["skipLast"]; });

/* harmony import */ var _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./internal/operators/skipUntil */ "./node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_136__["skipUntil"]; });

/* harmony import */ var _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./internal/operators/skipWhile */ "./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_137__["skipWhile"]; });

/* harmony import */ var _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./internal/operators/startWith */ "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_138__["startWith"]; });

/* harmony import */ var _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./internal/operators/subscribeOn */ "./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_139__["subscribeOn"]; });

/* harmony import */ var _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./internal/operators/switchAll */ "./node_modules/rxjs/dist/esm5/internal/operators/switchAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_140__["switchAll"]; });

/* harmony import */ var _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./internal/operators/switchMap */ "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_141__["switchMap"]; });

/* harmony import */ var _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./internal/operators/switchMapTo */ "./node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_142__["switchMapTo"]; });

/* harmony import */ var _internal_operators_switchScan__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./internal/operators/switchScan */ "./node_modules/rxjs/dist/esm5/internal/operators/switchScan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchScan", function() { return _internal_operators_switchScan__WEBPACK_IMPORTED_MODULE_143__["switchScan"]; });

/* harmony import */ var _internal_operators_take__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./internal/operators/take */ "./node_modules/rxjs/dist/esm5/internal/operators/take.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_operators_take__WEBPACK_IMPORTED_MODULE_144__["take"]; });

/* harmony import */ var _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./internal/operators/takeLast */ "./node_modules/rxjs/dist/esm5/internal/operators/takeLast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_145__["takeLast"]; });

/* harmony import */ var _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./internal/operators/takeUntil */ "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_146__["takeUntil"]; });

/* harmony import */ var _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./internal/operators/takeWhile */ "./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_147__["takeWhile"]; });

/* harmony import */ var _internal_operators_tap__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./internal/operators/tap */ "./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _internal_operators_tap__WEBPACK_IMPORTED_MODULE_148__["tap"]; });

/* harmony import */ var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./internal/operators/throttle */ "./node_modules/rxjs/dist/esm5/internal/operators/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_149__["throttle"]; });

/* harmony import */ var _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./internal/operators/throttleTime */ "./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleTime", function() { return _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_150__["throttleTime"]; });

/* harmony import */ var _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./internal/operators/throwIfEmpty */ "./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_151__["throwIfEmpty"]; });

/* harmony import */ var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./internal/operators/timeInterval */ "./node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_152__["timeInterval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_28__["timeout"]; });

/* harmony import */ var _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./internal/operators/timeoutWith */ "./node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_153__["timeoutWith"]; });

/* harmony import */ var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./internal/operators/timestamp */ "./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_154__["timestamp"]; });

/* harmony import */ var _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./internal/operators/toArray */ "./node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_155__["toArray"]; });

/* harmony import */ var _internal_operators_window__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./internal/operators/window */ "./node_modules/rxjs/dist/esm5/internal/operators/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _internal_operators_window__WEBPACK_IMPORTED_MODULE_156__["window"]; });

/* harmony import */ var _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./internal/operators/windowCount */ "./node_modules/rxjs/dist/esm5/internal/operators/windowCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowCount", function() { return _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_157__["windowCount"]; });

/* harmony import */ var _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./internal/operators/windowTime */ "./node_modules/rxjs/dist/esm5/internal/operators/windowTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowTime", function() { return _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_158__["windowTime"]; });

/* harmony import */ var _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./internal/operators/windowToggle */ "./node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowToggle", function() { return _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_159__["windowToggle"]; });

/* harmony import */ var _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./internal/operators/windowWhen */ "./node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowWhen", function() { return _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_160__["windowWhen"]; });

/* harmony import */ var _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./internal/operators/withLatestFrom */ "./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_161__["withLatestFrom"]; });

/* harmony import */ var _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./internal/operators/zipAll */ "./node_modules/rxjs/dist/esm5/internal/operators/zipAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipAll", function() { return _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_162__["zipAll"]; });

/* harmony import */ var _internal_operators_zipWith__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./internal/operators/zipWith */ "./node_modules/rxjs/dist/esm5/internal/operators/zipWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return _internal_operators_zipWith__WEBPACK_IMPORTED_MODULE_163__["zipWith"]; });








































































































































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/AsyncSubject.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/AsyncSubject.js ***!
  \**************************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/AsyncSubject.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js ***!
  \*****************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Notification.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Notification.js ***!
  \**************************************************************/
/*! exports provided: NotificationKind, Notification, observeNotification */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Notification.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
/*! exports provided: Observable */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Observable.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js ***!
  \***************************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Scheduler.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Scheduler.js ***!
  \***********************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Scheduler.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*********************************************************/
/*! exports provided: Subject, AnonymousSubject */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Subject.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/*! exports provided: Subscriber, SafeSubscriber, EMPTY_OBSERVER */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Subscriber.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/*! exports provided: Subscription, EMPTY_SUBSCRIPTION, isSubscription */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/Subscription.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/*! exports provided: config */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/config.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js ***!
  \****************************************************************/
/*! exports provided: firstValueFrom */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js ***!
  \***************************************************************/
/*! exports provided: lastValueFrom */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js ***!
  \**********************************************************************************/
/*! exports provided: ConnectableObservable */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js ***!
  \*************************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js ***!
  \*****************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js ***!
  \**************************************************************************/
/*! exports provided: combineLatest, combineLatestInit */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/concat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/concat.js ***!
  \*******************************************************************/
/*! exports provided: concat */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/concat.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/connectable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/connectable.js ***!
  \************************************************************************/
/*! exports provided: connectable */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/connectable.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/defer.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/defer.js ***!
  \******************************************************************/
/*! exports provided: defer */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/defer.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js":
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js ***!
  \********************************************************************************/
/*! exports provided: animationFrames */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/empty.js ***!
  \******************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/empty.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js ***!
  \*********************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/from.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/from.js ***!
  \*****************************************************************/
/*! exports provided: from */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/from.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js ***!
  \**********************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js ***!
  \*****************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/generate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/generate.js ***!
  \*********************************************************************/
/*! exports provided: generate */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/generate.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/iif.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/iif.js ***!
  \****************************************************************/
/*! exports provided: iif */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/iif.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/interval.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/interval.js ***!
  \*********************************************************************/
/*! exports provided: interval */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/interval.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/merge.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/merge.js ***!
  \******************************************************************/
/*! exports provided: merge */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/merge.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/never.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/never.js ***!
  \******************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/never.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/of.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/of.js ***!
  \***************************************************************/
/*! exports provided: of */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/of.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js ***!
  \******************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/pairs.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/pairs.js ***!
  \******************************************************************/
/*! exports provided: pairs */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/pairs.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/partition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/partition.js ***!
  \**********************************************************************/
/*! exports provided: partition */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/partition.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/race.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/race.js ***!
  \*****************************************************************/
/*! exports provided: race, raceInit */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/race.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/range.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/range.js ***!
  \******************************************************************/
/*! exports provided: range */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/range.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/throwError.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/throwError.js ***!
  \***********************************************************************/
/*! exports provided: throwError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/throwError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/timer.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/timer.js ***!
  \******************************************************************/
/*! exports provided: timer */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/timer.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/using.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/using.js ***!
  \******************************************************************/
/*! exports provided: using */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/using.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/zip.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/zip.js ***!
  \****************************************************************/
/*! exports provided: zip */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/observable/zip.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/audit.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/audit.js ***!
  \*****************************************************************/
/*! exports provided: audit */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/audit.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/auditTime.js ***!
  \*********************************************************************/
/*! exports provided: auditTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/auditTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/buffer.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/buffer.js ***!
  \******************************************************************/
/*! exports provided: buffer */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/buffer.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js ***!
  \***********************************************************************/
/*! exports provided: bufferCount */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js ***!
  \**********************************************************************/
/*! exports provided: bufferTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js ***!
  \************************************************************************/
/*! exports provided: bufferToggle */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js ***!
  \**********************************************************************/
/*! exports provided: bufferWhen */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/catchError.js ***!
  \**********************************************************************/
/*! exports provided: catchError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/catchError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/combineAll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/combineAll.js ***!
  \**********************************************************************/
/*! exports provided: combineAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/combineAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js ***!
  \****************************************************************************/
/*! exports provided: combineLatestAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js ***!
  \*****************************************************************************/
/*! exports provided: combineLatestWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js ***!
  \*********************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/concatAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js ***!
  \*********************************************************************/
/*! exports provided: concatMap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js ***!
  \***********************************************************************/
/*! exports provided: concatMapTo */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/concatWith.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/concatWith.js ***!
  \**********************************************************************/
/*! exports provided: concatWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/concatWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/connect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/connect.js ***!
  \*******************************************************************/
/*! exports provided: connect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/connect.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/count.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/count.js ***!
  \*****************************************************************/
/*! exports provided: count */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/count.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/debounce.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/debounce.js ***!
  \********************************************************************/
/*! exports provided: debounce */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/debounce.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js ***!
  \************************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js ***!
  \**************************************************************************/
/*! exports provided: defaultIfEmpty */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/delay.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/delay.js ***!
  \*****************************************************************/
/*! exports provided: delay */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/delay.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js ***!
  \*********************************************************************/
/*! exports provided: delayWhen */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js ***!
  \*************************************************************************/
/*! exports provided: dematerialize */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/distinct.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/distinct.js ***!
  \********************************************************************/
/*! exports provided: distinct */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/distinct.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js":
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js ***!
  \********************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js ***!
  \***********************************************************************************/
/*! exports provided: distinctUntilKeyChanged */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/elementAt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/elementAt.js ***!
  \*********************************************************************/
/*! exports provided: elementAt */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/elementAt.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/endWith.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/endWith.js ***!
  \*******************************************************************/
/*! exports provided: endWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/endWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/every.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/every.js ***!
  \*****************************************************************/
/*! exports provided: every */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/every.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/exhaust.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/exhaust.js ***!
  \*******************************************************************/
/*! exports provided: exhaust */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/exhaust.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js ***!
  \**********************************************************************/
/*! exports provided: exhaustAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js ***!
  \**********************************************************************/
/*! exports provided: exhaustMap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/expand.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/expand.js ***!
  \******************************************************************/
/*! exports provided: expand */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/expand.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/filter.js ***!
  \******************************************************************/
/*! exports provided: filter */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/filter.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/finalize.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/finalize.js ***!
  \********************************************************************/
/*! exports provided: finalize */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/finalize.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/find.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/find.js ***!
  \****************************************************************/
/*! exports provided: find, createFind */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/find.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/findIndex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/findIndex.js ***!
  \*********************************************************************/
/*! exports provided: findIndex */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/findIndex.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/first.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/first.js ***!
  \*****************************************************************/
/*! exports provided: first */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/first.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/flatMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/flatMap.js ***!
  \*******************************************************************/
/*! exports provided: flatMap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/flatMap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/groupBy.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/groupBy.js ***!
  \*******************************************************************/
/*! exports provided: groupBy */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/groupBy.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js ***!
  \**************************************************************************/
/*! exports provided: ignoreElements */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js ***!
  \*******************************************************************/
/*! exports provided: isEmpty */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/last.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/last.js ***!
  \****************************************************************/
/*! exports provided: last */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/last.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
/*! exports provided: map */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/map.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js ***!
  \*****************************************************************/
/*! exports provided: mapTo */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/materialize.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/materialize.js ***!
  \***********************************************************************/
/*! exports provided: materialize */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/materialize.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/max.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/max.js ***!
  \***************************************************************/
/*! exports provided: max */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/max.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js ***!
  \********************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js ***!
  \********************************************************************/
/*! exports provided: mergeMap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js ***!
  \**********************************************************************/
/*! exports provided: mergeMapTo */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js ***!
  \*********************************************************************/
/*! exports provided: mergeScan */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js ***!
  \*********************************************************************/
/*! exports provided: mergeWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/min.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/min.js ***!
  \***************************************************************/
/*! exports provided: min */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/min.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/multicast.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/multicast.js ***!
  \*********************************************************************/
/*! exports provided: multicast */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/multicast.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js ***!
  \*********************************************************************/
/*! exports provided: observeOn */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js ***!
  \********************************************************************/
/*! exports provided: pairwise */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/pairwise.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/pluck.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/pluck.js ***!
  \*****************************************************************/
/*! exports provided: pluck */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/pluck.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/publish.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/publish.js ***!
  \*******************************************************************/
/*! exports provided: publish */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/publish.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js ***!
  \***************************************************************************/
/*! exports provided: publishBehavior */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/publishLast.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/publishLast.js ***!
  \***********************************************************************/
/*! exports provided: publishLast */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/publishLast.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js ***!
  \*************************************************************************/
/*! exports provided: publishReplay */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/raceWith.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/raceWith.js ***!
  \********************************************************************/
/*! exports provided: raceWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/raceWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/reduce.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/reduce.js ***!
  \******************************************************************/
/*! exports provided: reduce */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/reduce.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/refCount.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/refCount.js ***!
  \********************************************************************/
/*! exports provided: refCount */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/refCount.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/repeat.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/repeat.js ***!
  \******************************************************************/
/*! exports provided: repeat */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/repeat.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js ***!
  \**********************************************************************/
/*! exports provided: repeatWhen */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/retry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/retry.js ***!
  \*****************************************************************/
/*! exports provided: retry */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/retry.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js ***!
  \*********************************************************************/
/*! exports provided: retryWhen */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/sample.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/sample.js ***!
  \******************************************************************/
/*! exports provided: sample */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/sample.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js ***!
  \**********************************************************************/
/*! exports provided: sampleTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/scan.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/scan.js ***!
  \****************************************************************/
/*! exports provided: scan */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/scan.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js ***!
  \*************************************************************************/
/*! exports provided: sequenceEqual */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/share.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/share.js ***!
  \*****************************************************************/
/*! exports provided: share */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/share.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js ***!
  \***********************************************************************/
/*! exports provided: shareReplay */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/single.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/single.js ***!
  \******************************************************************/
/*! exports provided: single */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/single.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/skip.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/skip.js ***!
  \****************************************************************/
/*! exports provided: skip */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/skip.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/skipLast.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/skipLast.js ***!
  \********************************************************************/
/*! exports provided: skipLast */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/skipLast.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js ***!
  \*********************************************************************/
/*! exports provided: skipUntil */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js ***!
  \*********************************************************************/
/*! exports provided: skipWhile */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js ***!
  \*********************************************************************/
/*! exports provided: startWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/startWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js ***!
  \***********************************************************************/
/*! exports provided: subscribeOn */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/switchAll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchAll.js ***!
  \*********************************************************************/
/*! exports provided: switchAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/switchAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js ***!
  \*********************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/switchMap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js ***!
  \***********************************************************************/
/*! exports provided: switchMapTo */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/switchScan.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchScan.js ***!
  \**********************************************************************/
/*! exports provided: switchScan */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/switchScan.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/take.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/take.js ***!
  \****************************************************************/
/*! exports provided: take */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/take.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/takeLast.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/takeLast.js ***!
  \********************************************************************/
/*! exports provided: takeLast */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/takeLast.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js ***!
  \*********************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js ***!
  \*********************************************************************/
/*! exports provided: takeWhile */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/tap.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/tap.js ***!
  \***************************************************************/
/*! exports provided: tap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/tap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/throttle.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/throttle.js ***!
  \********************************************************************/
/*! exports provided: defaultThrottleConfig, throttle */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/throttle.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js ***!
  \************************************************************************/
/*! exports provided: throttleTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js ***!
  \************************************************************************/
/*! exports provided: throwIfEmpty */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js ***!
  \************************************************************************/
/*! exports provided: timeInterval, TimeInterval */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/timeout.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/timeout.js ***!
  \*******************************************************************/
/*! exports provided: TimeoutError, timeout */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/timeout.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js ***!
  \***********************************************************************/
/*! exports provided: timeoutWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js ***!
  \*********************************************************************/
/*! exports provided: timestamp */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/timestamp.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/toArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/toArray.js ***!
  \*******************************************************************/
/*! exports provided: toArray */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/toArray.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/window.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/window.js ***!
  \******************************************************************/
/*! exports provided: window */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/window.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/windowCount.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/windowCount.js ***!
  \***********************************************************************/
/*! exports provided: windowCount */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/windowCount.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/windowTime.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/windowTime.js ***!
  \**********************************************************************/
/*! exports provided: windowTime */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/windowTime.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js ***!
  \************************************************************************/
/*! exports provided: windowToggle */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js ***!
  \**********************************************************************/
/*! exports provided: windowWhen */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js ***!
  \**************************************************************************/
/*! exports provided: withLatestFrom */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/zipAll.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/zipAll.js ***!
  \******************************************************************/
/*! exports provided: zipAll */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/zipAll.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/zipWith.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/zipWith.js ***!
  \*******************************************************************/
/*! exports provided: zipWith */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/operators/zipWith.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js ***!
  \*********************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \********************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js ***!
  \**************************************************************************/
/*! exports provided: animationFrameScheduler, animationFrame */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/asap.js ***!
  \****************************************************************/
/*! exports provided: asapScheduler, asap */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduler/asap.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js ***!
  \*****************************************************************/
/*! exports provided: asyncScheduler, async */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduler/async.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/queue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/queue.js ***!
  \*****************************************************************/
/*! exports provided: queueScheduler, queue */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/scheduler/queue.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
/*! exports provided: observable */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/symbol/observable.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/types.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/types.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/types.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \******************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js ***!
  \*****************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js ***!
  \********************************************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/SequenceError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/SequenceError.js ***!
  \********************************************************************/
/*! exports provided: SequenceError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/SequenceError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
/*! exports provided: identity */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/identity.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isObservable.js ***!
  \*******************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/isObservable.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/*! exports provided: noop */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/noop.js'");

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/rxjs/dist/esm5/internal/util/pipe.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/systemjs/dist/extras/named-register.js":
/*!*************************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/named-register.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*
 * SystemJS named register extension
 * Supports System.register('name', [..deps..], function (_export, _context) { ... })
 * 
 * Names are written to the registry as-is
 * System.register('x', ...) can be imported as System.import('x')
 */
(function (global) {
  var System = global.System;
  setRegisterRegistry(System);
  var systemJSPrototype = System.constructor.prototype;
  var constructor = System.constructor;
  var SystemJS = function () {
    constructor.call(this);
    setRegisterRegistry(this);
  };
  SystemJS.prototype = systemJSPrototype;
  System.constructor = SystemJS;

  var firstNamedDefine, firstName;

  function setRegisterRegistry(systemInstance) {
    systemInstance.registerRegistry = Object.create(null);
    systemInstance.namedRegisterAliases = Object.create(null);
  }

  var register = systemJSPrototype.register;
  systemJSPrototype.register = function (name, deps, declare) {
    if (typeof name !== 'string')
      return register.apply(this, arguments);
    var define = [deps, declare];
    this.registerRegistry[name] = define;
    if (!firstNamedDefine) {
      firstNamedDefine = define;
      firstName = name;
    }
    Promise.resolve().then(function () {
      firstNamedDefine = null;
      firstName = null;
    });
    return register.apply(this, [deps, declare]);
  };

  var resolve = systemJSPrototype.resolve;
  systemJSPrototype.resolve = function (id, parentURL) {
    try {
      // Prefer import map (or other existing) resolution over the registerRegistry
      return resolve.call(this, id, parentURL);
    } catch (err) {
      if (id in this.registerRegistry) {
        return this.namedRegisterAliases[id] || id;
      }
      throw err;
    }
  };

  var instantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var result = this.registerRegistry[url];
    if (result) {
      this.registerRegistry[url] = null;
      return result;
    } else {
      return instantiate.call(this, url, firstParentUrl);
    }
  };

  var getRegister = systemJSPrototype.getRegister;
  systemJSPrototype.getRegister = function (url) {
    // Calling getRegister() because other extras need to know it was called so they can perform side effects
    var register = getRegister.call(this, url);

    if (firstName && url) {
      this.namedRegisterAliases[firstName] = url;
    }
    var result = firstNamedDefine || register;
    firstNamedDefine = null;
    firstName = null;
    return result;
  };
})(typeof self !== 'undefined' ? self : global);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=main.928d043c2c76593ad0ca.hot-update.js.map