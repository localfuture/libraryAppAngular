import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  mydata: Array<object> = [];

  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewBook().subscribe((Response:Array<Object>)=>{
      this.mydata = Response;
    })
  }

}
