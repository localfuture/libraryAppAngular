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

    if (data.value.password != data.value.confirmpassword) {
      alert("Password should match");
      this.router.navigateByUrl('/register');
    } else {
      this.apiservice.registerUser(data.value).subscribe((Response: any) => {
            console.log(Response);
            alert(Response);
            this.router.navigateByUrl('/login');
          });
    }
  }

  ngOnInit() {
  }

}
