import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';
import { NeedworkComponent } from '../components/needwork/needwork.component'

declare var $: any;

@Component({
  selector: 'app-nameste',
  templateUrl: './nameste.page.html',
  styleUrls: ['./nameste.page.scss'],
})
export class NamestePage implements OnInit {
  storeData: any;
  items: any;
  names: any = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private alertController: AlertController,
    private httpService: HttpWrapperService,
    public modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
  }

  presentAlert() {

    this.router.navigate(['/home']);

  }

  Notification() {
    this.router.navigate(['/notificationns']);
  }

  //***********Needwork modal opens****************/
  async needWork(type: string) {
    let modal = await this.modalCtrl.create({
      component: NeedworkComponent
    });
    modal.present()
  }
  //***********************************************/



  // async needWork() {
  //   const alert = await this.alertController.create({
  //     header: 'In Which Category You Want To Work?',
  //     inputs: [
  //       {
  //         name: 's1',
  //         type: 'radio',
  //         label: 'Marble',
  //         value: 'value1',
  //         checked: true
  //       },
  //       {
  //         name: 's2',
  //         type: 'radio',
  //         label: 'Titles',
  //         value: 'value2'
  //       },
  //       {
  //         name: 's3',
  //         type: 'radio',
  //         label: 'Pipes',
  //         value: 'value3'
  //       },
  //       {
  //         name: 's3',
  //         type: 'radio',
  //         label: 'Others',
  //         value: 'value4'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Send Request To Administrator',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //           this.storeFunc();
  //           this.router.navigate(['/home']);
  //         }
  //       }
  //     ],

  //     mode: "ios"
  //   });
  //   await alert.present();
  //   this.menuController.close();
  // }

  storeFunc() {
    this.httpService.getData(appApiResources.getStore).subscribe((data) => {
      console.log("this is the store data -=-=-=-=", data);
      if (data) {
        this.storeData = data.data;
        this.presentAlertRadio();
      }
    }, (err) => {
      console.log(err);
    })

  }

  async presentAlertRadio() {
    const alert = await this.alertController.create(
      {

        header: 'Select Store',
        inputs: [
          {
            id: '',
            value: '',
            label: '',
            type: 'radio'
          },
        ],
        buttons: [
          {
            text: 'Switch Store',
            handler: (id) => {
              console.log('Confirm Ok', id);
              JSON.stringify(localStorage.setItem('storeId', id))
            }
          }
        ],
        mode: "ios"
      });
    await alert.present();
    this.menuController.close();
  }




  // // presentAlertRadio() {

  // //   // Object with options used to create the alert
  // //   var options = {
  // //     title: 'Choose the name',
  // //     message: 'Which name do you like?',
  // //     buttons: [
  // //       {
  // //         text: 'Cancel',
  // //         role: 'cancel',
  // //         handler: () => {
  // //           console.log('Cancel clicked');
  // //         }
  // //       },
  // //       {
  // //         text: 'Ok',
  // //         handler: data => {
  // //           console.log(data);
  // //         }
  // //       }
  // //     ]
  // //   };

  // //   // options.input = [];

  // // }
  // // // Now we add the radio buttons
  // // // for (let i = 0; i < this.names; i++) {
  // // //   console.log("this is the alertController data -=-=-=-=", i)
  // // //   //options.input.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' });
  // // // }

  // // // Create the alert with the options
  // // // let alert = this.alertController.create(options);
  // // // alert.present();
}

