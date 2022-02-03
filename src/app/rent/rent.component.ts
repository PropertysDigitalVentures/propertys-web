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
  public propertys = []; // Breakdown of the streets

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


  
  /**
   * 
   * Determine if a street has 7 units
   */
   isStreetComplete(street) {
    return street.length === 7 ? true : false;
  }


  /**
   * Build the "Buy on Opensea" buttons for each street 
   */
  buildBuyButtonsForStreet(street) {
    let buyOnOpenSeaArray = [];
    for(let i = 0; i < (7 - street.length); i++) {
      buyOnOpenSeaArray.push({
        image: street[0]['image'],
        street: street[0]['street'].replace(' ', '%20'),
      });
    }

    return buyOnOpenSeaArray;
  }



  /**
   * Loads all the propertys for a wallet and then organizes the table breakdown
   */
  public loadPropertys() {
    this.smartContractCoreService
        .getNFTsFromAddress(this.accounts[0])
        .subscribe(async (data) => {
            this.loading = false;

            // Create some test data
            let streetData = data.concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data).concat(data);

            // Iterate through the data and build the streets, districts, and cities
            let allUnits = streetData.map(property => {

              let propertyObj = {
                image: property.image_preview_url
              };
              for(let trait of property.traits) {
                // Street
                if(trait.trait_type === 'Street Name') {
                 propertyObj['street'] = trait.value;
                }
                // District
                if(trait.trait_type === 'District Name') {
                  propertyObj['district'] = trait.value;
                }
                // City
                if(trait.trait_type === 'City Name') {
                  propertyObj['city'] = trait.value;
                }
                // Unit
                if(trait.trait_type === 'Unit') {
                  propertyObj['unit'] = trait.value;
                }
              }

              return propertyObj;
            })


            // Create entries for each property in order to catalog all streets under a single street object
            allUnits.forEach(property => {
              let propertyExists = false;
              this.propertys.forEach(singleProperty => {
                if(property.street === singleProperty.streetName) {
                  propertyExists = true;
                }
              });

              if(!propertyExists) {
                this.propertys.push({
                  streetName: property.street,
                  units: [],
                  streets: []
                })
              }
            });


            // Now that we know the streets, go through each one and initialize props for each
            allUnits.forEach(property => {
              // Now go through all the propertys
              this.propertys.forEach(singleProperty => {

                // We have a street match
                if(singleProperty.streetName === property.street) {
                  
                  singleProperty.units.push(property);
                }
              })
            })

            // Now that we have all the property streets broken down, let's go through and divide them up
            this.propertys.forEach(property => {
              while(property.units.length) {
                property.streets.push(property.units.splice(0,7));
              }
            })
            
            console.log('propertys', this.propertys);
        });
  }
}
