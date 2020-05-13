import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { appApiResources } from '../app.constants';
import { FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-mypoints',
  templateUrl: './mypoints.page.html',
  styleUrls: ['./mypoints.page.scss'],
})
export class MypointsPage implements OnInit {
  items: any = new Array(5);

  // Data
  chartData: ChartDataSets[] = [{ data: [], label: 'Points' }];
  chartLabels: Label[];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Points Chart'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];
  chartType = 'line';
  showLegend = false;

  // For search
  stock = 'AAPL';
  userId: string;
  changedRadio: any;
  pointsForm: any;
  startDate: any;
  endDate: any;
  dataReceived: any;

  constructor(private fb: FormBuilder, private router: Router, private menuController: MenuController, private http: HttpClient, private httpService: HttpWrapperService) {
    this.menuController.enable(true, 'first');
    this.menuController.enable(false, 'second');

  }

  ngOnInit(): void {

    this.pointsForm = this.fb.group({
      'radio': this.changedRadio,
      'startdate': this.startDate,
      'enddate': this.endDate
    })

  }
  onNotify() {
    this.router.navigate(['/notificationns']);
  }

  startChange($event) {
    this.startDate = new Date($event.target.value).getTime() / 1000;
    console.log("this is the event -=-=-=", this.startDate);


  }
  endChange($event) {
    this.endDate = new Date($event.target.value).getTime() / 1000;
    console.log("this is the event -=-=-=", this.endDate);
  }

  getData() {
    this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
      const history = res['historical'];

      this.chartLabels = [];
      this.chartData[0].data = [];

      for (let entry of history) {
        this.chartLabels.push(entry.date);
        this.chartData[0].data.push(entry['close']);
      }
    });
  }

  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = 'line';
  }

  onChangeHandler($event) {
    console.log("dnfjfndkfdkf=-=-=-", $event.target.value);
    this.changedRadio = $event.target.value;
  }

  pointApi() {
    this.httpService.presentLoader();
    this.userId = localStorage.getItem('userID');
    let data = {
      'filter': this.pointsForm.value.radio,
      'from_date': this.pointsForm.value.startDate,
      'to_date': this.pointsForm.value.endDate
    }
    this.httpService.postData(appApiResources.points + this.userId, data, Headers).subscribe((data) => {
      console.log("this is the point api data-=-=-=", data);
      if (data) {
        this.httpService.dismissLoader();
        this.dataReceived = data.data
        console.log("this is the recevied data -=-=-", this.dataReceived);
        this.getData();
      }
    }, (err) => {
      console.log(err);
      this.httpService.dismissLoader();
    })
  }

}
