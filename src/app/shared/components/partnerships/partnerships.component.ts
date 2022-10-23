import {Component} from '@angular/core';

@Component({
    selector: 'app-partnerships',
    templateUrl: './partnerships.component.html',
    styleUrls: ['./partnerships.component.scss']
})
export class PartnershipsComponent {

    
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
    ) {
    }
}

