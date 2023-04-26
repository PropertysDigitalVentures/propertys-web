import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { AppHeaderModule } from '../../shared/components/app-header/app-header.module';
import { AppFooterModule } from '../../shared/components/app-footer/app-footer.module';
import { MintDialogModule } from '../../shared/dialogs/mint-dialog/mint-dialog.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IvyCarouselModule } from 'angular-responsive-carousel';
// import { Carousel3DComponent } from "../shared/components/carousel-3d/carousel-3d.component";

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    IvyCarouselModule,
    MintDialogModule,
    MatDialogModule,
    // FormsModule,
    RouterModule.forChild([{
      path: '',
      component: IndexComponent
  }])
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports: [
    IndexComponent
  ],
  bootstrap: [IndexComponent]
})
export class IndexModule { }
