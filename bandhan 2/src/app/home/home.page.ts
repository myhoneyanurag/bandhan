import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop: true
  };
 
  constructor(private router: Router,private menuController: MenuController) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false,'second');
  }

  onUpload() {
    this.router.navigate(['upload-activities']);
  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }
  onRank() {
    this.router.navigate(['/rank']);
  }
  onScheme() {
    this.router.navigate(['/schemes']);
  }
  myPoints(){
    this.router.navigate(['/mypoints']);
  }
}
