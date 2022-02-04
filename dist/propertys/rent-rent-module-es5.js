(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rent-rent-module"], {
    /***/
    "HWyI":
    /*!****************************************!*\
      !*** ./src/app/rent/rent.component.ts ***!
      \****************************************/

    /*! exports provided: RentComponent */

    /***/
    function HWyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentComponent", function () {
        return RentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _shared_dialogs_brix_contract_approval_dialog_brix_contract_approval_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component */
      "gka6");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/smart-contract-core.service */
      "cIOH");
      /* harmony import */


      var _shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/event-messenger.service */
      "q9MP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/components/app-header/app-header.component */
      "bzJk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/components/app-footer/app-footer.component */
      "mpho");

      function RentComponent_i_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 19);
        }
      }

      function RentComponent_i_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 20);
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Amount Earned");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Amount to Earn");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", unit_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function RentComponent_ng_container_25_div_1_div_1_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Buy on Opensea");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var buyButton_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://opensea.io/collection/propertysofficial?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Street%20Name&search[stringTraits][0][values][0]=", buyButton_r22.street, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", buyButton_r22.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "earned": a0
        };
      };

      function RentComponent_ng_container_25_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RentComponent_ng_container_25_div_1_div_1_div_2_Template, 2, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RentComponent_ng_container_25_div_1_div_1_div_3_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RentComponent_ng_container_25_div_1_div_1_div_10_Template, 2, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RentComponent_ng_container_25_div_1_div_1_div_11_Template, 2, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "320 BRIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RentComponent_ng_container_25_div_1_div_1_li_15_Template, 2, 1, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RentComponent_ng_container_25_div_1_div_1_li_16_Template, 5, 2, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var street_r14 = ctx.$implicit;

          var property_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.isStreetComplete(street_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.isStreetComplete(street_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](property_r12["streetName"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.isStreetComplete(street_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.isStreetComplete(street_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r13.isStreetComplete(street_r14)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", street_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.buildBuyButtonsForStreet(street_r14));
        }
      }

      function RentComponent_ng_container_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RentComponent_ng_container_25_div_1_div_1_Template, 17, 11, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var property_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", property_r12["streets"]);
        }
      }

      function RentComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RentComponent_ng_container_25_div_1_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.propertys);
        }
      }

      function RentComponent_i_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 19);
        }
      }

      function RentComponent_i_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 20);
        }
      }

      function RentComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Muddy Mountains");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Amount to earn");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "2100 BRIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Buy 2 more streets in this district for completion");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_i_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 19);
        }
      }

      function RentComponent_i_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 20);
        }
      }

      function RentComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Beige Bay");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Amount to earn");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "15,500 BRIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Buy 6 more streets in this city for completion");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_span_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Claim all");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function RentComponent_img_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 43);
        }
      }

      var RentComponent = /*@__PURE__*/function () {
        var RentComponent = /*#__PURE__*/function () {
          function RentComponent(smartContractCoreService, eventMessengerService, _dialog) {
            _classCallCheck(this, RentComponent);

            this.smartContractCoreService = smartContractCoreService;
            this.eventMessengerService = eventMessengerService;
            this._dialog = _dialog;
            this.streetViewToggled = true;
            this.districtViewToggled = true;
            this.cityViewToggled = true;
            this.brixClaimLoading = false;
            this.brixTokenApproved = true; // Need to dynamically set this based on smart contract

            this.propertys = []; // Breakdown of the streets

            this.accounts = [];
            this.countdownHours = 0;
            this.countdownMins = 0;
            this.countdownSecs = 0;
          }

          _createClass(RentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // Initialize the countdown
                        this.countdownTimer = setInterval(function () {
                          _this.updateCountdownTimer();
                        }, 1000);
                        this.updateCountdownTimer(); // Startup: Check metamask and populate accounts and then determine if any unis are in wallet

                        _context3.next = 4;
                        return this.checkMetaMaskInstalled();

                      case 4:
                        _context3.next = 6;
                        return this.checkChain();

                      case 6:
                        // Handle events when wallet accounts change
                        this.eventMessengerService.subscribe('accountsChanged', function (event) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var accounts;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    accounts = event.data.accounts;
                                    this.accounts = accounts;
                                    _context.next = 4;
                                    return this.checkChain();

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }); // Handle events when wallet accounts get disconnectd

                        this.eventMessengerService.subscribe('disconnect', function (event) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var accounts;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    accounts = event.data.accounts;
                                    this.accounts = accounts;
                                    _context2.next = 4;
                                    return this.checkChain();

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                        this.loadPropertys();

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
            /**
             * Toggle the container type
             */

          }, {
            key: "toggleContainerType",
            value: function toggleContainerType(type) {
              switch (type) {
                case "street":
                  this.streetViewToggled = !this.streetViewToggled;
                  break;

                case "neighborhood":
                  this.districtViewToggled = !this.districtViewToggled;
                  break;

                case "district":
                  this.cityViewToggled = !this.cityViewToggled;
                  break;
              }
            }
            /**
              * Make sure we are on the correct chain
              */

          }, {
            key: "checkChain",
            value: function checkChain() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _yield$this$smartCont, chainId;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!this.smartContractCoreService.isMetaMaskInstalled()) {
                          _context4.next = 8;
                          break;
                        }

                        _context4.next = 3;
                        return this.smartContractCoreService.provider.getNetwork();

                      case 3:
                        _yield$this$smartCont = _context4.sent;
                        chainId = _yield$this$smartCont.chainId;

                        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chainId === chainId) {
                          this.isOnMainnet = true;
                        } else {
                          this.isOnMainnet = false;
                          this.loading = false;
                        }

                        _context4.next = 10;
                        break;

                      case 8:
                        this.isOnMainnet = false;
                        this.loading = false;

                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }
            /**
               * Ensure metamask is installed so we can get wallet information
               */

          }, {
            key: "checkMetaMaskInstalled",
            value: function checkMetaMaskInstalled() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!this.smartContractCoreService.isMetaMaskInstalled()) {
                          _context5.next = 7;
                          break;
                        }

                        this.isMetaMaskInstalled = true;
                        _context5.next = 4;
                        return this.smartContractCoreService.getWalletAccounts();

                      case 4:
                        this.accounts = _context5.sent;
                        _context5.next = 8;
                        break;

                      case 7:
                        this.isMetaMaskInstalled = false;

                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            }
            /**
             * Claim Brix button
             */

          }, {
            key: "claimBrix",
            value: function claimBrix() {
              // If token hasn't been approved, show modal to approve it
              if (this.brixTokenApproved) {
                this._dialog.open(_shared_dialogs_brix_contract_approval_dialog_brix_contract_approval_dialog_component__WEBPACK_IMPORTED_MODULE_1__["BrixContractApprovalDialogComponent"], {
                  width: '630px',
                  data: {
                    accounts: this.accounts
                  }
                });
              } else {
                this.brixClaimLoading = true;
              }
            }
            /**
             *  Countdown for current window
               */

          }, {
            key: "updateCountdownTimer",
            value: function updateCountdownTimer() {
              var endDate = 1659902000000; // Update this with the end time in milliseconds

              var now = Date.now();
              var t = endDate - now;

              if (t >= 0) {
                this.countdownHours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().padStart(2, '0');
                this.countdownMins = Math.floor(t % (1000 * 60 * 60) / (1000 * 60)).toString().padStart(2, '0');
                this.countdownSecs = Math.floor(t % (1000 * 60) / 1000).toString().padStart(2, '0');
              }
            }
            /**
             *
             * Determine if a street has 7 units
             */

          }, {
            key: "isStreetComplete",
            value: function isStreetComplete(street) {
              return street.length === 7 ? true : false;
            }
            /**
             * Build the "Buy on Opensea" buttons for each street
             */

          }, {
            key: "buildBuyButtonsForStreet",
            value: function buildBuyButtonsForStreet(street) {
              var buyOnOpenSeaArray = [];

              for (var i = 0; i < 7 - street.length; i++) {
                buyOnOpenSeaArray.push({
                  image: street[0]['image'],
                  street: street[0]['street'].replace(' ', '%20')
                });
              }

              return buyOnOpenSeaArray;
            }
            /**
             * Loads all the propertys for a wallet and then organizes the table breakdown
             */

          }, {
            key: "loadPropertys",
            value: function loadPropertys() {
              var _this2 = this;

              this.smartContractCoreService.getNFTsFromAddress(this.accounts[0]).subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var _this3 = this;

                  var streetData, allUnits;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          this.loading = false; // Create some test data

                          streetData = data.concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data); // Iterate through the data and build the streets, districts, and cities

                          allUnits = data.map(function (property) {
                            var propertyObj = {
                              image: property.image_preview_url
                            };

                            var _iterator = _createForOfIteratorHelper(property.traits),
                                _step;

                            try {
                              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var trait = _step.value;

                                // Street
                                if (trait.trait_type === 'Street Name') {
                                  propertyObj['street'] = trait.value;
                                } // District


                                if (trait.trait_type === 'District Name') {
                                  propertyObj['district'] = trait.value;
                                } // City


                                if (trait.trait_type === 'City Name') {
                                  propertyObj['city'] = trait.value;
                                } // Unit


                                if (trait.trait_type === 'Unit') {
                                  propertyObj['unit'] = trait.value;
                                }
                              }
                            } catch (err) {
                              _iterator.e(err);
                            } finally {
                              _iterator.f();
                            }

                            return propertyObj;
                          }); // Create entries for each property in order to catalog all streets under a single street object

                          allUnits.forEach(function (property) {
                            var propertyExists = false;

                            _this3.propertys.forEach(function (singleProperty) {
                              if (property.street === singleProperty.streetName) {
                                propertyExists = true;
                              }
                            });

                            if (!propertyExists) {
                              _this3.propertys.push({
                                streetName: property.street,
                                units: [],
                                streets: []
                              });
                            }
                          }); // Now that we know the streets, go through each one and initialize props for each

                          allUnits.forEach(function (property) {
                            // Now go through all the propertys
                            _this3.propertys.forEach(function (singleProperty) {
                              // We have a street match
                              if (singleProperty.streetName === property.street) {
                                singleProperty.units.push(property);
                              }
                            });
                          }); // Now that we have all the property streets broken down, let's go through and divide them up

                          this.propertys.forEach(function (property) {
                            while (property.units.length) {
                              property.streets.push(property.units.splice(0, 7));
                            }
                          });
                          console.log('propertys', this.propertys);

                        case 7:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));
              });
            }
          }]);

          return RentComponent;
        }();

        RentComponent.ɵfac = function RentComponent_Factory(t) {
          return new (t || RentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_4__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_5__["EventMessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
        };

        RentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
          type: RentComponent,
          selectors: [["app-rent"]],
          decls: 80,
          vars: 15,
          consts: [[1, "wrapper"], [1, "window-text"], [1, "property-type-container"], [1, "property-type-title"], [1, "info-and-actions"], [1, "complete"], [1, "total"], [1, "total-text"], [1, "toggle-view-btn", 3, "click"], ["class", "fas fa-chevron-up", 4, "ngIf"], ["class", "fas fa-chevron-down", 4, "ngIf"], [4, "ngIf"], ["class", "property-list-container", 4, "ngIf"], [1, "rent-collection-summary-container"], [1, "top"], [1, "brix-total"], [1, "claim-all-btn", 3, "disabled", "click"], ["src", "/assets/images/loading.gif", "width", "50", 4, "ngIf"], [1, "wallet-balance"], [1, "fas", "fa-chevron-up"], [1, "fas", "fa-chevron-down"], [4, "ngFor", "ngForOf"], ["class", "property-list-container", 4, "ngFor", "ngForOf"], [1, "property-list-container"], [1, "info"], ["class", "status-icon complete", 4, "ngIf"], ["class", "status-icon", 4, "ngIf"], [1, "column"], [1, "title-text"], [1, "name"], ["class", "title-text", 4, "ngIf"], [1, "amount-to-earn", "earned"], [1, "street-blocks"], [1, "status-icon", "complete"], [1, "fas", "fa-check"], [1, "status-icon"], [1, "fas", "fa-tasks"], ["width", "100%", 3, "src"], ["target", "_blank", 1, "buy-card-btn", 3, "href"], [1, "buy-text"], [1, "amount-to-earn"], ["src", "/assets/images/cards/beige-bay-1.webp", "width", "100%"], ["target", "_blank", "href", "https://opensea.io/collection/propertysofficial?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=City%20Name&search[stringTraits][0][values][0]=Beige%20Bay", 1, "buy-more"], ["src", "/assets/images/loading.gif", "width", "50"]],
          template: function RentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "propertys-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Claim $BRIX");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Streets");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Completed ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "In Progress ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RentComponent_Template_button_click_22_listener() {
                return ctx.toggleContainerType("street");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RentComponent_i_23_Template, 1, 0, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RentComponent_i_24_Template, 1, 0, "i", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RentComponent_ng_container_25_Template, 2, 1, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Districts");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Completed ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "In Progress ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RentComponent_Template_button_click_42_listener() {
                return ctx.toggleContainerType("district");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, RentComponent_i_43_Template, 1, 0, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, RentComponent_i_44_Template, 1, 0, "i", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, RentComponent_div_45_Template, 21, 0, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Cities");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Completed ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "In Progress ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RentComponent_Template_button_click_62_listener() {
                return ctx.toggleContainerType("city");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, RentComponent_i_63_Template, 1, 0, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, RentComponent_i_64_Template, 1, 0, "i", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, RentComponent_div_65_Template, 19, 0, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Total Brix to Claim");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "2500 BRIX");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RentComponent_Template_button_click_72_listener() {
                return ctx.claimBrix();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, RentComponent_span_73_Template, 2, 0, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, RentComponent_img_74_Template, 1, 0, "img", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " In your wallet ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " 436 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "propertys-footer");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("Window for claiming ends in ", ctx.countdownHours, ":", ctx.countdownMins, ":", ctx.countdownSecs, "");

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.streetViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.streetViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.streetViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.districtViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.districtViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.districtViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cityViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cityViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cityViewToggled);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.brixClaimLoading);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.brixClaimLoading);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.brixClaimLoading);
            }
          },
          directives: [_shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__["AppHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__["AppFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
          styles: ["[_nghost-%COMP%] {\n  \n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  padding: 100px 0 100px;\n  width: 1220px;\n  margin: 0 auto;\n  text-align: center;\n}\n[_nghost-%COMP%]   .window-text[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-family: \"ARCO\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #DDDDDD;\n  margin-bottom: 40px;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .property-type-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 1px solid #DDD;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .property-list-container[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.complete[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  background: #E6FFF0;\n  color: #00ab78;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.complete[_ngcontent-%COMP%]   .total-text[_ngcontent-%COMP%] {\n  color: #00ab78;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 14px;\n  border-radius: 4px;\n  color: #666666;\n  padding: 5px;\n  line-height: 1;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  background: #EEEEEE;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .info-and-actions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .total-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: uppercase;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .toggle-view-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  color: #CCC;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   .toggle-view-btn[_ngcontent-%COMP%]:hover {\n  color: #444;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #DDDDDD;\n  padding: 40px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 40px;\n  background: #EEE;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .status-icon.complete[_ngcontent-%COMP%] {\n  background: #E6FFF0;\n  color: #00ab78;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  width: 180px;\n  text-align: left;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  color: #666666;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .amount-to-earn[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border-radius: 4px;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1;\n  background: #EEE;\n  color: #6D6D6D;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .amount-to-earn.earned[_ngcontent-%COMP%] {\n  color: #8F00FF;\n  background: rgba(143, 0, 255, 0.1);\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  display: flex;\n  font-size: 30px;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .total-possible-rent[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  color: #8F00FF;\n  padding: 5px 15px;\n  border-radius: 4px;\n  margin-left: 10px;\n  font-size: 14px;\n  background: rgba(143, 0, 255, 0.1);\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   ul.street-blocks[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 40px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   ul.street-blocks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 80px;\n  min-width: 80px;\n  max-width: 100px;\n  margin-right: 20px;\n  border-radius: 4px;\n  height: 120px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   ul.street-blocks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   ul.street-blocks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-card-btn[_ngcontent-%COMP%] {\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  border: 2px dashed #8F00FF;\n  color: #8F00FF;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  outline: 0;\n  font-size: 15px;\n  display: block;\n  width: 80px;\n  border-radius: 4px;\n  position: relative;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-card-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  background: rgba(0, 0, 0, 0.8);\n  color: #FFF;\n  border-color: #FFF;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-card-btn[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-card-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%;\n  opacity: 0.2;\n  transition: 0.15s ease-in-out;\n  transform: translateX(-50%) translateY(-50%);\n}\n[_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-card-btn[_ngcontent-%COMP%]   .buy-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n[_nghost-%COMP%]   .buy-more[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  font-family: \"Futura Round Semibold\", arial, sans-serif;\n  color: #666666;\n  font-size: 16px;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .buy-more[_ngcontent-%COMP%]:hover {\n  color: #8F00FF;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 100px auto;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 15px;\n  align-items: center;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .brix-total[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  color: #8F00FF;\n  padding: 10px 15px;\n  border-radius: 4px;\n  font-size: 24px;\n  line-height: 1;\n  background: rgba(143, 0, 255, 0.1);\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .claim-all-btn[_ngcontent-%COMP%] {\n  background: #8F00FF;\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n  padding: 15px 0;\n  box-sizing: border-box;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .claim-all-btn[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .claim-all-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: #8F00FF;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .claim-all-btn[_ngcontent-%COMP%]:hover {\n  background: #aa3ffc;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .brix-total[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .brix-total[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 4px;\n  padding: 5px 20px;\n  font-size: 16px;\n  box-sizing: border-box;\n  margin-left: auto;\n  background: #f1f1f1;\n  justify-content: flex-right;\n  margin-top: 15px;\n  width: 100%;\n  text-transform: uppercase;\n  align-items: center;\n}\n[_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n@media only screen and (min-width: 0px) and (max-width: 800px) {\n  [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .property-type-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  [_nghost-%COMP%]   .window-text[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  [_nghost-%COMP%]   .toggle-view-btn[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 30px;\n  }\n  [_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  [_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   ul.street-blocks[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    margin-left: 0;\n    justify-content: center;\n    overflow: auto;\n  }\n  [_nghost-%COMP%]   .property-list-container[_ngcontent-%COMP%]   .buy-more[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 30px;\n    margin-left: 0;\n  }\n  [_nghost-%COMP%]   .rent-collection-summary-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 50px auto 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL3JlbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQUE7QUNHQTtFQWtHSTs7SUFBQTtBQWhHSjtBQUFJO0VBQ0ksc0JBQUE7RUFDQSxhREprQjtFQ0tsQixjQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHNDRE5jO0FDTXRCO0FBR0k7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGWjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQU1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSmhCO0FBTWdCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKcEI7QUFRd0I7RUFDSSxtQkRoQ1g7RUNrQ1csY0RuQ2Q7QUM0QmQ7QUFVd0I7RUFDSSxjRHZDZDtBQytCZDtBQVlvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUREaEVBO0VDaUVBLG1CQUFBO0FBVnhCO0FBYW9CO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0RENUVMO0FDaUVuQjtBQWlCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VDdkZGLDZCRHdGc0I7QUFaaEM7QUFjWTtFQUNJLFdBQUE7QUFaaEI7QUFxQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFuQlI7QUFxQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFuQlo7QUFzQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtBQXRCWjtBQXdCWTtFQUNJLG1CQUFBO0VBQ0EsY0R6R0Y7RUMwR0UsZUFBQTtBQXRCaEI7QUEwQlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUF4Qlo7QUEwQlk7RUFDSSxlQUFBO0FBeEJoQjtBQTJCWTtFQUNJLG1ERHJJUTtFQ3NJUixjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBekJoQjtBQTRCWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBMUJoQjtBQTRCZ0I7RUFDSSxjRDlJSjtFQytJSSxrQ0FBQTtBQTFCcEI7QUErQlE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTdCWjtBQWdDUTtFQUNJLHFERHhLYztFQ3lLZCxjRDlKSTtFQytKSixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUE5Qlo7QUFpQ1E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUEvQlo7QUFpQ1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUEvQmhCO0FBaUNnQjtFQUNJLGVBQUE7QUEvQnBCO0FBa0NnQjtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQWhDcEI7QUF1Q1E7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGNEbk1JO0VDb01KLG1ERDNNWTtFQzRNWixVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQ3hORiw2QkR5TnNCO0FBbENoQztBQW9DWTtFQ3BORixzQkRxTnlCO0VBQ25CLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBL0JoQjtBQWlDZ0I7RUFDSSxZQUFBO0FBL0JwQjtBQW1DWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQzNPTiw2QkQ0TzBCO0VDck8xQiw0Q0RzT3lCO0FBM0JuQztBQStCWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VDOU9OLDRDRCtPeUI7QUExQm5DO0FBK0JJO0VBQ0ksaUJBQUE7RUFDQSx1RER6UG9CO0VDMFBwQixjQUFBO0VBQ0EsZUFBQTtFQy9QRSw2QkRnUWtCO0FBMUI1QjtBQTRCUTtFQUNJLGNEclBJO0FDMk5oQjtBQStCSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQTdCUjtBQStCUTtFQUNJLG1CQUFBO0VBQ0Esc0RENVFPO0FDK09uQjtBQWdDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBOUJaO0FBZ0NZO0VBQ0ksaUJBQUE7RUFDQSxxRERyUlU7RUNzUlYsY0QzUUE7RUM0UUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUE5QmhCO0FBa0NRO0VBQ0ksbUJEclJJO0VDc1JKLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1ERG5TWTtFRVBkLDZCRDJTc0I7QUE3QmhDO0FBK0JZO0VBQ0ksZUFBQTtBQTdCaEI7QUE4QmdCO0VBQ0ksbUJEbFNKO0FDc1FoQjtBQWdDWTtFQUNJLG1CRHRTTTtBQ3dRdEI7QUFrQ1E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzREQ3VE87QUM2Um5CO0FBa0NZO0VBQ0ksa0JBQUE7QUFoQ2hCO0FBb0NRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBbENaO0FBb0NZO0VBQ0ksaUJBQUE7QUFsQ2hCO0FBd0NBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLGNBQUE7RUF0Q047RUEwQ007SUFDSSxlQUFBO0VBeENWO0VBNENFO0lBQ0ksbUJBQUE7RUExQ047RUE2Q0U7SUFDSSxVQUFBO0VBM0NOO0VBOENFO0lBQ0ksc0JBQUE7SUFDQSxhQUFBO0VBNUNOO0VBOENNO0lBQ0ksbUJBQUE7RUE1Q1Y7RUErQ007SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLGNBQUE7RUE3Q1Y7RUFnRE07SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBOUNWO0VBa0RFO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0VBaEROO0FBQ0YiLCJmaWxlIjoicmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cclxuXHJcbi8vIFN0cnVjdHVyZVxyXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1tZWRpdW06IFwiRnV0dXJhIFJvdW5kIE1lZGl1bVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQ6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBCb2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQ6IFwiRnV0dXJhIFJvdW5kIEJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XHJcbiRoZWFkZXItYmc6ICM4RjAwRkY7XHJcbiRib2R5LWJnOiAjMzMxMjRlO1xyXG4kcHJpbWFyeS1jb2xvcjogIzhGMDBGRjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICNhYTNmZmM7XHJcbiRwcmltYXJ5LWJnLWNvbG9yLWRhcms6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG4kaW5lbGlnaWJsZS1jb2xvcjogI2IxMzc4ODtcclxuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XHJcbiRjb2xvci1ncmVlbjogIzAwYWI3ODtcclxuJGNvbG9yLWJnLWdyZWVuOiAjRTZGRkYwO1xyXG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xyXG4kY29sb3Itb3JhbmdlOiNERjlGMzA7XHJcbiRjb2xvci1yZWQ6I0ZGMDUwMDtcclxuJGNvbG9yLWJsdWU6IzJGNUJBQztcclxuJGNvbG9yLWRhcmstYmx1ZTojMzkzNUZGO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiNENkM1OEQ7XHJcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzczMmFhO1xyXG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XHJcbiR1cmwtY29sb3I6ICNkYzlhZjA7XHJcbiRhY2NlbnQtY29sb3I6ICNFRjdGMTk7IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zJztcclxuXHJcbjpob3N0IHtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAxMDBweDtcclxuICAgICAgICB3aWR0aDogJHdyYXBwZXItY29udGFpbmVyLXdpZHRoO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAud2luZG93LXRleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1oZWFkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9wZXJ0eS10eXBlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI0RERERERDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9wZXJ0eS10eXBlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvcGVydHktbGlzdC1jb250YWluZXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mby1hbmQtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuY29tcGxldGUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1iZy1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvdGFsLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvdGFsLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b2dnbGUtdmlldy1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNDQ0M7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBTdHJlZXQgc3BlY2lmaWMgc2VjdGlvbnNcclxuICAgICAqL1xyXG4gICAgLnByb3BlcnR5LWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREREREQ7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUVFO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAmLmNvbXBsZXRlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNkZGRjA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sdW1uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFtb3VudC10by1lYXJuIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZENkQ2RDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmVhcm5lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAwLCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3RhbC1wb3NzaWJsZS1yZW50IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LW1lZGl1bTtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAwLCAyNTUsIC4xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsLnN0cmVldC1ibG9ja3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1eS1jYXJkLWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgxLjA1KSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkZGO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMjtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5idXktdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV5LW1vcmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZDtcclxuICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMTVzIGVhc2UtaW4tb3V0KTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5yZW50LWNvbGxlY3Rpb24tc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuYnJpeC10b3RhbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1tZWRpdW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgMCwgMjU1LCAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbGFpbS1hbGwtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMTVzIGVhc2UtaW4tb3V0KTtcclxuXHJcbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5icml4LXRvdGFsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YWxsZXQtYmFsYW5jZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC50b3RhbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9wZXJ0eS10eXBlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aW5kb3ctdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlLXZpZXctYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9wZXJ0eS1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bC5zdHJlZXQtYmxvY2tzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV5LW1vcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZW50LWNvbGxlY3Rpb24tc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvIDA7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG59IiwiQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAgIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufSJdfQ== */"]
        });
        return RentComponent;
      }();
      /***/

    },

    /***/
    "RNv4":
    /*!*************************************!*\
      !*** ./src/app/rent/rent.module.ts ***!
      \*************************************/

    /*! exports provided: RentModule */

    /***/
    function RNv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RentModule", function () {
        return RentModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _rent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rent.component */
      "HWyI");
      /* harmony import */


      var _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/components/app-header/app-header.module */
      "wSNE");
      /* harmony import */


      var _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/components/app-footer/app-footer.module */
      "vvQE");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_dialogs_brix_contract_approval_dialog_brix_contract_approval_dialog_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.module */
      "x+EH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RentModule = /*@__PURE__*/function () {
        var RentModule = /*#__PURE__*/_createClass(function RentModule() {
          _classCallCheck(this, RentModule);
        });

        RentModule.ɵfac = function RentModule_Factory(t) {
          return new (t || RentModule)();
        };

        RentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
          type: RentModule,
          bootstrap: [_rent_component__WEBPACK_IMPORTED_MODULE_3__["RentComponent"]]
        });
        RentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            useValue: {}
          }],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"], _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _shared_dialogs_brix_contract_approval_dialog_brix_contract_approval_dialog_module__WEBPACK_IMPORTED_MODULE_7__["BrixContractApprovalDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
            path: '',
            component: _rent_component__WEBPACK_IMPORTED_MODULE_3__["RentComponent"]
          }])]]
        });
        return RentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RentModule, {
          declarations: [_rent_component__WEBPACK_IMPORTED_MODULE_3__["RentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"], _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_5__["AppFooterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _shared_dialogs_brix_contract_approval_dialog_brix_contract_approval_dialog_module__WEBPACK_IMPORTED_MODULE_7__["BrixContractApprovalDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_rent_component__WEBPACK_IMPORTED_MODULE_3__["RentComponent"]]
        });
      })();
      /***/

    },

    /***/
    "gka6":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: BrixContractApprovalDialogComponent */

    /***/
    function gka6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrixContractApprovalDialogComponent", function () {
        return BrixContractApprovalDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/smart-contract-core.service */
      "cIOH");
      /* harmony import */


      var _services_event_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/event-messenger.service */
      "q9MP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BrixContractApprovalDialogComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
        }
      }

      function BrixContractApprovalDialogComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Approve");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var BrixContractApprovalDialogComponent = /*@__PURE__*/function () {
        var BrixContractApprovalDialogComponent = /*#__PURE__*/function () {
          function BrixContractApprovalDialogComponent(_data, dialogRef, smartContractCoreService, // public smartContractBrixService: SmartContractBrixService,
          eventMessengerService) {
            _classCallCheck(this, BrixContractApprovalDialogComponent);

            this._data = _data;
            this.dialogRef = dialogRef;
            this.smartContractCoreService = smartContractCoreService;
            this.eventMessengerService = eventMessengerService;
            this.accounts = [];
            this.loading = false;
            this.accounts = _data.accounts;
          }

          _createClass(BrixContractApprovalDialogComponent, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var _this4 = this;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        // Handle changing account
                        this.eventMessengerService.subscribe('metmask.accountsChanged', function (event) {
                          var accounts = event.data.accounts;
                          _this4.accounts = accounts; // this.handleMetamaskAccounts();
                        });
                        this.eventMessengerService.subscribe('metmask.disconnect', function (event) {// this.dialogRef.close();
                        }); // this.handleMetamaskAccounts();

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }
          }, {
            key: "handleMetamaskAccounts",
            value: function handleMetamaskAccounts() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (this.accounts.length == 0) {// this.dialogRef.close();
                        } else {}

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }
            /**
             * Approve UCD for use with burning for services
             */

          }, {
            key: "approveBrix",
            value: function approveBrix() {// this.smartContractBrixService.setApprovalForBrix().then(async (tx: any) => {
              // 	this.loading = true;
              //     tx.wait().then((success: any) => {
              // 		// Reset quest state
              // 		this.loading = false;
              //         this.close();
              //         this.toastr.success("Permissions approved successfully")
              //     });
              // })
              // .catch(err => {
              // 	this.loading = false;
              // })
            }
          }, {
            key: "close",
            value: function close() {
              this.dialogRef.close();
            }
          }]);

          return BrixContractApprovalDialogComponent;
        }();

        BrixContractApprovalDialogComponent.ɵfac = function BrixContractApprovalDialogComponent_Factory(t) {
          return new (t || BrixContractApprovalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_3__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_4__["EventMessengerService"]));
        };

        BrixContractApprovalDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: BrixContractApprovalDialogComponent,
          selectors: [["brix-contract-approval-dialog"]],
          decls: 12,
          vars: 3,
          consts: [[1, "modal"], [1, "title"], [1, "actions"], [1, "primary", "cta", 3, "disabled", "click"], ["src", "/assets/images/loading.gif", "width", "24", 4, "ngIf"], [4, "ngIf"], [1, "close", 3, "click"], ["src", "/assets/images/loading.gif", "width", "24"]],
          template: function BrixContractApprovalDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Requesting Permissions");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "We need your approval in order to claim BRIX Tokens");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BrixContractApprovalDialogComponent_Template_button_click_7_listener() {
                return ctx.approveBrix();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BrixContractApprovalDialogComponent_img_8_Template, 1, 0, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BrixContractApprovalDialogComponent_span_9_Template, 2, 0, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BrixContractApprovalDialogComponent_Template_button_click_10_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Close");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          styles: ["[_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 24px;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .primary.cta[_ngcontent-%COMP%] {\n  width: 200px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 30px;\n  align-items: center;\n}\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  color: #666;\n  background: none;\n}\n@media only screen and (min-width: 0px) and (max-width: 830px) {\n  [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2JyaXgtY29udHJhY3QtYXBwcm92YWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDS0k7RUFDSSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxtRERDZ0I7RUNBaEIsZUFBQTtFQUNBLGFBQUE7QUFKUjtBQU9JO0VBQ0ksaUJBQUE7RUFDQSxzRERYVztFQ1lYLGVBQUE7QUFMUjtBQVFJO0VBQ0ksWUFBQTtFQUNBLG1ERFpnQjtBQ014QjtBQVNJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNRO0VBQ0ksa0JBQUE7QUFQWjtBQVNZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBUGhCO0FBYUk7RUFFSTtJQUNJLHNCQUFBO0VBWlY7RUFjVTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQVpkO0FBQ0YiLCJmaWxlIjoiYnJpeC1jb250cmFjdC1hcHByb3ZhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgVmFyaWFibGVzICovXHJcblxyXG4vLyBTdHJ1Y3R1cmVcclxuJHdyYXBwZXItY29udGFpbmVyLXdpZHRoOiAxMjIwcHg7XHJcblxyXG4vLyBGb250c1xyXG4kZm9udC1mYW1pbHktYm9keTogXCJGdXR1cmEgUm91bmQgUmVndWxhclwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtOiBcIkZ1dHVyYSBSb3VuZCBNZWRpdW1cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LXNlbWlib2xkOiBcIkZ1dHVyYSBSb3VuZCBTZW1pYm9sZFwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBTZW1pYm9sZCBPYmxpcXVlXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1ib2xkLWl0YWxpYzogXCJGdXR1cmEgUm91bmQgQm9sZCBPYmxpcXVlXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1ib2xkOiBcIkZ1dHVyYSBSb3VuZCBCb2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZzogXCJBUkNPXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRwcmltYXJ5LWJnLWNvbG9yOiAjNTUwMTk2O1xyXG4kaGVhZGVyLWJnOiAjOEYwMEZGO1xyXG4kYm9keS1iZzogIzMzMTI0ZTtcclxuJHByaW1hcnktY29sb3I6ICM4RjAwRkY7XHJcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiAjYWEzZmZjO1xyXG4kcHJpbWFyeS1iZy1jb2xvci1kYXJrOiAjMDAwMDAwO1xyXG4kcHJpbWFyeS1mb250LWNvbG9yOiAjMjIyO1xyXG4kcHJpbWFyeS1mb250LWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuJGluZWxpZ2libGUtY29sb3I6ICNiMTM3ODg7XHJcbiRpbmVsaWdpYmxlLWJnLWNvbG9yOiAjNDgyMTUzO1xyXG4kY29sb3ItZ3JlZW46ICMwMGFiNzg7XHJcbiRjb2xvci1iZy1ncmVlbjogI0U2RkZGMDtcclxuJGNvbG9yLXllbGxvdzogI0U4RDMyMjtcclxuJGNvbG9yLW9yYW5nZTojREY5RjMwO1xyXG4kY29sb3ItcmVkOiNGRjA1MDA7XHJcbiRjb2xvci1ibHVlOiMyRjVCQUM7XHJcbiRjb2xvci1kYXJrLWJsdWU6IzM5MzVGRjtcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTojRDZDNThEO1xyXG4kY29sb3Itc2lsdmVyOiAjZTZlM2UxO1xyXG5cclxuJHNlY29uZGFyeS1jb2xvcjogIzc3MzJhYTtcclxuJHNlY29uZGFyeS1mb250LWNvbG9yOiAjNzczMmFhO1xyXG4kdXJsLWNvbG9yOiAjZGM5YWYwO1xyXG4kYWNjZW50LWNvbG9yOiAjRUY3RjE5OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG5cclxuICAgIC5tb2RhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmltYXJ5LmN0YSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgJi5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
        });
        return BrixContractApprovalDialogComponent;
      }();
      /***/

    },

    /***/
    "x+EH":
    /*!******************************************************************************************************!*\
      !*** ./src/app/shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: BrixContractApprovalDialogModule */

    /***/
    function xEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrixContractApprovalDialogModule", function () {
        return BrixContractApprovalDialogModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _brix_contract_approval_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brix-contract-approval-dialog.component */
      "gka6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BrixContractApprovalDialogModule = /*@__PURE__*/function () {
        var BrixContractApprovalDialogModule = /*#__PURE__*/_createClass(function BrixContractApprovalDialogModule() {
          _classCallCheck(this, BrixContractApprovalDialogModule);
        });

        BrixContractApprovalDialogModule.ɵfac = function BrixContractApprovalDialogModule_Factory(t) {
          return new (t || BrixContractApprovalDialogModule)();
        };

        BrixContractApprovalDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
          type: BrixContractApprovalDialogModule
        });
        BrixContractApprovalDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
          providers: [],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
        });
        return BrixContractApprovalDialogModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BrixContractApprovalDialogModule, {
          declarations: [_brix_contract_approval_dialog_component__WEBPACK_IMPORTED_MODULE_3__["BrixContractApprovalDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_brix_contract_approval_dialog_component__WEBPACK_IMPORTED_MODULE_3__["BrixContractApprovalDialogComponent"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=rent-rent-module-es5.js.map