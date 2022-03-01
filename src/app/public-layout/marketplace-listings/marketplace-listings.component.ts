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

  constructor(
    
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
   
  }

  toggleFilter(filter) {

  }

  buy(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('purchase');
  }


}
