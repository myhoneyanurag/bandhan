import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { appApiResources } from 'src/app/app.constants'

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  isLoading: boolean;
  signupData: any;
  loginData: any;
  path: any;
  verificationtostepper: any;
  productList: any;
  productId: any;
  fromSettings: any;


  constructor(
    public http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) { }


  //* loader controller */
  async presentLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: "Please Wait",
      translucent: true,
      spinner: "bubbles",
    }).then(loadingInstance => {
      loadingInstance.present().then(() => {
        if (!this.isLoading) {
          loadingInstance.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  //* toast controller */
  async presentToast(val) {
    const toast = await this.toastController.create({
      message: val,
      duration: 3000,
      position: "bottom",
      color: '#ffc409',
    });
    toast.present();
  }

  //* post api wrapper start here */
  postData(url, data, isHeader): Observable<any> {
    let httpOptions = {}
    if (isHeader == 1) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
      return this.http.post(appApiResources.baseUrl + url, data, httpOptions)
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
      return this.http.post(appApiResources.baseUrl + url, data, httpOptions)
    }
  }


  /*get api for the data */

  getData(url): Observable<any> {
    console.log(url)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(appApiResources.baseUrl + url, httpOptions)

  }




}
