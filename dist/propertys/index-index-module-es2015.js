(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "+Fro":
/*!******************************************************************!*\
  !*** ./src/app/shared/dialogs/mint-dialog/mint-dialog.module.ts ***!
  \******************************************************************/
/*! exports provided: MintDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintDialogModule", function() { return MintDialogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mint-dialog.component */ "yIhK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MintDialogModule = /*@__PURE__*/ (() => {
    class MintDialogModule {
    }
    MintDialogModule.ɵfac = function MintDialogModule_Factory(t) { return new (t || MintDialogModule)(); };
    MintDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MintDialogModule });
    MintDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]] });
    return MintDialogModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MintDialogModule, { declarations: [_mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MintDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MintDialogComponent"]] });
})();



/***/ }),

/***/ "+rOU":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
  \*******************************************************************/
/*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortal", function() { return DomPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return PortalHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return TemplatePortalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */

function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-private
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 */
class Portal {
    /** Attach this portal to a host. */
    attach(host) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (host == null) {
                throwNullPortalOutletError();
            }
            if (host.hasAttached()) {
                throwPortalAlreadyAttachedError();
            }
        }
        this._attachedHost = host;
        return host.attach(this);
    }
    /** Detach this portal from its host */
    detach() {
        let host = this._attachedHost;
        if (host != null) {
            this._attachedHost = null;
            host.detach();
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throwNoPortalAttachedError();
        }
    }
    /** Whether this portal is attached to a host. */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
class ComponentPortal extends Portal {
    constructor(component, viewContainerRef, injector, componentFactoryResolver) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
}
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
class TemplatePortal extends Portal {
    constructor(template, viewContainerRef, context) {
        super();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
    }
    get origin() {
        return this.templateRef.elementRef;
    }
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
    }
    detach() {
        this.context = undefined;
        return super.detach();
    }
}
/**
 * A `DomPortal` is a portal whose DOM element will be taken from its current position
 * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
 * will be restored to its original position.
 */
class DomPortal extends Portal {
    constructor(element) {
        super();
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
    }
}
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 */
class BasePortalOutlet {
    constructor() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
        // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
        this.attachDomPortal = null;
    }
    /** Whether this host has an attached portal. */
    hasAttached() {
        return !!this._attachedPortal;
    }
    /** Attaches a portal. */
    attach(portal) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!portal) {
                throwNullPortalError();
            }
            if (this.hasAttached()) {
                throwPortalAlreadyAttachedError();
            }
            if (this._isDisposed) {
                throwPortalOutletAlreadyDisposedError();
            }
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
            // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
        }
        else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
        }
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throwUnknownPortalTypeError();
        }
    }
    /** Detaches a previously attached portal. */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    }
    /** Permanently dispose of this portal host. */
    dispose() {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    }
    /** @docs-private */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
    _invokeDisposeFn() {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    }
}
/**
 * @deprecated Use `BasePortalOutlet` instead.
 * @breaking-change 9.0.0
 */
class BasePortalHost extends BasePortalOutlet {
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
class DomPortalOutlet extends BasePortalOutlet {
    constructor(
    /** Element into which the content is projected. */
    outletElement, _componentFactoryResolver, _appRef, _defaultInjector, 
    /**
     * @deprecated `_document` Parameter to be made required.
     * @breaking-change 10.0.0
     */
    _document) {
        super();
        this.outletElement = outletElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!this._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            const element = portal.element;
            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            const anchorNode = this._document.createComment('dom-portal');
            element.parentNode.insertBefore(anchorNode, element);
            this.outletElement.appendChild(element);
            this._attachedPortal = portal;
            super.setDisposeFn(() => {
                // We can't use `replaceWith` here because IE doesn't support it.
                if (anchorNode.parentNode) {
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                }
            });
        };
        this._document = _document;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    attachComponentPortal(portal) {
        const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        const componentFactory = resolver.resolveComponentFactory(portal.component);
        let componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(() => componentRef.destroy());
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(() => {
                this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        this._attachedPortal = portal;
        return componentRef;
    }
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
        // Note that we want to detect changes after the nodes have been moved so that
        // any directives inside the portal that are looking at the DOM inside a lifecycle
        // hook won't be invoked too early.
        viewRef.detectChanges();
        this.setDisposeFn((() => {
            let index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        this._attachedPortal = portal;
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    }
    /**
     * Clears out a portal from the DOM.
     */
    dispose() {
        super.dispose();
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    }
    /** Gets the root HTMLElement for an instantiated component. */
    _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
    }
}
/**
 * @deprecated Use `DomPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
class DomPortalHost extends DomPortalOutlet {
}
let CdkPortal = /*@__PURE__*/ (() => {
    class CdkPortal extends TemplatePortal {
        constructor(templateRef, viewContainerRef) {
            super(templateRef, viewContainerRef);
        }
    }
    CdkPortal.ɵfac = function CdkPortal_Factory(t) { return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
    CdkPortal.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkPortal, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return CdkPortal;
})();
let TemplatePortalDirective = /*@__PURE__*/ (() => {
    class TemplatePortalDirective extends CdkPortal {
    }
    TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) { return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective); };
    TemplatePortalDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TemplatePortalDirective, selectors: [["", "cdk-portal", ""], ["", "portal", ""]], exportAs: ["cdkPortal"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                    provide: CdkPortal,
                    useExisting: TemplatePortalDirective
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return TemplatePortalDirective;
})();
const ɵTemplatePortalDirective_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
let CdkPortalOutlet = /*@__PURE__*/ (() => {
    class CdkPortalOutlet extends BasePortalOutlet {
        constructor(_componentFactoryResolver, _viewContainerRef, 
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
            super();
            this._componentFactoryResolver = _componentFactoryResolver;
            this._viewContainerRef = _viewContainerRef;
            /** Whether the portal component is initialized. */
            this._isInitialized = false;
            /** Emits when a portal is attached to the outlet. */
            this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /**
             * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
             * @param portal Portal to be attached.
             * @deprecated To be turned into a method.
             * @breaking-change 10.0.0
             */
            this.attachDomPortal = (portal) => {
                // @breaking-change 9.0.0 Remove check and error once the
                // `_document` constructor parameter is required.
                if (!this._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throw Error('Cannot attach DOM portal without _document constructor parameter');
                }
                const element = portal.element;
                if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throw Error('DOM portal content must be attached to a parent node.');
                }
                // Anchor used to save the element's previous position so
                // that we can restore it when the portal is detached.
                const anchorNode = this._document.createComment('dom-portal');
                portal.setAttachedHost(this);
                element.parentNode.insertBefore(anchorNode, element);
                this._getRootNode().appendChild(element);
                this._attachedPortal = portal;
                super.setDisposeFn(() => {
                    if (anchorNode.parentNode) {
                        anchorNode.parentNode.replaceChild(element, anchorNode);
                    }
                });
            };
            this._document = _document;
        }
        /** Portal associated with the Portal outlet. */
        get portal() {
            return this._attachedPortal;
        }
        set portal(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                super.detach();
            }
            if (portal) {
                super.attach(portal);
            }
            this._attachedPortal = portal;
        }
        /** Component or view reference that is attached to the portal. */
        get attachedRef() {
            return this._attachedRef;
        }
        ngOnInit() {
            this._isInitialized = true;
        }
        ngOnDestroy() {
            super.dispose();
            this._attachedPortal = null;
            this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @param portal Portal to be attached to the portal outlet.
         * @returns Reference to the created component.
         */
        attachComponentPortal(portal) {
            portal.setAttachedHost(this);
            // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.
            const viewContainerRef = portal.viewContainerRef != null ?
                portal.viewContainerRef :
                this._viewContainerRef;
            const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            const componentFactory = resolver.resolveComponentFactory(portal.component);
            const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
            // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.
            if (viewContainerRef !== this._viewContainerRef) {
                this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }
            super.setDisposeFn(() => ref.destroy());
            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @param portal Portal to be attached.
         * @returns Reference to the created embedded view.
         */
        attachTemplatePortal(portal) {
            portal.setAttachedHost(this);
            const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
            super.setDisposeFn(() => this._viewContainerRef.clear());
            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
        }
        /** Gets the root node of the portal outlet. */
        _getRootNode() {
            const nativeElement = this._viewContainerRef.element.nativeElement;
            // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.
            return (nativeElement.nodeType === nativeElement.ELEMENT_NODE ?
                nativeElement : nativeElement.parentNode);
        }
    }
    CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) { return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
    CdkPortalOutlet.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkPortalOutlet, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return CdkPortalOutlet;
})();
let PortalHostDirective = /*@__PURE__*/ (() => {
    class PortalHostDirective extends CdkPortalOutlet {
    }
    PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) { return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective); };
    PortalHostDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PortalHostDirective, selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]], inputs: { portal: ["cdkPortalHost", "portal"] }, exportAs: ["cdkPortalHost"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                    provide: CdkPortalOutlet,
                    useExisting: PortalHostDirective
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return PortalHostDirective;
})();
const ɵPortalHostDirective_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
let PortalModule = /*@__PURE__*/ (() => {
    class PortalModule {
    }
    PortalModule.ɵfac = function PortalModule_Factory(t) { return new (t || PortalModule)(); };
    PortalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalModule });
    PortalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    return PortalModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective], exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective] }); })();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * @docs-private
 * @deprecated Use `Injector.create` instead.
 * @breaking-change 11.0.0
 */
class PortalInjector {
    constructor(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    get(token, notFoundValue) {
        const value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
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
 * Generated bundle index. Do not edit.
 */






/***/ }),

/***/ "0EQZ":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
  \************************************************************************/
/*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function() { return _DisposeViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function() { return _RecycleViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function() { return _VIEW_REPEATER_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class DataSource {
}
/** Checks whether an object is a data source. */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** DataSource wrapper for a native array. */
class ArrayDataSource extends DataSource {
    constructor(_data) {
        super();
        this._data = _data;
    }
    connect() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
    }
    disconnect() { }
}
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
/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _DisposeViewRepeaterStrategy {
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) {
                const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = 1 /* INSERTED */;
            }
            else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = 3 /* REMOVED */;
            }
            else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = 2 /* MOVED */;
            }
            if (itemViewChanged) {
                itemViewChanged({
                    context: view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                });
            }
        });
    }
    detach() {
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
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _RecycleViewRepeaterStrategy {
    constructor() {
        /**
         * The size of the cache used to store unused views.
         * Setting the cache size to `0` will disable caching. Defaults to 20 views.
         */
        this.viewCacheSize = 20;
        /**
         * View cache that stores embedded view instances that have been previously stamped out,
         * but don't are not currently rendered. The view repeater will reuse these views rather than
         * creating brand new ones.
         *
         * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
         */
        this._viewCache = [];
    }
    /** Apply changes to the DOM. */
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) { // Item added.
                const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? 1 /* INSERTED */ : 0 /* REPLACED */;
            }
            else if (currentIndex == null) { // Item removed.
                this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
                operation = 3 /* REMOVED */;
            }
            else { // Item moved.
                view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = 2 /* MOVED */;
            }
            if (itemViewChanged) {
                itemViewChanged({
                    context: view === null || view === void 0 ? void 0 : view.context,
                    operation,
                    record,
                });
            }
        });
    }
    detach() {
        for (const view of this._viewCache) {
            view.destroy();
        }
        this._viewCache = [];
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new
     * one. Returns `undefined` if the item was inserted into a cached view.
     */
    _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
            cachedView.context.$implicit = value;
            return undefined;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
    }
    /** Detaches the view at the given index and inserts into the view cache. */
    _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
    }
    /** Moves view at the previous index to the current index. */
    _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
    }
    /**
     * Cache the given detached view. If the cache is full, the view will be
     * destroyed.
     */
    _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
            this._viewCache.push(view);
        }
        else {
            const index = viewContainerRef.indexOf(view);
            // The host component could remove views from the container outside of
            // the view repeater. It's unlikely this will occur, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                viewContainerRef.remove(index);
            }
        }
    }
    /** Inserts a recycled view from the cache at the given index. */
    _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
            viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
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
 * Class to be used to power selecting one or more options from a list.
 */
class SelectionModel {
    constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */
        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */
        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */
        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(value => this._markSelected(value));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /** Selected values. */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     */
    select(...values) {
        this._verifyValueAssignment(values);
        values.forEach(value => this._markSelected(value));
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     */
    deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach(value => this._unmarkSelected(value));
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     */
    sort(predicate) {
        if (this._multiple && this.selected) {
            this._selected.sort(predicate);
        }
    }
    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /** Emits a change event and clears the records of selected and deselected values. */
    _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    }
    /** Selects a value. */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /** Deselects a value. */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /** Clears out the selected values. */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach(value => this._unmarkSelected(value));
        }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMultipleValuesInSingleSelectionError();
        }
    }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
let UniqueSelectionDispatcher = /*@__PURE__*/ (() => {
    class UniqueSelectionDispatcher {
        constructor() {
            this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */
        notify(id, name) {
            for (let listener of this._listeners) {
                listener(id, name);
            }
        }
        /**
         * Listen for future changes to item selection.
         * @return Function used to deregister listener
         */
        listen(listener) {
            this._listeners.push(listener);
            return () => {
                this._listeners = this._listeners.filter((registered) => {
                    return listener !== registered;
                });
            };
        }
        ngOnDestroy() {
            this._listeners = [];
        }
    }
    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
    UniqueSelectionDispatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
})();
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
/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */
const _VIEW_REPEATER_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('_ViewRepeater');
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






/***/ }),

