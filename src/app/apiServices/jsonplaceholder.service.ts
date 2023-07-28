import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  allPost(){
    return this.http.get(this.url + 'posts')

  }

  allAlbumes(){
    return this.http.get(this.url + 'albums')

  }
}
