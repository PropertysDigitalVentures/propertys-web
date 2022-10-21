// @ts-nocheck
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SmartContractCoreService } from '../../services/smart-contract-core.service';
import { EventMessengerService } from '../../services/event-messenger.service';

@Component({
    selector: 'propertys-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
    showNavMobile: any = false;
    public accounts: any = [];
    public address: any = '';
    public isWalletSourceEnabled: any = false;
    public mintEnabled = false;

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
      var header = document.getElementById("header"); 
      var sticky = header.offsetTop + 15;

      toggleStickyHeader();
      function toggleStickyHeader() {
      	if (window.pageYOffset > sticky) {
      		header.classList.add("sticky");
      	} else {
      		header.classList.remove("sticky");
      	}
      }

    }
   
    constructor(
        private router: Router,
        public smartContractCoreService: SmartContractCoreService,
        public eventMessengerService: EventMessengerService,
    ) {
    }


    async ngOnInit() {
      // this.checkWalletSourceEnabled();
      // this.eventMessengerService.subscribe('accountsChanged', (event) => {
      //   this.accounts = event.data.accounts;
      //   this.checkWalletSourceEnabled();
      // });

      // this.eventMessengerService.subscribe('disconnect', (event: any) => {
      //   this.checkWalletSourceEnabled();
      // })

      // this.mintEnabled = this.smartContractCoreService.isMintingEnabled;
    }

    ngOnDestroy() {}


    /**
     *   Show/Hide mobile nav
     */
    toggleMobileNav(toggle?) {

      // Make sure this is false
      if(toggle !== undefined) {
        if(!toggle) {
          this.showNavMobile = false;
        }
      } else {
        this.showNavMobile = !this.showNavMobile;
      }
    }


    /**
     * Function to check if Metamask is installed
     */
    async checkWalletSourceEnabled() {
      if(this.smartContractCoreService.isMetaMaskInstalled()) {
        this.isWalletSourceEnabled = true;
        this.accounts = await this.smartContractCoreService.getWalletAccounts();
      } else {
        this.isWalletSourceEnabled = false;
      }
    }

    /**
     * Redirect people to install metamask if not enabled
     */
    public onboardWalletConnection() {
      this.smartContractCoreService.startOnboarding();
    }


    /**
     * Function to prompt Metamask to grab accounts for user
     */
    async connectWallet() {
      this.accounts = await this.smartContractCoreService.getWalletAccounts();
      this.address = this.formatWalletAddress();
    }


    /**
     * Utility function to actually turn the wallet address into something pretty
     */
    formatWalletAddress() {
      if(this.accounts.length > 0) {
        return `${this.accounts[0].substring(0, 4)}...${this.accounts[0].substring(this.accounts[0].length - 4)}`;
      }
    return '';
  }
}
