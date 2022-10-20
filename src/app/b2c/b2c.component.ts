// @ts-nocheck
import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { CarouselComponent } from "../shared/components/carousel/carousel.component";
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-b2c',
  templateUrl: './b2c.component.html',
  styleUrls: ['./b2c.component.scss']
})
export class B2CComponent {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;
  @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {}

  public selectedDistrict = 1;
  public metaverseImageToShow = 1;
  public accounts = [];
  public houseFrameToShow = 0;
  public networkText = "Ethereum Mainnet";
  // Countdown
  public countdownTimer;
  public countdownDays: any = 0;
  public countdownHours: any = 0;
  public countdownMins: any = 0;
  public countdownSecs: any = 0;
  public generalFAQ: any = {
	  q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
  }

  public isMetaMaskInstalled = true;
  public isOnMainnet = true;

  public partnershipLogoImages = [
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
  ]

  public carouselAutoplay = true;
  public carouselLoop = true;
  public carouselAutoplayInterval = 500;
  public carouselPauseOnHover = false;
  public carouselTransitionInterval = 1000;

  constructor(
    private _route: ActivatedRoute,
    public smartContractCoreService: SmartContractCoreService,
    public eventMessengerService: EventMessengerService,
  ) {}



  async ngOnInit() {

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
    this.animateTypewriterText()
  }


  /**
   * Animate the slogan text
   */
  public animateTypewriterText() {

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

  
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
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



  ngOnDestroy() {
    clearInterval(this.countdownTimer);
}


  /**
	 *	Functions that governs active states of the FAQ questions
	 */
	public toggleFAQ(question) {
		this.generalFAQ[question] = !this.generalFAQ[question];
	}

}
