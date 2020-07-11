import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service'
import { SignupService } from './signup.service'
import {CommonValidator} from '../validators/common.validator'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup
  public signupValidationMessages: any
  public submitted: boolean = false
  public show: boolean = false
  public data: any
  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    const emailRegex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const paswdRegex=/^[^\s]+(\s+[^\s]+)*$/
    const userNameRegex=  /^[A-Za-z0-9_@./#&+-]*$/;
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([CommonValidator.characterValidate,CommonValidator.emptyValidate,CommonValidator.stringMaxLengthValidate,Validators.required,Validators.pattern(userNameRegex)])],
      email: ['', Validators.compose([Validators.pattern(emailRegex), Validators.maxLength(30), Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.pattern(paswdRegex), Validators.minLength(6), Validators.maxLength(20)])],
      address: ['', Validators.compose([CommonValidator.characterValidate,CommonValidator.emptyValidate,CommonValidator.stringMaxLengthValidate,Validators.required,Validators.pattern(userNameRegex)])],
      city: ['', Validators.compose([Validators.pattern(emailRegex), Validators.maxLength(30), Validators.required])],
      state: ['', Validators.compose([Validators.required,Validators.pattern(paswdRegex), Validators.minLength(6), Validators.maxLength(20)])],
      pincode: ['', Validators.compose([Validators.required,Validators.pattern(paswdRegex), Validators.minLength(6), Validators.maxLength(20)])],
      // password: ['', Validators.compose([Validators.required,Validators.pattern(paswdRegex), Validators.minLength(6), Validators.maxLength(20)])],
    });
    this.signupValidationMessages = {
      'username': [
        { type: 'required', message: 'Please enter the username' },
        { type: 'space', message: 'Please enter the username' },
        { type: 'max', message: 'Username cannot be more than 20 characters long' },
        { type: 'pattern', message: 'Spaces are not allowed in the username' },
        { type: 'validateFirstCharacter', message: 'The first character of the username should be an alphabet' }
        
      ],
      'email': [
        { type: 'required', message: 'Please enter the email address' },
        { type: 'pattern', message: 'Please enter a valid email address' },
        { type: 'maxlength', message: 'Email cannot be more than 30 characters long' },
      ],
      'password': [
        { type: 'required', message: 'Please enter the password' },
        { type: 'minlength', message: 'The password cannot be less than 6 characters.' },
        { type: 'maxlength', message: 'The password cannot be more than 20 characters' },
        { type: 'pattern', message: 'Spaces not allowed' }

      ],
    }
  }

  public validation(formControlName: any) {
    for (var i = 0; i < this.signupValidationMessages[formControlName].length; i++) {
      if (this.registerForm.controls[formControlName].hasError(this.signupValidationMessages[formControlName][i].type) == true) {
        return this.signupValidationMessages[formControlName][i].message
      }
    }
  }

  public onSubmit(values: any) {
    values['role']=1
    this.submitted = true
    this.signupService.addUser(values).subscribe(
      (response: any) => {
        if(response.status.code==200){
          this.router.navigate(['/home'])
        }

      },
      
      error => {
        console.log("error",error);
        // this.commonService.flashMessage(error, "alert-danger");
      }

    )
  }
  
}



