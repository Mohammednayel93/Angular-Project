import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/right-side/news.service';
import { News } from 'src/app/shared/right-side/news.model';
import { ReplaceSource } from 'webpack-sources';
import { Department } from 'src/app/shared/header/department.model';
import { DepartmentService } from 'src/app/shared/header/department.service';
import { NewsByDepartmentService } from 'src/app/news-by-department/news-by-department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList:News[]=[];
  departmentList:Department[]=[];
  constructor(private _newsService:NewsByDepartmentService,private _departmentService:DepartmentService) { }

  ngOnInit() {
    this._departmentService.getAllDepartments().subscribe(
      (response)=>{
        this.departmentList=response as Department[];
        this.departmentList=this.departmentList.filter(m=>m.ShowInMainMenu==true);
          let id:number=this.departmentList[0].ID;
        this._newsService.getDtails(id).subscribe(
          (response)=>{
            this.newsList=response as News[];
          }
        )
      }
    )
   
    // 2106
  
  }

}