/***/ "0IaG":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function() { return _MatDialogBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function() { return _MatDialogContainerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function() { return _closeDialogVia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */





function MatDialogContainer_ng_template_0_Template(rf, ctx) { }
class MatDialogConfig {
    constructor() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */
        this.panelClass = '';
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Custom class for the backdrop. */
        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
        this.maxWidth = '80vw';
        /** Data being injected into the child component. */
        this.data = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */
        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
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
 * Animations used by MatDialog.
 * @docs-private
 */
const matDialogAnimations = {
    /** Animation that is applied on the dialog container by default. */
    dialogContainer: /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('dialogContainer', [
        // Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, exit', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('enter', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none' })),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => enter', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none', opacity: 1 }))),
        /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => exit', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', /*@__PURE__*/ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0 }))),
    ])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
let _MatDialogContainerBase = /*@__PURE__*/ (() => {
    class _MatDialogContainerBase extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
        constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, 
        /** The dialog configuration. */
        _config, _focusMonitor) {
            super();
            this._elementRef = _elementRef;
            this._focusTrapFactory = _focusTrapFactory;
            this._changeDetectorRef = _changeDetectorRef;
            this._config = _config;
            this._focusMonitor = _focusMonitor;
            /** Emits when an animation state changes. */
            this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            /** Element that was focused before the dialog was opened. Save this to restore upon close. */
            this._elementFocusedBeforeDialogWasOpened = null;
            /**
             * Type of interaction that led to the dialog being closed. This is used to determine
             * whether the focus style will be applied when returning focus to its original location
             * after the dialog is closed.
             */
            this._closeInteractionType = null;
            /**
             * Attaches a DOM portal to the dialog container.
             * @param portal Portal to be attached.
             * @deprecated To be turned into a method.
             * @breaking-change 10.0.0
             */
            this.attachDomPortal = (portal) => {
                if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throwMatDialogContentAlreadyAttachedError();
                }
                return this._portalOutlet.attachDomPortal(portal);
            };
            this._ariaLabelledBy = _config.ariaLabelledBy || null;
            this._document = _document;
        }
        /** Initializes the dialog container with the attached content. */
        _initializeWithAttachedContent() {
            this._setupFocusTrap();
            // Save the previously focused element. This element will be re-focused
            // when the dialog closes.
            this._capturePreviouslyFocusedElement();
            // Move focus onto the dialog immediately in order to prevent the user
            // from accidentally opening multiple dialogs at the same time.
            this._focusDialogContainer();
        }
        /**
         * Attach a ComponentPortal as content to this dialog container.
         * @param portal Portal to be attached as the dialog content.
         */
        attachComponentPortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatDialogContentAlreadyAttachedError();
            }
            return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @param portal Portal to be attached as the dialog content.
         */
        attachTemplatePortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatDialogContentAlreadyAttachedError();
            }
            return this._portalOutlet.attachTemplatePortal(portal);
        }
        /** Moves focus back into the dialog if it was moved out. */
        _recaptureFocus() {
            if (!this._containsFocus()) {
                const focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();
                if (focusContainer) {
                    this._elementRef.nativeElement.focus();
                }
            }
        }
        /** Moves the focus inside the focus trap. */
        _trapFocus() {
            // If we were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
                this._focusTrap.focusInitialElementWhenReady();
            }
            else if (!this._containsFocus()) {
                // Otherwise ensure that focus is on the dialog container. It's possible that a different
                // component tried to move focus while the open animation was running. See:
                // https://github.com/angular/components/issues/16215. Note that we only want to do this
                // if the focus isn't inside the dialog already, because it's possible that the consumer
                // turned off `autoFocus` in order to move focus themselves.
                this._elementRef.nativeElement.focus();
            }
        }
        /** Restores focus to the element that was focused before the dialog opened. */
        _restoreFocus() {
            const previousElement = this._elementFocusedBeforeDialogWasOpened;
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (this._config.restoreFocus && previousElement &&
                typeof previousElement.focus === 'function') {
                const activeElement = this._getActiveElement();
                const element = this._elementRef.nativeElement;
                // Make sure that focus is still inside the dialog or is on the body (usually because a
                // non-focusable element like the backdrop was clicked) before moving it. It's possible that
                // the consumer moved it themselves before the animation was done, in which case we shouldn't
                // do anything.
                if (!activeElement || activeElement === this._document.body || activeElement === element ||
                    element.contains(activeElement)) {
                    if (this._focusMonitor) {
                        this._focusMonitor.focusVia(previousElement, this._closeInteractionType);
                        this._closeInteractionType = null;
                    }
                    else {
                        previousElement.focus();
                    }
                }
            }
            if (this._focusTrap) {
                this._focusTrap.destroy();
            }
        }
        /** Sets up the focus trap. */
        _setupFocusTrap() {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        /** Captures the element that was focused before the dialog was opened. */
        _capturePreviouslyFocusedElement() {
            if (this._document) {
                this._elementFocusedBeforeDialogWasOpened = this._getActiveElement();
            }
        }
        /** Focuses the dialog container. */
        _focusDialogContainer() {
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                this._elementRef.nativeElement.focus();
            }
        }
        /** Returns whether focus is inside the dialog. */
        _containsFocus() {
            const element = this._elementRef.nativeElement;
            const activeElement = this._getActiveElement();
            return element === activeElement || element.contains(activeElement);
        }
        /** Gets the currently-focused element on the page. */
        _getActiveElement() {
            var _a;
            // If the `activeElement` is inside a shadow root, `document.activeElement` will
            // point to the shadow root so we have to descend into it ourselves.
            const activeElement = this._document.activeElement;
            return ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) || activeElement;
        }
    }
    _MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) { return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"])); };
    _MatDialogContainerBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogContainerBase, viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
            }
        }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
    return _MatDialogContainerBase;
})();
let MatDialogContainer = /*@__PURE__*/ (() => {
    class MatDialogContainer extends _MatDialogContainerBase {
        constructor() {
            super(...arguments);
            /** State of the dialog animation. */
            this._state = 'enter';
        }
        /** Callback, invoked whenever an animation on the host completes. */
        _onAnimationDone({ toState, totalTime }) {
            if (toState === 'enter') {
                this._trapFocus();
                this._animationStateChanged.next({ state: 'opened', totalTime });
            }
            else if (toState === 'exit') {
                this._restoreFocus();
                this._animationStateChanged.next({ state: 'closed', totalTime });
            }
        }
        /** Callback, invoked when an animation on the host starts. */
        _onAnimationStart({ toState, totalTime }) {
            if (toState === 'enter') {
                this._animationStateChanged.next({ state: 'opening', totalTime });
            }
            else if (toState === 'exit' || toState === 'void') {
                this._animationStateChanged.next({ state: 'closing', totalTime });
            }
        }
        /** Starts the dialog exit animation. */
        _startExitAnimation() {
            this._state = 'exit';
            // Mark the container for check so it can react if the
            // view container is using OnPush change detection.
            this._changeDetectorRef.markForCheck();
        }
    }
    MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) { return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer); };
    MatDialogContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatDialogContainer, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
            }
        }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatDialogContainer_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
            }
        }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matDialogAnimations.dialogContainer] } });
    return MatDialogContainer;
})();
const ɵMatDialogContainer_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
let uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */
class MatDialogRef {
    constructor(_overlayRef, _containerInstance, id = `mat-dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /** Whether the user is allowed to close the dialog. */
        this.disableClose = this._containerInstance._config.disableClose;
        /** Subject for notifying the user that the dialog has finished opening. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the dialog has started closing. */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Current state of the dialog. */
        this._state = 0 /* OPEN */;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'opened'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'closed'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        });
        _overlayRef.detachments().subscribe(() => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._afterClosed.next(this._result);
            this._afterClosed.complete();
            this.componentInstance = null;
            this._overlayRef.dispose();
        });
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        }))
            .subscribe(event => {
            event.preventDefault();
            _closeDialogVia(this, 'keyboard');
        });
        _overlayRef.backdropClick().subscribe(() => {
            if (this.disableClose) {
                this._containerInstance._recaptureFocus();
            }
            else {
                _closeDialogVia(this, 'mouse');
            }
        });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'closing'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._overlayRef.detachBackdrop();
            // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.
            this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = 1 /* CLOSING */;
        this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed() {
        return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    beforeClosed() {
        return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width = '', height = '') {
        this._overlayRef.updateSize({ width, height });
        this._overlayRef.updatePosition();
        return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        this._overlayRef.addPanelClass(classes);
        return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        this._overlayRef.removePanelClass(classes);
        return this;
    }
    /** Gets the current state of the dialog's lifecycle. */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */
    _finishDialogClose() {
        this._state = 2 /* CLOSED */;
        this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */
    _getPositionStrategy() {
        return this._overlayRef.getConfig().positionStrategy;
    }
}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.
function _closeDialogVia(ref, interactionType, result) {
    // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
    // For those, we keep the behavior as is and do not deal with the interaction type.
    if (ref._containerInstance !== undefined) {
        ref._containerInstance._closeInteractionType = interactionType;
    }
    return ref.close(result);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a dialog. */
const MAT_DIALOG_DATA = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/** Injection token that can be used to specify default dialog options. */
const MAT_DIALOG_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */
const MAT_DIALOG_SCROLL_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
let _MatDialogBase = /*@__PURE__*/ (() => {
    class _MatDialogBase {
        constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
            this._overlay = _overlay;
            this._injector = _injector;
            this._defaultOptions = _defaultOptions;
            this._parentDialog = _parentDialog;
            this._overlayContainer = _overlayContainer;
            this._dialogRefConstructor = _dialogRefConstructor;
            this._dialogContainerType = _dialogContainerType;
            this._dialogDataToken = _dialogDataToken;
            this._openDialogsAtThisLevel = [];
            this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this._ariaHiddenElements = new Map();
            // TODO (jelbourn): tighten the typing right-hand side of this expression.
            /**
             * Stream that emits when all open dialog have finished closing.
             * Will emit on subscribe if there are no open dialogs to begin with.
             */
            this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(() => this.openDialogs.length ?
                this._getAfterAllClosed() :
                this._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined)));
            this._scrollStrategy = scrollStrategy;
        }
        /** Keeps track of the currently-open dialogs. */
        get openDialogs() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        }
        /** Stream that emits when a dialog has been opened. */
        get afterOpened() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        }
        _getAfterAllClosed() {
            const parent = this._parentDialog;
            return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
        }
        open(componentOrTemplateRef, config) {
            config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
            if (config.id && this.getDialogById(config.id) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
            }
            const overlayRef = this._createOverlay(config);
            const dialogContainer = this._attachDialogContainer(overlayRef, config);
            const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
            // If this is the first dialog that we're opening, hide all the non-overlay content.
            if (!this.openDialogs.length) {
                this._hideNonDialogContentFromAssistiveTechnology();
            }
            this.openDialogs.push(dialogRef);
            dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
            this.afterOpened.next(dialogRef);
            // Notify the dialog container that the content has been attached.
            dialogContainer._initializeWithAttachedContent();
            return dialogRef;
        }
        /**
         * Closes all of the currently-open dialogs.
         */
        closeAll() {
            this._closeDialogs(this.openDialogs);
        }
        /**
         * Finds an open dialog by its id.
         * @param id ID to use when looking up the dialog.
         */
        getDialogById(id) {
            return this.openDialogs.find(dialog => dialog.id === id);
        }
        ngOnDestroy() {
            // Only close the dialogs at this level on destroy
            // since the parent service may still be active.
            this._closeDialogs(this._openDialogsAtThisLevel);
            this._afterAllClosedAtThisLevel.complete();
            this._afterOpenedAtThisLevel.complete();
        }
        /**
         * Creates the overlay into which the dialog will be loaded.
         * @param config The dialog configuration.
         * @returns A promise resolving to the OverlayRef for the created overlay.
         */
        _createOverlay(config) {
            const overlayConfig = this._getOverlayConfig(config);
            return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an overlay config from a dialog config.
         * @param dialogConfig The dialog configuration.
         * @returns The overlay configuration.
         */
        _getOverlayConfig(dialogConfig) {
            const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
                positionStrategy: this._overlay.position().global(),
                scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
                panelClass: dialogConfig.panelClass,
                hasBackdrop: dialogConfig.hasBackdrop,
                direction: dialogConfig.direction,
                minWidth: dialogConfig.minWidth,
                minHeight: dialogConfig.minHeight,
                maxWidth: dialogConfig.maxWidth,
                maxHeight: dialogConfig.maxHeight,
                disposeOnNavigation: dialogConfig.closeOnNavigation
            });
            if (dialogConfig.backdropClass) {
                state.backdropClass = dialogConfig.backdropClass;
            }
            return state;
        }
        /**
         * Attaches a dialog container to a dialog's already-created overlay.
         * @param overlay Reference to the dialog's underlying overlay.
         * @param config The dialog configuration.
         * @returns A promise resolving to a ComponentRef for the attached container.
         */
        _attachDialogContainer(overlay, config) {
            const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
                parent: userInjector || this._injector,
                providers: [{ provide: MatDialogConfig, useValue: config }]
            });
            const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
            const containerRef = overlay.attach(containerPortal);
            return containerRef.instance;
        }
        /**
         * Attaches the user-provided component to the already-created dialog container.
         * @param componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param dialogContainer Reference to the wrapping dialog container.
         * @param overlayRef Reference to the overlay in which the dialog resides.
         * @param config The dialog configuration.
         * @returns A promise resolving to the MatDialogRef that should be returned to the user.
         */
        _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
                dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, { $implicit: config.data, dialogRef }));
            }
            else {
                const injector = this._createInjector(config, dialogRef, dialogContainer);
                const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
                dialogRef.componentInstance = contentRef.instance;
            }
            dialogRef
                .updateSize(config.width, config.height)
                .updatePosition(config.position);
            return dialogRef;
        }
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @param config Config object that is used to construct the dialog.
         * @param dialogRef Reference to the dialog.
         * @param dialogContainer Dialog container element that wraps all of the contents.
         * @returns The custom injector that can be used inside the dialog.
         */
        _createInjector(config, dialogRef, dialogContainer) {
            const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            // The dialog container should be provided as the dialog container and the dialog's
            // content are created out of the same `ViewContainerRef` and as such, are siblings
            // for injector purposes. To allow the hierarchy that is expected, the dialog
            // container is explicitly provided in the injector.
            const providers = [
                { provide: this._dialogContainerType, useValue: dialogContainer },
                { provide: this._dialogDataToken, useValue: config.data },
                { provide: this._dialogRefConstructor, useValue: dialogRef }
            ];
            if (config.direction &&
                (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
                providers.push({
                    provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                    useValue: { value: config.direction, change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])() }
                });
            }
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({ parent: userInjector || this._injector, providers });
        }
        /**
         * Removes a dialog from the array of open dialogs.
         * @param dialogRef Dialog to be removed.
         */
        _removeOpenDialog(dialogRef) {
            const index = this.openDialogs.indexOf(dialogRef);
            if (index > -1) {
                this.openDialogs.splice(index, 1);
                // If all the dialogs were closed, remove/restore the `aria-hidden`
                // to a the siblings and emit to the `afterAllClosed` stream.
                if (!this.openDialogs.length) {
                    this._ariaHiddenElements.forEach((previousValue, element) => {
                        if (previousValue) {
                            element.setAttribute('aria-hidden', previousValue);
                        }
                        else {
                            element.removeAttribute('aria-hidden');
                        }
                    });
                    this._ariaHiddenElements.clear();
                    this._getAfterAllClosed().next();
                }
            }
        }
        /**
         * Hides all of the content that isn't an overlay from assistive technology.
         */
        _hideNonDialogContentFromAssistiveTechnology() {
            const overlayContainer = this._overlayContainer.getContainerElement();
            // Ensure that the overlay container is attached to the DOM.
            if (overlayContainer.parentElement) {
                const siblings = overlayContainer.parentElement.children;
                for (let i = siblings.length - 1; i > -1; i--) {
                    let sibling = siblings[i];
                    if (sibling !== overlayContainer &&
                        sibling.nodeName !== 'SCRIPT' &&
                        sibling.nodeName !== 'STYLE' &&
                        !sibling.hasAttribute('aria-live')) {
                        this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                        sibling.setAttribute('aria-hidden', 'true');
                    }
                }
            }
        }
        /** Closes all of the dialogs in an array. */
        _closeDialogs(dialogs) {
            let i = dialogs.length;
            while (i--) {
                // The `_openDialogs` property isn't updated after close until the rxjs subscription
                // runs on the next microtask, in addition to modifying the array as we're going
                // through it. We loop through all of them and call close without assuming that
                // they'll be removed from the list instantaneously.
                dialogs[i].close();
            }
        }
    }
    _MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) { return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"])); };
    _MatDialogBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogBase });
    return _MatDialogBase;
})();
let MatDialog = /*@__PURE__*/ (() => {
    class MatDialog extends _MatDialogBase {
        constructor(overlay, injector, 
        /**
         * @deprecated `_location` parameter to be removed.
         * @breaking-change 10.0.0
         */
        location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
            super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
        }
    }
    MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"])); };
    MatDialog.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatDialog, factory: MatDialog.ɵfac });
    return MatDialog;
})();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
let MatDialogClose = /*@__PURE__*/ (() => {
    class MatDialogClose {
        constructor(
        // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        dialogRef, _elementRef, _dialog) {
            this.dialogRef = dialogRef;
            this._elementRef = _elementRef;
            this._dialog = _dialog;
            /** Default to "button" to prevents accidental form submits. */
            this.type = 'button';
        }
        ngOnInit() {
            if (!this.dialogRef) {
                // When this directive is included in a dialog via TemplateRef (rather than being
                // in a Component), the DialogRef isn't available via injection because embedded
                // views cannot be given a custom injector. Instead, we look up the DialogRef by
                // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
                // be resolved at constructor time.
                this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
        }
        ngOnChanges(changes) {
            const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
            if (proxiedChange) {
                this.dialogResult = proxiedChange.currentValue;
            }
        }
        _onButtonClick(event) {
            // Determinate the focus origin using the click event, because using the FocusMonitor will
            // result in incorrect origins. Most of the time, close buttons will be auto focused in the
            // dialog, and therefore clicking the button won't result in a focus change. This means that
            // the FocusMonitor won't detect any origin change, and will always output `program`.
            _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
        }
    }
    MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
    MatDialogClose.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) { return ctx._onButtonClick($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
            }
        }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
    return MatDialogClose;
})();
let MatDialogTitle = /*@__PURE__*/ (() => {
    class MatDialogTitle {
        constructor(
        // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        _dialogRef, _elementRef, _dialog) {
            this._dialogRef = _dialogRef;
            this._elementRef = _elementRef;
            this._dialog = _dialog;
            this.id = `mat-dialog-title-${dialogElementUid++}`;
        }
        ngOnInit() {
            if (!this._dialogRef) {
                this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
            if (this._dialogRef) {
                Promise.resolve().then(() => {
                    const container = this._dialogRef._containerInstance;
                    if (container && !container._ariaLabelledBy) {
                        container._ariaLabelledBy = this.id;
                    }
                });
            }
        }
    }
    MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
    MatDialogTitle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
            }
        }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
    return MatDialogTitle;
})();
let MatDialogContent = /*@__PURE__*/ (() => {
    class MatDialogContent {
    }
    MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
    MatDialogContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
    return MatDialogContent;
})();
let MatDialogActions = /*@__PURE__*/ (() => {
    class MatDialogActions {
    }
    MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
    MatDialogActions.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
    return MatDialogActions;
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}
let MatDialogModule = /*@__PURE__*/ (() => {
    class MatDialogModule {
    }
    MatDialogModule.ɵfac = function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); };
    MatDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatDialogModule });
    MatDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
            MatDialog,
            MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
        ], imports: [[
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
    return MatDialogModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, { declarations: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]; }, imports: function () {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }, exports: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } });
})();
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






/***/ }),

/***/ "0L5U":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js ***!
  \*******************************************************************************************************/
/*! exports provided: CarouselComponent, IvyCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function() { return IvyCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CarouselComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
    }
}
function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
    }
    if (rf & 2) {
        const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
}
function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
    }
}
function CarouselComponent_ng_template_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
    }
    if (rf & 2) {
        const i_r6 = ctx.index;
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
    }
}
function CarouselComponent_div_6_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
    }
    if (rf & 2) {
        const i_r13 = ctx.index;
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
    }
}
function CarouselComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
    }
}
function CarouselComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
    }
}
const _c0 = ["*"];
class Touches {
    constructor(properties) {
        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
        };
        this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
        };
        this._otherListeners = {
            "resize": "handleResize"
        };
        /*
         * Listeners
         */
        /* Touchstart */
        this.handleTouchstart = (event) => {
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
            this.runHandler("touchstart", event);
        };
        /* Touchmove */
        this.handleTouchmove = (event) => {
            const touches = event.touches;
            // Pan
            if (this.detectPan(touches)) {
                this.runHandler("pan", event);
            }
            // Pinch
            if (this.detectPinch(event)) {
                this.runHandler("pinch", event);
            }
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Touchend */
        this.handleTouchend = (event) => {
            const touches = event.touches;
            // Double Tap
            if (this.detectDoubleTap()) {
                this.runHandler("double-tap", event);
            }
            // Tap
            this.detectTap();
            this.runHandler("touchend", event);
            this.eventType = 'touchend';
            if (touches && touches.length === 0) {
                this.eventType = undefined;
                this.i = 0;
            }
        };
        /* Mousedown */
        this.handleMousedown = (event) => {
            this.isMousedown = true;
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getMousedownPosition(event);
            }
            this.runHandler("mousedown", event);
        };
        /* Mousemove */
        this.handleMousemove = (event) => {
            //event.preventDefault();
            if (!this.isMousedown) {
                return;
            }
            // Pan
            this.runHandler("pan", event);
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Mouseup */
        this.handleMouseup = (event) => {
            // Tap
            this.detectTap();
            this.isMousedown = false;
            this.runHandler("mouseup", event);
            this.eventType = undefined;
            this.i = 0;
        };
        /* Wheel */
        this.handleWheel = (event) => {
            this.runHandler("wheel", event);
        };
        /* Resize */
        this.handleResize = (event) => {
            this.runHandler("resize", event);
        };
        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
    }
    get touchListeners() {
        return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
    }
    get mouseListeners() {
        return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
    }
    get otherListeners() {
        return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
    }
    destroy() {
        this.toggleEventListeners('removeEventListener');
    }
    toggleEventListeners(action) {
        let listeners;
        if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
        }
        else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
        }
        if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
        }
        for (var listener in listeners) {
            const handler = listeners[listener];
            // Window
            if (listener === "resize") {
                if (action === 'addEventListener') {
                    window.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    window.removeEventListener(listener, this[handler], false);
                }
                // Document
            }
            else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                    document.addEventListener(listener, this[handler], { passive: false });
                }
                if (action === 'removeEventListener') {
                    document.removeEventListener(listener, this[handler], false);
                }
                // Element
            }
            else {
                if (action === 'addEventListener') {
                    this.element.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    this.element.removeEventListener(listener, this[handler], false);
                }
            }
        }
    }
    addEventListeners(listener) {
        const handler = this._mouseListeners[listener];
        window.addEventListener(listener, this[handler], false);
    }
    removeEventListeners(listener) {
        const handler = this._mouseListeners[listener];
        window.removeEventListener(listener, this[handler], false);
    }
    handleLinearSwipe(event) {
        //event.preventDefault();
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
        }
        if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
        }
    }
    runHandler(eventName, response) {
        if (this.handlers[eventName]) {
            this.handlers[eventName](response);
        }
    }
    /*
     * Detection
     */
    detectPan(touches) {
        return touches.length === 1 && !this.eventType || this.eventType === 'pan';
    }
    detectDoubleTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout(() => {
                clearTimeout(this.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
        }
        this.lastTap = currentTime;
        return undefined;
    }
    detectTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.touchstartTime;
        if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
            }
            else {
                this.runHandler("longtap", event);
            }
        }
    }
    detectPinch(event) {
        const touches = event.touches;
        return (touches.length === 2 && this.eventType === undefined) || this.eventType === 'pinch';
    }
    detectLinearSwipe(event) {
        const touches = event.touches;
        if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        return undefined;
    }
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            const movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            const movementY = Math.abs(this.moveTop(0, event) - this.startY);
            if ((movementY * 3) > movementX) {
                return 'vertical-swipe';
            }
            else {
                return 'horizontal-swipe';
            }
        }
        else {
            return this.eventType;
        }
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getTouchstartPosition(event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    }
    getMousedownPosition(event) {
        this.startX = event.clientX - this.elementPosition.left;
        this.startY = event.clientY - this.elementPosition.top;
    }
    moveLeft(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientX - this.elementPosition.left;
        }
        else {
            return event.clientX - this.elementPosition.left;
        }
    }
    moveTop(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientY - this.elementPosition.top;
        }
        else {
            return event.clientY - this.elementPosition.top;
        }
    }
    detectTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /* Public properties and methods */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
    }
}
class Carousel {
    constructor(properties, utils, cells, container, slide) {
        this.properties = properties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slide = slide;
        /* The slide length has been limited by the limitSlideLength() method */
        this.isSlideLengthLimited = false;
        this.isContentImages = true;
        this.isLazyLoad = true;
        this.isContainerLocked = true;
        this.alignCells = "left";
        this.initialContainerPosition = 0;
        this.containerPullLimit = 100;
        this.handleTouchstart = (event) => {
            this.container.handleTouchstart();
            this.slide.handleTouchstart(event);
        };
        this.handleHorizontalSwipe = (event) => {
            this.container.handleHorizontalSwipe();
        };
        this.handleTouchend = (event) => {
            if (this.properties.freeScroll) {
                this.container.handleTouchend();
            }
            else {
                this.container.handleTouchend(true);
                this.slide.handleTouchend(event);
            }
        };
        this.isNextArrowDisabled = () => {
            return this.slide.isNextArrowDisabled();
        };
        this.isPrevArrowDisabled = () => {
            return this.slide.isPrevArrowDisabled();
        };
        this.init();
    }
    get cellLength() {
        return this.cells.cellLength;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get lastCellIndex() {
        return this.images.length ? (this.images.length - 1) : (this.cells.cellLength - 1);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get cellLimit() {
        if (this.isLightDOM) {
            let cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
            }
            return cellLimit;
        }
        else {
            return this.properties.images.length;
        }
    }
    get isLightDOM() {
        return this.properties.lightDOM || this.properties.loop;
    }
    get images() {
        return this.properties.images;
    }
    get margin() {
        return this.properties.margin;
    }
    get minSwipeDistance() {
        return this.properties.minSwipeDistance;
    }
    get transitionDuration() {
        return this.properties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.properties.transitionTimingFunction;
    }
    get fullCellWidth() {
        return this.properties.cellWidth + this.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get lapCounter() {
        return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
    }
    get slideCounter() {
        return this.slide.counter;
    }
    updateProperties(properties) {
        this.properties = properties;
    }
    init() {
        this.cellsElement = this.properties.cellsElement;
        this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
    }
    destroy() {
        clearInterval(this.autoplayId);
    }
    lineUpCells() {
        this.cells.lineUp();
    }
    handleTransitionend() {
        this.slide.handleTransitionend();
    }
    getImage(index) {
        return this.cells.getImage(index);
    }
    next(length = 1) {
        if (!this.isNextArrowDisabled()) {
            this.slide.next(length);
        }
    }
    prev(length = 1) {
        this.slide.prev(length);
    }
    autoplay() {
        this.autoplayId = setInterval(() => {
            this.next();
        }, this.properties.autoplayInterval);
    }
    stopAutoplay() {
        if (this.autoplayId) {
            clearInterval(this.autoplayId);
        }
    }
}
class Container {
    constructor(carouselProperties, utils, cells) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        /* The index of the new position relative to
         * the active index, for example -1 or +1
         */
        this.newPositionIndex = 0;
        this.isPositionCorrection = false;
        this.initialPositionX = 0;
        this.initialElementPositionX = 0;
        this.isLocked = true;
        this.pullLimit = 100;
        this.startTime = 0;
        this.startX = 0;
        this.moveX = 0;
        this.isSwipeInProgress = false;
        this.init();
    }
    get visibleWidth() {
        return this.utils.visibleWidth;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get element() {
        return this.carouselProperties.cellsElement;
    }
    get freeScroll() {
        return this.carouselProperties.freeScroll;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get transitionDuration() {
        return this.carouselProperties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.carouselProperties.transitionTimingFunction;
    }
    get cellLength() {
        if (this.images) {
            return this.images.length;
        }
        else {
            return this.cells.cellLength;
        }
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get tooFewCells() {
        return this.numberOfVisibleCells > this.cellLength;
    }
    get disabled() {
        return this.tooFewCells;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    init() {
        this.setWidth();
    }
    handleTouchstart() {
        this.startX = this.utils.getStartX(event);
        this.startTime = new Date().getTime();
        this.initialElementPositionX = this.getInitialElementPositionX();
    }
    handleHorizontalSwipe() {
        if (this.disabled) {
            return;
        }
        if (!this.isSwipeInProgress) {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
        }
        this.isSwipeInProgress = true;
        this.moveX = this.utils.getMoveX(event);
        this.move();
    }
    handleTouchend(simpleProcessing = false) {
        if (this.disabled) {
            return;
        }
        /* If touchend was passed to the Slide class */
        if (simpleProcessing) {
            this.isSwipeInProgress = false;
            return;
        }
        this.isSwipeInProgress = false;
        this.finishMoving();
        this.clearInitialValues();
    }
    move() {
        let positionX = this.getMovePositionX();
        const isPulled = this.detectPulled();
        const direction = this.getDirection();
        if (isPulled) {
            if (isPulled.edge === "left" && direction === "right" ||
                isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
            }
        }
        this.transformPositionX(positionX, 0);
        if (this.freeScroll) {
            this.initialPositionX = positionX;
        }
        if (isPulled) {
            if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
            }
            if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
            }
        }
    }
    getMovePositionX() {
        const distance = this.getDistance();
        return this.initialElementPositionX - distance;
    }
    getDistance() {
        return this.startX - this.moveX;
    }
    /* If the container is pulled out of the left or right border */
    detectPulled() {
        const currentPositionX = this.getCurrentPositionX();
        if (currentPositionX > 0) {
            return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
            };
        }
        if (currentPositionX < this.getEndPosition()) {
            return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
            };
        }
        return undefined;
    }
    slowdownOnPull(_positionX) {
        let distance = Math.abs(this.getDistance());
        const endPosition = this.getEndPosition();
        const isPulled = this.detectPulled();
        if (!isPulled) {
            return 0;
        }
        const decelerationRatio = 3 + isPulled.overflowX / 50;
        let positionX = 0;
        if (isPulled.edge === 'left') {
            if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
            }
            const rubberPositionX = distance / decelerationRatio;
            positionX = rubberPositionX;
            if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
            }
            if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
            }
        }
        if (isPulled.edge === 'right') {
            const rubberPositionX = endPosition + (((this.initialElementPositionX - distance) - endPosition) / decelerationRatio);
            const containerWidth = this.getWidth();
            positionX = rubberPositionX;
            if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = ((containerWidth - this.visibleWidth) + this.initialElementPositionX) + rubberPositionX;
            }
            if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
            }
        }
        return positionX;
    }
    finishMoving() {
        const positionX = this.getMovePositionX();
        let newPositionX = 0;
        if (this.freeScroll) {
            newPositionX = this.getInertia();
        }
        /* Align container while pulling */
        newPositionX = this.getAlignedPositionOnPull(newPositionX);
        this.transformPositionX(newPositionX);
        this.setInitialPosition(positionX);
    }
    /* Returns the new position of the container with inertia */
    getInertia() {
        const distance = this.getDistance();
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.startTime;
        let inertia = (distance / tapLength) * 100;
        return this.initialPositionX - inertia;
    }
    getAlignedPositionOnPull(newPositionX) {
        const direction = this.getDirection();
        if (direction === 'left') {
            let endPosition = this.getEndPosition();
            if (newPositionX < endPosition) {
                return endPosition;
            }
        }
        if (direction === 'right') {
            if (newPositionX > 0) {
                return 0;
            }
        }
        return newPositionX;
    }
    getCurrentPositionX() {
        const parentPosition = this.element.parentElement.getBoundingClientRect();
        const position = this.element.getBoundingClientRect();
        return position.left - parentPosition.left;
    }
    getEndPosition() {
        if (this.isLightDOM) {
            let imagesInContainer = this.cells.imageUtils.getImages();
            return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
        }
        else {
            const width = this.getWidth();
            const visibleWidth = this.element.parentElement.clientWidth;
            return visibleWidth - width;
        }
    }
    transformPositionX(value, duration = this.transitionDuration) {
        if (value === undefined) {
            return;
        }
        this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
        this.element.style.transform = 'translateX(' + value + 'px)';
    }
    getWidth() {
        let width = this.cellLengthInLightDOMMode * this.fullCellWidth;
        let totalImageWidth = this.cellLength * this.fullCellWidth;
        if (totalImageWidth < width) {
            width = totalImageWidth;
        }
        return this.isLightDOM ? width : totalImageWidth;
    }
    setWidth() {
        const width = this.getWidth();
        this.element.style.width = width + "px";
    }
    setInitialPosition(position) {
        this.initialPositionX = position;
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getInitialElementPositionX() {
        const carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
        return this.getElementPosition()['left'] - carouselElementPosition;
    }
    clearInitialValues() {
        this.startX = this.moveX = 0;
    }
    getDirection() {
        const direction = Math.sign(this.startX - this.moveX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
        return undefined;
    }
}
class ImageUtils {
    constructor(element) {
        this.cellStack = [];
        this.element = element;
    }
    getImages() {
        return this.cellStack.filter(this.filter);
    }
    filter(cell) {
        return cell.img !== undefined;
    }
}
class Cells {
    constructor(carouselProperties, utils) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.counter = 0;
        this.imageUtils = new ImageUtils(this.element);
        this.init(carouselProperties);
    }
    get images() {
        return this.carouselProperties.images;
    }
    get cellLength() {
        return this.cells ? this.cells.length : 0;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    lineUp() {
        const cells = this.element ? this.element.children : [];
        this.imageUtils.cellStack = [];
        for (var i = 0; i < cells.length; i++) {
            let cell = cells[i];
            let positionX = this.getCellPositionInContainer(i);
            cell.style.transform = 'translateX(' + positionX + 'px)';
            cell.style.width = this.carouselProperties.cellWidth + 'px';
            if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                    index: i,
                    positionX,
                    img: this.getImage(i)['image']
                });
            }
        }
        ;
    }
    ifSequenceOfCellsIsChanged() {
        const cells = this.element.children;
        return cells[0]['style'].transform !== 'translateX(0px)';
    }
    getCellPositionInContainer(cellIndexInDOMTree) {
        let positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        return positionIndex * this.fullCellWidth;
    }
    getCellIndexInContainer(cellIndexInDOMTree) {
        let positionIndex;
        if (!this.isLightDOM) {
            return cellIndexInDOMTree;
        }
        let cellLength = this.cellLengthInLightDOMMode;
        let counter = this.counter - this.overflowCellsLimit;
        if (counter > cellLength) {
            counter = counter % cellLength;
        }
        if (counter < 0) {
            return cellIndexInDOMTree;
        }
        else {
            positionIndex = cellIndexInDOMTree - counter;
            if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
            }
        }
        return positionIndex;
    }
    getImage(cellIndex) {
        if (!this.images) {
            return;
        }
        let imageIndex = this.getImageIndex(cellIndex);
        let file = this.images[imageIndex];
        if (file && !file.type) {
            file.type = 'image';
        }
        return {
            image: this.images[imageIndex],
            imageIndex
        };
    }
    getImageIndex(cellIndexInDOMTree) {
        const positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        let imageIndex;
        if (this.counter > this.overflowCellsLimit) {
            let cellLimitOverflow = this.counter - this.overflowCellsLimit;
            imageIndex = positionIndex + cellLimitOverflow;
            if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
            }
        }
        else {
            imageIndex = cellIndexInDOMTree;
        }
        return imageIndex;
    }
    setCounter(value) {
        this.counter = value;
    }
    init(carouselProperties) {
        this.element = this.carouselProperties.cellsElement;
        this.cells = this.element.children;
        this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
    }
}
class Slide {
    constructor(carouselProperties, utils, cells, container) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slideLength = 0;
        this.isSlideInProgress = false;
        this.counter = 0;
        this._counter = 0;
        this.distance = 0;
        this.distanceAbs = 0;
        this.isNotClickOnArrow = false;
        this.initialPositionX = 0;
        this.currentPositionX = 0;
        /* The slide length has been limited by the limitSlideLength() method */
        this.isSlideLengthLimited = false;
        this.init();
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get minSwipeDistance() {
        return this.carouselProperties.minSwipeDistance;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get visibleCellsOverflowContainer() {
        return this.utils.visibleCellsOverflowContainer;
    }
    /* The position to which the container returns after each slide
     * in the light DUM tree mode.
     */
    get fixedContainerPosition() {
        return -(this.overflowCellsLimit * this.fullCellWidth);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    /* Number of cell elements in the DUM tree */
    get cellLength() {
        if (this.isLightDOM) {
            return this.cells.cellLengthInLightDOMMode;
        }
        else {
            if (this.images) {
                return this.images.length;
            }
            else {
                return this.cells.cellLength;
            }
        }
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
        this.setVisibleWidth();
    }
    init() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
    handleTouchstart() {
        /* Touchstart event is not called for arrow */
        this.isNotClickOnArrow = true;
        this.isSlideLengthLimited = false;
        if (!this.isSlideInProgress) {
            this.initialPositionX = this.container.getCurrentPositionX();
        }
    }
    handleTouchend() {
        if (!this.isNotClickOnArrow) {
            return;
        }
        this.currentPositionX = this.container.getCurrentPositionX();
        this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
        this.distance = this.initialPositionX - this.currentPositionX;
        this.direction = this.getDirection();
        this.isNotClickOnArrow = false;
        this.handleSlide();
    }
    handleTransitionend() {
        this.setCounter();
        this.isSlideInProgress = false;
        if (this.isLightDOM) {
            this.alignContainerFast();
        }
    }
    handleSlide(customSlideLength = undefined) {
        let isUsingButton = customSlideLength;
        let newPositionX;
        if (isUsingButton && this.isSlideInProgress || !this.direction) {
            return;
        }
        /* Custom slide length is used in arrows */
        if (customSlideLength) {
            this.slideLength = this.limitSlideLength(customSlideLength);
            if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
            }
        }
        else {
            this.slideLength = this.getSlideLength(this.distanceAbs);
        }
        /* Store intermediate counter value */
        this._counter = this.getPreliminaryCounter();
        if (this.direction === 'left') {
            if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
            }
            this._counter = this.getPreliminaryCounter();
            let isSlidesEnd = this.isSlidesEnd(this._counter);
            newPositionX = this.getPositionByIndex(this._counter);
            if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
            }
        }
        if (this.direction === 'right') {
            if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
            }
            newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
        }
        if (this.container.getCurrentPositionX() !== newPositionX) {
            this.isSlideInProgress = true;
            this.container.transformPositionX(newPositionX);
        }
    }
    next(length = 1) {
        this.direction = 'left';
        this.handleSlide(length);
    }
    prev(length = 1) {
        this.direction = 'right';
        this.handleSlide(length);
    }
    select(index) {
        if (index > this.cellLength - 1) {
            return;
        }
        if (index > this.counter) {
            let length = index - this.counter;
            this.next(length);
        }
        if (index < this.counter) {
            let length = this.counter - index;
            this.prev(length);
        }
    }
    getPreliminaryCounter() {
        if (this.direction === 'left') {
            return this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            return this.counter - this.slideLength;
        }
        return 0;
    }
    /*
     * Limits the length of the slide during calls to the next() and prev()
     * methods if the specified position is outside the cell length
     */
    limitSlideLength(slideLength) {
        if (slideLength > 1) {
            for (var i = 0; i < slideLength; i++) {
                let newCounter = this.counter + (slideLength - i);
                if (!this.isSlidesEnd(newCounter)) {
                    slideLength = slideLength - i;
                    this.isSlideLengthLimited = i > 0;
                    break;
                }
            }
        }
        return slideLength;
    }
    /* Offset the container to show the last cell completely */
    getPositionCorrection(counter) {
        let correction = 0;
        let isLastSlide = this.isLastSlide(counter);
        if (this.carouselProperties.loop || this.direction === "right") {
            return 0;
        }
        if (this.isSlideLengthLimited || isLastSlide) {
            let cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;
            if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
            }
            if (correction >= -this.margin) {
                correction = 0;
            }
        }
        return correction;
    }
    getSlideLength(distanceAbs) {
        let isLastSlide = this.isLastSlide(this.counter);
        /* If the last cell does not fit entirely, then the
         * length of the swipe to the left, from the extreme
         * right position, may be shorter than usual.
         */
        if (isLastSlide && this.direction === "right") {
            distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
        }
        let length = Math.floor(distanceAbs / this.fullCellWidth);
        if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
            length++;
        }
        return length;
    }
    getDistanceAbs() {
        return Math.abs(this.initialPositionX - this.currentPositionX);
    }
    getDirection() {
        const direction = Math.sign(this.initialPositionX - this.currentPositionX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
        return undefined;
    }
    isSlidesEnd(counter) {
        let margin = this.visibleCellsOverflowContainer ? 1 : 0;
        let imageLength = this.images ? this.images.length : this.cells.cellLength;
        if (this.carouselProperties.loop) {
            return false;
        }
        else {
            return (imageLength - counter + margin) < this.numberOfVisibleCells;
        }
    }
    isLastSlide(counter) {
        return this.isSlidesEnd(counter + 1);
    }
    setCounter() {
        if (this.direction === 'left') {
            this.counter = this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            this.counter = this.counter - this.slideLength;
        }
    }
    getPositionByIndex(_counter) {
        let correction = this.getPositionCorrection(this.counter + this.slideLength);
        let position;
        if (correction !== 0) {
            correction = correction + this.fullCellWidth;
        }
        if (this.direction === 'right') {
            correction = 0;
        }
        if (this.isLightDOM && this.isLightDOMMode(_counter) ||
            this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
            let initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
            let counterDifference = _counter - this.counter;
            position = initialPosition - ((counterDifference * this.fullCellWidth) - correction);
        }
        else {
            position = -((_counter * this.fullCellWidth) - correction);
        }
        position = this.provideSafePosition(position);
        return position;
    }
    provideSafePosition(position) {
        const endPosition = this.container.getEndPosition();
        if (this.direction === 'left') {
            if (position > 0) {
                position = 0;
            }
        }
        if (this.direction === 'right') {
            if (position < endPosition) {
                position = endPosition;
            }
        }
        return position;
    }
    getPositionWithoutCorrection(value) {
        let remainder = Math.round(value) % this.fullCellWidth;
        if (remainder !== 0) {
            return value - (this.fullCellWidth + remainder);
        }
        else {
            return value;
        }
    }
    isNextArrowDisabled() {
        return this.isLastSlide(this.counter) ||
            (!this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells) ||
            (this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells);
    }
    isPrevArrowDisabled() {
        return this.counter === 0;
    }
    alignContainerFast() {
        if (this.isLightDOMMode(this.counter)) {
            let positionX = this.fixedContainerPosition;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
        else if (this.ifLeftDOMModeToBeginning(this.counter)) {
            /* If we have already exited the light DOM mode but
             * the cells are still out of place
             */
            if (this.cells.ifSequenceOfCellsIsChanged()) {
                let positionX = -(this.counter * this.fullCellWidth);
                this.container.transformPositionX(positionX, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
            }
        }
        else if (this.ifLeftDOMModeAtEnd(this.counter)) {
            let containerPositionX = this.container.getCurrentPositionX();
            let containerWidth = this.container.getWidth();
            this.visibleWidth;
            if (this.isLastSlide(this.counter) &&
                containerWidth + containerPositionX >= this.visibleWidth) {
                return;
            }
            let correction = this.getPositionCorrection(this.counter);
            if (correction !== 0) {
                correction = correction + this.fullCellWidth;
            }
            if (this.direction === 'right') {
                correction = 0;
            }
            let positionX = this.fixedContainerPosition + correction;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
    }
    isLightDOMMode(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (!this.isLightDOM) {
            return false;
        }
        if (counter > this.overflowCellsLimit && this.direction === "left" &&
            counter <= remainderOfCells) {
            flag = true;
        }
        if (counter >= this.overflowCellsLimit && this.direction === "right" &&
            counter < remainderOfCells) {
            flag = true;
        }
        if (this.counter > this.overflowCellsLimit && this.direction === "left" &&
            this.counter <= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= this.overflowCellsLimit && this.direction === "right" &&
            this.counter < remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeAtEnd(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (counter >= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeToBeginning(counter) {
        let flag;
        if (counter <= this.overflowCellsLimit) {
            flag = true;
        }
        if (this.counter <= this.overflowCellsLimit) {
            flag = true;
        }
        return flag;
    }
    setVisibleWidth() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
}
class Utils {
    constructor(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get overflowCellsLimit() {
        if (this.images && this.isImagesLessCellLimit) {
            let overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);
            if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
            }
            return overflowCellsLimit;
        }
        else {
            return this.carouselProperties.overflowCellsLimit;
        }
    }
    get isImagesLessCellLimit() {
        return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
    }
    get numberOfVisibleCells() {
        return Math.ceil(this.visibleWidth / this.fullCellWidth);
    }
    get visibleCellsOverflowContainer() {
        return (this.numberOfVisibleCells * this.fullCellWidth - this.margin) > this.visibleWidth;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get visibleWidth() {
        return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    getStartX(event) {
        const touches = event.touches;
        const carouselElementPosition = this.getCarouselElementPosition()['left'];
        let startX;
        if (touches) {
            startX = touches[0].clientX - carouselElementPosition;
        }
        else {
            startX = event.clientX - carouselElementPosition;
        }
        return startX;
    }
    getMoveX(event) {
        const touches = event.touches;
        const carouselElementPositionX = this.getCarouselElementPosition()['left'];
        if (touches) {
            return touches[0].clientX - carouselElementPositionX;
        }
        else {
            return event.clientX - carouselElementPositionX;
        }
    }
    getCarouselElementPosition() {
        return this.carouselProperties.hostElement.getBoundingClientRect();
    }
}
let CarouselComponent = /*@__PURE__*/ (() => {
    class CarouselComponent {
        constructor(elementRef, ref) {
            this.elementRef = elementRef;
            this.ref = ref;
            this.minTimeout = 30;
            this.isVideoPlaying = false;
            this._isCounter = false;
            this._cellWidth = 200;
            this._loop = false;
            this._lightDOM = false;
            this.isMoving = false;
            this.isNgContent = false;
            this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.height = 200;
            this.autoplay = false;
            this.autoplayInterval = 5000;
            this.pauseOnHover = true;
            this.dots = false;
            this.margin = 10;
            this.objectFit = 'cover';
            this.minSwipeDistance = 10;
            this.transitionDuration = 200;
            this.transitionTimingFunction = 'ease-out';
            this.counterSeparator = " / ";
            this.overflowCellsLimit = 3;
            this.listeners = 'mouse and touch';
            this.cellsToScroll = 1;
            this.freeScroll = false;
            this.arrows = true;
            this.arrowsOutside = false;
            this.arrowsTheme = 'light';
            this.hostClassCarousel = true;
            this.handleTouchstart = (event) => {
                this.touches.addEventListeners("mousemove", "handleMousemove");
                this.carousel.handleTouchstart(event);
                this.isMoving = true;
            };
            this.handleHorizontalSwipe = (event) => {
                event.preventDefault();
                this.carousel.handleHorizontalSwipe(event);
            };
            this.handleTouchend = (event) => {
                const touches = event.touches;
                this.carousel.handleTouchend(event);
                this.touches.removeEventListeners("mousemove", "handleMousemove");
                this.isMoving = false;
            };
            this.handleTap = (event) => {
                let outboundEvent = {
                    name: 'click'
                };
                let nodes = Array.prototype.slice.call(this.cellsElement.children);
                let cellElement = event.srcElement.closest(".carousel-cell");
                const i = nodes.indexOf(cellElement);
                const cellIndex = nodes.indexOf(cellElement);
                if (this.images) {
                    //outboundEvent.fileIndex = this.carousel.getFileIndex(i);
                    //outboundEvent.file = this.carousel.getFile(cellIndex);
                }
                else {
                    outboundEvent.cellIndex = cellIndex;
                }
            };
        }
        get isContainerLocked() {
            if (this.carousel) {
                return this.carousel.isContainerLocked;
            }
        }
        get slideCounter() {
            if (this.carousel) {
                return this.carousel.slideCounter;
            }
        }
        get lapCounter() {
            if (this.carousel) {
                return this.carousel.lapCounter;
            }
        }
        get isLandscape() {
            return window.innerWidth > window.innerHeight;
        }
        get isSafari() {
            const ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') !== -1) {
                return !(ua.indexOf('chrome') > -1);
            }
        }
        get counter() {
            let counter;
            if (this.loop) {
                counter = this.slideCounter % this.cellLength;
            }
            else {
                counter = this.slideCounter;
            }
            return counter + 1 + this.counterSeparator + this.cellLength;
        }
        get cellsElement() {
            return this.elementRef.nativeElement.querySelector('.carousel-cells');
        }
        get isArrows() {
            return this.arrows && !this.freeScroll;
        }
        get isCounter() {
            return this._isCounter && this.cellLength > 1;
        }
        get activeDotIndex() {
            return this.slideCounter % this.cellLength;
        }
        get cellLimit() {
            if (this.carousel) {
                return this.carousel.cellLimit;
            }
        }
        get carouselWidth() {
            return this.elementRef.nativeElement.clientWidth;
        }
        set images(images) {
            this._images = images;
        }
        get images() {
            return this._images;
        }
        set cellWidth(value) {
            if (value) {
                this._cellWidth = value;
            }
        }
        set isCounter(value) {
            if (value) {
                this._isCounter = value;
            }
        }
        set loop(value) {
            if (value) {
                this._loop = value;
            }
        }
        get loop() {
            if (this.images) {
                return this._loop;
            }
            else {
                return false;
            }
        }
        set lightDOM(value) {
            if (value) {
                this._lightDOM = value;
            }
        }
        get lightDOM() {
            if (this.images) {
                return this._lightDOM;
            }
            else {
                return false;
            }
        }
        onWindowResize(event) {
            if (this.utils.visibleWidth !== this.savedCarouselWidth) {
                this.resize();
            }
        }
        onMousemove(event) {
            if (this.autoplay && this.pauseOnHover) {
                this.carousel.stopAutoplay();
            }
        }
        onMouseleave(event) {
            if (this.autoplay && this.pauseOnHover) {
                this.carousel.autoplay();
            }
        }
        ngOnInit() {
            this.isNgContent = this.cellsElement.children.length > 0;
            this.touches = new Touches({
                element: this.cellsElement,
                listeners: this.listeners,
                mouseListeners: {
                    "mousedown": "handleMousedown",
                    "mouseup": "handleMouseup"
                }
            });
            this.touches.on('touchstart', this.handleTouchstart);
            this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
            this.touches.on('touchend', this.handleTouchend);
            this.touches.on('mousedown', this.handleTouchstart);
            this.touches.on('mouseup', this.handleTouchend);
            this.touches.on('tap', this.handleTap);
            this.setDimensions();
        }
        ngAfterViewInit() {
            this.initCarousel();
            this.cellLength = this.getCellLength();
            this.dotsArr = Array(this.cellLength).fill(1);
            this.ref.detectChanges();
            this.carousel.lineUpCells();
            this.savedCarouselWidth = this.carouselWidth;
            /* Start detecting changes in the DOM tree */
            this.detectDomChanges();
        }
        ngOnChanges(changes) {
            if (changes.width || changes.height || changes.images) {
                this.setDimensions();
                this.initCarousel();
                this.carousel.lineUpCells();
                this.ref.detectChanges();
            }
        }
        ngOnDestroy() {
            this.touches.destroy();
            //this.carousel.destroy();
        }
        initCarousel() {
            this.carouselProperties = {
                id: this.id,
                cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
                hostElement: this.elementRef.nativeElement,
                images: this.images,
                cellWidth: this.getCellWidth(),
                loop: this.loop,
                autoplayInterval: this.autoplayInterval,
                overflowCellsLimit: this.overflowCellsLimit,
                visibleWidth: this.width,
                margin: this.margin,
                minSwipeDistance: this.minSwipeDistance,
                transitionDuration: this.transitionDuration,
                transitionTimingFunction: this.transitionTimingFunction,
                videoProperties: this.videoProperties,
                eventHandler: this.events,
                freeScroll: this.freeScroll,
                lightDOM: this.lightDOM
            };
            this.utils = new Utils(this.carouselProperties);
            this.cells = new Cells(this.carouselProperties, this.utils);
            this.container = new Container(this.carouselProperties, this.utils, this.cells);
            this.slide = new Slide(this.carouselProperties, this.utils, this.cells, this.container);
            this.carousel = new Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);
            if (this.autoplay) {
                this.carousel.autoplay();
            }
        }
        resize() {
            this.landscapeMode = this.isLandscape;
            this.savedCarouselWidth = this.carouselWidth;
            this.carouselProperties.cellWidth = this.getCellWidth();
            this.cells.updateProperties(this.carouselProperties);
            this.carousel.updateProperties(this.carouselProperties);
            this.container.updateProperties(this.carouselProperties);
            this.slide.updateProperties(this.carouselProperties);
            this.utils.updateProperties(this.carouselProperties);
            this.carousel.lineUpCells();
            this.slide.select(0);
            this.ref.detectChanges();
        }
        detectDomChanges() {
            const observer = new MutationObserver((mutations) => {
                this.onDomChanges();
            });
            var config = {
                attributes: true,
                childList: true,
                characterData: true
            };
            observer.observe(this.cellsElement, config);
        }
        onDomChanges() {
            this.cellLength = this.getCellLength();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
        }
        setDimensions() {
            this.hostStyleHeight = this.height + 'px';
            this.hostStyleWidth = this.width + 'px';
        }
        getImage(index) {
            return this.carousel.getImage(index);
        }
        handleTransitionendCellContainer(event) {
            if (event.target['className'] === 'carousel-cells') {
                this.carousel.handleTransitionend();
            }
        }
        getCellWidth() {
            let elementWidth = this.carouselWidth;
            if (this.cellsToShow) {
                let margin = this.cellsToShow > 1 ? this.margin : 0;
                let totalMargin = margin * (this.cellsToShow - 1);
                return (elementWidth - totalMargin) / this.cellsToShow;
            }
            if (this._cellWidth === '100%') {
                return elementWidth;
            }
            else {
                return this._cellWidth;
            }
        }
        next() {
            this.carousel.next(this.cellsToScroll);
            this.carousel.stopAutoplay();
        }
        prev() {
            this.carousel.prev(this.cellsToScroll);
            this.carousel.stopAutoplay();
        }
        isNextArrowDisabled() {
            if (this.carousel) {
                return this.carousel.isNextArrowDisabled();
            }
        }
        isPrevArrowDisabled() {
            if (this.carousel) {
                return this.carousel.isPrevArrowDisabled();
            }
        }
        getCellLength() {
            if (this.images) {
                return this.images.length;
            }
            else {
                return this.cellsElement.children.length;
            }
        }
    }
    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"], ["", "carousel", ""]], hostVars: 6, hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) { return ctx.onMousemove($event); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
            }
        }, inputs: { height: "height", autoplay: "autoplay", autoplayInterval: "autoplayInterval", pauseOnHover: "pauseOnHover", dots: "dots", margin: "margin", objectFit: "objectFit", minSwipeDistance: "minSwipeDistance", transitionDuration: "transitionDuration", transitionTimingFunction: "transitionTimingFunction", counterSeparator: "counterSeparator", overflowCellsLimit: "overflowCellsLimit", listeners: "listeners", cellsToScroll: "cellsToScroll", freeScroll: "freeScroll", arrows: "arrows", arrowsOutside: "arrowsOutside", arrowsTheme: "arrowsTheme", isCounter: ["counter", "isCounter"], images: "images", cellWidth: "cellWidth", loop: "loop", lightDOM: "lightDOM", id: "id", width: "width", borderRadius: "borderRadius", videoProperties: "videoProperties", cellsToShow: "cellsToShow" }, outputs: { events: "events" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 8, vars: 6, consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) { return ctx.handleTransitionendCellContainer($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounter);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dots);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArrows);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"] });
    return CarouselComponent;
})();
let IvyCarouselModule = /*@__PURE__*/ (() => {
    class IvyCarouselModule {
    }
    IvyCarouselModule.ɵfac = function IvyCarouselModule_Factory(t) { return new (t || IvyCarouselModule)(); };
    IvyCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IvyCarouselModule });
    IvyCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return IvyCarouselModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvyCarouselModule, { declarations: function () { return [CarouselComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CarouselComponent]; } }); })();
/*
 * Public API Surface of angular-responsive-carousel
 */
/**
 * Generated bundle index. Do not edit.
 */






/***/ }),

/***/ "4Isi":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _carousel_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.animations */ "Pqh/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



function CarouselComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const slide_r1 = ctx.$implicit;
        const i_r2 = ctx.index;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("left: ", i_r2 * 50, "px;  transition: .3s ease-in-out;");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("@slideAnimation", ctx_r0.animationType);
    }
}
let CarouselComponent = /*@__PURE__*/ (() => {
    class CarouselComponent {
        constructor() {
            this.animationType = _carousel_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationType"].Fade;
            this.animationDuration = 500;
            this.slideDuration = 2000;
            this.clickEventPaused = false;
        }
        onPreviousClick() {
            if (!this.clickEventPaused) {
                this.clickEventPaused = true;
                // Remove this slide from the array and add new array
                const currentSlideData = this.slides[0];
                this.slides.shift();
                setTimeout(() => {
                    this.slides = [...this.slides, currentSlideData];
                    this.clickEventPaused = false;
                }, this.animationDuration);
                this.initializeTimerCycle();
            }
        }
        onNextClick() {
            if (!this.clickEventPaused) {
                this.clickEventPaused = true;
                const currentSlide = this.slides.length - 1;
                // Get data from current slide, remove last and add back to beginning
                const currentSlideData = this.slides[currentSlide];
                this.slides.splice(-1);
                setTimeout(() => {
                    this.slides = [currentSlideData, ...this.slides];
                    this.clickEventPaused = false;
                }, this.animationDuration);
                this.initializeTimerCycle();
            }
        }
        ngOnInit() {
            this.preloadImages(); // for the demo
            this.initializeTimerCycle();
        }
        initializeTimerCycle() {
            clearInterval(this.cycleTimer);
            this.cycleTimer = setInterval(() => {
                this.onNextClick();
            }, this.slideDuration);
        }
        preloadImages() {
            for (const slide of this.slides) {
                new Image().src = slide.src;
            }
        }
    }
    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { slides: "slides", animationType: "animationType" }, decls: 6, vars: 1, consts: [[1, "carousel"], [4, "ngFor", "ngForOf"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], [1, "slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 5, "ng-container", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() { return ctx.onPreviousClick(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_4_listener() { return ctx.onNextClick(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slides);
            }
        }, styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 0.5em;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  \n}\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDR0E7RUFDRSxPQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUVBLGdFQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUtBO0VBQ0UsdUJBQUE7QUFGRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsOERBQUE7RUFPQSx5QkFBQTtBQVpGO0FBT0U7RUFFRSxVQUFBO0FBTko7QUFVRTtFQUNFLFFBQUE7QUFSSjtBQVVFO0VBQ0UsT0FBQTtBQVJKO0FBWUEscUJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFURjtBQVdFO0VBQ0Usd0JBQUE7QUFUSjtBQVdFO0VBQ0UseUJBQUE7QUFUSiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cblxuLy8gU3RydWN0dXJlXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcblxuLy8gRm9udHNcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtOiBcIkZ1dHVyYSBSb3VuZCBNZWRpdW1cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZDogXCJGdXR1cmEgUm91bmQgU2VtaWJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1ib2xkLWl0YWxpYzogXCJGdXR1cmEgUm91bmQgQm9sZCBPYmxpcXVlXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktYm9sZDogXCJGdXR1cmEgUm91bmQgQm9sZFwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG5cbi8vIENvbG9yc1xuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XG4kaGVhZGVyLWJnOiAjNzUwMEVEO1xuJGJvZHktYmc6ICMzMzEyNGU7XG4kcHJpbWFyeS1jb2xvcjogIzc1MDBFRDtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAjYWEzZmZjO1xuJHByaW1hcnktYmctY29sb3ItZGFyazogIzAwMDAwMDtcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiRpbmVsaWdpYmxlLWNvbG9yOiAjYjEzNzg4O1xuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XG4kY29sb3ItZ3JlZW46ICMwMGFiNzg7XG4kY29sb3ItYmctZ3JlZW46ICNFNkZGRjA7XG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xuJGNvbG9yLW9yYW5nZTojREY5RjMwO1xuJGNvbG9yLXJlZDojRkYwNTAwO1xuJGNvbG9yLWJsdWU6IzJGNUJBQztcbiRjb2xvci1kYXJrLWJsdWU6IzM5MzVGRjtcbiRjb2xvci1saWdodC1vcmFuZ2U6I0Q2QzU4RDtcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XG5cbiRzZWNvbmRhcnktY29sb3I6ICM3NzMyYWE7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XG4kdXJsLWNvbG9yOiAjZGM5YWYwO1xuJGFjY2VudC1jb2xvcjogI0VGN0YxOTsiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyB6b29tIGVmZmVjdCBvbiBob3ZlclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5leHQgYW5kIFByZXYgYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwOyAvLyByZW1vdmUgYmx1ZSBvdXRsaW5lIGJvcmRlciwgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZSBzdGlsbCBmb2N1c3NhYmxlIGZvciBhY2Nlc3NpYmlsaXR5XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiA4MCU7XG4gIC8vIG9wYWNpdHkgZWZmZWN0IG9uIGhvdmVyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAvKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xuICAmLm5leHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gICYucHJldiB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4vKiBzdHlsZSB0aGUgYXJyb3dzICovXG4uYXJyb3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDAuMWVtIHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuXG4gICYubGVmdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gICYucmlnaHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("slideAnimation", [
                    /* fade */
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("void => fade", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"], { params: { time: "500ms" } })
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("fade => void", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_1__["fadeOut"], { params: { time: "500ms" } })
                    ]),
                ])
            ] } });
    return CarouselComponent;
})();



/***/ }),

/***/ "8LU1":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceStringArray", function() { return coerceStringArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}
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






/***/ }),

/***/ "FKr1":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
  \**********************************************************************/
/*! exports provided: AnimationCurves, AnimationDurations, DateAdapter, ErrorStateMatcher, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatCommonModule, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵ0, ɵangular_material_src_material_core_core_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTGROUP", function() { return MAT_OPTGROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatOptgroupBase", function() { return _MatOptgroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatOptionBase", function() { return _MatOptionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk */ "xz+E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of Angular Material. */




const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
    }
}
function MatOption_span_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
    }
}
const _c2 = ["*"];
const VERSION = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.13');
let AnimationCurves = /*@__PURE__*/ (() => {
    class AnimationCurves {
    }
    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    return AnimationCurves;
})();
let AnimationDurations = /*@__PURE__*/ (() => {
    class AnimationDurations {
    }
    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    return AnimationDurations;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
const VERSION$1 = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.13');
/** @docs-private */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */
const MATERIAL_SANITY_CHECKS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
let MatCommonModule = /*@__PURE__*/ (() => {
    class MatCommonModule {
        constructor(highContrastModeDetector, sanityChecks, document) {
            /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
            this._hasDoneGlobalChecks = false;
            this._document = document;
            // While A11yModule also does this, we repeat it here to avoid importing A11yModule
            // in MatCommonModule.
            highContrastModeDetector._applyBodyHighContrastModeCssClasses();
            // Note that `_sanityChecks` is typed to `any`, because AoT
            // throws an error if we use the `SanityChecks` type directly.
            this._sanityChecks = sanityChecks;
            if (!this._hasDoneGlobalChecks) {
                this._checkDoctypeIsDefined();
                this._checkThemeIsPresent();
                this._checkCdkVersionMatch();
                this._hasDoneGlobalChecks = true;
            }
        }
        /** Use defaultView of injected document if available or fallback to global window reference */
        _getWindow() {
            const win = this._document.defaultView || window;
            return typeof win === 'object' && win ? win : null;
        }
        /** Whether any sanity checks are enabled. */
        _checksAreEnabled() {
            // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
            // it. Since these checks can have performance implications and they aren't tree shakeable
            // in their current form, we can leave the `isDevMode` check in for now.
            // tslint:disable-next-line:ban
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
        }
        /** Whether the code is running in tests. */
        _isTestEnv() {
            const window = this._getWindow();
            return window && (window.__karma__ || window.jasmine);
        }
        _checkDoctypeIsDefined() {
            const isEnabled = this._checksAreEnabled() &&
                (this._sanityChecks === true || this._sanityChecks.doctype);
            if (isEnabled && !this._document.doctype) {
                console.warn('Current document does not have a doctype. This may cause ' +
                    'some Angular Material components not to behave as expected.');
            }
        }
        _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.
            const isDisabled = !this._checksAreEnabled() ||
                (this._sanityChecks === false || !this._sanityChecks.theme);
            if (isDisabled || !this._document.body || typeof getComputedStyle !== 'function') {
                return;
            }
            const testElement = this._document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            this._document.body.appendChild(testElement);
            const computedStyle = getComputedStyle(testElement);
            // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
            if (computedStyle && computedStyle.display !== 'none') {
                console.warn('Could not find Angular Material core theme. Most Material ' +
                    'components may not work as expected. For more info refer ' +
                    'to the theming guide: https://material.angular.io/guide/theming');
            }
            this._document.body.removeChild(testElement);
        }
        /** Checks whether the material version matches the cdk version */
        _checkCdkVersionMatch() {
            const isEnabled = this._checksAreEnabled() &&
                (this._sanityChecks === true || this._sanityChecks.version);
            if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
                console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' +
                    'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' +
                    'Please ensure the versions of these two packages exactly match.');
            }
        }
    }
    MatCommonModule.ɵfac = function MatCommonModule_Factory(t) { return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    MatCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCommonModule });
    MatCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]] });
    return MatCommonModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, { imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]; }, exports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]; } }); })();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with a `disabled` property. */
function mixinDisabled(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        get disabled() { return this._disabled; }
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with a `color` property. */
function mixinColor(base, defaultColor) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this.defaultColor = defaultColor;
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
        get color() { return this._color; }
        set color(value) {
            const colorPalette = value || this.defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
    };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with a `disableRipple` property. */
function mixinDisableRipple(base) {
    class Mixin extends base {
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /** Whether the ripple effect is disabled or not. */
        get disableRipple() { return this._disableRipple; }
        set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    }
    // Since we don't directly extend from `base` with it's original types, and we instruct
    // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
    // This is a limitation in TS as abstract classes cannot be typed properly dynamically.
    return Mixin;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with a `tabIndex` property. */
function mixinTabIndex(base, defaultTabIndex = 0) {
    // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
    // but given we `extend` it from another class, we can assume a constructor being accessible.
    class Mixin extends base {
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
            this.defaultTabIndex = defaultTabIndex;
        }
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : this.defaultTabIndex;
        }
    }
    // Since we don't directly extend from `base` with it's original types, and we instruct
    // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
    // This is a limitation in TS as abstract classes cannot be typed properly dynamically.
    return Mixin;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 */
function mixinErrorState(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            /** Whether the component is in an error state. */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        updateErrorState() {
            const oldState = this.errorState;
            const parent = this._parentFormGroup || this._parentForm;
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            const control = this.ngControl ? this.ngControl.control : null;
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */
function mixinInitialized(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            /** Whether this directive has been marked as initialized. */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    this._pendingSubscribers.push(subscriber);
                }
            });
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * @docs-private
         */
        _markInitialized() {
            if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            this._pendingSubscribers.forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /** Emits and completes the subscriber stream (should only emit once). */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}
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
/** InjectionToken for datepicker that can be used to override default locale code. */
const MAT_DATE_LOCALE = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/** @docs-private */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** A stream that emits when the locale changes. */
        this.localeChanges = this._localeChanges;
    }
    /**
     * Given a potential date object, returns that same date object if it is
     * a valid date, or `null` if it's not a valid date.
     * @param obj The object to check.
     * @returns A date or `null`.
     */
    getValidDateOrNull(obj) {
        return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
    }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            let firstValid = this.isValid(first);
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_DATE_FORMATS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/** Whether the browser supports the Intl API. */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/** The default month names to use if Intl API is not available. */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = i => String(i + 1);
/** The default date names to use if Intl API is not available. */
const DEFAULT_DATE_NAMES = /*@__PURE__*/ range(31, ɵ0);
/** The default day of the week names to use if Intl API is not available. */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
let NativeDateAdapter = /*@__PURE__*/ (() => {
    class NativeDateAdapter extends DateAdapter {
        constructor(matDateLocale, platform) {
            super();
            /**
             * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
             * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
             * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
             * will produce `'8/13/1800'`.
             *
             * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
             * getting the string representation of a Date object from its utc representation. We're keeping
             * it here for sometime, just for precaution, in case we decide to revert some of these changes
             * though.
             */
            this.useUtcForDisplay = true;
            super.setLocale(matDateLocale);
            // IE does its own time zone correction, so we disable this on IE.
            this.useUtcForDisplay = !platform.TRIDENT;
            this._clampDate = platform.TRIDENT || platform.EDGE;
        }
        getYear(date) {
            return date.getFullYear();
        }
        getMonth(date) {
            return date.getMonth();
        }
        getDate(date) {
            return date.getDate();
        }
        getDayOfWeek(date) {
            return date.getDay();
        }
        getMonthNames(style) {
            if (SUPPORTS_INTL_API) {
                const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
                return range(12, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
            }
            return DEFAULT_MONTH_NAMES[style];
        }
        getDateNames() {
            if (SUPPORTS_INTL_API) {
                const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
                return range(31, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
            }
            return DEFAULT_DATE_NAMES;
        }
        getDayOfWeekNames(style) {
            if (SUPPORTS_INTL_API) {
                const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
                return range(7, i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
            }
            return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        getYearName(date) {
            if (SUPPORTS_INTL_API) {
                const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
                return this._stripDirectionalityCharacters(this._format(dtf, date));
            }
            return String(this.getYear(date));
        }
        getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
        }
        getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        clone(date) {
            return new Date(date.getTime());
        }
        createDate(year, month, date) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                // Check for invalid month and date (except upper bound on date which we have to check after
                // creating the Date).
                if (month < 0 || month > 11) {
                    throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
                }
                if (date < 1) {
                    throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
                }
            }
            let result = this._createDateWithOverflow(year, month, date);
            // Check that the date wasn't above the upper bound for the month, causing the month to overflow
            if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error(`Invalid date "${date}" for month with index "${month}".`);
            }
            return result;
        }
        today() {
            return new Date();
        }
        parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
                return new Date(value);
            }
            return value ? new Date(Date.parse(value)) : null;
        }
        format(date, displayFormat) {
            if (!this.isValid(date)) {
                throw Error('NativeDateAdapter: Cannot format invalid date.');
            }
            if (SUPPORTS_INTL_API) {
                // On IE and Edge the i18n API will throw a hard error that can crash the entire app
                // if we attempt to format a date whose year is less than 1 or greater than 9999.
                if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                    date = this.clone(date);
                    date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
                }
                displayFormat = Object.assign(Object.assign({}, displayFormat), { timeZone: 'utc' });
                const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
                return this._stripDirectionalityCharacters(this._format(dtf, date));
            }
            return this._stripDirectionalityCharacters(date.toDateString());
        }
        addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
        }
        addCalendarMonths(date, months) {
            let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
            // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.
            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
                newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }
            return newDate;
        }
        addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        toIso8601(date) {
            return [
                date.getUTCFullYear(),
                this._2digit(date.getUTCMonth() + 1),
                this._2digit(date.getUTCDate())
            ].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         */
        deserialize(value) {
            if (typeof value === 'string') {
                if (!value) {
                    return null;
                }
                // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
                // string is the right format first.
                if (ISO_8601_REGEX.test(value)) {
                    let date = new Date(value);
                    if (this.isValid(date)) {
                        return date;
                    }
                }
            }
            return super.deserialize(value);
        }
        isDateInstance(obj) {
            return obj instanceof Date;
        }
        isValid(date) {
            return !isNaN(date.getTime());
        }
        invalid() {
            return new Date(NaN);
        }
        /** Creates a date but allows the month and date to overflow. */
        _createDateWithOverflow(year, month, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setFullYear` and `setHours` instead.
            const d = new Date();
            d.setFullYear(year, month, date);
            d.setHours(0, 0, 0, 0);
            return d;
        }
        /**
         * Pads a number to make it two digits.
         * @param n The number to pad.
         * @returns The padded number.
         */
        _2digit(n) {
            return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param str The string to strip direction characters from.
         * @returns The stripped string.
         */
        _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param date Date from which we want to get the string representation according to dtf
         * @returns A Date object with its UTC representation based on the passed in date info
         */
        _format(dtf, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
            const d = new Date();
            d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
            return dtf.format(d);
        }
    }
    NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) { return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"])); };
    NativeDateAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NativeDateAdapter, factory: NativeDateAdapter.ɵfac });
    return NativeDateAdapter;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
