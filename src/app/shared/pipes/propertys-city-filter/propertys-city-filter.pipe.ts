import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class PropertysCityFilterPipe implements PipeTransform {

  transform(results: any, term: any): any {
    if(term === undefined || term === '') {
      return results;
    } else {

      return results.filter((item: any) => {
        if(item !== '') {
          let city = '';
          // Check against the title or associated tags and return that to the list
          if(item.hasOwnProperty('city')) { // We're dealing with a district
            city = item.city;
          } else if(item.hasOwnProperty('districts')) {
            city = item.name;
          } else {
            city = item[0].city;
          }

          if(city === term) {
            return true;
          } else {
            return false;
          }
          
        } else {
          return false;
        }
      });
    }
  }
}