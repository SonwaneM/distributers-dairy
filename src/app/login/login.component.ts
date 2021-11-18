import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private profileService:ProfileService) { 
    console.log("Inside Login component");

  }

    loginForm=new FormGroup({
      username:new FormControl('',Validators.email),
      password:new FormControl('',Validators.maxLength(6))
    });

  ngOnInit() {
  }

  login() : void {
if (!this.loginForm.valid){

this.profileService.currentUser=this.loginForm.value.username;
console.log("Login form",this.loginForm.value.username);
setTimeout(() => {
  this.router.navigate(['/nav']);
}, 1000);

}
  }
}
