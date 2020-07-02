import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor( private fb: FormBuilder, private register: SignupService ) {}

  RegisterUserData = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required,	Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: [''],
    confirmpassword: [''],
    checkbox: ['']
  }, { validator: PasswordValidator });

  onSubmit() {
    this.register.registerUser(this.RegisterUserData.value)
    .subscribe(
      response => console.log('Success', response),
      error => console.log('error', error)
    );
  }
}