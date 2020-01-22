import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, ) { }
  registerForm: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted && this.f.firstName.errors.required)

    let obj = this.registerForm.getRawValue()
    // console.log(obj)
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }

}
