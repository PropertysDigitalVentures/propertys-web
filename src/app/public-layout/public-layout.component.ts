import {Component} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-public-layout',
    templateUrl: './public-layout.component.html',
    styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

    constructor(
        _rootComponent: AppComponent,
    ) {
    }

}
