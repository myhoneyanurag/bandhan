import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.page.html',
  styleUrls: ['./schemes.page.scss'],
})
export class SchemesPage implements OnInit {
  
  constructor(private router: Router, private menuController: MenuController) {

    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');
   }

  ngOnInit() {
  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }

}
