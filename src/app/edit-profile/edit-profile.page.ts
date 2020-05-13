import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  editProfile: any;
  Details: any;



  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpWrapperService, private navCntrl: NavController) { }

  ngOnInit() {

    // this.Details = JSON.parse(localStorage.getItem('firstStepper'));
    // console.log("this is the first name -=-=-=-=", this.Details);


    this.editProfile = this.fb.group({
      'firstname': new FormControl(),
      'lastName': new FormControl(),
      'address': new FormControl(),
      'pincode': new FormControl(),
      'mobile': new FormControl(),
      'email': new FormControl(),
      'dob': new FormControl(),
      'workeras': new FormControl(),
      'gender': new FormControl
    })
    // this.editProfile.patchValue({
    //   'firstname': this.Details.firstname,
    //   'lastName': this.Details.lastname,
    //   'address': this.Details.address,
    //   'pincode': this.Details.pincode,
    //   'mobile': this.Details.mobile,
    //   'email': this.Details.email,
    //   'dob': this.Details.dob,
    //   'workeras': this.Details.workeras,
    //   'gender': this.Details.gender
    // })
  }
  backSetting() {
    this.navCntrl.pop();
  }
}