let NativeDateModule = /*@__PURE__*/ (() => {
    class NativeDateModule {
    }
    NativeDateModule.ɵfac = function NativeDateModule_Factory(t) { return new (t || NativeDateModule)(); };
    NativeDateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NativeDateModule });
    NativeDateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
            { provide: DateAdapter, useClass: NativeDateAdapter },
        ], imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]] });
    return NativeDateModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, { imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]; } }); })();
const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
let MatNativeDateModule = /*@__PURE__*/ (() => {
    class MatNativeDateModule {
    }
    MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) { return new (t || MatNativeDateModule)(); };
    MatNativeDateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatNativeDateModule });
    MatNativeDateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }], imports: [[NativeDateModule]] });
    return MatNativeDateModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, { imports: [NativeDateModule] }); })();
let ShowOnDirtyErrorStateMatcher = /*@__PURE__*/ (() => {
    class ShowOnDirtyErrorStateMatcher {
        isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
        }
    }
    ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) { return new (t || ShowOnDirtyErrorStateMatcher)(); };
    ShowOnDirtyErrorStateMatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowOnDirtyErrorStateMatcher, factory: ShowOnDirtyErrorStateMatcher.ɵfac });
    return ShowOnDirtyErrorStateMatcher;
})();
let ErrorStateMatcher = /*@__PURE__*/ (() => {
    class ErrorStateMatcher {
        isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || (form && form.submitted)));
        }
    }
    ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) { return new (t || ErrorStateMatcher)(); };
    ErrorStateMatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
    return ErrorStateMatcher;
})();
let MatLine = /*@__PURE__*/ (() => {
    class MatLine {
    }
    MatLine.ɵfac = function MatLine_Factory(t) { return new (t || MatLine)(); };
    MatLine.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatLine, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
    return MatLine;
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
function setLines(lines, element, prefix = 'mat') {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(lines)).subscribe(({ length }) => {
        setClass(element, `${prefix}-2-line`, false);
        setClass(element, `${prefix}-3-line`, false);
        setClass(element, `${prefix}-multi-line`, false);
        if (length === 2 || length === 3) {
            setClass(element, `${prefix}-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `${prefix}-multi-line`, true);
        }
    });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
let MatLineModule = /*@__PURE__*/ (() => {
    class MatLineModule {
    }
    MatLineModule.ɵfac = function MatLineModule_Factory(t) { return new (t || MatLineModule)(); };
    MatLineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatLineModule });
    MatLineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule], MatCommonModule] });
    return MatLineModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, { declarations: [MatLine], imports: [MatCommonModule], exports: [MatLine, MatCommonModule] }); })();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    constructor(_renderer, 
    /** Reference to the ripple HTML element. */
    element, 
    /** Ripple configuration used for the ripple. */
    config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /** Current state of the ripple. */
        this.state = 3 /* HIDDEN */;
    }
    /** Fades out the ripple element. */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */
const passiveEventOptions = /*@__PURE__*/ Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({ passive: true });
/** Events that signal that the pointer is down. */
const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */
class RippleRenderer {
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /** Whether the pointer is currently down or not. */
        this._isPointerDown = false;
        /** Set of currently active ripple references. */
        this._activeRipples = new Set();
        /** Whether pointer-up event listeners have been registered. */
        this._pointerUpEventsRegistered = false;
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param x Coordinate within the element, along the X axis at which to start the ripple.
     * @param y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param config Extra ripple options.
     */
    fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const duration = animationConfig.enterDuration;
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If a custom color has been specified, set it as inline style. If no color is
        // set, the default color will be applied through the ripple theme styles.
        if (config.color != null) {
            ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = 0 /* FADING_IN */;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone(() => {
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = 1 /* VISIBLE */;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    }
    /** Fades out a ripple reference. */
    fadeOutRipple(rippleRef) {
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = 2 /* FADING_OUT */;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone(() => {
            rippleRef.state = 3 /* HIDDEN */;
            rippleEl.parentNode.removeChild(rippleEl);
        }, animationConfig.exitDuration);
    }
    /** Fades out all currently active ripples. */
    fadeOutAll() {
        this._activeRipples.forEach(ripple => ripple.fadeOut());
    }
    /** Fades out all currently active non-persistent ripples. */
    fadeOutAllNonPersistent() {
        this._activeRipples.forEach(ripple => {
            if (!ripple.config.persistent) {
                ripple.fadeOut();
            }
        });
    }
    /** Sets up the trigger event listeners */
    setupTriggerEvents(elementOrElementRef) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._triggerElement = element;
        this._registerEvents(pointerDownEvents);
    }
    /**
     * Handles all registered events.
     * @docs-private
     */
    handleEvent(event) {
        if (event.type === 'mousedown') {
            this._onMousedown(event);
        }
        else if (event.type === 'touchstart') {
            this._onTouchStart(event);
        }
        else {
            this._onPointerUp();
        }
        // If pointer-up events haven't been registered yet, do so now.
        // We do this on-demand in order to reduce the total number of event listeners
        // registered by the ripples, which speeds up the rendering time for large UIs.
        if (!this._pointerUpEventsRegistered) {
            this._registerEvents(pointerUpEvents);
            this._pointerUpEventsRegistered = true;
        }
    }
    /** Function being called whenever the trigger is being pressed using mouse. */
    _onMousedown(event) {
        // Screen readers will fire fake mouse events for space/enter. Skip launching a
        // ripple in this case for consistency with the non-screen-reader experience.
        const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
        const isSyntheticEvent = this._lastTouchStartEvent &&
            Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
    }
    /** Function being called whenever the trigger is being pressed using touch. */
    _onTouchStart(event) {
        if (!this._target.rippleDisabled && !Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeTouchstartFromScreenReader"])(event)) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true;
            // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.
            const touches = event.changedTouches;
            for (let i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
        }
    }
    /** Function being called whenever the trigger is being released. */
    _onPointerUp() {
        if (!this._isPointerDown) {
            return;
        }
        this._isPointerDown = false;
        // Fade-out all ripples that are visible and not persistent.
        this._activeRipples.forEach(ripple => {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
            const isVisible = ripple.state === 1 /* VISIBLE */ ||
                ripple.config.terminateOnPointerUp && ripple.state === 0 /* FADING_IN */;
            if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
            }
        });
    }
    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
    /** Registers event listeners for a given list of events. */
    _registerEvents(eventTypes) {
        this._ngZone.runOutsideAngular(() => {
            eventTypes.forEach((type) => {
                this._triggerElement.addEventListener(type, this, passiveEventOptions);
            });
        });
    }
    /** Removes previously registered event listeners from the trigger element. */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            pointerDownEvents.forEach((type) => {
                this._triggerElement.removeEventListener(type, this, passiveEventOptions);
            });
            if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach((type) => {
                    this._triggerElement.removeEventListener(type, this, passiveEventOptions);
                });
            }
        }
    }
}
/** Enforces a style recalculation of a DOM element by computing its styles. */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x, y, rect) {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify the global ripple options. */
const MAT_RIPPLE_GLOBAL_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
let MatRipple = /*@__PURE__*/ (() => {
    class MatRipple {
        constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
            this._elementRef = _elementRef;
            this._animationMode = _animationMode;
            /**
             * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
             * will be the distance from the center of the ripple to the furthest corner of the host element's
             * bounding rectangle.
             */
            this.radius = 0;
            this._disabled = false;
            /** Whether ripple directive is initialized and the input bindings are set. */
            this._isInitialized = false;
            this._globalOptions = globalOptions || {};
            this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         */
        get disabled() { return this._disabled; }
        set disabled(value) {
            if (value) {
                this.fadeOutAllNonPersistent();
            }
            this._disabled = value;
            this._setupTriggerEventsIfEnabled();
        }
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         */
        get trigger() { return this._trigger || this._elementRef.nativeElement; }
        set trigger(trigger) {
            this._trigger = trigger;
            this._setupTriggerEventsIfEnabled();
        }
        ngOnInit() {
            this._isInitialized = true;
            this._setupTriggerEventsIfEnabled();
        }
        ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
        }
        /** Fades out all currently showing ripple elements. */
        fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
        }
        /** Fades out all currently showing non-persistent ripple elements. */
        fadeOutAllNonPersistent() {
            this._rippleRenderer.fadeOutAllNonPersistent();
        }
        /**
         * Ripple configuration from the directive's input values.
         * @docs-private Implemented as part of RippleTarget
         */
        get rippleConfig() {
            return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), (this._animationMode === 'NoopAnimations' ? { enterDuration: 0, exitDuration: 0 } : {})), this.animation),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
            };
        }
        /**
         * Whether ripples on pointer-down are disabled or not.
         * @docs-private Implemented as part of RippleTarget
         */
        get rippleDisabled() {
            return this.disabled || !!this._globalOptions.disabled;
        }
        /** Sets up the trigger event listeners if ripples are enabled. */
        _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
                this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
        }
        /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
        launch(configOrX, y = 0, config) {
            if (typeof configOrX === 'number') {
                return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
            }
            else {
                return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
            }
        }
    }
    MatRipple.ɵfac = function MatRipple_Factory(t) { return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8)); };
    MatRipple.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRipple, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function MatRipple_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
            }
        }, inputs: { radius: ["matRippleRadius", "radius"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"], color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], animation: ["matRippleAnimation", "animation"] }, exportAs: ["matRipple"] });
    return MatRipple;
})();
let MatRippleModule = /*@__PURE__*/ (() => {
    class MatRippleModule {
    }
    MatRippleModule.ɵfac = function MatRippleModule_Factory(t) { return new (t || MatRippleModule)(); };
    MatRippleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRippleModule });
    MatRippleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule] });
    return MatRippleModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, { declarations: function () { return [MatRipple]; }, imports: function () { return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]; }, exports: function () { return [MatRipple, MatCommonModule]; } }); })();
let MatPseudoCheckbox = /*@__PURE__*/ (() => {
    class MatPseudoCheckbox {
        constructor(_animationMode) {
            this._animationMode = _animationMode;
            /** Display state of the checkbox. */
            this.state = 'unchecked';
            /** Whether the checkbox is disabled. */
            this.disabled = false;
        }
    }
    MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) { return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8)); };
    MatPseudoCheckbox.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatPseudoCheckbox, selectors: [["mat-pseudo-checkbox"]], hostAttrs: [1, "mat-pseudo-checkbox"], hostVars: 8, hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
            }
        }, inputs: { state: "state", disabled: "disabled" }, decls: 0, vars: 0, template: function MatPseudoCheckbox_Template(rf, ctx) { }, styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"], encapsulation: 2, changeDetection: 0 });
    return MatPseudoCheckbox;
})();
let MatPseudoCheckboxModule = /*@__PURE__*/ (() => {
    class MatPseudoCheckboxModule {
    }
    MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) { return new (t || MatPseudoCheckboxModule)(); };
    MatPseudoCheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatPseudoCheckboxModule });
    MatPseudoCheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatCommonModule]] });
    return MatPseudoCheckboxModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, { declarations: [MatPseudoCheckbox], imports: [MatCommonModule], exports: [MatPseudoCheckbox] }); })();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide the parent component to options.
 */
const MAT_OPTION_PARENT_COMPONENT = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.
/** @docs-private */
class MatOptgroupBase {
}
const _MatOptgroupMixinBase = /*@__PURE__*/ mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
let _uniqueOptgroupIdCounter = 0;
let _MatOptgroupBase = /*@__PURE__*/ (() => {
    class _MatOptgroupBase extends _MatOptgroupMixinBase {
        constructor(parent) {
            var _a;
            super();
            /** Unique id for the underlying label. */
            this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
            this._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
        }
    }
    _MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) { return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8)); };
    _MatOptgroupBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatOptgroupBase, inputs: { label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
    return _MatOptgroupBase;
})();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_OPTGROUP = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatOptgroup');
let MatOptgroup = /*@__PURE__*/ (() => {
    class MatOptgroup extends _MatOptgroupBase {
    }
    MatOptgroup.ɵfac = function MatOptgroup_Factory(t) { return ɵMatOptgroup_BaseFactory(t || MatOptgroup); };
    MatOptgroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOptgroup, selectors: [["mat-optgroup"]], hostAttrs: [1, "mat-optgroup"], hostVars: 5, hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
            }
        }, inputs: { disabled: "disabled" }, exportAs: ["matOptgroup"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 2, consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]], template: function MatOptgroup_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
            }
        }, styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
    return MatOptgroup;
})();
const ɵMatOptgroup_BaseFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */
class MatOptionSelectionChange {
    constructor(
    /** Reference to the option that emitted the event. */
    source, 
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
let _MatOptionBase = /*@__PURE__*/ (() => {
    class _MatOptionBase {
        constructor(_element, _changeDetectorRef, _parent, group) {
            this._element = _element;
            this._changeDetectorRef = _changeDetectorRef;
            this._parent = _parent;
            this.group = group;
            this._selected = false;
            this._active = false;
            this._disabled = false;
            this._mostRecentViewValue = '';
            /** The unique ID of the option. */
            this.id = `mat-option-${_uniqueIdCounter++}`;
            /** Event emitted when the option is selected or deselected. */
            // tslint:disable-next-line:no-output-on-prefix
            this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            /** Emits when the state of the option changes and any parents have to be notified. */
            this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /** Whether the wrapping component is in multiple selection mode. */
        get multiple() { return this._parent && this._parent.multiple; }
        /** Whether or not the option is currently selected. */
        get selected() { return this._selected; }
        /** Whether the option is disabled. */
        get disabled() { return (this.group && this.group.disabled) || this._disabled; }
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether ripples for the option are disabled. */
        get disableRipple() { return this._parent && this._parent.disableRipple; }
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         */
        get active() {
            return this._active;
        }
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         */
        get viewValue() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
        }
        /** Selects the option. */
        select() {
            if (!this._selected) {
                this._selected = true;
                this._changeDetectorRef.markForCheck();
                this._emitSelectionChangeEvent();
            }
        }
        /** Deselects the option. */
        deselect() {
            if (this._selected) {
                this._selected = false;
                this._changeDetectorRef.markForCheck();
                this._emitSelectionChangeEvent();
            }
        }
        /** Sets focus onto this option. */
        focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
            const element = this._getHostElement();
            if (typeof element.focus === 'function') {
                element.focus(options);
            }
        }
        /**
         * This method sets display styles on the option to make it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         */
        setActiveStyles() {
            if (!this._active) {
                this._active = true;
                this._changeDetectorRef.markForCheck();
            }
        }
        /**
         * This method removes display styles on the option that made it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         */
        setInactiveStyles() {
            if (this._active) {
                this._active = false;
                this._changeDetectorRef.markForCheck();
            }
        }
        /** Gets the label to be used when determining whether the option should be focused. */
        getLabel() {
            return this.viewValue;
        }
        /** Ensures the option is selected when activated from the keyboard. */
        _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
                this._selectViaInteraction();
                // Prevent the page from scrolling down and form submits.
                event.preventDefault();
            }
        }
        /**
         * `Selects the option while indicating the selection came from the user. Used to
         * determine if the select's view -> model callback should be invoked.`
         */
        _selectViaInteraction() {
            if (!this.disabled) {
                this._selected = this.multiple ? !this._selected : true;
                this._changeDetectorRef.markForCheck();
                this._emitSelectionChangeEvent(true);
            }
        }
        /**
         * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
         * attribute from single-selection, unselected options. Including the `aria-selected="false"`
         * attributes adds a significant amount of noise to screen-reader users without providing useful
         * information.
         */
        _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
        }
        /** Returns the correct tabindex for the option depending on disabled state. */
        _getTabIndex() {
            return this.disabled ? '-1' : '0';
        }
        /** Gets the host DOM element. */
        _getHostElement() {
            return this._element.nativeElement;
        }
        ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
                const viewValue = this.viewValue;
                if (viewValue !== this._mostRecentViewValue) {
                    this._mostRecentViewValue = viewValue;
                    this._stateChanges.next();
                }
            }
        }
        ngOnDestroy() {
            this._stateChanges.complete();
        }
        /** Emits the selection change event. */
        _emitSelectionChangeEvent(isUserInput = false) {
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
        }
    }
    _MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) { return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatOptgroupBase)); };
    _MatOptionBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatOptionBase, inputs: { id: "id", disabled: "disabled", value: "value" }, outputs: { onSelectionChange: "onSelectionChange" } });
    return _MatOptionBase;
})();
let MatOption = /*@__PURE__*/ (() => {
    class MatOption extends _MatOptionBase {
        constructor(element, changeDetectorRef, parent, group) {
            super(element, changeDetectorRef, parent, group);
        }
    }
    MatOption.ɵfac = function MatOption_Factory(t) { return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8)); };
    MatOption.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOption, selectors: [["mat-option"]], hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"], hostVars: 12, hostBindings: function MatOption_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() { return ctx._selectViaInteraction(); })("keydown", function MatOption_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
            }
        }, exportAs: ["matOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 5, vars: 4, consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]], template: function MatOption_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox], styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
    return MatOption;
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        let optionsArray = options.toArray();
        let groups = optionGroups.toArray();
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}
let MatOptionModule = /*@__PURE__*/ (() => {
    class MatOptionModule {
    }
    MatOptionModule.ɵfac = function MatOptionModule_Factory(t) { return new (t || MatOptionModule)(); };
    MatOptionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatOptionModule });
    MatOptionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule]] });
    return MatOptionModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, { declarations: function () { return [MatOption, MatOptgroup]; }, imports: function () { return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule]; }, exports: function () { return [MatOption, MatOptgroup]; } }); })();
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






/***/ }),

/***/ "FtGj":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
  \*********************************************************************/
/*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PERIOD, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERIOD", function() { return PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some(modifier => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
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






/***/ }),

/***/ "GU7r":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
  \**********************************************************************/
/*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

let MutationObserverFactory = /*@__PURE__*/ (() => {
    class MutationObserverFactory {
        create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        }
    }
    MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) { return new (t || MutationObserverFactory)(); };
    MutationObserverFactory.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
})();
let ContentObserver = /*@__PURE__*/ (() => {
    class ContentObserver {
        constructor(_mutationObserverFactory) {
            this._mutationObserverFactory = _mutationObserverFactory;
            /** Keeps track of the existing MutationObservers so they can be reused. */
            this._observedElements = new Map();
        }
        ngOnDestroy() {
            this._observedElements.forEach((_, element) => this._cleanupObserver(element));
        }
        observe(elementOrRef) {
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                const stream = this._observeElement(element);
                const subscription = stream.subscribe(observer);
                return () => {
                    subscription.unsubscribe();
                    this._unobserveElement(element);
                };
            });
        }
        /**
         * Observes the given element by using the existing MutationObserver if available, or creating a
         * new one if not.
         */
        _observeElement(element) {
            if (!this._observedElements.has(element)) {
                const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
                if (observer) {
                    observer.observe(element, {
                        characterData: true,
                        childList: true,
                        subtree: true
                    });
                }
                this._observedElements.set(element, { observer, stream, count: 1 });
            }
            else {
                this._observedElements.get(element).count++;
            }
            return this._observedElements.get(element).stream;
        }
        /**
         * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
         * observing this element.
         */
        _unobserveElement(element) {
            if (this._observedElements.has(element)) {
                this._observedElements.get(element).count--;
                if (!this._observedElements.get(element).count) {
                    this._cleanupObserver(element);
                }
            }
        }
        /** Clean up the underlying MutationObserver for the specified element. */
        _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
                const { observer, stream } = this._observedElements.get(element);
                if (observer) {
                    observer.disconnect();
                }
                stream.complete();
                this._observedElements.delete(element);
            }
        }
    }
    ContentObserver.ɵfac = function ContentObserver_Factory(t) { return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory)); };
    ContentObserver.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
    return ContentObserver;
})();
let CdkObserveContent = /*@__PURE__*/ (() => {
    class CdkObserveContent {
        constructor(_contentObserver, _elementRef, _ngZone) {
            this._contentObserver = _contentObserver;
            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            /** Event emitted for each change in the element's content. */
            this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._disabled = false;
            this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */
        get disabled() { return this._disabled; }
        set disabled(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
        }
        /** Debounce interval for emitting the changes. */
        get debounce() { return this._debounce; }
        set debounce(value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
            this._subscribe();
        }
        ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
                this._subscribe();
            }
        }
        ngOnDestroy() {
            this._unsubscribe();
        }
        _subscribe() {
            this._unsubscribe();
            const stream = this._contentObserver.observe(this._elementRef);
            // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.
            this._ngZone.runOutsideAngular(() => {
                this._currentSubscription =
                    (this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounce)) : stream).subscribe(this.event);
            });
        }
        _unsubscribe() {
            var _a;
            (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
    }
    CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) { return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CdkObserveContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkObserveContent, selectors: [["", "cdkObserveContent", ""]], inputs: { disabled: ["cdkObserveContentDisabled", "disabled"], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"] });
    return CdkObserveContent;
})();
let ObserversModule = /*@__PURE__*/ (() => {
    class ObserversModule {
    }
    ObserversModule.ɵfac = function ObserversModule_Factory(t) { return new (t || ObserversModule)(); };
    ObserversModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ObserversModule });
    ObserversModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [MutationObserverFactory] });
    return ObserversModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, { declarations: [CdkObserveContent], exports: [CdkObserveContent] }); })();
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






/***/ }),

/***/ "Pqh/":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/carousel/carousel.animations.ts ***!
  \*******************************************************************/
/*! exports provided: AnimationType, scaleIn, scaleOut, fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationType", function() { return AnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn", function() { return scaleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOut", function() { return scaleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

// =========================
// Enum for referencing animations
// =========================
var AnimationType = /*@__PURE__*/ (function (AnimationType) {
    AnimationType["Scale"] = "scale";
    AnimationType["Fade"] = "fade";
    return AnimationType;
})({});
// =========================
// Scale
// =========================
const scaleIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: "scale(0.5)" }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: "scale(1)" }))
]);
const scaleOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: "scale(0.5)" }))
]);
// =========================
// Fade
// =========================
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0,
        transform: 'scale(1.2)', }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }))
]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(1.2)' }))
]);



/***/ }),

/***/ "aUdj":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_dialogs_mint_dialog_mint_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dialogs/mint-dialog/mint-dialog.component */ "yIhK");
/* harmony import */ var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/carousel/carousel.component */ "4Isi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/smart-contract-core.service */ "cIOH");
/* harmony import */ var _shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/event-messenger.service */ "q9MP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/app-header/app-header.component */ "bzJk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/app-footer/app-footer.component */ "mpho");













