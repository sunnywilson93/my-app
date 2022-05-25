webpackHotUpdate("main",{

/***/ "./node_modules/@angular/core/fesm2015/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/core/fesm2015/core.js ***!
  \*****************************************************/
/*! exports provided: ANALYZE_FOR_ENTRY_COMPONENTS, APP_BOOTSTRAP_LISTENER, APP_ID, APP_INITIALIZER, ApplicationInitStatus, ApplicationModule, ApplicationRef, Attribute, COMPILER_OPTIONS, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Compiler, CompilerFactory, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ContentChild, ContentChildren, DEFAULT_CURRENCY_CODE, DebugElement, DebugEventListener, DebugNode, DefaultIterableDiffer, Directive, ElementRef, EmbeddedViewRef, ErrorHandler, EventEmitter, Host, HostBinding, HostListener, INJECTOR, Inject, InjectFlags, Injectable, InjectionToken, Injector, Input, IterableDiffers, KeyValueDiffers, LOCALE_ID, MissingTranslationStrategy, ModuleWithComponentFactories, NO_ERRORS_SCHEMA, NgModule, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, NgProbeToken, NgZone, Optional, Output, PACKAGE_ROOT_URL, PLATFORM_ID, PLATFORM_INITIALIZER, Pipe, PlatformRef, Query, QueryList, ReflectiveInjector, ReflectiveKey, Renderer2, RendererFactory2, RendererStyleFlags2, ResolvedReflectiveFactory, Sanitizer, SecurityContext, Self, SimpleChange, SkipSelf, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TRANSLATIONS, TRANSLATIONS_FORMAT, TemplateRef, Testability, TestabilityRegistry, Type, VERSION, Version, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation, ViewRef, WrappedValue, asNativeElements, assertPlatform, createPlatform, createPlatformFactory, defineInjectable, destroyPlatform, enableProdMode, forwardRef, getDebugNode, getModuleFactory, getPlatform, inject, isDevMode, platformCore, resolveForwardRef, setTestabilityGetter, ɵ0, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__, ɵChangeDetectorStatus, ɵCodegenComponentFactoryResolver, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵComponentFactory, ɵConsole, ɵDEFAULT_LOCALE_ID, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵINJECTOR_IMPL__POST_R3__, ɵINJECTOR_SCOPE, ɵLifecycleHooksFeature, ɵLocaleDataIndex, ɵNG_COMP_DEF, ɵNG_DIR_DEF, ɵNG_ELEMENT_ID, ɵNG_INJ_DEF, ɵNG_MOD_DEF, ɵNG_PIPE_DEF, ɵNG_PROV_DEF, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵNO_CHANGE, ɵNgModuleFactory, ɵNoopNgZone, ɵReflectionCapabilities, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵRender3NgModuleRef, ɵRuntimeError, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵ_sanitizeHtml, ɵ_sanitizeUrl, ɵallowSanitizationBypassAndThrow, ɵand, ɵangular_packages_core_core_a, ɵangular_packages_core_core_b, ɵangular_packages_core_core_ba, ɵangular_packages_core_core_bb, ɵangular_packages_core_core_bc, ɵangular_packages_core_core_bd, ɵangular_packages_core_core_be, ɵangular_packages_core_core_bf, ɵangular_packages_core_core_bg, ɵangular_packages_core_core_bh, ɵangular_packages_core_core_bi, ɵangular_packages_core_core_bj, ɵangular_packages_core_core_bl, ɵangular_packages_core_core_bm, ɵangular_packages_core_core_bn, ɵangular_packages_core_core_bo, ɵangular_packages_core_core_bp, ɵangular_packages_core_core_bq, ɵangular_packages_core_core_br, ɵangular_packages_core_core_bs, ɵangular_packages_core_core_bv, ɵangular_packages_core_core_bw, ɵangular_packages_core_core_bx, ɵangular_packages_core_core_bz, ɵangular_packages_core_core_c, ɵangular_packages_core_core_cb, ɵangular_packages_core_core_cc, ɵangular_packages_core_core_d, ɵangular_packages_core_core_e, ɵangular_packages_core_core_f, ɵangular_packages_core_core_g, ɵangular_packages_core_core_h, ɵangular_packages_core_core_i, ɵangular_packages_core_core_j, ɵangular_packages_core_core_k, ɵangular_packages_core_core_l, ɵangular_packages_core_core_m, ɵangular_packages_core_core_n, ɵangular_packages_core_core_o, ɵangular_packages_core_core_p, ɵangular_packages_core_core_q, ɵangular_packages_core_core_r, ɵangular_packages_core_core_s, ɵangular_packages_core_core_t, ɵangular_packages_core_core_u, ɵangular_packages_core_core_v, ɵangular_packages_core_core_w, ɵangular_packages_core_core_x, ɵangular_packages_core_core_y, ɵangular_packages_core_core_z, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustResourceUrl, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustUrl, ɵccf, ɵclearOverrides, ɵclearResolutionOfComponentResourcesQueue, ɵcmf, ɵcompileComponent, ɵcompileDirective, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵcompileNgModuleFactory__POST_R3__, ɵcompilePipe, ɵcreateInjector, ɵcrt, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdetectChanges, ɵdevModeEqual, ɵdid, ɵeld, ɵfindLocaleData, ɵflushModuleScopingQueueAsMuchAsPossible, ɵgetComponentViewDefinitionFactory, ɵgetDebugNodeR2, ɵgetDebugNode__POST_R3__, ɵgetDirectives, ɵgetHostElement, ɵgetInjectableDef, ɵgetLContext, ɵgetLocaleCurrencyCode, ɵgetLocalePluralCase, ɵgetModuleFactory__POST_R3__, ɵgetSanitizationBypassType, ɵglobal, ɵinitServicesIfNeeded, ɵinlineInterpolate, ɵinterpolate, ɵisBoundToModule__POST_R3__, ɵisDefaultChangeDetectionStrategy, ɵisListLikeIterable, ɵisObservable, ɵisPromise, ɵisSubscribable, ɵivyEnabled, ɵmakeDecorator, ɵmarkDirty, ɵmod, ɵmpd, ɵncd, ɵnoSideEffects, ɵnov, ɵoverrideComponentView, ɵoverrideProvider, ɵpad, ɵpatchComponentDefWithScope, ɵpid, ɵpod, ɵppd, ɵprd, ɵpublishDefaultGlobalUtils, ɵpublishGlobalUtil, ɵqud, ɵregisterLocaleData, ɵregisterModuleFactory, ɵregisterNgModuleType, ɵrenderComponent, ɵresetCompiledComponents, ɵresetJitOptions, ɵresolveComponentResources, ɵsetClassMetadata, ɵsetCurrentInjector, ɵsetDocument, ɵsetLocaleId, ɵstore, ɵstringify, ɵted, ɵtransitiveScopesFor, ɵunregisterLocaleData, ɵunv, ɵunwrapSafeValue, ɵvid, ɵwhenRendered, ɵɵCopyDefinitionFeature, ɵɵFactoryTarget, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵProvidersFeature, ɵɵadvance, ɵɵattribute, ɵɵattributeInterpolate1, ɵɵattributeInterpolate2, ɵɵattributeInterpolate3, ɵɵattributeInterpolate4, ɵɵattributeInterpolate5, ɵɵattributeInterpolate6, ɵɵattributeInterpolate7, ɵɵattributeInterpolate8, ɵɵattributeInterpolateV, ɵɵclassMap, ɵɵclassMapInterpolate1, ɵɵclassMapInterpolate2, ɵɵclassMapInterpolate3, ɵɵclassMapInterpolate4, ɵɵclassMapInterpolate5, ɵɵclassMapInterpolate6, ɵɵclassMapInterpolate7, ɵɵclassMapInterpolate8, ɵɵclassMapInterpolateV, ɵɵclassProp, ɵɵcontentQuery, ɵɵdefineComponent, ɵɵdefineDirective, ɵɵdefineInjectable, ɵɵdefineInjector, ɵɵdefineNgModule, ɵɵdefinePipe, ɵɵdirectiveInject, ɵɵdisableBindings, ɵɵelement, ɵɵelementContainer, ɵɵelementContainerEnd, ɵɵelementContainerStart, ɵɵelementEnd, ɵɵelementStart, ɵɵenableBindings, ɵɵgetCurrentView, ɵɵgetInheritedFactory, ɵɵhostProperty, ɵɵi18n, ɵɵi18nApply, ɵɵi18nAttributes, ɵɵi18nEnd, ɵɵi18nExp, ɵɵi18nPostprocess, ɵɵi18nStart, ɵɵinject, ɵɵinjectAttribute, ɵɵinvalidFactory, ɵɵinvalidFactoryDep, ɵɵlistener, ɵɵloadQuery, ɵɵnamespaceHTML, ɵɵnamespaceMathML, ɵɵnamespaceSVG, ɵɵnextContext, ɵɵngDeclareClassMetadata, ɵɵngDeclareComponent, ɵɵngDeclareDirective, ɵɵngDeclareFactory, ɵɵngDeclareInjectable, ɵɵngDeclareInjector, ɵɵngDeclareNgModule, ɵɵngDeclarePipe, ɵɵpipe, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵpipeBind4, ɵɵpipeBindV, ɵɵprojection, ɵɵprojectionDef, ɵɵproperty, ɵɵpropertyInterpolate, ɵɵpropertyInterpolate1, ɵɵpropertyInterpolate2, ɵɵpropertyInterpolate3, ɵɵpropertyInterpolate4, ɵɵpropertyInterpolate5, ɵɵpropertyInterpolate6, ɵɵpropertyInterpolate7, ɵɵpropertyInterpolate8, ɵɵpropertyInterpolateV, ɵɵpureFunction0, ɵɵpureFunction1, ɵɵpureFunction2, ɵɵpureFunction3, ɵɵpureFunction4, ɵɵpureFunction5, ɵɵpureFunction6, ɵɵpureFunction7, ɵɵpureFunction8, ɵɵpureFunctionV, ɵɵqueryRefresh, ɵɵreference, ɵɵresolveBody, ɵɵresolveDocument, ɵɵresolveWindow, ɵɵrestoreView, ɵɵsanitizeHtml, ɵɵsanitizeResourceUrl, ɵɵsanitizeScript, ɵɵsanitizeStyle, ɵɵsanitizeUrl, ɵɵsanitizeUrlOrResourceUrl, ɵɵsetComponentScope, ɵɵsetNgModuleScope, ɵɵstyleMap, ɵɵstyleMapInterpolate1, ɵɵstyleMapInterpolate2, ɵɵstyleMapInterpolate3, ɵɵstyleMapInterpolate4, ɵɵstyleMapInterpolate5, ɵɵstyleMapInterpolate6, ɵɵstyleMapInterpolate7, ɵɵstyleMapInterpolate8, ɵɵstyleMapInterpolateV, ɵɵstyleProp, ɵɵstylePropInterpolate1, ɵɵstylePropInterpolate2, ɵɵstylePropInterpolate3, ɵɵstylePropInterpolate4, ɵɵstylePropInterpolate5, ɵɵstylePropInterpolate6, ɵɵstylePropInterpolate7, ɵɵstylePropInterpolate8, ɵɵstylePropInterpolateV, ɵɵsyntheticHostListener, ɵɵsyntheticHostProperty, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵtextInterpolate2, ɵɵtextInterpolate3, ɵɵtextInterpolate4, ɵɵtextInterpolate5, ɵɵtextInterpolate6, ɵɵtextInterpolate7, ɵɵtextInterpolate8, ɵɵtextInterpolateV, ɵɵtrustConstantHtml, ɵɵtrustConstantResourceUrl, ɵɵviewQuery */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/@angular/core/fesm2015/core.js'");

/***/ }),

