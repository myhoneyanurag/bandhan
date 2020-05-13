import { Router } from '@angular/router';
import { Component, Output } from '@angular/core';

import { Platform, MenuController, AlertController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpWrapperService } from './services/http-wrapper.service';
import { appApiResources } from './app.constants';
import { StoreComponent } from 'src/app/components/store/store.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  profileName: string;
  Name1: any;
  Name2: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController,
    private alertController: AlertController,
    private httpService: HttpWrapperService,
    private modalCtrl: ModalController,
  ) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.Name1 = JSON.parse(localStorage.getItem('firstStepper')).firstname;
      this.Name2 = JSON.parse(localStorage.getItem('firstStepper')).lastname;
      console.log("this is the profile name -=-=-=", this.Name1);
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
    this.httpService.presentLoader();
    let data = {
      'userId': localStorage.getItem(('userID'))
    }
    this.httpService.postData(appApiResources.logout, data, Headers).subscribe((data) => {
      if (data) {
        this.httpService.dismissLoader();
        localStorage.removeItem('userID');
        localStorage.removeItem('firstStepper');
        localStorage.removeItem('secondStepper');
        localStorage.removeItem('thirdStepper')
        this.router.navigate(['/select-type']);
        this.menuController.close();
      }
    })
  }

  async store(type: string) {
    console.log("the modal from -=-=-=-", type)
    let modal = await this.modalCtrl.create({
      component: StoreComponent, componentProps: {
        'value': type
      }
    });
    modal.present()
  }


  product() {
    this.httpService.presentLoader();
    this.httpService.getData(appApiResources.product).subscribe((data) => {
      console.log("this is the product api hits ", data)
      if (data) {
        this.httpService.productList = data;
        this.httpService.dismissLoader();
        this.router.navigate(['/product']);
        this.menuController.close();
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }
}
