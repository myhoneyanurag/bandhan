import { Component, OnInit } from '@angular/core';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.page.html',
  styleUrls: ['./prod-description.page.scss'],
})
export class ProdDescriptionPage implements OnInit {
  prodId: any;
  details: any = {};

  constructor(private httpService: HttpWrapperService, private router: Router) { }

  ngOnInit() {
    this.prodId = this.httpService.productId;
    console.log("this is the product id fro mthe prod page -=-=-=", this.prodId);
    this.showProduct();
  }


  showProduct() {
    this.httpService.presentLoader();
    this.httpService.getData(`worker/products/${this.prodId}`).subscribe((data) => {
      console.log("this is the product id -=--=-=-", data);
      this.details = data.data;
      console.log("this is the product id -=--=-=-", this.details.name);
      this.httpService.dismissLoader();
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }

  onNotify() {
    this.router.navigate(['/notificationns']);
  }

}
