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
        let data = [
            {
                "id": "b969ac62a46b",
                "name": "About Medium",
                "description": "What is this thing and how does it work?",
                "url": "https://medium.com/about",
                "imageUrl": "https://cdn-images-1.medium.com/fit/c/200/200/0*ae1jbP_od0W6EulE.jpeg"
            },
            {
                "id": "b45573563f5a",
                "name": "Developers",
                "description": "Medium’s Developer resources",
                "url": "https://medium.com/developers",
                "imageUrl": "https://cdn-images-1.medium.com/fit/c/200/200/1*ccokMT4VXmDDO1EoQQHkzg@2x.png"
            },
            {
                "id": "b969ac62a46b",
                "name": "About Medium",
                "description": "What is this thing and how does it work?",
                "url": "https://medium.com/about",
                "imageUrl": "https://cdn-images-1.medium.com/fit/c/200/200/0*ae1jbP_od0W6EulE.jpeg"
            },
            {
                "id": "b45573563f5a",
                "name": "Developers",
                "description": "Medium’s Developer resources",
                "url": "https://medium.com/developers",
                "imageUrl": "https://cdn-images-1.medium.com/fit/c/200/200/1*ccokMT4VXmDDO1EoQQHkzg@2x.png"
            }
        ];
        
        let result = await this.http.get(`${environment.netlifyFnServer}get-medium-posts`).toPromise();
        console.log('result from medium', result);
        return data;
    }
}
