import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _httpClient:HttpClient) { }
  getDtails(id:number){ 
    return this._httpClient.get(`http://api.mohamed-sadek.com/News/item//${id}`);
   }

}
