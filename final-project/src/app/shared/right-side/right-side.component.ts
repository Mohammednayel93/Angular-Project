import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news.model';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
news:News[]=[];

  constructor(private _newsService:NewsService) { }

  ngOnInit() {
    this._newsService.getTopNews().subscribe(
      (response)=>{
this.news=response as News[];

      }
    )
  }

}
