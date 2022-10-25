import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyComponent } from './company.component';
import { HowCanIHelpModule } from '../shared/components/how-can-i-help/how-can-i-help.module';

@NgModule({
  declarations: [
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HowCanIHelpModule,
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
