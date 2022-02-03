// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrixContractApprovalDialogComponent } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';
import { PropertyBinding } from 'three';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent {
  public streetViewToggled = true;
  public districtViewToggled = true;
  public cityViewToggled = true;
  public brixClaimLoading = false;
  public brixTokenApproved = true; // Need to dynamically set this based on smart contract
  public propertys = {};

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
        this.districtViewToggled = !this.districtViewToggled;
        break;
      case "district":
        this.cityViewToggled = !this.cityViewToggled;
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
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000).toString().padStart(2, '0');
		} 
	}


  public loadPropertys() {
    this.smartContractCoreService
        .getNFTsFromAddress(this.accounts[0])
        .subscribe(async (data) => {
            this.loading = false;

            // Iterate through the data and build the streets, districts, and cities
            console.log('data?', data);
            let streetBreakdown = data.map(property => {

              let propertyObj = {
                image: property.image_preview_url
              };
              for(let trait of property.traits) {

                if(trait.trait_type === 'Street Name') {
                 propertyObj['street'] = trait.value;
                }
                
                if(trait.trait_type === 'District Name') {
                  propertyObj['district'] = trait.value;
                }

                if(trait.trait_type === 'City Name') {
                  propertyObj['city'] = trait.value;
                }

                if(trait.trait_type === 'Unit') {
                  propertyObj['unit'] = trait.value;
                }
              }


              
              return propertyObj;
            })


            // Now that we know the streets, go through each one and initialize props for each
            streetBreakdown.forEach(property => {
              this.propertys[property.street] = { units: [] }
            })

            streetBreakdown.forEach(property => {
              this.propertys[property.street]['units'].push(property)
            })

            console.log('streetBreakdown?', this.propertys)
        });
  }


  isStreetComplete(units) {
    return units.length === 7 ? true : false;
  }

  buildBuyButtonsForStreet(units) {
    let buyOnOpenSeaArray = [];
    for(let i = 0; i < (7 - units.length); i++) {
      buyOnOpenSeaArray.push({
        image: units[0]['image'],
        street: units[0]['street'].replace(' ', '%20'),
      });
    }

    return buyOnOpenSeaArray;
  }
}
