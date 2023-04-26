import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarketplaceAdminComponent } from './marketplace-admin.component';
import {AppHeaderModule} from '../../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../../shared/components/app-footer/app-footer.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Remove this for PROD

@NgModule({
  declarations: [
    MarketplaceAdminComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    MatDialogModule,
    FormsModule, // Remove this for PROD
    RouterModule.forChild([{
      path: '',
      component: MarketplaceAdminComponent
  }])
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports: [
    MarketplaceAdminComponent
  ],
  bootstrap: [MarketplaceAdminComponent]
})
export class MarketplaceAdminModule { }
