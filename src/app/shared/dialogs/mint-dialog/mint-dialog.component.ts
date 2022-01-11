// @ts-nocheck
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SmartContractCoreService} from '../../services/smart-contract-core.service';
import {EventMessengerService} from '../../services/event-messenger.service';

@Component({
    selector: 'mint-dialog',
    templateUrl: './mint-dialog.component.html',
    styleUrls: ['./mint-dialog.component.scss']
})
export class MintDialogComponent {

    // Minting related
    public isMinting = false;
    public isPresaleMinting = false;
    public isPartnerMinting = false;
    public isPartnerMinted = false;
    public publicSaleStartTime = 0;
    public privateSaleStartTime = 0;
    public mintAmount = 1;
    public mintableHouses = [];
    public totalMinted: any = 0;
    public mintingStage: any = {
        presale: false,
        partner: false,
        public: false
    };
    public partnerSalePriceText = 0;
    public publicSalePriceText = 0;
    public presalePriceText = 0;
    public presaleWhitelisted = null;
    public partnerWhitelisted = null;

    public contentLoaded = false;
    
    // Countdown
    public countdownTimer;
    public countdownTime = 0;
    public countdownDays: any = 0;
    public countdownHours: any = 0;
    public countdownMins: any = 0;
    public countdownSecs: any = 0;

    // Account stuff
    public accounts: any = [];
    public saleWindowTimerInterval: any;
    public isEligible = false;
    public presaleTier = {
        tier: 0,
        mintAmount: 0
    }

    // Minting eligibility
    isPresaleEligible = false;
    isPartnerEligible = false;
    partnerMintEnabled = false;
    presaleMintEnabled = false;
    publicMintEnabled = false;
   
    constructor(
        @Inject(MAT_DIALOG_DATA) public _data: any,
        public dialogRef: MatDialogRef<MintDialogComponent>,
        public smartContractCoreService: SmartContractCoreService,
        public eventMessengerService: EventMessengerService
    ) {
        this.accounts = _data.accounts;
    }

    ngOnDestroy() {
        clearInterval(this.countdownTimer);
    }

    public async ngOnInit() {

        // Setup the start date for the public sale
        // this.publicSaleStartTime = await this.smartContractCoreService.getPublicSaleStartTime();
        // this.publicSaleStartTime = parseInt(this.publicSaleStartTime._hex, 16) * 1000;
        this.privateSaleStartTime = await this.smartContractCoreService.getPrivateSaleStartTime();
        this.privateSaleStartTime = parseInt(this.privateSaleStartTime._hex, 16) * 1000;
        
        this.countdownTimer = setInterval(() => {
			this.updateCountdownTimer();
		}, 1000);
		this.updateCountdownTimer();

        // Build the houses
        this.buildHouses();

        // We need to get all the tier amounts and all that from the presale/partnerships
        // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
        // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);

        // Get all the wallet information
        await this.handleWalletAccounts();

         // Initiate price sale text
         await this.initiateSalePrices()

        // Handle changing account
        this.eventMessengerService.subscribe('accountsChanged', async (event: any) => {
            this.accounts = event.data.accounts;
            // this.presaleWhitelisted = await this.smartContractCoreService.getPresaleWhitelistStatusForAddress(this.accounts[0]);
            // this.partnerWhitelisted = await this.smartContractCoreService.getPartnerWhitelistStatusForAddress(this.accounts[0]);

            // Get all the wallet information
            await this.handleWalletAccounts();

            // Initiate price sale text
            await this.initiateSalePrices()
        })

        // Handle disconnecting all metamask services
        this.eventMessengerService.subscribe('disconnect', (event: any) => {
            this.dialogRef.close();
        })
        
        // Get all the tokens that have already been minted
        this.smartContractCoreService.getTotalMintedSupply().then(async (tx: any) => {
            this.totalMinted = parseInt(tx._hex, 16).toLocaleString('en');
        }).catch((error) => {});
    }


    /**
     * Handle wallet accounts
     */
     public async handleWalletAccounts() {
        if(this.accounts.length == 0) {
            this.dialogRef.close();
        } else {

            clearInterval(this.saleWindowTimerInterval);
            this.saleWindowTimerInterval = setInterval(async () => {
                await this.setWalletEligibility();
            }, 10000);

           await  this.setWalletEligibility();
           
        }
    }


