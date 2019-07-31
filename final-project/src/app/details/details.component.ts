import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from '../shared/right-side/news.model';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   
  constructor(private _detailsService:DetailsService,private _router:Router,private _activatedRoute:ActivatedRoute) { }
  news:News=new News();
  
  ngOnInit() {
    
    this._activatedRoute.paramMap.subscribe(params=>{
      let id=0;
    
      id=+params.get('id');
     this._detailsService.getDtails(id).subscribe(
       (response)=>{
        this.news=response as News;
      // department=this.news.DepartmentID;
       }
     )
    });

  }
  BackToHome(){
    //  this._router.navigateByUrl(`/newsByDepartment/${department}`);
  }
}
