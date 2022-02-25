import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrixCalculatorComponent } from './brix-calculator.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrixContractApprovalDialogModule } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.module';
import { CountdownTimerModule } from '../shared/components/countdown-timer/countdown-timer.module';
import { PropertysCityFilterPipeModule } from '../shared/pipes/propertys-city-filter/propertys-city-filter.module';

@NgModule({
  declarations: [
    BrixCalculatorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    CountdownTimerModule,
    MatDialogModule,
    PropertysCityFilterPipeModule,
    BrixContractApprovalDialogModule,
    RouterModule.forChild([{
      path: '',
      component: BrixCalculatorComponent
  }])
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports: [
    BrixCalculatorComponent
  ],
  bootstrap: [BrixCalculatorComponent]
})
export class RentModule { }
