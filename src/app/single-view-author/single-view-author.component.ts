import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-view-author',
  templateUrl: './single-view-author.component.html',
  styleUrls: ['./single-view-author.component.css']
})
export class SingleViewAuthorComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  mydata: Array<Object> = [];
  author: Array<Object> = [];
  id: String;

  onlogOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('singleAuthorId');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.id = localStorage.getItem('singleAuthorId');
    this.author = [{ aid: this.id}];
    console.log(this.author);
    this.apiservice.findSingleAuthor(this.author[0]).subscribe((Response: any)=>{
      this.mydata = Response;
      console.log(this.mydata);
    })
  }

}
