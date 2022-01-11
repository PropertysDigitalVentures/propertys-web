import { NgModule } from '@angular/core';
import { AppFooterComponent } from './app-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppFooterComponent],
    imports: [
        RouterModule
    ],
    exports: [AppFooterComponent]
})
export class AppFooterModule {}