/***/ "./node_modules/@angular/forms/fesm2015/forms.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MaxValidator, MinLengthValidator, MinValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bi, ɵangular_packages_forms_forms_bj, ɵangular_packages_forms_forms_bk, ɵangular_packages_forms_forms_bl, ɵangular_packages_forms_forms_bm, ɵangular_packages_forms_forms_bn, ɵangular_packages_forms_forms_bo, ɵangular_packages_forms_forms_bp, ɵangular_packages_forms_forms_bq, ɵangular_packages_forms_forms_br, ɵangular_packages_forms_forms_bs, ɵangular_packages_forms_forms_bt, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/@angular/forms/fesm2015/forms.js'");

/***/ }),

/***/ "./node_modules/@dbeining/react-atom/dist/react-atom.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dbeining/react-atom/dist/react-atom.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/@dbeining/react-atom/dist/react-atom.js'");

/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/css-loader/dist/runtime/api.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/css-loader/dist/runtime/cssWithMappingToString.js'");

/***/ }),

/***/ "./node_modules/piral-menu/esm/Menu.js":
false,

/***/ "./node_modules/piral-menu/esm/actions.js":
false,

/***/ "./node_modules/piral-menu/esm/components.js":
false,

/***/ "./node_modules/piral-menu/esm/create.js":
false,

