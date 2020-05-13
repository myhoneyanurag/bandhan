import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpWrapperService } from 'src/app/services/http-wrapper.service';
import { Router } from '@angular/router';
import { appApiResources } from 'src/app/app.constants'
import { ModalController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  storeData: any;
  storeId: any;
  @Input("value") value;
  constructor(
    private httpService: HttpWrapperService,
    private router: Router,
    private modalCtrl: ModalController,
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.getStore();
  }

  getStore() {
    this.httpService.presentLoader();
    this.httpService.getData(appApiResources.getStore).subscribe((data) => {
      console.log("this is the store data in the storeComponent -=-=-=", data);
      if (data) {
        this.httpService.dismissLoader();
        this.storeData = data.data;
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }

  Change($event) {
    console.log($event.target.value);
    this.storeId = $event.target.value;
  }

  sendToHome() {
    console.log("this is  the value from the app component -=-=", this.value)
    if (this.value == 'sidebar') {
      this.httpService.presentLoader();
      let data = {
        'user_id': JSON.parse(localStorage.getItem('userID')),
        'store_id': JSON.parse(localStorage.getItem('store_Id'))
      }
      this.httpService.postData(appApiResources.changeStore, data, Headers).subscribe((data) => {
        console.log("this is the response of the data -=-=-=-=", data);
        if (data) {
          this.httpService.dismissLoader();
          this.modalCtrl.dismiss();
          this.menuController.close();
        }
      }, (err) => {
        console.log(err);
        this.httpService.dismissLoader();
        this.modalCtrl.dismiss();
        this.menuController.close();
      })
    } else {
      this.modalCtrl.dismiss();
      localStorage.setItem('store_Id', JSON.stringify(this.storeId));
      this.menuController.close();
      this.router.navigate(['/home']);
    }
  }


  closeModal() {
    this.modalCtrl.dismiss();
    this.menuController.close();
  }

}
