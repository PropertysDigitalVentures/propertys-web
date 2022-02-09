import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PropertysCityFilterPipe} from './propertys-city-filter.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [PropertysCityFilterPipe],
    exports: [PropertysCityFilterPipe]
})
export class PropertysCityFilterPipeModule {}