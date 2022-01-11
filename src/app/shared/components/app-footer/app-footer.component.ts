import {Component} from '@angular/core';

@Component({
    selector: 'propertys-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
    year: number;

    constructor(
    ) {
        this.year = new Date().getFullYear();
    }
}

