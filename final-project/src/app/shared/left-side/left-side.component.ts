import { Component, OnInit } from '@angular/core';
import { NewsService } from '../right-side/news.service';
import { News } from '../right-side/news.model';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
newsFeatured:News[]=[];
  constructor(private _newsService:NewsService) { }

  ngOnInit() {
    this._newsService.getFeaturedNews().subscribe(
      (response)=>{
this.newsFeatured=response as News[];

      }
    )
  }

}
