import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

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
