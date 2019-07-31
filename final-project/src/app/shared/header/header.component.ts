import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';
import { DepartmentService } from './department.service';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

departments:Department[]=[]
  constructor(private _departmentService:DepartmentService) { }

  ngOnInit() {

this._departmentService.getAllDepartments().subscribe(
  (response)=>{
    this.departments=response as Department[];
    this.departments=this.departments.filter(m=>m.ShowInMainMenu==true);
  }
)

  }

}
