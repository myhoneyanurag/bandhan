import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {
  bankdetails: any;
  Details: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    // this.Details = JSON.parse(localStorage.getItem('thirdStepper'));
    // console.log("this is the details from the vbank details page ", this.Details);

    this.bankdetails = this.fb.group({
      'accholdername': new FormControl(),
      'ifsc': new FormControl(),
      'bankAddress': new FormControl(),
      'bankname': new FormControl(),
      'confrmAccountNo': new FormControl(),
      'accountno': new FormControl(),
    })

    // this.bankdetails.patchValue({
    //   'accholdername': this.Details.accholdername,
    //   'ifsc': this.Details.ifsc,
    //   'bankAddress': this.Details.bankAddress,
    //   'bankname': this.Details.bankname,
    //   'confrmAccountNo': this.Details.confrmAccountNo,
    //   'accountno': this.Details.accountno
    // })

  }
  backSetting() {
    this.router.navigate(['/settings']);
  }

}
