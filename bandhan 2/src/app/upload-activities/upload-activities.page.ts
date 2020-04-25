import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-upload-activities',
  templateUrl: './upload-activities.page.html',
  styleUrls: ['./upload-activities.page.scss'],
})
export class UploadActivitiesPage implements OnInit {
  selectedDate: string = "";
  showDate: Date;
  maxDate: String = new Date().toISOString();
  uploadActivity: FormGroup;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private datePicker: DatePicker,
    public fb: FormBuilder

  ) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

  SelectDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', this.showDate = date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  ngOnInit() {

    this.uploadActivity = this.fb.group({
      'dob': new FormControl('', Validators.compose([Validators.required])),
      'invoice': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/0{3,10}|[JjYy]{2}0{3,8}|[JjYy]{4}0{3,6}/)])),
      'nameofcustomer': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'mobileno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/), Validators.minLength(4), Validators.maxLength(12)])),
      'billvalue': new FormControl('', Validators.compose([Validators.required])),
      'productValue': new FormControl('', Validators.compose([Validators.required]))
    })

  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }
}
