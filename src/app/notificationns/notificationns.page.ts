import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificationns',
  templateUrl: './notificationns.page.html',
  styleUrls: ['./notificationns.page.scss'],
})
export class NotificationnsPage implements OnInit {

  items: any = new Array(5);
  constructor(private menuController: MenuController, private httpService: HttpWrapperService, private router: Router) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second')
  }

  ngOnInit() {
    this.getNotification();
  }

  getNotification() {
    this.httpService.presentLoader();
    let data = {
      'user_id': localStorage.getItem('userID'),
    }
    this.httpService.postData(appApiResources.notification, data, Headers).subscribe((data) => {
      console.log("this si the data of the notification-=--=-=", data);
      if (data) {
        this.httpService.dismissLoader();
        // this.router.navigate(['/notification'])
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }
}
