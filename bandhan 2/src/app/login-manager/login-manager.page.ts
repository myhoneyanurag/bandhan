import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.page.html',
  styleUrls: ['./login-manager.page.scss'],
})
export class LoginManagerPage implements OnInit {
  loginManager: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {

    this.loginManager = this.fb.group({
      'mobEmail': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)])),
      // 'toName': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)])),
      // 'subjectName':new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)])),
      // 'message': new FormControl('',Validators.compose([Validators.required])),
    })


  }
  onLogIn() {
    this.router.navigate(['/home-manager']);
  }
}
