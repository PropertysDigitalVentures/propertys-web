import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RentComponent } from './rent.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrixContractApprovalDialogModule } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.module';
import { CountdownTimerModule } from '../shared/components/countdown-timer/countdown-timer.module';

@NgModule({
  declarations: [
    RentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    CountdownTimerModule,
    MatDialogModule,
    BrixContractApprovalDialogModule,
    RouterModule.forChild([{
      path: '',
      component: RentComponent
  }])
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports: [
    RentComponent
  ],
  bootstrap: [RentComponent]
})
export class RentModule { }