const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function (a0) { return { "active-green": a0 }; };
const _c3 = function (a0) { return { "active-yellow": a0 }; };
const _c4 = function (a0) { return { "active-orange": a0 }; };
let IndexComponent = /*@__PURE__*/ (() => {
    class IndexComponent {
        constructor(_route, smartContractCoreService, eventMessengerService, _dialog) {
            this._route = _route;
            this.smartContractCoreService = smartContractCoreService;
            this.eventMessengerService = eventMessengerService;
            this._dialog = _dialog;
            this.selectedDistrict = 1;
            this.metaverseImageToShow = 1;
            this.accounts = [];
            this.houseFrameToShow = 0;
            this.networkText = "Ethereum Mainnet";
            this.countdownDays = 0;
            this.countdownHours = 0;
            this.countdownMins = 0;
            this.countdownSecs = 0;
            this.generalFAQ = {
                q1: false,
                q2: false,
                q3: false,
                q4: false,
                q5: false,
                q6: false,
                q7: false,
                q8: false,
            };
            this.isMetaMaskInstalled = true;
            this.isOnMainnet = true;
            this.partnershipLogoImages = [
                { path: '/assets/images/partners/1.png' },
                { path: '/assets/images/partners/2.png' },
                { path: '/assets/images/partners/3.png' },
                { path: '/assets/images/partners/4.png' },
                { path: '/assets/images/partners/5.png' },
                { path: '/assets/images/partners/6.png' },
                { path: '/assets/images/partners/7.png' },
                { path: '/assets/images/partners/8.png' },
                { path: '/assets/images/partners/9.png' },
                { path: '/assets/images/partners/10.png' },
                { path: '/assets/images/partners/11.png' },
                { path: '/assets/images/partners/12.png' },
                { path: '/assets/images/partners/13.png' },
                { path: '/assets/images/partners/14.png' },
                { path: '/assets/images/partners/15.png' },
                { path: '/assets/images/partners/16.png' },
                { path: '/assets/images/partners/17.png' },
                { path: '/assets/images/partners/18.png' },
                { path: '/assets/images/partners/20.png' },
                { path: '/assets/images/partners/21.png' }
            ];
            this.carouselAutoplay = true;
            this.carouselLoop = true;
            this.carouselAutoplayInterval = 500;
            this.carouselPauseOnHover = false;
            this.carouselTransitionInterval = 1000;
        }
        onScroll(event) { }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // Show message test based on the environment
                switch (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].chainId) {
                    case 1:
                        this.networkText = "Ethereum Mainnet";
                        break;
                    case 4:
                        this.networkText = "Rinkeby Network";
                        break;
                    default:
                        this.networkText = "Ethereum Mainnet";
                        break;
                }
                // this.animateCards();
                // Initialize the countdown
                this.countdownTimer = setInterval(() => {
                    this.updateCountdownTimer();
                }, 1000);
                this.updateCountdownTimer();
                // Determine which element to scroll to
                this._route.fragment.subscribe(fragment => {
                    const element = document.querySelector(`#${fragment}`);
                    setTimeout(() => {
                        if (element) {
                            var elementPosition = element.offsetTop;
                            window.scrollTo({
                                top: elementPosition - 60,
                                behavior: "smooth" //Smooth transition to roll
                            });
                        }
                    }, 0);
                });
                // Startup: Check metamask and populate accounts and then determine if any unis are in wallet
                yield this.checkMetaMaskInstalled();
                // Make sure we're on the right chain
                yield this.checkChain();
                // Handle events when wallet accounts change
                this.eventMessengerService.subscribe('accountsChanged', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let { accounts } = event.data;
                    this.accounts = accounts;
                    yield this.checkChain();
                }));
                // Handle events when wallet accounts get disconnectd
                this.eventMessengerService.subscribe('disconnect', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let { accounts } = event.data;
                    this.accounts = accounts;
                    yield this.checkChain();
                }));
            });
        }
        /**
         * This will replace which image is showing
         */
        toggleMetaverseImage(image) {
            this.metaverseImageToShow = image;
        }
        /**
         * Select district
         */
        selectDistrict(districtId) {
            this.selectedDistrict = districtId;
        }
        ngAfterViewInit() {
            this.animateTypewriterText();
        }
        /**
         * Animate the slogan text
         */
        animateTypewriterText() {
            var TxtType = function (el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };
            TxtType.prototype.tick = function () {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                }
                else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
                this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
                var that = this;
                var delta = 200 - Math.random() * 100;
                if (this.isDeleting) {
                    delta /= 2;
                }
                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                }
                else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }
                setTimeout(function () {
                    that.tick();
                }, delta);
            };
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            // css.type = "text/css";
            css.innerHTML = `.typewrite > .wrap { 
      border-right: 0.1em solid #8F00FF;
      padding-right: 2px; 
    }
    `;
            document.body.appendChild(css);
        }
        /**
           * Make sure we are on the correct chain
           */
        checkChain() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.smartContractCoreService.isMetaMaskInstalled()) {
                    const { chainId } = yield this.smartContractCoreService.provider.getNetwork();
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].chainId === chainId) {
                        this.isOnMainnet = true;
                    }
                    else {
                        this.isOnMainnet = false;
                        this.loading = false;
                    }
                }
                else {
                    this.isOnMainnet = false;
                    this.loading = false;
                }
            });
        }
        /**
         * Ensure metamask is installed so we can get wallet information
         */
        checkMetaMaskInstalled() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.smartContractCoreService.isMetaMaskInstalled()) {
                    this.isMetaMaskInstalled = true;
                    this.accounts = yield this.smartContractCoreService.getWalletAccounts();
                }
                else {
                    this.isMetaMaskInstalled = false;
                }
            });
        }
        /**
           *	Open the minting dialog
           */
        openMintDialog(e) {
            e.stopPropagation();
            e.preventDefault();
            this._dialog.open(_shared_dialogs_mint_dialog_mint_dialog_component__WEBPACK_IMPORTED_MODULE_1__["MintDialogComponent"], {
                width: '630px',
                data: {
                    accounts: this.accounts
                }
            });
        }
        ngOnDestroy() {
            clearInterval(this.countdownTimer);
        }
        /**
           *	Functions that governs active states of the FAQ questions
           */
        toggleFAQ(question) {
            this.generalFAQ[question] = !this.generalFAQ[question];
        }
        /**
           * Simple countdown timer function. End date is set for private sale
           */
        updateCountdownTimer() {
            let endDate = 1639148400000; // Update this with the end time in milliseconds
            let now = Date.now();
            let t = endDate - now;
            if (t >= 0) {
                this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
                this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
            }
        }
    }
    IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_6__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_7__["EventMessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], viewQuery: function IndexComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], 1);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
            }
        }, hostBindings: function IndexComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function IndexComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
            }
        }, decls: 401, vars: 78, consts: [[1, "banner"], [1, "banner-inner"], [1, "main-area"], [1, "slogan-container"], ["id", "slogan-text", 1, "slogan-text"], ["data-period", "2000", "data-type", "[ \"artists.\", \"creators.\", \"gamers.\", \"brands.\"]", 1, "highlighted", "typewrite"], [1, "wrap"], [1, "subtext"], [1, "countdown-container"], ["target", "_blank", "href", "https://opensea.io/collection/propertysofficial", 1, "countdown-sale-text"], ["width", "90", "height", "90", "viewBox", "0 0 90 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z", "fill", "#1c063f"], ["target", "_blank", "href", "https://propertys-nft.gitbook.io/propertys-whitepaper/", 1, "banner-link"], [1, "fas", "fa-file-alt"], [1, "promo-image"], ["src", "/assets/images/banner-img.png", "width", "600"], [1, "partnerships-container", "premium"], [1, "partner-text"], [1, "partners"], ["src", "/assets/images/partners/premium-partner-landvault.png", "width", "250"], ["src", "/assets/images/partners/premium-partner-exclusible.png", "width", "250"], ["src", "/assets/images/partners/premium-partner-metamundo.png", "width", "250"], [1, "full-width-container"], ["id", "story", 1, "information"], [1, "section-title-container"], [1, "section-title"], [1, "section-description"], [1, "district-list-selector"], [3, "mouseover"], [1, "sandy-secrets", 3, "ngClass"], [1, "apricot-alley", 3, "ngClass"], [1, "buenas-bananas", 3, "ngClass"], [1, "basil-borough", 3, "ngClass"], [1, "grapey-gardens", 3, "ngClass"], [1, "starry-skies", 3, "ngClass"], [1, "elon-estates", 3, "ngClass"], [1, "special", 3, "ngClass"], [1, "columns", 3, "ngClass"], [1, "column"], [1, "column-image"], ["src", "/assets/images/cards/beige-bay-1.webp", "width", "250"], ["src", "/assets/images/cards/beige-bay-2.webp", "width", "250"], ["src", "/assets/images/cards/beige-bay-3.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-1.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-2.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-3.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-1.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-2.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-3.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-1.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-2.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-3.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-1.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-2.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-3.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-1.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-2.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-3.webp", "width", "250"], ["src", "/assets/images/cards/mars-1.webp", "width", "250"], ["src", "/assets/images/cards/mars-2.webp", "width", "250"], ["src", "/assets/images/cards/mars-3.webp", "width", "250"], ["src", "/assets/images/cards/special-1.webp", "width", "250"], ["src", "/assets/images/cards/special-2.webp", "width", "250"], ["src", "/assets/images/cards/special-3.webp", "width", "250"], ["id", "metaverse", 1, "information"], [1, "two-column", "right-order-0"], [1, "left"], [1, "metaverse-image-toggles"], [3, "ngClass", "mouseover"], [1, "right"], [1, "image-container"], ["src", "/assets/images/metaverse-social.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-gaming.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-music.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-art.webp", "width", "400", 3, "ngClass"], ["id", "team", 1, "team"], [1, "team-list"], ["src", "/assets/images/shapes/blob-green-1.png", "width", "240", 1, "blob-bg"], ["href", "https://twitter.com/KonradProbst", "target", "_blank"], [1, "profile-link"], [1, "fab", "fa-twitter"], [1, "image-profile-block"], ["src", "/assets/images/team/konrad_probst.webp", "width", "150", "alt", "Konrad Probst"], [1, "title"], [1, "team-member-description"], [1, "description"], ["src", "/assets/images/shapes/blob-purple-2.png", "width", "240", 1, "blob-bg"], ["href", "https://twitter.com/bluberry_cem", "target", "_blank"], ["src", "/assets/images/team/cem_gedik.webp", "width", "150", "alt", "CEM"], ["src", "/assets/images/shapes/blob-blue-3.png", "width", "240", 1, "blob-bg", "rotate-160"], ["href", "https://twitter.com/jofnd_eth", "target", "_blank"], ["src", "/assets/images/team/jo_effendy.webp", "width", "150", "alt", "Jo"], ["src", "/assets/images/shapes/blob-red-4.png", "width", "240", 1, "blob-bg", "rotate-80"], ["href", "https://twitter.com/daniel_datsenko", "target", "_blank"], ["src", "/assets/images/team/daniel_datsenko.webp", "width", "150", "alt", "Daniel"], ["src", "/assets/images/shapes/blob-orange-2.png", "width", "240", 1, "blob-bg", "rotate-120"], ["href", "https://twitter.com/mischmeisterp", "target", "_blank"], ["src", "/assets/images/team/felix_weigelt.webp", "width", "150", "alt", "Felix"], ["src", "/assets/images/shapes/blob-purple-2.png", "width", "240", 1, "blob-bg", "rotate-120"], [1, "team-member"], [1, "image-profile-block", 2, "border-radius", "100px", "overflow", "hidden"], ["src", "/assets/images/team/enlightened-llama.webp", "width", "150", "alt", "EnlightenedLlama"], ["src", "/assets/images/shapes/blob-yellow-3.png", "width", "240", 1, "blob-bg"], [1, "image-profile-block", "image-crispy"], ["src", "/assets/images/team/stevie.webp", "width", "150", "alt", "Stevie"], ["src", "/assets/images/shapes/blob-purple-2.png", "width", "240", 1, "blob-bg", "rotate"], ["href", "https://twitter.com/OwlTower", "target", "_blank"], ["src", "/assets/images/team/marc.webp", "width", "150"], ["src", "/assets/images/shapes/blob-green-4.png", "width", "240", 1, "blob-bg", "rotate-40"], ["href", "https://twitter.com/beijingdou", "target", "_blank"], ["src", "/assets/images/team/josh_ong.webp", "width", "150"], ["src", "/assets/images/shapes/blob-yellow-3.png", "width", "240", 1, "blob-bg", "rotate-120"], ["href", "https://twitter.com/saml314", "target", "_blank"], [1, "image-container", "image-crispy"], ["src", "/assets/images/team/sam_li.webp", "width", "150"], ["src", "/assets/images/shapes/blob-blue-4.png", "width", "240", 1, "blob-bg", "rotate-160"], ["href", "https://twitter.com/KevinSusanto", "target", "_blank"], ["src", "/assets/images/team/kevin_susanto.webp", "width", "150"], ["src", "/assets/images/shapes/blob-red-1.png", "width", "240", 1, "blob-bg"], ["src", "/assets/images/team/irene_lee.webp", "width", "150"], ["id", "work-with-us", 1, "work-with-us"], [1, "wrapper"], ["target", "_blank", "href", "https://docs.google.com/forms/d/1U8Ef8q-Er5ik_KuFp10BG42LqQYqZm6g6ttud2i7mTc/edit#responses", 1, "explore-partnerships-btn"], [1, "text"], [1, "fas", "fa-arrow-right"], [1, "signup-for-newsletter"], ["target", "_blank", "href", "https://bit.ly/newsletter-optin-homepage", 1, "subscribe-btn"], [1, "partnerships-container"], [3, "autoplay", "loop", "autoplayInterval", "pauseOnHover", "transitionDuration", "images"], ["id", "we-are-hiring"], ["target", "_blank", "href", "https://jobs.wrk.xyz/propertysnft", 1, "explore-partnerships-btn"]], template: function IndexComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "propertys-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "A metaverse home for ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Community-centered experiences. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Immersive worlds.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "6,000 NFT homes waiting for new owners.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " It\u2019s our world, let\u2019s make it personal. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "svg", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Sold Out! Sale is over. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "View On OpenSea ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Read the Whitepaper");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "img", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Premium Partnerships");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ul", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "img", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "img", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "img", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "section", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "About");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Bring the Metaverse to life with NFTs");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "6,000 NFTs that give you creative control over Property's world. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Own assets that make your world more colorful and fun.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ul", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_52_listener() { return ctx.selectDistrict(1); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "button", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_54_listener() { return ctx.selectDistrict(2); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "button", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_56_listener() { return ctx.selectDistrict(3); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "button", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_58_listener() { return ctx.selectDistrict(4); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "button", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_60_listener() { return ctx.selectDistrict(5); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "button", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_62_listener() { return ctx.selectDistrict(6); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "button", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_64_listener() { return ctx.selectDistrict(7); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "button", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_66_listener() { return ctx.selectDistrict(8); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "button", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "img", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "img", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "img", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "img", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "img", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "img", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "img", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "img", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "img", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "img", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "img", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "img", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "img", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "img", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "img", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "img", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "img", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "img", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "img", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "img", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "img", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "img", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "img", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "section", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Metaverse");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Curated Digital Experiences");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "Fully immerse yourself in a limitless world on Sandbox. With Property's, all of your favorite experiences are in one place.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "ul", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "button", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_160_listener() { return ctx.toggleMetaverseImage(1); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Social & Adventures ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Meet others and enjoy the metaverse together");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "button", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_165_listener() { return ctx.toggleMetaverseImage(2); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "Gaming & Content ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Play all the games and even create your own");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "button", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_170_listener() { return ctx.toggleMetaverseImage(3); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, " Music & Events ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Relax and have fun at different events across the world");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "button", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_175_listener() { return ctx.toggleMetaverseImage(4); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "Art & Shopping ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Admire art and purchase your own to fit your unique look");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "div", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](181, "img", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](182, "img", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "img", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "img", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "section", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Team");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Web 3.0 Natives + Good Support");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Trust, diversity, friendship, ambition. We are more than a team. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](192, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, " We build innovative projects with care and so do our advisors.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "ul", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "img", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "a", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](199, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](201, "img", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, "Konrad Probst");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "Chief Executive Officer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, " Strategic Direction, Business Development, Stakeholder Relations, Coordination. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "img", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "a", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "img", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "Cem Gedik ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "Creative Director");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, " Visual Branding, Lead Artist. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "img", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "a", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "img", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Jo Effendy");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](233, "Chief Growth Officer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, " Strategic Direction, Community Growth & Management, Partnership Management. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](238, "img", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "a", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](243, "img", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "Daniel Datsenko ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "Chief Marketing Officer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, " Marketing, Communications, Business Development. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "img", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "a", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](255, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](257, "img", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "Felix Weigelt (misch)");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Head of Community Management");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, " Administration, Community Moderation, Coordination. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](266, "img", 98);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "div", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "div", 100);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](269, "img", 101);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "Enlightened Llama");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "Product/Business developer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, " Market analysis, Feature development, Partnership management. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](278, "img", 102);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "div", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 103);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](281, "img", 104);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Stevie");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "Hybrid FS Developer");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](288, " Web Design, Web 3.0 Integration. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](289, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](290, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "The Advisory Board");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "ul", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](295, "img", 105);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "a", 106);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](298, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](300, "img", 107);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "HoodooOwl");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "Private Wealth Manager");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, " Business Development, Financial Advisor, Investor Relations. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](309, "img", 108);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "a", 109);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](312, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](314, "img", 110);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, "Josh Ong");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "Partner at Causeway Strategies");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, " Sandbox Ambassador, Communication Advisor. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](323, "img", 111);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "a", 112);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](326, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "div", 113);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](329, "img", 114);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "Sam Li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, "Partner Calvert Drive Ventures");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, " Investor Relations, IP & Legal Advisor. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](338, "img", 115);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "a", 116);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "div", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](341, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "img", 117);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345, "Kevin Susanto");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, "Founder Envigo");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](350, " Forbes 30 under 30 Entrepreneur, Business Advisor. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](352, "img", 118);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "div", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "div", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](355, "img", 119);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](357, "Dr. Irene Lee");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "div", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](359, "(Social-) Entrepreneur");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "div", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "p", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, " Business Advisor, Strategic Network. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "section", 120);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](364, "div", 121);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, "Work With Us");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "Your social network on the metaverse");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "We see no competition, only partners & collaborators with messages. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](371, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, " We host brands, content & games. Whatever you create - we have the platform for it.");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "a", 122);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "div", 123);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](375, " Explore Partnership Opportunities ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](376, "i", 124);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "div", 125);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](379, "Get Early Alpha via our Newsletter");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "a", 126);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](381, "Subscribe");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "div", 127);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "ul", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](384, "carousel", 128);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "section", 129);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "div", 121);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389, "We are Hiring");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "Help us build Property's");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](393, "We are looking for some talented people to join our team and help us build Property's to the next level. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](394, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, " Check out our openings and tell us if you think you'd be a good fit!");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "a", 130);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "div", 123);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](398, " Explore Job Openings ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](399, "i", 124);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](400, "propertys-footer");
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](53);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c0, ctx.selectedDistrict === 1));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c0, ctx.selectedDistrict === 2));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](34, _c0, ctx.selectedDistrict === 3));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](36, _c0, ctx.selectedDistrict === 4));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](38, _c0, ctx.selectedDistrict === 5));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](40, _c0, ctx.selectedDistrict === 6));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](42, _c0, ctx.selectedDistrict === 7));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](44, _c0, ctx.selectedDistrict === 8));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](46, _c1, ctx.selectedDistrict === 1));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](48, _c1, ctx.selectedDistrict === 2));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c1, ctx.selectedDistrict === 3));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c1, ctx.selectedDistrict === 4));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c1, ctx.selectedDistrict === 5));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](56, _c1, ctx.selectedDistrict === 6));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](58, _c1, ctx.selectedDistrict === 7));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](60, _c1, ctx.selectedDistrict === 8));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](62, _c2, ctx.metaverseImageToShow === 1));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](64, _c3, ctx.metaverseImageToShow === 2));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](66, _c4, ctx.metaverseImageToShow === 3));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](68, _c0, ctx.metaverseImageToShow === 4));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](70, _c1, ctx.metaverseImageToShow === 1));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](72, _c1, ctx.metaverseImageToShow === 2));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](74, _c1, ctx.metaverseImageToShow === 3));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](76, _c1, ctx.metaverseImageToShow === 4));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](200);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoplay", ctx.carouselAutoplay)("loop", ctx.carouselLoop)("autoplayInterval", ctx.carouselAutoplayInterval)("pauseOnHover", ctx.carouselPauseOnHover)("transitionDuration", ctx.carouselTransitionInterval)("images", ctx.partnershipLogoImages);
            }
        }, directives: [_shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n  \n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 75px 0;\n  width: 1220px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   section.banner[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .banner-link[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: inline-block;\n}\n[_nghost-%COMP%]   .banner-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  padding: 5px 0;\n  border-radius: 5px;\n  background: #EAEAEA;\n  width: 220px;\n  margin: 0 auto 30px;\n  letter-spacing: 2px;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  opacity: 0.8;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-align: center;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .full-width-container[_ngcontent-%COMP%] {\n  background: #FAFAFA;\n  width: 100%;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  background: #7500ED;\n  transition: 0.15s ease-in-out;\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: relative;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: calc(100% + 20px);\n  height: calc(100% + 20px);\n  position: absolute;\n  border-radius: 50px;\n  border: 2px solid #7500ED;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.sandy-secrets[_ngcontent-%COMP%] {\n  background: #D6C58D;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.sandy-secrets[_ngcontent-%COMP%]:after {\n  border-color: #D6C58D;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%] {\n  background: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%]:after {\n  border-color: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.buenas-bananas[_ngcontent-%COMP%] {\n  background: #E8D322;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.buenas-bananas[_ngcontent-%COMP%]:after {\n  border-color: #E8D322;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.basil-borough[_ngcontent-%COMP%] {\n  background: #00ab78;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.basil-borough[_ngcontent-%COMP%]:after {\n  border-color: #00ab78;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.grapey-gardens[_ngcontent-%COMP%] {\n  background: #7500ED;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.grapey-gardens[_ngcontent-%COMP%]:after {\n  border-color: #7500ED;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.starry-skies[_ngcontent-%COMP%] {\n  background: #2F5BAC;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.starry-skies[_ngcontent-%COMP%]:after {\n  border-color: #2F5BAC;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%] {\n  background: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%]:after {\n  border-color: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.special[_ngcontent-%COMP%] {\n  background: #e6e3e1;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.special[_ngcontent-%COMP%]:after {\n  border-color: #e6e3e1;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.elon-estates[_ngcontent-%COMP%] {\n  background: #FF0500;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.elon-estates[_ngcontent-%COMP%]:after {\n  border-color: #FF0500;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 450px;\n  margin-bottom: 50px;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%]   .signup-for-newsletter[_ngcontent-%COMP%] {\n  height: 300px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%]   .signup-for-newsletter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%]   .signup-for-newsletter[_ngcontent-%COMP%]   #mc_embed_signup[_ngcontent-%COMP%]   input.email[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%]   .signup-for-newsletter[_ngcontent-%COMP%]   #mc_embed_signup[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #7500ED;\n  color: #FFF;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n  border-radius: 10px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  margin: 70px auto;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  background: #7500ED;\n  color: #FFF;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 5px;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .subscribe-btn[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n  border-radius: 10px;\n  width: 150px;\n  align-items: center;\n  margin: 30px auto;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  background: #7500ED;\n  color: #FFF;\n  text-align: center;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 100px;\n  display: none;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns.show[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-right: 80px;\n  position: relative;\n  z-index: 1;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .column-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: block;\n  height: 330px;\n  width: 460px;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 900px;\n  padding-top: 26px;\n  margin-top: 0 !important;\n  position: relative;\n  display: flex;\n}\n[_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%] {\n  width: 1220px;\n  margin: 100px auto 50px;\n  position: relative;\n}\n[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(50% - 80px);\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 80px);\n  width: 450px;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 50px;\n  line-height: 110%;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   .highlighted[_ngcontent-%COMP%] {\n  color: #7500ED;\n  position: relative;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n[_nghost-%COMP%]   .section-title-container[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n[_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 1220px;\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n[_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]:after {\n  content: initial;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:before {\n  position: absolute;\n  height: 100%;\n  content: \"\";\n  width: 80px;\n  top: 0;\n  z-index: 5;\n  background: white;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:after {\n  right: 0;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:before {\n  left: 0;\n  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   .partner-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  opacity: 0.8;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 300px;\n}\n[_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  width: 315px;\n  margin: 30px 0;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 11px;\n  margin-top: 5px;\n  font-weight: 100;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n  font-family: \"Futura Round Semibold\", arial, sans-serif;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1;\n  margin-bottom: 20px;\n  letter-spacing: 2px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 15px 20px;\n  border-radius: 10px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 18px;\n  background: #EAEAEA50;\n  display: flex;\n  align-items: center;\n  color: #222;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%]:hover {\n  color: #7500ED;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  background: none;\n  color: #222;\n  font-size: 24px;\n  justify-content: flex-start;\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  padding: 15px;\n  border-radius: 10px;\n  border: 2px solid rgba(0, 0, 0, 0);\n  width: 100%;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border: 2px solid #7500ED;\n  color: #7500ED;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-green[_ngcontent-%COMP%] {\n  border: 2px solid #00ab78;\n  color: #00ab78;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-orange[_ngcontent-%COMP%] {\n  border: 2px solid #DF9F30;\n  color: #DF9F30;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #3935FF;\n  color: #3935FF;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 150%;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .two-column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 395px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100%;\n  display: none;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.show[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  order: 0;\n  margin-right: auto;\n  width: 500px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0 auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n  height: 100%;\n  min-width: 350px;\n  width: 350px;\n  height: 350px;\n  border-radius: 4px;\n  display: block;\n  background: #7732aa;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Futura Round Bold Oblique\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 22px;\n  opacity: 0.7;\n  letter-spacing: 1px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  width: 700px;\n  display: flex;\n  margin-left: 50px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-1[_ngcontent-%COMP%] {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%] {\n  left: 60px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-3[_ngcontent-%COMP%] {\n  left: 120px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 5;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-4[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 3;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-5[_ngcontent-%COMP%] {\n  left: 330px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 700px;\n  order: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%] {\n  width: 1220px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0;\n  margin-top: 100px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 60px;\n  padding-right: 9px;\n  border-radius: 3px;\n  width: 350px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  z-index: 0;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 240px !important;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-40[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(40deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-80[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(80deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-120[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(120deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-160[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(160deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  z-index: 3;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 45px 15px 25px;\n  justify-content: center;\n  color: #222;\n  position: relative;\n  width: 100%;\n  z-index: 2;\n  margin: 0 auto;\n  box-sizing: border-box;\n  border-radius: 20px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  width: 100%;\n  position: absolute;\n  content: \"\";\n  height: 380px;\n  opacity: 0;\n  top: 0;\n  left: 50%;\n  z-index: 2;\n  z-index: 0;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  transform: translateX(-50%);\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .team-member[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:hover   .team-member-description[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .profile-link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n  align-items: center;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-align: center;\n  justify-content: center;\n  height: 30px;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  padding: 3px;\n  position: absolute;\n  top: 20px;\n  right: 10px;\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 4px;\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  color: #7500ED;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  font-size: 26px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-width: 150px;\n  width: 150px;\n  height: 150px;\n  margin: 0 auto 20px auto;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block.image-crispy[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-crispy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  margin-bottom: 10px;\n  line-height: 160%;\n  height: 30px;\n  opacity: 0.7;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 270px;\n  width: 100%;\n  opacity: 0;\n  text-align: center;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  line-height: 140%;\n  font-weight: 100;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%] {\n  width: 950px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 150%;\n  margin: 0;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .faq-group-block-container[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: 30px 30px 10px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 10px;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 10px;\n  padding: 15px;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-color: #7500ED;\n  color: #7500ED;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #7500ED;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 100;\n  line-height: 160%;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bullet-point[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-weight: 100;\n  line-height: 160%;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .question-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .question-title-container[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 30px;\n  margin-top: -10px;\n}\n@media only screen and (min-width: 0px) and (max-width: 1120px) {\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%] {\n    font-size: 34px;\n    min-height: 75px;\n  }\n  [_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  [_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  [_nghost-%COMP%]   .propertys-image[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n  [_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left.images[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .breakpoint[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%] {\n    width: 300px;\n    min-width: 300px;\n    height: initial;\n    margin-bottom: 50px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    width: calc(100% - 20px) !important;\n    margin: 60px auto 40px;\n  }\n  [_nghost-%COMP%]   section.banner[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 0 !important;\n  }\n  [_nghost-%COMP%]   section.carousel-3d[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    margin-bottom: 10px;\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 45px 15px 25px;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    width: 100%;\n    z-index: 2;\n    margin: 0 auto;\n    box-sizing: border-box;\n    border-radius: 20px;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:after {\n    opacity: 1;\n    height: 100%;\n    background: #FFF !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 0px) and (max-width: 700px) {\n  [_nghost-%COMP%] {\n    \n    \n  }\n  [_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  [_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n    margin: 30px auto 0;\n    width: calc(100% - 40px);\n  }\n  [_nghost-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: left;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n    margin: 60px auto 40px !important;\n  }\n  [_nghost-%COMP%]   section.information[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    margin: 0 auto 90px;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child {\n    margin-right: auto;\n  }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    line-height: 150% !important;\n  }\n  [_nghost-%COMP%]   .banner[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-top: 0;\n    height: initial;\n  }\n  [_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n    order: 0;\n    width: 100%;\n    margin-bottom: 40px;\n    right: 0;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto 30px;\n    display: block;\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n    order: 1;\n    margin-bottom: 100px;\n    width: calc(100% - 30px);\n    margin: 0 auto 100px;\n  }\n  [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    bottom: initial;\n    left: initial;\n    transform: initial;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: initial;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 80px;\n  }\n  [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n    position: relative;\n    top: initial;\n    left: initial;\n    transform: none;\n  }\n  [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%] {\n    min-width: 150px;\n    width: 150px;\n    height: 150px;\n    margin: 0 auto 15px auto;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n    margin-bottom: 7px;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: calc(100% - 50px) !important;\n    display: block;\n    margin: 0 auto 20px auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2luZGV4LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDR0E7RUFpU0k7O0lBQUE7RUF5RUE7O0lBQUE7RUFxSUE7O0lBQUE7RUFtREE7O0dBQUE7RUFtR0E7O0lBQUE7RUFLQTs7R0FBQTtFQXdOSjs7SUFBQTtFQWdSQTs7c0VBQUE7QUEzbENBO0FBckJJO0VBQ0ksZUFBQTtFQUNBLGFESmtCO0VDS2xCLGNBQUE7QUF1QlI7QUFyQlE7RUFDSSxpQkFBQTtBQXVCWjtBQW5CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXFCUjtBQW5CUTtFQUNJLGtCQUFBO0FBcUJaO0FBakJJO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQW1CUjtBQWpCUTtFQUNJLGlCQUFBO0FBbUJaO0FBZkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxREQvQmtCO0VDZ0NsQix5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWlCUjtBQWRJO0VBQ0ksZUFBQTtFQUNBLHNERDlDVztFQytDWCxZQUFBO0VBQ0EsZ0JBQUE7QUFnQlI7QUFiSTtFQUNJLGVBQUE7RUFDQSxxRERwRGtCO0VDcURsQixrQkFBQTtFQUNBLGtCQUFBO0FBZVI7QUFaSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQWNSO0FBWEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWFSO0FBWFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWFaO0FBWFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJEbEVBO0VFZE4sNkJEaUYwQjtFQUNwQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQzlFTiw0Q0QrRTBCO0FBbUJwQztBQWpCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbUJwQjtBQWpCb0I7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQW1CeEI7QUFmZ0I7RUFDSSxtQkQ1RUE7QUM2RnBCO0FBZm9CO0VBQ0kscUJEL0VKO0FDZ0dwQjtBQWJnQjtFQUNJLG1CRHhGTjtBQ3VHZDtBQWJvQjtFQUNJLHFCRDNGVjtBQzBHZDtBQVhnQjtFQUNJLG1CRGpHTDtBQzhHZjtBQVhvQjtFQUNJLHFCRHBHVDtBQ2lIZjtBQVRnQjtFQUNJLG1CRDNHTjtBQ3NIZDtBQVRvQjtFQUNJLHFCRDlHVjtBQ3lIZDtBQVBnQjtFQUNJLG1CRDFISjtBQ21JaEI7QUFQb0I7RUFDSSxxQkQ3SFI7QUNzSWhCO0FBTGdCO0VBQ0ksbUJEdEhSO0FDNkhaO0FBTG9CO0VBQ0kscUJEekhaO0FDZ0laO0FBSGdCO0VBQ0ksbUJEaElOO0FDcUlkO0FBSG9CO0VBQ0kscUJEbklWO0FDd0lkO0FBRGdCO0VBQ0ksbUJEbklMO0FDc0lmO0FBRG9CO0VBQ0kscUJEdElUO0FDeUlmO0FBQ2dCO0VBQ0ksbUJEL0lUO0FDZ0pYO0FBQ29CO0VBQ0kscUJEbEpiO0FDbUpYO0FBSVk7RUFDSSxlQUFBO0FBRmhCO0FBT0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQVFRO0VBQ0ksYUFBQTtFQUNBLHNERDVMTztBQ3NMbkI7QUFRWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFOaEI7QUFTWTtFQUNJLHNERHBNRztBQzZMbkI7QUFVWTtFQUNJLG1CRDVMQTtFQzZMQSxXQUFBO0VBQ0EsbUREck1RO0FDNkx4QjtBQWFJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1ERGxOZ0I7RUNtTmhCLG1CRDVNUTtFQzZNUixXQUFBO0FBWFI7QUFhUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUMvTkYsNkJEZ09zQjtBQVJoQztBQVlZO0VBQ0ksZUFBQTtBQVZoQjtBQWdCSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1ERDNPZ0I7RUM0T2hCLG1CRHJPUTtFQ3NPUixXQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWlCSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBZlI7QUFpQlE7RUFDSSxhQUFBO0FBZlo7QUFrQlE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWhCWjtBQWtCWTtFQUNJLGtCQUFBO0FBaEJoQjtBQXFCWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREQvUUc7QUM0UG5CO0FBc0JZO0VBQ0ksZUFBQTtBQXBCaEI7QUF1Qlk7RUFDSSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUFyQmhCO0FBNkJJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBM0JSO0FBK0JJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBN0JSO0FBZ0NJO0VBQ0ksYUR2VGtCO0VDd1RsQix1QkFBQTtFQUNBLGtCQUFBO0FBOUJSO0FBaUNJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUN2VEUsMkJEd1RpQjtBQTVCM0I7QUErQkk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQzlURSwyQkQrVGlCO0FBMUIzQjtBQTRCUTtFQUNJLG1ERGxVWTtFQ21VWixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTFCWjtBQTRCWTtFQUNJLGNEalVBO0VDa1VBLGtCQUFBO0FBMUJoQjtBQStCUTtFQUNJLHFERG5WYztFQ29WZCxtQkFBQTtFQUNBLGVBQUE7QUE3Qlo7QUFnQ1E7RUFDSSxrQkFBQTtBQTlCWjtBQWtDSTtFQUNJLG1CQUFBO0FBaENSO0FBbUNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBakNSO0FBdUNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFEalhrQjtFRVFoQiwyQkQwV2lCO0FBbEMzQjtBQW9DUTtFQUNJLGFBQUE7QUFsQ1o7QUFvQ1k7RUFDSSxnQkFBQTtBQWxDaEI7QUFzQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFwQ1o7QUF3Q1E7RUFDSSxRQUFBO0VBQ0EseUVBQUE7QUF0Q1o7QUF5Q1E7RUFDSSxPQUFBO0VBQ0EsMEVBQUE7QUF2Q1o7QUEwQ1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF4Q1o7QUEyQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpDWjtBQTJDWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQXpDaEI7QUEyQ2dCO0VBQ0ksZUFBQTtBQXpDcEI7QUFrRFE7RUFDSSxZQUFBO0FBaERaO0FBa0RZO0VBQ0ksaUJBQUE7QUFoRGhCO0FBcURJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQW5EUjtBQXFEUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQW5EWjtBQXFEWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFuRGhCO0FBcURnQjtFQUNJLGVBQUE7QUFuRHBCO0FBc0RZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBcERoQjtBQXdEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUREM2NnQjtFQzRjaEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdERaO0FBeURRO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUREcGRZO0VDcWRaLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdEL2NTO0FDd1pyQjtBQXlEWTtFQUNJLGNEcmRBO0FDOFpoQjtBQTBEWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF4RGhCO0FBa0VRO0VBQ0ksa0JBQUE7QUFoRVo7QUFtRVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRHplUztFQzBlVCxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUFqRVo7QUFtRVk7RUFDSSx5QkFBQTtFQUNBLGNEemZBO0FDd2JoQjtBQW9FWTtFQUNJLHlCQUFBO0VBQ0EsY0R2ZkY7QUNxYmQ7QUFxRVk7RUFDSSx5QkFBQTtFQUNBLGNEemZGO0FDc2JkO0FBc0VZO0VBQ0kseUJBQUE7RUFDQSxjRDNmQztBQ3ViakI7QUF1RVk7RUFDSSxlQUFBO0VBQ0Esc0REemhCRztBQ29kbkI7QUErRVE7RUFDSSxlQUFBO0FBN0VaO0FBZ0ZRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBOUVaO0FBaUZRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBL0VaO0FBbUZZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWpGaEI7QUFtRmdCO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFqRnBCO0FBbUZvQjtFQUNJLGNBQUE7QUFqRnhCO0FBdUZRO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXJGWjtBQXdGZ0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRHhqQkY7QUNrZWxCO0FBd0ZvQjtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUF0RnhCO0FBNEZRO0VBQ0ksZ0JBQUE7RUFDQSwyREQ1bEJtQjtFQzZsQm5CLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFGWjtBQTZGUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUEzRlo7QUE2Rlk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBM0ZoQjtBQTZGZ0I7RUFBVyxPQUFBO0VBQVMsUUFBQTtFQzltQjFCLDJCRDhtQnVEO0FBckZqRTtBQXNGZ0I7RUFBVyxVQUFBO0VBQVksUUFBQTtFQy9tQjdCLDJCRCttQjBEO0FBOUVwRTtBQStFZ0I7RUFBVyxXQUFBO0VBQWEsUUFBQTtFQ2huQjlCLDJCRGduQjJEO0VBQW1CLFVBQUE7QUF0RXhGO0FBdUVnQjtFQUFXLFdBQUE7RUFBYSxRQUFBO0VDam5COUIsMkJEaW5CMkQ7RUFBbUIsVUFBQTtBQTlEeEY7QUErRGdCO0VBQVcsV0FBQTtFQUFhLFFBQUE7RUNsbkI5QiwyQkRrbkIyRDtFQUFtQixVQUFBO0FBdER4RjtBQTBEUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUF4RFo7QUFvRUk7RUFDSSxhRDlvQmtCO0FDNGtCMUI7QUFvRVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWxFWjtBQW9FWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFsRWhCO0FBb0VnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUNqcUJWLDRDRGtxQjZCO0FBL0R2QztBQWlFb0I7RUNwcUJWLDBERHFxQmlDO0FBNUQzQztBQStEb0I7RUN4cUJWLDBERHlxQmlDO0FBMUQzQztBQTZEb0I7RUM1cUJWLDJERDZxQmlDO0FBeEQzQztBQTJEb0I7RUNockJWLDJERGlyQmlDO0FBdEQzQztBQTBEZ0I7RUFDSSxVQUFBO0FBeERwQjtBQTJEZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0RwckJDO0VDcXJCRCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUF6RHBCO0FBMkRvQjtFQUNJLHdCQUFBO0FBekR4QjtBQTZEZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQ3h0QlYsMkJEeXRCNkI7RUNodUI3Qiw0QkRpdUI4QjtBQXJEeEM7QUEwRG9CO0VBQ0ksVUFBQTtBQXhEeEI7QUE0RHdCO0VBQ0ksVUFBQTtBQTFENUI7QUE4RG9CO0VBQ0ksVUFBQTtBQTVEeEI7QUErRG9CO0VBQ0ksVUFBQTtBQTdEeEI7QUFpRW9CO0VBQ0ksZUFBQTtBQS9EeEI7QUFrRW9CO0VDdHZCVixzQkR1dkJpQztBQTdEM0M7QUFpRWdCO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFERG53Qk07RUNvd0JOLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VDendCViw0QkQwd0I4QjtBQTVEeEM7QUErRGdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNEOXdCSjtFQyt3QkksNEJBQUE7QUE3RHBCO0FBK0RvQjtFQy94QlYsNEJEZ3lCa0M7RUFDcEIsZUFBQTtBQTFEeEI7QUE4RGdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBNURwQjtBQThEb0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUE1RHhCO0FBK0RvQjtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE3RHhCO0FBZ0VvQjtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUMzekJkLDRCRDR6QmtDO0FBM0Q1QztBQStEZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRERqMEJEO0VDazBCQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUN2MEJWLDRCRHcwQjhCO0FBMUR4QztBQTZEZ0I7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VDaDFCViw0QkRpMUI4QjtBQXhEeEM7QUE2RGdCO0VBQ0ksc0REcjFCRDtFQ3MxQkMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEzRHBCO0FBcUVDO0VBQ0ksWUFBQTtBQW5FTDtBQXFFSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQW5FUjtBQXNFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQXBFUjtBQXVFSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJFUjtBQTBFUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VDaDRCRiw2QkRpNEJzQjtBQXJFaEM7QUF1RVk7RUFDSSxxRERqNEJVO0VFSGhCLDZCRHE0QjBCO0FBbEVwQztBQXFFWTtFQUNJLHFCRDMzQkE7RUM0M0JBLGNENTNCQTtBQ3l6QmhCO0FBcUVnQjtFQUNJLFdENTNCQztBQ3l6QnJCO0FBc0VnQjtFQUNJLGNEbjRCSjtBQyt6QmhCO0FBd0VZO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQXRFaEI7QUF3RWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXRFcEI7QUF3RW9CO0VBQ0ksa0JBQUE7QUF0RXhCO0FBNEVZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUExRWhCO0FBK0VJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBN0VSO0FBZ0ZRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE5RVo7QUFvRkE7RUFDSTtJQUNJLGtCQUFBO0VBbEZOO0VBb0ZNO0lBQ0ksVUFBQTtFQWxGVjtFQXFGTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQW5GVjtFQXdGTTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUF0RlY7RUEyRkU7SUFDSSxlQUFBO0VBekZOO0VBNEZFO0lBQ0ksZUFBQTtFQTFGTjtFQTZGRTtJQUNJLFlBQUE7RUEzRk47RUE4RkU7SUFDSSx3QkFBQTtFQTVGTjtFQStGRTtJQUNJLHNCQUFBO0VBN0ZOO0VBZ0dVO0lBQ0ksUUFBQTtFQTlGZDtFQWdHYztJQUNJLG1CQUFBO0VBOUZsQjtFQWtHVTtJQUNJLFFBQUE7RUFoR2Q7RUFvR007SUFDSSxtQkFBQTtFQWxHVjtFQXFHTTtJQUNJLHdCQUFBO0lBQ0EsY0FBQTtFQW5HVjtFQXFHVTtJQUNJLHFCQUFBO0VBbkdkO0VBc0dVO0lBQ0ksZUFBQTtFQXBHZDtFQXdHTTtJQUNJLHdCQUFBO0lBQ0EsY0FBQTtFQXRHVjtFQXdHVTtJQUNJLG1CQUFBO0VBdEdkO0VBd0djO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBdEdsQjtFQXdHa0I7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQXRHdEI7RUE4R0U7SUFDSSxtQ0FBQTtJQUNBLHNCQUFBO0VBNUdOO0VBOEdNO0lBQ0ksc0JBQUE7SUFDQSwyQkFBQTtFQTVHVjtFQStHTTtJQUNJLHNCQUFBO0lBQ0Esb0JBQUE7RUE3R1Y7RUF3SVU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQXRJZDtFQXdJYztJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXRDlqQ0M7SUMrakNELGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQXRJbEI7RUEySWM7SUFDSSxXQUFBO0VBeklsQjtFQStJa0I7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0VBN0l0QjtFQWlKYztJQUNJLFdBQUE7RUEvSWxCO0FBQ0Y7QUF5Skk7RUFybkNKO0lBK3BDUTs7TUFBQTtJQXlJQTs7TUFBQTtFQW5VTjtFQWtKTTtJQUNJLGVBQUE7RUFoSlY7RUFtSk07SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0VBakpWO0VBb0pNO0lBQ0ksdUJBQUE7SUFDQSxnQkFBQTtFQWxKVjtFQXFKTTtJQUNJLGlCQUFBO0lBQ0EsaUNBQUE7RUFuSlY7RUFxSlU7SUFDSSx3QkFBQTtFQW5KZDtFQXVKTTtJQUNJLHNCQUFBO0VBckpWO0VBdUpVO0lBQ0ksbUJBQUE7RUFySmQ7RUF1SmM7SUFDSSxrQkFBQTtFQXJKbEI7RUEwSk07SUFDSSw0QkFBQTtFQXhKVjtFQStKTTtJQUNJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQTdKVjtFQWdLTTtJQUNJLHdCQUFBO0VBOUpWO0VBaUtNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBL0pWO0VBaUtVO0lBQ0ksUUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFFBQUE7RUEvSmQ7RUFpS2M7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUEvSmxCO0VBbUtVO0lBQ0ksUUFBQTtJQUNBLG9CQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQWpLZDtFQXFLTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQW5LVjtFQXFLVTtJQUNJLFdBQUE7RUFuS2Q7RUFxS2M7SUFDSSx3QkFBQTtFQW5LbEI7RUFzS2M7SUFDSSxrQkFBQTtFQXBLbEI7RUF3S1U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQXRLZDtFQTBLTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBeEtWO0VBNEtNO0lBQ0ksVUFBQTtFQTFLVjtFQThLVTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7RUE1S2Q7RUErS2M7SUFDSSxzQkFBQTtJQUNBLFVBQUE7RUE3S2xCO0VBK0trQjtJQUNJLHNCQUFBO0VBN0t0QjtFQWdMa0I7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7RUE5S3RCO0VBZ0xzQjtJQUNJLHNCQUFBO0VBOUsxQjtFQW9Mc0I7SUFDSSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUFsTDFCO0VBcUxzQjtJQUNJLGtCQUFBO0VBbkwxQjtFQXNMc0I7SUFDSSxrQkFBQTtFQXBMMUI7RUF3TGtCO0lBQ0ksbUNBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7RUF0THRCO0VBOExjO0lBQ0ksZUFBQTtFQTVMbEI7RUFzTVU7SUFDSSxlQUFBO0VBcE1kO0VBeU1rQjtJQUNJLGNBQUE7RUF2TXRCO0FBQ0YiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgVmFyaWFibGVzICovXG5cbi8vIFN0cnVjdHVyZVxuJHdyYXBwZXItY29udGFpbmVyLXdpZHRoOiAxMjIwcHg7XG5cbi8vIEZvbnRzXG4kZm9udC1mYW1pbHktYm9keTogXCJGdXR1cmEgUm91bmQgUmVndWxhclwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5LW1lZGl1bTogXCJGdXR1cmEgUm91bmQgTWVkaXVtXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQ6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBTZW1pYm9sZCBPYmxpcXVlXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIEJvbGQgT2JsaXF1ZVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5LWJvbGQ6IFwiRnV0dXJhIFJvdW5kIEJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktaGVhZGluZzogXCJBUkNPXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuXG4vLyBDb2xvcnNcbiRwcmltYXJ5LWJnLWNvbG9yOiAjNTUwMTk2O1xuJGhlYWRlci1iZzogIzc1MDBFRDtcbiRib2R5LWJnOiAjMzMxMjRlO1xuJHByaW1hcnktY29sb3I6ICM3NTAwRUQ7XG4kcHJpbWFyeS1jb2xvci1saWdodDogI2FhM2ZmYztcbiRwcmltYXJ5LWJnLWNvbG9yLWRhcms6ICMwMDAwMDA7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAjMjIyO1xuJHByaW1hcnktZm9udC1jb2xvci1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XG4kaW5lbGlnaWJsZS1jb2xvcjogI2IxMzc4ODtcbiRpbmVsaWdpYmxlLWJnLWNvbG9yOiAjNDgyMTUzO1xuJGNvbG9yLWdyZWVuOiAjMDBhYjc4O1xuJGNvbG9yLWJnLWdyZWVuOiAjRTZGRkYwO1xuJGNvbG9yLXllbGxvdzogI0U4RDMyMjtcbiRjb2xvci1vcmFuZ2U6I0RGOUYzMDtcbiRjb2xvci1yZWQ6I0ZGMDUwMDtcbiRjb2xvci1ibHVlOiMyRjVCQUM7XG4kY29sb3ItZGFyay1ibHVlOiMzOTM1RkY7XG4kY29sb3ItbGlnaHQtb3JhbmdlOiNENkM1OEQ7XG4kY29sb3Itc2lsdmVyOiAjZTZlM2UxO1xuXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzczMmFhO1xuJHNlY29uZGFyeS1mb250LWNvbG9yOiAjNzczMmFhO1xuJHVybC1jb2xvcjogI2RjOWFmMDtcbiRhY2NlbnQtY29sb3I6ICNFRjdGMTk7IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL21peGlucyc7XG5cbjpob3N0IHtcblxuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA3NXB4IDA7XG4gICAgICAgIHdpZHRoOiAkd3JhcHBlci1jb250YWluZXItd2lkdGg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICYuYmFubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndhcm5pbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFubmVyLWxpbmsge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1tZWRpdW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0VBRUFFQTtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LW1lZGl1bTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmZ1bGwtd2lkdGgtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmRpc3RyaWN0LWxpc3Qtc2VsZWN0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKCB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkpO1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuc2FuZHktc2VjcmV0cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1vcmFuZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1saWdodC1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmFwcmljb3QtYWxsZXkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itb3JhbmdlO1xuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5idWVuYXMtYmFuYW5hcyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci15ZWxsb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci15ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmJhc2lsLWJvcm91Z2gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JlZW47XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuZ3JhcGV5LWdhcmRlbnMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnN0YXJyeS1za2llcyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYXByaWNvdC1hbGxleSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1vcmFuZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnNwZWNpYWwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itc2lsdmVyO1xuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itc2lsdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5lbG9uLWVzdGF0ZXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY3Rpb24ud29yay13aXRoLXVzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBcbiAgICBcbiAgICAgICAgLnNpZ251cC1mb3ItbmV3c2xldHRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xuICAgIFxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgI21jX2VtYmVkX3NpZ251cCBpbnB1dC5lbWFpbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgI21jX2VtYmVkX3NpZ251cCAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5leHBsb3JlLXBhcnRuZXJzaGlwcy1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBjb2xvcjogI0ZGRjtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4xNXMgZWFzZS1pbi1vdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5zdWJzY3JpYmUtYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBzZWN0aW9uIC5jb2x1bW5zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAmLnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgLmNvbHVtbi1pbWFnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFNUQVJUIENBUk9VU0VMIFNUWUxFU1xuICAgICAqL1xuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcbiAgICAgICAgd2lkdGg6IDQ2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAgIFxuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmJhbm5lci1pbm5lciB7XG4gICAgICAgIHdpZHRoOiAkd3JhcHBlci1jb250YWluZXItd2lkdGg7XG4gICAgICAgIG1hcmdpbjogMTAwcHggYXV0byA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnByb21vLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDgwcHgpO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSk7XG4gICAgfVxuXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA4MHB4KTtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSk7XG5cbiAgICAgICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTEwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgICAgIC5oaWdobGlnaHRlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LW1lZGl1bTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUGFydG5lcnNoaXBzXG4gICAgICovXG4gICAgLnBhcnRuZXJzaGlwcy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogJHdyYXBwZXItY29udGFpbmVyLXdpZHRoO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSk7XG5cbiAgICAgICAgJi5wcmVtaXVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG5cbiAgICAgICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpbml0aWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFydG5lci10ZXh0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAuY3RhLWNvbnRhaW5lciB7XG4gICAgICAgIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuXG4gICAgICAgICAgICBpLCBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvdW50ZG93bi1jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDMxNXB4O1xuICAgICAgICBtYXJnaW46IDMwcHggMDtcblxuICAgICAgICAudGltZWxlZnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgICAgICY+IGRpdiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnQtZG93biB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRkb3duLXNhbGUtdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VBRUFFQTUwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgTWV0YXZlcnNlIHNlY3Rpb25cbiAgICAgKi9cbiAgICAubWV0YXZlcnNlLWltYWdlLXRvZ2dsZXMge1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUtZ3JlZW4ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1ncmVlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZS1vcmFuZ2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1vcmFuZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWN0aXZlLXllbGxvdyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWRhcmstYmx1ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRhcmstYmx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiAgSW5mb3JtYXRpb25cbiAgICAqL1xuICAgIC5pbmZvcm1hdGlvbiB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAudHdvLWNvbHVtbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDozOTVweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgICAgICAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIG9yZGVyOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAmLnJvdW5kZWQge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkLWl0YWxpYztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2VzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG5cbiAgICAgICAgICAgICAgICAmLmNhcmQtMSB7IGxlZnQ6IDA7IHRvcDogNTAlOyBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSkgfVxuICAgICAgICAgICAgICAgICYuY2FyZC0yIHsgbGVmdDogNjBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKSB9XG4gICAgICAgICAgICAgICAgJi5jYXJkLTMgeyBsZWZ0OiAxMjBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKTsgei1pbmRleDo1OyB9XG4gICAgICAgICAgICAgICAgJi5jYXJkLTQgeyBsZWZ0OiAyMTBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKTsgei1pbmRleDozOyB9XG4gICAgICAgICAgICAgICAgJi5jYXJkLTUgeyBsZWZ0OiAzMzBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKTsgei1pbmRleDoyOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBEYXkvTmlnaHQgY3ljbGUgYXJlYVxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAqICBUZWFtIHNlY3Rpb25cbiAgICAqL1xuICAgIC50ZWFtIHtcbiAgICAgICAgd2lkdGg6ICR3cmFwcGVyLWNvbnRhaW5lci13aWR0aDtcblxuICAgICAgICAudGVhbS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgICAgICAgICAgLmJsb2ItYmcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5yb3RhdGUtNDAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDBkZWcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICYucm90YXRlLTgwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDgwZGVnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLnJvdGF0ZS0xMjAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMTIwZGVnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLnJvdGF0ZS0xNjAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMTYwZGVnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmPmEsIC50ZWFtLW1lbWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMTVweCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSk7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICY+YSwgLnRlYW0tbWVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZWFtLW1lbWJlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXByb2ZpbGUtYmxvY2sgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgxLjA1KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjNzIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvZmlsZS1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2UtcHJvZmlsZS1ibG9jayB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcblxuICAgICAgICAgICAgICAgICAgICAmLmltYWdlLWNyaXNweSwgLmltYWdlLWNyaXNweSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5Oi43O1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI3MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlLWluLW91dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbi8qKlxuICogIEZBUVxuICovXG4gLmZhcSB7XG4gICAgIHdpZHRoOiA5NTBweDtcblxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5mYXEtZ3JvdXAtYmxvY2stY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICB1bC5mYXEtc2VjdGlvbiB7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMTVzIGVhc2UtaW4tb3V0KTtcblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1tZWRpdW07XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMTVzIGVhc2UtaW4tb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcblxuICAgICAgICAgICAgICAgICAgICAuYnVsbGV0LXBvaW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucXVlc3Rpb24tdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICAgICAgIC5jaGV2cm9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmPmltZyB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RhLWNvbnRhaW5lciB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cblxuICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5wcm9wZXJ0eXMtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgfVxuXG4gICAgLmV4cGxvcmUtcGFydG5lcnNoaXBzLWJ0biB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICB9XG5cbiAgICAudHdvLWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgJi5yaWdodC1vcmRlci0wIHtcbiAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdC5pbWFnZXMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgLmJyZWFrcG9pbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgJi5yb3VuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvIDQwcHg7XG5cbiAgICAgICAgJi5iYW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY2Fyb3VzZWwtM2Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLmJsb2ItYmcge1xuICAgIC8vICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XG5cbiAgICAvLyAgICAgJi5yb3RhdGUtNDAge1xuICAgIC8vICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDBkZWcpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAmLnJvdGF0ZS04MCB7XG4gICAgLy8gICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg4MGRlZykgc2NhbGUoMC42KSAhaW1wb3J0YW50KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgICYucm90YXRlLTEyMCB7XG4gICAgLy8gICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgxMjBkZWcpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAmLnJvdGF0ZS0xNjAge1xuICAgIC8vICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMTYwZGVnKSBzY2FsZSgwLjYpICFpbXBvcnRhbnQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLnRlYW0ge1xuICAgICAgICAudGVhbS1saXN0IHtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgICAgICAgICAgICAmPmEsIC50ZWFtLW1lbWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMTVweCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEsIC50ZWFtLW1lbWJlciB7XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogIE1lZGlhIHN0eWxlc1xuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuXG4gICAgICAgIC5kaXN0cmljdC1saXN0LXNlbGVjdG9yIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGRvd24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRkb3duLXNhbGUtdGV4dCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG8gNDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAmLmluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIC5jb2x1bW5zIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDkwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTUwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogIEJhbm5lclxuICAgICAgICAgKi9cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyLWlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWFyZWEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5wcm9tby1pbWFnZSB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhcnRuZXJzaGlwcy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IGluaXRpYWw7XG4gICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBpbml0aWFsO1xuXG4gICAgICAgICAgICAmLnByZW1pdW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zbG9nYW4tY29udGFpbmVyLCAucHJvbW8taW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiBpbml0aWFsO1xuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGVhbSB7XG4gICAgICAgICAgICAudGVhbS1saXN0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXByb2ZpbGUtYmxvY2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxNXB4IGF1dG87XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAudGVhbS1tZW1iZXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHdvLWNvbHVtbiB7XG4gICAgICAgICAgICAucmlnaHQsIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgRkFRXG4gICAgICAgICAqL1xuICAgICAgICAuZmFxIHtcbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsLmZhcS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJAbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgLW1zLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgICAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAgICAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59Il19 */"] });
    return IndexComponent;
})();



