import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _httpClient:HttpClient) { }
  getAllDepartments()
  {
   return this._httpClient.get("http://api.mohamed-sadek.com/news/Departments");
  }
}
