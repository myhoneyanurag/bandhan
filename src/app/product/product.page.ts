import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  listofProduct: any;
  list: any;
  // searchfilter: string;
  constructor(private httpService: HttpWrapperService, private router: Router) { }

  ngOnInit() {

    console.log("this is the vishal product list -=-=-=-=", this.httpService.productList);
    this.listofProduct = this.httpService.productList;
    this.list = this.listofProduct.data.data
    console.log("this is the vishal product list -=-=-=-=", this.list);
  }

  search(text) {
    this.httpService.presentLoader();
    console.log("this is the text -==--=-", text);
    if (text) {
      this.httpService.getData(appApiResources.product + `?prodName=` + text).subscribe((data) => {
        if (data) {
          this.httpService.dismissLoader();
          console.log("this is the filter data [=-=-=-=", data);
          this.list = data.data.data;
          console.log("this is final data -=-=-", this.list)
        }
      }, (err) => {
        console.log(err);
        this.httpService.dismissLoader();
      })
    }
  }

  gotoDesc(id) {
    console.log("this is the id of the product -=-=-=-=", id);
    this.httpService.productId = id
    this.router.navigate(['/prod-description']);
  }

  onNotify() {
    this.router.navigate(['/notificationns']);
  }

}



// this.httpService.presentLoader();
// this.httpService.getData(appApiResources.product).subscribe((data) => {
//   console.log("this is the product api hits ", data)
//   if (data) {
//     this.httpService.productList = data;
//     this.httpService.dismissLoader();
//     this.router.navigate(['/product']);
//     this.menuController.close();
//   }
// }, (err) => {
//   console.log(err);
//   this.httpService.dismissLoader();
// })