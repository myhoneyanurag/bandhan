import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AlertController } from '@ionic/angular';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';


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
  fileName: string;
  birthDate: any;
  product_Id: any;
  product_list: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private menuController: MenuController,
    private datePicker: DatePicker,
    public fb: FormBuilder,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private httpService: HttpWrapperService

  ) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

  ngOnInit() {

    this.uploadActivity = this.fb.group({
      'invoice': new FormControl('', Validators.required),
      'dob': new FormControl(null),
      'invoiceno': new FormControl('', Validators.compose([Validators.required,])),
      'nameofcustomer': new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z A-Z]+(([',. -][a-z A-Z ])?[a-z A-Z]*)*$/)])),
      'mobileno': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/), Validators.minLength(4), Validators.maxLength(12)])),
      'billvalue': new FormControl('', Validators.compose([Validators.required])),
      'productValue': new FormControl('', Validators.compose([Validators.required]))
    })
    this.uploadActivity.patchValue({
      'dob': this.birthDate
    })

  }
  //* upload files function */
  uploadFiles() {
    this.fileChooser.open().then((uri) => {
      this.filePath.resolveNativePath(uri).then((nativepath) => {
        this.fileName = (JSON.stringify(nativepath).replace(/^.*[\\\/]/, ''))
        alert("this is the 1alert -=-= " + JSON.stringify(nativepath))
        //     this.fileTransfer = this.transfer.create();
        //     let options: FileUploadOptions = {
        //       fileKey: 'ImageFile',
        //       fileName: 'Image.jpeg',
        //       chunkedMode: false,
        //       headers: {},
        //       mimeType: 'image/jpeg'
        //     }

        //     this.uploadText = "uploading.....";
        //     this.fileTransfer.upload(nativepath, 'Your endpoint api url', options).then((data) => {
        //       alert("this is the 3alert -=-= " + data)
        //       alert("Transfer done = " + JSON.stringify(data));
        //       this.uploadText = "";
        //     }, (err) => {
        //       alert("this is the error 1 -=-= " + JSON.stringify(err))
        //     })
        //   }, (err) => {
        //     alert("this is the error 2 -=-= " + JSON.stringify(err))
        //   })
        // }, (err) => {
        //   alert("this is the error 3 -=-= " + JSON.stringify(err))
        // })
      })
    })
  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }

  async gotoHome() {
    this.httpService.presentLoader();
    let data = {

      'user_id': JSON.parse(localStorage.getItem('userID')),
      'store_id': JSON.parse(localStorage.getItem('store_Id')),
      'date': this.uploadActivity.value.dob,
      'invoice_no': this.uploadActivity.value.invoiceno,
      'customer_name': this.uploadActivity.value.nameofcustomer,
      'customer_mobile_no': this.uploadActivity.value.mobileno,
      'total_bill_value': this.uploadActivity.value.billvalue,
      'total_product_value': this.uploadActivity.value.productValue,
      'invoice': '',
      'product_id': JSON.parse(localStorage.getItem('prod_id'))
    }
    this.httpService.postData(appApiResources.addactivity, data, Headers).subscribe((data) => {
      console.log("this is the add activity data =-=-=-=-", data);
      if (data) {
        this.httpService.dismissLoader();
      }
    }, (err) => {
      this.httpService.dismissLoader();
      console.log(err);
    })

    const alert = await this.alertController.create({
      header: 'Invoice',
      cssClass: 'alert',
      message:
        'Your Invoice has been sent for approval.',
      buttons: [
        {
          text: 'close',
          cssClass: 'btnalert'
        }
      ],
    });
    this.router.navigate(['/home']);
    await alert.present();
  }

  product() {
    this.httpService.presentLoader();
    this.httpService.getData(appApiResources.product).subscribe((data) => {
      if (data) {
        this.httpService.dismissLoader();
        console.log("this is the data -=-==-=", data.data);
        this.product_list = data.data.data;
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }
  Change($event) {
    console.log($event.target.value);
    this.product_Id = $event.target.value;
    localStorage.setItem('prod_id', this.product_Id);
  }
}