/***/ }),

/***/ "cH1L":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
  \*****************************************************************/
/*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */

const DIR_DOCUMENT = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
}
let Directionality = /*@__PURE__*/ (() => {
    class Directionality {
        constructor(_document) {
            /** The current 'ltr' or 'rtl' value. */
            this.value = 'ltr';
            /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            if (_document) {
                // TODO: handle 'auto' value -
                // We still need to account for dir="auto".
                // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
                // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
                const bodyDir = _document.body ? _document.body.dir : null;
                const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
                const value = bodyDir || htmlDir;
                this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
            }
        }
        ngOnDestroy() {
            this.change.complete();
        }
    }
    Directionality.ɵfac = function Directionality_Factory(t) { return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8)); };
    Directionality.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
})();
let Dir = /*@__PURE__*/ (() => {
    class Dir {
        constructor() {
            /** Normalized direction that accounts for invalid/unsupported values. */
            this._dir = 'ltr';
            /** Whether the `value` has been set to its initial value. */
            this._isInitialized = false;
            /** Event emitted when the direction changes. */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** @docs-private */
        get dir() { return this._dir; }
        set dir(value) {
            const old = this._dir;
            const normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        }
        /** Current layout direction of the element. */
        get value() { return this.dir; }
        /** Initialize once default value has been set. */
        ngAfterContentInit() {
            this._isInitialized = true;
        }
        ngOnDestroy() {
            this.change.complete();
        }
    }
    Dir.ɵfac = function Dir_Factory(t) { return new (t || Dir)(); };
    Dir.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Dir, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function Dir_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
            }
        }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: Directionality, useExisting: Dir }])] });
    return Dir;
})();
let BidiModule = /*@__PURE__*/ (() => {
    class BidiModule {
    }
    BidiModule.ɵfac = function BidiModule_Factory(t) { return new (t || BidiModule)(); };
    BidiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BidiModule });
    BidiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    return BidiModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, { declarations: [Dir], exports: [Dir] }); })();
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






/***/ }),

/***/ "nLfN":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \*********************************************************************/
/*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function() { return _getShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
let Platform = /*@__PURE__*/ (() => {
    class Platform {
        constructor(_platformId) {
            this._platformId = _platformId;
            // We want to use the Angular platform check because if the Document is shimmed
            // without the navigator, the following checks will fail. This is preferred because
            // sometimes the Document may be shimmed without the user's knowledge or intention
            /** Whether the Angular application is being rendered in the browser. */
            this.isBrowser = this._platformId ?
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
            /** Whether the current browser is Microsoft Edge. */
            this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
            /** Whether the current rendering engine is Microsoft Trident. */
            this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
            // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
            /** Whether the current rendering engine is Blink. */
            this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
                typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
            // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.
            /** Whether the current rendering engine is WebKit. */
            this.WEBKIT = this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
            /** Whether the current platform is Apple iOS. */
            this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !('MSStream' in window);
            // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.
            /** Whether the current browser is Firefox. */
            this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
            /** Whether the current platform is Android. */
            // Trident on mobile adds the android platform to the userAgent to trick detections.
            this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
            // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.
            /** Whether the current browser is Safari. */
            this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
    }
    Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
    Platform.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); }, token: Platform, providedIn: "root" });
    return Platform;
})();
let PlatformModule = /*@__PURE__*/ (() => {
    class PlatformModule {
    }
    PlatformModule.ɵfac = function PlatformModule_Factory(t) { return new (t || PlatformModule)(); };
    PlatformModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
    PlatformModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    return PlatformModule;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                get: () => supportsPassiveEvents = true
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
    if (scrollBehaviorSupported == null) {
        // If we're not in the browser, it can't be supported. Also check for `Element`, because
        // some projects stub out the global `document` during SSR which can throw us off.
        if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
            scrollBehaviorSupported = false;
            return scrollBehaviorSupported;
        }
        // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
        if ('scrollBehavior' in document.documentElement.style) {
            scrollBehaviorSupported = true;
        }
        else {
            // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
            // supported but it doesn't handle scroll behavior, or it has been polyfilled.
            const scrollToFunction = Element.prototype.scrollTo;
            if (scrollToFunction) {
                // We can detect if the function has been polyfilled by calling `toString` on it. Native
                // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
                // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
                // polyfilled functions as supporting scroll behavior.
                scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
            }
            else {
                scrollBehaviorSupported = false;
            }
        }
    }
    return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        const scrollContainer = document.createElement('div');
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        const content = document.createElement('div');
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        scrollContainer.parentNode.removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}
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






/***/ }),

/***/ "rDax":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
  \********************************************************************/
