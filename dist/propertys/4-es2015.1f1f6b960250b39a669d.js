(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0L5U":function(t,e,i){"use strict";i.d(e,"a",function(){return P}),i.d(e,"b",function(){return b});var s=i("fXoL"),n=i("ofXK");function r(t,e){if(1&t&&(s.Sb(0,"div",7),s.uc(1),s.Rb()),2&t){const t=s.dc();s.Cb(1),s.vc(t.counter)}}function o(t,e){if(1&t&&s.Ob(0,"img",11),2&t){const t=s.dc(2).index,e=s.dc();s.qc("object-fit",e.objectFit),s.gc("src",e.getImage(t).image.path,s.nc)}}function l(t,e){if(1&t&&(s.Sb(0,"div",9),s.tc(1,o,1,3,"img",10),s.Rb()),2&t){const t=s.dc().index,e=s.dc();s.qc("width",e.getCellWidth()+"px")("border-radius",e.borderRadius+"px"),s.Cb(1),s.gc("ngIf",e.getImage(t)&&e.getImage(t).image)}}function h(t,e){if(1&t&&s.tc(0,l,2,5,"div",8),2&t){const t=e.index,i=s.dc();s.gc("ngIf",t<i.cellLimit)}}function a(t,e){if(1&t&&s.Ob(0,"div",14),2&t){const t=e.index,i=s.dc(2);s.Fb("carousel-dot-active",t===i.activeDotIndex)}}function c(t,e){if(1&t&&(s.Sb(0,"div",12),s.tc(1,a,1,2,"div",13),s.Rb()),2&t){const t=s.dc();s.Cb(1),s.gc("ngForOf",t.dotsArr)}}function u(t,e){if(1&t){const t=s.Tb();s.Sb(0,"div",15),s.Sb(1,"div",16),s.Zb("click",function(){return s.lc(t),s.dc().prev()}),s.Rb(),s.Sb(2,"div",17),s.Zb("click",function(){return s.lc(t),s.dc().next()}),s.Rb(),s.Rb()}if(2&t){const t=s.dc();s.Fb("carousel-arrows-outside",t.arrowsOutside)("carousel-dark-arrows","dark"===t.arrowsTheme),s.Cb(1),s.Fb("carousel-arrow-disabled",t.isPrevArrowDisabled()),s.Cb(1),s.Fb("carousel-arrow-disabled",t.isNextArrowDisabled())}}const d=["*"];class g{constructor(t){this.eventType=void 0,this.handlers={},this.startX=0,this.startY=0,this.lastTap=0,this.doubleTapMinTimeout=300,this.tapMinTimeout=200,this.touchstartTime=0,this.i=0,this.isMousedown=!1,this._touchListeners={touchstart:"handleTouchstart",touchmove:"handleTouchmove",touchend:"handleTouchend"},this._mouseListeners={mousedown:"handleMousedown",mousemove:"handleMousemove",mouseup:"handleMouseup",wheel:"handleWheel"},this._otherListeners={resize:"handleResize"},this.handleTouchstart=t=>{this.elementPosition=this.getElementPosition(),this.touchstartTime=(new Date).getTime(),void 0===this.eventType&&this.getTouchstartPosition(t),this.runHandler("touchstart",t)},this.handleTouchmove=t=>{switch(this.detectPan(t.touches)&&this.runHandler("pan",t),this.detectPinch(t)&&this.runHandler("pinch",t),this.detectLinearSwipe(t)){case"horizontal-swipe":t.swipeType="horizontal-swipe",this.runHandler("horizontal-swipe",t);break;case"vertical-swipe":t.swipeType="vertical-swipe",this.runHandler("vertical-swipe",t)}(this.detectLinearSwipe(t)||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)&&this.handleLinearSwipe(t)},this.handleTouchend=t=>{const e=t.touches;this.detectDoubleTap()&&this.runHandler("double-tap",t),this.detectTap(),this.runHandler("touchend",t),this.eventType="touchend",e&&0===e.length&&(this.eventType=void 0,this.i=0)},this.handleMousedown=t=>{this.isMousedown=!0,this.elementPosition=this.getElementPosition(),this.touchstartTime=(new Date).getTime(),void 0===this.eventType&&this.getMousedownPosition(t),this.runHandler("mousedown",t)},this.handleMousemove=t=>{if(this.isMousedown){switch(this.runHandler("pan",t),this.detectLinearSwipe(t)){case"horizontal-swipe":t.swipeType="horizontal-swipe",this.runHandler("horizontal-swipe",t);break;case"vertical-swipe":t.swipeType="vertical-swipe",this.runHandler("vertical-swipe",t)}(this.detectLinearSwipe(t)||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)&&this.handleLinearSwipe(t)}},this.handleMouseup=t=>{this.detectTap(),this.isMousedown=!1,this.runHandler("mouseup",t),this.eventType=void 0,this.i=0},this.handleWheel=t=>{this.runHandler("wheel",t)},this.handleResize=t=>{this.runHandler("resize",t)},this.properties=t,this.element=this.properties.element,this.elementPosition=this.getElementPosition(),this.toggleEventListeners("addEventListener")}get touchListeners(){return this.properties.touchListeners?this.properties.touchListeners:this._touchListeners}get mouseListeners(){return this.properties.mouseListeners?this.properties.mouseListeners:this._mouseListeners}get otherListeners(){return this.properties.otherListeners?this.properties.otherListeners:this._otherListeners}destroy(){this.toggleEventListeners("removeEventListener")}toggleEventListeners(t){let e;for(var i in e="mouse and touch"===this.properties.listeners?Object.assign(this.touchListeners,this.mouseListeners):this.detectTouchScreen()?this.touchListeners:this.mouseListeners,this.properties.resize&&(e=Object.assign(e,this.otherListeners)),e){const s=e[i];"resize"===i?("addEventListener"===t&&window.addEventListener(i,this[s],!1),"removeEventListener"===t&&window.removeEventListener(i,this[s],!1)):"mouseup"===i||"mousemove"===i?("addEventListener"===t&&document.addEventListener(i,this[s],{passive:!1}),"removeEventListener"===t&&document.removeEventListener(i,this[s],!1)):("addEventListener"===t&&this.element.addEventListener(i,this[s],!1),"removeEventListener"===t&&this.element.removeEventListener(i,this[s],!1))}}addEventListeners(t){window.addEventListener(t,this[this._mouseListeners[t]],!1)}removeEventListeners(t){window.removeEventListener(t,this[this._mouseListeners[t]],!1)}handleLinearSwipe(t){this.i++,this.i>3&&(this.eventType=this.getLinearSwipeType(t)),"horizontal-swipe"===this.eventType&&this.runHandler("horizontal-swipe",t),"vertical-swipe"===this.eventType&&this.runHandler("vertical-swipe",t)}runHandler(t,e){this.handlers[t]&&this.handlers[t](e)}detectPan(t){return 1===t.length&&!this.eventType||"pan"===this.eventType}detectDoubleTap(){if(null!=this.eventType)return;const t=(new Date).getTime(),e=t-this.lastTap;if(clearTimeout(this.doubleTapTimeout),e<this.doubleTapMinTimeout&&e>0)return!0;this.doubleTapTimeout=setTimeout(()=>{clearTimeout(this.doubleTapTimeout)},this.doubleTapMinTimeout),this.lastTap=t}detectTap(){if(null!=this.eventType)return;const t=(new Date).getTime()-this.touchstartTime;t>0&&this.runHandler(t<this.tapMinTimeout?"tap":"longtap",event)}detectPinch(t){return 2===t.touches.length&&void 0===this.eventType||"pinch"===this.eventType}detectLinearSwipe(t){const e=t.touches;if(e){if(1===e.length&&!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(t)}else if(!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(t)}getLinearSwipeType(t){if("horizontal-swipe"!==this.eventType&&"vertical-swipe"!==this.eventType){const e=Math.abs(this.moveLeft(0,t)-this.startX);return 3*Math.abs(this.moveTop(0,t)-this.startY)>e?"vertical-swipe":"horizontal-swipe"}return this.eventType}getElementPosition(){return this.element.getBoundingClientRect()}getTouchstartPosition(t){this.startX=t.touches[0].clientX-this.elementPosition.left,this.startY=t.touches[0].clientY-this.elementPosition.top}getMousedownPosition(t){this.startX=t.clientX-this.elementPosition.left,this.startY=t.clientY-this.elementPosition.top}moveLeft(t,e){const i=e.touches;return i?i[t].clientX-this.elementPosition.left:e.clientX-this.elementPosition.left}moveTop(t,e){const i=e.touches;return i?i[t].clientY-this.elementPosition.top:e.clientY-this.elementPosition.top}detectTouchScreen(){var t,e=" -webkit- -moz- -o- -ms- ".split(" ");return"ontouchstart"in window||(t=["(",e.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(t).matches)}on(t,e){t&&(this.handlers[t]=e)}}class p{constructor(t,e,i,s,n){this.properties=t,this.utils=e,this.cells=i,this.container=s,this.slide=n,this.isSlideLengthLimited=!1,this.isContentImages=!0,this.isLazyLoad=!0,this.isContainerLocked=!0,this.alignCells="left",this.initialContainerPosition=0,this.containerPullLimit=100,this.handleTouchstart=t=>{this.container.handleTouchstart(),this.slide.handleTouchstart(t)},this.handleHorizontalSwipe=t=>{this.container.handleHorizontalSwipe()},this.handleTouchend=t=>{this.properties.freeScroll?this.container.handleTouchend():(this.container.handleTouchend(!0),this.slide.handleTouchend(t))},this.isNextArrowDisabled=()=>this.slide.isNextArrowDisabled(),this.isPrevArrowDisabled=()=>this.slide.isPrevArrowDisabled(),this.init()}get cellLength(){return this.cells.cellLength}get cellLengthInLightDOMMode(){if(this.images){let t=this.numberOfVisibleCells+2*this.overflowCellsLimit;return t>this.images.length&&(t=this.images.length),t}return this.cellLength}get lastCellIndex(){return this.images.length?this.images.length-1:this.cells.cellLength-1}get overflowCellsLimit(){return this.utils.overflowCellsLimit}get cellLimit(){if(this.isLightDOM){let t=this.numberOfVisibleCells+2*this.overflowCellsLimit;return t<this.numberOfVisibleCells&&(t=this.numberOfVisibleCells),t}return this.properties.images.length}get isLightDOM(){return this.properties.lightDOM||this.properties.loop}get images(){return this.properties.images}get margin(){return this.properties.margin}get minSwipeDistance(){return this.properties.minSwipeDistance}get transitionDuration(){return this.properties.transitionDuration}get transitionTimingFunction(){return this.properties.transitionTimingFunction}get fullCellWidth(){return this.properties.cellWidth+this.margin}get numberOfVisibleCells(){return this.utils.numberOfVisibleCells}get lapCounter(){return Math.floor(this.slide.counter/this.cellLengthInLightDOMMode)}get slideCounter(){return this.slide.counter}updateProperties(t){this.properties=t}init(){this.cellsElement=this.properties.cellsElement,this.visibleWidth=this.properties.visibleWidth||this.cellsElement.parentElement.clientWidth}destroy(){clearInterval(this.autoplayId)}lineUpCells(){this.cells.lineUp()}handleTransitionend(){this.slide.handleTransitionend()}getImage(t){return this.cells.getImage(t)}next(t=1){this.isNextArrowDisabled()||this.slide.next(t)}prev(t=1){this.slide.prev(t)}autoplay(){this.autoplayId=setInterval(()=>{this.next()},this.properties.autoplayInterval)}stopAutoplay(){this.autoplayId&&clearInterval(this.autoplayId)}}class m{constructor(t,e,i){this.carouselProperties=t,this.utils=e,this.cells=i,this.newPositionIndex=0,this.isPositionCorrection=!1,this.initialPositionX=0,this.initialElementPositionX=0,this.isLocked=!0,this.pullLimit=100,this.startTime=0,this.startX=0,this.moveX=0,this.isSwipeInProgress=!1,this.init()}get visibleWidth(){return this.utils.visibleWidth}get overflowCellsLimit(){return this.utils.overflowCellsLimit}get images(){return this.carouselProperties.images}get element(){return this.carouselProperties.cellsElement}get freeScroll(){return this.carouselProperties.freeScroll}get fullCellWidth(){return this.carouselProperties.cellWidth+this.carouselProperties.margin}get numberOfVisibleCells(){return this.utils.numberOfVisibleCells}get transitionDuration(){return this.carouselProperties.transitionDuration}get transitionTimingFunction(){return this.carouselProperties.transitionTimingFunction}get cellLength(){return this.images?this.images.length:this.cells.cellLength}get cellLengthInLightDOMMode(){if(this.images){let t=this.numberOfVisibleCells+2*this.overflowCellsLimit;return t>this.images.length&&(t=this.images.length),t}return this.cellLength}get tooFewCells(){return this.numberOfVisibleCells>this.cellLength}get disabled(){return this.tooFewCells}get margin(){return this.carouselProperties.margin}get isLightDOM(){return this.carouselProperties.lightDOM||this.carouselProperties.loop}updateProperties(t){this.carouselProperties=t}init(){this.setWidth()}handleTouchstart(){this.startX=this.utils.getStartX(event),this.startTime=(new Date).getTime(),this.initialElementPositionX=this.getInitialElementPositionX()}handleHorizontalSwipe(){this.disabled||(this.isSwipeInProgress||(this.startX=this.utils.getStartX(event),this.startTime=(new Date).getTime(),this.initialElementPositionX=this.getInitialElementPositionX()),this.isSwipeInProgress=!0,this.moveX=this.utils.getMoveX(event),this.move())}handleTouchend(t=!1){this.disabled||(t?this.isSwipeInProgress=!1:(this.isSwipeInProgress=!1,this.finishMoving(),this.clearInitialValues()))}move(){let t=this.getMovePositionX();const e=this.detectPulled(),i=this.getDirection();e&&("left"===e.edge&&"right"===i||"right"===e.edge&&"left"===i)&&(t=this.slowdownOnPull(t)),this.transformPositionX(t,0),this.freeScroll&&(this.initialPositionX=t),e&&("left"===e.edge&&e.overflowX>this.pullLimit&&(this.initialPositionX=0),"right"===e.edge&&e.overflowX>this.pullLimit&&(this.initialPositionX=t))}getMovePositionX(){const t=this.getDistance();return this.initialElementPositionX-t}getDistance(){return this.startX-this.moveX}detectPulled(){const t=this.getCurrentPositionX();return t>0?{edge:"left",positionX:t,overflowX:Math.abs(t)}:t<this.getEndPosition()?{edge:"right",positionX:t,overflowX:Math.abs(t-this.getEndPosition())}:void 0}slowdownOnPull(t){let e=Math.abs(this.getDistance());const i=this.getEndPosition(),s=this.detectPulled();if(!s)return 0;const n=3+s.overflowX/50;let r=0;if("left"===s.edge){this.initialElementPositionX<0&&(e-=Math.abs(this.initialElementPositionX));const t=e/n;r=t,this.initialElementPositionX>0&&(r=this.initialElementPositionX+t),r>this.pullLimit&&(r=this.pullLimit)}if("right"===s.edge){const t=i+(this.initialElementPositionX-e-i)/n,s=this.getWidth();r=t,this.initialElementPositionX<-(s-this.visibleWidth)&&(r=s-this.visibleWidth+this.initialElementPositionX+t),r<i-this.pullLimit&&(r=i-this.pullLimit)}return r}finishMoving(){const t=this.getMovePositionX();let e=0;this.freeScroll&&(e=this.getInertia()),e=this.getAlignedPositionOnPull(e),this.transformPositionX(e),this.setInitialPosition(t)}getInertia(){const t=this.getDistance(),e=(new Date).getTime();return this.initialPositionX-t/(e-this.startTime)*100}getAlignedPositionOnPull(t){const e=this.getDirection();if("left"===e){let e=this.getEndPosition();if(t<e)return e}return"right"===e&&t>0?0:t}getCurrentPositionX(){const t=this.element.parentElement.getBoundingClientRect();return this.element.getBoundingClientRect().left-t.left}getEndPosition(){if(this.isLightDOM)return-(this.cells.imageUtils.getImages().length*this.fullCellWidth-this.visibleWidth-this.margin);{const t=this.getWidth();return this.element.parentElement.clientWidth-t}}transformPositionX(t,e=this.transitionDuration){void 0!==t&&(this.element.style.transition="transform "+e+"ms "+this.transitionTimingFunction,this.element.style.transform="translateX("+t+"px)")}getWidth(){let t=this.cellLengthInLightDOMMode*this.fullCellWidth,e=this.cellLength*this.fullCellWidth;return e<t&&(t=e),this.isLightDOM?t:e}setWidth(){const t=this.getWidth();this.element.style.width=t+"px"}setInitialPosition(t){this.initialPositionX=t}getElementPosition(){return this.element.getBoundingClientRect()}getInitialElementPositionX(){const t=this.utils.getCarouselElementPosition().left;return this.getElementPosition().left-t}clearInitialValues(){this.startX=this.moveX=0}getDirection(){const t=Math.sign(this.startX-this.moveX);return-1===t?"right":1===t?"left":void 0}}class f{constructor(t){this.cellStack=[],this.element=t}getImages(){return this.cellStack.filter(this.filter)}filter(t){return void 0!==t.img}}class v{constructor(t,e){this.carouselProperties=t,this.utils=e,this.counter=0,this.imageUtils=new f(this.element),this.init(t)}get images(){return this.carouselProperties.images}get cellLength(){return this.cells?this.cells.length:0}get fullCellWidth(){return this.carouselProperties.cellWidth+this.carouselProperties.margin}get cellLengthInLightDOMMode(){if(this.images){let t=this.numberOfVisibleCells+2*this.overflowCellsLimit;return t>this.images.length&&(t=this.images.length),t}return this.cellLength}get numberOfVisibleCells(){return this.utils.numberOfVisibleCells}get overflowCellsLimit(){return this.utils.overflowCellsLimit}get isLightDOM(){return this.carouselProperties.lightDOM||this.carouselProperties.loop}updateProperties(t){this.carouselProperties=t}lineUp(){const t=this.element?this.element.children:[];this.imageUtils.cellStack=[];for(var e=0;e<t.length;e++){let i=t[e],s=this.getCellPositionInContainer(e);i.style.transform="translateX("+s+"px)",i.style.width=this.carouselProperties.cellWidth+"px",this.getImage(e)&&this.imageUtils.cellStack.push({index:e,positionX:s,img:this.getImage(e).image})}}ifSequenceOfCellsIsChanged(){return"translateX(0px)"!==this.element.children[0].style.transform}getCellPositionInContainer(t){return this.getCellIndexInContainer(t)*this.fullCellWidth}getCellIndexInContainer(t){let e;if(!this.isLightDOM)return t;let i=this.cellLengthInLightDOMMode,s=this.counter-this.overflowCellsLimit;return s>i&&(s%=i),s<0?t:(e=t-s,e<0&&(e=i+e),e)}getImage(t){if(!this.images)return;let e=this.getImageIndex(t),i=this.images[e];return i&&!i.type&&(i.type="image"),{image:this.images[e],imageIndex:e}}getImageIndex(t){const e=this.getCellIndexInContainer(t);let i;return this.counter>this.overflowCellsLimit?(i=e+(this.counter-this.overflowCellsLimit),this.images&&this.carouselProperties.loop&&(i%=this.images.length)):i=t,i}setCounter(t){this.counter=t}init(t){this.element=this.carouselProperties.cellsElement,this.cells=this.element.children,this.visibleWidth=this.carouselProperties.visibleWidth||this.element.parentElement.clientWidth}}class C{constructor(t,e,i,s){this.carouselProperties=t,this.utils=e,this.cells=i,this.container=s,this.slideLength=0,this.isSlideInProgress=!1,this.counter=0,this._counter=0,this.distance=0,this.distanceAbs=0,this.isNotClickOnArrow=!1,this.initialPositionX=0,this.currentPositionX=0,this.isSlideLengthLimited=!1,this.init()}get fullCellWidth(){return this.carouselProperties.cellWidth+this.carouselProperties.margin}get margin(){return this.carouselProperties.margin}get minSwipeDistance(){return this.carouselProperties.minSwipeDistance}get numberOfVisibleCells(){return this.utils.numberOfVisibleCells}get visibleCellsOverflowContainer(){return this.utils.visibleCellsOverflowContainer}get fixedContainerPosition(){return-this.overflowCellsLimit*this.fullCellWidth}get overflowCellsLimit(){return this.utils.overflowCellsLimit}get images(){return this.carouselProperties.images}get cellLength(){return this.isLightDOM?this.cells.cellLengthInLightDOMMode:this.images?this.images.length:this.cells.cellLength}get isLightDOM(){return this.carouselProperties.lightDOM||this.carouselProperties.loop}updateProperties(t){this.carouselProperties=t,this.setVisibleWidth()}init(){this.visibleWidth=this.carouselProperties.visibleWidth||this.carouselProperties.hostElement.clientWidth}handleTouchstart(){this.isNotClickOnArrow=!0,this.isSlideLengthLimited=!1,this.isSlideInProgress||(this.initialPositionX=this.container.getCurrentPositionX())}handleTouchend(){this.isNotClickOnArrow&&(this.currentPositionX=this.container.getCurrentPositionX(),this.distanceAbs=Math.abs(this.initialPositionX-this.currentPositionX),this.distance=this.initialPositionX-this.currentPositionX,this.direction=this.getDirection(),this.isNotClickOnArrow=!1,this.handleSlide())}handleTransitionend(){this.setCounter(),this.isSlideInProgress=!1,this.isLightDOM&&this.alignContainerFast()}handleSlide(t){let e;if(!(t&&this.isSlideInProgress||!this.direction)){if(t?(this.slideLength=this.limitSlideLength(t),this.isSlideInProgress||(this.initialPositionX=this.container.getCurrentPositionX())):this.slideLength=this.getSlideLength(this.distanceAbs),this._counter=this.getPreliminaryCounter(),"left"===this.direction){t||(this.slideLength=this.limitSlideLength(this.getSlideLength(this.distanceAbs))),this._counter=this.getPreliminaryCounter();let i=this.isSlidesEnd(this._counter);e=this.getPositionByIndex(this._counter),i&&(this._counter=this.counter,e=this.getPositionByIndex(this.counter),this.slideLength=0)}"right"===this.direction&&(t||(this.slideLength=this.getSlideLength(this.distanceAbs)),this._counter<0&&(this._counter=this.counter,this.slideLength=this.counter),e=this.getPositionByIndex(this.counter-this.slideLength)),this.container.getCurrentPositionX()!==e&&(this.isSlideInProgress=!0,this.container.transformPositionX(e))}}next(t=1){this.direction="left",this.handleSlide(t)}prev(t=1){this.direction="right",this.handleSlide(t)}select(t){t>this.cellLength-1||(t>this.counter&&this.next(t-this.counter),t<this.counter&&this.prev(this.counter-t))}getPreliminaryCounter(){return"left"===this.direction?this.counter+this.slideLength:"right"===this.direction?this.counter-this.slideLength:0}limitSlideLength(t){if(t>1)for(var e=0;e<t;e++)if(!this.isSlidesEnd(this.counter+(t-e))){t-=e,this.isSlideLengthLimited=e>0;break}return t}getPositionCorrection(t){let e=0,i=this.isLastSlide(t);return this.carouselProperties.loop||"right"===this.direction?0:((this.isSlideLengthLimited||i)&&(this.visibleWidth<this.cells.cellLengthInLightDOMMode*this.fullCellWidth&&(e=-(this.numberOfVisibleCells*this.fullCellWidth-this.visibleWidth-this.margin)),e>=-this.margin&&(e=0)),e)}getSlideLength(t){this.isLastSlide(this.counter)&&"right"===this.direction&&(t+=this.visibleWidth%this.fullCellWidth);let e=Math.floor(t/this.fullCellWidth);return t%this.fullCellWidth>=this.minSwipeDistance&&e++,e}getDistanceAbs(){return Math.abs(this.initialPositionX-this.currentPositionX)}getDirection(){const t=Math.sign(this.initialPositionX-this.currentPositionX);return-1===t?"right":1===t?"left":void 0}isSlidesEnd(t){return!this.carouselProperties.loop&&(this.images?this.images.length:this.cells.cellLength)-t+(this.visibleCellsOverflowContainer?1:0)<this.numberOfVisibleCells}isLastSlide(t){return this.isSlidesEnd(t+1)}setCounter(){"left"===this.direction&&(this.counter=this.counter+this.slideLength),"right"===this.direction&&(this.counter=this.counter-this.slideLength)}getPositionByIndex(t){let e,i=this.getPositionCorrection(this.counter+this.slideLength);return 0!==i&&(i+=this.fullCellWidth),"right"===this.direction&&(i=0),e=this.isLightDOM&&this.isLightDOMMode(t)||this.isLightDOM&&this.ifLeftDOMModeAtEnd(t)?this.getPositionWithoutCorrection(this.initialPositionX)-((t-this.counter)*this.fullCellWidth-i):-(t*this.fullCellWidth-i),e=this.provideSafePosition(e),e}provideSafePosition(t){const e=this.container.getEndPosition();return"left"===this.direction&&t>0&&(t=0),"right"===this.direction&&t<e&&(t=e),t}getPositionWithoutCorrection(t){let e=Math.round(t)%this.fullCellWidth;return 0!==e?t-(this.fullCellWidth+e):t}isNextArrowDisabled(){return this.isLastSlide(this.counter)||!this.visibleCellsOverflowContainer&&this.cellLength<=this.numberOfVisibleCells||this.visibleCellsOverflowContainer&&this.cellLength<this.numberOfVisibleCells}isPrevArrowDisabled(){return 0===this.counter}alignContainerFast(){if(this.isLightDOMMode(this.counter))this.container.transformPositionX(this.fixedContainerPosition,0),this.cells.setCounter(this.counter),this.cells.lineUp();else if(this.ifLeftDOMModeToBeginning(this.counter))this.cells.ifSequenceOfCellsIsChanged()&&(this.container.transformPositionX(-this.counter*this.fullCellWidth,0),this.cells.setCounter(this.counter),this.cells.lineUp());else if(this.ifLeftDOMModeAtEnd(this.counter)){let t=this.container.getCurrentPositionX(),e=this.container.getWidth();if(this.isLastSlide(this.counter)&&e+t>=this.visibleWidth)return;let i=this.getPositionCorrection(this.counter);0!==i&&(i+=this.fullCellWidth),"right"===this.direction&&(i=0),this.container.transformPositionX(this.fixedContainerPosition+i,0),this.cells.setCounter(this.counter),this.cells.lineUp()}}isLightDOMMode(t){let e,i=this.images.length-this.overflowCellsLimit-this.numberOfVisibleCells;return!!this.isLightDOM&&(t>this.overflowCellsLimit&&"left"===this.direction&&t<=i&&(e=!0),t>=this.overflowCellsLimit&&"right"===this.direction&&t<i&&(e=!0),this.counter>this.overflowCellsLimit&&"left"===this.direction&&this.counter<=i&&(e=!0),this.counter>=this.overflowCellsLimit&&"right"===this.direction&&this.counter<i&&(e=!0),e)}ifLeftDOMModeAtEnd(t){let e,i=this.images.length-this.overflowCellsLimit-this.numberOfVisibleCells;return t>=i&&(e=!0),this.counter>=i&&(e=!0),e}ifLeftDOMModeToBeginning(t){let e;return t<=this.overflowCellsLimit&&(e=!0),this.counter<=this.overflowCellsLimit&&(e=!0),e}setVisibleWidth(){this.visibleWidth=this.carouselProperties.visibleWidth||this.carouselProperties.hostElement.clientWidth}}class w{constructor(t){this.carouselProperties=t}get images(){return this.carouselProperties.images}get margin(){return this.carouselProperties.margin}get overflowCellsLimit(){if(this.images&&this.isImagesLessCellLimit){let t=Math.floor((this.images.length-this.numberOfVisibleCells)/2);return t<0&&(t=0),t}return this.carouselProperties.overflowCellsLimit}get isImagesLessCellLimit(){return 2*this.carouselProperties.overflowCellsLimit+this.numberOfVisibleCells>this.images.length}get numberOfVisibleCells(){return Math.ceil(this.visibleWidth/this.fullCellWidth)}get visibleCellsOverflowContainer(){return this.numberOfVisibleCells*this.fullCellWidth-this.margin>this.visibleWidth}get fullCellWidth(){return this.carouselProperties.cellWidth+this.carouselProperties.margin}get visibleWidth(){return this.carouselProperties.visibleWidth||this.carouselProperties.cellsElement.parentElement.clientWidth}updateProperties(t){this.carouselProperties=t}getStartX(t){const e=t.touches,i=this.getCarouselElementPosition().left;let s;return s=e?e[0].clientX-i:t.clientX-i,s}getMoveX(t){const e=t.touches,i=this.getCarouselElementPosition().left;return e?e[0].clientX-i:t.clientX-i}getCarouselElementPosition(){return this.carouselProperties.hostElement.getBoundingClientRect()}}let P=(()=>{class t{constructor(t,e){this.elementRef=t,this.ref=e,this.minTimeout=30,this.isVideoPlaying=!1,this._isCounter=!1,this._cellWidth=200,this._loop=!1,this._lightDOM=!1,this.isMoving=!1,this.isNgContent=!1,this.events=new s.n,this.height=200,this.autoplay=!1,this.autoplayInterval=5e3,this.pauseOnHover=!0,this.dots=!1,this.margin=10,this.objectFit="cover",this.minSwipeDistance=10,this.transitionDuration=200,this.transitionTimingFunction="ease-out",this.counterSeparator=" / ",this.overflowCellsLimit=3,this.listeners="mouse and touch",this.cellsToScroll=1,this.freeScroll=!1,this.arrows=!0,this.arrowsOutside=!1,this.arrowsTheme="light",this.hostClassCarousel=!0,this.handleTouchstart=t=>{this.touches.addEventListeners("mousemove","handleMousemove"),this.carousel.handleTouchstart(t),this.isMoving=!0},this.handleHorizontalSwipe=t=>{t.preventDefault(),this.carousel.handleHorizontalSwipe(t)},this.handleTouchend=t=>{this.carousel.handleTouchend(t),this.touches.removeEventListeners("mousemove","handleMousemove"),this.isMoving=!1},this.handleTap=t=>{let e=Array.prototype.slice.call(this.cellsElement.children),i=t.srcElement.closest(".carousel-cell");e.indexOf(i),e.indexOf(i)}}get isContainerLocked(){if(this.carousel)return this.carousel.isContainerLocked}get slideCounter(){if(this.carousel)return this.carousel.slideCounter}get lapCounter(){if(this.carousel)return this.carousel.lapCounter}get isLandscape(){return window.innerWidth>window.innerHeight}get isSafari(){const t=navigator.userAgent.toLowerCase();if(-1!==t.indexOf("safari"))return!(t.indexOf("chrome")>-1)}get counter(){let t;return t=this.loop?this.slideCounter%this.cellLength:this.slideCounter,t+1+this.counterSeparator+this.cellLength}get cellsElement(){return this.elementRef.nativeElement.querySelector(".carousel-cells")}get isArrows(){return this.arrows&&!this.freeScroll}get isCounter(){return this._isCounter&&this.cellLength>1}get activeDotIndex(){return this.slideCounter%this.cellLength}get cellLimit(){if(this.carousel)return this.carousel.cellLimit}get carouselWidth(){return this.elementRef.nativeElement.clientWidth}set images(t){this._images=t}get images(){return this._images}set cellWidth(t){t&&(this._cellWidth=t)}set isCounter(t){t&&(this._isCounter=t)}set loop(t){t&&(this._loop=t)}get loop(){return!!this.images&&this._loop}set lightDOM(t){t&&(this._lightDOM=t)}get lightDOM(){return!!this.images&&this._lightDOM}onWindowResize(t){this.utils.visibleWidth!==this.savedCarouselWidth&&this.resize()}onMousemove(t){this.autoplay&&this.pauseOnHover&&this.carousel.stopAutoplay()}onMouseleave(t){this.autoplay&&this.pauseOnHover&&this.carousel.autoplay()}ngOnInit(){this.isNgContent=this.cellsElement.children.length>0,this.touches=new g({element:this.cellsElement,listeners:this.listeners,mouseListeners:{mousedown:"handleMousedown",mouseup:"handleMouseup"}}),this.touches.on("touchstart",this.handleTouchstart),this.touches.on("horizontal-swipe",this.handleHorizontalSwipe),this.touches.on("touchend",this.handleTouchend),this.touches.on("mousedown",this.handleTouchstart),this.touches.on("mouseup",this.handleTouchend),this.touches.on("tap",this.handleTap),this.setDimensions()}ngAfterViewInit(){this.initCarousel(),this.cellLength=this.getCellLength(),this.dotsArr=Array(this.cellLength).fill(1),this.ref.detectChanges(),this.carousel.lineUpCells(),this.savedCarouselWidth=this.carouselWidth,this.detectDomChanges()}ngOnChanges(t){(t.width||t.height||t.images)&&(this.setDimensions(),this.initCarousel(),this.carousel.lineUpCells(),this.ref.detectChanges())}ngOnDestroy(){this.touches.destroy()}initCarousel(){this.carouselProperties={id:this.id,cellsElement:this.elementRef.nativeElement.querySelector(".carousel-cells"),hostElement:this.elementRef.nativeElement,images:this.images,cellWidth:this.getCellWidth(),loop:this.loop,autoplayInterval:this.autoplayInterval,overflowCellsLimit:this.overflowCellsLimit,visibleWidth:this.width,margin:this.margin,minSwipeDistance:this.minSwipeDistance,transitionDuration:this.transitionDuration,transitionTimingFunction:this.transitionTimingFunction,videoProperties:this.videoProperties,eventHandler:this.events,freeScroll:this.freeScroll,lightDOM:this.lightDOM},this.utils=new w(this.carouselProperties),this.cells=new v(this.carouselProperties,this.utils),this.container=new m(this.carouselProperties,this.utils,this.cells),this.slide=new C(this.carouselProperties,this.utils,this.cells,this.container),this.carousel=new p(this.carouselProperties,this.utils,this.cells,this.container,this.slide),this.autoplay&&this.carousel.autoplay()}resize(){this.landscapeMode=this.isLandscape,this.savedCarouselWidth=this.carouselWidth,this.carouselProperties.cellWidth=this.getCellWidth(),this.cells.updateProperties(this.carouselProperties),this.carousel.updateProperties(this.carouselProperties),this.container.updateProperties(this.carouselProperties),this.slide.updateProperties(this.carouselProperties),this.utils.updateProperties(this.carouselProperties),this.carousel.lineUpCells(),this.slide.select(0),this.ref.detectChanges()}detectDomChanges(){new MutationObserver(t=>{this.onDomChanges()}).observe(this.cellsElement,{attributes:!0,childList:!0,characterData:!0})}onDomChanges(){this.cellLength=this.getCellLength(),this.carousel.lineUpCells(),this.ref.detectChanges()}setDimensions(){this.hostStyleHeight=this.height+"px",this.hostStyleWidth=this.width+"px"}getImage(t){return this.carousel.getImage(t)}handleTransitionendCellContainer(t){"carousel-cells"===t.target.className&&this.carousel.handleTransitionend()}getCellWidth(){let t=this.carouselWidth;return this.cellsToShow?(t-(this.cellsToShow>1?this.margin:0)*(this.cellsToShow-1))/this.cellsToShow:"100%"===this._cellWidth?t:this._cellWidth}next(){this.carousel.next(this.cellsToScroll),this.carousel.stopAutoplay()}prev(){this.carousel.prev(this.cellsToScroll),this.carousel.stopAutoplay()}isNextArrowDisabled(){if(this.carousel)return this.carousel.isNextArrowDisabled()}isPrevArrowDisabled(){if(this.carousel)return this.carousel.isPrevArrowDisabled()}getCellLength(){return this.images?this.images.length:this.cellsElement.children.length}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(s.l),s.Nb(s.h))},t.\u0275cmp=s.Hb({type:t,selectors:[["carousel"],["","carousel",""]],hostVars:6,hostBindings:function(t,e){1&t&&s.Zb("resize",function(t){return e.onWindowResize(t)},!1,s.kc)("mousemove",function(t){return e.onMousemove(t)})("mouseleave",function(t){return e.onMouseleave(t)}),2&t&&(s.qc("height",e.hostStyleHeight)("width",e.hostStyleWidth),s.Fb("carousel",e.hostClassCarousel))},inputs:{height:"height",autoplay:"autoplay",autoplayInterval:"autoplayInterval",pauseOnHover:"pauseOnHover",dots:"dots",margin:"margin",objectFit:"objectFit",minSwipeDistance:"minSwipeDistance",transitionDuration:"transitionDuration",transitionTimingFunction:"transitionTimingFunction",counterSeparator:"counterSeparator",overflowCellsLimit:"overflowCellsLimit",listeners:"listeners",cellsToScroll:"cellsToScroll",freeScroll:"freeScroll",arrows:"arrows",arrowsOutside:"arrowsOutside",arrowsTheme:"arrowsTheme",isCounter:["counter","isCounter"],images:"images",cellWidth:"cellWidth",loop:"loop",lightDOM:"lightDOM",id:"id",width:"width",borderRadius:"borderRadius",videoProperties:"videoProperties",cellsToShow:"cellsToShow"},outputs:{events:"events"},features:[s.Ab],ngContentSelectors:d,decls:8,vars:6,consts:[["class","carousel-counter",4,"ngIf"],[1,"carousel-container"],[1,"carousel-cells",3,"transitionend"],["cells",""],["ngFor","",3,"ngForOf"],["class","carousel-dots",4,"ngIf"],["class","carousel-arrows",3,"carousel-arrows-outside","carousel-dark-arrows",4,"ngIf"],[1,"carousel-counter"],["class","carousel-cell",3,"width","border-radius",4,"ngIf"],[1,"carousel-cell"],["draggable","false",3,"src","object-fit",4,"ngIf"],["draggable","false",3,"src"],[1,"carousel-dots"],["class","carousel-dot",3,"carousel-dot-active",4,"ngFor","ngForOf"],[1,"carousel-dot"],[1,"carousel-arrows"],[1,"carousel-arrow","carousel-arrow-prev",3,"click"],[1,"carousel-arrow","carousel-arrow-next",3,"click"]],template:function(t,e){1&t&&(s.fc(),s.tc(0,r,2,1,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2,3),s.Zb("transitionend",function(t){return e.handleTransitionendCellContainer(t)}),s.ec(4),s.tc(5,h,1,1,"ng-template",4),s.Rb(),s.tc(6,c,2,1,"div",5),s.Rb(),s.tc(7,u,3,8,"div",6)),2&t&&(s.gc("ngIf",e.isCounter),s.Cb(1),s.Fb("carousel-moving",e.isMoving),s.Cb(4),s.gc("ngForOf",e.images),s.Cb(1),s.gc("ngIf",e.dots),s.Cb(1),s.gc("ngIf",e.isArrows))},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({providers:[],imports:[[n.b]]}),t})()}}]);