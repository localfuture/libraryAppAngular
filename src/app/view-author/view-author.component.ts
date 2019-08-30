import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  
  constructor(private apiservice: ApiService) { }

  mydata: Array<object> = [];


  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewAuthor().subscribe((Response:Array<Object>)=>{
      this.mydata = Response;
    })
  }

}