/*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayOutsideClickDispatcher", function() { return OverlayOutsideClickDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function() { return BaseOverlayDispatcher; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]; });

/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const scrollBehaviorSupported = /*@__PURE__*/ Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["supportsScrollBehavior"])();
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
class BlockScrollStrategy {
    constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach() { }
    /** Blocks page-level scroll while the attached overlay is open. */
    enable() {
        if (this._canBeEnabled()) {
            const root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    }
    /** Unblocks page-level scroll while the attached overlay is open. */
    disable() {
        if (this._isEnabled) {
            const html = this._document.documentElement;
            const body = this._document.body;
            const htmlStyle = html.style;
            const bodyStyle = body.style;
            const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            // Note that we don't mutate the property if the browser doesn't support `scroll-behavior`,
            // because it can throw off feature detections in `supportsScrollBehavior` which
            // checks for `'scrollBehavior' in documentElement.style`.
            if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            }
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
                bodyStyle.scrollBehavior = previousBodyScrollBehavior;
            }
        }
    }
    _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        const html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        const body = this._document.body;
        const viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
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
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
class CloseScrollStrategy {
    constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /** Detaches the overlay ref and disables the scroll strategy. */
        this._detach = () => {
            this.disable();
            if (this._overlayRef.hasAttached()) {
                this._ngZone.run(() => this._overlayRef.detach());
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables the closing of the attached overlay on scroll. */
    enable() {
        if (this._scrollSubscription) {
            return;
        }
        const stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(() => {
                const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
                    this._detach();
                }
                else {
                    this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    }
    /** Disables the closing the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Scroll strategy that doesn't do anything. */
class NoopScrollStrategy {
    /** Does nothing, as this scroll strategy is a no-op. */
    enable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    disable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    attach() { }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 * @docs-private
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(containerBounds => {
        const outsideAbove = element.bottom < containerBounds.top;
        const outsideBelow = element.top > containerBounds.bottom;
        const outsideLeft = element.right < containerBounds.left;
        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @returns Whether the element is clipped
 * @docs-private
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(scrollContainerRect => {
        const clippedAbove = element.top < scrollContainerRect.top;
        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        const clippedLeft = element.left < scrollContainerRect.left;
        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
class RepositionScrollStrategy {
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables repositioning of the attached overlay on scroll. */
    enable() {
        if (!this._scrollSubscription) {
            const throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
                this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (this._config && this._config.autoClose) {
                    const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
                    const { width, height } = this._viewportRuler.getViewportSize();
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        this.disable();
                        this._ngZone.run(() => this._overlayRef.detach());
                    }
                }
            });
        }
    }
    /** Disables repositioning of the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
}
let ScrollStrategyOptions = /*@__PURE__*/ (() => {
    class ScrollStrategyOptions {
        constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
            this._scrollDispatcher = _scrollDispatcher;
            this._viewportRuler = _viewportRuler;
            this._ngZone = _ngZone;
            /** Do nothing on scroll. */
            this.noop = () => new NoopScrollStrategy();
            /**
             * Close the overlay as soon as the user scrolls.
             * @param config Configuration to be used inside the scroll strategy.
             */
            this.close = (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config);
            /** Block scrolling. */
            this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document);
            /**
             * Update the overlay's position on scroll.
             * @param config Configuration to be used inside the scroll strategy.
             * Allows debouncing the reposition calls.
             */
            this.reposition = (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config);
            this._document = document;
        }
    }
    ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) { return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    ScrollStrategyOptions.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
})();
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
/** Initial configuration used when creating an overlay. */
class OverlayConfig {
    constructor(config) {
        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */
        this.panelClass = '';
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
            const configKeys = Object.keys(config);
            for (const key of configKeys) {
                if (config[key] !== undefined) {
                    // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                    // as "I don't know *which* key this is, so the only valid value is the intersection
                    // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                    // is not smart enough to see that the right-hand-side is actually an access of the same
                    // exact type with the same exact key, meaning that the value type must be identical.
                    // So we use `any` to work around this.
                    this[key] = config[key];
                }
            }
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
/** The points of the origin element and the overlay element to connect. */
class ConnectionPositionPair {
    constructor(origin, overlay, 
    /** Offset along the X axis. */
    offsetX, 
    /** Offset along the Y axis. */
    offsetY, 
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  @docs-private
 */
class ScrollingVisibility {
}
/** The change event emitted by the strategy when a fallback position is used. */
class ConnectedOverlayPositionChange {
    constructor(
    /** The position used as a result of this change. */
    connectionPair, 
    /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
}
/**
 * Validates whether a vertical position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "top", "bottom" or "center".`);
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * @param property Name of the property being validated.
 * @param value Value of the property being validated.
 * @docs-private
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "start", "end" or "center".`);
    }
}
let BaseOverlayDispatcher = /*@__PURE__*/ (() => {
    class BaseOverlayDispatcher {
        constructor(document) {
            /** Currently attached overlays in the order they were attached. */
            this._attachedOverlays = [];
            this._document = document;
        }
        ngOnDestroy() {
            this.detach();
        }
        /** Add a new overlay to the list of attached overlay refs. */
        add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);
            this._attachedOverlays.push(overlayRef);
        }
        /** Remove an overlay from the list of attached overlay refs. */
        remove(overlayRef) {
            const index = this._attachedOverlays.indexOf(overlayRef);
            if (index > -1) {
                this._attachedOverlays.splice(index, 1);
            }
            // Remove the global listener once there are no more overlays.
            if (this._attachedOverlays.length === 0) {
                this.detach();
            }
        }
    }
    BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) { return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    BaseOverlayDispatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function BaseOverlayDispatcher_Factory() { return new BaseOverlayDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: BaseOverlayDispatcher, providedIn: "root" });
    return BaseOverlayDispatcher;
})();
let OverlayKeyboardDispatcher = /*@__PURE__*/ (() => {
    class OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
        constructor(document) {
            super(document);
            /** Keyboard event listener that will be attached to the body. */
            this._keydownListener = (event) => {
                const overlays = this._attachedOverlays;
                for (let i = overlays.length - 1; i > -1; i--) {
                    // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                    // We want to target the most recent overlay, rather than trying to match where the event came
                    // from, because some components might open an overlay, but keep focus on a trigger element
                    // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                    // because we don't want overlays that don't handle keyboard events to block the ones below
                    // them that do.
                    if (overlays[i]._keydownEvents.observers.length > 0) {
                        overlays[i]._keydownEvents.next(event);
                        break;
                    }
                }
            };
        }
        /** Add a new overlay to the list of attached overlay refs. */
        add(overlayRef) {
            super.add(overlayRef);
            // Lazily start dispatcher once first overlay is added
            if (!this._isAttached) {
                this._document.body.addEventListener('keydown', this._keydownListener);
                this._isAttached = true;
            }
        }
        /** Detaches the global keyboard event listener. */
        detach() {
            if (this._isAttached) {
                this._document.body.removeEventListener('keydown', this._keydownListener);
                this._isAttached = false;
            }
        }
    }
    OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) { return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
    OverlayKeyboardDispatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
})();
let OverlayOutsideClickDispatcher = /*@__PURE__*/ (() => {
    class OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
        constructor(document, _platform) {
            super(document);
            this._platform = _platform;
            this._cursorStyleIsSet = false;
            /** Click event listener that will be attached to the body propagate phase. */
            this._clickListener = (event) => {
                // Get the target through the `composedPath` if possible to account for shadow DOM.
                const target = event.composedPath ? event.composedPath()[0] : event.target;
                // We copy the array because the original may be modified asynchronously if the
                // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
                // the for loop.
                const overlays = this._attachedOverlays.slice();
                // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
                // We want to target all overlays for which the click could be considered as outside click.
                // As soon as we reach an overlay for which the click is not outside click we break off
                // the loop.
                for (let i = overlays.length - 1; i > -1; i--) {
                    const overlayRef = overlays[i];
                    if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
                        continue;
                    }
                    // If it's a click inside the overlay, just break - we should do nothing
                    // If it's an outside click dispatch the mouse event, and proceed with the next overlay
                    if (overlayRef.overlayElement.contains(target)) {
                        break;
                    }
                    overlayRef._outsidePointerEvents.next(event);
                }
            };
        }
        /** Add a new overlay to the list of attached overlay refs. */
        add(overlayRef) {
            super.add(overlayRef);
            // Safari on iOS does not generate click events for non-interactive
            // elements. However, we want to receive a click for any element outside
            // the overlay. We can force a "clickable" state by setting
            // `cursor: pointer` on the document body. See:
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
            // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
            if (!this._isAttached) {
                const body = this._document.body;
                body.addEventListener('click', this._clickListener, true);
                body.addEventListener('auxclick', this._clickListener, true);
                body.addEventListener('contextmenu', this._clickListener, true);
                // click event is not fired on iOS. To make element "clickable" we are
                // setting the cursor to pointer
                if (this._platform.IOS && !this._cursorStyleIsSet) {
                    this._cursorOriginalValue = body.style.cursor;
                    body.style.cursor = 'pointer';
                    this._cursorStyleIsSet = true;
                }
                this._isAttached = true;
            }
        }
        /** Detaches the global keyboard event listener. */
        detach() {
            if (this._isAttached) {
                const body = this._document.body;
                body.removeEventListener('click', this._clickListener, true);
                body.removeEventListener('auxclick', this._clickListener, true);
                body.removeEventListener('contextmenu', this._clickListener, true);
                if (this._platform.IOS && this._cursorStyleIsSet) {
                    body.style.cursor = this._cursorOriginalValue;
                    this._cursorStyleIsSet = false;
                }
                this._isAttached = false;
            }
        }
    }
    OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) { return new (t || OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    OverlayOutsideClickDispatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayOutsideClickDispatcher_Factory() { return new OverlayOutsideClickDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); }, token: OverlayOutsideClickDispatcher, providedIn: "root" });
    return OverlayOutsideClickDispatcher;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Whether we're in a testing environment.
 * TODO(crisbeto): remove this once we have an overlay testing module.
 */
const isTestEnvironment = typeof window !== 'undefined' && !!window &&
    !!(window.__karma__ || window.jasmine);
let OverlayContainer = /*@__PURE__*/ (() => {
    class OverlayContainer {
        constructor(document, _platform) {
            this._platform = _platform;
            this._document = document;
        }
        ngOnDestroy() {
            const container = this._containerElement;
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */
        getContainerElement() {
            if (!this._containerElement) {
                this._createContainer();
            }
            return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         */
        _createContainer() {
            const containerClass = 'cdk-overlay-container';
            if (this._platform.isBrowser || isTestEnvironment) {
                const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], ` +
                    `.${containerClass}[platform="test"]`);
                // Remove any old containers from the opposite platform.
                // This can happen when transitioning from the server to the client.
                for (let i = 0; i < oppositePlatformContainers.length; i++) {
                    oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
                }
            }
            const container = this._document.createElement('div');
            container.classList.add(containerClass);
            // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
            if (isTestEnvironment) {
                container.setAttribute('platform', 'test');
            }
            else if (!this._platform.isBrowser) {
                container.setAttribute('platform', 'server');
            }
            this._document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    OverlayContainer.ɵfac = function OverlayContainer_Factory(t) { return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    OverlayContainer.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._backdropClickHandler = (event) => this._backdropClick.next(event);
        /** Stream of keydown events dispatched to this overlay. */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Stream of mouse outside events dispatched to this overlay. */
        this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    /** The overlay's HTML element */
    get overlayElement() {
        return this._pane;
    }
    /** The overlay's backdrop HTML element. */
    get backdropElement() {
        return this._backdropElement;
    }
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     */
    get hostElement() {
        return this._host;
    }
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    attach(portal) {
        let attachResult = this._portalOutlet.attach(portal);
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
            this._scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(() => {
            // The overlay could've been detached before the zone has stabilized.
            if (this.hasAttached()) {
                this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        if (this._config.disposeOnNavigation) {
            this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        this._outsideClickDispatcher.add(this);
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    detach() {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in the DOM can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        this._locationChanges.unsubscribe();
        this._outsideClickDispatcher.remove(this);
        return detachmentResult;
    }
    /** Cleans up the overlay from the DOM. */
    dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        this._outsidePointerEvents.complete();
        this._outsideClickDispatcher.remove(this);
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = null;
        }
        this._previousHostParent = this._pane = null;
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    }
    /** Whether the overlay has attached content. */
    hasAttached() {
        return this._portalOutlet.hasAttached();
    }
    /** Gets an observable that emits when the backdrop has been clicked. */
    backdropClick() {
        return this._backdropClick;
    }
    /** Gets an observable that emits when the overlay has been attached. */
    attachments() {
        return this._attachments;
    }
    /** Gets an observable that emits when the overlay has been detached. */
    detachments() {
        return this._detachments;
    }
    /** Gets an observable of keydown events targeted to this overlay. */
    keydownEvents() {
        return this._keydownEvents;
    }
    /** Gets an observable of pointer events targeted outside this overlay. */
    outsidePointerEvents() {
        return this._outsidePointerEvents;
    }
    /** Gets the current overlay configuration, which is immutable. */
    getConfig() {
        return this._config;
    }
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition() {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    }
    /** Switches to a new position strategy and updates the overlay position. */
    updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    }
    /** Update the size properties of the overlay. */
    updateSize(sizeConfig) {
        this._config = Object.assign(Object.assign({}, this._config), sizeConfig);
        this._updateElementSize();
    }
    /** Sets the LTR/RTL direction for the overlay. */
    setDirection(dir) {
        this._config = Object.assign(Object.assign({}, this._config), { direction: dir });
        this._updateElementDirection();
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    }
    /**
     * Returns the layout direction of the overlay panel.
     */
    getDirection() {
        const direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    }
    /** Switches to a new scroll strategy. */
    updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    }
    /** Updates the text direction of the overlay panel. */
    _updateElementDirection() {
        this._host.setAttribute('dir', this.getDirection());
    }
    /** Updates the size of the overlay element based on the overlay config. */
    _updateElementSize() {
        if (!this._pane) {
            return;
        }
        const style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
    }
    /** Toggles the pointer events for the overlay pane element. */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? '' : 'none';
    }
    /** Attaches a backdrop for this overlay. */
    _attachBackdrop() {
        const showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement.insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', this._backdropClickHandler);
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    if (this._backdropElement) {
                        this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    _updateStackingOrder() {
        if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
        }
    }
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop() {
        let backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        let timeoutId;
        let finishDetach = () => {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', this._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);
                if (backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (this._backdropElement == backdropToDetach) {
                this._backdropElement = null;
            }
            if (this._config.backdropClass) {
                this._toggleClasses(backdropToDetach, this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        };
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular(() => {
            backdropToDetach.addEventListener('transitionend', finishDetach);
        });
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular(() => setTimeout(finishDetach, 500));
    }
    /** Toggles a single CSS class or an array of classes on an element. */
    _toggleClasses(element, cssClasses, isAdd) {
        const classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(cssClass => {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
        });
    }
    /** Detaches the overlay content next time the zone stabilizes. */
    _detachContentWhenStable() {
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(() => {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            const subscription = this._ngZone.onStable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._attachments, this._detachments)))
                .subscribe(() => {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!this._pane || !this._host || this._pane.children.length === 0) {
                    if (this._pane && this._config.panelClass) {
                        this._toggleClasses(this._pane, this._config.panelClass, false);
                    }
                    if (this._host && this._host.parentElement) {
                        this._previousHostParent = this._host.parentElement;
                        this._previousHostParent.removeChild(this._host);
                    }
                    subscription.unsubscribe();
                }
            });
        });
    }
    /** Disposes of a scroll strategy. */
    _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        if (scrollStrategy) {
            scrollStrategy.disable();
            if (scrollStrategy.detach) {
                scrollStrategy.detach();
            }
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
// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/** Class to be added to the overlay bounding box. */
const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/** Regex used to split a string on its CSS units. */
const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
class FlexibleConnectedPositionStrategy {
    constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /** Whether the overlay was pushed in a previous positioning. */
        this._isPushed = false;
        /** Whether the overlay can be pushed on-screen on the initial open. */
        this._canPush = true;
        /** Whether the overlay can grow via flexible width/height after the initial open. */
        this._growAfterOpen = false;
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        this._hasFlexibleDimensions = true;
        /** Whether the overlay position is locked. */
        this._positionLocked = false;
        /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
        this._viewportMargin = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */
        this._scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        /** Subject that emits whenever the position changes. */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Subscription to viewport size changes. */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Default offset for the overlay along the x axis. */
        this._offsetX = 0;
        /** Default offset for the overlay along the y axis. */
        this._offsetY = 0;
        /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
        this._appliedPanelClasses = [];
        /** Observable sequence of position changes. */
        this.positionChanges = this._positionChanges;
        this.setOrigin(connectedTo);
    }
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    /** Attaches this position strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            this._isInitialRender = true;
            this.apply();
        });
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    apply() {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        const flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        let fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (let pos of this._preferredPositions) {
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            let originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            let bestFit = null;
            let bestScore = -1;
            for (const fit of flexibleFits) {
                const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition(bestFit.position, bestFit.origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(fallback.position, fallback.originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(fallback.position, fallback.originPoint);
    }
    detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    }
    /** Cleanup after the element gets destroyed. */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            });
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    reapplyLastPosition() {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            const lastPosition = this._lastPosition || this._preferredPositions[0];
            const originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
    }
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    withPositions(positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    }
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
    }
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    }
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
    }
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    withPush(canPush = true) {
        this._canPush = canPush;
        return this;
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
    }
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    setOrigin(origin) {
        this._origin = origin;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
    }
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    _getOriginPoint(originRect, pos) {
        let x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            const startX = this._isRtl() ? originRect.right : originRect.left;
            const endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        let y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x, y };
    }
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    _getOverlayPoint(originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        let overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    }
    /** Gets how well an overlay at the given point will fit within the viewport. */
    _getOverlayFit(point, rawOverlayRect, viewport, position) {
        // Round the overlay rect when comparing against the
        // viewport, because the viewport is always rounded.
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        let { x, y } = point;
        let offsetX = this._getOffset(position, 'x');
        let offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        let leftOverflow = 0 - x;
        let rightOverflow = (x + overlay.width) - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    }
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlat at some position.
     * @param viewport The geometry of the viewport.
     */
    _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            const availableHeight = viewport.bottom - point.y;
            const availableWidth = viewport.right - point.x;
            const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            const verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            const horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
        return false;
    }
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param overlay Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        // Round the overlay rect when comparing against the
        // viewport, because the viewport is always rounded.
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        const viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.
        const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        // Amount by which to push the overlay in each axis such that it remains on-screen.
        let pushX = 0;
        let pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    }
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChanges.observers.length) {
            const scrollableViewProperties = this._getScrollVisibility();
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    }
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
            return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
    }
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            const previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        const isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        const isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            const previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: top, left: left, bottom: bottom, right: right, width, height };
    }
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
        }
        else {
            const maxHeight = this._overlayRef.getConfig().maxHeight;
            const maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
    }
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        });
    }
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
        });
    }
    /** Sets positioning styles to the overlay element. */
    _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        let transformString = '';
        let offsetX = this._getOffset(position, 'x');
        let offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
            transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        // Note that this doesn't apply when we have an exact position, in which case we do want to
        // apply them because they'll be cleared from the bounding box.
        if (config.maxHeight) {
            if (hasExactPosition) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            }
            else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
            }
        }
        if (config.maxWidth) {
            if (hasExactPosition) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            }
            else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
            }
        }
        extendStyles(this._pane.style, styles);
    }
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayY(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        let styles = { top: '', bottom: '' };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            const documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    }
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayX(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        let styles = { left: '', right: '' };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        let horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            const documentWidth = this._document.documentElement.clientWidth;
            styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    _getScrollVisibility() {
        // Note: needs fresh rects since the position could've changed.
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        const scrollContainerBounds = this._scrollables.map(scrollable => {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    }
    /** Subtracts the amount that an element is overflowing on an axis from its length. */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    }
    /** Narrows the given viewport rect by the current _viewportMargin. */
    _getNarrowedViewportRect() {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    }
    /** Whether the we're dealing with an RTL context */
    _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /** Determines whether the overlay uses exact or flexible positioning. */
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
    }
    /** Retrieves the offset of a position along the x or y axis. */
    _getOffset(position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    }
    /** Validates that the current position match the expected values. */
    _validatePositions() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._preferredPositions.length) {
                throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
            }
            // TODO(crisbeto): remove these once Angular's template type
            // checking is advanced enough to catch these cases.
            this._preferredPositions.forEach(pair => {
                validateHorizontalPosition('originX', pair.originX);
                validateVerticalPosition('originY', pair.originY);
                validateHorizontalPosition('overlayX', pair.overlayX);
                validateVerticalPosition('overlayY', pair.overlayY);
            });
        }
    }
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    _addPanelClasses(cssClasses) {
        if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(cssClass => {
                if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    this._appliedPanelClasses.push(cssClass);
                    this._pane.classList.add(cssClass);
                }
            });
        }
    }
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    _clearPanelClasses() {
        if (this._pane) {
            this._appliedPanelClasses.forEach(cssClass => {
                this._pane.classList.remove(cssClass);
            });
            this._appliedPanelClasses = [];
        }
    }
    /** Returns the ClientRect of the current origin. */
    _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
        }
        // Check for Element so SVG elements are also supported.
        if (origin instanceof Element) {
            return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
        return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height,
            width
        };
    }
}
/** Shallow-extends a stylesheet object with another stylesheet object. */
function extendStyles(destination, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
        }
    }
    return destination;
}
/**
 * Extracts the pixel value as a number from a value, if it's a number
 * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
 */
function getPixelValue(input) {
    if (typeof input !== 'number' && input != null) {
        const [value, units] = input.split(cssUnitPattern);
        return (!units || units === 'px') ? parseFloat(value) : null;
    }
    return input || null;
}
/**
 * Gets a version of an element's bounding `ClientRect` where all the values are rounded down to
 * the nearest pixel. This allows us to account for the cases where there may be sub-pixel
 * deviations in the `ClientRect` returned by the browser (e.g. when zoomed in with a percentage
 * size, see #21350).
 */
function getRoundedBoundingClientRect(clientRect) {
    return {
        top: Math.floor(clientRect.top),
        right: Math.floor(clientRect.right),
        bottom: Math.floor(clientRect.bottom),
        left: Math.floor(clientRect.left),
        width: Math.floor(clientRect.width),
        height: Math.floor(clientRect.height)
    };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * @breaking-change 8.0.0
 */
class ConnectedPositionStrategy {
    constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
        this.onPositionChange = this._positionStrategy.positionChanges;
    }
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    /** Attach this position strategy to an overlay. */
    attach(overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    }
    /** Disposes all resources used by the position strategy. */
    dispose() {
        this._positionStrategy.dispose();
    }
    /** @docs-private */
    detach() {
        this._positionStrategy.detach();
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    apply() {
        this._positionStrategy.apply();
    }
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    recalculateLastPosition() {
        this._positionStrategy.reapplyLastPosition();
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    }
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
        const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    withDirection(dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    withOffsetX(offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    withOffsetY(offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    }
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    withPositions(positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    }
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    setOrigin(origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Class to be added to the overlay pane wrapper. */
const wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
class GlobalPositionStrategy {
    constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    top(value = '') {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    left(value = '') {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    bottom(value = '') {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    right(value = '') {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    width(value = '') {
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    height(value = '') {
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    centerHorizontally(offset = '') {
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    centerVertically(offset = '') {
        this.top(offset);
        this._alignItems = 'center';
        return this;
    }
    /**
     * Apply the position to the element.
     * @docs-private
     */
    apply() {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === '100%' || width === '100vw') &&
            (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
        const shouldBeFlushVertically = (height === '100%' || height === '100vh') &&
            (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
        styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
    }
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    dispose() {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = null;
        this._isDisposed = true;
    }
}
let OverlayPositionBuilder = /*@__PURE__*/ (() => {
    class OverlayPositionBuilder {
        constructor(_viewportRuler, _document, _platform, _overlayContainer) {
            this._viewportRuler = _viewportRuler;
            this._document = _document;
            this._platform = _platform;
            this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */
        global() {
            return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @param elementRef
         * @param originPos
         * @param overlayPos
         * @deprecated Use `flexibleConnectedTo` instead.
         * @breaking-change 8.0.0
         */
        connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param origin Origin relative to which to position the overlay.
         */
        flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
    }
    OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) { return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer)); };
    OverlayPositionBuilder.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Next overlay unique ID. */
let nextUniqueId = 0;
let Overlay = /*@__PURE__*/ (() => {
    class Overlay {
        constructor(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher) {
            this.scrollStrategies = scrollStrategies;
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._positionBuilder = _positionBuilder;
            this._keyboardDispatcher = _keyboardDispatcher;
            this._injector = _injector;
            this._ngZone = _ngZone;
            this._document = _document;
            this._directionality = _directionality;
            this._location = _location;
            this._outsideClickDispatcher = _outsideClickDispatcher;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */
        create(config) {
            const host = this._createHostElement();
            const pane = this._createPaneElement(host);
            const portalOutlet = this._createPortalOutlet(pane);
            const overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @returns An overlay position builder.
         */
        position() {
            return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @returns Newly-created pane element
         */
        _createPaneElement(host) {
            const pane = this._document.createElement('div');
            pane.id = `cdk-overlay-${nextUniqueId++}`;
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @returns Newly-create host element.
         */
        _createHostElement() {
            const host = this._document.createElement('div');
            this._overlayContainer.getContainerElement().appendChild(host);
            return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @param pane The DOM element to turn into a portal outlet.
         * @returns A portal outlet for the given DOM element.
         */
        _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
                this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
    }
    Overlay.ɵfac = function Overlay_Factory(t) { return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayOutsideClickDispatcher)); };
    Overlay.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Overlay, factory: Overlay.ɵfac });
    return Overlay;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
const defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/** Injection token that determines the scroll handling while the connected overlay is open. */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
let CdkOverlayOrigin = /*@__PURE__*/ (() => {
    class CdkOverlayOrigin {
        constructor(
        /** Reference to the element on which the directive is applied. */
        elementRef) {
            this.elementRef = elementRef;
        }
    }
    CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) { return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
    CdkOverlayOrigin.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkOverlayOrigin, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
    return CdkOverlayOrigin;
})();
let CdkConnectedOverlay = /*@__PURE__*/ (() => {
    class CdkConnectedOverlay {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
            this._overlay = _overlay;
            this._dir = _dir;
            this._hasBackdrop = false;
            this._lockPosition = false;
            this._growAfterOpen = false;
            this._flexibleDimensions = false;
            this._push = false;
            this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
            this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
            this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
            this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
            /** Margin between the overlay and the viewport edges. */
            this.viewportMargin = 0;
            /** Whether the overlay is open. */
            this.open = false;
            /** Whether the overlay can be closed by user interaction. */
            this.disableClose = false;
            /** Event emitted when the backdrop is clicked. */
            this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the position has changed. */
            this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the overlay has been attached. */
            this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Event emitted when the overlay has been detached. */
            this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Emits when there are keyboard events that are targeted at the overlay. */
            this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Emits when there are mouse outside click events that are targeted at the overlay. */
            this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
            this._scrollStrategyFactory = scrollStrategyFactory;
            this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */
        get offsetX() { return this._offsetX; }
        set offsetX(offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        }
        /** The offset in pixels for the overlay connection point on the y-axis */
        get offsetY() { return this._offsetY; }
        set offsetY(offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        }
        /** Whether or not the overlay should attach a backdrop. */
        get hasBackdrop() { return this._hasBackdrop; }
        set hasBackdrop(value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether or not the overlay should be locked when scrolling. */
        get lockPosition() { return this._lockPosition; }
        set lockPosition(value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get flexibleDimensions() { return this._flexibleDimensions; }
        set flexibleDimensions(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get growAfterOpen() { return this._growAfterOpen; }
        set growAfterOpen(value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get push() { return this._push; }
        set push(value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /** The associated overlay reference. */
        get overlayRef() {
            return this._overlayRef;
        }
        /** The element's layout direction. */
        get dir() {
            return this._dir ? this._dir.value : 'ltr';
        }
        ngOnDestroy() {
            this._attachSubscription.unsubscribe();
            this._detachSubscription.unsubscribe();
            this._backdropSubscription.unsubscribe();
            this._positionSubscription.unsubscribe();
            if (this._overlayRef) {
                this._overlayRef.dispose();
            }
        }
        ngOnChanges(changes) {
            if (this._position) {
                this._updatePositionStrategy(this._position);
                this._overlayRef.updateSize({
                    width: this.width,
                    minWidth: this.minWidth,
                    height: this.height,
                    minHeight: this.minHeight,
                });
                if (changes['origin'] && this.open) {
                    this._position.apply();
                }
            }
            if (changes['open']) {
                this.open ? this._attachOverlay() : this._detachOverlay();
            }
        }
        /** Creates an overlay */
        _createOverlay() {
            if (!this.positions || !this.positions.length) {
                this.positions = defaultPositionList;
            }
            const overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());
            this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
            this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
            overlayRef.keydownEvents().subscribe((event) => {
                this.overlayKeydown.next(event);
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._detachOverlay();
                }
            });
            this._overlayRef.outsidePointerEvents().subscribe((event) => {
                this.overlayOutsideClick.next(event);
            });
        }
        /** Builds the overlay config based on the directive's inputs */
        _buildConfig() {
            const positionStrategy = this._position =
                this.positionStrategy || this._createPositionStrategy();
            const overlayConfig = new OverlayConfig({
                direction: this._dir,
                positionStrategy,
                scrollStrategy: this.scrollStrategy,
                hasBackdrop: this.hasBackdrop
            });
            if (this.width || this.width === 0) {
                overlayConfig.width = this.width;
            }
            if (this.height || this.height === 0) {
                overlayConfig.height = this.height;
            }
            if (this.minWidth || this.minWidth === 0) {
                overlayConfig.minWidth = this.minWidth;
            }
            if (this.minHeight || this.minHeight === 0) {
                overlayConfig.minHeight = this.minHeight;
            }
            if (this.backdropClass) {
                overlayConfig.backdropClass = this.backdropClass;
            }
            if (this.panelClass) {
                overlayConfig.panelClass = this.panelClass;
            }
            return overlayConfig;
        }
        /** Updates the state of a position strategy, based on the values of the directive inputs. */
        _updatePositionStrategy(positionStrategy) {
            const positions = this.positions.map(currentPosition => ({
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || this.offsetX,
                offsetY: currentPosition.offsetY || this.offsetY,
                panelClass: currentPosition.panelClass || undefined,
            }));
            return positionStrategy
                .setOrigin(this.origin.elementRef)
                .withPositions(positions)
                .withFlexibleDimensions(this.flexibleDimensions)
                .withPush(this.push)
                .withGrowAfterOpen(this.growAfterOpen)
                .withViewportMargin(this.viewportMargin)
                .withLockedPosition(this.lockPosition)
                .withTransformOriginOn(this.transformOriginSelector);
        }
        /** Returns the position strategy of the overlay to be set on the overlay config */
        _createPositionStrategy() {
            const strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
            this._updatePositionStrategy(strategy);
            return strategy;
        }
        /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
        _attachOverlay() {
            if (!this._overlayRef) {
                this._createOverlay();
            }
            else {
                // Update the overlay size, in case the directive's inputs have changed
                this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }
            if (!this._overlayRef.hasAttached()) {
                this._overlayRef.attach(this._templatePortal);
            }
            if (this.hasBackdrop) {
                this._backdropSubscription = this._overlayRef.backdropClick().subscribe(event => {
                    this.backdropClick.emit(event);
                });
            }
            else {
                this._backdropSubscription.unsubscribe();
            }
            this._positionSubscription.unsubscribe();
            // Only subscribe to `positionChanges` if requested, because putting
            // together all the information for it can be expensive.
            if (this.positionChange.observers.length > 0) {
                this._positionSubscription = this._position.positionChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(() => this.positionChange.observers.length > 0))
                    .subscribe(position => {
                    this.positionChange.emit(position);
                    if (this.positionChange.observers.length === 0) {
                        this._positionSubscription.unsubscribe();
                    }
                });
            }
        }
        /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
        _detachOverlay() {
            if (this._overlayRef) {
                this._overlayRef.detach();
            }
            this._backdropSubscription.unsubscribe();
            this._positionSubscription.unsubscribe();
        }
    }
    CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) { return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
    CdkConnectedOverlay.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkConnectedOverlay, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], open: ["cdkConnectedOverlayOpen", "open"], disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"], push: ["cdkConnectedOverlayPush", "push"], positions: ["cdkConnectedOverlayPositions", "positions"], origin: ["cdkConnectedOverlayOrigin", "origin"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
    return CdkConnectedOverlay;
})();
/** @docs-private */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
let OverlayModule = /*@__PURE__*/ (() => {
    class OverlayModule {
    }
    OverlayModule.ɵfac = function OverlayModule_Factory(t) { return new (t || OverlayModule)(); };
    OverlayModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OverlayModule });
    OverlayModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
            Overlay,
            CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
        ], imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]] });
    return OverlayModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, { declarations: function () { return [CdkConnectedOverlay, CdkOverlayOrigin]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]; }, exports: function () { return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]; } }); })();
let FullscreenOverlayContainer = /*@__PURE__*/ (() => {
    class FullscreenOverlayContainer extends OverlayContainer {
        constructor(_document, platform) {
            super(_document, platform);
        }
        ngOnDestroy() {
            super.ngOnDestroy();
            if (this._fullScreenEventName && this._fullScreenListener) {
                this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
        }
        _createContainer() {
            super._createContainer();
            this._adjustParentForFullscreenChange();
            this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
        }
        _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
                return;
            }
            const fullscreenElement = this.getFullscreenElement();
            const parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
        }
        _addFullscreenChangeListener(fn) {
            const eventName = this._getEventName();
            if (eventName) {
                if (this._fullScreenListener) {
                    this._document.removeEventListener(eventName, this._fullScreenListener);
                }
                this._document.addEventListener(eventName, fn);
                this._fullScreenListener = fn;
            }
        }
        _getEventName() {
            if (!this._fullScreenEventName) {
                const _document = this._document;
                if (_document.fullscreenEnabled) {
                    this._fullScreenEventName = 'fullscreenchange';
                }
                else if (_document.webkitFullscreenEnabled) {
                    this._fullScreenEventName = 'webkitfullscreenchange';
                }
                else if (_document.mozFullScreenEnabled) {
                    this._fullScreenEventName = 'mozfullscreenchange';
                }
                else if (_document.msFullscreenEnabled) {
                    this._fullScreenEventName = 'MSFullscreenChange';
                }
            }
            return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         */
        getFullscreenElement() {
            const _document = this._document;
            return _document.fullscreenElement ||
                _document.webkitFullscreenElement ||
                _document.mozFullScreenElement ||
                _document.msFullscreenElement ||
                null;
        }
    }
    FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) { return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    FullscreenOverlayContainer.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); }, token: FullscreenOverlayContainer, providedIn: "root" });
    return FullscreenOverlayContainer;
})();
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






/***/ }),

/***/ "rSti":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.component */ "aUdj");
/* harmony import */ var _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/app-header/app-header.module */ "wSNE");
/* harmony import */ var _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/app-footer/app-footer.module */ "vvQE");
/* harmony import */ var _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogs/mint-dialog/mint-dialog.module */ "+Fro");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











// import { Carousel3DComponent } from "../shared/components/carousel-3d/carousel-3d.component";
let IndexModule = /*@__PURE__*/ (() => {
    class IndexModule {
    }
    IndexModule.ɵfac = function IndexModule_Factory(t) { return new (t || IndexModule)(); };
    IndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: IndexModule, bootstrap: [_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]] });
    IndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
                useValue: {}
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
                _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"],
                angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
                _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_6__["MintDialogModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                // FormsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '',
                        component: _index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
                    }])
            ]] });
    return IndexModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](IndexModule, { declarations: [_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
            _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"],
            _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_6__["MintDialogModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]] });
})();



/***/ }),

/***/ "u47x":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
  \*****************************************************************/
/*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function() { return ConfigurableFocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function() { return ConfigurableFocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function() { return EventListenerFocusTrapInertStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function() { return FOCUS_MONITOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function() { return FOCUS_TRAP_INERT_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function() { return HighContrastModeDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusableConfig", function() { return IsFocusableConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function() { return LIVE_ANNOUNCER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeTouchstartFromScreenReader", function() { return isFakeTouchstartFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function() { return FocusTrapManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function() { return ConfigurableFocusTrapConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** IDs are delimited by an empty space, as per the spec. */



const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    if (ids.some(existingId => existingId.trim() == id.trim())) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    const filteredIds = ids.filter(val => val != id.trim());
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace delimited) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** ID used for the body container where all messages are appended. */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */
const messageRegistry = /*@__PURE__*/ new Map();
/** Container for all registered messages. */
let messagesContainer = null;
let AriaDescriber = /*@__PURE__*/ (() => {
    class AriaDescriber {
        constructor(_document) {
            this._document = _document;
        }
        describe(hostElement, message, role) {
            if (!this._canBeDescribed(hostElement, message)) {
                return;
            }
            const key = getKey(message, role);
            if (typeof message !== 'string') {
                // We need to ensure that the element has an ID.
                setMessageId(message);
                messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
            }
            else if (!messageRegistry.has(key)) {
                this._createMessageElement(message, role);
            }
            if (!this._isElementDescribedByMessage(hostElement, key)) {
                this._addMessageReference(hostElement, key);
            }
        }
        removeDescription(hostElement, message, role) {
            if (!message || !this._isElementNode(hostElement)) {
                return;
            }
            const key = getKey(message, role);
            if (this._isElementDescribedByMessage(hostElement, key)) {
                this._removeMessageReference(hostElement, key);
            }
            // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.
            if (typeof message === 'string') {
                const registeredMessage = messageRegistry.get(key);
                if (registeredMessage && registeredMessage.referenceCount === 0) {
                    this._deleteMessageElement(key);
                }
            }
            if (messagesContainer && messagesContainer.childNodes.length === 0) {
                this._deleteMessagesContainer();
            }
        }
        /** Unregisters all created message elements and removes the message container. */
        ngOnDestroy() {
            const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);
            for (let i = 0; i < describedElements.length; i++) {
                this._removeCdkDescribedByReferenceIds(describedElements[i]);
                describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }
            if (messagesContainer) {
                this._deleteMessagesContainer();
            }
            messageRegistry.clear();
        }
        /**
         * Creates a new element in the visually hidden message container element with the message
         * as its content and adds it to the message registry.
         */
        _createMessageElement(message, role) {
            const messageElement = this._document.createElement('div');
            setMessageId(messageElement);
            messageElement.textContent = message;
            if (role) {
                messageElement.setAttribute('role', role);
            }
            this._createMessagesContainer();
            messagesContainer.appendChild(messageElement);
            messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
        }
        /** Deletes the message element from the global messages container. */
        _deleteMessageElement(key) {
            const registeredMessage = messageRegistry.get(key);
            const messageElement = registeredMessage && registeredMessage.messageElement;
            if (messagesContainer && messageElement) {
                messagesContainer.removeChild(messageElement);
            }
            messageRegistry.delete(key);
        }
        /** Creates the global container for all aria-describedby messages. */
        _createMessagesContainer() {
            if (!messagesContainer) {
                const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
                // When going from the server to the client, we may end up in a situation where there's
                // already a container on the page, but we don't have a reference to it. Clear the
                // old container so we don't get duplicates. Doing this, instead of emptying the previous
                // container, should be slightly faster.
                if (preExistingContainer && preExistingContainer.parentNode) {
                    preExistingContainer.parentNode.removeChild(preExistingContainer);
                }
                messagesContainer = this._document.createElement('div');
                messagesContainer.id = MESSAGES_CONTAINER_ID;
                // We add `visibility: hidden` in order to prevent text in this container from
                // being searchable by the browser's Ctrl + F functionality.
                // Screen-readers will still read the description for elements with aria-describedby even
                // when the description element is not visible.
                messagesContainer.style.visibility = 'hidden';
                // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
                // the description element doesn't impact page layout.
                messagesContainer.classList.add('cdk-visually-hidden');
                this._document.body.appendChild(messagesContainer);
            }
        }
        /** Deletes the global messages container. */
        _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
                messagesContainer.parentNode.removeChild(messagesContainer);
                messagesContainer = null;
            }
        }
        /** Removes all cdk-describedby messages that are hosted through the element. */
        _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
            const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
                .filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
        }
        /**
         * Adds a message reference to the element using aria-describedby and increments the registered
         * message's reference count.
         */
        _addMessageReference(element, key) {
            const registeredMessage = messageRegistry.get(key);
            // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.
            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
        }
        /**
         * Removes a message reference from the element using aria-describedby
         * and decrements the registered message's reference count.
         */
        _removeMessageReference(element, key) {
            const registeredMessage = messageRegistry.get(key);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        /** Returns true if the element has been described by the provided message ID. */
        _isElementDescribedByMessage(element, key) {
            const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            const registeredMessage = messageRegistry.get(key);
            const messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
        }
        /** Determines whether a message can be described on a particular element. */
        _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
                return false;
            }
            if (message && typeof message === 'object') {
                // We'd have to make some assumptions about the description element's text, if the consumer
                // passed in an element. Assume that if an element is passed in, the consumer has verified
                // that it can be used as a description.
                return true;
            }
            const trimmedMessage = message == null ? '' : `${message}`.trim();
            const ariaLabel = element.getAttribute('aria-label');
            // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.
            return trimmedMessage ? (!ariaLabel || ariaLabel.trim() !== trimmedMessage) : false;
        }
        /** Checks whether a node is an Element node. */
        _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
        }
    }
    AriaDescriber.ɵfac = function AriaDescriber_Factory(t) { return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    AriaDescriber.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
    return AriaDescriber;
})();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
    return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element) {
    if (!element.id) {
        element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
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
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        this._homeAndEnd = false;
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = (item) => item.disabled;
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Stream that emits whenever the active item of the list manager changes. */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe((newItems) => {
                if (this._activeItem) {
                    const itemArray = newItems.toArray();
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    skipPredicate(predicate) {
        this._skipPredicateFn = predicate;
        return this;
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    withWrap(shouldWrap = true) {
        this._wrap = shouldWrap;
        return this;
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    withVerticalOrientation(enabled = true) {
        this._vertical = enabled;
        return this;
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    withHorizontalOrientation(direction) {
        this._horizontal = direction;
        return this;
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    withAllowedModifierKeys(keys) {
        this._allowedModifierKeys = keys;
        return this;
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    withTypeAhead(debounceInterval = 200) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && (this._items.length &&
            this._items.some(item => typeof item.getLabel !== 'function'))) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(letter => this._pressedLetters.push(letter)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this._pressedLetters.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this._pressedLetters.join(''))).subscribe(inputString => {
            const items = this._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                const index = (this._activeItemIndex + i) % items.length;
                const item = items[index];
                if (!this._skipPredicateFn(item) &&
                    item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                    this.setActiveItem(index);
                    break;
                }
            }
            this._pressedLetters = [];
        });
        return this;
    }
    /**
     * Configures the key manager to activate the first and last items
     * respectively when the Home or End key is pressed.
     * @param enabled Whether pressing the Home or End key activates the first/last item.
     */
    withHomeAndEnd(enabled = true) {
        this._homeAndEnd = enabled;
        return this;
    }
    setActiveItem(item) {
        const previousActiveItem = this._activeItem;
        this.updateActiveItem(item);
        if (this._activeItem !== previousActiveItem) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event) {
        const keyCode = event.keyCode;
        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        const isModifierAllowed = modifiers.every(modifier => {
            return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                if (this._homeAndEnd && isModifierAllowed) {
                    this.setFirstItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                if (this._homeAndEnd && isModifierAllowed) {
                    this.setLastItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    }
    /** Index of the currently active item. */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /** The active item. */
    get activeItem() {
        return this._activeItem;
    }
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    /** Sets the active item to the first enabled item in the list. */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /** Sets the active item to the last enabled item in the list. */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /** Sets the active item to the next enabled item in the list. */
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /** Sets the active item to a previous enabled item in the list. */
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(item) {
        const itemArray = this._getItemsArray();
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        const activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    _setActiveInWrapMode(delta) {
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            const item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    _setActiveItemByIndex(index, fallbackDelta) {
        const items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
    /** Returns the items as an array. */
    _getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ActiveDescendantKeyManager extends ListKeyManager {
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
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
class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this._origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    setFocusOrigin(origin) {
        this._origin = origin;
        return this;
    }
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
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
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
    constructor() {
        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
    }
}
let InteractivityChecker = /*@__PURE__*/ (() => {
    class InteractivityChecker {
        constructor(_platform) {
            this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param element Element to be checked.
         * @returns Whether the element is disabled.
         */
        isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
        }
        /**
         * Gets whether an element is visible for the purposes of interactivity.
         *
         * This will capture states like `display: none` and `visibility: hidden`, but not things like
         * being clipped by an `overflow: hidden` parent or being outside the viewport.
         *
         * @returns Whether the element is visible.
         */
        isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
        }
        /**
         * Gets whether an element can be reached via Tab key.
         * Assumes that the element has already been checked with isFocusable.
         *
         * @param element Element to be checked.
         * @returns Whether the element is tabbable.
         */
        isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
                return false;
            }
            const frameElement = getFrameElement(getWindow(element));
            if (frameElement) {
                // Frame elements inherit their tabindex onto all child elements.
                if (getTabIndexValue(frameElement) === -1) {
                    return false;
                }
                // Browsers disable tabbing to an element inside of an invisible frame.
                if (!this.isVisible(frameElement)) {
                    return false;
                }
            }
            let nodeName = element.nodeName.toLowerCase();
            let tabIndexValue = getTabIndexValue(element);
            if (element.hasAttribute('contenteditable')) {
                return tabIndexValue !== -1;
            }
            if (nodeName === 'iframe' || nodeName === 'object') {
                // The frame or object's content may be tabbable depending on the content, but it's
                // not possibly to reliably detect the content of the frames. We always consider such
                // elements as non-tabbable.
                return false;
            }
            // In iOS, the browser only considers some specific elements as tabbable.
            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
                return false;
            }
            if (nodeName === 'audio') {
                // Audio elements without controls enabled are never tabbable, regardless
                // of the tabindex attribute explicitly being set.
                if (!element.hasAttribute('controls')) {
                    return false;
                }
                // Audio elements with controls are by default tabbable unless the
                // tabindex attribute is set to `-1` explicitly.
                return tabIndexValue !== -1;
            }
            if (nodeName === 'video') {
                // For all video elements, if the tabindex attribute is set to `-1`, the video
                // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
                // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
                // tabindex attribute is the source of truth here.
                if (tabIndexValue === -1) {
                    return false;
                }
                // If the tabindex is explicitly set, and not `-1` (as per check before), the
                // video element is always tabbable (regardless of whether it has controls or not).
                if (tabIndexValue !== null) {
                    return true;
                }
                // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
                // has controls enabled. Firefox is special as videos are always tabbable regardless
                // of whether there are controls or not.
                return this._platform.FIREFOX || element.hasAttribute('controls');
            }
            return element.tabIndex >= 0;
        }
        /**
         * Gets whether an element can be focused by the user.
         *
         * @param element Element to be checked.
         * @param config The config object with options to customize this method's behavior
         * @returns Whether the element is focusable.
         */
        isFocusable(element, config) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) &&
                ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
        }
    }
    InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) { return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); };
    InteractivityChecker.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
    try {
        return window.frameElement;
    }
    catch (_a) {
        return null;
    }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    let tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    let nodeName = element.nodeName.toLowerCase();
    let inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */
class FocusTrap {
    constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = () => this.focusLastTabbableElement();
        this.endAnchorListener = () => this.focusFirstTabbableElement();
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /** Whether the focus trap is active. */
    get enabled() { return this._enabled; }
    set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);
            this._toggleAnchorTabIndex(value, this._endAnchor);
        }
    }
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfully. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors() {
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(() => {
            if (!this._startAnchor) {
                this._startAnchor = this._createAnchor();
                this._startAnchor.addEventListener('focus', this.startAnchorListener);
            }
            if (!this._endAnchor) {
                this._endAnchor = this._createAnchor();
                this._endAnchor.addEventListener('focus', this.endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusInitialElementWhenReady() {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusInitialElement()));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusFirstTabbableElementWhenReady() {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusFirstTabbableElement()));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusLastTabbableElementWhenReady() {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusLastTabbableElement()));
        });
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    _getRegionBoundary(bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        let markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` +
            `[cdkFocusRegion${bound}], ` +
            `[cdk-focus-${bound}]`);
        for (let i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated ` +
                    `attribute will be removed in 8.0.0.`, markers[i]);
            }
            else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0.`, markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfully.
     */
    focusInitialElement() {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` +
            `[cdkFocusInitial]`);
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` +
                    `use 'cdkFocusInitial' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0`, redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
                !this._checker.isFocusable(redirectToElement)) {
                console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
            }
            if (!this._checker.isFocusable(redirectToElement)) {
                const focusableChild = this._getFirstTabbableElement(redirectToElement);
                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus();
                return !!focusableChild;
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusFirstTabbableElement() {
        const redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusLastTabbableElement() {
        const redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfully been attached.
     */
    hasAttached() {
        return this._hasAttached;
    }
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        let children = root.children || root.childNodes;
        for (let i = 0; i < children.length; i++) {
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        let children = root.children || root.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Creates an anchor element. */
    _createAnchor() {
        const anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    _toggleAnchorTabIndex(isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    }
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */
    toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);
            this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
    }
    /** Executes a function when the zone is stable. */
    _executeOnStable(fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    }
}
let FocusTrapFactory = /*@__PURE__*/ (() => {
    class FocusTrapFactory {
        constructor(_checker, _ngZone, _document) {
            this._checker = _checker;
            this._ngZone = _ngZone;
            this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param element The element around which focus will be trapped.
         * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @returns The created focus trap instance.
         */
        create(element, deferCaptureElements = false) {
            return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
        }
    }
    FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) { return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    FocusTrapFactory.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
})();
let CdkTrapFocus = /*@__PURE__*/ (() => {
    class CdkTrapFocus {
        constructor(_elementRef, _focusTrapFactory, _document) {
            this._elementRef = _elementRef;
            this._focusTrapFactory = _focusTrapFactory;
            /** Previously focused element to restore focus to upon destroy when using autoCapture. */
            this._previouslyFocusedElement = null;
            this._document = _document;
            this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /** Whether the focus trap is active. */
        get enabled() { return this.focusTrap.enabled; }
        set enabled(value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        /**
         * Whether the directive should automatically move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         */
        get autoCapture() { return this._autoCapture; }
        set autoCapture(value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
        ngOnDestroy() {
            this.focusTrap.destroy();
            // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.
            if (this._previouslyFocusedElement) {
                this._previouslyFocusedElement.focus();
                this._previouslyFocusedElement = null;
            }
        }
        ngAfterContentInit() {
            this.focusTrap.attachAnchors();
            if (this.autoCapture) {
                this._captureFocus();
            }
        }
        ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
                this.focusTrap.attachAnchors();
            }
        }
        ngOnChanges(changes) {
            const autoCaptureChange = changes['autoCapture'];
            if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture &&
                this.focusTrap.hasAttached()) {
                this._captureFocus();
            }
        }
        _captureFocus() {
            var _a, _b;
            // If the `activeElement` is inside a shadow root, `document.activeElement` will
            // point to the shadow root so we have to descend into it ourselves.
            const activeElement = (_a = this._document) === null || _a === void 0 ? void 0 : _a.activeElement;
            this._previouslyFocusedElement =
                ((_b = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement) || activeElement;
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) { return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    CdkTrapFocus.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkTrapFocus, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: ["cdkTrapFocus", "enabled"], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"] }, exportAs: ["cdkTrapFocus"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
    return CdkTrapFocus;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends FocusTrap {
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        super(_element, _checker, _ngZone, _document, config.defer);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /** Whether the FocusTrap is enabled. */
    get enabled() { return this._enabled; }
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */
function closest(element, selector) {
    if (!(element instanceof Node)) {
        return null;
    }
    let curr = element;
    while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
    }
    return curr && (hasNativeClosest ?
        curr.closest(selector) : polyfillClosest(curr, selector));
}
/** Polyfill for browsers without Element.closest. */
function polyfillClosest(element, selector) {
    let curr = element;
    while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
    }
    return (curr || null);
}
const hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/** IE 11 compatible matches implementation. */
function matches(element, selector) {
    return element.matches ?
        element.matches(selector) :
        element['msMatchesSelector'](selector);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
    constructor() {
        /** Focus event handler. */
        this._listener = null;
    }
    /** Adds a document event listener that keeps focus inside the FocusTrap. */
    preventFocus(focusTrap) {
        // Ensure there's only one listener per document
        if (this._listener) {
            focusTrap._document.removeEventListener('focus', this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
            focusTrap._document.addEventListener('focus', this._listener, true);
        });
    }
    /** Removes the event listener added in preventFocus. */
    allowFocus(focusTrap) {
        if (!this._listener) {
            return;
        }
        focusTrap._document.removeEventListener('focus', this._listener, true);
        this._listener = null;
    }
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */
    _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        // Don't refocus if target was in an overlay, because the overlay might be associated
        // with an element inside the FocusTrap, ex. mat-select.
        if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(() => {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                    focusTrap.focusFirstTabbableElement();
                }
            });
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
 * Configuration for creating a ConfigurableFocusTrap.
 */
class ConfigurableFocusTrapConfig {
    constructor() {
        /**
         * Whether to defer the creation of FocusTrap elements to be
         * done manually by the user. Default is to create them
         * automatically.
         */
        this.defer = false;
    }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
let FocusTrapManager = /*@__PURE__*/ (() => {
    class FocusTrapManager {
        constructor() {
            // A stack of the FocusTraps on the page. Only the FocusTrap at the
            // top of the stack is active.
            this._focusTrapStack = [];
        }
        /**
         * Disables the FocusTrap at the top of the stack, and then pushes
         * the new FocusTrap onto the stack.
         */
        register(focusTrap) {
            // Dedupe focusTraps that register multiple times.
            this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
            let stack = this._focusTrapStack;
            if (stack.length) {
                stack[stack.length - 1]._disable();
            }
            stack.push(focusTrap);
            focusTrap._enable();
        }
        /**
         * Removes the FocusTrap from the stack, and activates the
         * FocusTrap that is the new top of the stack.
         */
        deregister(focusTrap) {
            focusTrap._disable();
            const stack = this._focusTrapStack;
            const i = stack.indexOf(focusTrap);
            if (i !== -1) {
                stack.splice(i, 1);
                if (stack.length) {
                    stack[stack.length - 1]._enable();
                }
            }
        }
    }
    FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) { return new (t || FocusTrapManager)(); };
    FocusTrapManager.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusTrapManager_Factory() { return new FocusTrapManager(); }, token: FocusTrapManager, providedIn: "root" });
    return FocusTrapManager;
})();
let ConfigurableFocusTrapFactory = /*@__PURE__*/ (() => {
    class ConfigurableFocusTrapFactory {
        constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
            this._checker = _checker;
            this._ngZone = _ngZone;
            this._focusTrapManager = _focusTrapManager;
            this._document = _document;
            // TODO split up the strategies into different modules, similar to DateAdapter.
            this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
        }
        create(element, config = new ConfigurableFocusTrapConfig()) {
            let configObject;
            if (typeof config === 'boolean') {
                configObject = new ConfigurableFocusTrapConfig();
                configObject.defer = config;
            }
            else {
                configObject = config;
            }
            return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
        }
    }
    ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) { return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8)); };
    ConfigurableFocusTrapFactory.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConfigurableFocusTrapFactory_Factory() { return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8)); }, token: ConfigurableFocusTrapFactory, providedIn: "root" });
    return ConfigurableFocusTrapFactory;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const LIVE_ANNOUNCER_ELEMENT_TOKEN = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/** @docs-private */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
let LiveAnnouncer = /*@__PURE__*/ (() => {
    class LiveAnnouncer {
        constructor(elementToken, _ngZone, _document, _defaultOptions) {
            this._ngZone = _ngZone;
            this._defaultOptions = _defaultOptions;
            // We inject the live element and document as `any` because the constructor signature cannot
            // reference browser globals (HTMLElement, Document) on non-browser environments, since having
            // a class decorator causes TypeScript to preserve the constructor signature types.
            this._document = _document;
            this._liveElement = elementToken || this._createLiveElement();
        }
        announce(message, ...args) {
            const defaultOptions = this._defaultOptions;
            let politeness;
            let duration;
            if (args.length === 1 && typeof args[0] === 'number') {
                duration = args[0];
            }
            else {
                [politeness, duration] = args;
            }
            this.clear();
            clearTimeout(this._previousTimeout);
            if (!politeness) {
                politeness =
                    (defaultOptions && defaultOptions.politeness) ? defaultOptions.politeness : 'polite';
            }
            if (duration == null && defaultOptions) {
                duration = defaultOptions.duration;
            }
            // TODO: ensure changing the politeness works on all environments we support.
            this._liveElement.setAttribute('aria-live', politeness);
            // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).
            return this._ngZone.runOutsideAngular(() => {
                return new Promise(resolve => {
                    clearTimeout(this._previousTimeout);
                    this._previousTimeout = setTimeout(() => {
                        this._liveElement.textContent = message;
                        resolve();
                        if (typeof duration === 'number') {
                            this._previousTimeout = setTimeout(() => this.clear(), duration);
                        }
                    }, 100);
                });
            });
        }
        /**
         * Clears the current text from the announcer element. Can be used to prevent
         * screen readers from reading the text out again while the user is going
         * through the page landmarks.
         */
        clear() {
            if (this._liveElement) {
                this._liveElement.textContent = '';
            }
        }
        ngOnDestroy() {
            clearTimeout(this._previousTimeout);
            if (this._liveElement && this._liveElement.parentNode) {
                this._liveElement.parentNode.removeChild(this._liveElement);
                this._liveElement = null;
            }
        }
        _createLiveElement() {
            const elementClass = 'cdk-live-announcer-element';
            const previousElements = this._document.getElementsByClassName(elementClass);
            const liveEl = this._document.createElement('div');
            // Remove any old containers. This can happen when coming in from a server-side-rendered page.
            for (let i = 0; i < previousElements.length; i++) {
                previousElements[i].parentNode.removeChild(previousElements[i]);
            }
            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');
            this._document.body.appendChild(liveEl);
            return liveEl;
        }
    }
    LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) { return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); };
    LiveAnnouncer.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); }, token: LiveAnnouncer, providedIn: "root" });
    return LiveAnnouncer;
})();
let CdkAriaLive = /*@__PURE__*/ (() => {
    class CdkAriaLive {
        constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
            this._elementRef = _elementRef;
            this._liveAnnouncer = _liveAnnouncer;
            this._contentObserver = _contentObserver;
            this._ngZone = _ngZone;
            this._politeness = 'polite';
        }
        /** The aria-live politeness level to use when announcing messages. */
        get politeness() { return this._politeness; }
        set politeness(value) {
            this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
            if (this._politeness === 'off') {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                    this._subscription = null;
                }
            }
            else if (!this._subscription) {
                this._subscription = this._ngZone.runOutsideAngular(() => {
                    return this._contentObserver
                        .observe(this._elementRef)
                        .subscribe(() => {
                        // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                        const elementText = this._elementRef.nativeElement.textContent;
                        // The `MutationObserver` fires also for attribute
                        // changes which we don't want to announce.
                        if (elementText !== this._previousAnnouncedText) {
                            this._liveAnnouncer.announce(elementText, this._politeness);
                            this._previousAnnouncedText = elementText;
                        }
                    });
                });
            }
        }
        ngOnDestroy() {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
        }
    }
    CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) { return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CdkAriaLive.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkAriaLive, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: ["cdkAriaLive", "politeness"] }, exportAs: ["cdkAriaLive"] });
    return CdkAriaLive;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
    // We can typically distinguish between these faked mousedown events and real mousedown events
    // using the "buttons" property. While real mousedowns will indicate the mouse button that was
    // pressed (e.g. "1" for the left mouse button), faked mousedowns will usually set the property
    // value to 0.
    return event.buttons === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
    const touch = (event.touches && event.touches[0]) ||
        (event.changedTouches && event.changedTouches[0]);
    // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
    // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
    // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
    // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
    return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) &&
        (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
const TOUCH_BUFFER_MS = 650;
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = /*@__PURE__*/ Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
    passive: true,
    capture: true
});
let FocusMonitor = /*@__PURE__*/ (() => {
    class FocusMonitor {
        constructor(_ngZone, _platform, 
        /** @breaking-change 11.0.0 make document required */
        document, options) {
            this._ngZone = _ngZone;
            this._platform = _platform;
            /** The focus origin that the next focus event is a result of. */
            this._origin = null;
            /** Whether the window has just been focused. */
            this._windowFocused = false;
            /** Map of elements being monitored to their info. */
            this._elementInfo = new Map();
            /** The number of elements currently being monitored. */
            this._monitoredElementCount = 0;
            /**
             * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
             * as well as the number of monitored elements that they contain. We have to treat focus/blur
             * handlers differently from the rest of the events, because the browser won't emit events
             * to the document when focus moves inside of a shadow root.
             */
            this._rootNodeFocusListenerCount = new Map();
            /**
             * Event listener for `keydown` events on the document.
             * Needs to be an arrow function in order to preserve the context when it gets bound.
             */
            this._documentKeydownListener = () => {
                // On keydown record the origin and clear any touch event that may be in progress.
                this._lastTouchTarget = null;
                this._setOriginForCurrentEventQueue('keyboard');
            };
            /**
             * Event listener for `mousedown` events on the document.
             * Needs to be an arrow function in order to preserve the context when it gets bound.
             */
            this._documentMousedownListener = (event) => {
                // On mousedown record the origin only if there is not touch
                // target, since a mousedown can happen as a result of a touch event.
                if (!this._lastTouchTarget) {
                    // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
                    // Resolve the focus source to `keyboard` if we detect one of them.
                    const source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';
                    this._setOriginForCurrentEventQueue(source);
                }
            };
            /**
             * Event listener for `touchstart` events on the document.
             * Needs to be an arrow function in order to preserve the context when it gets bound.
             */
            this._documentTouchstartListener = (event) => {
                // Some screen readers will fire a fake `touchstart` event if an element is activated using
                // the keyboard while on a device with a touchsreen. Consider such events as keyboard focus.
                if (!isFakeTouchstartFromScreenReader(event)) {
                    // When the touchstart event fires the focus event is not yet in the event queue. This means
                    // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
                    // see if a focus happens.
                    if (this._touchTimeoutId != null) {
                        clearTimeout(this._touchTimeoutId);
                    }
                    this._lastTouchTarget = getTarget(event);
                    this._touchTimeoutId = setTimeout(() => this._lastTouchTarget = null, TOUCH_BUFFER_MS);
                }
                else if (!this._lastTouchTarget) {
                    this._setOriginForCurrentEventQueue('keyboard');
                }
            };
            /**
             * Event listener for `focus` events on the window.
             * Needs to be an arrow function in order to preserve the context when it gets bound.
             */
            this._windowFocusListener = () => {
                // Make a note of when the window regains focus, so we can
                // restore the origin info for the focused element.
                this._windowFocused = true;
                this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
            };
            /**
             * Event listener for `focus` and 'blur' events on the document.
             * Needs to be an arrow function in order to preserve the context when it gets bound.
             */
            this._rootNodeFocusAndBlurListener = (event) => {
                const target = getTarget(event);
                const handler = event.type === 'focus' ? this._onFocus : this._onBlur;
                // We need to walk up the ancestor chain in order to support `checkChildren`.
                for (let element = target; element; element = element.parentElement) {
                    handler.call(this, event, element);
                }
            };
            this._document = document;
            this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0 /* IMMEDIATE */;
        }
        monitor(element, checkChildren = false) {
            const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
            // Do nothing if we're not on the browser platform or the passed in node isn't an element.
            if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
            // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
            // the shadow root, rather than the `document`, because the browser won't emit focus events
            // to the `document`, if focus is moving within the same shadow root.
            const rootNode = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement) || this._getDocument();
            const cachedInfo = this._elementInfo.get(nativeElement);
            // Check if we're already monitoring this element.
            if (cachedInfo) {
                if (checkChildren) {
                    // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                    // observers into ones that behave as if `checkChildren` was turned on. We need a more
                    // robust solution.
                    cachedInfo.checkChildren = true;
                }
                return cachedInfo.subject;
            }
            // Create monitored element info.
            const info = {
                checkChildren: checkChildren,
                subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
                rootNode
            };
            this._elementInfo.set(nativeElement, info);
            this._registerGlobalListeners(info);
            return info.subject;
        }
        stopMonitoring(element) {
            const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
            const elementInfo = this._elementInfo.get(nativeElement);
            if (elementInfo) {
                elementInfo.subject.complete();
                this._setClasses(nativeElement);
                this._elementInfo.delete(nativeElement);
                this._removeGlobalListeners(elementInfo);
            }
        }
        focusVia(element, origin, options) {
            const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
            const focusedElement = this._getDocument().activeElement;
            // If the element is focused already, calling `focus` again won't trigger the event listener
            // which means that the focus classes won't be updated. If that's the case, update the classes
            // directly without waiting for an event.
            if (nativeElement === focusedElement) {
                this._getClosestElementsInfo(nativeElement)
                    .forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
            }
            else {
                this._setOriginForCurrentEventQueue(origin);
                // `focus` isn't available on the server
                if (typeof nativeElement.focus === 'function') {
                    nativeElement.focus(options);
                }
            }
        }
        ngOnDestroy() {
            this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
        }
        /** Access injected document if available or fallback to global document reference */
        _getDocument() {
            return this._document || document;
        }
        /** Use defaultView of injected document if available or fallback to global window reference */
        _getWindow() {
            const doc = this._getDocument();
            return doc.defaultView || window;
        }
        _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
                element.classList.add(className);
            }
            else {
                element.classList.remove(className);
            }
        }
        _getFocusOrigin(event) {
            // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
            // 1) The window has just regained focus, in which case we want to restore the focused state of
            //    the element from before the window blurred.
            // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
            // 3) The element was programmatically focused, in which case we should mark the origin as
            //    'program'.
            if (this._origin) {
                return this._origin;
            }
            if (this._windowFocused && this._lastFocusOrigin) {
                return this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                return 'touch';
            }
            else {
                return 'program';
            }
        }
        /**
         * Sets the focus classes on the element based on the given focus origin.
         * @param element The element to update the classes on.
         * @param origin The focus origin.
         */
        _setClasses(element, origin) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
        /**
         * Sets the origin and schedules an async function to clear it at the end of the event queue.
         * If the detection mode is 'eventual', the origin is never cleared.
         * @param origin The origin to set.
         */
        _setOriginForCurrentEventQueue(origin) {
            this._ngZone.runOutsideAngular(() => {
                this._origin = origin;
                if (this._detectionMode === 0 /* IMMEDIATE */) {
                    // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                    // tick after the interaction event fired. To ensure the focus origin is always correct,
                    // the focus origin will be determined at the beginning of the next tick.
                    this._originTimeoutId = setTimeout(() => this._origin = null, 1);
                }
            });
        }
        /**
         * Checks whether the given focus event was caused by a touchstart event.
         * @param event The focus event to check.
         * @returns Whether the event was caused by a touch.
         */
        _wasCausedByTouch(event) {
            // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
            // Consider the following dom structure:
            //
            // <div #parent tabindex="0" cdkFocusClasses>
            //   <div #child (click)="#parent.focus()"></div>
            // </div>
            //
            // If the user touches the #child element and the #parent is programmatically focused as a
            // result, this code will still consider it to have been caused by the touch event and will
            // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
            // relatively small edge-case that can be worked around by using
            // focusVia(parentEl, 'program') to focus the parent element.
            //
            // If we decide that we absolutely must handle this case correctly, we can do so by listening
            // for the first focus event after the touchstart, and then the first blur event after that
            // focus event. When that blur event fires we know that whatever follows is not a result of the
            // touchstart.
            const focusTarget = getTarget(event);
            return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
                (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
        }
        /**
         * Handles focus events on a registered element.
         * @param event The focus event.
         * @param element The monitored element.
         */
        _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.
            const elementInfo = this._elementInfo.get(element);
            if (!elementInfo || (!elementInfo.checkChildren && element !== getTarget(event))) {
                return;
            }
            this._originChanged(element, this._getFocusOrigin(event), elementInfo);
        }
        /**
         * Handles blur events on a registered element.
         * @param event The blur event.
         * @param element The monitored element.
         */
        _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.
            const elementInfo = this._elementInfo.get(element);
            if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
                element.contains(event.relatedTarget))) {
                return;
            }
            this._setClasses(element);
            this._emitOrigin(elementInfo.subject, null);
        }
        _emitOrigin(subject, origin) {
            this._ngZone.run(() => subject.next(origin));
        }
        _registerGlobalListeners(elementInfo) {
            if (!this._platform.isBrowser) {
                return;
            }
            const rootNode = elementInfo.rootNode;
            const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
            if (!rootNodeFocusListeners) {
                this._ngZone.runOutsideAngular(() => {
                    rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                    rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                });
            }
            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
            // Register global listeners when first element is monitored.
            if (++this._monitoredElementCount === 1) {
                // Note: we listen to events in the capture phase so we
                // can detect them even if the user stops propagation.
                this._ngZone.runOutsideAngular(() => {
                    const document = this._getDocument();
                    const window = this._getWindow();
                    document.addEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
                    document.addEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
                    document.addEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
                    window.addEventListener('focus', this._windowFocusListener);
                });
            }
        }
        _removeGlobalListeners(elementInfo) {
            const rootNode = elementInfo.rootNode;
            if (this._rootNodeFocusListenerCount.has(rootNode)) {
                const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
                if (rootNodeFocusListeners > 1) {
                    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
                }
                else {
                    rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                    rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                    this._rootNodeFocusListenerCount.delete(rootNode);
                }
            }
            // Unregister global listeners when last element is unmonitored.
            if (!--this._monitoredElementCount) {
                const document = this._getDocument();
                const window = this._getWindow();
                document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
                document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
                document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
                window.removeEventListener('focus', this._windowFocusListener);
                // Clear timeouts for all potentially pending timeouts to prevent the leaks.
                clearTimeout(this._windowFocusTimeoutId);
                clearTimeout(this._touchTimeoutId);
                clearTimeout(this._originTimeoutId);
            }
        }
        /** Updates all the state on an element once its focus origin has changed. */
        _originChanged(element, origin, elementInfo) {
            this._setClasses(element, origin);
            this._emitOrigin(elementInfo.subject, origin);
            this._lastFocusOrigin = origin;
        }
        /**
         * Collects the `MonitoredElementInfo` of a particular element and
         * all of its ancestors that have enabled `checkChildren`.
         * @param element Element from which to start the search.
         */
        _getClosestElementsInfo(element) {
            const results = [];
            this._elementInfo.forEach((info, currentElement) => {
                if (currentElement === element || (info.checkChildren && currentElement.contains(element))) {
                    results.push([currentElement, info]);
                }
            });
            return results;
        }
    }
    FocusMonitor.ɵfac = function FocusMonitor_Factory(t) { return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); };
    FocusMonitor.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); }, token: FocusMonitor, providedIn: "root" });
    return FocusMonitor;
})();
/** Gets the target of an event, accounting for Shadow DOM. */
function getTarget(event) {
    // If an event is bound outside the Shadow DOM, the `event.target` will
    // point to the shadow root so we have to use `composedPath` instead.
    return (event.composedPath ? event.composedPath()[0] : event.target);
}
let CdkMonitorFocus = /*@__PURE__*/ (() => {
    class CdkMonitorFocus {
        constructor(_elementRef, _focusMonitor) {
            this._elementRef = _elementRef;
            this._focusMonitor = _focusMonitor;
            this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        ngAfterViewInit() {
            const element = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus'))
                .subscribe(origin => this.cdkFocusChange.emit(origin));
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
            if (this._monitorSubscription) {
                this._monitorSubscription.unsubscribe();
            }
        }
    }
    CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) { return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor)); };
    CdkMonitorFocus.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkMonitorFocus, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" } });
    return CdkMonitorFocus;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
