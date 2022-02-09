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

  public brixPropertyBonuses = {
    'X AE A-11': {
      house: 80,
      street: 650,
      district: 1600, 
      city: 4300
    },
    'Blue Bayside': {
      house: 60,
      street: 550,
      district: 1000, 
      city: 2000
    },
    'Purple Palms': {
      house: 50,
      street: 500,
      district: 900, 
      city: 1800
    },
    'Green Grove': {
      house: 40,
      street: 450,
      district: 800, 
      city: 1600
    },
    'Yellow Yards': {
      house: 30,
      street: 400,
      district: 700, 
      city: 1400
    },
    'Orange Oasis': {
      house: 20,
      street: 350,
      district: 600, 
      city: 1200
    },
    'Beige Bay': {
      house: 10,
      street: 300,
      district: 500, 
      city: 1000
    }
  }

  public neededPropertysForCompletion = {
    'X AE A-11': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 3
    },
    'Blue Bayside': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 3
    },
    'Purple Palms': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 4
    },
    'Green Grove': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 4
    },
    'Yellow Yards': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 4
    },
    'Orange Oasis': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 5
    },
    'Beige Bay': {
      housesPerStreet: 7,
      streetsPerDistrict: 3,
      districtsPerCity: 5
    }
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
   * Determine if a street has 7 units (comes in as array of houses that have metadata on them)
   */
   isStreetComplete(street) {
     let city = street[0].city;
    return street.length === this.neededPropertysForCompletion[city]['housesPerStreet'] ? true : false;
  }


  /**
   * 
   * Determine if a street has 7 units
   */
  isDistrictComplete(district) {
    let city = district.city;
    return district.streets.length === this.neededPropertysForCompletion[city]['streetsPerDistrict'] ? true : false;
  }


  /**
   * 
   * Determine if a street has 7 units
   */
   isCityComplete(city) {
    return city.districts.length === this.neededPropertysForCompletion[city.name]['districtsPerCity'] ? true : false;
  }


  /**
   * Build the "Buy on Opensea" buttons for each street 
   */
  buildBuyButtonsForStreet(street) {
    let buyOnOpenSeaArray = [];
    let city = street[0].city;
    for(let i = 0; i < (this.neededPropertysForCompletion[city]['housesPerStreet'] - street.length); i++) {
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
    return this.neededPropertysForCompletion[district.city].streetsPerDistrict - district.streets.length;
  }


  /**
   * 
   * Get remaining districts
   */
   getRemainingCityDistrictCount(city) {
    return this.neededPropertysForCompletion[city.name].districtsPerCity - city.districts.length;
  }


  /**
   * Determine if a city even has districts
   */
  hasDistricts(city) {
    return city.districts.length > 0;
  }


  /**
   * Determine if a city even has districts
   */
  hasCities() {
    let districtTotal = 0;
    this.cities.forEach(city => {
      if(city.districts.length > 0) {
        districtTotal++;
      }
    })

    return districtTotal > 0 ? true : false;
  }


  /**
   * 
   * Determine the amount of brix earned on a per street, district, and city level
   */
  public getEarnedBrixAmount(type, propertyList, showPossibleRewards?) {
    if(type === 'street') {
      let total = 0;
      total += (propertyList.length * this.brixPropertyBonuses[propertyList[0].city].house)
      if(this.isStreetComplete(propertyList)) {
        total += this.brixPropertyBonuses[propertyList[0].city].street;
      }
      return total; 
    } else if(type === 'district') {
      if(showPossibleRewards) {
        return this.brixPropertyBonuses[propertyList.city].district
      } else {
        if(this.isDistrictComplete(propertyList)) {
          return this.brixPropertyBonuses[propertyList.city].district
        } else {
          return 0;
        }
      }
    } else if(type === 'city') {
      if(showPossibleRewards) {
        return this.brixPropertyBonuses[propertyList.name].city
      } else {
        if((propertyList.districts.length - this.neededPropertysForCompletion[propertyList.name].districtsPerCity) === 0) {
          return this.brixPropertyBonuses[propertyList.name].city
        } else {
          return 0;
        }
      }
    }
  }


  /**
   * Show the total of earned brix, please.
   */
  getTotalEarnedBrix() {

    let total = 0;
      if(this.propertys.length > 0) {
      this.propertys.forEach(property => {
        total += this.getEarnedBrixAmount('street', property.streets[0],);
      });
    }

    // Districts
    this.districts.forEach(district => {
      total += this.getEarnedBrixAmount('district', district);
    });

    // Cities
    this.cities.forEach(city => {
      total += this.getEarnedBrixAmount('city', city);
    });

    return total;
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
                  city: property.city,
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
                property.streets.push(property.units.splice(0,this.neededPropertysForCompletion[property.city]['housesPerStreet']));
              }

              // Determine how many are complete and in progress
              property.streets.forEach(street => {
                if(street.length === this.neededPropertysForCompletion[street[0].city]['housesPerStreet']) {
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
              if(district.streets.length === this.neededPropertysForCompletion[district.city]['streetsPerDistrict']) {
                this.propertyTypeProgress['districts'].completed++;
                
                // Determine breakdown of cities
                this.cities.forEach(city => {
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
              if(city.districts.length === this.neededPropertysForCompletion[city.name]['districtsPerCity']) { // NOTE: Change this to whatever number is required to own a district
                this.propertyTypeProgress['cities'].completed++;
              } else if(city.districts.length >= 1) {
                  this.propertyTypeProgress['cities'].inProgress++;
              }
            })
           
           
            
            this.loadingPropertys = false;
        });
  }
}
