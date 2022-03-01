// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-marketplace-listings',
  templateUrl: './marketplace-listings.component.html',
  styleUrls: ['./marketplace-listings.component.scss']
})
export class MarketplaceListingsComponent {
  
  public searchTerm: any = '';
  public filters = {
    'price-range': false,
    'streets': false,
    'districts': false,
    'cities': false,
    'special': false,
    'sandbox': false
  }

  constructor(
    
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
   
  }


  /**
   * Toggle a filter
   */
  toggleFilter(filter) {
    this.filters[filter] = !this.filters[filter];
  }


  /**
   * 
   * Check if a filter is toggled
   */
  isFilterToggled(filter) {
    let isFilteredToggled = false;
    for(let key in this.filters) {
      if(this.filters[filter] === true) {
        isFilteredToggled = true;
      }
    }

    return isFilteredToggled;
  }

  

  buy(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('purchase');
  }


}