let HighContrastModeDetector = /*@__PURE__*/ (() => {
    class HighContrastModeDetector {
        constructor(_platform, document) {
            this._platform = _platform;
            this._document = document;
        }
        /** Gets the current high-contrast-mode for the page. */
        getHighContrastMode() {
            if (!this._platform.isBrowser) {
                return 0 /* NONE */;
            }
            // Create a test element with an arbitrary background-color that is neither black nor
            // white; high-contrast mode will coerce the color to either black or white. Also ensure that
            // appending the test element to the DOM does not affect layout by absolutely positioning it
            const testElement = this._document.createElement('div');
            testElement.style.backgroundColor = 'rgb(1,2,3)';
            testElement.style.position = 'absolute';
            this._document.body.appendChild(testElement);
            // Get the computed style for the background color, collapsing spaces to normalize between
            // browsers. Once we get this color, we no longer need the test element. Access the `window`
            // via the document so we can fake it in tests. Note that we have extra null checks, because
            // this logic will likely run during app bootstrap and throwing can break the entire app.
            const documentWindow = this._document.defaultView || window;
            const computedStyle = (documentWindow && documentWindow.getComputedStyle) ?
                documentWindow.getComputedStyle(testElement) : null;
            const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
            this._document.body.removeChild(testElement);
            switch (computedColor) {
                case 'rgb(0,0,0)': return 2 /* WHITE_ON_BLACK */;
                case 'rgb(255,255,255)': return 1 /* BLACK_ON_WHITE */;
            }
            return 0 /* NONE */;
        }
        /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
        _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
                const bodyClasses = this._document.body.classList;
                // IE11 doesn't support `classList` operations with multiple arguments
                bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
                bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
                const mode = this.getHighContrastMode();
                if (mode === 1 /* BLACK_ON_WHITE */) {
                    bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                    bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
                }
                else if (mode === 2 /* WHITE_ON_BLACK */) {
                    bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                    bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
                }
            }
        }
    }
    HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) { return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
    HighContrastModeDetector.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function HighContrastModeDetector_Factory() { return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: HighContrastModeDetector, providedIn: "root" });
    return HighContrastModeDetector;
})();
let A11yModule = /*@__PURE__*/ (() => {
    class A11yModule {
        constructor(highContrastModeDetector) {
            highContrastModeDetector._applyBodyHighContrastModeCssClasses();
        }
    }
    A11yModule.ɵfac = function A11yModule_Factory(t) { return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector)); };
    A11yModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: A11yModule });
    A11yModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]] });
    return A11yModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, { declarations: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]; }, exports: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; } }); })();
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






/***/ }),

/***/ "vxfF":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
  \**********************************************************************/
/*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function() { return CdkScrollableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The injection token used to specify the virtual scrolling strategy. */




const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Virtual scrolling strategy for lists with items of known fixed size. */
class FixedSizeVirtualScrollStrategy {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /** The attached viewport. */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** Detaches this scroll strategy from the currently attached viewport. */
    detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentScrolled() {
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentRendered() { }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onRenderedOffsetChanged() { }
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    scrollToIndex(index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    }
    /** Update the viewport's total content size. */
    _updateTotalContentSize() {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /** Update the viewport's rendered range. */
    _updateRenderedRange() {
        if (!this._viewport) {
            return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        // Prevent NaN as result when dividing by zero.
        let firstVisibleIndex = (this._itemSize > 0) ? scrollOffset / this._itemSize : 0;
        // If user scrolls to the bottom of the list and data changes to a smaller list
        if (newRange.end > dataLength) {
            // We have to recalculate the first visible index based on new data length and viewport size.
            const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
            const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
            // If first visible index changed we must update scroll offset to handle start/end buffers
            // Current range must also be adjusted to cover the new position (bottom of new list).
            if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
            }
            newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
let CdkFixedSizeVirtualScroll = /*@__PURE__*/ (() => {
    class CdkFixedSizeVirtualScroll {
        constructor() {
            this._itemSize = 20;
            this._minBufferPx = 100;
            this._maxBufferPx = 200;
            /** The scroll strategy used by this directive. */
            this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */
        get itemSize() { return this._itemSize; }
        set itemSize(value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get minBufferPx() { return this._minBufferPx; }
        set minBufferPx(value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get maxBufferPx() { return this._maxBufferPx; }
        set maxBufferPx(value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value); }
        ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
    }
    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) { return new (t || CdkFixedSizeVirtualScroll)(); };
    CdkFixedSizeVirtualScroll.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkFixedSizeVirtualScroll, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                    provide: VIRTUAL_SCROLL_STRATEGY,
                    useFactory: _fixedSizeVirtualScrollStrategyFactory,
                    deps: [/*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CdkFixedSizeVirtualScroll)]
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
    return CdkFixedSizeVirtualScroll;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
let ScrollDispatcher = /*@__PURE__*/ (() => {
    class ScrollDispatcher {
        constructor(_ngZone, _platform, document) {
            this._ngZone = _ngZone;
            this._platform = _platform;
            /** Subject for notifying that a registered scrollable reference element has been scrolled. */
            this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** Keeps track of the global `scroll` and `resize` subscriptions. */
            this._globalSubscription = null;
            /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
            this._scrolledCount = 0;
            /**
             * Map of all the scrollable references that are registered with the service and their
             * scroll event subscriptions.
             */
            this.scrollContainers = new Map();
            this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */
        register(scrollable) {
            if (!this.scrollContainers.has(scrollable)) {
                this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                    .subscribe(() => this._scrolled.next(scrollable)));
            }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param scrollable Scrollable instance to be deregistered.
         */
        deregister(scrollable) {
            const scrollableReference = this.scrollContainers.get(scrollable);
            if (scrollableReference) {
                scrollableReference.unsubscribe();
                this.scrollContainers.delete(scrollable);
            }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         */
        scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
            if (!this._platform.isBrowser) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                if (!this._globalSubscription) {
                    this._addGlobalListener();
                }
                // In the case of a 0ms delay, use an observable without auditTime
                // since it does add a perceptible delay in processing overhead.
                const subscription = auditTimeInMs > 0 ?
                    this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                    this._scrolled.subscribe(observer);
                this._scrolledCount++;
                return () => {
                    subscription.unsubscribe();
                    this._scrolledCount--;
                    if (!this._scrolledCount) {
                        this._removeGlobalListener();
                    }
                };
            });
        }
        ngOnDestroy() {
            this._removeGlobalListener();
            this.scrollContainers.forEach((_, container) => this.deregister(container));
            this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param elementOrElementRef Element whose ancestors to listen for.
         * @param auditTimeInMs Time to throttle the scroll events.
         */
        ancestorScrolled(elementOrElementRef, auditTimeInMs) {
            const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(target => {
                return !target || ancestors.indexOf(target) > -1;
            }));
        }
        /** Returns all registered Scrollables that contain the provided element. */
        getAncestorScrollContainers(elementOrElementRef) {
            const scrollingContainers = [];
            this.scrollContainers.forEach((_subscription, scrollable) => {
                if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
                    scrollingContainers.push(scrollable);
                }
            });
            return scrollingContainers;
        }
        /** Use defaultView of injected document if available or fallback to global window reference */
        _getWindow() {
            return this._document.defaultView || window;
        }
        /** Returns true if the element is contained within the provided Scrollable. */
        _scrollableContainsElement(scrollable, elementOrElementRef) {
            let element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrElementRef);
            let scrollableElement = scrollable.getElementRef().nativeElement;
            // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.
            do {
                if (element == scrollableElement) {
                    return true;
                }
            } while (element = element.parentElement);
            return false;
        }
        /** Sets up the global scroll listeners. */
        _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular(() => {
                const window = this._getWindow();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(() => this._scrolled.next());
            });
        }
        /** Cleans up the global scroll listener. */
        _removeGlobalListener() {
            if (this._globalSubscription) {
                this._globalSubscription.unsubscribe();
                this._globalSubscription = null;
            }
        }
    }
    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) { return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
    ScrollDispatcher.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
})();
let CdkScrollable = /*@__PURE__*/ (() => {
    class CdkScrollable {
        constructor(elementRef, scrollDispatcher, ngZone, dir) {
            this.elementRef = elementRef;
            this.scrollDispatcher = scrollDispatcher;
            this.ngZone = ngZone;
            this.dir = dir;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => this.ngZone.runOutsideAngular(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe(observer)));
        }
        ngOnInit() {
            this.scrollDispatcher.register(this);
        }
        ngOnDestroy() {
            this.scrollDispatcher.deregister(this);
            this._destroyed.next();
            this._destroyed.complete();
        }
        /** Returns observable that emits when a scroll event is fired on the host element. */
        elementScrolled() {
            return this._elementScrolled;
        }
        /** Gets the ElementRef for the viewport. */
        getElementRef() {
            return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param options specified the offsets to scroll to.
         */
        scrollTo(options) {
            const el = this.elementRef.nativeElement;
            const isRtl = this.dir && this.dir.value == 'rtl';
            // Rewrite start & end offsets as right or left offsets.
            if (options.left == null) {
                options.left = isRtl ? options.end : options.start;
            }
            if (options.right == null) {
                options.right = isRtl ? options.start : options.end;
            }
            // Rewrite the bottom offset as a top offset.
            if (options.bottom != null) {
                options.top =
                    el.scrollHeight - el.clientHeight - options.bottom;
            }
            // Rewrite the right offset as a left offset.
            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0 /* NORMAL */) {
                if (options.left != null) {
                    options.right =
                        el.scrollWidth - el.clientWidth - options.left;
                }
                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2 /* INVERTED */) {
                    options.left = options.right;
                }
                else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1 /* NEGATED */) {
                    options.left = options.right ? -options.right : options.right;
                }
            }
            else {
                if (options.right != null) {
                    options.left =
                        el.scrollWidth - el.clientWidth - options.right;
                }
            }
            this._applyScrollToOptions(options);
        }
        _applyScrollToOptions(options) {
            const el = this.elementRef.nativeElement;
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
                el.scrollTo(options);
            }
            else {
                if (options.top != null) {
                    el.scrollTop = options.top;
                }
                if (options.left != null) {
                    el.scrollLeft = options.left;
                }
            }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param from The edge to measure from.
         */
        measureScrollOffset(from) {
            const LEFT = 'left';
            const RIGHT = 'right';
            const el = this.elementRef.nativeElement;
            if (from == 'top') {
                return el.scrollTop;
            }
            if (from == 'bottom') {
                return el.scrollHeight - el.clientHeight - el.scrollTop;
            }
            // Rewrite start & end as left or right offsets.
            const isRtl = this.dir && this.dir.value == 'rtl';
            if (from == 'start') {
                from = isRtl ? RIGHT : LEFT;
            }
            else if (from == 'end') {
                from = isRtl ? LEFT : RIGHT;
            }
            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2 /* INVERTED */) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollWidth - el.clientWidth - el.scrollLeft;
                }
                else {
                    return el.scrollLeft;
                }
            }
            else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1 /* NEGATED */) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollLeft + el.scrollWidth - el.clientWidth;
                }
                else {
                    return -el.scrollLeft;
                }
            }
            else {
                // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
                // (scrollWidth - clientWidth) when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollLeft;
                }
                else {
                    return el.scrollWidth - el.clientWidth - el.scrollLeft;
                }
            }
        }
    }
    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) { return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8)); };
    CdkScrollable.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkScrollable, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
    return CdkScrollable;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in ms to throttle the resize events by default. */
const DEFAULT_RESIZE_TIME = 20;
let ViewportRuler = /*@__PURE__*/ (() => {
    class ViewportRuler {
        constructor(_platform, ngZone, document) {
            this._platform = _platform;
            /** Stream of viewport change events. */
            this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** Event listener that will be used to handle the viewport change events. */
            this._changeListener = (event) => {
                this._change.next(event);
            };
            this._document = document;
            ngZone.runOutsideAngular(() => {
                if (_platform.isBrowser) {
                    const window = this._getWindow();
                    // Note that bind the events ourselves, rather than going through something like RxJS's
                    // `fromEvent` so that we can ensure that they're bound outside of the NgZone.
                    window.addEventListener('resize', this._changeListener);
                    window.addEventListener('orientationchange', this._changeListener);
                }
                // We don't need to keep track of the subscription,
                // because we complete the `change` stream on destroy.
                this.change().subscribe(() => this._updateViewportSize());
            });
        }
        ngOnDestroy() {
            if (this._platform.isBrowser) {
                const window = this._getWindow();
                window.removeEventListener('resize', this._changeListener);
                window.removeEventListener('orientationchange', this._changeListener);
            }
            this._change.complete();
        }
        /** Returns the viewport's width and height. */
        getViewportSize() {
            if (!this._viewportSize) {
                this._updateViewportSize();
            }
            const output = { width: this._viewportSize.width, height: this._viewportSize.height };
            // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
            if (!this._platform.isBrowser) {
                this._viewportSize = null;
            }
            return output;
        }
        /** Gets a ClientRect for the viewport's bounds. */
        getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            const scrollPosition = this.getViewportScrollPosition();
            const { width, height } = this.getViewportSize();
            return {
                top: scrollPosition.top,
                left: scrollPosition.left,
                bottom: scrollPosition.top + height,
                right: scrollPosition.left + width,
                height,
                width,
            };
        }
        /** Gets the (top, left) scroll position of the viewport. */
        getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
                return { top: 0, left: 0 };
            }
            // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.
            const document = this._document;
            const window = this._getWindow();
            const documentElement = document.documentElement;
            const documentRect = documentElement.getBoundingClientRect();
            const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
                documentElement.scrollTop || 0;
            const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
                documentElement.scrollLeft || 0;
            return { top, left };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param throttleTime Time in milliseconds to throttle the stream.
         */
        change(throttleTime = DEFAULT_RESIZE_TIME) {
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /** Use defaultView of injected document if available or fallback to global window reference */
        _getWindow() {
            return this._document.defaultView || window;
        }
        /** Updates the cached viewport size. */
        _updateViewportSize() {
            const window = this._getWindow();
            this._viewportSize = this._platform.isBrowser ?
                { width: window.innerWidth, height: window.innerHeight } :
                { width: 0, height: 0 };
        }
    }
    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) { return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
    ViewportRuler.ɵprov = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
let CdkVirtualScrollViewport = /*@__PURE__*/ (() => {
    class CdkVirtualScrollViewport extends CdkScrollable {
        constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
            super(elementRef, scrollDispatcher, ngZone, dir);
            this.elementRef = elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._scrollStrategy = _scrollStrategy;
            /** Emits when the viewport is detached from a CdkVirtualForOf. */
            this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** Emits when the rendered range changes. */
            this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._orientation = 'vertical';
            // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
            // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
            // depending on how the strategy calculates the scrolled index, it may come at a cost to
            // performance.
            /** Emits when the index of the first element visible in the viewport changes. */
            this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
            /** A stream that emits whenever the rendered range changes. */
            this.renderedRangeStream = this._renderedRangeSubject;
            /**
             * The total size of all content (in pixels), including content that is not currently rendered.
             */
            this._totalContentSize = 0;
            /** A string representing the `style.width` property value to be used for the spacer element. */
            this._totalContentWidth = '';
            /** A string representing the `style.height` property value to be used for the spacer element. */
            this._totalContentHeight = '';
            /** The currently rendered range of indices. */
            this._renderedRange = { start: 0, end: 0 };
            /** The length of the data bound to this viewport (in number of items). */
            this._dataLength = 0;
            /** The size of the viewport (in pixels). */
            this._viewportSize = 0;
            /** The last rendered content offset that was set. */
            this._renderedContentOffset = 0;
            /**
             * Whether the last rendered content offset was to the end of the content (and therefore needs to
             * be rewritten as an offset to the start of the content).
             */
            this._renderedContentOffsetNeedsRewrite = false;
            /** Whether there is a pending change detection cycle. */
            this._isChangeDetectionPending = false;
            /** A list of functions to run after the next change detection cycle. */
            this._runAfterChangeDetection = [];
            /** Subscription to changes in the viewport size. */
            this._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
            if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
            }
            this._viewportChanges = viewportRuler.change().subscribe(() => {
                this.checkViewportSize();
            });
        }
        /** The direction the viewport scrolls. */
        get orientation() {
            return this._orientation;
        }
        set orientation(orientation) {
            if (this._orientation !== orientation) {
                this._orientation = orientation;
                this._calculateSpacerSize();
            }
        }
        ngOnInit() {
            super.ngOnInit();
            // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.
            this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
                this._measureViewportSize();
                this._scrollStrategy.attach(this);
                this.elementScrolled()
                    .pipe(
                // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), 
                // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                    .subscribe(() => this._scrollStrategy.onContentScrolled());
                this._markChangeDetectionNeeded();
            }));
        }
        ngOnDestroy() {
            this.detach();
            this._scrollStrategy.detach();
            // Complete all subjects
            this._renderedRangeSubject.complete();
            this._detachedSubject.complete();
            this._viewportChanges.unsubscribe();
            super.ngOnDestroy();
        }
        /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
        attach(forOf) {
            if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkVirtualScrollViewport is already attached.');
            }
            // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.
            this.ngZone.runOutsideAngular(() => {
                this._forOf = forOf;
                this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._detachedSubject)).subscribe(data => {
                    const newLength = data.length;
                    if (newLength !== this._dataLength) {
                        this._dataLength = newLength;
                        this._scrollStrategy.onDataLengthChanged();
                    }
                    this._doChangeDetection();
                });
            });
        }
        /** Detaches the current `CdkVirtualForOf`. */
        detach() {
            this._forOf = null;
            this._detachedSubject.next();
        }
        /** Gets the length of the data bound to this viewport (in number of items). */
        getDataLength() {
            return this._dataLength;
        }
        /** Gets the size of the viewport (in pixels). */
        getViewportSize() {
            return this._viewportSize;
        }
        // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
        /** Get the current rendered range of items. */
        getRenderedRange() {
            return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         */
        setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
                this._totalContentSize = size;
                this._calculateSpacerSize();
                this._markChangeDetectionNeeded();
            }
        }
        /** Sets the currently rendered range of indices. */
        setRenderedRange(range) {
            if (!rangesEqual(this._renderedRange, range)) {
                this._renderedRangeSubject.next(this._renderedRange = range);
                this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
            }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         */
        getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         */
        setRenderedContentOffset(offset, to = 'to-start') {
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            const isRtl = this.dir && this.dir.value == 'rtl';
            const isHorizontal = this.orientation == 'horizontal';
            const axis = isHorizontal ? 'X' : 'Y';
            const axisDirection = isHorizontal && isRtl ? -1 : 1;
            let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
            this._renderedContentOffset = offset;
            if (to === 'to-end') {
                transform += ` translate${axis}(-100%)`;
                // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
                // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
                // expand upward).
                this._renderedContentOffsetNeedsRewrite = true;
            }
            if (this._renderedContentTransform != transform) {
                // We know this value is safe because we parse `offset` with `Number()` before passing it
                // into the string.
                this._renderedContentTransform = transform;
                this._markChangeDetectionNeeded(() => {
                    if (this._renderedContentOffsetNeedsRewrite) {
                        this._renderedContentOffset -= this.measureRenderedContentSize();
                        this._renderedContentOffsetNeedsRewrite = false;
                        this.setRenderedContentOffset(this._renderedContentOffset);
                    }
                    else {
                        this._scrollStrategy.onRenderedOffsetChanged();
                    }
                });
            }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param offset The offset to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         */
        scrollToOffset(offset, behavior = 'auto') {
            const options = { behavior };
            if (this.orientation === 'horizontal') {
                options.start = offset;
            }
            else {
                options.top = offset;
            }
            this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param index The index of the element to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         */
        scrollToIndex(index, behavior = 'auto') {
            this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         */
        measureScrollOffset(from) {
            return from ?
                super.measureScrollOffset(from) :
                super.measureScrollOffset(this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /** Measure the combined size of all of the rendered items. */
        measureRenderedContentSize() {
            const contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         */
        measureRangeSize(range) {
            if (!this._forOf) {
                return 0;
            }
            return this._forOf.measureRangeSize(range, this.orientation);
        }
        /** Update the viewport dimensions and re-render. */
        checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();
            this._scrollStrategy.onDataLengthChanged();
        }
        /** Measure the viewport size. */
        _measureViewportSize() {
            const viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ?
                viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /** Queue up change detection to run. */
        _markChangeDetectionNeeded(runAfter) {
            if (runAfter) {
                this._runAfterChangeDetection.push(runAfter);
            }
            // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.
            if (!this._isChangeDetectionPending) {
                this._isChangeDetectionPending = true;
                this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
                    this._doChangeDetection();
                }));
            }
        }
        /** Run change detection. */
        _doChangeDetection() {
            this._isChangeDetectionPending = false;
            // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.
            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
            // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.
            this.ngZone.run(() => this._changeDetectorRef.markForCheck());
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
                fn();
            }
        }
        /** Calculates the `style.width` and `style.height` for the spacer element. */
        _calculateSpacerSize() {
            this._totalContentHeight =
                this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
            this._totalContentWidth =
                this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
        }
    }
    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) { return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler)); };
    CdkVirtualScrollViewport.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CdkVirtualScrollViewport, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
            }
        }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
            }
        }, inputs: { orientation: "orientation" }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                    provide: CdkScrollable,
                    useExisting: CdkVirtualScrollViewport
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]], template: function CdkVirtualScrollViewport_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
            }
        }, styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"], encapsulation: 2, changeDetection: 0 });
    return CdkVirtualScrollViewport;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Helper to extract the offset of a DOM Node in a certain direction. */
