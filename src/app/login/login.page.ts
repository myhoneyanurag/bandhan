import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from 'src/app/app.constants'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpWrapperService,
    private facebook: Facebook,
    private googlePlus: GooglePlus
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'email': new FormControl('', Validators.compose([Validators.required])),
      // 'password': new FormControl('', Validators.compose([Validators.required]))
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

  onSignUp() {
    this.router.navigate(['/signup']);
  }

  onsignIn(text) {
    this.httpService.presentLoader();
    console.log(text);
    this.httpService.path = text;
    let data = {
      'login': this.signUpForm.value.email,
    }
    this.httpService.postData(appApiResources.signIn, data, Headers).subscribe((data) => {
      if (data) {
        this.httpService.loginData = data;
        console.log("this is the login data -=-=-=-", this.httpService.loginData)
        this.httpService.dismissLoader();
        this.router.navigate(['/verification']);
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }
}
