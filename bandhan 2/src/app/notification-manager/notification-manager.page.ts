import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.page.html',
  styleUrls: ['./notification-manager.page.scss'],
})
export class NotificationManagerPage implements OnInit {

  constructor(private router: Router, private menuController: MenuController) {
    this.menuController.enable(true, 'second');
    this.menuController.enable(false, 'first');
   }

  ngOnInit() {
  }
onView() {
  this.router.navigate(['/new-request'])
}
}
