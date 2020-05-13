import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identify-proof',
  templateUrl: './identify-proof.page.html',
  styleUrls: ['./identify-proof.page.scss'],
})
export class IdentifyProofPage implements OnInit {
  identifyProof: any;
  Details: any;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    // this.Details = JSON.parse(localStorage.getItem('secondStepper'));
    // console.log("this is the details of the identify page -=-=-=-", this.Details);


    this.identifyProof = this.fb.group({
      'adharname': new FormControl(),
      'adharno': new FormControl(),
      'panname': new FormControl(),
      'panno': new FormControl(),
    })

    // this.identifyProof.patchValue({
    //   'adharname': this.Details.adharname,
    //   'adharno': this.Details.adharno,
    //   'panname': this.Details.panname,
    //   'panno': this.Details.panno
    // })


  }
  backSetting() {
    this.router.navigate(['/settings']);
  }

}
