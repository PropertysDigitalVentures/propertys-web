// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrixContractApprovalDialogComponent } from '../shared/dialogs/brix-contract-approval-dialog/brix-contract-approval-dialog.component';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';
import Bottleneck from "bottleneck";

@Component({
  selector: 'app-brix-calculator',
  templateUrl: './brix-calculator.component.html',
  styleUrls: ['./brix-calculator.component.scss']
})
export class BrixCalculatorComponent {
  public streetViewToggled = true;
  public districtViewToggled = true;
  public cityViewToggled = true;
  public brixClaimLoading = false;
  public loadingPropertys = true;
  public isOnMainnet = true;
  public brixEarnedBreakdown = [];
  public addresses = [];

  

  public brixPropertyBonuses = {
    'X AE X-II': {
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
    },
    'Question Cat':          { house: 1200, street: 0, district: 0, city: 0},
    'The Sunken City':       { house: 1200, street: 0, district: 0, city: 0},
    'Le Tower':              { house: 1200, street: 0, district: 0, city: 0},
    'Ancient Labyrinth':     { house: 1200, street: 0, district: 0, city: 0},
    'Mount Proper':          { house: 1200, street: 0, district: 0, city: 0},
    'Great Temple of Peter': { house: 1200, street: 0, district: 0, city: 0},
    'The Emperors Arena':    { house: 1200, street: 0, district: 0, city: 0},
    'The Secret Glass Pyramid':  { house: 1200, street: 0, district: 0, city: 0},
    'The Money Pool':        { house: 1200, street: 0, district: 0, city: 0},
    'Fort in the Leaves':    { house: 1200, street: 0, district: 0, city: 0},
    'The Impossible Bridge': { house: 600, street: 0, district: 0, city: 0},
    "Peter's Great Wall":      { house: 600, street: 0, district: 0, city: 0},
    'Candy Castle':          { house: 600, street: 0, district: 0, city: 0},
    "Property's Stadium":    { house: 600, street: 0, district: 0, city: 0},
    'Cathedral of Wisdom':   { house: 600, street: 0, district: 0, city: 0},
    'Palace of Eternity':    { house: 600, street: 0, district: 0, city: 0},
    'Spiky Singers':        { house: 250, street: 0, district: 0, city: 0},
    'The Guardian':          { house: 250, street: 0, district: 0, city: 0},
    'Casa Blanca':           { house: 250, street: 0, district: 0, city: 0},
    'Mystical Rocks':          { house: 250, street: 0, district: 0, city: 0},
  }

