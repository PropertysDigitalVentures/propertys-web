// @ts-nocheck
import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b2b',
  templateUrl: './b2b.component.html',
  styleUrls: ['./b2b.component.scss'],

})
export class B2BComponent {

  public stats = {
    investment: 0,
    revenue: 0,
    consumers: 0
  };

  public statsCounterInterval;

  constructor( 
    private _route: ActivatedRoute,
  ) {}

  ngOnDestroy() {
    clearInterval(this.statsCounterInterval);
  }

  updateStatCounters() {
    if(this.stats.investment < 120) {
      this.stats.investment += 1
    }

    if(this.stats.revenue < 15) {
      this.stats.revenue += 1
      
    }

    if(this.stats.consumers < 79) {
      this.stats.consumers += 1
    }
  }

  ngOnInit() {
    this.updateStatCounters();
    this.statsCounterInterval = setInterval(() => {
        this.updateStatCounters();
    }, 20);

    // Determine which element to scroll to
    this._route.fragment.subscribe(fragment => {
			const element = document.querySelector(`#${fragment}`)
      setTimeout(() => {
        if (element) {

          var elementPosition = element.offsetTop;

          window.scrollTo({
            top: elementPosition - 60, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
        }
      }, 0);		
    }) 
  }
}
