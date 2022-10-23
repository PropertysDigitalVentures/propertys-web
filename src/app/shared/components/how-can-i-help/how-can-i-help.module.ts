import { NgModule } from '@angular/core';
import { HowCanIHelpComponent } from './how-can-i-help.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HowCanIHelpComponent],
    imports: [
        RouterModule
    ],
    exports: [HowCanIHelpComponent]
})
export class HowCanIHelpModule {}
