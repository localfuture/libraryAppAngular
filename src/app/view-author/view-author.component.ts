import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  
  constructor(private apiservice: ApiService, private router: Router) { }

  mydata: Array<object> = [];

  singleViewAuthor(authorId){
    localStorage.setItem("singleAuthorId",authorId);
    this.router.navigateByUrl("/singleViewAuthor");
  }


  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewAuthor().subscribe((Response:Array<Object>)=>{
      this.mydata = Response;
    })
  }

}
