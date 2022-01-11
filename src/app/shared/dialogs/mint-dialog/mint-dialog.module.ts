import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import {MintDialogComponent} from './mint-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [MintDialogComponent],
    exports: [MintDialogComponent],
    providers: [
    ]
})
export class MintDialogModule {}
