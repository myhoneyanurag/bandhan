import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.page.html',
  styleUrls: ['./home-manager.page.scss'],
})
export class HomeManagerPage implements OnInit {

  constructor(private router: Router, private menuController: MenuController) {
    this.menuController.enable(true, 'second');
    this.menuController.enable(false, 'first');
   }
  ngOnInit() {
  }

  onNotify() {
    this.router.navigate(['notification-manager'])
  }
}
