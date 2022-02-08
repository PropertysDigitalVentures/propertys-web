import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
// import { ToastrService } from 'ngx-toastr';
import {SmartContractCoreService} from '../../services/smart-contract-core.service';
// import {SmartContractBrixService} from '../../services/smart-contract-brix.service';
import {EventMessengerService} from '../../services/event-messenger.service';

@Component({
    selector: 'brix-contract-approval-dialog',
    templateUrl: './brix-contract-approval-dialog.component.html',
    styleUrls: ['./brix-contract-approval-dialog.component.scss']
})
export class BrixContractApprovalDialogComponent {

    public accounts: any = [];
    public loading: any = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public _data: any,
        public dialogRef: MatDialogRef<BrixContractApprovalDialogComponent>,
        public smartContractCoreService: SmartContractCoreService,
        // public smartContractBrixService: SmartContractBrixService,
        public eventMessengerService: EventMessengerService,
        // public toastr: ToastrService,
    ) {
        this.accounts = _data.accounts;
    }

    ngOnDestroy() {

    }

    public async ngOnInit() {

        // Handle changing account
        this.eventMessengerService.subscribe('metmask.accountsChanged', (event: any) => {
            let { accounts } = event.data;
            this.accounts = accounts;

            // this.handleMetamaskAccounts();
        })

        this.eventMessengerService.subscribe('metmask.disconnect', (event: any) => {
                // this.dialogRef.close();
        })

        // this.handleMetamaskAccounts();
    }


    public async handleMetamaskAccounts() {
        if(this.accounts.length == 0) {
            // this.dialogRef.close();
        } else {
            
        }
    }


    /**
     * Approve UCD for use with burning for services
     */
    public approveBrix() {
        // this.smartContractBrixService.setApprovalForBrix().then(async (tx: any) => {
		// 	this.loading = true;

        //     tx.wait().then((success: any) => {
		// 		// Reset quest state
		// 		this.loading = false;
        //         this.close();
        //         this.toastr.success("Permissions approved successfully")
        //     });
		// })
		// .catch(err => {
		// 	this.loading = false;
		// })
    }

    close() {
        this.dialogRef.close();
    }

}
