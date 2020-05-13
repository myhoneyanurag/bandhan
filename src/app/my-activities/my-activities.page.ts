import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.page.html',
  styleUrls: ['./my-activities.page.scss'],
})
export class MyActivitiesPage implements OnInit {

  items: any = new Array(5);
  activityData: any;
  constructor(private router: Router, private menuController: MenuController, private httpService: HttpWrapperService) {

    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
  }
  ngOnInit() {

    this.myactivityapi();

  }

  myactivityapi() {
    this.httpService.presentLoader();
    let data = {
      "user_id": (localStorage.getItem('userID'))
    }
    this.httpService.postData(appApiResources.fetchactivity, data, Headers).subscribe((data) => {
      if (data) {
        console.log("this iss the activity data -=-=-=", data)
        this.httpService.dismissLoader();
        this.activityData = data.data.data;

        console.log("this is the my activity data -=-=-=", this.activityData);
      }
    }, (err) => {
      this.httpService.dismissLoader();
      console.log(err)
    })
  }

  onNotify() {
    this.router.navigate(['/notificationns']);
  }
}
