import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpWrapperService } from '../services/http-wrapper.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedBack: FormGroup;
  userId: string;

  constructor(private router: Router, private fb: FormBuilder, private httpService: HttpWrapperService, private menuController: MenuController) {

    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

  ngOnInit() {

    this.feedBack = this.fb.group({
      'comments': new FormControl('', Validators.compose([Validators.required])),
      'name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'mobileno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/), Validators.minLength(4), Validators.maxLength(12)])),
    })

  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }

  feedBackApi() {
    this.userId = localStorage.getItem('userID'),
      this.httpService.presentLoader();
    let data = {
      'message': this.feedBack.value.comments,
      'name': this.feedBack.value.name,
      'mobile_no': this.feedBack.value.mobileno
    }
    this.httpService.postData(`users/${this.userId}/create-feedback`, data, Headers).subscribe((data) => {
      console.log("this is the api -=-=-=-=", data);
      if (data) {
        this.httpService.dismissLoader();

      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }

}
