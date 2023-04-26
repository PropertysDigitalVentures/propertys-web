// @ts-nocheck
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import axios from 'axios';
import { ethers } from 'ethers';
import { of } from 'rxjs';

import abi from '../../../contracts/PropertiesXyzMarket.json'
import abi721 from '../../../contracts/ERC721.json'
import abi1155 from '../../../contracts/ERC1155.json'
import abierc20 from '../../../contracts/ERC20.json'
import { environment } from '../../../environments/environment';
import { OnCyberWallet, SandboxWallet } from '../../../contracts/sellers.json'

@Component({
  selector: 'app-marketplace-listings',
  templateUrl: './marketplace-listings.component.html',
  styleUrls: ['./marketplace-listings.component.scss']
})
export class MarketplaceListingsComponent {
  
  public searchTerm: any = '';
  public filters = {
    'price-range': false,
    'streets': false,
    'districts': false,
    'cities': false,
    'special': false,
    'sandbox': false
  }

  public productlist = []
  public filteredList = []
  public activeFilters = []

  public brixFilterMin = 0
  public brixFilterMax = 1000
  public usdcFilterMin = 0
  public usdcFilterMax = 1000

  public searchTerm = ""


  public maticBalance = "0 MATIC"
  public ethBalance = "0 ETH"
  public brixBalance = "0 BRIX"
  public usdcBalance = "0 USDC"
  
  public claimable = "0 BRIX"

  constructor(
    
    private _dialog: MatDialog,
  ) {}

  async ngOnInit() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 

    const brixContract = new ethers.Contract(environment.brixaddress, abierc20.abi, provider)
    let brixbal = await brixContract.balanceOf(address)
    this.brixBalance = Number(ethers.utils.formatUnits(brixbal.toString(), 'ether')).toFixed(5) + " BRIX"
    document.getElementById("currentCurrency")?.value = this.brixBalance

    const ethContract = new ethers.Contract(environment.wethaddress, abierc20.abi, provider)
    let ethbal = await ethContract.balanceOf(address)
    this.ethBalance = Number(ethers.utils.formatUnits(ethbal.toString(), 'ether')).toFixed(5) + " ETH"

    const usdcContract = new ethers.Contract(environment.usdcaddress, abierc20.abi, provider)
    let usdcbal = await usdcContract.balanceOf(address)
    this.usdcBalance = Number(ethers.utils.formatUnits(usdcbal.toString(), 'ether')).toFixed(5) + " USDC"

