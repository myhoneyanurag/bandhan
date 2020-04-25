import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  onSettings() {

    this.router.navigate(['/settings']);
    this.menuController.close();
  }
  onSettingsMan() {

    this.router.navigate(['/settings-manager']);
    this.menuController.close();
  }
  onHome() {

    this.router.navigate(['/home']);
    this.menuController.close();
  }
  onHomeMan() {

    this.router.navigate(['/home-manager']);
    this.menuController.close();
  }
  onNotifications() {

    this.router.navigate(['/notificationns']);
    this.menuController.close();
  }
  onNotificationsMan() {

    this.router.navigate(['/notifications-manager']);
    this.menuController.close();
  }
  onMyPoints() {

    this.router.navigate(['/mypoints']);
    this.menuController.close();
  }
  onAbout() {

    this.router.navigate(['/about-us']);
    this.menuController.close();
  }
  onMyActivity() {

    this.router.navigate(['/my-activities']);
    this.menuController.close();
  }
  onSchemes() {

    this.router.navigate(['/schemes']);
    this.menuController.close();
  }
  onFeed() {

    this.router.navigate(['/feedback']);
    this.menuController.close();
  }
  onLogOut() {

    this.router.navigate(['/select-type']);
    this.menuController.close();
  }


  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Select Store',
      inputs: [
        {
          name: 's1',
          type: 'radio',
          label: 'Store 1',
          value: 'value1',
          checked: true
        },
        {
          name: 's2',
          type: 'radio',
          label: 'Store 2',
          value: 'value2'
        },
        {
          name: 's3',
          type: 'radio',
          label: 'Store 3',
          value: 'value3'
        }
      ],
      buttons: [
       {
          text: 'Switch Store',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ], 
      mode:"ios"
    });
    await alert.present();
    this.menuController.close();
  }

  product(){
    this.router.navigate(['/product']);
    this.menuController.close();
  }

  async group(){
     const alert = await this.alertController.create({
      header: 'In which group the worker to come under?',
      inputs: [
        {
          name: 's1',
          type: 'radio',
          label: 'Gold',
          value: 'value1',
          checked: true
        },
        {
          name: 's2',
          type: 'radio',
          label: 'Silver',
          value: 'value2'
        },
        {
          name: 's3',
          type: 'radio',
          label: 'Bonze',
          value: 'value3'
        }
      ],
      buttons: [
       {
          text: 'Send Request To Administrator',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ],

      mode: "ios"
    });
    await alert.present();
    this.menuController.close();
  }

}
