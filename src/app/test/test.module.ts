import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';
import { MintDialogModule } from '../shared/dialogs/mint-dialog/mint-dialog.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    MintDialogModule,
    MatDialogModule,
    AppFooterModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: TestComponent
  }])
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports: [
    TestComponent
  ],
  bootstrap: [TestComponent]
})
export class TestModule { }
