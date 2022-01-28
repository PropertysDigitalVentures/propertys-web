import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrixContractApprovalDialogComponent} from './brix-contract-approval-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [BrixContractApprovalDialogComponent],
    exports: [BrixContractApprovalDialogComponent],
    providers: [
    ]
})
export class BrixContractApprovalDialogModule {}
