import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { B2BComponent } from './b2b.component';

@NgModule({
  declarations: [
    B2BComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{
      path: '',
      component: B2BComponent
  }])
  ],
  providers: [
  ],
  exports: [
    B2BComponent
  ],
  bootstrap: [B2BComponent]
})
export class B2BModule { }
