import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from 'src/app/app.constants'

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  verifyotp: FormGroup;
  dataofLogin: any;
  datafromSignup: any;
  otp: any;
  otpResend: any;
  fromLogin: any;
  otpLogin: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpWrapperService,

  ) { }

  ngOnInit() {

    this.fromLogin = this.httpService.path;
    console.log("this is  the path from the login -=-=-=-=", this.fromLogin);
    this.datafromSignup = this.httpService.signupData;
    console.log("this is the data from signup -=-=-=", this.datafromSignup)
    this.resendOtp();
    this.verifyotp = this.fb.group({
      'otp': new FormControl('', Validators.compose([Validators.required]))
    })
  }

  //*this is the verify otp function */
  onAppro() {
    this.httpService.presentLoader();
    if (this.fromLogin == 'fromLogin') {
      let data = {
        'otp': this.verifyotp.value.otp,
        'confirmation_code': this.httpService.loginData.data.confirmation_code
      }
      this.httpService.postData(appApiResources.verifyOtp, data, Headers).subscribe((data) => {
        if (data) {
          console.log("this is the data from the verification page -=-=-=", data);
          this.httpService.verificationtostepper = data;
          localStorage.setItem('userID', JSON.stringify(data.data.id))
          this.httpService.dismissLoader();
          this.router.navigate(['/nameste']);
          // this.router.navigate(['/stepper']);
        }
      }, (err) => {
        console.log(err);
        this.httpService.dismissLoader();
      })
    } else {
      let data = {
        'otp': this.verifyotp.value.otp,
        'confirmation_code': this.otpLogin
      }
      this.httpService.postData(appApiResources.verifyOtp, data, Headers).subscribe((data) => {
        if (data) {
          console.log("this is the data from the verification page -=-=-=", data);
          this.httpService.verificationtostepper = data;
          localStorage.setItem('userID', JSON.stringify(data.data.id))
          this.httpService.dismissLoader();
          this.router.navigate(['/stepper']);
        }
      }, (err) => {
        console.log(err);
        this.httpService.dismissLoader();
      })
    }
  }


  //* this is the resendOtp function */
  resendOtp() {
    this.httpService.presentLoader();
    console.log("this is the data--=-=-=-=")
    let data = {
      'login': this.datafromSignup
    }
    this.httpService.postData(appApiResources.resendOtp, data, Headers).subscribe((data) => {
      console.log("this is the data ofgf the resend api--=-=-=-=", data);
      this.otpResend = data;
      console.log("this is the resend otp ()-=-=-=", this.otpResend.data.confirmation_code);
      this.otpLogin = this.otpResend.data.confirmation_code
      this.verifyotp.patchValue({
        'otp': data.data.otp
      })
      this.httpService.dismissLoader();
    }, (err) => {
      console.log(err)
      this.httpService.dismissLoader();
    })
  }
}
