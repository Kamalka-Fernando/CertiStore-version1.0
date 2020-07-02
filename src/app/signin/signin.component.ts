import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {


  loginUserData = this.fb.group(
    {
      email: ['', [Validators.required,	Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    }
  );

  constructor( private fb: FormBuilder, private login: SigninService ) { }

  onSubmitLogin() {
    this.login.loginUser(this.loginUserData.value)
    .subscribe(
      response => console.log('Success', response),
      error => console.log('error', error)
    );
  }


}
