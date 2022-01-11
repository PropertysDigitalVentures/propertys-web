import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

@NgModule({
    declarations: [AppHeaderComponent],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [
    ],
    exports: [AppHeaderComponent],
})
export class AppHeaderModule {}
