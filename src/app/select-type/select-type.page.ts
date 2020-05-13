import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.page.html',
  styleUrls: ['./select-type.page.scss'],
})
export class SelectTypePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWorker() {
    this.router.navigate(['/login']);
  }
  onSignUp() {
    this.router.navigate(['/signup']);
  }
  onManager() {
    this.router.navigate(['/login-manager']);
  }
}
