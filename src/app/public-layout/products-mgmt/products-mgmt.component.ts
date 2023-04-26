// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ethers } from 'ethers';

import abi from '../../../contracts/PropertiesXyzMarket.json'
import abi721 from '../../../contracts/ERC721.json'
import abi1155 from '../../../contracts/ERC1155.json'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-products-mgmt',
  templateUrl: './products-mgmt.component.html',
  styleUrls: ['./products-mgmt.component.scss']
})
export class ProductsMgmtComponent {
  public searchTerm: any = '';
  public productlist = []
  public soldList = []

  constructor(
    private route: ActivatedRoute,
    private _dialog: MatDialog,
  ) {}

  

  async ngOnInit() {
    this.route.params.subscribe(async params => {

    });

    this.productlist = []
    this.soldList = []

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, provider)

    // fetch items on sale
    let onsale
    onsale = await contract.fetchAllItems()
    let productcounter = onsale.length

    for(let i = 0; i < Number(productcounter); i++) {
      let nftcontract
      let tokenuri
      let nftdata
      if(Number(onsale[i].standard == 1)) {
        nftcontract = new ethers.Contract(onsale[i].nftContract, abi721.abi, provider)
        tokenuri = await nftcontract.tokenURI(onsale[i].tokenId.toString())
      }
      if(Number(onsale[i].standard == 2)) {
        nftcontract = new ethers.Contract(onsale[i].nftContract, abi1155.abi, provider)
        tokenuri = await nftcontract.uri(onsale[i].tokenId.toString())
      }
      
      let uri = tokenuri[5].split("//", 2)
      let newURI = "https://ipfs.io/ipfs/" + uri[1]

      let jsondata = await axios.get(tokenuri)
      let maxSupply = onsale[i].amount.toString()
      // let counter = data[2].toString()
      let priceBrix = ethers.utils.formatUnits(onsale[i].priceBRIX.toString().toString().toString(), 'ether')
      let priceUsd = ethers.utils.formatUnits(onsale[i].priceUSDC.toString().toString(), 'ether')

      /*
      let priceETH = await contract.convert(3, onsale[i].priceUSDC)
      let priceMatic = await contract.convert(4, onsale[i].priceUSDC)
      */
     let priceETH = 0
     let priceMatic = 0

      let soldout = false
      if(onsale[i].sold) {
        soldout = true
      }

      if(onsale[i].reverted)  {
        continue
      }

      // show as unlimited if large max
      if(Number(onsale[i].amount.toString()) >= 10000000000000000000000000) {
        maxSupply = "unlimited"
      } else {
        maxSupply = maxSupply.toString()
      }

      let item = {
        itemId: onsale[i].itemId.toString(),
        contract: onsale[i].nftContract.toString(),
        tokenId: onsale[i].tokenId.toString(),
        name: jsondata.data.name,
        image: jsondata.data.image,
        maxSupply : maxSupply,
        //counter: counter,
        priceBrix: priceBrix,
        idBrixp: "brix" + onsale[i].itemId.toString(),
        priceUsd: priceUsd,
        idUsdp: "usd" + onsale[i].itemId.toString(), 
        soldout: soldout,
        image: jsondata.data.image,

      }
      if(onsale[i].sold) {
        this.soldList.push(item)
      } else {
        this.productlist.push(item)
      }
    }
  }

  async createProduct() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)
    // verify data
    let contractAdr = document.getElementById("inputContract").value.toString()
    let tokenId = document.getElementById("inputTokenId").value
    let amount = document.getElementById("inputAmount").value
    let pricebrix = document.getElementById("inputbrix").value
    let priceusd = document.getElementById("inputusd").value
    let standard = document.getElementById("inputStandard").value

    pricebrix = ethers.utils.parseUnits(pricebrix, 'ether')
    priceusd = ethers.utils.parseUnits(priceusd, 'ether')
    let addbtn = document.getElementById("addbtn")

    try {
      const transaction = await contract.createMarketItem(contractAdr, tokenId, pricebrix, priceusd, standard, amount)
      addbtn.value = "Pending..."
      await transaction.wait()
      this.ngOnInit()
      addbtn.value = "Approve Contract"

      } catch(e) {
          
          console.log(e)
      } 
  }

  async updBrix(itemId) {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let id = "brix" + itemId.toString()
    let newPrice = document.getElementById(id).value

    newPrice = ethers.utils.parseUnits(newPrice, 'ether')

    try {
      const transaction = await contract.updBRIXprice(itemId, newPrice)
      } catch(e) {
          console.log(e)
      } 

  }

  async updUsd(itemId) {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let id = "usd" + itemId.toString()
    let newPrice = document.getElementById(id).value

    newPrice = ethers.utils.parseUnits(newPrice, 'ether')

    try {
      const transaction = await contract.updUSDprice(itemId, newPrice)
      } catch(e) {
          console.log(e)
      } 

  }

  async revert(itemId) {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)
    try {
      const transaction = await contract.revertMarketItem(itemId)
      } catch(e) {
          console.log(e)
      } 
  }


  async checkApproval() {
    let cntAddress = document.getElementById("inputContract").value
    document.getElementById("notvalid")?.classList.add("hidden")
    document.getElementById("notvalidSt")?.classList.add("hidden")
    let standard = document.getElementById("inputStandard").value
    if(ethers.utils.isAddress(cntAddress)) {
      if(standard == 1 || standard == 2) {
        
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
    
        const signer = provider.getSigner()
        const address = await signer.getAddress() 
        let approval
        let contract

        if(standard == 1) {
           contract = new ethers.Contract(cntAddress, abi721.abi, signer)
        } else if(standard == 2) {
          console.log("hey")
          contract = new ethers.Contract(cntAddress, abi1155.abi, signer)
        }

        try {
          approval = await contract.isApprovedForAll(address, environment.marketaddress)
        } catch(e) {
          console.log(e)
        }
        
        if(approval) {
          document.getElementById("approveBtn")?.classList.add("hidden")
          document.getElementById("addbtn")?.classList.remove("hidden")
        } else {
          document.getElementById("approveBtn")?.classList.remove("hidden")
          document.getElementById("addbtn")?.classList.add("hidden")
        }
        
      } else {
        document.getElementById("notvalidSt")?.classList.remove("hidden")
      }
      
    } else {
      document.getElementById("notvalid")?.classList.remove("hidden")
    }
    
  }

  async approveContract() {
    let cntAddress = document.getElementById("inputContract").value
    let standard = document.getElementById("inputStandard").value

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    let contract
    let approval
    
    if(standard == 1) {
      contract = new ethers.Contract(cntAddress, abi721.abi, signer)
    } else if(standard == 2) {
      contract = new ethers.Contract(cntAddress, abi1155.abi, signer)
    }

    try {
      
      approval = await contract.setApprovalForAll(environment.marketaddress, true)
      
      document.getElementById("approveBtn").value = "Pending..."
      await approval.wait()
      this.checkApproval()
      document.getElementById("approveBtn").value = "Approve Contract"

    } catch(e) {
      
    }
    }

  /**
   * Buy button
   */
  buy(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('purchase');
  }

  toggleFavorite() {

  }


}
