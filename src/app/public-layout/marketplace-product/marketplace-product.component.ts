// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marketplace-product',
  templateUrl: './marketplace-product.component.html',
  styleUrls: ['./marketplace-product.component.scss']
})
export class MarketplaceProductComponent {
  public searchTerm: any = '';
  constructor(
    private route: ActivatedRoute,
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const productId = params.productId;
      if(productId) {
        console.log('productId?', productId);
      }
    });
  }


  /**
   * Buy button
   */
  buy(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('purchase');
  }

  toggleFavorite() {

  }


}
