import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nameste',
  templateUrl: './nameste.page.html',
  styleUrls: ['./nameste.page.scss'],
})
export class NamestePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  presentAlert() {
    
    this.router.navigate(['/home']);
  
  }

  Notification(){
    this.router.navigate(['/notificationns']);
  }

}
