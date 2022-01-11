import { Component, Input, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  fadeIn,
  fadeOut,
} from "./carousel.animations";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: any;
  @Input() animationType = AnimationType.Fade;

  animationDuration = 500;
  slideDuration = 2000;
  cycleTimer: any;
  clickEventPaused = false;

  constructor() {}

  onPreviousClick() {
    if(!this.clickEventPaused) {
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
    if(!this.clickEventPaused) {
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
    clearInterval(this.cycleTimer)
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