  public neededPropertysForCompletion = {
    'X AE X-II': {
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
    },
    'Question Cat':          { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Sunken City':       { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Le Tower':              { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Ancient Labyrinth':     { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Mount Proper':          { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Great Temple of Peter': { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Emperors Arena':    { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Secret Glass Pyramid':  { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Money Pool':        { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Fort in the Leaves':    { housesPerStreet: 1, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Impossible Bridge': { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    "Peter's Great Wall":      { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Candy Castle':          { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    "Property's Stadium":    { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Cathedral of Wisdom':   { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Palace of Eternity':    { housesPerStreet: 5, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Spiky Singers':        { housesPerStreet: 20, streetsPerDistrict: 0,  districtsPerCity: 0},
    'The Guardian':          { housesPerStreet: 20, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Casa Blanca':           { housesPerStreet: 20, streetsPerDistrict: 0,  districtsPerCity: 0},
    'Mystical Rocks':          { housesPerStreet: 20, streetsPerDistrict: 0,  districtsPerCity: 0},
  }

  public accounts = [];


  constructor(
    public smartContractCoreService: SmartContractCoreService,
    public eventMessengerService: EventMessengerService,
    private _dialog: MatDialog,
  ) {}


  async calculateBrix() {

    
    let loadPropertys = async (address) => {

      let propertys = []; // Breakdown of the streets
      let districts = [];
      let cities = [];
  
      this.smartContractCoreService
        .getNFTsFromAddress(address)
        .subscribe(async (data) => {
            this.loading = false;

            // Iterate through the data and build the streets, districts, and cities
            let allUnits = data.map(property => {

              let propertyObj = {
                image: property.image_preview_url
              };
              

              for(let trait of property.traits) {

                // Is this a SPECIAL type?
                if(trait.trait_type !== 'Special') {
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
                      propertyObj['city'] = trait.value.trim();
                    }
                    // Unit
                    if(trait.trait_type === 'Unit') {
                      propertyObj['unit'] = trait.value;
                    }
                } else {
                  propertyObj['street'] = trait.value.trim();
                  propertyObj['district'] = trait.value.trim();
                  propertyObj['city'] = trait.value.trim();
                  propertyObj['unit'] = trait.value.trim();
                }
              }

              return propertyObj;
            })



            // Create entries for each property in order to catalog all streets under a single street object
            allUnits.forEach(property => {
              let propertyExists = false;
              let districtExists = false;
              let cityExists = false;
              propertys.forEach(singleProperty => {
                if(property.street === singleProperty.street) {
                  propertyExists = true;
                }
              });

      

              // Districts
              districts.forEach(district => {
                if(district.name === property.district) {
                  districtExists = true;
                }
              });

              // Cities
              cities.forEach(city => {
                if(city.name === property.city) {
                  cityExists = true;
                }
              });

              // Let's initialize all the streets, districts, and cities for future use
              if(!propertyExists) {
                propertys.push({
                  street: property.street,
                  district: property.district,
                  city: property.city,
                  units: [],
                  streets: []
                })

              }

              if(!districtExists) {
                // Districts
                districts.push({
                  name: property.district,
                  city: property.city,
                  streets: []
                })
              }

              if(!cityExists) {
                // Cities
                cities.push({
                  name: property.city,
                  districts: []
                })
              }
            });


            // Now that we know the streets, go through each one and initialize props for each
            allUnits.forEach(property => {
              // Now go through all the propertys
              propertys.forEach(singleProperty => {
                // We have a street match
                if(singleProperty.street === property.street) {
                  
                  singleProperty.units.push(property);
                }
              })
            })



            // Now that we have all the property streets broken down, let's go through and divide them up
            propertys.forEach(property => {
              while(property.units.length) {
                property.streets.push(property.units.splice(0,this.neededPropertysForCompletion[property.city]['housesPerStreet']));
              }

              // Determine how many are complete and in progress
              property.streets.forEach(street => {
                if(street.length === this.neededPropertysForCompletion[street[0].city]['housesPerStreet']) {
                  
                  // Determine breakdown of districts
                  districts.forEach(district => {
                    if(district.name === property.district) {
                      district.streets.push(street)
                      district['city'] = property.city;
                    }
                  })
                  
                  }
              })
            })



            // FINALLY, let's create a breakdown of all districts and cities, based on what streets are owned
            districts.forEach(district => {
              if(district.streets.length === this.neededPropertysForCompletion[district.city]['streetsPerDistrict']) {
                
                // Determine breakdown of cities
                cities.forEach(city => {
                  if(city.name === district.city) {
                    city.districts.push(district);
                  }
                })
                
              }
            })


            // Finally return the total returned brix
            this.brixEarnedBreakdown.push({
              address,
              amount: this.getTotalEarnedBrix(propertys, districts, cities)
            });

            this.brixEarnedBreakdown.sort((a, b) => {
              return b.amount - a.amount
            })
        });

    
    }


    let limiter = new Bottleneck({
      minTime: 250,
    });

    let holdersThrottledData = await limiter.wrap(loadPropertys);
    this.addresses.replace(new RegExp("'", 'g'), '').split(',').forEach(async (address) => {
      await holdersThrottledData(address);
    });
  }

  async ngOnInit() {
    
     // Startup: Check metamask and populate accounts and then determine if any unis are in wallet
     await this.checkMetaMaskInstalled();

     // Make sure we're on the right chain
     await this.checkChain();

    //  this.calculateBrix();


     
 
 
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
  getTotalEarnedBrix(propertys, districts, cities) {

    let total = 0;
      if(propertys.length > 0) {
      propertys.forEach(property => {
        total += this.getEarnedBrixAmount('street', property.streets[0],);
      });
    }

    // Districts
    districts.forEach(district => {
      total += this.getEarnedBrixAmount('district', district);
    });

    // Cities
    cities.forEach(city => {
      total += this.getEarnedBrixAmount('city', city);
    });

    return total;
  }


  /**
   * Loads all the propertys for a wallet and then organizes the table breakdown
   */
  
}
