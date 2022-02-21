import {Component, Input, NgZone, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
    selector: 'propertys-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent {
    
    // Countdown
    public countdownTimer: any;
    public countdownHours: any = 0;
    public countdownMins: any = 0;
    public countdownSecs: any = 0;
    @Input('endDate') endDate: any

    constructor(
        private ngZone: NgZone,
        public changeDetectorRef: ChangeDetectorRef
    ) {
       
    }

    ngOnInit() {
        // Initialize the countdown
        this.ngZone.runOutsideAngular(() => {
            this.updateCountdownTimer();
            this.countdownTimer = setInterval(() => {
                this.updateCountdownTimer();
                this.changeDetectorRef.detectChanges(); 
            }, 1000);
      
        })
    }


      /**
   *  Countdown for current window
	 */
	public updateCountdownTimer() {
		let endDate = this.endDate || 1659902000000; // Update this with the end time in milliseconds
		let now = Date.now()
		let t = endDate - now;
		
		if (t >= 0) {
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000).toString().padStart(2, '0');
		} 
	}
}

