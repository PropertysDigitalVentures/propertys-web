import {NgModule} from '@angular/core';
import {publicLayoutRouting} from './public-layout.routing';
// import {SharedModule} from '../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppHeaderModule} from '../shared/components/app-header/app-header.module';
import {AppFooterModule} from '../shared/components/app-footer/app-footer.module';
import {PublicLayoutComponent} from './public-layout.component';


@NgModule({
    imports: [
        publicLayoutRouting,
        // SharedModule,
        AppHeaderModule,
        AppFooterModule,
        MatListModule,
        MatToolbarModule
    ],
    declarations: [
        PublicLayoutComponent
    ],
    providers: [
    ]
})
export class PublicLayoutModule {
}
