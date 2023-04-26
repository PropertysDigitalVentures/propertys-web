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
  selector: 'app-marketplace-admin',
  templateUrl: './marketplace-admin.component.html',
  styleUrls: ['./marketplace-admin.component.scss']
})
export class MarketplaceAdminComponent {
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

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, provider)

    let brix = await contract.brix()
    let usdc = await contract.usdc()
    let weth = await contract.weth()

    let usdEth = await contract.usdEth()
    let usdMatic = await contract.usdMatic()

    let receiverWallet = await contract.receiverWallet()

    document.getElementById("brix").value = brix
    document.getElementById("usdc").value = usdc
    document.getElementById("weth").value = weth
    document.getElementById("usdeth").value = usdEth
    document.getElementById("usdmatic").value = usdMatic
    document.getElementById("inputReceiver").value = receiverWallet
  }

  async updBRIX() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let newcontract = document.getElementById("brix").value

    try {
      const transaction = await contract.updBRIX(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }

  async updUSDC() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let newcontract = document.getElementById("usdc").value

    try {
      const transaction = await contract.updUsd(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }

  async updWETH() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let newcontract = document.getElementById("weth").value

    try {
      const transaction = await contract.updWeth(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }

  async updUSDETH() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let newcontract = document.getElementById("usdeth").value

    try {
      const transaction = await contract.updUsdEth(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }

  async updUSDMATIC() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    let newcontract = document.getElementById("usdmatic").value

    try {
      const transaction = await contract.updUsdMatic(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }

  async withdraw() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    try {
      const transaction = await contract.withdraw()
      } catch(e) {
          console.log(e)
      } 

  }

  async withdrawERC20() {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    const address = await signer.getAddress() 
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)
    let newcontract = document.getElementById("withdrawerc20").value
    try {
      const transaction = await contract.withdrawERC20(newcontract)
      } catch(e) {
          console.log(e)
      } 

  }


  async checkAddress() {
    let address = document.getElementById("inputAdmin").value
    document.getElementById("notvalid")?.classList.add("hidden")
    if(ethers.utils.isAddress(address)) {
      document.getElementById("addBtn")?.classList.remove("hidden")
    } else {
      document.getElementById("notvalid")?.classList.remove("hidden")
      document.getElementById("addBtn")?.classList.add("hidden")
    }
    
  }

  async checkAddress2() {
    let address = document.getElementById("inputReceiver").value
    document.getElementById("notvalid2")?.classList.add("hidden")
    if(ethers.utils.isAddress(address)) {
      document.getElementById("addBtn2")?.classList.remove("hidden")
    } else {
      document.getElementById("notvalid2")?.classList.remove("hidden")
      document.getElementById("addBtn2")?.classList.add("hidden")
    }
    
  }

  async toggleAdmin() {
    let address = document.getElementById("inputAdmin").value

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    try {
      
      const transaction = await contract.switchAdmin(address)
      
      document.getElementById("addBtn").value = "Pending..."
      await transaction.wait()
      this.checkApproval()
      document.getElementById("addBtn").value = "Approve Contract"

    } catch(e) {
      
    }
    }

  async updReceiver() {
    let address = document.getElementById("inputReceiver").value

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );

    const signer = provider.getSigner()
    
    const contract = new ethers.Contract(environment.marketaddress, abi.abi, signer)

    try {
      
      const transaction = await contract.updReceiver(address)
      
      document.getElementById("addBtn2").value = "Pending..."
      await transaction.wait()
      this.checkApproval()
      document.getElementById("addBtn2").value = "Approve Contract"

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
