// @ts-nocheck
import { Component, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediumApiService } from '../shared/services/medium-api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {}

  public mediumPosts = [];

  constructor(
    private _route: ActivatedRoute,  
    private mediumApiService: MediumApiService
  ) {}



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
			
    }) 

    // Posts from Medium API
    this.mediumPosts = await this.mediumApiService.getMediumPosts();
  }

}
