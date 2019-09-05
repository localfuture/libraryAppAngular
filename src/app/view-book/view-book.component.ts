import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  mydata: Array<object> = [];
  status: String;

  singleViewBook(bookId) {
    this.status = sessionStorage.getItem('loggedIn');
    if (this.status === "null") {
      this.router.navigateByUrl('/login');
    } else {
      localStorage.setItem("singleBookId", bookId);
      this.router.navigateByUrl('/singleViewBook');
    }

    // localStorage.setItem("singleBookId", bookId);
    //   this.router.navigateByUrl('/singleViewBook');


  }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.apiservice.viewBook().subscribe((Response: Array<Object>) => {
      this.mydata = Response;
    })
  }

}
