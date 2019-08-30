import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService } from '../api.service';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  onsubmit(data: NgForm) {
    console.log(data.value);
    this.apiservice.insertAuthor(data.value).subscribe((Response:any)=>{
      console.log(Response);
      alert("data successfully send");
    });
  }

  ngOnInit() {
  }

}
