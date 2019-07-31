import { Component, OnInit } from '@angular/core';
import { NewsByDepartmentService } from './news-by-department.service';
import { News } from '../shared/right-side/news.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-by-department',
  templateUrl: './news-by-department.component.html',
  styleUrls: ['./news-by-department.component.css']
})
export class NewsByDepartmentComponent implements OnInit {

  constructor(private _detailsService:NewsByDepartmentService,private _router:Router,private _activatedRoute:ActivatedRoute) { }
 news:News[]=[];
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
      let id=0;
      id=+params.get('id');
     this._detailsService.getDtails(id).subscribe(
       (response)=>{
this.news=response as News[];
       }
     )
    });
  }

}
