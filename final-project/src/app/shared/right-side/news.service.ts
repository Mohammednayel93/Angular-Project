import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }
  getTopNews(){
   return this._httpClient.get("http://api.mohamed-sadek.com/News/TopNews");
  }
  getFeaturedNews(){
    return this._httpClient.get("http://api.mohamed-sadek.com/News/FeaturedNews");
  }
}
