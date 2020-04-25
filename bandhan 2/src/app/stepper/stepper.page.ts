import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage implements OnInit {

  headingText: any = 'Personal Details';
  firstStepper: FormGroup;
  secondStepper: FormGroup;
  thirdStepper: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.firstStepper = this.fb.group({

      'firstname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'lastname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'address': new FormControl('', Validators.compose([Validators.required])),
      'pincode': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern(/^[1-9][0-9]{5}$/)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/), Validators.maxLength(10)])),
      'dob': new FormControl('', Validators.compose([Validators.required])),
      'gndr': new FormControl('1', Validators.compose([Validators.required]))
    });

    this.secondStepper = this.fb.group({
      'adharname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'adharno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{4}\d{4}\d{4}$/)])),
      'panname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'panno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/[A-Za-z]{5}\d{4}[A-Za-z]{1}/)])),

    });

    this.thirdStepper = this.fb.group({
      'accholdername': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'ifsc': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/)])),
      'bankAddress': new FormControl('', Validators.compose([Validators.required])),
      'bankname': new FormControl('', Validators.compose([Validators.required])),
      'confrmAccountNo': new FormControl('', Validators.compose([Validators.required])),
      'accountno': new FormControl('', Validators.compose([Validators.required])),
    })

  }
  //* header text change function */
  onclick(step, text) {
    console.log("Header Text -==-=-", step);
    this.headingText = text;
    console.log("Header Text -==-=-", this.headingText);
  }

  onNext() {
    this.router.navigate(['waiting-approval']);
  }
}
