import { Injectable } from '@angular/core';
import { Http } from '@angular/http' 
@Injectable()
export class PostsService {
private user:{};

  constructor(private http: Http) {
    
   }
   getPosts(){
      return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
   }

}
