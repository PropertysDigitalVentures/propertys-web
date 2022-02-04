(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"], {
    /***/
    "+Fro":
    /*!******************************************************************!*\
      !*** ./src/app/shared/dialogs/mint-dialog/mint-dialog.module.ts ***!
      \******************************************************************/

    /*! exports provided: MintDialogModule */

    /***/
    function Fro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MintDialogModule", function () {
        return MintDialogModule;
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


      var _mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mint-dialog.component */
      "yIhK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MintDialogModule = /*@__PURE__*/function () {
        var MintDialogModule = /*#__PURE__*/_createClass(function MintDialogModule() {
          _classCallCheck(this, MintDialogModule);
        });

        MintDialogModule.ɵfac = function MintDialogModule_Factory(t) {
          return new (t || MintDialogModule)();
        };

        MintDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: MintDialogModule
        });
        MintDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          providers: [],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
        });
        return MintDialogModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MintDialogModule, {
          declarations: [_mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MintDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_mint_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MintDialogComponent"]]
        });
      })();
      /***/

    },

    /***/
    "0L5U":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js ***!
      \*******************************************************************************************************/

    /*! exports provided: CarouselComponent, IvyCarouselModule */

    /***/
    function L5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function () {
        return IvyCarouselModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CarouselComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
        }
      }

      function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
        }
      }

      function CarouselComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

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
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
        }
      }

      function CarouselComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
        }
      }

      var _c0 = ["*"];

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this = this;

          _classCallCheck(this, Touches);

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

          this.handleTouchstart = function (event) {
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getTouchstartPosition(event);
            }

            _this.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this.detectPan(touches)) {
              _this.runHandler("pan", event);
            } // Pinch


            if (_this.detectPinch(event)) {
              _this.runHandler("pinch", event);
            } // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this.detectDoubleTap()) {
              _this.runHandler("double-tap", event);
            } // Tap


            _this.detectTap();

            _this.runHandler("touchend", event);

            _this.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this.eventType = undefined;
              _this.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this.isMousedown = true;
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getMousedownPosition(event);
            }

            _this.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this.isMousedown) {
              return;
            } // Pan


            _this.runHandler("pan", event); // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this.detectTap();

            _this.isMousedown = false;

            _this.runHandler("mouseup", event);

            _this.eventType = undefined;
            _this.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "touchListeners",
          get: function get() {
            return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
          }
        }, {
          key: "mouseListeners",
          get: function get() {
            return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
          }
        }, {
          key: "otherListeners",
          get: function get() {
            return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], {
                    passive: false
                  });
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.addEventListener(listener, this[handler], false);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.removeEventListener(listener, this[handler], false);
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
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
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this2 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this2.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
            return undefined;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
              } else {
                this.runHandler("longtap", event);
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }

            return undefined;
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var Carousel = /*#__PURE__*/function () {
        function Carousel(properties, utils, cells, container, slide) {
          var _this3 = this;

          _classCallCheck(this, Carousel);

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

          this.handleTouchstart = function (event) {
            _this3.container.handleTouchstart();

            _this3.slide.handleTouchstart(event);
          };

          this.handleHorizontalSwipe = function (event) {
            _this3.container.handleHorizontalSwipe();
          };

          this.handleTouchend = function (event) {
            if (_this3.properties.freeScroll) {
              _this3.container.handleTouchend();
            } else {
              _this3.container.handleTouchend(true);

              _this3.slide.handleTouchend(event);
            }
          };

          this.isNextArrowDisabled = function () {
            return _this3.slide.isNextArrowDisabled();
          };

          this.isPrevArrowDisabled = function () {
            return _this3.slide.isPrevArrowDisabled();
          };

          this.init();
        }

        _createClass(Carousel, [{
          key: "cellLength",
          get: function get() {
            return this.cells.cellLength;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "lastCellIndex",
          get: function get() {
            return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.isLightDOM) {
              var cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
              }

              return cellLimit;
            } else {
              return this.properties.images.length;
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.properties.lightDOM || this.properties.loop;
          }
        }, {
          key: "images",
          get: function get() {
            return this.properties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.properties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.properties.minSwipeDistance;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.properties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.properties.transitionTimingFunction;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.properties.cellWidth + this.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "lapCounter",
          get: function get() {
            return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
          }
        }, {
          key: "slideCounter",
          get: function get() {
            return this.slide.counter;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(properties) {
            this.properties = properties;
          }
        }, {
          key: "init",
          value: function init() {
            this.cellsElement = this.properties.cellsElement;
            this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            clearInterval(this.autoplayId);
          }
        }, {
          key: "lineUpCells",
          value: function lineUpCells() {
            this.cells.lineUp();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.slide.handleTransitionend();
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.cells.getImage(index);
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this.isNextArrowDisabled()) {
              this.slide.next(length);
            }
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.slide.prev(length);
          }
        }, {
          key: "autoplay",
          value: function autoplay() {
            var _this4 = this;

            this.autoplayId = setInterval(function () {
              _this4.next();
            }, this.properties.autoplayInterval);
          }
        }, {
          key: "stopAutoplay",
          value: function stopAutoplay() {
            if (this.autoplayId) {
              clearInterval(this.autoplayId);
            }
          }
        }]);

        return Carousel;
      }();

      var Container = /*#__PURE__*/function () {
        function Container(carouselProperties, utils, cells) {
          _classCallCheck(this, Container);

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

        _createClass(Container, [{
          key: "visibleWidth",
          get: function get() {
            return this.utils.visibleWidth;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "element",
          get: function get() {
            return this.carouselProperties.cellsElement;
          }
        }, {
          key: "freeScroll",
          get: function get() {
            return this.carouselProperties.freeScroll;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.carouselProperties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.carouselProperties.transitionTimingFunction;
          }
        }, {
          key: "cellLength",
          get: function get() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cells.cellLength;
            }
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "tooFewCells",
          get: function get() {
            return this.numberOfVisibleCells > this.cellLength;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.tooFewCells;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "init",
          value: function init() {
            this.setWidth();
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
          }
        }, {
          key: "handleHorizontalSwipe",
          value: function handleHorizontalSwipe() {
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
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            var simpleProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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
        }, {
          key: "move",
          value: function move() {
            var positionX = this.getMovePositionX();
            var isPulled = this.detectPulled();
            var direction = this.getDirection();

            if (isPulled) {
              if (isPulled.edge === "left" && direction === "right" || isPulled.edge === "right" && direction === "left") {
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
        }, {
          key: "getMovePositionX",
          value: function getMovePositionX() {
            var distance = this.getDistance();
            return this.initialElementPositionX - distance;
          }
        }, {
          key: "getDistance",
          value: function getDistance() {
            return this.startX - this.moveX;
          }
          /* If the container is pulled out of the left or right border */

        }, {
          key: "detectPulled",
          value: function detectPulled() {
            var currentPositionX = this.getCurrentPositionX();

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
        }, {
          key: "slowdownOnPull",
          value: function slowdownOnPull(_positionX) {
            var distance = Math.abs(this.getDistance());
            var endPosition = this.getEndPosition();
            var isPulled = this.detectPulled();

            if (!isPulled) {
              return 0;
            }

            var decelerationRatio = 3 + isPulled.overflowX / 50;
            var positionX = 0;

            if (isPulled.edge === 'left') {
              if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
              }

              var rubberPositionX = distance / decelerationRatio;
              positionX = rubberPositionX;

              if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
              }

              if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
              }
            }

            if (isPulled.edge === 'right') {
              var _rubberPositionX = endPosition + (this.initialElementPositionX - distance - endPosition) / decelerationRatio;

              var containerWidth = this.getWidth();
              positionX = _rubberPositionX;

              if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = containerWidth - this.visibleWidth + this.initialElementPositionX + _rubberPositionX;
              }

              if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
              }
            }

            return positionX;
          }
        }, {
          key: "finishMoving",
          value: function finishMoving() {
            var positionX = this.getMovePositionX();
            var newPositionX = 0;

            if (this.freeScroll) {
              newPositionX = this.getInertia();
            }
            /* Align container while pulling */


            newPositionX = this.getAlignedPositionOnPull(newPositionX);
            this.transformPositionX(newPositionX);
            this.setInitialPosition(positionX);
          }
          /* Returns the new position of the container with inertia */

        }, {
          key: "getInertia",
          value: function getInertia() {
            var distance = this.getDistance();
            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.startTime;
            var inertia = distance / tapLength * 100;
            return this.initialPositionX - inertia;
          }
        }, {
          key: "getAlignedPositionOnPull",
          value: function getAlignedPositionOnPull(newPositionX) {
            var direction = this.getDirection();

            if (direction === 'left') {
              var endPosition = this.getEndPosition();

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
        }, {
          key: "getCurrentPositionX",
          value: function getCurrentPositionX() {
            var parentPosition = this.element.parentElement.getBoundingClientRect();
            var position = this.element.getBoundingClientRect();
            return position.left - parentPosition.left;
          }
        }, {
          key: "getEndPosition",
          value: function getEndPosition() {
            if (this.isLightDOM) {
              var imagesInContainer = this.cells.imageUtils.getImages();
              return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
            } else {
              var width = this.getWidth();
              var visibleWidth = this.element.parentElement.clientWidth;
              return visibleWidth - width;
            }
          }
        }, {
          key: "transformPositionX",
          value: function transformPositionX(value) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;

            if (value === undefined) {
              return;
            }

            this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
            this.element.style.transform = 'translateX(' + value + 'px)';
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            var width = this.cellLengthInLightDOMMode * this.fullCellWidth;
            var totalImageWidth = this.cellLength * this.fullCellWidth;

            if (totalImageWidth < width) {
              width = totalImageWidth;
            }

            return this.isLightDOM ? width : totalImageWidth;
          }
        }, {
          key: "setWidth",
          value: function setWidth() {
            var width = this.getWidth();
            this.element.style.width = width + "px";
          }
        }, {
          key: "setInitialPosition",
          value: function setInitialPosition(position) {
            this.initialPositionX = position;
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getInitialElementPositionX",
          value: function getInitialElementPositionX() {
            var carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
            return this.getElementPosition()['left'] - carouselElementPosition;
          }
        }, {
          key: "clearInitialValues",
          value: function clearInitialValues() {
            this.startX = this.moveX = 0;
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.startX - this.moveX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }]);

        return Container;
      }();

      var ImageUtils = /*#__PURE__*/function () {
        function ImageUtils(element) {
          _classCallCheck(this, ImageUtils);

          this.cellStack = [];
          this.element = element;
        }

        _createClass(ImageUtils, [{
          key: "getImages",
          value: function getImages() {
            return this.cellStack.filter(this.filter);
          }
        }, {
          key: "filter",
          value: function filter(cell) {
            return cell.img !== undefined;
          }
        }]);

        return ImageUtils;
      }();

      var Cells = /*#__PURE__*/function () {
        function Cells(carouselProperties, utils) {
          _classCallCheck(this, Cells);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.counter = 0;
          this.imageUtils = new ImageUtils(this.element);
          this.init(carouselProperties);
        }

        _createClass(Cells, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "cellLength",
          get: function get() {
            return this.cells ? this.cells.length : 0;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "lineUp",
          value: function lineUp() {
            var cells = this.element ? this.element.children : [];
            this.imageUtils.cellStack = [];

            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              var positionX = this.getCellPositionInContainer(i);
              cell.style.transform = 'translateX(' + positionX + 'px)';
              cell.style.width = this.carouselProperties.cellWidth + 'px';

              if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                  index: i,
                  positionX: positionX,
                  img: this.getImage(i)['image']
                });
              }
            }

            ;
          }
        }, {
          key: "ifSequenceOfCellsIsChanged",
          value: function ifSequenceOfCellsIsChanged() {
            var cells = this.element.children;
            return cells[0]['style'].transform !== 'translateX(0px)';
          }
        }, {
          key: "getCellPositionInContainer",
          value: function getCellPositionInContainer(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            return positionIndex * this.fullCellWidth;
          }
        }, {
          key: "getCellIndexInContainer",
          value: function getCellIndexInContainer(cellIndexInDOMTree) {
            var positionIndex;

            if (!this.isLightDOM) {
              return cellIndexInDOMTree;
            }

            var cellLength = this.cellLengthInLightDOMMode;
            var counter = this.counter - this.overflowCellsLimit;

            if (counter > cellLength) {
              counter = counter % cellLength;
            }

            if (counter < 0) {
              return cellIndexInDOMTree;
            } else {
              positionIndex = cellIndexInDOMTree - counter;

              if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
              }
            }

            return positionIndex;
          }
        }, {
          key: "getImage",
          value: function getImage(cellIndex) {
            if (!this.images) {
              return;
            }

            var imageIndex = this.getImageIndex(cellIndex);
            var file = this.images[imageIndex];

            if (file && !file.type) {
              file.type = 'image';
            }

            return {
              image: this.images[imageIndex],
              imageIndex: imageIndex
            };
          }
        }, {
          key: "getImageIndex",
          value: function getImageIndex(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            var imageIndex;

            if (this.counter > this.overflowCellsLimit) {
              var cellLimitOverflow = this.counter - this.overflowCellsLimit;
              imageIndex = positionIndex + cellLimitOverflow;

              if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
              }
            } else {
              imageIndex = cellIndexInDOMTree;
            }

            return imageIndex;
          }
        }, {
          key: "setCounter",
          value: function setCounter(value) {
            this.counter = value;
          }
        }, {
          key: "init",
          value: function init(carouselProperties) {
            this.element = this.carouselProperties.cellsElement;
            this.cells = this.element.children;
            this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
          }
        }]);

        return Cells;
      }();

      var Slide = /*#__PURE__*/function () {
        function Slide(carouselProperties, utils, cells, container) {
          _classCallCheck(this, Slide);

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

        _createClass(Slide, [{
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.carouselProperties.minSwipeDistance;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.utils.visibleCellsOverflowContainer;
          }
          /* The position to which the container returns after each slide
           * in the light DUM tree mode.
           */

        }, {
          key: "fixedContainerPosition",
          get: function get() {
            return -(this.overflowCellsLimit * this.fullCellWidth);
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
          /* Number of cell elements in the DUM tree */

        }, {
          key: "cellLength",
          get: function get() {
            if (this.isLightDOM) {
              return this.cells.cellLengthInLightDOMMode;
            } else {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cells.cellLength;
              }
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
            this.setVisibleWidth();
          }
        }, {
          key: "init",
          value: function init() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            /* Touchstart event is not called for arrow */
            this.isNotClickOnArrow = true;
            this.isSlideLengthLimited = false;

            if (!this.isSlideInProgress) {
              this.initialPositionX = this.container.getCurrentPositionX();
            }
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
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
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.setCounter();
            this.isSlideInProgress = false;

            if (this.isLightDOM) {
              this.alignContainerFast();
            }
          }
        }, {
          key: "handleSlide",
          value: function handleSlide() {
            var customSlideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var isUsingButton = customSlideLength;
            var newPositionX;

            if (isUsingButton && this.isSlideInProgress || !this.direction) {
              return;
            }
            /* Custom slide length is used in arrows */


            if (customSlideLength) {
              this.slideLength = this.limitSlideLength(customSlideLength);

              if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
              }
            } else {
              this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            /* Store intermediate counter value */


            this._counter = this.getPreliminaryCounter();

            if (this.direction === 'left') {
              if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
              }

              this._counter = this.getPreliminaryCounter();
              var isSlidesEnd = this.isSlidesEnd(this._counter);
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
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'left';
            this.handleSlide(length);
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'right';
            this.handleSlide(length);
          }
        }, {
          key: "select",
          value: function select(index) {
            if (index > this.cellLength - 1) {
              return;
            }

            if (index > this.counter) {
              var length = index - this.counter;
              this.next(length);
            }

            if (index < this.counter) {
              var _length = this.counter - index;

              this.prev(_length);
            }
          }
        }, {
          key: "getPreliminaryCounter",
          value: function getPreliminaryCounter() {
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

        }, {
          key: "limitSlideLength",
          value: function limitSlideLength(slideLength) {
            if (slideLength > 1) {
              for (var i = 0; i < slideLength; i++) {
                var newCounter = this.counter + (slideLength - i);

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

        }, {
          key: "getPositionCorrection",
          value: function getPositionCorrection(counter) {
            var correction = 0;
            var isLastSlide = this.isLastSlide(counter);

            if (this.carouselProperties.loop || this.direction === "right") {
              return 0;
            }

            if (this.isSlideLengthLimited || isLastSlide) {
              var cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;

              if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
              }

              if (correction >= -this.margin) {
                correction = 0;
              }
            }

            return correction;
          }
        }, {
          key: "getSlideLength",
          value: function getSlideLength(distanceAbs) {
            var isLastSlide = this.isLastSlide(this.counter);
            /* If the last cell does not fit entirely, then the
             * length of the swipe to the left, from the extreme
             * right position, may be shorter than usual.
             */

            if (isLastSlide && this.direction === "right") {
              distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
            }

            var length = Math.floor(distanceAbs / this.fullCellWidth);

            if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
              length++;
            }

            return length;
          }
        }, {
          key: "getDistanceAbs",
          value: function getDistanceAbs() {
            return Math.abs(this.initialPositionX - this.currentPositionX);
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.initialPositionX - this.currentPositionX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }, {
          key: "isSlidesEnd",
          value: function isSlidesEnd(counter) {
            var margin = this.visibleCellsOverflowContainer ? 1 : 0;
            var imageLength = this.images ? this.images.length : this.cells.cellLength;

            if (this.carouselProperties.loop) {
              return false;
            } else {
              return imageLength - counter + margin < this.numberOfVisibleCells;
            }
          }
        }, {
          key: "isLastSlide",
          value: function isLastSlide(counter) {
            return this.isSlidesEnd(counter + 1);
          }
        }, {
          key: "setCounter",
          value: function setCounter() {
            if (this.direction === 'left') {
              this.counter = this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              this.counter = this.counter - this.slideLength;
            }
          }
        }, {
          key: "getPositionByIndex",
          value: function getPositionByIndex(_counter) {
            var correction = this.getPositionCorrection(this.counter + this.slideLength);
            var position;

            if (correction !== 0) {
              correction = correction + this.fullCellWidth;
            }

            if (this.direction === 'right') {
              correction = 0;
            }

            if (this.isLightDOM && this.isLightDOMMode(_counter) || this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
              var initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
              var counterDifference = _counter - this.counter;
              position = initialPosition - (counterDifference * this.fullCellWidth - correction);
            } else {
              position = -(_counter * this.fullCellWidth - correction);
            }

            position = this.provideSafePosition(position);
            return position;
          }
        }, {
          key: "provideSafePosition",
          value: function provideSafePosition(position) {
            var endPosition = this.container.getEndPosition();

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
        }, {
          key: "getPositionWithoutCorrection",
          value: function getPositionWithoutCorrection(value) {
            var remainder = Math.round(value) % this.fullCellWidth;

            if (remainder !== 0) {
              return value - (this.fullCellWidth + remainder);
            } else {
              return value;
            }
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            return this.isLastSlide(this.counter) || !this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells || this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells;
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            return this.counter === 0;
          }
        }, {
          key: "alignContainerFast",
          value: function alignContainerFast() {
            if (this.isLightDOMMode(this.counter)) {
              var positionX = this.fixedContainerPosition;
              this.container.transformPositionX(positionX, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            } else if (this.ifLeftDOMModeToBeginning(this.counter)) {
              /* If we have already exited the light DOM mode but
               * the cells are still out of place
               */
              if (this.cells.ifSequenceOfCellsIsChanged()) {
                var _positionX2 = -(this.counter * this.fullCellWidth);

                this.container.transformPositionX(_positionX2, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
              }
            } else if (this.ifLeftDOMModeAtEnd(this.counter)) {
              var containerPositionX = this.container.getCurrentPositionX();
              var containerWidth = this.container.getWidth();
              this.visibleWidth;

              if (this.isLastSlide(this.counter) && containerWidth + containerPositionX >= this.visibleWidth) {
                return;
              }

              var correction = this.getPositionCorrection(this.counter);

              if (correction !== 0) {
                correction = correction + this.fullCellWidth;
              }

              if (this.direction === 'right') {
                correction = 0;
              }

              var _positionX3 = this.fixedContainerPosition + correction;

              this.container.transformPositionX(_positionX3, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            }
          }
        }, {
          key: "isLightDOMMode",
          value: function isLightDOMMode(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (!this.isLightDOM) {
              return false;
            }

            if (counter > this.overflowCellsLimit && this.direction === "left" && counter <= remainderOfCells) {
              flag = true;
            }

            if (counter >= this.overflowCellsLimit && this.direction === "right" && counter < remainderOfCells) {
              flag = true;
            }

            if (this.counter > this.overflowCellsLimit && this.direction === "left" && this.counter <= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= this.overflowCellsLimit && this.direction === "right" && this.counter < remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeAtEnd",
          value: function ifLeftDOMModeAtEnd(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (counter >= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeToBeginning",
          value: function ifLeftDOMModeToBeginning(counter) {
            var flag;

            if (counter <= this.overflowCellsLimit) {
              flag = true;
            }

            if (this.counter <= this.overflowCellsLimit) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "setVisibleWidth",
          value: function setVisibleWidth() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }]);

        return Slide;
      }();

      var Utils = /*#__PURE__*/function () {
        function Utils(carouselProperties) {
          _classCallCheck(this, Utils);

          this.carouselProperties = carouselProperties;
        }

        _createClass(Utils, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            if (this.images && this.isImagesLessCellLimit) {
              var overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);

              if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
              }

              return overflowCellsLimit;
            } else {
              return this.carouselProperties.overflowCellsLimit;
            }
          }
        }, {
          key: "isImagesLessCellLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.numberOfVisibleCells * this.fullCellWidth - this.margin > this.visibleWidth;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "visibleWidth",
          get: function get() {
            return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "getStartX",
          value: function getStartX(event) {
            var touches = event.touches;
            var carouselElementPosition = this.getCarouselElementPosition()['left'];
            var startX;

            if (touches) {
              startX = touches[0].clientX - carouselElementPosition;
            } else {
              startX = event.clientX - carouselElementPosition;
            }

            return startX;
          }
        }, {
          key: "getMoveX",
          value: function getMoveX(event) {
            var touches = event.touches;
            var carouselElementPositionX = this.getCarouselElementPosition()['left'];

            if (touches) {
              return touches[0].clientX - carouselElementPositionX;
            } else {
              return event.clientX - carouselElementPositionX;
            }
          }
        }, {
          key: "getCarouselElementPosition",
          value: function getCarouselElementPosition() {
            return this.carouselProperties.hostElement.getBoundingClientRect();
          }
        }]);

        return Utils;
      }();

      var CarouselComponent = /*@__PURE__*/function () {
        var CarouselComponent = /*#__PURE__*/function () {
          function CarouselComponent(elementRef, ref) {
            var _this5 = this;

            _classCallCheck(this, CarouselComponent);

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

            this.handleTouchstart = function (event) {
              _this5.touches.addEventListeners("mousemove", "handleMousemove");

              _this5.carousel.handleTouchstart(event);

              _this5.isMoving = true;
            };

            this.handleHorizontalSwipe = function (event) {
              event.preventDefault();

              _this5.carousel.handleHorizontalSwipe(event);
            };

            this.handleTouchend = function (event) {
              var touches = event.touches;

              _this5.carousel.handleTouchend(event);

              _this5.touches.removeEventListeners("mousemove", "handleMousemove");

              _this5.isMoving = false;
            };

            this.handleTap = function (event) {
              var outboundEvent = {
                name: 'click'
              };
              var nodes = Array.prototype.slice.call(_this5.cellsElement.children);
              var cellElement = event.srcElement.closest(".carousel-cell");
              var i = nodes.indexOf(cellElement);
              var cellIndex = nodes.indexOf(cellElement);

              if (_this5.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
                //outboundEvent.file = this.carousel.getFile(cellIndex);
              } else {
                outboundEvent.cellIndex = cellIndex;
              }
            };
          }

          _createClass(CarouselComponent, [{
            key: "isContainerLocked",
            get: function get() {
              if (this.carousel) {
                return this.carousel.isContainerLocked;
              }
            }
          }, {
            key: "slideCounter",
            get: function get() {
              if (this.carousel) {
                return this.carousel.slideCounter;
              }
            }
          }, {
            key: "lapCounter",
            get: function get() {
              if (this.carousel) {
                return this.carousel.lapCounter;
              }
            }
          }, {
            key: "isLandscape",
            get: function get() {
              return window.innerWidth > window.innerHeight;
            }
          }, {
            key: "isSafari",
            get: function get() {
              var ua = navigator.userAgent.toLowerCase();

              if (ua.indexOf('safari') !== -1) {
                return !(ua.indexOf('chrome') > -1);
              }
            }
          }, {
            key: "counter",
            get: function get() {
              var counter;

              if (this.loop) {
                counter = this.slideCounter % this.cellLength;
              } else {
                counter = this.slideCounter;
              }

              return counter + 1 + this.counterSeparator + this.cellLength;
            }
          }, {
            key: "cellsElement",
            get: function get() {
              return this.elementRef.nativeElement.querySelector('.carousel-cells');
            }
          }, {
            key: "isArrows",
            get: function get() {
              return this.arrows && !this.freeScroll;
            }
          }, {
            key: "isCounter",
            get: function get() {
              return this._isCounter && this.cellLength > 1;
            },
            set: function set(value) {
              if (value) {
                this._isCounter = value;
              }
            }
          }, {
            key: "activeDotIndex",
            get: function get() {
              return this.slideCounter % this.cellLength;
            }
          }, {
            key: "cellLimit",
            get: function get() {
              if (this.carousel) {
                return this.carousel.cellLimit;
              }
            }
          }, {
            key: "carouselWidth",
            get: function get() {
              return this.elementRef.nativeElement.clientWidth;
            }
          }, {
            key: "images",
            get: function get() {
              return this._images;
            },
            set: function set(images) {
              this._images = images;
            }
          }, {
            key: "cellWidth",
            set: function set(value) {
              if (value) {
                this._cellWidth = value;
              }
            }
          }, {
            key: "loop",
            get: function get() {
              if (this.images) {
                return this._loop;
              } else {
                return false;
              }
            },
            set: function set(value) {
              if (value) {
                this._loop = value;
              }
            }
          }, {
            key: "lightDOM",
            get: function get() {
              if (this.images) {
                return this._lightDOM;
              } else {
                return false;
              }
            },
            set: function set(value) {
              if (value) {
                this._lightDOM = value;
              }
            }
          }, {
            key: "onWindowResize",
            value: function onWindowResize(event) {
              if (this.utils.visibleWidth !== this.savedCarouselWidth) {
                this.resize();
              }
            }
          }, {
            key: "onMousemove",
            value: function onMousemove(event) {
              if (this.autoplay && this.pauseOnHover) {
                this.carousel.stopAutoplay();
              }
            }
          }, {
            key: "onMouseleave",
            value: function onMouseleave(event) {
              if (this.autoplay && this.pauseOnHover) {
                this.carousel.autoplay();
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
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
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.initCarousel();
              this.cellLength = this.getCellLength();
              this.dotsArr = Array(this.cellLength).fill(1);
              this.ref.detectChanges();
              this.carousel.lineUpCells();
              this.savedCarouselWidth = this.carouselWidth;
              /* Start detecting changes in the DOM tree */

              this.detectDomChanges();
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes.width || changes.height || changes.images) {
                this.setDimensions();
                this.initCarousel();
                this.carousel.lineUpCells();
                this.ref.detectChanges();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.touches.destroy(); //this.carousel.destroy();
            }
          }, {
            key: "initCarousel",
            value: function initCarousel() {
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
          }, {
            key: "resize",
            value: function resize() {
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
          }, {
            key: "detectDomChanges",
            value: function detectDomChanges() {
              var _this6 = this;

              var observer = new MutationObserver(function (mutations) {
                _this6.onDomChanges();
              });
              var config = {
                attributes: true,
                childList: true,
                characterData: true
              };
              observer.observe(this.cellsElement, config);
            }
          }, {
            key: "onDomChanges",
            value: function onDomChanges() {
              this.cellLength = this.getCellLength();
              this.carousel.lineUpCells();
              this.ref.detectChanges();
            }
          }, {
            key: "setDimensions",
            value: function setDimensions() {
              this.hostStyleHeight = this.height + 'px';
              this.hostStyleWidth = this.width + 'px';
            }
          }, {
            key: "getImage",
            value: function getImage(index) {
              return this.carousel.getImage(index);
            }
          }, {
            key: "handleTransitionendCellContainer",
            value: function handleTransitionendCellContainer(event) {
              if (event.target['className'] === 'carousel-cells') {
                this.carousel.handleTransitionend();
              }
            }
          }, {
            key: "getCellWidth",
            value: function getCellWidth() {
              var elementWidth = this.carouselWidth;

              if (this.cellsToShow) {
                var margin = this.cellsToShow > 1 ? this.margin : 0;
                var totalMargin = margin * (this.cellsToShow - 1);
                return (elementWidth - totalMargin) / this.cellsToShow;
              }

              if (this._cellWidth === '100%') {
                return elementWidth;
              } else {
                return this._cellWidth;
              }
            }
          }, {
            key: "next",
            value: function next() {
              this.carousel.next(this.cellsToScroll);
              this.carousel.stopAutoplay();
            }
          }, {
            key: "prev",
            value: function prev() {
              this.carousel.prev(this.cellsToScroll);
              this.carousel.stopAutoplay();
            }
          }, {
            key: "isNextArrowDisabled",
            value: function isNextArrowDisabled() {
              if (this.carousel) {
                return this.carousel.isNextArrowDisabled();
              }
            }
          }, {
            key: "isPrevArrowDisabled",
            value: function isPrevArrowDisabled() {
              if (this.carousel) {
                return this.carousel.isPrevArrowDisabled();
              }
            }
          }, {
            key: "getCellLength",
            value: function getCellLength() {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cellsElement.children.length;
              }
            }
          }]);

          return CarouselComponent;
        }();

        CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
          return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CarouselComponent,
          selectors: [["carousel"], ["", "carousel", ""]],
          hostVars: 6,
          hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
                return ctx.onWindowResize($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
                return ctx.onMousemove($event);
              })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
                return ctx.onMouseleave($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
            }
          },
          inputs: {
            height: "height",
            autoplay: "autoplay",
            autoplayInterval: "autoplayInterval",
            pauseOnHover: "pauseOnHover",
            dots: "dots",
            margin: "margin",
            objectFit: "objectFit",
            minSwipeDistance: "minSwipeDistance",
            transitionDuration: "transitionDuration",
            transitionTimingFunction: "transitionTimingFunction",
            counterSeparator: "counterSeparator",
            overflowCellsLimit: "overflowCellsLimit",
            listeners: "listeners",
            cellsToScroll: "cellsToScroll",
            freeScroll: "freeScroll",
            arrows: "arrows",
            arrowsOutside: "arrowsOutside",
            arrowsTheme: "arrowsTheme",
            isCounter: ["counter", "isCounter"],
            images: "images",
            cellWidth: "cellWidth",
            loop: "loop",
            lightDOM: "lightDOM",
            id: "id",
            width: "width",
            borderRadius: "borderRadius",
            videoProperties: "videoProperties",
            cellsToShow: "cellsToShow"
          },
          outputs: {
            events: "events"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 8,
          vars: 6,
          consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
          template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) {
                return ctx.handleTransitionendCellContainer($event);
              });

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
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
          styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
        });
        return CarouselComponent;
      }();

      var IvyCarouselModule = /*@__PURE__*/function () {
        var IvyCarouselModule = /*#__PURE__*/_createClass(function IvyCarouselModule() {
          _classCallCheck(this, IvyCarouselModule);
        });

        IvyCarouselModule.ɵfac = function IvyCarouselModule_Factory(t) {
          return new (t || IvyCarouselModule)();
        };

        IvyCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: IvyCarouselModule
        });
        IvyCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          providers: [],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return IvyCarouselModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvyCarouselModule, {
          declarations: function declarations() {
            return [CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CarouselComponent];
          }
        });
      })();
      /*
       * Public API Surface of angular-responsive-carousel
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "4Isi":
    /*!******************************************************************!*\
      !*** ./src/app/shared/components/carousel/carousel.component.ts ***!
      \******************************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function Isi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _carousel_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./carousel.animations */
      "Pqh/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      function CarouselComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var slide_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("left: ", i_r2 * 50, "px;  transition: .3s ease-in-out;");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("@slideAnimation", ctx_r0.animationType);
        }
      }

      var CarouselComponent = /*@__PURE__*/function () {
        var CarouselComponent = /*#__PURE__*/function () {
          function CarouselComponent() {
            _classCallCheck(this, CarouselComponent);

            this.animationType = _carousel_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationType"].Fade;
            this.animationDuration = 500;
            this.slideDuration = 2000;
            this.clickEventPaused = false;
          }

          _createClass(CarouselComponent, [{
            key: "onPreviousClick",
            value: function onPreviousClick() {
              var _this7 = this;

              if (!this.clickEventPaused) {
                this.clickEventPaused = true; // Remove this slide from the array and add new array

                var currentSlideData = this.slides[0];
                this.slides.shift();
                setTimeout(function () {
                  _this7.slides = [].concat(_toConsumableArray(_this7.slides), [currentSlideData]);
                  _this7.clickEventPaused = false;
                }, this.animationDuration);
                this.initializeTimerCycle();
              }
            }
          }, {
            key: "onNextClick",
            value: function onNextClick() {
              var _this8 = this;

              if (!this.clickEventPaused) {
                this.clickEventPaused = true;
                var currentSlide = this.slides.length - 1; // Get data from current slide, remove last and add back to beginning

                var currentSlideData = this.slides[currentSlide];
                this.slides.splice(-1);
                setTimeout(function () {
                  _this8.slides = [currentSlideData].concat(_toConsumableArray(_this8.slides));
                  _this8.clickEventPaused = false;
                }, this.animationDuration);
                this.initializeTimerCycle();
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.preloadImages(); // for the demo

              this.initializeTimerCycle();
            }
          }, {
            key: "initializeTimerCycle",
            value: function initializeTimerCycle() {
              var _this9 = this;

              clearInterval(this.cycleTimer);
              this.cycleTimer = setInterval(function () {
                _this9.onNextClick();
              }, this.slideDuration);
            }
          }, {
            key: "preloadImages",
            value: function preloadImages() {
              var _iterator = _createForOfIteratorHelper(this.slides),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var slide = _step.value;
                  new Image().src = slide.src;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }]);

          return CarouselComponent;
        }();

        CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
          return new (t || CarouselComponent)();
        };

        CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: CarouselComponent,
          selectors: [["carousel"]],
          inputs: {
            slides: "slides",
            animationType: "animationType"
          },
          decls: 6,
          vars: 1,
          consts: [[1, "carousel"], [4, "ngFor", "ngForOf"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], [1, "slide", 3, "src"]],
          template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 5, "ng-container", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() {
                return ctx.onPreviousClick();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_4_listener() {
                return ctx.onNextClick();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slides);
            }
          },
          styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 0.5em;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  \n}\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDR0E7RUFDRSxPQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUVBLGdFQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUtBO0VBQ0UsdUJBQUE7QUFGRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsOERBQUE7RUFPQSx5QkFBQTtBQVpGO0FBT0U7RUFFRSxVQUFBO0FBTko7QUFVRTtFQUNFLFFBQUE7QUFSSjtBQVVFO0VBQ0UsT0FBQTtBQVJKO0FBWUEscUJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFURjtBQVdFO0VBQ0Usd0JBQUE7QUFUSjtBQVdFO0VBQ0UseUJBQUE7QUFUSiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cclxuXHJcbi8vIFN0cnVjdHVyZVxyXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1tZWRpdW06IFwiRnV0dXJhIFJvdW5kIE1lZGl1bVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQ6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBCb2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQ6IFwiRnV0dXJhIFJvdW5kIEJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XHJcbiRoZWFkZXItYmc6ICM4RjAwRkY7XHJcbiRib2R5LWJnOiAjMzMxMjRlO1xyXG4kcHJpbWFyeS1jb2xvcjogIzhGMDBGRjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICNhYTNmZmM7XHJcbiRwcmltYXJ5LWJnLWNvbG9yLWRhcms6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG4kaW5lbGlnaWJsZS1jb2xvcjogI2IxMzc4ODtcclxuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XHJcbiRjb2xvci1ncmVlbjogIzAwYWI3ODtcclxuJGNvbG9yLWJnLWdyZWVuOiAjRTZGRkYwO1xyXG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xyXG4kY29sb3Itb3JhbmdlOiNERjlGMzA7XHJcbiRjb2xvci1yZWQ6I0ZGMDUwMDtcclxuJGNvbG9yLWJsdWU6IzJGNUJBQztcclxuJGNvbG9yLWRhcmstYmx1ZTojMzkzNUZGO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiNENkM1OEQ7XHJcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzczMmFhO1xyXG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XHJcbiR1cmwtY29sb3I6ICNkYzlhZjA7XHJcbiRhY2NlbnQtY29sb3I6ICNFRjdGMTk7IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGlucyc7XG5cbjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgLy8gem9vbSBlZmZlY3Qgb24gaG92ZXJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbi5zbGlkZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOZXh0IGFuZCBQcmV2IGJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDsgLy8gcmVtb3ZlIGJsdWUgb3V0bGluZSBib3JkZXIsIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmUgc3RpbGwgZm9jdXNzYWJsZSBmb3IgYWNjZXNzaWJpbGl0eVxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDNlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogODAlO1xuICAvLyBvcGFjaXR5IGVmZmVjdCBvbiBob3ZlclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLyogUG9zaXRpb24gdGhlIGJ1dHRvbnMgKi9cbiAgJi5uZXh0IHtcbiAgICByaWdodDogMDtcbiAgfVxuICAmLnByZXYge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuLyogc3R5bGUgdGhlIGFycm93cyAqL1xuLmFycm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgd2hpdGU7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcblxuICAmLmxlZnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB9XG59XG4iXX0= */"],
          data: {
            animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("slideAnimation", [
            /* fade */
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("void => fade", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"], {
              params: {
                time: "500ms"
              }
            })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("fade => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_1__["fadeOut"], {
              params: {
                time: "500ms"
              }
            })])])]
          }
        });
        return CarouselComponent;
      }();
      /***/

    },

    /***/
    "Pqh/":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/components/carousel/carousel.animations.ts ***!
      \*******************************************************************/

    /*! exports provided: AnimationType, scaleIn, scaleOut, fadeIn, fadeOut */

    /***/
    function Pqh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationType", function () {
        return AnimationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scaleIn", function () {
        return scaleIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scaleOut", function () {
        return scaleOut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
        return fadeIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
        return fadeOut;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // =========================
      // Enum for referencing animations
      // =========================


      var AnimationType = /*@__PURE__*/function (AnimationType) {
        AnimationType["Scale"] = "scale";
        AnimationType["Fade"] = "fade";
        return AnimationType;
      }({}); // =========================
      // Scale
      // =========================


      var scaleIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: "scale(0.5)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: "scale(1)"
      }))]);
      var scaleOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: "scale(0.5)"
      }))]); // =========================
      // Fade
      // =========================

      var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(1.2)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1)'
      }))]);
      var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(1.2)'
      }))]);
      /***/
    },

    /***/
    "aUdj":
    /*!******************************************!*\
      !*** ./src/app/index/index.component.ts ***!
      \******************************************/

    /*! exports provided: IndexComponent */

    /***/
    function aUdj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _shared_dialogs_mint_dialog_mint_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/dialogs/mint-dialog/mint-dialog.component */
      "yIhK");
      /* harmony import */


      var _shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/components/carousel/carousel.component */
      "4Isi");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/services/smart-contract-core.service */
      "cIOH");
      /* harmony import */


      var _shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/services/event-messenger.service */
      "q9MP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/components/app-header/app-header.component */
      "bzJk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");
      /* harmony import */


      var _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shared/components/app-footer/app-footer.component */
      "mpho");

      function IndexComponent_div_396_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_397_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_398_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Property\u2019s is an NFT house collecting game on Ethereum that combines metaverse applications & reward-based collecting. NFT holders will become a part of our ecosystem and have creative power over a majority of our world on Sandbox.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_403_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_404_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_405_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Pre-Sale: 10th of December 2021 - 15:00 GMT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Public Sale: 12th of December 2021 - 15:00 GMT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_410_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_411_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_412_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Yes. We will disclose more information as soon as we can share it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_417_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_418_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_419_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Property\u2019s is a product of our interests. We are far more than just an NFT image. We create immersive metaverse worlds, host communities, integrate ideas & position brands. We are a social network on metaverses. We are building an ecosystem that our NFT holders can be a part of.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_424_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_425_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_426_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "A lot. We are focused on the long-term & aim for excellence in everything we do. From the team to its advisors, from the mechanics to the technological development, from the community to the underlying utility. We try to differentiate ourselves in all of these regards. We pride ourselves in thinking ahead flexibly & being 100% community-centered.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_431_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_432_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IndexComponent_div_433_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Our first collection will hold 6,000 NFTs. There will be 5880 regular houses & 120 special buildings. Find out more in our discord: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "https://discord.gg/propertys.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "show": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "active-green": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "active-yellow": a0
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "active-orange": a0
        };
      };

      var IndexComponent = /*@__PURE__*/function () {
        var IndexComponent = /*#__PURE__*/function () {
          function IndexComponent(_route, smartContractCoreService, eventMessengerService, _dialog) {
            _classCallCheck(this, IndexComponent);

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
              q8: false
            };
            this.isMetaMaskInstalled = true;
            this.isOnMainnet = true;
            this.partnershipLogoImages = [{
              path: '/assets/images/partners/1.png'
            }, {
              path: '/assets/images/partners/2.png'
            }, {
              path: '/assets/images/partners/3.png'
            }, {
              path: '/assets/images/partners/4.png'
            }, {
              path: '/assets/images/partners/5.png'
            }, {
              path: '/assets/images/partners/6.png'
            }, {
              path: '/assets/images/partners/7.png'
            }, {
              path: '/assets/images/partners/8.png'
            }, {
              path: '/assets/images/partners/9.png'
            }, {
              path: '/assets/images/partners/10.png'
            }, {
              path: '/assets/images/partners/11.png'
            }, {
              path: '/assets/images/partners/12.png'
            }, {
              path: '/assets/images/partners/13.png'
            }, {
              path: '/assets/images/partners/14.png'
            }, {
              path: '/assets/images/partners/15.png'
            }, {
              path: '/assets/images/partners/16.png'
            }, {
              path: '/assets/images/partners/17.png'
            }, {
              path: '/assets/images/partners/18.png'
            }, {
              path: '/assets/images/partners/20.png'
            }, {
              path: '/assets/images/partners/21.png'
            }];
            this.carouselAutoplay = true;
            this.carouselLoop = true;
            this.carouselAutoplayInterval = 500;
            this.carouselPauseOnHover = false;
            this.carouselTransitionInterval = 1000;
          }

          _createClass(IndexComponent, [{
            key: "onScroll",
            value: function onScroll(event) {}
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this10 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.t0 = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].chainId;
                        _context3.next = _context3.t0 === 1 ? 3 : _context3.t0 === 4 ? 5 : 7;
                        break;

                      case 3:
                        this.networkText = "Ethereum Mainnet";
                        return _context3.abrupt("break", 9);

                      case 5:
                        this.networkText = "Rinkeby Network";
                        return _context3.abrupt("break", 9);

                      case 7:
                        this.networkText = "Ethereum Mainnet";
                        return _context3.abrupt("break", 9);

                      case 9:
                        // this.animateCards();
                        // Initialize the countdown
                        this.countdownTimer = setInterval(function () {
                          _this10.updateCountdownTimer();
                        }, 1000);
                        this.updateCountdownTimer(); // Determine which element to scroll to

                        this._route.fragment.subscribe(function (fragment) {
                          var element = document.querySelector("#".concat(fragment));
                          setTimeout(function () {
                            if (element) {
                              var elementPosition = element.offsetTop;
                              window.scrollTo({
                                top: elementPosition - 60,
                                behavior: "smooth" //Smooth transition to roll

                              });
                            }
                          }, 0);
                        }); // Startup: Check metamask and populate accounts and then determine if any unis are in wallet


                        _context3.next = 14;
                        return this.checkMetaMaskInstalled();

                      case 14:
                        _context3.next = 16;
                        return this.checkChain();

                      case 16:
                        // Handle events when wallet accounts change
                        this.eventMessengerService.subscribe('accountsChanged', function (event) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

                      case 18:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
            /**
             * This will replace which image is showing
             */

          }, {
            key: "toggleMetaverseImage",
            value: function toggleMetaverseImage(image) {
              this.metaverseImageToShow = image;
            }
            /**
             * Select district
             */

          }, {
            key: "selectDistrict",
            value: function selectDistrict(districtId) {
              this.selectedDistrict = districtId;
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.animateTypewriterText();
            }
            /**
             * Animate the slogan text
             */

          }, {
            key: "animateTypewriterText",
            value: function animateTypewriterText() {
              var TxtType = function TxtType(el, toRotate, period) {
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
                } else {
                  this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.el.innerHTML = "<span class=\"wrap\">".concat(this.txt, "</span>");
                var that = this;
                var delta = 200 - Math.random() * 100;

                if (this.isDeleting) {
                  delta /= 2;
                }

                if (!this.isDeleting && this.txt === fullTxt) {
                  delta = this.period;
                  this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
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
              } // INJECT CSS


              var css = document.createElement("style"); // css.type = "text/css";

              css.innerHTML = ".typewrite > .wrap { \n      border-right: 0.1em solid #8F00FF;\n      padding-right: 2px; \n    }\n    ";
              document.body.appendChild(css);
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

                        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].chainId === chainId) {
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
               *	Open the minting dialog
               */

          }, {
            key: "openMintDialog",
            value: function openMintDialog(e) {
              e.stopPropagation();
              e.preventDefault();

              this._dialog.open(_shared_dialogs_mint_dialog_mint_dialog_component__WEBPACK_IMPORTED_MODULE_1__["MintDialogComponent"], {
                width: '630px',
                data: {
                  accounts: this.accounts
                }
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              clearInterval(this.countdownTimer);
            }
            /**
               *	Functions that governs active states of the FAQ questions
               */

          }, {
            key: "toggleFAQ",
            value: function toggleFAQ(question) {
              this.generalFAQ[question] = !this.generalFAQ[question];
            }
            /**
               * Simple countdown timer function. End date is set for private sale
               */

          }, {
            key: "updateCountdownTimer",
            value: function updateCountdownTimer() {
              var endDate = 1639148400000; // Update this with the end time in milliseconds

              var now = Date.now();
              var t = endDate - now;

              if (t >= 0) {
                this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
                this.countdownHours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                this.countdownMins = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
                this.countdownSecs = Math.floor(t % (1000 * 60) / 1000);
              }
            }
          }]);

          return IndexComponent;
        }();

        IndexComponent.ɵfac = function IndexComponent_Factory(t) {
          return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_6__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_7__["EventMessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
        };

        IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
          type: IndexComponent,
          selectors: [["app-index"]],
          viewQuery: function IndexComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], 1);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
            }
          },
          hostBindings: function IndexComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function IndexComponent_scroll_HostBindingHandler($event) {
                return ctx.onScroll($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
            }
          },
          decls: 435,
          vars: 114,
          consts: [[1, "banner"], [1, "banner-inner"], [1, "main-area"], [1, "slogan-container"], ["id", "slogan-text", 1, "slogan-text"], ["data-period", "2000", "data-type", "[ \"artists.\", \"creators.\", \"gamers.\", \"brands.\"]", 1, "highlighted", "typewrite"], [1, "wrap"], [1, "subtext"], [1, "countdown-container"], ["target", "_blank", "href", "https://opensea.io/collection/propertysofficial", 1, "countdown-sale-text"], ["width", "90", "height", "90", "viewBox", "0 0 90 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z", "fill", "#1c063f"], ["target", "_blank", "href", "https://medium.com/@propertys_nft/propertys-the-whitepaper-1-0-dc6b33f73f8b", 1, "banner-link"], [1, "fas", "fa-file-alt"], [1, "promo-image"], ["src", "/assets/images/banner-img.png", "width", "600"], [1, "partnerships-container", "premium"], [1, "partner-text"], [1, "partners"], ["src", "/assets/images/partners/premium-partner-landvault.png", "width", "250"], ["src", "/assets/images/partners/premium-partner-exclusible.png", "width", "250"], ["src", "/assets/images/partners/premium-partner-metamundo.png", "width", "250"], [1, "full-width-container"], ["id", "story", 1, "information"], [1, "section-title-container"], [1, "section-title"], [1, "section-description"], [1, "district-list-selector"], [3, "mouseover"], [1, "sandy-secrets", 3, "ngClass"], [1, "apricot-alley", 3, "ngClass"], [1, "buenas-bananas", 3, "ngClass"], [1, "basil-borough", 3, "ngClass"], [1, "grapey-gardens", 3, "ngClass"], [1, "starry-skies", 3, "ngClass"], [1, "elon-estates", 3, "ngClass"], [1, "special", 3, "ngClass"], [1, "columns", 3, "ngClass"], [1, "column"], [1, "column-image"], ["src", "/assets/images/cards/beige-bay-1.webp", "width", "250"], ["src", "/assets/images/cards/beige-bay-2.webp", "width", "250"], ["src", "/assets/images/cards/beige-bay-3.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-1.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-2.webp", "width", "250"], ["src", "/assets/images/cards/orange-oasis-3.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-1.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-2.webp", "width", "250"], ["src", "/assets/images/cards/yellow-yards-3.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-1.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-2.webp", "width", "250"], ["src", "/assets/images/cards/green-grove-3.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-1.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-2.webp", "width", "250"], ["src", "/assets/images/cards/purple-palms-3.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-1.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-2.webp", "width", "250"], ["src", "/assets/images/cards/starry-skies-3.webp", "width", "250"], ["src", "/assets/images/cards/mars-1.webp", "width", "250"], ["src", "/assets/images/cards/mars-2.webp", "width", "250"], ["src", "/assets/images/cards/mars-3.webp", "width", "250"], ["src", "/assets/images/cards/special-1.webp", "width", "250"], ["src", "/assets/images/cards/special-2.webp", "width", "250"], ["src", "/assets/images/cards/special-3.webp", "width", "250"], ["id", "metaverse", 1, "information"], [1, "two-column", "right-order-0"], [1, "left"], [1, "metaverse-image-toggles"], [3, "ngClass", "mouseover"], [1, "right"], [1, "image-container"], ["src", "/assets/images/metaverse-social.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-gaming.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-music.webp", "width", "400", 3, "ngClass"], ["src", "/assets/images/metaverse-art.webp", "width", "400", 3, "ngClass"], ["id", "team", 1, "team"], [1, "team-list"], ["src", "/assets/images/shapes/blob-green-1.png", "width", "240", 1, "blob-bg"], ["href", "https://twitter.com/KonradProbst", "target", "_blank"], [1, "profile-link"], [1, "fab", "fa-twitter"], [1, "image-profile-block"], ["src", "/assets/images/team/konrad_probst.png", "width", "150", "alt", "Konrad Probst"], [1, "title"], [1, "team-member-description"], [1, "description"], ["src", "/assets/images/shapes/blob-purple-2.png", "width", "240", 1, "blob-bg"], ["href", "https://twitter.com/bluberry_cem", "target", "_blank"], ["src", "/assets/images/team/cem_gedik.png", "width", "150", "alt", "CEM"], ["src", "/assets/images/shapes/blob-blue-3.png", "width", "240", 1, "blob-bg", "rotate-160"], ["href", "https://twitter.com/jofnd_eth", "target", "_blank"], ["src", "/assets/images/team/jo_effendy.png", "width", "150", "alt", "Jo"], ["src", "/assets/images/shapes/blob-red-4.png", "width", "240", 1, "blob-bg", "rotate-80"], ["href", "https://twitter.com/daniel_datsenko", "target", "_blank"], ["src", "/assets/images/team/daniel_datsenko.png", "width", "150", "alt", "Daniel"], ["src", "/assets/images/shapes/blob-orange-2.png", "width", "240", 1, "blob-bg", "rotate-120"], ["href", "https://twitter.com/mischmeisterp", "target", "_blank"], ["src", "/assets/images/team/felix_weigelt.png", "width", "150", "alt", "Felix"], ["src", "/assets/images/shapes/blob-yellow-3.png", "width", "240", 1, "blob-bg"], [1, "team-member"], [1, "image-profile-block", "image-crispy"], ["src", "/assets/images/team/stevie.png", "width", "150", "alt", "Stevie"], ["src", "/assets/images/shapes/blob-purple-2.png", "width", "240", 1, "blob-bg", "rotate"], ["href", "https://twitter.com/OwlTower", "target", "_blank"], ["src", "/assets/images/team/marc.png", "width", "150"], ["src", "/assets/images/shapes/blob-green-4.png", "width", "240", 1, "blob-bg", "rotate-40"], ["href", "https://twitter.com/beijingdou", "target", "_blank"], ["src", "/assets/images/team/josh_ong.png", "width", "150"], ["src", "/assets/images/shapes/blob-orange-2.png", "width", "240", 1, "blob-bg", "rotate-40"], ["href", "https://twitter.com/boomer_gm", "target", "_blank"], ["src", "/assets/images/team/boomer-image.png", "width", "150"], ["src", "/assets/images/shapes/blob-yellow-3.png", "width", "240", 1, "blob-bg", "rotate-120"], ["href", "https://twitter.com/saml314", "target", "_blank"], [1, "image-container", "image-crispy"], ["src", "/assets/images/team/sam_li.png", "width", "150"], ["src", "/assets/images/shapes/blob-blue-4.png", "width", "240", 1, "blob-bg", "rotate-160"], ["href", "https://twitter.com/KevinSusanto", "target", "_blank"], ["src", "/assets/images/team/kevin_susanto.png", "width", "150"], ["src", "/assets/images/shapes/blob-red-1.png", "width", "240", 1, "blob-bg"], ["src", "/assets/images/team/irene_lee.png", "width", "150"], ["id", "work-with-us", 1, "work-with-us"], [1, "wrapper"], ["target", "_blank", "href", "https://docs.google.com/forms/d/1U8Ef8q-Er5ik_KuFp10BG42LqQYqZm6g6ttud2i7mTc/edit#responses", 1, "explore-partnerships-btn"], [1, "text"], [1, "fas", "fa-arrow-right"], [1, "partnerships-container"], [3, "autoplay", "loop", "autoplayInterval", "pauseOnHover", "transitionDuration", "images"], ["id", "faq", 1, "faq"], [1, "wrapper", "faq-wrapper"], [1, "faq-group-block-container"], [1, "faq-section"], [3, "ngClass", "click"], [1, "question-title-container"], ["class", "chevron up", 4, "ngIf"], ["class", "chevron down", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "chevron", "up"], [1, "fas", "fa-chevron-up"], [1, "chevron", "down"], [1, "fas", "fa-chevron-down"], [1, "content"], ["href", "https://discord.gg/propertys", "target", "_blank"]],
          template: function IndexComponent_Template(rf, ctx) {
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

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_52_listener() {
                return ctx.selectDistrict(1);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "button", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_54_listener() {
                return ctx.selectDistrict(2);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "button", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_56_listener() {
                return ctx.selectDistrict(3);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "button", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_58_listener() {
                return ctx.selectDistrict(4);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "button", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_60_listener() {
                return ctx.selectDistrict(5);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "button", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_62_listener() {
                return ctx.selectDistrict(6);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "button", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_64_listener() {
                return ctx.selectDistrict(7);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "button", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "li", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_li_mouseover_66_listener() {
                return ctx.selectDistrict(8);
              });

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

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_160_listener() {
                return ctx.toggleMetaverseImage(1);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Social & Adventures ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Meet others and enjoy the metaverse together");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "button", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_165_listener() {
                return ctx.toggleMetaverseImage(2);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "Gaming & Content ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Play all the games and even create your own");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "button", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_170_listener() {
                return ctx.toggleMetaverseImage(3);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, " Music & Events ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Relax and have fun at different events across the world");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "button", 68);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function IndexComponent_Template_button_mouseover_175_listener() {
                return ctx.toggleMetaverseImage(4);
              });

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

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "Stevie");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "Hybrid FS Developer");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, " Web Design, Web 3.0 Integration. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](277, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](278, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "The Advisory Board");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "ul", 76);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](283, "img", 102);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "a", 103);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](286, "i", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](288, "img", 104);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](289, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](290, "HoodooOwl");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "Private Wealth Manager");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](295, " Business Development, Financial Advisor, Investor Relations. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](297, "img", 105);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "a", 106);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "div", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](300, "i", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](302, "img", 107);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "Josh Ong");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "Partner at Causeway Strategies");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, " Sandbox Ambassador, Communication Advisor. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](311, "img", 108);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "a", 109);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "div", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](314, "i", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](316, "img", 110);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "Boomer");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "Co-Founder of LandVault");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, " Metaverse Advisor. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](325, "img", 111);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "a", 112);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "div", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](328, "i", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "div", 113);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](331, "img", 114);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, "Sam Li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](335, "Partner Calvert Drive Ventures");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338, " Investor Relations, IP & Legal Advisor. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](340, "img", 115);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "a", 116);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "div", 79);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "i", 80);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](345, "img", 117);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, "Kevin Susanto");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](349, "Founder Envigo");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](352, " Forbes 30 under 30 Entrepreneur, Business Advisor. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](354, "img", 118);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](355, "div", 99);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "div", 81);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](357, "img", 119);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](359, "Dr. Irene Lee");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "div", 83);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](361, "(Social-) Entrepreneur");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](362, "div", 84);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "p", 85);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, " Business Advisor, Strategic Network. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "section", 120);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](366, "div", 121);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "Work With Us");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "Your social network on the metaverse");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "We see no competition, only partners & collaborators with messages. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](373, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](374, " We host brands, content & games. Whatever you create - we have the platform for it.");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "a", 122);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "div", 123);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](377, " Explore Partnership Opportunities ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](378, "i", 124);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "div", 125);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "ul", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](381, "carousel", 126);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "section", 127);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "div", 128);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](384, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](385, "FAQ");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](387, "You have questions, we have answers.");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389, "What's the weight of an NFT? Who really created Bitcoin?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "div", 129);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "ul", 130);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_392_listener() {
                return ctx.toggleFAQ("q1");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](393, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "1. What is Property\u2019s?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](396, IndexComponent_div_396_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](397, IndexComponent_div_397_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](398, IndexComponent_div_398_Template, 3, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](399, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_399_listener() {
                return ctx.toggleFAQ("q2");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](401, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](402, "2. When is Pre-sale?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](403, IndexComponent_div_403_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](404, IndexComponent_div_404_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](405, IndexComponent_div_405_Template, 5, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_406_listener() {
                return ctx.toggleFAQ("q3");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](407, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](409, "3. Is there a company behind this?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](410, IndexComponent_div_410_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](411, IndexComponent_div_411_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](412, IndexComponent_div_412_Template, 3, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](413, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_413_listener() {
                return ctx.toggleFAQ("q4");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](415, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](416, "4. Where did the idea come from?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](417, IndexComponent_div_417_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](418, IndexComponent_div_418_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](419, IndexComponent_div_419_Template, 3, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_420_listener() {
                return ctx.toggleFAQ("q5");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423, "5. What's special about Property\u2019s vs other NFT projects?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](424, IndexComponent_div_424_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](425, IndexComponent_div_425_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](426, IndexComponent_div_426_Template, 3, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "li", 131);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IndexComponent_Template_li_click_427_listener() {
                return ctx.toggleFAQ("q6");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](428, "div", 132);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](430, "6. How many Property\u2019s will there be?");

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](431, IndexComponent_div_431_Template, 2, 0, "div", 133);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](432, IndexComponent_div_432_Template, 2, 0, "div", 134);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](433, IndexComponent_div_433_Template, 5, 0, "div", 135);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](434, "propertys-footer");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](53);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c0, ctx.selectedDistrict === 1));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](56, _c0, ctx.selectedDistrict === 2));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](58, _c0, ctx.selectedDistrict === 3));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](60, _c0, ctx.selectedDistrict === 4));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](62, _c0, ctx.selectedDistrict === 5));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](64, _c0, ctx.selectedDistrict === 6));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](66, _c0, ctx.selectedDistrict === 7));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](68, _c0, ctx.selectedDistrict === 8));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](70, _c1, ctx.selectedDistrict === 1));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](72, _c1, ctx.selectedDistrict === 2));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](74, _c1, ctx.selectedDistrict === 3));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](76, _c1, ctx.selectedDistrict === 4));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](78, _c1, ctx.selectedDistrict === 5));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](80, _c1, ctx.selectedDistrict === 6));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](82, _c1, ctx.selectedDistrict === 7));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](84, _c1, ctx.selectedDistrict === 8));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](86, _c2, ctx.metaverseImageToShow === 1));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](88, _c3, ctx.metaverseImageToShow === 2));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](90, _c4, ctx.metaverseImageToShow === 3));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](92, _c0, ctx.metaverseImageToShow === 4));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](94, _c1, ctx.metaverseImageToShow === 1));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](96, _c1, ctx.metaverseImageToShow === 2));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](98, _c1, ctx.metaverseImageToShow === 3));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](100, _c1, ctx.metaverseImageToShow === 4));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](197);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoplay", ctx.carouselAutoplay)("loop", ctx.carouselLoop)("autoplayInterval", ctx.carouselAutoplayInterval)("pauseOnHover", ctx.carouselPauseOnHover)("transitionDuration", ctx.carouselTransitionInterval)("images", ctx.partnershipLogoImages);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](102, _c0, ctx.generalFAQ["q1"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q1"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q1"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q1"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](104, _c0, ctx.generalFAQ["q2"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q2"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q2"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q2"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](106, _c0, ctx.generalFAQ["q3"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q3"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q3"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q3"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](108, _c0, ctx.generalFAQ["q4"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q4"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q4"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q4"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](110, _c0, ctx.generalFAQ["q5"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q5"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q5"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q5"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](112, _c0, ctx.generalFAQ["q6"]));

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q6"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.generalFAQ["q6"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalFAQ["q6"]);
            }
          },
          directives: [_shared_components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]],
          styles: ["[_nghost-%COMP%] {\n  \n  \n  \n  \n  \n  \n  \n  \n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 75px 0;\n  width: 1220px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   section.banner[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .banner-link[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: inline-block;\n}\n[_nghost-%COMP%]   .banner-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  padding: 5px 0;\n  border-radius: 5px;\n  background: #EAEAEA;\n  width: 220px;\n  margin: 0 auto 10px;\n  letter-spacing: 2px;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-align: center;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .full-width-container[_ngcontent-%COMP%] {\n  background: #FAFAFA;\n  width: 100%;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  background: #8F00FF;\n  transition: 0.15s ease-in-out;\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: relative;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: calc(100% + 20px);\n  height: calc(100% + 20px);\n  position: absolute;\n  border-radius: 50px;\n  border: 2px solid #8F00FF;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.sandy-secrets[_ngcontent-%COMP%] {\n  background: #D6C58D;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.sandy-secrets[_ngcontent-%COMP%]:after {\n  border-color: #D6C58D;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%] {\n  background: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%]:after {\n  border-color: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.buenas-bananas[_ngcontent-%COMP%] {\n  background: #E8D322;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.buenas-bananas[_ngcontent-%COMP%]:after {\n  border-color: #E8D322;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.basil-borough[_ngcontent-%COMP%] {\n  background: #00ab78;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.basil-borough[_ngcontent-%COMP%]:after {\n  border-color: #00ab78;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.grapey-gardens[_ngcontent-%COMP%] {\n  background: #8F00FF;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.grapey-gardens[_ngcontent-%COMP%]:after {\n  border-color: #8F00FF;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.starry-skies[_ngcontent-%COMP%] {\n  background: #2F5BAC;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.starry-skies[_ngcontent-%COMP%]:after {\n  border-color: #2F5BAC;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%] {\n  background: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.apricot-alley[_ngcontent-%COMP%]:after {\n  border-color: #DF9F30;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.special[_ngcontent-%COMP%] {\n  background: #e6e3e1;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.special[_ngcontent-%COMP%]:after {\n  border-color: #e6e3e1;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.elon-estates[_ngcontent-%COMP%] {\n  background: #FF0500;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.elon-estates[_ngcontent-%COMP%]:after {\n  border-color: #FF0500;\n}\n[_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   section.work-with-us[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 450px;\n  margin-bottom: 50px;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n  border-radius: 10px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  margin: 70px auto;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  background: #8F00FF;\n  color: #FFF;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 5px;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 100px;\n  display: none;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns.show[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-right: 80px;\n  position: relative;\n  z-index: 1;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .column-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: block;\n  height: 330px;\n  width: 460px;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 900px;\n  padding-top: 26px;\n  margin-top: 0 !important;\n  position: relative;\n  display: flex;\n}\n[_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%] {\n  width: 1220px;\n  margin: 100px auto 50px;\n  position: relative;\n}\n[_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(50% - 80px);\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 80px);\n  width: 450px;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 50px;\n  line-height: 110%;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%]   .highlighted[_ngcontent-%COMP%] {\n  color: #8F00FF;\n  position: relative;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n[_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n[_nghost-%COMP%]   .section-title-container[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n[_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 1220px;\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n[_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]:after {\n  content: initial;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:before {\n  position: absolute;\n  height: 100%;\n  content: \"\";\n  width: 80px;\n  top: 0;\n  z-index: 5;\n  background: white;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:after {\n  right: 0;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]:before {\n  left: 0;\n  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, white 100%);\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   .partner-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  opacity: 0.8;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 300px;\n}\n[_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  width: 315px;\n  margin: 30px 0;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .timeleft[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 11px;\n  margin-top: 5px;\n  font-weight: 100;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .count-down[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n  font-family: \"Futura Round Semibold\", arial, sans-serif;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1;\n  margin-bottom: 20px;\n  letter-spacing: 2px;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 15px 20px;\n  border-radius: 10px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 18px;\n  background: #EAEAEA50;\n  display: flex;\n  align-items: center;\n  color: #222;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%]:hover {\n  color: #8F00FF;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  background: none;\n  color: #222;\n  font-size: 24px;\n  justify-content: flex-start;\n  flex-direction: column;\n  text-align: left;\n  align-items: flex-start;\n  padding: 15px;\n  border-radius: 10px;\n  border: 2px solid rgba(0, 0, 0, 0);\n  width: 100%;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border: 2px solid #8F00FF;\n  color: #8F00FF;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-green[_ngcontent-%COMP%] {\n  border: 2px solid #00ab78;\n  color: #00ab78;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-orange[_ngcontent-%COMP%] {\n  border: 2px solid #DF9F30;\n  color: #DF9F30;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button.active-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #3935FF;\n  color: #3935FF;\n}\n[_nghost-%COMP%]   .metaverse-image-toggles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 150%;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .two-column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 395px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100%;\n  display: none;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.show[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  order: 0;\n  margin-right: auto;\n  width: 500px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0 auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n  height: 100%;\n  min-width: 350px;\n  width: 350px;\n  height: 350px;\n  border-radius: 4px;\n  display: block;\n  background: #7732aa;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .subtext[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Futura Round Bold Oblique\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 22px;\n  opacity: 0.7;\n  letter-spacing: 1px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  width: 700px;\n  display: flex;\n  margin-left: 50px;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-1[_ngcontent-%COMP%] {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%] {\n  left: 60px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-3[_ngcontent-%COMP%] {\n  left: 120px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 5;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-4[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 3;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card.card-5[_ngcontent-%COMP%] {\n  left: 330px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .information[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 700px;\n  order: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%] {\n  width: 1220px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0;\n  margin-top: 100px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 60px;\n  padding-right: 9px;\n  border-radius: 3px;\n  width: 350px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  z-index: 0;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 240px !important;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-40[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(40deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-80[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(80deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-120[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(120deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .blob-bg.rotate-160[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateX(-50%) rotate(160deg);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  z-index: 3;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 45px 15px 25px;\n  justify-content: center;\n  color: #222;\n  position: relative;\n  width: 100%;\n  z-index: 2;\n  margin: 0 auto;\n  box-sizing: border-box;\n  border-radius: 20px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  width: 100%;\n  position: absolute;\n  content: \"\";\n  height: 380px;\n  opacity: 0;\n  top: 0;\n  left: 50%;\n  z-index: 2;\n  z-index: 0;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  transform: translateX(-50%);\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .team-member[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:hover   .team-member-description[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .profile-link[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: flex;\n  align-items: center;\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  text-align: center;\n  justify-content: center;\n  height: 30px;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 900;\n  padding: 3px;\n  position: absolute;\n  top: 20px;\n  right: 10px;\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 4px;\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  color: #8F00FF;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  font-size: 26px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-width: 150px;\n  width: 150px;\n  height: 150px;\n  border-radius: 4px;\n  margin: 0 auto 20px auto;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block.image-crispy[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-crispy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block.image-crispy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-crispy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  width: 115px;\n  height: 123px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: -6px;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  margin-bottom: 10px;\n  line-height: 160%;\n  height: 30px;\n  opacity: 0.7;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 270px;\n  width: 100%;\n  opacity: 0;\n  text-align: center;\n  transition: 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  line-height: 140%;\n  font-weight: 100;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%] {\n  width: 950px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 150%;\n  margin: 0;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .faq-group-block-container[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: 30px 30px 10px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 10px;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 10px;\n  padding: 15px;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Medium\", arial, sans-serif;\n  transition: 0.15s ease-in-out;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-color: #8F00FF;\n  color: #8F00FF;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #222;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #8F00FF;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 100;\n  line-height: 160%;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bullet-point[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-weight: 100;\n  line-height: 160%;\n  margin-bottom: 0;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .question-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   .question-title-container[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 30px;\n  margin-top: -10px;\n}\n@media only screen and (min-width: 0px) and (max-width: 1120px) {\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan-text[_ngcontent-%COMP%] {\n    font-size: 34px;\n    min-height: 75px;\n  }\n  [_nghost-%COMP%]   .cta-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  [_nghost-%COMP%]   .section-description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  [_nghost-%COMP%]   .propertys-image[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n  [_nghost-%COMP%]   .explore-partnerships-btn[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  [_nghost-%COMP%]   .two-column.right-order-0[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left.images[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .breakpoint[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%] {\n    width: 300px;\n    min-width: 300px;\n    height: initial;\n    margin-bottom: 50px;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-container.rounded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    width: calc(100% - 20px) !important;\n    margin: 60px auto 40px;\n  }\n  [_nghost-%COMP%]   section.banner[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 0 !important;\n  }\n  [_nghost-%COMP%]   section.carousel-3d[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    margin-bottom: 10px;\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 45px 15px 25px;\n    justify-content: center;\n    color: #222;\n    position: relative;\n    width: 100%;\n    z-index: 2;\n    margin: 0 auto;\n    box-sizing: border-box;\n    border-radius: 20px;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]:after {\n    opacity: 1;\n    height: 100%;\n    background: #FFF !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 0px) and (max-width: 700px) {\n  [_nghost-%COMP%] {\n    \n    \n  }\n  [_nghost-%COMP%]   .district-list-selector[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  [_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n    margin: 30px auto 0;\n    width: calc(100% - 40px);\n  }\n  [_nghost-%COMP%]   .countdown-sale-text[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: left;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n    margin: 60px auto 40px !important;\n  }\n  [_nghost-%COMP%]   section.information[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    margin: 0 auto 90px;\n  }\n  [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:last-child {\n    margin-right: auto;\n  }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    line-height: 150% !important;\n  }\n  [_nghost-%COMP%]   .banner[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-top: 0;\n    height: initial;\n  }\n  [_nghost-%COMP%]   .banner-inner[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n    order: 0;\n    width: 100%;\n    margin-bottom: 40px;\n    right: 0;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .promo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto 30px;\n    display: block;\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .main-area[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%] {\n    order: 1;\n    margin-bottom: 100px;\n    width: calc(100% - 30px);\n    margin: 0 auto 100px;\n  }\n  [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    bottom: initial;\n    left: initial;\n    transform: initial;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: initial;\n  }\n  [_nghost-%COMP%]   .partnerships-container.premium[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 80px;\n  }\n  [_nghost-%COMP%]   .partnerships-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: auto;\n  }\n  [_nghost-%COMP%]   .slogan-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .promo-image[_ngcontent-%COMP%] {\n    position: relative;\n    top: initial;\n    left: initial;\n    transform: none;\n  }\n  [_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%] {\n    min-width: 150px;\n    width: 150px;\n    height: 150px;\n    margin: 0 auto 15px auto;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    width: 100% !important;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n    margin-bottom: 7px;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .team-member-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  [_nghost-%COMP%]   .team[_ngcontent-%COMP%]   .team-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: calc(100% - 50px) !important;\n    display: block;\n    margin: 0 auto 20px auto;\n  }\n  [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   .two-column[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]   ul.faq-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2luZGV4LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDR0E7RUE2UEk7O0lBQUE7RUF5RUE7O0lBQUE7RUFxSUE7O0lBQUE7RUFtREE7O0dBQUE7RUFtR0E7O0lBQUE7RUFLQTs7R0FBQTtFQXFPSjs7SUFBQTtFQWdSQTs7c0VBQUE7QUFwa0NBO0FBckJJO0VBQ0ksZUFBQTtFQUNBLGFESmtCO0VDS2xCLGNBQUE7QUF1QlI7QUFyQlE7RUFDSSxpQkFBQTtBQXVCWjtBQW5CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXFCUjtBQW5CUTtFQUNJLGtCQUFBO0FBcUJaO0FBakJJO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQW1CUjtBQWpCUTtFQUNJLGlCQUFBO0FBbUJaO0FBZkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxREQvQmtCO0VDZ0NsQix5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWlCUjtBQWRJO0VBQ0ksZUFBQTtFQUNBLHNERDlDVztFQytDWCxZQUFBO0FBZ0JSO0FBYkk7RUFDSSxlQUFBO0VBQ0EscUREbkRrQjtFQ29EbEIsa0JBQUE7RUFDQSxrQkFBQTtBQWVSO0FBWkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFjUjtBQVhJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFhUjtBQVhRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFhWjtBQVhZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRGpFQTtFRWROLDZCRGdGMEI7RUFDcEIsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUM3RU4sNENEOEUwQjtBQW1CcEM7QUFqQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW1CcEI7QUFqQm9CO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFtQnhCO0FBZmdCO0VBQ0ksbUJEM0VBO0FDNEZwQjtBQWZvQjtFQUNJLHFCRDlFSjtBQytGcEI7QUFiZ0I7RUFDSSxtQkR2Rk47QUNzR2Q7QUFib0I7RUFDSSxxQkQxRlY7QUN5R2Q7QUFYZ0I7RUFDSSxtQkRoR0w7QUM2R2Y7QUFYb0I7RUFDSSxxQkRuR1Q7QUNnSGY7QUFUZ0I7RUFDSSxtQkQxR047QUNxSGQ7QUFUb0I7RUFDSSxxQkQ3R1Y7QUN3SGQ7QUFQZ0I7RUFDSSxtQkR6SEo7QUNrSWhCO0FBUG9CO0VBQ0kscUJENUhSO0FDcUloQjtBQUxnQjtFQUNJLG1CRHJIUjtBQzRIWjtBQUxvQjtFQUNJLHFCRHhIWjtBQytIWjtBQUhnQjtFQUNJLG1CRC9ITjtBQ29JZDtBQUhvQjtFQUNJLHFCRGxJVjtBQ3VJZDtBQURnQjtFQUNJLG1CRGxJTDtBQ3FJZjtBQURvQjtFQUNJLHFCRHJJVDtBQ3dJZjtBQUNnQjtFQUNJLG1CRDlJVDtBQytJWDtBQUNvQjtFQUNJLHFCRGpKYjtBQ2tKWDtBQUlZO0VBQ0ksZUFBQTtBQUZoQjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFRSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREQ1TGdCO0VDNkxoQixtQkR0TFE7RUN1TFIsV0FBQTtBQU5SO0FBUVE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VDek1GLDZCRDBNc0I7QUFIaEM7QUFPWTtFQUNJLGVBQUE7QUFMaEI7QUFVSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBUlI7QUFVUTtFQUNJLGFBQUE7QUFSWjtBQVdRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFUWjtBQVdZO0VBQ0ksa0JBQUE7QUFUaEI7QUFjWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREQzT0c7QUMrTm5CO0FBZVk7RUFDSSxlQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBZGhCO0FBc0JJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBcEJSO0FBd0JJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBdEJSO0FBeUJJO0VBQ0ksYURuUmtCO0VDb1JsQix1QkFBQTtFQUNBLGtCQUFBO0FBdkJSO0FBMEJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUNuUkUsMkJEb1JpQjtBQXJCM0I7QUF3Qkk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQzFSRSwyQkQyUmlCO0FBbkIzQjtBQXFCUTtFQUNJLG1ERDlSWTtFQytSWixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQW5CWjtBQXFCWTtFQUNJLGNEN1JBO0VDOFJBLGtCQUFBO0FBbkJoQjtBQXdCUTtFQUNJLHFERC9TYztFQ2dUZCxtQkFBQTtFQUNBLGVBQUE7QUF0Qlo7QUF5QlE7RUFDSSxrQkFBQTtBQXZCWjtBQTJCSTtFQUNJLG1CQUFBO0FBekJSO0FBNEJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBMUJSO0FBZ0NJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFEN1VrQjtFRVFoQiwyQkRzVWlCO0FBM0IzQjtBQTZCUTtFQUNJLGFBQUE7QUEzQlo7QUE2Qlk7RUFDSSxnQkFBQTtBQTNCaEI7QUErQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUE3Qlo7QUFpQ1E7RUFDSSxRQUFBO0VBQ0EseUVBQUE7QUEvQlo7QUFrQ1E7RUFDSSxPQUFBO0VBQ0EsMEVBQUE7QUFoQ1o7QUFtQ1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFqQ1o7QUFvQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWxDWjtBQW9DWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWxDaEI7QUFvQ2dCO0VBQ0ksZUFBQTtBQWxDcEI7QUEyQ1E7RUFDSSxZQUFBO0FBekNaO0FBMkNZO0VBQ0ksaUJBQUE7QUF6Q2hCO0FBOENJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQTVDUjtBQThDUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQTVDWjtBQThDWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUE1Q2hCO0FBOENnQjtFQUNJLGVBQUE7QUE1Q3BCO0FBK0NZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBN0NoQjtBQWlEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUREdmFnQjtFQ3dhaEIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBL0NaO0FBa0RRO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUREaGJZO0VDaWJaLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdEM2FTO0FDMlhyQjtBQWtEWTtFQUNJLGNEamJBO0FDaVloQjtBQW1EWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFqRGhCO0FBMkRRO0VBQ0ksa0JBQUE7QUF6RFo7QUE0RFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRHJjUztFQ3NjVCxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUExRFo7QUE0RFk7RUFDSSx5QkFBQTtFQUNBLGNEcmRBO0FDMlpoQjtBQTZEWTtFQUNJLHlCQUFBO0VBQ0EsY0RuZEY7QUN3WmQ7QUE4RFk7RUFDSSx5QkFBQTtFQUNBLGNEcmRGO0FDeVpkO0FBK0RZO0VBQ0kseUJBQUE7RUFDQSxjRHZkQztBQzBaakI7QUFnRVk7RUFDSSxlQUFBO0VBQ0Esc0REcmZHO0FDdWJuQjtBQXdFUTtFQUNJLGVBQUE7QUF0RVo7QUF5RVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUF2RVo7QUEwRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUF4RVo7QUE0RVk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBMUVoQjtBQTRFZ0I7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQTFFcEI7QUE0RW9CO0VBQ0ksY0FBQTtBQTFFeEI7QUFnRlE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBOUVaO0FBaUZnQjtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJEcGhCRjtBQ3FjbEI7QUFpRm9CO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtBQS9FeEI7QUFxRlE7RUFDSSxnQkFBQTtFQUNBLDJERHhqQm1CO0VDeWpCbkIseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbkZaO0FBc0ZRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXBGWjtBQXNGWTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFwRmhCO0FBc0ZnQjtFQUFXLE9BQUE7RUFBUyxRQUFBO0VDMWtCMUIsMkJEMGtCdUQ7QUE5RWpFO0FBK0VnQjtFQUFXLFVBQUE7RUFBWSxRQUFBO0VDM2tCN0IsMkJEMmtCMEQ7QUF2RXBFO0FBd0VnQjtFQUFXLFdBQUE7RUFBYSxRQUFBO0VDNWtCOUIsMkJENGtCMkQ7RUFBbUIsVUFBQTtBQS9EeEY7QUFnRWdCO0VBQVcsV0FBQTtFQUFhLFFBQUE7RUM3a0I5QiwyQkQ2a0IyRDtFQUFtQixVQUFBO0FBdkR4RjtBQXdEZ0I7RUFBVyxXQUFBO0VBQWEsUUFBQTtFQzlrQjlCLDJCRDhrQjJEO0VBQW1CLFVBQUE7QUEvQ3hGO0FBbURRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQWpEWjtBQTZESTtFQUNJLGFEMW1Ca0I7QUMraUIxQjtBQTZEUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBM0RaO0FBNkRZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQTNEaEI7QUE2RGdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQzduQlYsNENEOG5CNkI7QUF4RHZDO0FBMERvQjtFQ2hvQlYsMEREaW9CaUM7QUFyRDNDO0FBd0RvQjtFQ3BvQlYsMEREcW9CaUM7QUFuRDNDO0FBc0RvQjtFQ3hvQlYsMkREeW9CaUM7QUFqRDNDO0FBb0RvQjtFQzVvQlYsMkRENm9CaUM7QUEvQzNDO0FBbURnQjtFQUNJLFVBQUE7QUFqRHBCO0FBb0RnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXRGhwQkM7RUNpcEJELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWxEcEI7QUFvRG9CO0VBQ0ksd0JBQUE7QUFsRHhCO0FBc0RnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VDcHJCViwyQkRxckI2QjtFQzVyQjdCLDRCRDZyQjhCO0FBOUN4QztBQW1Eb0I7RUFDSSxVQUFBO0FBakR4QjtBQXFEd0I7RUFDSSxVQUFBO0FBbkQ1QjtBQXVEb0I7RUFDSSxVQUFBO0FBckR4QjtBQXdEb0I7RUFDSSxVQUFBO0FBdER4QjtBQTBEb0I7RUFDSSxlQUFBO0FBeER4QjtBQTJEb0I7RUNsdEJWLHNCRG10QmlDO0FBdEQzQztBQTBEZ0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUREL3RCTTtFQ2d1Qk4sa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUNydUJWLDRCRHN1QjhCO0FBckR4QztBQXdEZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0QxdUJKO0VDMnVCSSw0QkFBQTtBQXREcEI7QUF3RG9CO0VDM3ZCViw0QkQ0dkJrQztFQUNwQixlQUFBO0FBbkR4QjtBQXVEZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQXJEcEI7QUF1RG9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBckR4QjtBQXVEd0I7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBckQ1QjtBQXlEb0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdkR4QjtBQXlEd0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VDNXhCbEIsNEJENnhCc0M7QUFwRGhEO0FBd0RvQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUNweUJkLDRCRHF5QmtDO0FBbkQ1QztBQXVEZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREQxeUJEO0VDMnlCQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUNoekJWLDRCRGl6QjhCO0FBbER4QztBQXFEZ0I7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VDenpCViw0QkQwekI4QjtBQWhEeEM7QUFxRGdCO0VBQ0ksc0REOXpCRDtFQyt6QkMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFuRHBCO0FBNkRDO0VBQ0ksWUFBQTtBQTNETDtBQTZESTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQTNEUjtBQThESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQTVEUjtBQStESTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTdEUjtBQWtFUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VDejJCRiw2QkQwMkJzQjtBQTdEaEM7QUErRFk7RUFDSSxxREQxMkJVO0VFSGhCLDZCRDgyQjBCO0FBMURwQztBQTZEWTtFQUNJLHFCRHAyQkE7RUNxMkJBLGNEcjJCQTtBQzB5QmhCO0FBNkRnQjtFQUNJLFdEcjJCQztBQzB5QnJCO0FBOERnQjtFQUNJLGNENTJCSjtBQ2d6QmhCO0FBZ0VZO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQTlEaEI7QUFnRWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQTlEcEI7QUFnRW9CO0VBQ0ksa0JBQUE7QUE5RHhCO0FBb0VZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsRWhCO0FBdUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBckVSO0FBd0VRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF0RVo7QUE0RUE7RUFDSTtJQUNJLGtCQUFBO0VBMUVOO0VBNEVNO0lBQ0ksVUFBQTtFQTFFVjtFQTZFTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQTNFVjtFQWdGTTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUE5RVY7RUFtRkU7SUFDSSxlQUFBO0VBakZOO0VBb0ZFO0lBQ0ksZUFBQTtFQWxGTjtFQXFGRTtJQUNJLFlBQUE7RUFuRk47RUFzRkU7SUFDSSx3QkFBQTtFQXBGTjtFQXVGRTtJQUNJLHNCQUFBO0VBckZOO0VBd0ZVO0lBQ0ksUUFBQTtFQXRGZDtFQXdGYztJQUNJLG1CQUFBO0VBdEZsQjtFQTBGVTtJQUNJLFFBQUE7RUF4RmQ7RUE0Rk07SUFDSSxtQkFBQTtFQTFGVjtFQTZGTTtJQUNJLHdCQUFBO0lBQ0EsY0FBQTtFQTNGVjtFQTZGVTtJQUNJLHFCQUFBO0VBM0ZkO0VBOEZVO0lBQ0ksZUFBQTtFQTVGZDtFQWdHTTtJQUNJLHdCQUFBO0lBQ0EsY0FBQTtFQTlGVjtFQWdHVTtJQUNJLG1CQUFBO0VBOUZkO0VBZ0djO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBOUZsQjtFQWdHa0I7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQTlGdEI7RUFzR0U7SUFDSSxtQ0FBQTtJQUNBLHNCQUFBO0VBcEdOO0VBc0dNO0lBQ0ksc0JBQUE7SUFDQSwyQkFBQTtFQXBHVjtFQXVHTTtJQUNJLHNCQUFBO0lBQ0Esb0JBQUE7RUFyR1Y7RUFnSVU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQTlIZDtFQWdJYztJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXRHZpQ0M7SUN3aUNELGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQTlIbEI7RUFtSWM7SUFDSSxXQUFBO0VBaklsQjtFQXVJa0I7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0VBckl0QjtFQXlJYztJQUNJLFdBQUE7RUF2SWxCO0FBQ0Y7QUFpSkk7RUE5bENKO0lBd29DUTs7TUFBQTtJQTBJQTs7TUFBQTtFQTVUTjtFQTBJTTtJQUNJLGVBQUE7RUF4SVY7RUEySU07SUFDSSxtQkFBQTtJQUNBLHdCQUFBO0VBeklWO0VBNElNO0lBQ0ksdUJBQUE7SUFDQSxnQkFBQTtFQTFJVjtFQTZJTTtJQUNJLGlCQUFBO0lBQ0EsaUNBQUE7RUEzSVY7RUE2SVU7SUFDSSx3QkFBQTtFQTNJZDtFQStJTTtJQUNJLHNCQUFBO0VBN0lWO0VBK0lVO0lBQ0ksbUJBQUE7RUE3SWQ7RUErSWM7SUFDSSxrQkFBQTtFQTdJbEI7RUFrSk07SUFDSSw0QkFBQTtFQWhKVjtFQXVKTTtJQUNJLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQXJKVjtFQXdKTTtJQUNJLHdCQUFBO0VBdEpWO0VBeUpNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VBdkpWO0VBeUpVO0lBQ0ksUUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFFBQUE7RUF2SmQ7RUF5SmM7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUF2SmxCO0VBMkpVO0lBQ0ksUUFBQTtJQUNBLG9CQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQXpKZDtFQTZKTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQTNKVjtFQTZKVTtJQUNJLFdBQUE7RUEzSmQ7RUE2SmM7SUFDSSx3QkFBQTtFQTNKbEI7RUE4SmM7SUFDSSxrQkFBQTtFQTVKbEI7RUFnS1U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQTlKZDtFQWtLTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBaEtWO0VBb0tNO0lBQ0ksVUFBQTtFQWxLVjtFQXNLVTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7RUFwS2Q7RUF1S2M7SUFDSSxzQkFBQTtJQUNBLFVBQUE7RUFyS2xCO0VBdUtrQjtJQUNJLHNCQUFBO0VBckt0QjtFQXdLa0I7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7RUF0S3RCO0VBd0tzQjtJQUNJLGtCQUFBO0lBQ0Esc0JBQUE7RUF0SzFCO0VBNEtzQjtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQTFLMUI7RUE2S3NCO0lBQ0ksa0JBQUE7RUEzSzFCO0VBOEtzQjtJQUNJLGtCQUFBO0VBNUsxQjtFQWdMa0I7SUFDSSxtQ0FBQTtJQUNBLGNBQUE7SUFDQSx3QkFBQTtFQTlLdEI7RUFzTGM7SUFDSSxlQUFBO0VBcExsQjtFQThMVTtJQUNJLGVBQUE7RUE1TGQ7RUFpTWtCO0lBQ0ksY0FBQTtFQS9MdEI7QUFDRiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cclxuXHJcbi8vIFN0cnVjdHVyZVxyXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1tZWRpdW06IFwiRnV0dXJhIFJvdW5kIE1lZGl1bVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQ6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBCb2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQ6IFwiRnV0dXJhIFJvdW5kIEJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XHJcbiRoZWFkZXItYmc6ICM4RjAwRkY7XHJcbiRib2R5LWJnOiAjMzMxMjRlO1xyXG4kcHJpbWFyeS1jb2xvcjogIzhGMDBGRjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICNhYTNmZmM7XHJcbiRwcmltYXJ5LWJnLWNvbG9yLWRhcms6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG4kaW5lbGlnaWJsZS1jb2xvcjogI2IxMzc4ODtcclxuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XHJcbiRjb2xvci1ncmVlbjogIzAwYWI3ODtcclxuJGNvbG9yLWJnLWdyZWVuOiAjRTZGRkYwO1xyXG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xyXG4kY29sb3Itb3JhbmdlOiNERjlGMzA7XHJcbiRjb2xvci1yZWQ6I0ZGMDUwMDtcclxuJGNvbG9yLWJsdWU6IzJGNUJBQztcclxuJGNvbG9yLWRhcmstYmx1ZTojMzkzNUZGO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiNENkM1OEQ7XHJcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzczMmFhO1xyXG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XHJcbiR1cmwtY29sb3I6ICNkYzlhZjA7XHJcbiRhY2NlbnQtY29sb3I6ICNFRjdGMTk7IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW5zJztcclxuXHJcbjpob3N0IHtcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA3NXB4IDA7XHJcbiAgICAgICAgd2lkdGg6ICR3cmFwcGVyLWNvbnRhaW5lci13aWR0aDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgJi5iYW5uZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndhcm5pbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lci1saW5rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUFFQUVBO1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XHJcbiAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1bGwtd2lkdGgtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXN0cmljdC1saXN0LXNlbGVjdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSggdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5zYW5keS1zZWNyZXRzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtb3JhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItbGlnaHQtb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmFwcmljb3QtYWxsZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1vcmFuZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1vcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYnVlbmFzLWJhbmFuYXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci15ZWxsb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci15ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYmFzaWwtYm9yb3VnaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWdyZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuZ3JhcGV5LWdhcmRlbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5zdGFycnktc2tpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hcHJpY290LWFsbGV5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itb3JhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1zaWx2ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1zaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuZWxvbi1lc3RhdGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uLndvcmstd2l0aC11cyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxvcmUtcGFydG5lcnNoaXBzLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbiAuY29sdW1ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLmNvbHVtbi1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiKDAgMCAwIC8gMzAlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgU1RBUlQgQ0FST1VTRUwgU1RZTEVTXHJcbiAgICAgKi9cclxuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lci1pbm5lciB7XHJcbiAgICAgICAgd2lkdGg6ICR3cmFwcGVyLWNvbnRhaW5lci13aWR0aDtcclxuICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG8gNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb21vLWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDgwcHgpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA4MHB4KTtcclxuICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkpO1xyXG5cclxuICAgICAgICAuc2xvZ2FuLXRleHQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxMTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgLmhpZ2hsaWdodGVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJ0ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LW1lZGl1bTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tdGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFBhcnRuZXJzaGlwc1xyXG4gICAgICovXHJcbiAgICAucGFydG5lcnNoaXBzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6ICR3cmFwcGVyLWNvbnRhaW5lci13aWR0aDtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSk7XHJcblxyXG4gICAgICAgICYucHJlbWl1bSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXJ0bmVyLXRleHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jdGEtY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICAgICBpLCBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50ZG93bi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMTVweDtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgICAgICAgLnRpbWVsZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICY+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudC1kb3duIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LXNlbWlib2xkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRkb3duLXNhbGUtdGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VBRUFFQTUwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgTWV0YXZlcnNlIHNlY3Rpb25cclxuICAgICAqL1xyXG4gICAgLm1ldGF2ZXJzZS1pbWFnZS10b2dnbGVzIHtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUtZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmVlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUtb3JhbmdlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1vcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLW9yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUteWVsbG93IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1kYXJrLWJsdWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRhcmstYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiAgSW5mb3JtYXRpb25cclxuICAgICovXHJcbiAgICAuaW5mb3JtYXRpb24ge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdvLWNvbHVtbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozOTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgb3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAmLnJvdW5kZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJ0ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5jYXJkLTEgeyBsZWZ0OiAwOyB0b3A6IDUwJTsgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkpIH1cclxuICAgICAgICAgICAgICAgICYuY2FyZC0yIHsgbGVmdDogNjBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKSB9XHJcbiAgICAgICAgICAgICAgICAmLmNhcmQtMyB7IGxlZnQ6IDEyMHB4OyB0b3A6IDUwJTsgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkpOyB6LWluZGV4OjU7IH1cclxuICAgICAgICAgICAgICAgICYuY2FyZC00IHsgbGVmdDogMjEwcHg7IHRvcDogNTAlOyBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSk7IHotaW5kZXg6MzsgfVxyXG4gICAgICAgICAgICAgICAgJi5jYXJkLTUgeyBsZWZ0OiAzMzBweDsgdG9wOiA1MCU7IEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpKTsgei1pbmRleDoyOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBEYXkvTmlnaHQgY3ljbGUgYXJlYVxyXG4gICAgICovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgKiAgVGVhbSBzZWN0aW9uXHJcbiAgICAqL1xyXG4gICAgLnRlYW0ge1xyXG4gICAgICAgIHdpZHRoOiAkd3JhcHBlci1jb250YWluZXItd2lkdGg7XHJcblxyXG4gICAgICAgIC50ZWFtLWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLmJsb2ItYmcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYucm90YXRlLTQwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDBkZWcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYucm90YXRlLTgwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoODBkZWcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYucm90YXRlLTEyMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDEyMGRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5yb3RhdGUtMTYwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMTYwZGVnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJj5hLCAudGVhbS1tZW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDE1cHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC01MCUpKTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC4zcyBlYXNlLWluLW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJj5hLCAudGVhbS1tZW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZWFtLW1lbWJlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXByb2ZpbGUtYmxvY2sgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKDEuMDUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWFnZS1wcm9maWxlLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5pbWFnZS1jcmlzcHksIC5pbWFnZS1jcmlzcHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6Ljc7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZWFtLW1lbWJlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguM3MgZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiAgRkFRXHJcbiAqL1xyXG4gLmZhcSB7XHJcbiAgICAgd2lkdGg6IDk1MHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXEtZ3JvdXAtYmxvY2stY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICB1bC5mYXEtc2VjdGlvbiB7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjE1cyBlYXNlLWluLW91dCk7XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktbWVkaXVtO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiguMTVzIGVhc2UtaW4tb3V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB1bCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ1bGxldC1wb2ludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgICAgICAgLmNoZXZyb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xyXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJj5pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsb2dhbi10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3RhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb3BlcnR5cy1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5leHBsb3JlLXBhcnRuZXJzaGlwcy1idG4ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudHdvLWNvbHVtbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgJi5yaWdodC1vcmRlci0wIHtcclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlZnQuaW1hZ2VzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICAuYnJlYWtwb2ludCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICYucm91bmRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDYwcHggYXV0byA0MHB4O1xyXG5cclxuICAgICAgICAmLmJhbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuY2Fyb3VzZWwtM2Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmJsb2ItYmcge1xyXG4gICAgLy8gICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMC42KSAhaW1wb3J0YW50KTtcclxuXHJcbiAgICAvLyAgICAgJi5yb3RhdGUtNDAge1xyXG4gICAgLy8gICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0MGRlZykgc2NhbGUoMC42KSAhaW1wb3J0YW50KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgICYucm90YXRlLTgwIHtcclxuICAgIC8vICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoODBkZWcpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAmLnJvdGF0ZS0xMjAge1xyXG4gICAgLy8gICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgxMjBkZWcpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAmLnJvdGF0ZS0xNjAge1xyXG4gICAgLy8gICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgxNjBkZWcpIHNjYWxlKDAuNikgIWltcG9ydGFudCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC50ZWFtIHtcclxuICAgICAgICAudGVhbS1saXN0IHtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJj5hLCAudGVhbS1tZW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDE1cHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYSwgLnRlYW0tbWVtYmVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogIE1lZGlhIHN0eWxlc1xyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHJcbiAgICAgICAgLmRpc3RyaWN0LWxpc3Qtc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRkb3duLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudGRvd24tc2FsZS10ZXh0IHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvIDQwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9uIC5jb2x1bW5zIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gOTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIEJhbm5lclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lci1pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWFyZWEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgLnByb21vLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXJ0bmVyc2hpcHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3R0b206IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGxlZnQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICYucHJlbWl1bSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsb2dhbi1jb250YWluZXIsIC5wcm9tby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtIHtcclxuICAgICAgICAgICAgLnRlYW0tbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXByb2ZpbGUtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHggYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50d28tY29sdW1uIHtcclxuICAgICAgICAgICAgLnJpZ2h0LCAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIEZBUVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC5mYXEge1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsLmZhcS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgICAtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgICAgICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbn0iXX0= */"]
        });
        return IndexComponent;
      }();
      /***/

    },

    /***/
    "rSti":
    /*!***************************************!*\
      !*** ./src/app/index/index.module.ts ***!
      \***************************************/

    /*! exports provided: IndexModule */

    /***/
    function rSti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexModule", function () {
        return IndexModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./index.component */
      "aUdj");
      /* harmony import */


      var _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/components/app-header/app-header.module */
      "wSNE");
      /* harmony import */


      var _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/components/app-footer/app-footer.module */
      "vvQE");
      /* harmony import */


      var _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/dialogs/mint-dialog/mint-dialog.module */
      "+Fro");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { Carousel3DComponent } from "../shared/components/carousel-3d/carousel-3d.component";


      var IndexModule = /*@__PURE__*/function () {
        var IndexModule = /*#__PURE__*/_createClass(function IndexModule() {
          _classCallCheck(this, IndexModule);
        });

        IndexModule.ɵfac = function IndexModule_Factory(t) {
          return new (t || IndexModule)();
        };

        IndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
          type: IndexModule,
          bootstrap: [_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
        });
        IndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
            useValue: {}
          }],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_5__["AppHeaderModule"], _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_6__["AppFooterModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__["IvyCarouselModule"], _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_7__["MintDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
            path: '',
            component: _index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
          }])]]
        });
        return IndexModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](IndexModule, {
          declarations: [_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _shared_components_app_header_app_header_module__WEBPACK_IMPORTED_MODULE_5__["AppHeaderModule"], _shared_components_app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_6__["AppFooterModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_9__["IvyCarouselModule"], _shared_dialogs_mint_dialog_mint_dialog_module__WEBPACK_IMPORTED_MODULE_7__["MintDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
        });
      })();
      /***/

    },

    /***/
    "yIhK":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/dialogs/mint-dialog/mint-dialog.component.ts ***!
      \*********************************************************************/

    /*! exports provided: MintDialogComponent */

    /***/
    function yIhK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MintDialogComponent", function () {
        return MintDialogComponent;
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
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

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
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

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
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

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
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.mintableHouses);
        }
      }

      function MintDialogComponent_div_30_div_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MintDialogComponent_div_30_div_5_div_11_Template_input_input_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r20.handleMintAmountSlider($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

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
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_30_div_5_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r24.mint("presale");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_div_5_button_12_span_1_Template, 3, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_30_div_5_button_12_span_2_Template, 2, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

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
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

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
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_30_div_6_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r32.mint("partner");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MintDialogComponent_div_30_div_6_button_12_span_1_Template, 3, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MintDialogComponent_div_30_div_6_button_12_span_2_Template, 2, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

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
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

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
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.presaleMintEnabled && !ctx_r3.partnerMintEnabled && !ctx_r3.mintingStage["public"]);
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
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MintDialogComponent_div_31_Template_input_input_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r38.handleMintAmountSlider($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_div_31_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r40.mint("public");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MintDialogComponent_div_31_span_19_Template, 3, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MintDialogComponent_div_31_span_20_Template, 2, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

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

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      var MintDialogComponent = /*@__PURE__*/function () {
        var MintDialogComponent = /*#__PURE__*/function () {
          function MintDialogComponent(_data, dialogRef, smartContractCoreService, eventMessengerService) {
            _classCallCheck(this, MintDialogComponent);

            this._data = _data;
            this.dialogRef = dialogRef;
            this.smartContractCoreService = smartContractCoreService;
            this.eventMessengerService = eventMessengerService; // Minting related

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
              "public": false
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
            this.countdownSecs = 0; // Account stuff

            this.accounts = [];
            this.isEligible = false;
            this.presaleTier = {
              tier: 0,
              mintAmount: 0
            }; // Minting eligibility

            this.isPresaleEligible = false;
            this.isPartnerEligible = false;
            this.partnerMintEnabled = false;
            this.presaleMintEnabled = false;
            this.publicMintEnabled = false;
            this.accounts = _data.accounts;
          }

          _createClass(MintDialogComponent, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              clearInterval(this.countdownTimer);
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _this11 = this;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.smartContractCoreService.getPrivateSaleStartTime();

                      case 2:
                        this.privateSaleStartTime = _context8.sent;
                        this.privateSaleStartTime = parseInt(this.privateSaleStartTime._hex, 16) * 1000;
                        this.countdownTimer = setInterval(function () {
                          _this11.updateCountdownTimer();
                        }, 1000);
                        this.updateCountdownTimer(); // Build the houses

                        this.buildHouses(); // We need to get all the tier amounts and all that from the presale/partnerships
                        // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
                        // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);
                        // Get all the wallet information

                        _context8.next = 9;
                        return this.handleWalletAccounts();

                      case 9:
                        _context8.next = 11;
                        return this.initiateSalePrices();

                      case 11:
                        // Handle changing account
                        this.eventMessengerService.subscribe('accountsChanged', function (event) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    this.accounts = event.data.accounts; // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
                                    // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);
                                    // Get all the wallet information

                                    _context6.next = 3;
                                    return this.handleWalletAccounts();

                                  case 3:
                                    _context6.next = 5;
                                    return this.initiateSalePrices();

                                  case 5:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6, this);
                          }));
                        }); // Handle disconnecting all metamask services

                        this.eventMessengerService.subscribe('disconnect', function (event) {
                          _this11.dialogRef.close();
                        }); // Get all the tokens that have already been minted

                        this.smartContractCoreService.getTotalMintedSupply().then(function (tx) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    this.totalMinted = parseInt(tx._hex, 16).toLocaleString('en');

                                  case 1:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        })["catch"](function (error) {});

                      case 14:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }
            /**
             * Handle wallet accounts
             */

          }, {
            key: "handleWalletAccounts",
            value: function handleWalletAccounts() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var _this12 = this;

                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(this.accounts.length == 0)) {
                          _context10.next = 4;
                          break;
                        }

                        this.dialogRef.close();
                        _context10.next = 8;
                        break;

                      case 4:
                        clearInterval(this.saleWindowTimerInterval);
                        this.saleWindowTimerInterval = setInterval(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                              while (1) {
                                switch (_context9.prev = _context9.next) {
                                  case 0:
                                    _context9.next = 2;
                                    return this.setWalletEligibility();

                                  case 2:
                                  case "end":
                                    return _context9.stop();
                                }
                              }
                            }, _callee9, this);
                          }));
                        }, 10000);
                        _context10.next = 8;
                        return this.setWalletEligibility();

                      case 8:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }
            /**
             * Determine wallet eligibility
             * Note: This will update buttons and stuff
             */

          }, {
            key: "setWalletEligibility",
            value: function setWalletEligibility() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var isPresaleOpen, isPublicSaleOpen, remainingMints;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return this.smartContractCoreService.isPresaleOpen();

                      case 2:
                        isPresaleOpen = _context11.sent;
                        _context11.next = 5;
                        return this.smartContractCoreService.isPublicSaleOpen();

                      case 5:
                        isPublicSaleOpen = _context11.sent;
                        _context11.next = 8;
                        return this.smartContractCoreService.isPartnerMinted(this.accounts[0]);

                      case 8:
                        this.isPartnerMinted = _context11.sent;
                        remainingMints = 0;

                        if (!(this.presaleWhitelisted && this.presaleWhitelisted['data']['results'])) {
                          _context11.next = 21;
                          break;
                        }

                        if (!(this.presaleWhitelisted.data.results.tier > 0)) {
                          _context11.next = 19;
                          break;
                        }

                        _context11.next = 14;
                        return this.smartContractCoreService.getRemainingPrivateSaleMints(this.accounts[0]);

                      case 14:
                        remainingMints = _context11.sent;
                        // Check user eligibility
                        this.presaleTier.tier = this.presaleWhitelisted.data.results.tier;
                        this.presaleTier.mintAmount = this.presaleWhitelisted.data.results.tier - remainingMints;
                        _context11.next = 21;
                        break;

                      case 19:
                        this.presaleTier.tier = 0;
                        this.presaleTier.mintAmount = 0;

                      case 21:
                        if (isPresaleOpen) {
                          // Private sale whitelists
                          if (this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                            if (this.presaleWhitelisted.data.results.tier > 0) {
                              this.presaleMintEligible = true;
                              this.presaleMintEnabled = true;
                            }
                          } else {
                            this.presaleMintEligible = false;
                            this.presaleMintEnabled = false;
                            this.mintingStage['presale'] = false;
                          } // Partnerships eligibility


                          if (this.parnterWhitelisted && this.partnerWhitelisted['data']['results']) {
                            if (this.partnerWhitelisted.data.results.address) {
                              this.partnerMintEligible = true;
                              this.partnerMintEnabled = true;
                            }
                          } else {
                            this.partnerMintEligible = false;
                            this.partnerMintEnabled = false;
                            this.mintingStage['partner'] = false;
                          }

                          this.mintingStage['presale'] = true;
                          this.mintingStage['partner'] = true;
                          this.mintingStage['public'] = false;
                        } else if (isPublicSaleOpen) {
                          this.mintingStage['presale'] = false;
                          this.mintingStage['partner'] = false;
                          this.mintingStage['public'] = true;
                          this.publicMintEnabled = true;
                        } else {
                          this.mintingStage['presale'] = false;
                          this.mintingStage['partner'] = false;
                          this.mintingStage['public'] = false;
                          this.partnerMintEnabled = false;
                          this.presaleMintEnabled = false;
                        }

                        this.contentLoaded = true;

                      case 23:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }
            /**
             * Initiate sale prices
             */

          }, {
            key: "initiateSalePrices",
            value: function initiateSalePrices() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (!this.presaleMintEnabled) {
                          _context12.next = 5;
                          break;
                        }

                        if (!(this.presaleWhitelisted && this.presaleWhitelisted['data']['results'])) {
                          _context12.next = 5;
                          break;
                        }

                        _context12.next = 4;
                        return this.smartContractCoreService.getPrice('presale', this.presaleWhitelisted.data.results.tier);

                      case 4:
                        this.presalePriceText = _context12.sent;

                      case 5:
                        _context12.next = 7;
                        return this.smartContractCoreService.getPrice('partner');

                      case 7:
                        this.partnerSalePriceText = _context12.sent;
                        _context12.next = 10;
                        return this.smartContractCoreService.getPrice('public');

                      case 10:
                        this.publicSalePriceText = _context12.sent;

                      case 11:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            }
            /**
             * Simple countdown timer function. End date is set for private sale
             */

          }, {
            key: "updateCountdownTimer",
            value: function updateCountdownTimer() {
              var endDate = this.privateSaleStartTime; // Update this with the end time in milliseconds

              var now = Date.now();
              var t = endDate - now;

              if (t >= 0) {
                this.countdownTime = t;
                this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
                this.countdownHours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                this.countdownMins = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
                this.countdownSecs = Math.floor(t % (1000 * 60) / 1000);
              } else {
                this.countdownTime = 0;
              }
            }
            /**
             * Show the houses that represent how many a user can mint
             */

          }, {
            key: "buildHouses",
            value: function buildHouses() {
              // Adjust house
              this.mintableHouses = [];

              for (var i = 0; i < this.mintAmount; i++) {
                this.mintableHouses.push({
                  index: i
                });
              }
            }
            /**
             *  Closes the dialog
             */

          }, {
            key: "close",
            value: function close() {
              this.dialogRef.close();
            }
            /**
             * Handle the slider for purchasing unicorns
             */

          }, {
            key: "handleMintAmountSlider",
            value: function handleMintAmountSlider(e) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        this.mintAmount = e.target.value; // Build houses

                        this.buildHouses();

                      case 2:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            }
            /**
             * Mint functionality for button
             */

          }, {
            key: "mint",
            value: function mint(mintType) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var _this13 = this;

                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        if (mintType === 'presale') {
                          this.isPresaleMinting = true;
                        } else if (mintType === 'partner') {
                          this.isPartnerMinting = true;
                        } else if (mintType === 'public') {
                          this.isMinting = true;
                        }

                        this.smartContractCoreService.mint(this.mintAmount, mintType).then(function (tx) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            var _this14 = this;

                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    tx.wait().then(function (success) {
                                      if (mintType === 'partner') {} else {
                                        var grammar = _this14.mintAmount == 1 ? '' : 's';
                                      }

                                      _this14.dialogRef.close();
                                    });

                                  case 1:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14);
                          }));
                        })["catch"](function (error) {
                          var errorMsg = _this13.smartContractCoreService.createErrorMsg(error); // Show an error 


                          _this13.isMinting = false;
                          _this13.isPartnerMinting = false;
                          _this13.isPresaleMinting = false;
                        });

                      case 2:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            }
          }]);

          return MintDialogComponent;
        }();

        MintDialogComponent.ɵfac = function MintDialogComponent_Factory(t) {
          return new (t || MintDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_smart_contract_core_service__WEBPACK_IMPORTED_MODULE_3__["SmartContractCoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_messenger_service__WEBPACK_IMPORTED_MODULE_4__["EventMessengerService"]));
        };

        MintDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: MintDialogComponent,
          selectors: [["mint-dialog"]],
          decls: 32,
          vars: 12,
          consts: [[1, "modal"], ["type", "button", 1, "close", 3, "click"], [1, "fas", "fa-times-circle"], [1, "inner"], [1, "title"], ["class", "countdown-container", 4, "ngIf"], [1, "supply-container-text"], [1, "supply-breakdown"], [1, "supply", "private-sale"], [1, "supply", "public-sale"], [1, "supply", "team"], [1, "breakdown-list-container"], [1, "pill", "private", 3, "ngClass"], [1, "active-now"], [1, "amount"], [1, "pill", "public", 3, "ngClass"], [1, "pill", "reserved"], ["class", "loading", 4, "ngIf"], ["class", "no-active-sale", 4, "ngIf"], ["class", "mint-container", 4, "ngIf"], ["class", "mint-container public", 4, "ngIf"], [1, "countdown-container"], [1, "timeleft", "count-down"], [4, "ngIf"], [1, "label"], [1, "sale-text"], [1, "loading"], ["src", "/assets/images/loading-dark.svg", "width", "50"], [1, "no-active-sale"], [1, "mint-container"], [1, "mint-container-row"], ["class", "price-block", 4, "ngIf"], [1, "price-block"], [1, "price", "margin-bottom-0"], [1, "fab", "fa-ethereum"], ["id", "price"], [1, "available-mints"], ["src", "/assets/images/gold-house.png", "width", "80", "style", "opacity: .2; margin-top: 10px;", 4, "ngIf"], ["class", "adjustable-houses-container", 4, "ngIf"], ["class", "pricing-range", 4, "ngIf"], ["class", "mint scale-hover", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "ineligible", 4, "ngIf"], ["src", "/assets/images/gold-house.png", "width", "80", 2, "opacity", ".2", "margin-top", "10px"], [1, "adjustable-houses-container"], ["class", "house", 4, "ngFor", "ngForOf"], [1, "house"], ["src", "/assets/images/gold-house.png", "width", "50"], [1, "pricing-range"], ["type", "range", "min", "1", "step", "1", "value", "1", 1, "slider", 3, "max", "disabled", "input"], [1, "purchase-amount-text"], ["type", "button", 1, "mint", "scale-hover", 3, "disabled", "click"], ["class", "mint-loading", 4, "ngIf"], [1, "mint-loading"], ["src", "/assets/images/loading.gif", "width", "25"], [1, "ineligible"], [1, "fas", "fa-minus-circle"], [1, "single-quantity-container"], ["src", "/assets/images/gold-house.png", "width", "80", 4, "ngIf"], ["src", "/assets/images/gold-house.png", "width", "80"], [1, "mint-container", "public"], [1, "price-block", "public-sale"], [1, "price"], ["type", "range", "min", "1", "max", "8", "step", "1", "value", "1", 1, "slider", 3, "disabled", "input"]],
          template: function MintDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MintDialogComponent_Template_button_click_1_listener() {
                return ctx.close();
              });

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

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contentLoaded && !ctx.mintingStage.presale && !ctx.mintingStage.partner && !ctx.mintingStage["public"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mintingStage.presale && ctx.mintingStage.partner && ctx.contentLoaded);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mintingStage["public"] && ctx.contentLoaded);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
          styles: ["[_nghost-%COMP%] {\n  \n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px auto 30px auto;\n  padding: 15px;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .no-active-sale[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n[_nghost-%COMP%]   .loading[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 15px;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   .timeleft[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  margin-top: 5px;\n  font-weight: 100;\n}\n[_nghost-%COMP%]   .count-down[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 30px;\n  font-family: \"Futura Round Regular\", arial, sans-serif;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1;\n  margin-bottom: 10px;\n  letter-spacing: 2px;\n}\n[_nghost-%COMP%]   .adjustable-houses-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -35px;\n  right: -35px;\n  background: none;\n  border-radius: 30px;\n  color: #222;\n  font-size: 23px;\n  padding: 3px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .mint-container.public[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .mint-container.public[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  opacity: 0.7;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mint-container-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mintable-image-container[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   .sale-text[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .available-mints[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-transform: uppercase;\n  margin-bottom: 35px;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 20px;\n}\n[_nghost-%COMP%]   .price-block.public-sale[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n[_nghost-%COMP%]   .price-block[_ngcontent-%COMP%]   .price.margin-bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .ineligible[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  padding: 12px 10px 12px;\n  background: #482153;\n  color: #b13788;\n  letter-spacing: 1px;\n  font-size: 14px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  margin-top: 35px;\n}\n[_nghost-%COMP%]   .ineligible[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .single-quantity-container[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px auto 30px;\n}\n[_nghost-%COMP%]   .purchase-amount-text[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 30px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .pricing-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .pricing-range[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .supply-container-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  font-size: 12px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 4px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  background: #000000;\n  color: #FFF;\n  border-radius: 15px;\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  position: absolute;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: \"Futura Round Bold\", arial, sans-serif;\n  letter-spacing: 2px;\n  top: -23px;\n  left: 50%;\n  border-radius: 20px;\n  padding: 4px 10px;\n  color: #222;\n  display: none;\n  transform-origin: top left;\n  -webkit-animation: activeScale 0.5s linear infinite;\n  animation: activeScale 0.5s linear infinite;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.private[_ngcontent-%COMP%] {\n  background: #EF7F19;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.private.active[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.public[_ngcontent-%COMP%] {\n  background: #7732AA;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.public.active[_ngcontent-%COMP%]   .active-now[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .breakdown-list-container[_ngcontent-%COMP%]   .pill.reserved[_ngcontent-%COMP%] {\n  background: #cce2dd;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.private-sale[_ngcontent-%COMP%] {\n  background: #EF7F19;\n  width: 40%;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.public-sale[_ngcontent-%COMP%] {\n  width: 55%;\n  background: #7732AA;\n}\n[_nghost-%COMP%]   .supply-breakdown[_ngcontent-%COMP%]   .supply.team[_ngcontent-%COMP%] {\n  width: 5%;\n  background: #cce2dd;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n[_nghost-%COMP%]   .mint-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .mint-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: initial;\n}\n[_nghost-%COMP%]   button.mint[_ngcontent-%COMP%]:disabled.scale-hover {\n  transform: none;\n}\n@media only screen and (min-height: 0px) and (max-height: 680px) {\n  [_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n    height: 95vh;\n  }\n  [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n    overflow: auto;\n    height: 97vh;\n  }\n}\n@media only screen and (min-width: 0px) and (max-width: 830px) {\n  [_nghost-%COMP%]   .double-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .overflow-container[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n  [_nghost-%COMP%]   .mint-container[_ngcontent-%COMP%]   .mint-container-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]   .close[_ngcontent-%COMP%] {\n    top: -23px;\n    right: -23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL21pbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFBO0FDTUE7RUE0TUk7O0lBQUE7QUE3TUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBWjtBQUlJO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUxSO0FBT1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7QUFMaEI7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5aO0FBVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNERGxEVztFQ21EWCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFUUjtBQWdCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q3RGE7RUM4RGIsZUFBQTtFQUNBLFlBQUE7QUFkUjtBQWlCSTtFQUNJLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWhCUjtBQW9CWTtFQUNJLGdCQUFBO0FBbEJoQjtBQXFCWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFuQmhCO0FBdUJRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBckJaO0FBd0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdEJaO0FBeUJRO0VBQ0ksa0JBQUE7QUF2Qlo7QUEyQkk7RUFDSSxtRERoSGdCO0VDaUhoQix5QkFBQTtFQUNBLGVBQUE7QUF6QlI7QUE0Qkk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUExQlI7QUE2Qkk7RUFDSSxXQUFBO0FBM0JSO0FBNkJRO0VBQ0ksaUJBQUE7QUEzQlo7QUErQlk7RUFDSSxjQUFBO0FBN0JoQjtBQWlDUTtFQUNJLG1ERDFJWTtFQzJJWixlQUFBO0VBQ0EsbUJBQUE7QUEvQlo7QUFpQ1k7RUFDSSxpQkFBQTtBQS9CaEI7QUFrQ1k7RUFDSSxnQkFBQTtBQWhDaEI7QUFxQ0k7RUFDSSxtQkFBQTtFQUNBLG1ERDFKZ0I7RUMySmhCLHVCQUFBO0VBQ0EsbUJEL0ljO0VDZ0pkLGNEakpXO0VDa0pYLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQW5DUjtBQXFDUTtFQUNJLGtCQUFBO0FBbkNaO0FBdUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBckNSO0FBd0NJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUREdkxnQjtFQ3dMaEIsZUFBQTtBQXRDUjtBQXlDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdkNSO0FBeUNRO0VBQ0ksV0FBQTtBQXZDWjtBQThDSztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBNUNUO0FBK0NLO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE3Q1I7QUErQ1E7RUFDSSxtRER4Tlk7RUN5TlosZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUE3Q1o7QUFnRFE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRDFOWTtFQzJOWixXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTlDWjtBQWdEWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUREOU9RO0VDK09SLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0QxT0s7RUMyT0wsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbURBQUE7RUFFQSwyQ0FBQTtBQTlDaEI7QUFpRFk7RUFDSSxtQkFyUUs7QUFzTnJCO0FBa0RvQjtFQUNJLGNBQUE7QUFoRHhCO0FBcURZO0VBQ0ksbUJBOVFJO0FBMk5wQjtBQXNEb0I7RUFDSSxjQUFBO0FBcER4QjtBQXlEWTtFQUNJLG1CQUFBO0FBdkRoQjtBQTRESTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFEUjtBQWdFUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBOURaO0FBZ0VZO0VBQ0ksbUJBaFRLO0VBaVRMLFVBQUE7QUE5RGhCO0FBaUVZO0VBQ0ksVUFBQTtFQUNBLG1CQXJUSTtBQXNQcEI7QUFrRVk7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBaEVoQjtBQXFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQW5FUjtBQXFFUTtFQUNJLGtCQUFBO0FBbkVaO0FBdUVJO0VBQ0ksV0FBQTtBQXJFUjtBQXVFUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBckVaO0FBdUVZO0VDMVVGLGVEMlV5QjtBQWxFbkM7QUF1RUk7RUFDSTtJQUNJLFlBQUE7RUFyRVY7RUF1RVU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtFQXJFZDtBQUNGO0FBMEVJO0VBRUk7SUFDSSxzQkFBQTtFQXpFVjtFQTRFTTtJQUNJLFdBQUE7RUExRVY7RUE2RU07SUFDSSxjQUFBO0VBM0VWO0VBOEVNO0lBQ0ksZ0JBQUE7RUE1RVY7RUE4RVU7SUFDSSxlQUFBO0VBNUVkO0VBK0VVO0lBQ0ksbUJBQUE7RUE3RWQ7RUErRWM7SUFDSSxjQUFBO0VBN0VsQjtFQWlGVTtJQUNJLHNCQUFBO0VBL0VkO0VBb0ZNO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUFsRlY7QUFDRiIsImZpbGUiOiJtaW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBWYXJpYWJsZXMgKi9cclxuXHJcbi8vIFN0cnVjdHVyZVxyXG4kd3JhcHBlci1jb250YWluZXItd2lkdGg6IDEyMjBweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LWZhbWlseS1ib2R5OiBcIkZ1dHVyYSBSb3VuZCBSZWd1bGFyXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1tZWRpdW06IFwiRnV0dXJhIFJvdW5kIE1lZGl1bVwiLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvZHktc2VtaWJvbGQ6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9keS1zZW1pYm9sZC1pdGFsaWM6IFwiRnV0dXJhIFJvdW5kIFNlbWlib2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQtaXRhbGljOiBcIkZ1dHVyYSBSb3VuZCBCb2xkIE9ibGlxdWVcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2R5LWJvbGQ6IFwiRnV0dXJhIFJvdW5kIEJvbGRcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nOiBcIkFSQ09cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJHByaW1hcnktYmctY29sb3I6ICM1NTAxOTY7XHJcbiRoZWFkZXItYmc6ICM4RjAwRkY7XHJcbiRib2R5LWJnOiAjMzMxMjRlO1xyXG4kcHJpbWFyeS1jb2xvcjogIzhGMDBGRjtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6ICNhYTNmZmM7XHJcbiRwcmltYXJ5LWJnLWNvbG9yLWRhcms6ICMwMDAwMDA7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICMyMjI7XHJcbiRwcmltYXJ5LWZvbnQtY29sb3ItbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG4kaW5lbGlnaWJsZS1jb2xvcjogI2IxMzc4ODtcclxuJGluZWxpZ2libGUtYmctY29sb3I6ICM0ODIxNTM7XHJcbiRjb2xvci1ncmVlbjogIzAwYWI3ODtcclxuJGNvbG9yLWJnLWdyZWVuOiAjRTZGRkYwO1xyXG4kY29sb3IteWVsbG93OiAjRThEMzIyO1xyXG4kY29sb3Itb3JhbmdlOiNERjlGMzA7XHJcbiRjb2xvci1yZWQ6I0ZGMDUwMDtcclxuJGNvbG9yLWJsdWU6IzJGNUJBQztcclxuJGNvbG9yLWRhcmstYmx1ZTojMzkzNUZGO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiNENkM1OEQ7XHJcbiRjb2xvci1zaWx2ZXI6ICNlNmUzZTE7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzczMmFhO1xyXG4kc2Vjb25kYXJ5LWZvbnQtY29sb3I6ICM3NzMyYWE7XHJcbiR1cmwtY29sb3I6ICNkYzlhZjA7XHJcbiRhY2NlbnQtY29sb3I6ICNFRjdGMTk7IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluc1wiO1xuXG4kcHJpdmF0ZS1zYWxlLWNvbG9yOiAjRUY3RjE5O1xuJHB1YmxpYy1zYWxlLWNvbG9yOiAjNzczMkFBO1xuXG46aG9zdCB7XG4gICAgLm1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvdW50ZG93biB0aW1lclxuICAgIC5jb3VudGRvd24tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDMwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5uby1hY3RpdmUtc2FsZSB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHhcbiAgICB9XG5cbiAgICAubG9hZGluZyB7XG4gICAgICAgIG1hcmdpbjogMTAwcHggMDtcbiAgICB9XG5cbiAgICAudGltZWxlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmPiBkaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY291bnQtZG93biB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDoxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cblxuICAgIC5hZGp1c3RhYmxlLWhvdXNlcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLmhvdXNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICByaWdodDogLTM1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbiAgICAubWludC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAvLyBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAuNCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG5cbiAgICAgICAgJi5wdWJsaWMge1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWludC1jb250YWluZXItcm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pbnRhYmxlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2FsZS10ZXh0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuYXZhaWxhYmxlLW1pbnRzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICBvcGFjaXR5OiAuNztcbiAgICB9XG5cbiAgICAucHJpY2UtYmxvY2sge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYucHVibGljLXNhbGUge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9keS1ib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubWFyZ2luLWJvdHRvbS0wIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluZWxpZ2libGUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMHB4IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRpbmVsaWdpYmxlLWJnLWNvbG9yO1xuICAgICAgICBjb2xvcjogJGluZWxpZ2libGUtY29sb3I7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2luZ2xlLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xuICAgIH1cblxuICAgIC5wdXJjaGFzZS1hbW91bnQtdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJpY2luZy1yYW5nZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFN1cHBseSBicmVha2Rvd25cbiAgICAgKi9cbiAgICAgLnN1cHBseS1jb250YWluZXItdGV4dCB7XG4gICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgXG4gICAgIH1cbiAgICAgLmJyZWFrZG93bi1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvZHktYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucGlsbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iZy1jb2xvci1kYXJrO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5hY3RpdmUtbm93IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2R5LWJvbGQ7O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjNweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOmFjdGl2ZVNjYWxlIC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246YWN0aXZlU2NhbGUgLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246YWN0aXZlU2NhbGUgLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5wcml2YXRlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpdmF0ZS1zYWxlLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlLW5vdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5wdWJsaWMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwdWJsaWMtc2FsZS1jb2xvcjtcblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZS1ub3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucmVzZXJ2ZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2UyZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VwcGx5LWJyZWFrZG93biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmJyZWFrZG93bi10aXRsZSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdXBwbHkge1xuICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgJi5wcml2YXRlLXNhbGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcml2YXRlLXNhbGUtY29sb3I7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5wdWJsaWMtc2FsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHVibGljLXNhbGUtY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGVhbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2UyZGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWludC1sb2FkaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uLm1pbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgY3Vyc29yOiBpbml0aWFsO1xuXG4gICAgICAgICAgICAmLnNjYWxlLWhvdmVyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0obm9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAwcHgpIGFuZCAobWF4LWhlaWdodDogNjgwcHgpIHtcbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgIGhlaWdodDogOTV2aDtcblxuICAgICAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk3dmg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcblxuICAgICAgICAuZG91YmxlLWJ1dHRvbnMge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGRvd24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJmbG93LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5taW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpY2UtYmxvY2sge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1pbnQtY29udGFpbmVyLXJvdyB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgIHRvcDogLTIzcHg7XG4gICAgICAgICAgICByaWdodDogLTIzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIiwiQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICAgICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAgIC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xufSJdfQ== */"]
        });
        return MintDialogComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=index-index-module-es5.js.map