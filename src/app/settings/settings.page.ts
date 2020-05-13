import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { Router } from '@angular/router';
import { appApiResources } from 'src/app/app.constants'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  updateMobile: FormGroup;



  constructor(
    private menuController: MenuController,
    private httpService: HttpWrapperService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');

    this.updateMobile = this.fb.group({
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)]))
    })
  }

  updateNumber() {
    this.httpService.presentLoader()
    let data = {
      'userId': localStorage.getItem('userID'),
      'phone_no': this.updateMobile.value.mobile
    }
    this.httpService.postData(appApiResources.updateMobile, data, Headers).subscribe((data) => {
      console.log("this is the update mobile data -==-=-=", data);
      if (data) {
        this.httpService.dismissLoader();
        this.httpService.presentToast(data.message);
        this.updateMobile.value.reset
      }
    }, (err) => {
      console.log(err),
        this.httpService.dismissLoader();
    })
  }


  gotoprivacy() {
    this.router.navigate(['/privacy']);
  }
  gotoTerms() {
    this.router.navigate(['/terms']);
  }
  editProfile() {
    this.router.navigate(['edit-profile']);
  }
  identifyProof() {
    this.router.navigate(['identify-proof']);
  }
  bankdetails() {
    this.router.navigate(['bank-details']);
  }
  onNotify() {
    this.router.navigate(['/notificationns'])
  }

}
