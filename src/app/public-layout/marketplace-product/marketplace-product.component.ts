// @ts-nocheck
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ethers } from 'ethers';

import abi from '../../../contracts/PropertiesXyzMarket.json'
import abi721 from '../../../contracts/ERC721.json'
import abi1155 from '../../../contracts/ERC1155.json'
import erc20 from '../../../contracts/ERC20.json'
import { environment } from '../../../environments/environment';
import { OnCyberWallet, SandboxWallet } from '../../../contracts/sellers.json'

@Component({
  selector: 'app-marketplace-product',
  templateUrl: './marketplace-product.component.html',
  styleUrls: ['./marketplace-product.component.scss']
})
export class MarketplaceProductComponent {
  public searchTerm: any = '';
  constructor(
    private route: ActivatedRoute,
    private _dialog: MatDialog,
  ) {}

  public items = []
  public currency = 0
  public amount = 1
  public productId

  public disOncyber = false
  public disSandbox = false

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.productId = params.productId;

      this.items = []

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
  
      const signer = provider.getSigner()
      const address = await signer.getAddress() 
      
      const contract = new ethers.Contract(environment.marketaddress, abi.abi, provider)

      let data = await contract.getMarketItem(params.productId.toString())

      if(!data.sold) {
        let nftcontract
        let tokenuri
        if(Number(data.standard == 1)) {
          nftcontract = new ethers.Contract(data.nftContract, abi721.abi, provider)
          tokenuri = await nftcontract.tokenURI(data.tokenId.toString())
        }
        if(Number(data.standard == 2)) {
          nftcontract = new ethers.Contract(data.nftContract, abi1155.abi, provider)
          tokenuri = await nftcontract.uri(data.tokenId.toString())
        }

        let jsondata = await axios.get(tokenuri)
        let maxSupply = data.amount.toString()
        // let counter = data[2].toString()
        let priceBrix = ethers.utils.formatUnits(data.priceBRIX.toString().toString().toString(), 'ether')
        let priceUsd = ethers.utils.formatUnits(data.priceUSDC.toString().toString(), 'ether')

        let priceETH = await contract.convert(3, data.priceUSDC)
        let priceMatic = await contract.convert(4, data.priceUSDC)

        let soldout = false
        if(data.sold) {
          soldout = true
        }

        let contractToPrint = environment.marketaddress.substr(0,4) +"..." + environment.marketaddress.substr(38,42)

        let eth = ethers.utils.formatUnits(priceETH.toString().toString(), 'ether')
        eth = Number(eth).toFixed(8)
        let matic = ethers.utils.formatUnits(priceMatic.toString().toString(), 'ether')
        matic = Number(matic).toFixed(8)
    
        let item = {
          itemId: data.itemId.toString(),
          tokenId: data.tokenId.toString(),
          name: jsondata.data.name,
          image: jsondata.data.image,
          maxSupply : maxSupply,
          //counter: counter,
          priceBrix: priceBrix,
          priceUsd: priceUsd,
          priceEth: eth,
          priceMatic: matic,    
          soldout: soldout,
          description: jsondata.data.description,
          contPrint: contractToPrint,
          etherurl: "https://polygonscan.com/address/" + environment.marketaddress,
          selectedPrice: priceBrix,
          seller: data.seller.toString()
        }

        
        if(data.seller.toString() == OnCyberWallet) {
          this.disOncyber = true
        }

        if(data.seller.toString() == SandboxWallet) {
          this.disSandbox = true
        }

        this.items.push(item)

        this.selectCurrency(1)
      } else {
        location.replace("/marketplace")
      }
      
    });

    
  }

  switchAmount() {
    let value = document.getElementById("amount")?.value
    let topayer = document.getElementById("topay")
    let price = 0

    switch(Number(this.currency)) {
      case 1: price = this.items[0].priceBrix * value; break;
      case 4: price = this.items[0].priceUsd * value; break;
      case 3: price = this.items[0].priceEth * value; break;
      case 2: price = this.items[0].priceMatic * value; break;
    }

    console.log(price)

    this.items[0].selectedPrice = price
  }

  async selectCurrency(curr) {
    // let curr = document.getElementById("currencies")
    try {
      this.currency = curr
    } catch(e) {
      this.currency = 1
    }


    let topay = document.getElementById("topay")
    let price = 0

    switch(Number(this.currency)) {
      case 1: price = this.items[0].priceBrix; break;
      case 4: price = this.items[0].priceUsd; break;
      case 3: price = this.items[0].priceEth; break;
      case 2: price = this.items[0].priceMatic; break;
    }

    let am = document.getElementById("amount")
    try{
      this.amount = am.value
    } catch(e) {
      this.amount = 1
    }

    let final = price * this.amount
    switch(Number(this.currency)) {
      case 1: topay?.innerHTML = final; break;
      case 4: topay?.innerHTML = final; break;
      case 3: topay?.innerHTML = final; break;
      case 2: topay?.innerHTML = final; break;
    }

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    let contract

    let matic = false;
    switch(Number(this.currency)) {
      case 1: contract = new ethers.Contract(environment.brixaddress, erc20.abi, provider); break;
      case 4: contract = new ethers.Contract(environment.usdcaddress, erc20.abi, provider); break;
      case 3: contract = new ethers.Contract(environment.wethaddress, erc20.abi, provider); final = final * 1.02; break;
      case 2: matic = true; break;
    }
    if(!matic) {
      let allowed = await contract.allowance(address, environment.marketaddress)
      if(Number(allowed) < final) {
        document.getElementById("buyBtn")?.classList.add("hidden")
        document.getElementById("approveBtn")?.classList.remove("hidden")
        document.getElementById("approveBtn")?.innerHTML = "Approve "
      } else {
        document.getElementById("buyBtn")?.classList.remove("hidden")
        document.getElementById("approveBtn")?.classList.add("hidden")
      }

    } else {
      document.getElementById("buyBtn")?.classList.remove("hidden")
      document.getElementById("approveBtn")?.classList.add("hidden")
    }
  }
  
  /**
   * Approval Button
   */
  async approve() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    let contract
    let approveBtn = document.getElementById("approveBtn")
    
    switch(Number(this.currency)) {
      case 1: contract = new ethers.Contract(environment.brixaddress, erc20.abi, signer); break;
      case 4: contract = new ethers.Contract(environment.usdcaddress, erc20.abi, signer); break;
      case 3: contract = new ethers.Contract(environment.wethaddress, erc20.abi, signer); break;
    }

    let toapprove = document.getElementById("topay")?.innerHTML
    
    toapprove = Number(toapprove) * 1.02
    toapprove = ethers.utils.parseUnits(toapprove?.toString(), 'ether')

    try {
      const transaction = await contract.approve(environment.marketaddress, toapprove)
      approveBtn.value = "Pending..."
      await transaction.wait()
      selectCurrency()

      } catch(e) {
          
          console.log(e)
      } 
  }

  /**
   * Buy button
   */
  async buy() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)
    let buyBtn = document.getElementById("buyBtn")

    if(this.currency != 2) {
      try {
        const transaction = await contract.buyItem(this.productId, this.amount, this.currency)
        buyBtn.value = "Pending..."
        await transaction.wait()
        this.ngOnInit()
        buyBtn.value = "Buy Now"
  
        } catch(e) {
            
            console.log(e)
        } 
    } else {
      let gas = 0
      gas = this.amount * this.items[0].priceMatic
      gas = Number(gas).toFixed(18)
      /*
      let arr = gas.toString().split(".");
      let fraction = arr[1] .substr(0, 18);
      gas =  arr[0] + "." + fraction;
      */
      let finalgas = ethers.utils.parseEther(gas)
      try {
        const transaction = await contract.buyItem(this.productId, this.amount, this.currency, { value: finalgas })
        buyBtn.value = "Pending..."
        await transaction.wait()
        this.ngOnInit()
        buyBtn.value = "Buy Now"
  
        } catch(e) {
            
            console.log(e)
        } 
    }
    
  }

  switchCurrency(curr) {
    let brix = document.getElementById("brix")
    let eth = document.getElementById("eth")
    let matic = document.getElementById("matic")
    let usd = document.getElementById("usd")
    this.currency = curr

    let brixicon = document.getElementById("brixicon")
    let ethicon = document.getElementById("ethicon")
    let maticicon = document.getElementById("maticicon")
    let usdicon = document.getElementById("usdicon")
  
    switch(curr) {
      case 1: brix?.classList.remove("hidden"); eth?.classList.add("hidden"); matic?.classList.add("hidden"); usd?.classList.add("hidden"); this.items[0].selectedPrice = Number(this.items[0].priceBrix).toFixed(8); break;
      case 2: brix?.classList.add("hidden"); eth?.classList.add("hidden"); matic?.classList.remove("hidden"); usd?.classList.add("hidden"); this.items[0].selectedPrice = Number(this.items[0].priceMatic).toFixed(8); break;
      case 3: brix?.classList.add("hidden"); eth?.classList.remove("hidden"); matic?.classList.add("hidden"); usd?.classList.add("hidden"); this.items[0].selectedPrice = Number(this.items[0].priceEth).toFixed(8); break;
      case 4: brix?.classList.add("hidden"); eth?.classList.add("hidden"); matic?.classList.add("hidden"); usd?.classList.remove("hidden"); this.items[0].selectedPrice = Number(this.items[0].priceUsd).toFixed(8); break;
    }

    switch(curr) {
      case 1: brixicon?.classList.remove("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); break;
      case 2: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.remove("darken"); usdicon?.classList.add("darken"); break;
      case 3: brixicon?.classList.add("darken"); ethicon?.classList.remove("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); break;
      case 4: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.remove("darken"); break;
    }

    this.selectCurrency(curr)
    this.switchAmount()

  }

}