    /**
     * Determine wallet eligibility
     * Note: This will update buttons and stuff
     */
     async setWalletEligibility() {
        const isPresaleOpen = await this.smartContractCoreService.isPresaleOpen();
        const isPublicSaleOpen = await this.smartContractCoreService.isPublicSaleOpen();

        this.isPartnerMinted = await this.smartContractCoreService.isPartnerMinted(this.accounts[0]);

        let remainingMints = 0;
        if(this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
            if(this.presaleWhitelisted.data.results.tier > 0) {
                remainingMints = await this.smartContractCoreService.getRemainingPrivateSaleMints(this.accounts[0])

                // Check user eligibility
                this.presaleTier.tier = this.presaleWhitelisted.data.results.tier;
                this.presaleTier.mintAmount = this.presaleWhitelisted.data.results.tier - remainingMints;
            } else {
                this.presaleTier.tier = 0;
                this.presaleTier.mintAmount = 0;
            }
        }
        
        

        if(isPresaleOpen) {
            

            // Private sale whitelists
            if(this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                if(this.presaleWhitelisted.data.results.tier > 0) {
                    this.presaleMintEligible = true;
                    this.presaleMintEnabled = true;
                }
            } else {
                this.presaleMintEligible = false;
                this.presaleMintEnabled = false;
                this.mintingStage['presale'] = false;
            }

            // Partnerships eligibility
            if(this.parnterWhitelisted && this.partnerWhitelisted['data']['results']) {
                if(this.partnerWhitelisted.data.results.address) {
                    this.partnerMintEligible = true;
                    this.partnerMintEnabled = true;
                }
            } else {
                this.partnerMintEligible = false;
                this.partnerMintEnabled = false;
                this.mintingStage['partner'] = false;
            }


            this.mintingStage['presale'] = true;
            this.mintingStage['partner'] = true;
            this.mintingStage['public'] = false;

        } else if(isPublicSaleOpen) {
            this.mintingStage['presale'] = false;
            this.mintingStage['partner'] = false;
            this.mintingStage['public'] = true;

            this.publicMintEnabled = true;
        } else {
            this.mintingStage['presale'] = false;
            this.mintingStage['partner'] = false;
            this.mintingStage['public'] = false;
            
            this.partnerMintEnabled = false;
            this.presaleMintEnabled = false;
        }

        this.contentLoaded = true;
    }


    /**
     * Initiate sale prices
     */
    public async initiateSalePrices() {

        if(this.presaleMintEnabled) {
            if(this.presaleWhitelisted && this.presaleWhitelisted['data']['results']) {
                this.presalePriceText = await this.smartContractCoreService.getPrice('presale', this.presaleWhitelisted.data.results.tier);
            }
        }
        this.partnerSalePriceText = await this.smartContractCoreService.getPrice('partner');
        this.publicSalePriceText = await this.smartContractCoreService.getPrice('public');
    }


    /**
	 * Simple countdown timer function. End date is set for private sale
	 */
	public updateCountdownTimer() {
		let endDate = this.privateSaleStartTime; // Update this with the end time in milliseconds
		let now = Date.now()
		let t = endDate - now;
		
		if (t >= 0) {
            this.countdownTime = t;
			this.countdownDays = Math.floor(t / (1000 * 60 * 60 * 24));
			this.countdownHours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.countdownMins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			this.countdownSecs = Math.floor((t % (1000 * 60)) / 1000);
		} else {
            this.countdownTime = 0;
        }
	}
    

    /**
     * Show the houses that represent how many a user can mint
     */
    public buildHouses() {
        // Adjust house
        this.mintableHouses = [];
        for(let i = 0; i < this.mintAmount; i++) {
            this.mintableHouses.push({
                index: i
            })
        }
    }


    /**
     *  Closes the dialog
     */
    close() {
        this.dialogRef.close();
    }


    /**
	 * Handle the slider for purchasing unicorns
	 */
    public async handleMintAmountSlider(e: any) {
        this.mintAmount = e.target.value;

        // Build houses
        this.buildHouses();
    }


    /**
     * Mint functionality for button
     */
    public async mint(mintType: any) {
        if(mintType === 'presale') {
            this.isPresaleMinting = true;
        } else if(mintType === 'partner') {
            this.isPartnerMinting = true;
        } else if(mintType === 'public') {
            this.isMinting = true;
        }
        this.smartContractCoreService.mint(this.mintAmount, mintType)
        .then(async (tx: any) => {
            tx.wait().then((success: any) => {
                if(mintType === 'partner') {
                    
                } else {
                    const grammar = this.mintAmount == 1 ? '' : 's';
                   
                }
                
                this.dialogRef.close();
            });
        })
        .catch((error: any) => {
            
            let errorMsg = this.smartContractCoreService.createErrorMsg(error);

            // Show an error 
            this.isMinting = false;
            this.isPartnerMinting = false;
            this.isPresaleMinting = false;
        });
    }
}
