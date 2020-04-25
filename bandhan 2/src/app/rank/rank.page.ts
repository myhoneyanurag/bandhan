import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private menuController: MenuController
  ) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

  ngOnInit() {}
  onNotify() {
    this.router.navigate(['/notificationns']);
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'In which group you wanna come?',
      inputs: [
        {
          name: 'Gold',
          type: 'radio',
          label: 'Gold',
          value: 'value1',
          checked: true,
        },
        {
          name: 'Silver',
          type: 'radio',
          label: 'Silver',
          value: 'value2',
        },
        {
          name: 'bronze',
          type: 'radio',
          label: 'Bronze',
          value: 'value3',
        },
      ],
      buttons: [
        {
          text: 'Send Request To manager',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
