import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpWrapperService } from 'src/app/services/http-wrapper.service';
import { appApiResources } from 'src/app/app.constants';
import { Router } from '@angular/router';
import { StoreComponent } from '../store/store.component';


@Component({
  selector: 'app-needwork',
  templateUrl: './needwork.component.html',
  styleUrls: ['./needwork.component.scss'],
})
export class NeedworkComponent implements OnInit {
  workerpopUp: any;
  catgoryId: any;

  constructor(
    private modalCtrl: ModalController,
    private httpService: HttpWrapperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.workerAs();
  }


  workerAs() {
    this.httpService.presentLoader();
    this.httpService.getData(appApiResources.workerAs).subscribe((data) => {
      console.log("this is the data -=-=-=-=", data);
      if (data) {
        this.httpService.dismissLoader();
        this.workerpopUp = data.data.data;
        console.log("this is the worker api result -=-=-=-=", this.workerpopUp);
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }

  Change($event) {
    console.log($event.target.value);
    this.catgoryId = $event.target.value;
  }

  sendToHome() {
    this.modalCtrl.dismiss();
    this.store('store');
    localStorage.setItem('category_Id', JSON.stringify(this.catgoryId));
    this.router.navigate(['/home']);
  }

  async store(type: string) {
    let modal = await this.modalCtrl.create({
      component: StoreComponent
    });
    modal.present()
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }


  // loadData(event) {
  //   setTimeout(() => {
  //     event.target.complete();
  //     if (this.workerpopUp.isNextDataSet == true) {
  //       this.bucketNo++;
  //       this.searchApi();
  //       event.target.disabled = true;
  //     }
  //   }, 2000);
  // }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

}
