import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.page.html',
  styleUrls: ['./my-activities.page.scss'],
})
export class MyActivitiesPage implements OnInit {

  items: any = new Array(5);
  constructor(private router: Router, private menuController: MenuController) {

    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
   }
  ngOnInit() {
  }

  onNotify() {
    this.router.navigate(['/notificationns']);
  }
}
