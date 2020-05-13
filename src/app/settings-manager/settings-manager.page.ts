import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings-manager',
  templateUrl: './settings-manager.page.html',
  styleUrls: ['./settings-manager.page.scss'],
})
export class SettingsManagerPage implements OnInit {

  constructor(private router: Router, private menuController: MenuController) {
    this.menuController.enable(true, 'second');
    this.menuController.enable(false, 'first');
   }
  ngOnInit() {
  }

}