    let maticbal = await provider.getBalance(address)
    this.maticBalance = Number(ethers.utils.formatUnits(maticbal.toString(), 'ether')).toFixed(5) + " MATIC"
        
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, provider)

    // fetch items on sale
    let onsale
    onsale = await contract.fetchItemsOnSale()
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

      let jsondata = await axios.get(tokenuri)
      let maxSupply = onsale[i].amount.toString()
      // let counter = data[2].toString()
      let priceBrix = ethers.utils.formatUnits(onsale[i].priceBRIX.toString().toString().toString(), 'ether')
      let priceUsd = ethers.utils.formatUnits(onsale[i].priceUSDC.toString().toString(), 'ether')

      
      let pETH = await contract.convert(3, onsale[i].priceUSDC)
      let priceMatic = await contract.convert(4, onsale[i].priceUSDC)

      let eth = ethers.utils.formatUnits(pETH.toString().toString(), 'ether')
      eth = Number(eth).toFixed(6)
      let matic = ethers.utils.formatUnits(priceMatic.toString().toString(), 'ether')
      matic = Number(matic).toFixed(6)

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
        displayId: i,
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
        priceEth: eth,
        priceMatic: matic,
        soldout: soldout,
        image: jsondata.data.image,
        detailurl: '/marketplace/' + onsale[i].itemId.toString(),
        seller: onsale[i].seller.toString(),
        selectedPrice: priceBrix,
        brixId: "brix" + i,
        usdcId: "usdc" + i,
        ethId: "eth" + i,
        maticId: "matic" + i

      }
      
      this.productlist.push(item)

    }

    this.filteredList = this.productlist

    //let addtocheck = "0x9832dC0402E476a30a57fc0445D17A54467A1f68"

    /* to be activate when brix claimed goes live
    let addtocheck = address
    let url = environment.backendUrl + "count/" +  addtocheck
    let claimable = await axios.get(url)
    document.getElementById("claimValue")?.innerHTML = claimable.data.reward + " BRIX"
    this.claimable = claimable.data.reward + " BRIX"
    */
  }

    
  /**
   * Toggle a filter
   */
  toggleFilter(filter) {
    this.filters[filter] = !this.filters[filter];
  }

  applyFilter() {
    this.filteredList = this.productlist
    this.brixFilterMin = Number(document.getElementById("brixMin")?.value)
    this.brixFilterMax = Number(document.getElementById("brixMax")?.value)
    this.usdcFilterMin= document.getElementById("usdcMin")?.value
    this.usdcFilterMax = document.getElementById("usdcMax")?.value
    this.searchTerm = document.getElementById("search")?.value.toLowerCase()
    let sandboxBtn = document.getElementById("sandboxBtn")
    let oncyberBtn = document.getElementById("oncyberBtn")
    let sandboxActive
    let oncyberActive
    if(sandboxBtn?.classList.contains("clicked")) {
      sandboxActive = true
    }
    if(oncyberBtn?.classList.contains("clicked")) {
      oncyberActive = true
    }

    this.filteredList = this.filteredList.filter(element => Number(element.priceBrix) >= Number(this.brixFilterMin) && Number(element.priceBrix) <= Number(this.brixFilterMax) && Number(element.priceUsd) >= Number(this.usdcFilterMin) && Number(element.priceUsd) <= Number(this.usdcFilterMax) && (element.name.toLowerCase().includes(this.searchTerm) || element.description.toLowerCase().includes(this.searchTerm)))

    if(oncyberActive) {
      this.filteredList = this.filteredList.filter(element => element.seller == OnCyberWallet)
      let first = true
      for(let i = 0; i < this.activeFilters.length; i++) {
        if(this.activeFilters[i].name == "ONCYBER") {
          this.activeFilters[i].min = ""
          this.activeFilters[i].max = ""
          first = false
        }
      }
      if(first) {
        let filter = {
          name: "ONCYBER",
          min: 0,
          max: 0,
          search: "OnCyber NFTs"
        }
    
        this.activeFilters.push(filter)
      }
    }
    if(sandboxActive) {
      this.filteredList = this.filteredList.filter(element => element.seller == SandboxWallet)
      let first = true
      for(let i = 0; i < this.activeFilters.length; i++) {
        if(this.activeFilters[i].name == "SANDBOX") {
          this.activeFilters[i].min = ""
          this.activeFilters[i].max = ""
          first = false
        }
      }
      if(first) {
        let filter = {
          name: "SANDBOX",
          min: 0,
          max: 0,
          search: "Sandbox NFTs"
        }
    
        this.activeFilters.push(filter)
      }
    }


    if(Number(this.brixFilterMax) < 1000 || Number(this.brixFilterMin) > 0) {
      let first = true
      for(let i = 0; i < this.activeFilters.length; i++) {
        if(this.activeFilters[i].name == "BRIX") {
          this.activeFilters[i].min = this.brixFilterMin
          this.activeFilters[i].max = this.brixFilterMax
          first = false
        }
      }
      if(first) {
        let filter = {
          name: "BRIX",
          min: this.brixFilterMin,
          max: this.brixFilterMax,
          search: ""
        }
    
        this.activeFilters.push(filter)
      }
        
    }
    if(Number(this.usdcFilterMax) < 1000 || Number(this.usdcFilterMin) > 0) {
      let first = true
      for(let i = 0; i < this.activeFilters.length; i++) {
        if(this.activeFilters[i].name == "USDC") {
          this.activeFilters[i].min = this.usdcFilterMin
          this.activeFilters[i].max = this.usdcFilterMax
          first = false
        }
      }
      if(first) {
        let filter = {
          name: "USDC",
          min: this.usdcFilterMin,
          max: this.usdcFilterMax,
          search: ""
        }
    
        this.activeFilters.push(filter)
      }
      
    }

    if(this.searchTerm != "") {
      let first = true
      for(let i = 0; i < this.activeFilters.length; i++) {
        if(this.activeFilters[i].name == "SEARCH") {
          this.activeFilters[i].min = this.searchTerm
          this.activeFilters[i].max = ""
          first = false
        }
      }
      if(first) {
        let filter = {
          name: "SEARCH",
          min: 0,
          max: 0,
          search: this.searchTerm 
        }
    
        this.activeFilters.push(filter)
      }
    }


    
    
  }

  removeFilter(name) {
    
    if(name == "BRIX") {
      this.brixFilterMin = 0
      document.getElementById("brixMin")?.value = 0
      this.brixFilterMax = 1000
      document.getElementById("brixMax")?.value = 1000
    }

    if(name == "USDC") {
      this.usdcFilterMin = 0
      document.getElementById("usdcMin")?.value = 0
      this.usdcFilterMax = 1000
      document.getElementById("usdcMax")?.value = 1000
    }

    if(name == "SEARCH") {
      this.searchTerm = ""
      document.getElementById("search")?.value = ""
    }

    if(name == "SANDBOX") {
      document.getElementById("sandboxBtn")?.classList.remove("clicked")
    }

    if(name == "ONCYBER") {
      document.getElementById("oncyberBtn")?.classList.remove("clicked")
    }

    let index
    for(let i = 0; i < this.activeFilters.length; i++) {
      if(this.activeFilters[i].name = name) {
        index = i
      }
    }
    this.activeFilters.splice(index, index)
    if(this.activeFilters.length = 1 && index == 0) {
      this.activeFilters = []
    }
    this.applyFilter()
    
  }

  applyUniverse(type) {
    if(type == 1){
      let btn = document.getElementById("sandboxBtn")
      if(btn.classList.contains("clicked")) {
        btn.classList.remove("clicked")
        this.removeFilter("SANDBOX")
      } else {
        btn.classList.add("clicked")
      }
    }
    if(type == 2) {
      let btn = document.getElementById("oncyberBtn")
      if(btn.classList.contains("clicked")) {
        btn.classList.remove("clicked")
        this.removeFilter("ONCYBER")
      } else {
        btn.classList.add("clicked")
      }
    }
    this.applyFilter()

  }

  keyPress(keyEvent) {
    console.log(keyEvent)
    if (keyEvent.which === 13) {
      this.applyFilter()
    }
  }

  /**
   * 
   * Check if a filter is toggled
   */
  isFilterToggled(filter) {
    let isFilteredToggled = false;
    for(let key in this.filters) {
      if(this.filters[filter] === true) {
        isFilteredToggled = true;
      }
    }

    return isFilteredToggled;
  }

  

  

  buy(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('purchase');
  }

  switchCurrency(id, curr) {
    let brix = document.getElementById("brix" + id)
    let eth = document.getElementById("eth" + id)
    let matic = document.getElementById("matic" + id)
    let usdc = document.getElementById("usdc" + id)

    let brixicon = document.getElementById("brixicon")
    let ethicon = document.getElementById("ethicon")
    let maticicon = document.getElementById("maticicon")
    let usdicon = document.getElementById("usdicon")

    switch(curr) {
      case 1: brix?.classList.remove("hidden"); eth?.classList.add("hidden"); matic?.classList.add("hidden"); usdc?.classList.add("hidden"); this.productlist[id].selectedPrice = this.productlist[id].priceBrix; break;
      case 2: brix?.classList.add("hidden"); eth?.classList.add("hidden"); matic?.classList.remove("hidden"); usdc?.classList.add("hidden"); this.productlist[id].selectedPrice = this.productlist[id].priceMatic; break;
      case 3: brix?.classList.add("hidden"); eth?.classList.remove("hidden"); matic?.classList.add("hidden"); usdc?.classList.add("hidden"); this.productlist[id].selectedPrice = this.productlist[id].priceEth; break;
      case 4: brix?.classList.add("hidden"); eth?.classList.add("hidden"); matic?.classList.add("hidden"); usdc?.classList.remove("hidden"); this.productlist[id].selectedPrice = this.productlist[id].priceUsd; break;
    }

    switch(curr) {
      case 1: brixicon?.classList.remove("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); break;
      case 2: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.remove("darken"); usdicon?.classList.add("darken"); break;
      case 3: brixicon?.classList.add("darken"); ethicon?.classList.remove("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); break;
      case 4: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.remove("darken"); break;
    }
  }

  switchCurrencyBal(curr) {

    let brixicon = document.getElementById("brixiconBal")
    let ethicon = document.getElementById("ethiconBal")
    let maticicon = document.getElementById("maticiconBal")
    let usdicon = document.getElementById("usdiconBal")

    switch(curr) {
      case 1: brixicon?.classList.remove("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); document.getElementById("currentCurrency")?.innerHTML = this.brixBalance; break;
      case 2: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.remove("darken"); usdicon?.classList.add("darken"); document.getElementById("currentCurrency")?.innerHTML = this.maticBalance; break;
      case 3: brixicon?.classList.add("darken"); ethicon?.classList.remove("darken"); maticicon?.classList.add("darken"); usdicon?.classList.add("darken"); document.getElementById("currentCurrency")?.innerHTML = this.ethBalance; break;
      case 4: brixicon?.classList.add("darken"); ethicon?.classList.add("darken"); maticicon?.classList.add("darken"); usdicon?.classList.remove("darken"); document.getElementById("currentCurrency")?.innerHTML = this.usdcBalance; break;
    }

    
  }

  async claimBrix() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 


    //let addtocheck = "0x9832dC0402E476a30a57fc0445D17A54467A1f68"
    let addtocheck = address
    let url = environment.backendUrl + "payout/" +  addtocheck
    let message = "I hereby declare, I want to claim the BRIX tokens for the current reward period."

    let transaction = await signer.signMessage(message)
    if(transaction) {
      document.getElementById("claimBtn")?.innerHTML = "Pending..."
      let trans = await axios.get(url)
      location.reload()
    }
  }


}
