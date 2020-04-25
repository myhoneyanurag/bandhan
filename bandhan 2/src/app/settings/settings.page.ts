import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

}
