// @ts-nocheck
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MediumApiService {
    
    
    constructor(
        private http: HttpClient,
    ) {

    }

    async getMediumPosts() {
        let result = await this.http.get(`${environment.netlifyFnServer}get-medium-posts`).toPromise();
        console.log('result', result);
        if(result.data) {
            return result.data.splice(0, 4);
        } else {
            return [];
        }
    }
}
