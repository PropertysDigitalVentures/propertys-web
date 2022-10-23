import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { AppHeaderModule } from '../shared/components/app-header/app-header.module';
import { AppFooterModule } from '../shared/components/app-footer/app-footer.module';
import { HowCanIHelpModule } from '../shared/components/how-can-i-help/how-can-i-help.module';
import { PartnershipsModule } from '../shared/components/partnerships/partnerships.module';
import { MintDialogModule } from '../shared/dialogs/mint-dialog/mint-dialog.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    MintDialogModule,
    PartnershipsModule,
    HowCanIHelpModule,
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
