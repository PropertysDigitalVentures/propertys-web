import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './page-not-found.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    RouterModule.forChild([{
      path: '',
      component: PageNotFoundComponent
  }])
  ],
  providers: [

  ],
  exports: [
    PageNotFoundComponent
  ],
  bootstrap: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
