import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertysToolComponent } from './propertys-tool.component';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';

@NgModule({
  declarations: [
    PropertysToolComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppHeaderModule,
    AppFooterModule,
    RouterModule.forChild([{
      path: '',
      component: PropertysToolComponent
  }])
  ],
  providers: [],
  exports: [
    PropertysToolComponent
  ],
  bootstrap: [PropertysToolComponent]
})
export class PropertysToolModule { }
