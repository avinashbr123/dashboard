import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { Router, ActivatedRoute } from '@angular/router';
import {MainService} from '../main/main.service';
@Component({
  selector: 'app-chart-four',
  templateUrl: './chart-four.component.html',
  styleUrls: ['./chart-four.component.css']
})
export class ChartFourComponent implements OnInit {

  constructor(public mainService: MainService,public router: Router) { }
  response:any;
  usersList:any;

  ngOnInit() {
    this.getUsers()
  }
  getUsers()
  {  
    
      this.mainService.getData('shop/customers/')
        .subscribe(
        (res: any) => {
          this.response = res.body;
          if (res.status == 200) {
           //alert(JSON.stringify(this.response));
            this.usersList = this.response.customers;
          // alert(JSON.stringify(this.response));
           
          }
        },
        (error: any) => {
        
            alert('Error Getting  Data');
          }
        );
     }
}
