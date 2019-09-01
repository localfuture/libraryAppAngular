import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }

  onsubmit(data: NgForm) {
    console.log(data.value);
    console.log(data.value.fullname);
    console.log(data.value.email);
    console.log(data.value.password);

    if (data.value.password == data.value.confirmpassword) {
      this.apiservice.registerUser(data.value).subscribe((Response: any) => {
        console.log(Response);
        alert("User Registered Successfully");
        this.router.navigateByUrl("/login");
      });
    } else {
      alert("Password should match");
      this.router.navigateByUrl("/register");
    }
  }

  ngOnInit() {
  }

}
