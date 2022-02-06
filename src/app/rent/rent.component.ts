// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrixContractApprovalDialogComponent } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';
import { PropertyBinding } from 'three';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

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
  public loadingPropertys = true;
  public isOnMainnet = true;
  public propertysForCompletion = 7;
  public streetsForCompletion = 7;
  public districtsForCompletion = 7;
  public brixTokenApproved = true; // Need to dynamically set this based on smart contract
  public propertys = []; // Breakdown of the streets
  public districts = [];
  public cities = [];
  public propertyTypeProgress = {
    streets: {
      completed: 0,
      inProgress: 0
    },
    districts: {
      completed: 0,
      inProgress: 0
    },
    cities: {
      completed: 0,
      inProgress: 0
    },
  }

  public accounts = [];


  constructor(
    public smartContractCoreService: SmartContractCoreService,
    public eventMessengerService: EventMessengerService,
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
    
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
      case "district":
        this.districtViewToggled = !this.districtViewToggled;
        break;
      case "city":
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
   * 
   * Determine if a street has 7 units
   */
   isStreetComplete(street) {
    return street.length === this.propertysForCompletion ? true : false;
  }


  /**
   * 
   * Determine if a street has 7 units
   */
  isDistrictComplete(streets) {
    return streets.length === this.streetsForCompletion ? true : false;
  }


  /**
   * Build the "Buy on Opensea" buttons for each street 
   */
  buildBuyButtonsForStreet(street) {
    let buyOnOpenSeaArray = [];
    for(let i = 0; i < (this.propertysForCompletion - street.length); i++) {
      buyOnOpenSeaArray.push({
        image: street[0]['image'],
        street: street[0]['street'].replace(' ', '%20'),
      });
    }

    return buyOnOpenSeaArray;
  }


  /**
   * Replace spaces in name for URL
   */
  replaceSpacesForUrlLink(name) {
    return name.replace(' ', '%20');
  }

  /**
   * 
   * Get remaining districts
   */
  getRemainingDistrictStreetCount(district) {
    return this.streetsForCompletion - district.streets.length;
  }


  /**
   * 
   * Get remaining districts
   */
   getRemainingCityDistrictCount(city) {
    return this.districtsForCompletion - city.districts.length;
  }



  hasDistricts(city) {
    return city.districts.length > 0;
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
            let allUnits = data.map(property => {

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
              let districtExists = false;
              let cityExists = false;
              this.propertys.forEach(singleProperty => {
                if(property.street === singleProperty.street) {
                  propertyExists = true;
                }
              });

              // Districts
              this.districts.forEach(district => {
                if(district.name === property.district) {
                  districtExists = true;
                }
              });

              // Cities
              this.cities.forEach(city => {
                if(city.name === property.city) {
                  cityExists = true;
                }
              });

              // Let's initialize all the streets, districts, and cities for future use
              if(!propertyExists) {
                this.propertys.push({
                  street: property.street,
                  district: property.district,
                  city: property.city,
                  units: [],
                  streets: []
                })
              }

              if(!districtExists) {
                // Districts
                this.districts.push({
                  name: property.district,
                  streets: []
                })
              }

              if(!cityExists) {
                // Cities
                this.cities.push({
                  name: property.city,
                  districts: []
                })
              }
            });


            // Now that we know the streets, go through each one and initialize props for each
            allUnits.forEach(property => {
              // Now go through all the propertys
              this.propertys.forEach(singleProperty => {

                // We have a street match
                if(singleProperty.street === property.street) {
                  
                  singleProperty.units.push(property);
                }
              })
            })

            // Now that we have all the property streets broken down, let's go through and divide them up
            this.propertys.forEach(property => {
              while(property.units.length) {
                property.streets.push(property.units.splice(0,this.propertysForCompletion));
              }

              // Determine how many are complete and in progress
              property.streets.forEach(street => {
                if(street.length === this.propertysForCompletion) {
                   this.propertyTypeProgress['streets'].completed++;
                   
                   // Determine breakdown of districts
                   this.districts.forEach(district => {
                     if(district.name === property.district) {
                       district.streets.push(street)
                       district['city'] = property.city;
                     }
                   })
                  
                  } else {
                    this.propertyTypeProgress['streets'].inProgress++;
                }
              })
            })



            // FINALLY, let's create a breakdown of all districts and cities, based on what streets are owned
            this.districts.forEach(district => {
              if(district.streets.length === this.streetsForCompletion) {
                this.propertyTypeProgress['districts'].completed++;
                
                // Determine breakdown of cities
                this.cities.forEach(city => {
                  console.log('city', city.name, district.city);
                  if(city.name === district.city) {
                     city.districts.push(district);
                  }
                })
                
              } else if(district.streets.length >= 1) {
                  this.propertyTypeProgress['districts'].inProgress++;
              }
            })

            // Cities
            this.cities.forEach(city => {
              if(city.districts.length === this.districtsForCompletion) { // NOTE: Change this to whatever number is required to own a district
                this.propertyTypeProgress['cities'].completed++;
              } else if(city.districts.length >= 1) {
                  this.propertyTypeProgress['cities'].inProgress++;
              }
            })
           
           
            
            this.loadingPropertys = false;
            console.log('cities', this.cities);
        });
  }
}
