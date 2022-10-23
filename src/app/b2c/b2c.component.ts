// @ts-nocheck
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b2c',
  templateUrl: './b2c.component.html',
  styleUrls: ['./b2c.component.scss']
})
export class B2CComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {}

  public selectedDistrict = 1;
  public metaverseImageToShow = 1;
  
  constructor(
    private _route: ActivatedRoute,
  ) {}

   /**
   * Select district
   */
    selectDistrict(districtId) {
      this.selectedDistrict = districtId;
    }



  async ngOnInit() {
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
    });
  }



    /**
   * This will replace which image is showing
   */
     toggleMetaverseImage(image) {
      this.metaverseImageToShow = image;
    }
  

}
