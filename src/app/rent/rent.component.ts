// @ts-nocheck
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent {

  // Countdown
  public countdownTimer;
  public countdownHours: any = 0;
  public countdownMins: any = 0;
  public countdownSecs: any = 0;

  constructor(
  ) {}

  async ngOnInit() {
        // Initialize the countdown
    this.countdownTimer = setInterval(() => {
			this.updateCountdownTimer();
		}, 1000);
		this.updateCountdownTimer();
  }


  /**
   *  Countdown for current window
	 */
	public updateCountdownTimer() {
		let endDate = 1636902000000; // Update this with the end time in milliseconds
		let now = Date.now()
		let t = endDate - now;
		
		if (t >= 0) {
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
		} 
	}
}
