import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { ActionSheetController } from '@ionic/angular'
import { appApiResources } from '../app.constants';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage implements OnInit {

  headingText: any = 'Personal Details';
  firstStepper: FormGroup;
  secondStepper: FormGroup;
  thirdStepper: FormGroup;
  fileName: string;
  signData: any;
  Dataverify: any;
  userName: string;
  datafromverification: any;
  fullName: any;
  splitName: any;
  public date: string;
  birthDate: string;
  stepOne: any;
  steptwo: any;
  stepthree: any;
  base64Image: any;
  galleryData: any;
  maxDate = new Date().toISOString();
  imgUrl: any;
  imagegallery: any;
  imagecamera: any;
  workerpopUp: any;

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private fb: FormBuilder,
    private file: File,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private service: HttpWrapperService,
    private camera: Camera,
    private base64: Base64,
    private transfer: FileTransfer,
    public modalController: ModalController

  ) { }

  ngOnInit() {
    this.datafromverification = this.service.verificationtostepper;
    console.log("this is the data in stpper =-=-=-=", this.datafromverification);


    this.firstStepper = this.fb.group({
      'firstname': new FormControl(null),
      'lastname': new FormControl('null'),
      'address': new FormControl('', Validators.compose([Validators.required])),
      'pincode': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern(/^[1-9][0-9]{5}$/)])),
      'email': new FormControl(null),
      'mobile': new FormControl(null),
      'dob': new FormControl(null),
      'gender': new FormControl('Male', Validators.required),
      'workeras': new FormControl('', Validators.required)

    });

    this.secondStepper = this.fb.group({
      'adharname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'adharno': new FormControl('', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/^\d{4}\d{4}\d{4}$/)])),
      'panname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'panno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/[A-Za-z]{5}\d{4}[A-Za-z]{1}/)])),

    });

    this.thirdStepper = this.fb.group({
      'accholdername': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'ifsc': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/)])),
      'bankAddress': new FormControl('', Validators.compose([Validators.required])),
      'bankname': new FormControl('', Validators.compose([Validators.required])),
      'confrmAccountNo': new FormControl('', Validators.compose([Validators.required])),
      'accountno': new FormControl('', Validators.compose([Validators.required])),
    })

    this.fullName = this.datafromverification.data.name;
    this.splitName = this.fullName.split(' ');
    this.firstStepper.patchValue({
      'firstname': this.splitName[0],
      'lastname': this.splitName[1],
      'email': this.datafromverification.data.email,
      'mobile': this.datafromverification.data.mobile_no,
      'dob': this.birthDate
    })
  }

  //* header text change function stepper */
  onclick(text) {
    console.log("Header Text -==-=-", text);
    this.headingText = text;
    localStorage.setItem('firstStepper', JSON.stringify(this.firstStepper.value));
  }

  onsecondclick(text) {
    console.log("Header Text -==-=-", text);
    this.headingText = text;
    localStorage.setItem('secondStepper', JSON.stringify(this.secondStepper.value));
  }

  //* worker popup api  */
  workerAs() {
    this.service.presentLoader();
    this.service.getData(appApiResources.workerAs).subscribe((data) => {
      console.log("this is the data -=-=-=-=", data);
      if (data) {
        this.service.dismissLoader();
        this.workerpopUp = data.data.data;
        console.log("this is the worker api result -=-=-=-=", this.workerpopUp);
      }
    }, (err) => {
      console.log(err);
      this.service.dismissLoader();
    })
  }


  Change($event) {
    console.log($event.target.value);
  }

  onNext() {
    localStorage.setItem('thirdStepper', JSON.stringify(this.thirdStepper.value));
    this.stepOne = JSON.parse(localStorage.getItem('firstStepper'));
    this.steptwo = JSON.parse(localStorage.getItem('secondStepper'));
    this.stepthree = JSON.parse(localStorage.getItem('thirdStepper'));
    this.service.presentLoader();
    let data = {
      'userId': JSON.parse(localStorage.getItem('userID')),
      'mobile_no': this.stepOne.mobile,
      'fname': this.stepOne.firstname,
      'lname': this.stepOne.lastname,
      'image': '',
      'email': this.stepOne.email,
      'address': this.stepOne.address,
      'pincode': this.stepOne.pincode,
      'dob': this.stepOne.dob,
      'gender': this.stepOne.gender,
      'aadhar_name': this.steptwo.adharname,
      'aadhar_no': this.steptwo.adharno,
      'aadhar_image': '',
      'pan_name': this.steptwo.panname,
      'pan_no': this.steptwo.panno,
      'pan_image': '',
      'account_name': this.stepthree.accholdername,
      'account_no': this.stepthree.accountno,
      'bank_name': this.stepthree.bankname,
      'branch_address': this.stepthree.bankAddress,
      'ifsc_code': this.stepthree.ifsc,
      'bankdocument': '',
      'worker_type_id': this.stepOne.workeras
    }
    this.service.postData(appApiResources.usersInfo, data, Headers).subscribe((data) => {
      if (data) {
        this.service.dismissLoader();
        console.log("this is the response of the user deatils 0=-=-=--=", data);

      }
    }, (err) => {
      console.log(err);
      this.service.dismissLoader();
    })
    this.router.navigate(['waiting-approval']);
  }

  galleryfnc() {
    var promise = new Promise((resolve, reject) => {
      const options: CameraOptions = {
        quality: 60,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true
      };
      this.camera.getPicture(options).then((imageData) => {
        console.log('img ==>', imageData + 'image ends');
        resolve(imageData);
        this.imagegallery = imageData.split('?')[0];

        console.log('this is the image gallery  ==>', this.imagegallery);
      });
      return promise;
    });
    // this.uploadImage();

  }

  // uploadImage() {
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   let options: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: 'name.jpg',
  //     headers: {
  //       'userId': JSON.parse(localStorage.getItem('userID')),
  //       'mobile_no': this.stepOne.mobile,
  //       'fname': this.stepOne.firstname,
  //       'lname': this.stepOne.lastname,
  //       'image': '',
  //       'email': this.stepOne.email,
  //       'address': this.stepOne.address,
  //       'pincode': this.stepOne.pincode,
  //       'dob': this.stepOne.dob,
  //       'gender': this.stepOne.gender,
  //       'aadhar_name': this.steptwo.adharname,
  //       'aadhar_no': this.steptwo.adharno,
  //       'aadhar_image': '',
  //       'pan_name': this.steptwo.panname,
  //       'pan_no': this.steptwo.panno,
  //       'pan_image': '',
  //       'account_name': this.stepthree.accholdername,
  //       'account_no': this.stepthree.accountno,
  //       'bank_name': this.stepthree.bankname,
  //       'branch_address': this.stepthree.bankAddress,
  //       'ifsc_code': this.stepthree.ifsc,
  //       'bankdocument': '',
  //       'worker_type_id': this.stepOne.workeras

  //     }
  //   }

  //   fileTransfer.upload(this.imagegallery, 'https://bandhan.herokuapp.com/api/v1/worker/update-all-details', options)
  //     .then((data) => {
  //       console.log("this is the data image -=-=-=", data);
  //     }, (err) => {
  //       console.log(err)
  //     })

  // }

}