function getOffset(orientation, direction, node) {
    const el = node;
    if (!el.getBoundingClientRect) {
        return 0;
    }
    const rect = el.getBoundingClientRect();
    if (orientation === 'horizontal') {
        return direction === 'start' ? rect.left : rect.right;
    }
    return direction === 'start' ? rect.top : rect.bottom;
}
let CdkVirtualForOf = /*@__PURE__*/ (() => {
    class CdkVirtualForOf {
        constructor(
        /** The view container to add items to. */
        _viewContainerRef, 
        /** The template to use when stamping out new items. */
        _template, 
        /** The set of available differs. */
        _differs, 
        /** The strategy used to render items in the virtual scroll viewport. */
        _viewRepeater, 
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
            this._viewContainerRef = _viewContainerRef;
            this._template = _template;
            this._differs = _differs;
            this._viewRepeater = _viewRepeater;
            this._viewport = _viewport;
            /** Emits when the rendered view of the data changes. */
            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** Subject that emits when a new DataSource instance is given. */
            this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** Emits whenever the data in the current DataSource changes. */
            this.dataStream = this._dataSourceChanges
                .pipe(
            // Start off with null `DataSource`.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), 
            // Bundle up the previous and current data sources so we can work with both.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
            // Use `_changeDataSource` to disconnect from the previous data source and connect to the
            // new one, passing back a stream of data changes which we run through `switchMap` to give
            // us a data stream that emits the latest data from whatever the current `DataSource` is.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([prev, cur]) => this._changeDataSource(prev, cur)), 
            // Replay the last emitted data when someone subscribes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
            /** The differ used to calculate changes to the data. */
            this._differ = null;
            /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
            this._needsUpdate = false;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.dataStream.subscribe(data => {
                this._data = data;
                this._onRenderedDataChange();
            });
            this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(range => {
                this._renderedRange = range;
                ngZone.run(() => this.viewChange.next(this._renderedRange));
                this._onRenderedDataChange();
            });
            this._viewport.attach(this);
        }
        /** The DataSource to display. */
        get cdkVirtualForOf() {
            return this._cdkVirtualForOf;
        }
        set cdkVirtualForOf(value) {
            this._cdkVirtualForOf = value;
            if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
                this._dataSourceChanges.next(value);
            }
            else {
                // If value is an an NgIterable, convert it to an array.
                this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.from(value || [])));
            }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get cdkVirtualForTrackBy() {
            return this._cdkVirtualForTrackBy;
        }
        set cdkVirtualForTrackBy(fn) {
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) :
                undefined;
        }
        /** The template used to stamp out new elements. */
        set cdkVirtualForTemplate(value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        }
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        get cdkVirtualForTemplateCacheSize() {
            return this._viewRepeater.viewCacheSize;
        }
        set cdkVirtualForTemplateCacheSize(size) {
            this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
        }
        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         */
        measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
                return 0;
            }
            if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error(`Error: attempted to measure an item that isn't rendered.`);
            }
            // The index into the list of rendered views for the first item in the range.
            const renderedStartIndex = range.start - this._renderedRange.start;
            // The length of the range we're measuring.
            const rangeLen = range.end - range.start;
            // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.
            let firstNode;
            let lastNode;
            // Find the first node by starting from the beginning and going forwards.
            for (let i = 0; i < rangeLen; i++) {
                const view = this._viewContainerRef.get(i + renderedStartIndex);
                if (view && view.rootNodes.length) {
                    firstNode = lastNode = view.rootNodes[0];
                    break;
                }
            }
            // Find the last node by starting from the end and going backwards.
            for (let i = rangeLen - 1; i > -1; i--) {
                const view = this._viewContainerRef.get(i + renderedStartIndex);
                if (view && view.rootNodes.length) {
                    lastNode = view.rootNodes[view.rootNodes.length - 1];
                    break;
                }
            }
            return firstNode && lastNode ?
                getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
        }
        ngDoCheck() {
            if (this._differ && this._needsUpdate) {
                // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
                // this list being rendered (can use simpler algorithm) vs needs update due to data actually
                // changing (need to do this diff).
                const changes = this._differ.diff(this._renderedItems);
                if (!changes) {
                    this._updateContext();
                }
                else {
                    this._applyChanges(changes);
                }
                this._needsUpdate = false;
            }
        }
        ngOnDestroy() {
            this._viewport.detach();
            this._dataSourceChanges.next(undefined);
            this._dataSourceChanges.complete();
            this.viewChange.complete();
            this._destroyed.next();
            this._destroyed.complete();
            this._viewRepeater.detach();
        }
        /** React to scroll state changes in the viewport. */
        _onRenderedDataChange() {
            if (!this._renderedRange) {
                return;
            }
            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
            if (!this._differ) {
                // Use a wrapper function for the `trackBy` so any new values are
                // picked up automatically without having to recreate the differ.
                this._differ = this._differs.find(this._renderedItems).create((index, item) => {
                    return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
                });
            }
            this._needsUpdate = true;
        }
        /** Swap out one `DataSource` for another. */
        _changeDataSource(oldDs, newDs) {
            if (oldDs) {
                oldDs.disconnect(this);
            }
            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /** Update the `CdkVirtualForOfContext` for all views. */
        _updateContext() {
            const count = this._data.length;
            let i = this._viewContainerRef.length;
            while (i--) {
                const view = this._viewContainerRef.get(i);
                view.context.index = this._renderedRange.start + i;
                view.context.count = count;
                this._updateComputedContextProperties(view.context);
                view.detectChanges();
            }
        }
        /** Apply changes to the DOM. */
        _applyChanges(changes) {
            this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
            // Update $implicit for any items that had an identity change.
            changes.forEachIdentityChange((record) => {
                const view = this._viewContainerRef.get(record.currentIndex);
                view.context.$implicit = record.item;
            });
            // Update the context variables on all items.
            const count = this._data.length;
            let i = this._viewContainerRef.length;
            while (i--) {
                const view = this._viewContainerRef.get(i);
                view.context.index = this._renderedRange.start + i;
                view.context.count = count;
                this._updateComputedContextProperties(view.context);
            }
        }
        /** Update the computed properties on the `CdkVirtualForOfContext`. */
        _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
        }
        _getEmbeddedViewArgs(record, index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return {
                templateRef: this._template,
                context: {
                    $implicit: record.item,
                    // It's guaranteed that the iterable is not "undefined" or "null" because we only
                    // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                    cdkVirtualForOf: this._cdkVirtualForOf,
                    index: -1,
                    count: -1,
                    first: false,
                    last: false,
                    odd: false,
                    even: false
                },
                index,
            };
        }
    }
    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) { return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CdkVirtualForOf.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkVirtualForOf, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"] },
            ])] });
    return CdkVirtualForOf;
})();
let CdkScrollableModule = /*@__PURE__*/ (() => {
    class CdkScrollableModule {
    }
    CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) { return new (t || CdkScrollableModule)(); };
    CdkScrollableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CdkScrollableModule });
    CdkScrollableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
    return CdkScrollableModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, { declarations: [CdkScrollable], exports: [CdkScrollable] }); })();
let ScrollingModule = /*@__PURE__*/ (() => {
    class ScrollingModule {
    }
    ScrollingModule.ɵfac = function ScrollingModule_Factory(t) { return new (t || ScrollingModule)(); };
    ScrollingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScrollingModule });
    ScrollingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"],
                CdkScrollableModule
            ], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule] });
    return ScrollingModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, { declarations: function () { return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]; }, imports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        }, exports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]; } });
})();
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
/**
 * Generated bundle index. Do not edit.
 */






/***/ }),

/***/ "xz+E":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
  \***************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of the Angular Component Development Kit. */
const VERSION = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.13');
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






/***/ }),

/***/ "yIhK":
/*!*********************************************************************!*\
  !*** ./src/app/shared/dialogs/mint-dialog/mint-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: MintDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintDialogComponent", function() { return MintDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/smart-contract-core.service */ "cIOH");
/* harmony import */ var _services_event_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event-messenger.service */ "q9MP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MintDialogComponent_div_7_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.countdownDays, " ");
    }
}
function MintDialogComponent_div_7_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r6.countdownHours, " ");
    }
}
function MintDialogComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_7_div_2_Template, 4, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MintDialogComponent_div_7_div_3_Template, 4, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "secs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Until private sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.countdownDays > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.countdownHours > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.countdownMins, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.countdownSecs, " ");
    }
}
function MintDialogComponent_div_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " There are no active sales going on. Come back when the sale windows open up. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_h2_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tier: Executive Realtors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_h2_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tier: Senior Brokers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_h2_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tier: Property Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_5_img_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 42);
    }
}
function MintDialogComponent_div_30_div_5_div_10_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_5_div_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_div_5_div_10_div_1_Template, 2, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.mintableHouses);
    }
}
function MintDialogComponent_div_30_div_5_div_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MintDialogComponent_div_30_div_5_div_11_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r20.handleMintAmountSlider($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r15.presaleTier.mintAmount)("disabled", ctx_r15.isPresaleMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.mintAmount);
    }
}
function MintDialogComponent_div_30_div_5_button_12_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Minting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_5_button_12_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Presale Mint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_5_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_30_div_5_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r24.mint("presale"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_div_5_button_12_span_1_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_30_div_5_button_12_span_2_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r16.isPresaleMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.isPresaleMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r16.isPresaleMinting);
    }
}
function MintDialogComponent_div_30_div_5_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ineligible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "PRICE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ETH + GAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MintDialogComponent_div_30_div_5_img_9_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MintDialogComponent_div_30_div_5_div_10_Template, 2, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MintDialogComponent_div_30_div_5_div_11_Template, 4, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MintDialogComponent_div_30_div_5_button_12_Template, 3, 3, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MintDialogComponent_div_30_div_5_div_13_Template, 3, 0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r10.presalePriceText * ctx_r10.mintAmount).toFixed(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r10.presaleTier.mintAmount, " ", ctx_r10.presaleTier.mintAmount === 1 ? "Mint" : "Mints", " Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.presaleTier.mintAmount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.presaleTier.mintAmount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.presaleTier.mintAmount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.presaleTier.mintAmount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.presaleTier.mintAmount === 0);
    }
}
function MintDialogComponent_div_30_div_6_img_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 58);
    }
}
function MintDialogComponent_div_30_div_6_img_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 42);
    }
}
function MintDialogComponent_div_30_div_6_button_12_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Minting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_6_button_12_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Partner Mint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_6_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_30_div_6_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r32.mint("partner"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_div_6_button_12_span_1_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_30_div_6_button_12_span_2_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r28.isPartnerMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r28.isPartnerMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r28.isPartnerMinting);
    }
}
function MintDialogComponent_div_30_div_6_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ineligible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "PRICE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ETH + GAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MintDialogComponent_div_30_div_6_img_10_Template, 1, 0, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MintDialogComponent_div_30_div_6_img_11_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MintDialogComponent_div_30_div_6_button_12_Template, 3, 3, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MintDialogComponent_div_30_div_6_div_13_Template, 3, 0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.partnerSalePriceText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r11.isPartnerMinted ? "0 Mints" : "1 Mint", " Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.isPartnerMinted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isPartnerMinted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.isPartnerMinted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isPartnerMinted);
    }
}
function MintDialogComponent_div_30_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You are not eligible for any presales. Wait until the public sale to get your own Propertys NFT! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_h2_1_Template, 2, 0, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_30_h2_2_Template, 2, 0, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MintDialogComponent_div_30_h2_3_Template, 2, 0, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MintDialogComponent_div_30_div_5_Template, 14, 8, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MintDialogComponent_div_30_div_6_Template, 14, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MintDialogComponent_div_30_div_7_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.presaleTier.tier === 3 && ctx_r3.presaleMintEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.presaleTier.tier === 2 && ctx_r3.presaleMintEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.presaleTier.tier === 1 && ctx_r3.presaleMintEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.presaleMintEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.partnerMintEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.presaleMintEnabled && !ctx_r3.partnerMintEnabled && !ctx_r3.mintingStage.public);
    }
}
function MintDialogComponent_div_31_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_31_span_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Minting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_31_span_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function MintDialogComponent_div_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Public Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Max limit of 16 mints per wallet address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "PRICE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ETH + GAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MintDialogComponent_div_31_div_13_Template, 2, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MintDialogComponent_div_31_Template_input_input_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.handleMintAmountSlider($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_31_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.mint("public"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MintDialogComponent_div_31_span_19_Template, 3, 0, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MintDialogComponent_div_31_span_20_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r4.publicSalePriceText * ctx_r4.mintAmount).toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.mintableHouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.mintAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.isMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.isMinting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.isMinting);
    }
}
const _c0 = function (a0) { return { active: a0 }; };
let MintDialogComponent = /*@__PURE__*/ (() => {
    class MintDialogComponent {
        constructor(_data, dialogRef, smartContractCoreService, eventMessengerService) {
            this._data = _data;
            this.dialogRef = dialogRef;
            this.smartContractCoreService = smartContractCoreService;
            this.eventMessengerService = eventMessengerService;
            // Minting related
            this.isMinting = false;
            this.isPresaleMinting = false;
            this.isPartnerMinting = false;
            this.isPartnerMinted = false;
            this.publicSaleStartTime = 0;
            this.privateSaleStartTime = 0;
            this.mintAmount = 1;
            this.mintableHouses = [];
            this.totalMinted = 0;
            this.mintingStage = {
                presale: false,
                partner: false,
                public: false
            };
            this.partnerSalePriceText = 0;
            this.publicSalePriceText = 0;
            this.presalePriceText = 0;
            this.presaleWhitelisted = null;
            this.partnerWhitelisted = null;
            this.contentLoaded = false;
            this.countdownTime = 0;
            this.countdownDays = 0;
            this.countdownHours = 0;
            this.countdownMins = 0;
            this.countdownSecs = 0;
            // Account stuff
            this.accounts = [];
            this.isEligible = false;
            this.presaleTier = {
                tier: 0,
                mintAmount: 0
            };
            // Minting eligibility
            this.isPresaleEligible = false;
            this.isPartnerEligible = false;
            this.partnerMintEnabled = false;
            this.presaleMintEnabled = false;
            this.publicMintEnabled = false;
            this.accounts = _data.accounts;
        }
        ngOnDestroy() {
            clearInterval(this.countdownTimer);
        }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // Setup the start date for the public sale
                // this.publicSaleStartTime = await this.smartContractCoreService.getPublicSaleStartTime();
                // this.publicSaleStartTime = parseInt(this.publicSaleStartTime._hex, 16) * 1000;
                this.privateSaleStartTime = yield this.smartContractCoreService.getPrivateSaleStartTime();
                this.privateSaleStartTime = parseInt(this.privateSaleStartTime._hex, 16) * 1000;
                this.countdownTimer = setInterval(() => {
                    this.updateCountdownTimer();
                }, 1000);
                this.updateCountdownTimer();
                // Build the houses
                this.buildHouses();
                // We need to get all the tier amounts and all that from the presale/partnerships
                // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
                // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);
                // Get all the wallet information
                yield this.handleWalletAccounts();
                // Initiate price sale text
                yield this.initiateSalePrices();
                // Handle changing account
                this.eventMessengerService.subscribe('accountsChanged', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.accounts = event.data.accounts;
                    // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
                    // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);
                    // Get all the wallet information
                    yield this.handleWalletAccounts();
                    // Initiate price sale text
                    yield this.initiateSalePrices();
                }));
                // Handle disconnecting all metamask services
                this.eventMessengerService.subscribe('disconnect', (event) => {
                    this.dialogRef.close();
                });
                // Get all the tokens that have already been minted
                this.smartContractCoreService.getTotalMintedSupply().then((tx) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.totalMinted = parseInt(tx._hex, 16).toLocaleString('en');
                })).catch((error) => { });
            });
        }
        /**
         * Handle wallet accounts
         */
        handleWalletAccounts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.accounts.length == 0) {
                    this.dialogRef.close();
                }
                else {
                    clearInterval(this.saleWindowTimerInterval);
                    this.saleWindowTimerInterval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.setWalletEligibility();
                    }), 10000);
                    yield this.setWalletEligibility();
                }
            });
        }
        /**
         * Determine wallet eligibility
         * Note: This will update buttons and stuff
         */
        setWalletEligibility() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const isPresaleOpen = yield this.smartContractCoreService.isPresaleOpen();
                const isPublicSaleOpen = yield this.smartContractCoreService.isPublicSaleOpen();
                this.isPartnerMinted = yield this.smartContractCoreService.isPartnerMinted(this.accounts[0]);
                let remainingMints = 0;
                if (this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                    if (this.presaleWhitelisted.data.results.tier > 0) {
                        remainingMints = yield this.smartContractCoreService.getRemainingPrivateSaleMints(this.accounts[0]);
                        // Check user eligibility
                        this.presaleTier.tier = this.presaleWhitelisted.data.results.tier;
                        this.presaleTier.mintAmount = this.presaleWhitelisted.data.results.tier - remainingMints;
                    }
                    else {
                        this.presaleTier.tier = 0;
                        this.presaleTier.mintAmount = 0;
                    }
                }
                if (isPresaleOpen) {
                    // Private sale whitelists
                    if (this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                        if (this.presaleWhitelisted.data.results.tier > 0) {
                            this.presaleMintEligible = true;
                            this.presaleMintEnabled = true;
                        }
                    }
                    else {
                        this.presaleMintEligible = false;
                        this.presaleMintEnabled = false;
                        this.mintingStage['presale'] = false;
                    }
                    // Partnerships eligibility
                    if (this.parnterWhitelisted && this.partnerWhitelisted['data']['results']) {
                        if (this.partnerWhitelisted.data.results.address) {
                            this.partnerMintEligible = true;
                            this.partnerMintEnabled = true;
                        }
                    }
                    else {
                        this.partnerMintEligible = false;
                        this.partnerMintEnabled = false;
                        this.mintingStage['partner'] = false;
                    }
                    this.mintingStage['presale'] = true;
                    this.mintingStage['partner'] = true;
                    this.mintingStage['public'] = false;
                }
                else if (isPublicSaleOpen) {
                    this.mintingStage['presale'] = false;
                    this.mintingStage['partner'] = false;
                    this.mintingStage['public'] = true;
                    this.publicMintEnabled = true;
                }
                else {
                    this.mintingStage['presale'] = false;
                    this.mintingStage['partner'] = false;
                    this.mintingStage['public'] = false;
                    this.partnerMintEnabled = false;
                    this.presaleMintEnabled = false;
                }
                this.contentLoaded = true;
            });
        }
        /**
         * Initiate sale prices
         */
        initiateSalePrices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.presaleMintEnabled) {
                    if (this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                        this.presalePriceText = yield this.smartContractCoreService.getPrice('presale', this.presaleWhitelisted.data.results.tier);
                    }
                }
                this.partnerSalePriceText = yield this.smartContractCoreService.getPrice('partner');
                this.publicSalePriceText = yield this.smartContractCoreService.getPrice('public');
            });
        }
        /**
         * Simple countdown timer function. End date is set for private sale
         */
        updateCountdownTimer() {
            let endDate = this.privateSaleStartTime; // Update this with the end time in milliseconds
            let now = Date.now();
            let t = endDate - now;
            if (t >= 0) {
                this.countdownTime = t;
                this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
                this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
            }
            else {
                this.countdownTime = 0;
            }
        }
        /**
         * Show the houses that represent how many a user can mint
         */
        buildHouses() {
            // Adjust house
            this.mintableHouses = [];
            for (let i = 0; i < this.mintAmount; i++) {
                this.mintableHouses.push({
                    index: i
                });
            }
        }
        /**
         *  Closes the dialog
         */
        close() {
            this.dialogRef.close();
        }
        /**
         * Handle the slider for purchasing unicorns
         */
        handleMintAmountSlider(e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.mintAmount = e.target.value;
                // Build houses
                this.buildHouses();
            });
        }
        /**
         * Mint functionality for button
         */
        mint(mintType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (mintType === 'presale') {
                    this.isPresaleMinting = true;
                }
                else if (mintType === 'partner') {
                    this.isPartnerMinting = true;
                }
                else if (mintType === 'public') {
                    this.isMinting = true;
                }
                this.smartContractCoreService.mint(this.mintAmount, mintType)
                    .then((tx) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    tx.wait().then((success) => {
                        if (mintType === 'partner') {
                        }
                        else {
                            const grammar = this.mintAmount == 1 ? '' : 's';
                        }
                        this.dialogRef.close();
                    });
                }))
                    .catch((error) => {
                    let errorMsg = this.smartContractCoreService.createErrorMsg(error);
                    // Show an error 
                    this.isMinting = false;
                    this.isPartnerMinting = false;
                    this.isPresaleMinting = false;
                });
            });
        }
    }
    MintDialogComponent.ɵfac = function MintDialogComponent_Factory(t) { return new (t || MintDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_3__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_4__["EventMessengerService"])); };
    MintDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MintDialogComponent, selectors: [["mint-dialog"]], decls: 32, vars: 12, consts: [[1, "modal"], ["type", "button", 1, "close", 3, "click"], [1, "fas", "fa-times-circle"], [1, "inner"], [1, "title"], ["class", "countdown-container", 4, "ngIf"], [1, "supply-container-text"], [1, "supply-breakdown"], [1, "supply", "private-sale"], [1, "supply", "public-sale"], [1, "supply", "team"], [1, "breakdown-list-container"], [1, "pill", "private", 3, "ngClass"], [1, "active-now"], [1, "amount"], [1, "pill", "public", 3, "ngClass"], [1, "pill", "reserved"], ["class", "loading", 4, "ngIf"], ["class", "no-active-sale", 4, "ngIf"], ["class", "mint-container", 4, "ngIf"], ["class", "mint-container public", 4, "ngIf"], [1, "countdown-container"], [1, "timeleft", "count-down"], [4, "ngIf"], [1, "label"], [1, "sale-text"], [1, "loading"], ["src", "/assets/images/loading-dark.svg", "width", "50"], [1, "no-active-sale"], [1, "mint-container"], [1, "mint-container-row"], ["class", "price-block", 4, "ngIf"], [1, "price-block"], [1, "price", "margin-bottom-0"], [1, "fab", "fa-ethereum"], ["id", "price"], [1, "available-mints"], ["src", "/assets/images/gold-house.png", "width", "80", "style", "opacity: .2; margin-top: 10px;", 4, "ngIf"], ["class", "adjustable-houses-container", 4, "ngIf"], ["class", "pricing-range", 4, "ngIf"], ["class", "mint scale-hover", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "ineligible", 4, "ngIf"], ["src", "/assets/images/gold-house.png", "width", "80", 2, "opacity", ".2", "margin-top", "10px"], [1, "adjustable-houses-container"], ["class", "house", 4, "ngFor", "ngForOf"], [1, "house"], ["src", "/assets/images/gold-house.png", "width", "50"], [1, "pricing-range"], ["type", "range", "min", "1", "step", "1", "value", "1", 1, "slider", 3, "max", "disabled", "input"], [1, "purchase-amount-text"], ["type", "button", 1, "mint", "scale-hover", 3, "disabled", "click"], ["class", "mint-loading", 4, "ngIf"], [1, "mint-loading"], ["src", "/assets/images/loading.gif", "width", "25"], [1, "ineligible"], [1, "fas", "fa-minus-circle"], [1, "single-quantity-container"], ["src", "/assets/images/gold-house.png", "width", "80", 4, "ngIf"], ["src", "/assets/images/gold-house.png", "width", "80"], [1, "mint-container", "public"], [1, "price-block", "public-sale"], [1, "price"], ["type", "range", "min", "1", "max", "8", "step", "1", "value", "1", 1, "slider", 3, "disabled", "input"]], template: function MintDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_Template_button_click_1_listener() { return ctx.close(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Mint Propertys");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MintDialogComponent_div_7_Template, 14, 4, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Presale");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Active");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Public Sale");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Reserved");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, MintDialogComponent_div_28_Template, 2, 0, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MintDialogComponent_div_29_Template, 2, 0, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, MintDialogComponent_div_30_Template, 8, 6, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, MintDialogComponent_div_31_Template, 21, 7, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.countdownTime > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("minting breakdown (", ctx.totalMinted, "/6000 Minted)");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.mintingStage["presale"]));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.mintingStage["public"]));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contentLoaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentLoaded && !ctx.mintingStage.presale && !ctx.mintingStage.partner && !ctx.mintingStage.public);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mintingStage.presale && ctx.mintingStage.partner && ctx.contentLoaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mintingStage.public && ctx.contentLoaded);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  \n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto 30px auto;\n  padding: 15px;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .no-active-sale[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n[_nghost-%COMP%]   .loading[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  margin-top: 5px;\n  font-weight: 100;\n}\n[_nghost-%COMP%]   .count-down[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 30px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1;\n  margin-bottom: 10px;\n  letter-spacing: 2px;\n}\n[_nghost-%COMP%]   .adjustable-houses-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -35px;\n  right: -35px;\n  background: none;\n  border-radius: 30px;\n  color: #222;\n  font-size: 23px;\n  padding: 3px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .mint-container.public[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .mint-container.public[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  opacity: 0.7;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mint-container-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mintable-image-container[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   .sale-text[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .available-mints[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: uppercase;\n  margin-bottom: 35px;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .price-block.public-sale[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price.margin-bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .ineligible[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  padding: 12px 10px 12px;\n  background: #482153;\n  color: #b13788;\n  letter-spacing: 1px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  margin-top: 35px;\n}\n[_nghost-%COMP%]   .ineligible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .single-quantity-container[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px auto 30px;\n}\n[_nghost-%COMP%]   .purchase-amount-text[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 30px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .pricing-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .pricing-range[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .supply-container-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 12px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 4px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background: #000000;\n  color: #FFF;\n  border-radius: 15px;\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  position: absolute;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  letter-spacing: 2px;\n  top: -23px;\n  left: 50%;\n  border-radius: 20px;\n  padding: 4px 10px;\n  color: #222;\n  display: none;\n  transform-origin: top left;\n  -webkit-animation: activeScale 0.5s linear infinite;\n  animation: activeScale 0.5s linear infinite;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.private[_ngcontent-%COMP%] {\n  background: #EF7F19;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.private.active[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.public[_ngcontent-%COMP%] {\n  background: #7732AA;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.public.active[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.reserved[_ngcontent-%COMP%] {\n  background: #cce2dd;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.private-sale[_ngcontent-%COMP%] {\n  background: #EF7F19;\n  width: 40%;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.public-sale[_ngcontent-%COMP%] {\n  width: 55%;\n  background: #7732AA;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.team[_ngcontent-%COMP%] {\n  width: 5%;\n  background: #cce2dd;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n[_nghost-%COMP%]   .mint-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .mint-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: initial;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%]:disabled.scale-hover {\n  transform: none;\n}\n@media only screen and (min-height: 0px) and (max-height: 680px) {\n  [_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n    height: 95vh;\n  }\n  [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    overflow: auto;\n    height: 97vh;\n  }\n}\n@media only screen and (min-width: 0px) and (max-width: 830px) {\n  [_nghost-%COMP%]   .double-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .overflow-container[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mint-container-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .close[_ngcontent-%COMP%] {\n    top: -23px;\n    right: -23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL21pbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDTUE7RUE0TUk7O0lBQUE7QUE3TUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBWjtBQUlJO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUxSO0FBT1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7QUFMaEI7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5aO0FBVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNERGxEVztFQ21EWCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFUUjtBQWdCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q3RGE7RUM4RGIsZUFBQTtFQUNBLFlBQUE7QUFkUjtBQWlCSTtFQUNJLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWhCUjtBQW9CWTtFQUNJLGdCQUFBO0FBbEJoQjtBQXFCWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFuQmhCO0FBdUJRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBckJaO0FBd0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdEJaO0FBeUJRO0VBQ0ksa0JBQUE7QUF2Qlo7QUEyQkk7RUFDSSxtRERoSGdCO0VDaUhoQix5QkFBQTtFQUNBLGVBQUE7QUF6QlI7QUE0Qkk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUExQlI7QUE2Qkk7RUFDSSxXQUFBO0FBM0JSO0FBNkJRO0VBQ0ksaUJBQUE7QUEzQlo7QUErQlk7RUFDSSxjQUFBO0FBN0JoQjtBQWlDUTtFQUNJLG1ERDFJWTtFQzJJWixlQUFBO0VBQ0EsbUJBQUE7QUEvQlo7QUFpQ1k7RUFDSSxpQkFBQTtBQS9CaEI7QUFrQ1k7RUFDSSxnQkFBQTtBQWhDaEI7QUFxQ0k7RUFDSSxtQkFBQTtFQUNBLG1ERDFKZ0I7RUMySmhCLHVCQUFBO0VBQ0EsbUJEL0ljO0VDZ0pkLGNEakpXO0VDa0pYLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQW5DUjtBQXFDUTtFQUNJLGtCQUFBO0FBbkNaO0FBdUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBckNSO0FBd0NJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUREdkxnQjtFQ3dMaEIsZUFBQTtBQXRDUjtBQXlDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdkNSO0FBeUNRO0VBQ0ksV0FBQTtBQXZDWjtBQThDSztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBNUNUO0FBK0NLO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE3Q1I7QUErQ1E7RUFDSSxtRER4Tlk7RUN5TlosZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUE3Q1o7QUFnRFE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRDFOWTtFQzJOWixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTlDWjtBQWdEWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUREOU9RO0VDK09SLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0QxT0s7RUMyT0wsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbURBQUE7RUFFQSwyQ0FBQTtBQTlDaEI7QUFpRFk7RUFDSSxtQkFyUUs7QUFzTnJCO0FBa0RvQjtFQUNJLGNBQUE7QUFoRHhCO0FBcURZO0VBQ0ksbUJBOVFJO0FBMk5wQjtBQXNEb0I7RUFDSSxjQUFBO0FBcER4QjtBQXlEWTtFQUNJLG1CQUFBO0FBdkRoQjtBQTRESTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFEUjtBQWdFUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBOURaO0FBZ0VZO0VBQ0ksbUJBaFRLO0VBaVRMLFVBQUE7QUE5RGhCO0FBaUVZO0VBQ0ksVUFBQTtFQUNBLG1CQXJUSTtBQXNQcEI7QUFrRVk7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBaEVoQjtBQXFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW5FUjtBQXFFUTtFQUNJLGtCQUFBO0FBbkVaO0FBdUVJO0VBQ0ksV0FBQTtBQXJFUjtBQXVFUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBckVaO0FBdUVZO0VDMVVGLGVEMlV5QjtBQWxFbkM7QUF1RUk7RUFDSTtJQUNJLFlBQUE7RUFyRVY7RUF1RVU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtFQXJFZDtBQUNGO0FBMEVJO0VBRUk7SUFDSSxzQkFBQTtFQXpFVjtFQTRFTTtJQUNJLFdBQUE7RUExRVY7RUE2RU07SUFDSSxjQUFBO0VBM0VWO0VBOEVNO0lBQ0ksZ0JBQUE7RUE1RVY7RUE4RVU7SUFDSSxlQUFBO0VBNUVkO0VBK0VVO0lBQ0ksbUJBQUE7RUE3RWQ7RUErRWM7SUFDSSxjQUFBO0VBN0VsQjtFQWlGVTtJQUNJLHNCQUFBO0VBL0VkO0VBb0ZNO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUFsRlY7QUFDRiIsImZpbGUiOiJtaW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cblxuLy8gU3RydWN0dXJlXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcblxuLy8gRm9udHNcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtOiBcIkZ1dHVyYSBSb3VuZCBNZWRpdW1cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZDogXCJGdXR1cmEgUm91bmQgU2VtaWJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1ib2xkLWl0YWxpYzogXCJGdXR1cmEgUm91bmQgQm9sZCBPYmxpcXVlXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWJvZHktYm9sZDogXCJGdXR1cmEgUm91bmQgQm9sZFwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG5cbi8vIENvbG9yc1xuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XG4kaGVhZGVyLWJnOiAjNzUwMEVEO1xuJGJvZHktYmc6ICMzMzEyNGU7XG4kcHJpbWFyeS1jb2xvcjogIzc1MDBFRDtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAjYWEzZmZjO1xuJHByaW1hcnktYmctY29sb3ItZGFyazogIzAwMDAwMDtcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiRpbmVsaWdpYmxlLWNvbG9yOiAjYjEzNzg4O1xuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XG4kY29sb3ItZ3JlZW46ICMwMGFiNzg7XG4kY29sb3ItYmctZ3JlZW46ICNFNkZGRjA7XG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xuJGNvbG9yLW9yYW5nZTojREY5RjMwO1xuJGNvbG9yLXJlZDojRkYwNTAwO1xuJGNvbG9yLWJsdWU6IzJGNUJBQztcbiRjb2xvci1kYXJrLWJsdWU6IzM5MzVGRjtcbiRjb2xvci1saWdodC1vcmFuZ2U6I0Q2QzU4RDtcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XG5cbiRzZWNvbmRhcnktY29sb3I6ICM3NzMyYWE7XG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XG4kdXJsLWNvbG9yOiAjZGM5YWYwO1xuJGFjY2VudC1jb2xvcjogI0VGN0YxOTsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zXCI7XG5cbiRwcml2YXRlLXNhbGUtY29sb3I6ICNFRjdGMTk7XG4kcHVibGljLXNhbGUtY29sb3I6ICM3NzMyQUE7XG5cbjpob3N0IHtcbiAgICAubW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ291bnRkb3duIHRpbWVyXG4gICAgLmNvdW50ZG93bi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLm5vLWFjdGl2ZS1zYWxlIHtcbiAgICAgICAgcGFkZGluZzogNTBweFxuICAgIH1cblxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgbWFyZ2luOiAxMDBweCAwO1xuICAgIH1cblxuICAgIC50aW1lbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICY+IGRpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3VudC1kb3duIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OjE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuXG4gICAgLmFkanVzdGFibGUtaG91c2VzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuaG91c2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWZvbnQtY29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cblxuICAgIC5taW50LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIC8vIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcblxuICAgICAgICAmLnB1YmxpYyB7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5taW50LWNvbnRhaW5lci1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubWludGFibGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zYWxlLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5hdmFpbGFibGUtbWludHMge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgIG9wYWNpdHk6IC43O1xuICAgIH1cblxuICAgIC5wcmljZS1ibG9jayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5wdWJsaWMtc2FsZSB7XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5tYXJnaW4tYm90dG9tLTAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5lbGlnaWJsZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGluZWxpZ2libGUtYmctY29sb3I7XG4gICAgICAgIGNvbG9yOiAkaW5lbGlnaWJsZS1jb2xvcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaW5nbGUtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6MTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XG4gICAgfVxuXG4gICAgLnB1cmNoYXNlLWFtb3VudC10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkOyBcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5wcmljaW5nLXJhbmdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgU3VwcGx5IGJyZWFrZG93blxuICAgICAqL1xuICAgICAuc3VwcGx5LWNvbnRhaW5lci10ZXh0IHtcbiAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICBcbiAgICAgfVxuICAgICAuYnJlYWtkb3duLWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWxsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJnLWNvbG9yLWRhcms7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmFjdGl2ZS1ub3cge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDs7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0yM3B4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246YWN0aXZlU2NhbGUgLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbjphY3RpdmVTY2FsZSAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjphY3RpdmVTY2FsZSAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLnByaXZhdGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcml2YXRlLXNhbGUtY29sb3I7XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmUtbm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnB1YmxpYyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHB1YmxpYy1zYWxlLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW5vdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yZXNlcnZlZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjZTJkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdXBwbHktYnJlYWtkb3duIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuYnJlYWtkb3duLXRpdGxlIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLnN1cHBseSB7XG4gICAgICAgICAgICBoZWlnaHQ6MTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAmLnByaXZhdGUtc2FsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaXZhdGUtc2FsZS1jb2xvcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnB1YmxpYy1zYWxlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwdWJsaWMtc2FsZS1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50ZWFtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjZTJkZDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5taW50LWxvYWRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ubWludCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICBjdXJzb3I6IGluaXRpYWw7XG5cbiAgICAgICAgICAgICYuc2NhbGUtaG92ZXIge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShub25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDBweCkgYW5kIChtYXgtaGVpZ2h0OiA2ODBweCkge1xuICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgaGVpZ2h0OiA5NXZoO1xuXG4gICAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTd2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xuXG4gICAgICAgIC5kb3VibGUtYnV0dG9ucyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50ZG93bi1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAub3ZlcmZsb3ctY29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcmljZS1ibG9jayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWludC1jb250YWluZXItcm93IHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgdG9wOiAtMjNweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjNweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iLCJAbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgLW1zLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgICAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAgICAgICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59Il19 */"] });
    return MintDialogComponent;
})();



/***/ })

}]);
//# sourceMappingURL=index-index-module-es2015.js.map