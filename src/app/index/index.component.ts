// @ts-nocheck
import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MintDialogComponent } from '../shared/dialogs/mint-dialog/mint-dialog.component';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { CarouselComponent } from "../shared/components/carousel/carousel.component";
import { EventMessengerService } from '../shared/services/event-messenger.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;
  @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {}

  public isReadMoreSections = {
    'about-us': true
  }

  public accounts = [];
  public houseFrameToShow = 0;
  public networkText = "Ethereum Mainnet";
  // Countdown
  public countdownTimer;
  public countdownDays: any = 0;
  public countdownHours: any = 0;
  public countdownMins: any = 0;
  public countdownSecs: any = 0;

  public isMetaMaskInstalled = true;
  public isOnMainnet = true;

  constructor(
    private _route: ActivatedRoute,
    public smartContractCoreService: SmartContractCoreService,
    public eventMessengerService: EventMessengerService,
    private _dialog: MatDialog,
  ) {}



  async ngOnInit() {

    // Show message test based on the environment
    // switch(environment.chainId) {
    //   case 1: 
    //     this.networkText = "Ethereum Mainnet";
    //   break;
    //   case 4:
    //     this.networkText = "Rinkeby Network";
    //   break;
    //   default: 
    //     this.networkText = "Ethereum Mainnet";
    //   break;
    // }

    // // this.animateCards();

    // // Initialize the countdown
    // this.countdownTimer = setInterval(() => {
		// 	this.updateCountdownTimer();
		// }, 1000);
		// this.updateCountdownTimer();

    // Determine which element to scroll to
    this._route.fragment.subscribe(fragment => {
			const element = document.querySelector(`#${fragment}`)
      setTimeout(() => {
        if (element) {

          var elementPosition = element.offsetTop;

          window.scrollTo({
            top: elementPosition - 60, //add your necessary value
            behavior: "smooth"  //Smooth transition to roll
          });
        }
       
      }, 0);
			
    }) 

    // // Startup: Check metamask and populate accounts and then determine if any unis are in wallet
    // await this.checkMetaMaskInstalled();

    // // Make sure we're on the right chain
    // await this.checkChain();


    // // Handle events when wallet accounts change
    // this.eventMessengerService.subscribe('accountsChanged', async (event) => {
    //   let { accounts } = event.data;
    //   this.accounts = accounts;
    //   await this.checkChain();
    // });

    // // Handle events when wallet accounts get disconnectd
    // this.eventMessengerService.subscribe('disconnect', async (event: any) => {
    //   let { accounts } = event.data;
    //   this.accounts = accounts;
    //   await this.checkChain();
    // })
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
	 *	Open the minting dialog
	 */
   public openMintDialog(e) {
      e.stopPropagation();
      e.preventDefault();
      this._dialog.open(MintDialogComponent, {
          width: '630px',
          data: {
      accounts: this.accounts
    }
      });
  }

  ngOnDestroy() {
    clearInterval(this.countdownTimer);
  }


  /**
   * Toggle read more/less section
   */
  toggleReadMore(section) {
    this.isReadMoreSections[section] = !this.isReadMoreSections[section];
  }

  /**
	 * Simple countdown timer function. End date is set for private sale
	 */
	public updateCountdownTimer() {
		let endDate = 1639148400000; // Update this with the end time in milliseconds
		let now = Date.now()
		let t = endDate - now;
		
		if (t >= 0) {
		
			this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
		} 
	}
}
