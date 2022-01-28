// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrixContractApprovalDialogComponent } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent {
  public streetViewToggled = true;
  public neighborhoodViewToggled = true;
  public districtViewToggled = true;
  public brixClaimLoading = false;
  public brixTokenApproved = true; // Need to dynamically set this based on smart contract
  public streets = {
    totalInProgress: 0,
    totalCompleted: 0,
    streets: [
      {
        name: 'Clay Circus',
        earnableAmount: 320,
        isComplete: false,
        propertys: [
          {
            image: ''
          }
        ]
      }
    ]
  }

  public accounts = [];

  // Countdown
  public countdownTimer;
  public countdownHours: any = 0;
  public countdownMins: any = 0;
  public countdownSecs: any = 0;

  constructor(
    public smartContractCoreService: SmartContractCoreService,
    public eventMessengerService: EventMessengerService,
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
        // Initialize the countdown
    this.countdownTimer = setInterval(() => {
			this.updateCountdownTimer();
		}, 1000);
		this.updateCountdownTimer();

    


     // Startup: Check metamask and populate accounts and then determine if any unis are in wallet
     await this.checkMetaMaskInstalled();

     // Make sure we're on the right chain
     await this.checkChain();
 
 
     // Handle events when wallet accounts change
     this.eventMessengerService.subscribe('accountsChanged', async (event) => {
       let { accounts } = event.data;
       this.accounts = accounts;
       await this.checkChain();
     });
 
     // Handle events when wallet accounts get disconnectd
     this.eventMessengerService.subscribe('disconnect', async (event: any) => {
       let { accounts } = event.data;
       this.accounts = accounts;
       await this.checkChain();
     })

     this.loadPropertys();
  }



  /**
   * Toggle the container type
   */
  toggleContainerType(type) {
    switch(type) {

      case "street":
        this.streetViewToggled = !this.streetViewToggled;
      break;
      case "neighborhood":
        this.neighborhoodViewToggled = !this.neighborhoodViewToggled;
        break;
      case "district":
        this.districtViewToggled = !this.districtViewToggled;
      break;
    }
  }


   /**
	 * Make sure we are on the correct chain
	 */
	async checkChain() {
		if(this.smartContractCoreService.isMetaMaskInstalled()) {
			const { chainId } = await this.smartContractCoreService.provider.getNetwork()
			if(environment.chainId === chainId) {
				this.isOnMainnet = true;
			} else {
				this.isOnMainnet = false;
				this.loading = false;
			}
		} else {
			this.isOnMainnet = false;
			this.loading = false;
		}
	}


  /**
	 * Ensure metamask is installed so we can get wallet information
	 */
	async checkMetaMaskInstalled() {
		if(this.smartContractCoreService.isMetaMaskInstalled()) {
		  this.isMetaMaskInstalled = true;
		  this.accounts = await this.smartContractCoreService.getWalletAccounts();
		} else {
		  this.isMetaMaskInstalled = false;
		}
	}

  
  /**
   * Claim Brix button
   */
   public claimBrix() {

    // If token hasn't been approved, show modal to approve it
    if(this.brixTokenApproved) {
      this._dialog.open(BrixContractApprovalDialogComponent, {
          width: '630px',
          data: {
            accounts: this.accounts
          }
      });
    } else {
      this.brixClaimLoading = true;
    }
}


  /**
   *  Countdown for current window
	 */
	public updateCountdownTimer() {
		let endDate = 1659902000000; // Update this with the end time in milliseconds
		let now = Date.now()
		let t = endDate - now;
		
		if (t >= 0) {
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
		} 
	}


  public loadPropertys() {
    this.smartContractCoreService
        .getNFTsFromAddress(this.accounts[0])
        .subscribe(async (data) => {
            this.loading = false;


            console.log('data?', data);
        });
}
}
