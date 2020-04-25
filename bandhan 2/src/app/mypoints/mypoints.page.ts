import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';





// Now init modules:


@Component({
  selector: 'app-mypoints',
  templateUrl: './mypoints.page.html',
  styleUrls: ['./mypoints.page.scss'],
})
export class MypointsPage implements OnInit {
  items: any = new Array(5);

constructor(private router: Router, private menuController: MenuController) {
this.menuController.enable(true, 'first');
this.menuController.enable(false, 'second');  

}

ngOnInit(): void {

  }
onNotify() {
    this.router.navigate(['/notificationns']);
  }

}
