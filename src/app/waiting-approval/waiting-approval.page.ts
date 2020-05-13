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
  ) { }

  ngOnInit() { }

  gotoNamaste() {
    this.router.navigate(['/nameste']);
  }
}
