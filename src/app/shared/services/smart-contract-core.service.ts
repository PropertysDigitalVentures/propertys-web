// @ts-nocheck
import {Injectable} from '@angular/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import { ethers, BigNumber } from "ethers";
import { EventMessengerService } from './event-messenger.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, zip, of } from "rxjs";
import { switchMap, catchError, tap, map } from "rxjs/operators";
import Moralis from "moralis";

// Contracts
import coreContract from '../../../contracts/PropertysCore.json';

Moralis.start({ serverUrl:environment.moralisServerUrl, appId: environment.moralisAppId });

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class SmartContractCoreService {
    public isMintingEnabled = true;
    public contractABI: any = coreContract.abi;
    public contractAddress = coreContract.address;
    public signer: any;
    public provider: any;
    
    constructor(
        public eventMessengerService: EventMessengerService,
        private http: HttpClient,
    ) {

        // Check if Ethereum is enabled via metamask or some other provider
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {

            // A Web3Provider wraps a standard Web3 provider, which is
            // what Metamask injects as window.ethereum into each page
            this.provider = new ethers.providers.Web3Provider(window.ethereum)

            // The Metamask plugin also allows signing transactions to
            // send ether and pay to change state within the blockchain.
            // For this, you need the account signer...
            this.signer = this.provider.getSigner()

            window.ethereum.on('accountsChanged', (accounts: any) => {
                this.eventMessengerService.broadcast({
                    name: 'accountsChanged',
                    data: { accounts }
                })
            });

            window.ethereum.on('chainChanged', (chainId: any) => {  
                window.location.reload();
            })

            window.ethereum.on('disconnect', (error: any) => {  
                this.eventMessengerService.broadcast({
                    name: 'disconnect',
                })
            })
        }
    }


  
    /**
     * Get price of token, based on sale status
     */
    async public getPrice(mintType, tier?) {
        const contract = await this.createContract();
        let price = 0;
        
        if(mintType === 'presale') {
            price = await contract.getWhitelistPrice(tier);
        } else if(mintType === 'partner') {
            price = await contract.PARTNER_SALE_PRICE();
        } else if(mintType === 'public') {
            price = await contract.LAUNCH_PRICE();
        }

        price = ethers.utils.formatEther(price._hex);
        return price;
    }


    /**
     * Get the open time for the private sale
     */
    public async getPrivateSaleStartTime() {
        const contract = await this.createContract();
        return contract.PRIVATE_SALE_START();
    }

    
    /**
     * Get the open time for the public sale
     */
    public async getPublicSaleStartTime() {
        const contract = await this.createContract();
        return contract.PUBLIC_SALE_START();
    }


    /**
     * Get the wallet accounts from the metamask wallet
     */
    public async  getWalletAccounts() {
        try {
            return await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch(error) {
            return [];
        }
    }


    /**
     * Since Metamask returns a weird error that doesn't confirm to any real standard,
     * we're just going to convert it to a string and pull out the valuable error message part
     * and not any of the gobbly gook like random string characters.
     */
    public createErrorMsg(error) {
        if(error && error.message) {
            if(error.message.match(/execution reverted: PropertyNFT: /)) {
                let errorText = error.message.match(/{([^}]*)}}}/)[0];
                let errorObject = JSON.parse(errorText);
                errorObject.message = errorObject.message.replace(/execution reverted: PropertyNFT: /, '')
                return errorObject.message;
            } else if(error.message.match(/code=INSUFFICIENT_FUNDS/)) {
                return 'You have insufficient funds in this wallet';
            } else {
                return error.message;
            }
            
        } else {
            let text = error.toString();
            let errorText = text.match(/{([^}]*)}}}/)[0];
            let errorObject = JSON.parse(errorText);
            errorObject.message = errorObject.message.replace(/execution reverted: PropertyNFT: /, '')
            return errorObject.message;
        }
        
    }


    /**
     * Function to determine white list status for address
     */
    public async getPresaleWhitelistStatusForAddress(address) {
        // Get the auth token
        let authToken = await this.getAuthToken();

        let headers = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${authToken}`)
        }

        let result = await this.http.get(`${environment.apiUrl}/whitelist/info/${address}`, headers).toPromise();

        return result;
    }


    /**
     * Function to determine white list status for address
     */
     public async getPartnerWhitelistStatusForAddress(address) {
        // Get the auth token
        let authToken = await this.getAuthToken();

        let headers = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${authToken}`)
        }

        let result = await this.http.get(`${environment.apiUrl}/whitelistpartners/info/${address}`, headers).toPromise();

        return result;
    }


    /**
     * Get the signature and nonce for address and tier which will be used to sign the minting correctly
     */
    public async getPresaleWhitelistSignature(address, tier, amount) {

        let authToken = await this.getAuthToken();
        
        let headers = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${authToken}`)
        }

        let signature = await this.http.get(`${environment.apiUrl}/whitelist/sign?address=${address}&tier=${tier}&amount=${amount}`, headers ).toPromise();
        return signature
    }


    /**
     * Get the signature and nonce for address and tier which will be used to sign the minting correctly
     */
     public async getPartnerWhitelistSignature(address) {

        let authToken = await this.getAuthToken();
        
        let headers = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${authToken}`)
        }

        let signature = await this.http.get(`${environment.apiUrl}/whitelist/signparter?address=${address}`, headers ).toPromise();
        return signature
    }


    /**
     * Get User's balance
     */
    public async getBalance() {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            const accounts = await this.getWalletAccounts();
            const balance = await this.provider.getBalance(accounts[0]);
            let formattedBalance =  ethers.utils.formatEther(balance.toString()).match(/^-?\d+(?:\.\d{0,3})?/)[0];
            return formattedBalance;
            
        } else {
            return 0;
        }
    }

    /**
     *  Get the total supply 
     */
    public async getTotalMintedSupply() {
        const contract = await this.createContract();
        return contract.totalSupply();
    }

    /**
     *  Check if window for private sale is open
     */
    public async isPresaleOpen() {
        const contract = await this.createContract();
        return contract.isPresaleOpen();
    }


    /**
     * Generate Auth token for calling external U_U API
     */
     public async getAuthToken() {
        // let authToken = localStorage.getItem('propertys-auth');
        // if(authToken) {
        //     return authToken;
        // } else {
        //     let result = await this.http.get(`${environment.netlifyFnServer}get-bearer-token`).toPromise();
        //     localStorage.setItem('propertys-auth', result.access_token);
        //     authToken = result.access_token;
        //     return authToken;
        // }
        let result = await this.http.get(`${environment.netlifyFnServer}get-bearer-token`).toPromise();
        let authToken = result.access_token;
        return authToken;
    }
    

    /**
     *  Check if window for public sale is open
     */
    public async isPublicSaleOpen() {
        const contract = await this.createContract();
        return contract.isPublicSaleOpen();
    }

    /**
     *  Check to see if metamask is installed
     */
    public isMetaMaskInstalled() {
        return MetaMaskOnboarding.isMetaMaskInstalled();
    };


    /**
     * Get remaining private mints
     */
    public async getRemainingPrivateSaleMints(address) {
        const contract = await this.createContract();
        let amount = await contract.privateSaleMintCount(address);
        return parseInt(amount.toString());
    }


    /**
     * Check if partner is minted
     */
    public async isPartnerMinted(address) {
        const contract = await this.createContract();
        let isMinted = contract.whitelistedPartners(address)
        return isMinted;
        
    }


    /**
     *  Show appropriate redirect to metamask
     */
    public startOnboarding() {
        let onboarding = new MetaMaskOnboarding;
        onboarding.startOnboarding();
    }


    /**
    * 	Function to mint the Propertys
    */
     public async mint(quantity: any, mintType: any) {

        // Get elibigility for user
        const accounts = await this.getWalletAccounts();
        
        // Prevent failed transactions due to gas prices being inaccurate
        // - Do this by adding in a slightly higher buffer
        const addGasLimitBuffer = (value) => {
            let gasBuffer = value.mul(BigNumber.from(10000 + 2000)).div(BigNumber.from(10000))
            return gasBuffer;
        }
        
        // Create contract to call functions
        const contract = await this.createContract();
        
        // Presale MINTING
        if(mintType === 'presale') {
            let presaleWhitelist = await this.getPresaleWhitelistStatusForAddress(accounts[0]);
            let signature = await this.getPresaleWhitelistSignature(presaleWhitelist.data.results.address, presaleWhitelist.data.results.tier, quantity);
            let tier = presaleWhitelist.data.results.tier;

            // Get price for tier
            const price = await this.getPrice(mintType, tier);
            const parsedPrice = ethers.utils.parseEther(price);

            // Get the gas
            let gasEstimate;
            gasEstimate = await contract.estimateGas.presaleMint(quantity, presaleWhitelist.data.results.tier, signature.data.nonce, signature.data.signature, { value: parsedPrice.mul(String(quantity)) })
            return contract.presaleMint( quantity, presaleWhitelist.data.results.tier, signature.data.nonce, signature.data.signature, { value: parsedPrice.mul(String(quantity)), gasLimit: addGasLimitBuffer(gasEstimate) })

        // PARTNER MINTING            
        } else if(mintType === 'partner') {

            // Authorizing smart contract call
            let partnerWhitelist = await this.getPartnerWhitelistStatusForAddress(accounts[0]);
            let signature = await this.getPartnerWhitelistSignature(partnerWhitelist.data.results.address);

            // Initial price for mint type
            const price = await this.getPrice(mintType);
            const parsedPrice = ethers.utils.parseEther(price);
            
            // Gas Estimates
            let gasEstimate;
            gasEstimate = await contract.estimateGas.partnerMint(signature.data.nonce, signature.data.signature,{ value: parsedPrice.mul(String(1)) })

            
            return contract.partnerMint(signature.data.nonce, signature.data.signature, { value: parsedPrice.mul(String(1)), gasLimit: addGasLimitBuffer(gasEstimate) })

        // PUBLIC MINTING
        } else if(mintType === 'public') {

            const price = await this.getPrice(mintType);
            const parsedPrice = ethers.utils.parseEther(price);
            let gasEstimate;
    
            gasEstimate = await contract.estimateGas.publicMint(quantity, { value: parsedPrice.mul(String(quantity)) })
            return contract.publicMint(quantity, { value: parsedPrice.mul(String(quantity)), gasLimit: addGasLimitBuffer(gasEstimate) })   
        }
    }

    async getNFTOwners(params?) {
        const options = {
            chain:'eth',
            address: this.contractAddress,
            limit: params['limit'] || 500,
            offset: params['offset'] || 0
        };
        return await Moralis.Web3API.token.getNFTOwners(options);
    }


    /**
     * Function to get all NFTs for a wallet address
     */
     getNFTsFromAddress(address) {
        // This code is what grabs the NFT data from the blockchain
        const options = {
            chain:'eth',
            token_address: this.contractAddress,
            address,
        };
        return from(Moralis.Web3API.account.getNFTsForContract(options)).pipe(
            switchMap(async (data) => {

                // Limited to 30
                // Create multiple sets of max 30 to ensure compliance with OpenSea API Limits
                let querySets = [];
                const queryLimit = 20;
                while(data.result.length) {
                    querySets.push(data.result.splice(0,queryLimit));
                }

                // Iterate over all tokens and create string to get data from Opensea
                let propertySetTokenIds = querySets.map(set => {
                    return set.map(propertySet => {
                        return propertySet.token_id;
                    })
                })

                // Create an array of promises, based on the data sets and query limit of Opensea
                let tokenSetPromises = propertySetTokenIds.map(async tokenIds => {
                    let urlString = `https://api.opensea.io/api/v1/assets?&asset_contract_address=${this.contractAddress}&`;

                    tokenIds.forEach((id, i) => {
                        urlString += `token_ids=${id}&`;
                    })

    
                    // Call HTTP Request to get data from Opensea
                    let tokenData = await this.http.get(urlString).toPromise()
    
                    // Return the assets
                    return tokenData;
                });
                
                let promisesRes = await Promise.all(tokenSetPromises);
                let nftData = promisesRes.map(set => {
                    return set.assets;
                })

                return nftData.flat();
               

                // NOTE TODO: Uncomment this code if we want to use Moralis again
                // let { result } = data;

                // if (result.length === 0) {
                //     return of([]);
                // }

                // const nftResults = result.map((nft) => {
                //     if (nft["metadata"] !== null) {
                //         let nftMetadata = JSON.parse(
                //             nft.metadata.replace(/(\r\n|\n|\r)/gm, "")
                //         );

                //         console.log('metadata?', nftMetadata)
                //         nft["traits"] = {};
                //         nft["token_id"] = nft.token_id;
                //         nft["name"] = nftMetadata.name;
                //         nft["image"] = nftMetadata.image;

                //         nft["name"] = `#${nft["name"].split("#").pop()}`;

                //         // Reformat the attributes in a readable way
                //         for (let key in nftMetadata.attributes) {
                //             nft["traits"][
                //                 nftMetadata.attributes[key].trait_type
                //             ] = nftMetadata.attributes[key].value;
                //         }

                //         return of(nft);
                //     } else {
                //         if (nft.token_uri) {
                //             return this.http.get(nft.token_uri).pipe(
                //                 switchMap((propertyData) => {
                //                     nft["traits"] = {};
                //                     nft["token_id"] = nft.token_id;
                //                     nft["name"] = propertyData.name;
                //                     nft["image"] = propertyData.image;

                //                     // Reformat the attributes in a readable way

                //                     nft["name"] = `#${nft["name"]
                //                         .split("#")
                //                         .pop()}`;

                //                     // Reformat the attributes in a readable way
                //                     for (let key in propertyData.attributes) {
                //                         nft["traits"][
                //                             propertyData.attributes[
                //                                 key
                //                             ].trait_type
                //                         ] = propertyData.attributes[key].value;
                //                     }
                //                 })
                //             );
                //         } else {
                //             nft["traits"] = {};
                //             nft["token_id"] = nft.token_id;

                //             // Reformat the attributes in a readable way

                //             nft["name"] = `#${nft.token_id}`;
                //             return of(nft);
                //         }
                //     }
                // });

                return zip(...nftResults).pipe(
                    tap((nftData) => {
             
                    }),
                    catchError((error) => {
                        return of({});
                    })
                );
            })
        );
    }


    /**
     * Function to create a contract based on address, abi, and signer
     */
     public async createContract() {
        return new ethers.Contract(
            this.contractAddress,
            this.contractABI,
            this.signer
        )
    }
}
