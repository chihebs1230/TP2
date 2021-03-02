import { Component, OnInit } from '@angular/core';

import {FormGroup,Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signUpForm = this.formBuilder.group({
userName : ['',Validators.required],
email : ['',[Validators.required,Validators.email]],
password : ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]{6,}')  ]],

onsubmit()
{
  this.authService.createNewUser(this.signUpForm.value).then(() => {
    console.log('success registration');
    this.router.navigate ('/signin');
  })
  .catch (err => {
    console.log ('error registration',err);
  });

}
    })
  }
get formControls ()
{
  return this.signUpForm.controls;
}
}
