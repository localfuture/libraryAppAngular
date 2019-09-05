import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-view-book',
  templateUrl: './single-view-book.component.html',
  styleUrls: ['./single-view-book.component.css']
})
export class SingleViewBookComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  mydata: Array<object> = [];
  book: Array<object> = [];
  id: String;
  status: String;

  onlogOut() {
    sessionStorage.removeItem('loggedIn');
    localStorage.removeItem('singleBookId');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.status = sessionStorage.getItem('loggedIn');
    if (this.status === "null") {
      this.router.navigateByUrl('/login');
    } else {
      this.fetchData();
    }

  }

  public fetchData() {
    this.id = localStorage.getItem('singleBookId');
    this.book = [{ bid: this.id }];
    console.log(this.book);
    this.apiservice.findSingleBook(this.book[0]).subscribe((Response: any) => {
      this.mydata = Response;
      console.log(this.mydata);
    })
  }
}
