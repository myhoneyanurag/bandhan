import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notificationns',
  templateUrl: './notificationns.page.html',
  styleUrls: ['./notificationns.page.scss'],
})
export class NotificationnsPage implements OnInit {

  items: any = new Array(5);
  constructor(private menuController: MenuController) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second')
   }

  ngOnInit() {
  }

}
