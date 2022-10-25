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

    
    /**
     * Get Medium Posts
     */
    async getMediumPosts() {
        let result = await this.http.get(`${environment.netlifyFnServer}get-medium-posts`).toPromise();
        return result.splice(0, 4);
    }
}
