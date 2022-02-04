import { NgModule } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CountdownTimerComponent],
    imports: [
        RouterModule
    ],
    exports: [CountdownTimerComponent]
})
export class CountdownTimerModule {}
