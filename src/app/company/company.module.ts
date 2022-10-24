import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyComponent } from './company.component';
import { AppHeaderModule } from '../shared/components/app-header/app-header.module';
import { AppFooterModule } from '../shared/components/app-footer/app-footer.module';
import { HowCanIHelpModule } from '../shared/components/how-can-i-help/how-can-i-help.module';

@NgModule({
  declarations: [
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    HowCanIHelpModule,
    AppFooterModule,
    RouterModule.forChild([{
      path: '',
      component: CompanyComponent
  }])
  ],
  providers: [
  ],
  exports: [
    CompanyComponent
  ],
  bootstrap: [CompanyComponent]
})
export class CompanyModule { }
