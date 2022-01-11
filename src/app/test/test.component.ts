// @ts-nocheck
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SmartContractCoreService } from '../shared/services/smart-contract-core.service';
import { MintDialogComponent } from '../shared/dialogs/mint-dialog/mint-dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public accounts = [];

  constructor(
    private _dialog: MatDialog,
    public smartContractCoreService: SmartContractCoreService,
  ) {}

  async ngOnInit() {


    // Startup: Check metamask and populate accounts and then determine if any unis are in wallet
    await this.checkMetaMaskInstalled();

    this._dialog.open(MintDialogComponent, {
        width: '630px',
        data: {
          accounts: this.accounts
        }
      })
    }


  	/**
	 * Ensure metamask is installed so we can get wallet information
	 */
	async checkMetaMaskInstalled() {
		if(this.smartContractCoreService.isMetaMaskInstalled()) {
		  this.accounts = await this.smartContractCoreService.getWalletAccounts();
		} else {
		}
	}


}
