import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-approval',
  templateUrl: './waiting-approval.page.html',
  styleUrls: ['./waiting-approval.page.scss'],
})
export class WaitingApprovalPage implements OnInit {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invoice',
      cssClass: 'alert',
      message:
        'Your Invoice has been sent for approval.',
      buttons: [
        {
          text: 'close',
          cssClass: 'btnalert'
        }
      ],
    });
    this.router.navigate(['/home']);
    await alert.present();
  }
}
