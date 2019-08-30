import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService } from '../api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  onsubmit(data: NgForm) {
    console.log(data.value);
    this.apiservice.insertBook(data.value).subscribe((Response:any)=>{
      console.log(Response);
      alert("data successfully send");
    });
  }

  ngOnInit() {
  }

}
