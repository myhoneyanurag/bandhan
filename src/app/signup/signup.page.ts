import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from 'src/app/app.constants';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpWrapperService,
    private facebook: Facebook,
    private googlePlus: GooglePlus
  ) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      'name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/), Validators.minLength(4), Validators.maxLength(12)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]))
    })

  }

  //* google social login function */
  googleLogin() {
    this.googlePlus.login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }

  //* facebook social login function */
  loginFb() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

  onSignIn() {
    this.router.navigate(['/login']);
  }

  //* this is the signUp function */
  onVerification(text) {
    this.httpService.presentLoader();
    console.log(text);
    this.httpService.signupData = this.signupForm.value
    let data = {
      'name': this.signupForm.value.name,
      'email': this.signupForm.value.email,
      'mobile_no': this.signupForm.value.mobile,
      'password': this.signupForm.value.password
    }
    this.httpService.postData(appApiResources.signUp, data, Headers).subscribe((data) => {
      if (data) {
        this.httpService.signupData = this.signupForm.value.email;
        this.httpService.dismissLoader();
        this.router.navigate(['/verification']);

      }
    }, (err) => {
      console.log(err);
      this.httpService.presentToast('The email has already been taken.')
      this.httpService.dismissLoader();
    })
  }
}
