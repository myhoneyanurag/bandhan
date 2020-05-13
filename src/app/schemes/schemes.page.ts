import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';
@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.page.html',
  styleUrls: ['./schemes.page.scss'],
})
export class SchemesPage implements OnInit {
  schemeData: any;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private httpService: HttpWrapperService
  ) {

    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }

  ngOnInit() {
    this.getSchemes();
  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }

  getSchemes() {
    this.httpService.presentLoader();
    this.httpService.postData(appApiResources.getSchemes, '', Headers).subscribe((data) => {
      console.log("this is the schemes data ---=-=-=-=-=-", data.data.data);
      this.schemeData = data.data.data;
      if (data) {
        this.httpService.dismissLoader();
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }


}
