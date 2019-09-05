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

    this.apiservice.loginUser(data.value).subscribe((Response: any) => {

      if(Response == "Invalid Credentials") {
        
        alert(Response);
       
      } else {
        
        sessionStorage.setItem('loggedIn',Response[0]._id);
       
        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnInit() {
  }

}
