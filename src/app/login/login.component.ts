import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  mydata: Array<object> = [];

  onsubmit(data: NgForm) {
    console.log(data.value);
    this.apiservice.loginUser(data.value).subscribe((Response: Array<object>) => {
      this.mydata = Response;
      console.log(this.mydata);
    });
  }

  



  // if (name == "admin" && pass == "1234") {
  //   localStorage.setItem('loggedIn', 'true');
  //   this.router.navigateByUrl('welcome');
  // }



  ngOnInit() {
  }

}
