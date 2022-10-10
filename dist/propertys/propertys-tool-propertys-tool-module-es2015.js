(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propertys-tool-propertys-tool-module"],{

/***/ "KEon":
/*!*********************************************************!*\
  !*** ./src/app/propertys-tool/propertys-tool.module.ts ***!
  \*********************************************************/
/*! exports provided: PropertysToolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertysToolModule", function() { return PropertysToolModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _propertys_tool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertys-tool.component */ "mikU");
/* harmony import */ var _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/app-header/app-header.module */ "wSNE");
/* harmony import */ var _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/app-footer/app-footer.module */ "vvQE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








let PropertysToolModule = /*@__PURE__*/ (() => {
    class PropertysToolModule {
    }
    PropertysToolModule.ɵfac = function PropertysToolModule_Factory(t) { return new (t || PropertysToolModule)(); };
    PropertysToolModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PropertysToolModule, bootstrap: [_propertys_tool_component__WEBPACK_IMPORTED_MODULE_3__["PropertysToolComponent"]] });
    PropertysToolModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
                _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
                        path: '',
                        component: _propertys_tool_component__WEBPACK_IMPORTED_MODULE_3__["PropertysToolComponent"]
                    }])
            ]] });
    return PropertysToolModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PropertysToolModule, { declarations: [_propertys_tool_component__WEBPACK_IMPORTED_MODULE_3__["PropertysToolComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
            _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_propertys_tool_component__WEBPACK_IMPORTED_MODULE_3__["PropertysToolComponent"]] });
})();



/***/ }),

/***/ "mikU":
/*!************************************************************!*\
  !*** ./src/app/propertys-tool/propertys-tool.component.ts ***!
  \************************************************************/
/*! exports provided: PropertysToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertysToolComponent", function() { return PropertysToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/app-header/app-header.component */ "bzJk");
/* harmony import */ var _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/app-footer/app-footer.component */ "mpho");




let PropertysToolComponent = /*@__PURE__*/ (() => {
    class PropertysToolComponent {
        constructor() { }
        ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            });
        }
    }
    PropertysToolComponent.ɵfac = function PropertysToolComponent_Factory(t) { return new (t || PropertysToolComponent)(); };
    PropertysToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PropertysToolComponent, selectors: [["app-propertys-tool"]], decls: 4, vars: 0, consts: [[2, "height", "2500px", "padding-top", "80px"], ["id", "inlineFrameExample", "title", "Inline Frame Example", "width", "100%", "height", "2500px", "src", "https://0xbgoat-propertys-tool-streamlit-app-5ma902.streamlitapp.com?embedded=true", 2, "position", "absolute", "border", "0"]], template: function PropertysToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "propertys-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "iframe", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "propertys-footer");
            }
        }, directives: [_shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"], _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"]], styles: ["@media only screen and (min-width: 0px) and (max-width: 800px) {\n  [_nghost-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL3Byb3BlcnR5cy10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDSUk7RUFDSTtJQUNJLFdBQUE7RUFGVjtBQUNGIiwiZmlsZSI6InByb3BlcnR5cy10b29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIFZhcmlhYmxlcyAqL1xuXG4vLyBTdHJ1Y3R1cmVcbiR3cmFwcGVyLWNvbnRhaW5lci13aWR0aDogMTIyMHB4O1xuXG4vLyBGb250c1xuJGZvbnQtZmFtaWx5LWJvZHk6IFwiRnV0dXJhIFJvdW5kIFJlZ3VsYXJcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1tZWRpdW06IFwiRnV0dXJhIFJvdW5kIE1lZGl1bVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5LXNlbWlib2xkOiBcIkZ1dHVyYSBSb3VuZCBTZW1pYm9sZFwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5LXNlbWlib2xkLWl0YWxpYzogXCJGdXR1cmEgUm91bmQgU2VtaWJvbGQgT2JsaXF1ZVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBCb2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktYm9keS1ib2xkOiBcIkZ1dHVyYSBSb3VuZCBCb2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LWhlYWRpbmc6IFwiQVJDT1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcblxuLy8gQ29sb3JzXG4kcHJpbWFyeS1iZy1jb2xvcjogIzU1MDE5NjtcbiRoZWFkZXItYmc6ICM3NTAwRUQ7XG4kYm9keS1iZzogIzMzMTI0ZTtcbiRwcmltYXJ5LWNvbG9yOiAjNzUwMEVEO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6ICNhYTNmZmM7XG4kcHJpbWFyeS1iZy1jb2xvci1kYXJrOiAjMDAwMDAwO1xuJHByaW1hcnktZm9udC1jb2xvcjogIzIyMjtcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xuJGluZWxpZ2libGUtY29sb3I6ICNiMTM3ODg7XG4kaW5lbGlnaWJsZS1iZy1jb2xvcjogIzQ4MjE1MztcbiRjb2xvci1ncmVlbjogIzAwYWI3ODtcbiRjb2xvci1iZy1ncmVlbjogI0U2RkZGMDtcbiRjb2xvci15ZWxsb3c6ICNFOEQzMjI7XG4kY29sb3Itb3JhbmdlOiNERjlGMzA7XG4kY29sb3ItcmVkOiNGRjA1MDA7XG4kY29sb3ItYmx1ZTojMkY1QkFDO1xuJGNvbG9yLWRhcmstYmx1ZTojMzkzNUZGO1xuJGNvbG9yLWxpZ2h0LW9yYW5nZTojRDZDNThEO1xuJGNvbG9yLXNpbHZlcjogI2U2ZTNlMTtcblxuJHNlY29uZGFyeS1jb2xvcjogIzc3MzJhYTtcbiRzZWNvbmRhcnktZm9udC1jb2xvcjogIzc3MzJhYTtcbiR1cmwtY29sb3I6ICNkYzlhZjA7XG4kYWNjZW50LWNvbG9yOiAjRUY3RjE5OyIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9taXhpbnMnO1xuXG46aG9zdCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbn0iXX0= */"] });
    return PropertysToolComponent;
})();



/***/ })

}]);
//# sourceMappingURL=propertys-tool-propertys-tool-module-es2015.js.map