/***/ "./node_modules/piral-menu/esm/default.js":
false,

/***/ "./node_modules/piral-menu/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/piral-menu/esm/index.js ***!
  \**********************************************/
/*! exports provided: createMenuApi, PiralMenuContainer, PiralMenuItem, Menu */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-menu/esm/index.js'");

/***/ }),

/***/ "./node_modules/piral-menu/esm/types.js":
false,

/***/ "./node_modules/piral-translate/esm/Languages.js":
false,

/***/ "./node_modules/piral-translate/esm/actions.js":
false,

/***/ "./node_modules/piral-translate/esm/components.js":
false,

/***/ "./node_modules/piral-translate/esm/create.js":
false,

/***/ "./node_modules/piral-translate/esm/current.js":
false,

/***/ "./node_modules/piral-translate/esm/default.js":
false,

/***/ "./node_modules/piral-translate/esm/hooks.js":
false,

/***/ "./node_modules/piral-translate/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/piral-translate/esm/index.js ***!
  \***************************************************/
/*! exports provided: PiralLanguagesPicker, setupLocalizer, createLocaleApi, getUserLocale, useDynamicLanguage, useTranslate, Languages */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/piral-translate/esm/index.js'");

/***/ }),

/***/ "./node_modules/piral-translate/esm/localize.js":
false,

/***/ "./node_modules/piral-translate/esm/types.js":
false,

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/strip-ansi/index.js'");

/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/nc23203-wilson/Documents/pocs/my-app/node_modules/value-equal/esm/value-equal.js'");

/***/ })

})
//# sourceMappingURL=main.c49c11783f1e94a4e95f.hot-update.js.map