import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min'; 
import { Router, ActivatedRoute } from '@angular/router';
import {MainService} from '../main/main.service';

@Component({
  selector: 'app-chart-five',
  templateUrl: './chart-five.component.html',
  styleUrls: ['./chart-five.component.css']
})
export class ChartFiveComponent implements OnInit {

  constructor(public mainService: MainService,public router: Router) { }
  response:any;
  vendors:any;
   ngOnInit() {
    this.getUsers()
  }
  getUsers()
  {  
    
      this.mainService.getData('/shop/vendors/')
        .subscribe(
        (res: any) => {
          this.response = res.body;
          if (res.status == 200) {
          // alert(JSON.stringify(this.response));
            this.vendors = this.response.vendors;
          // alert(JSON.stringify(this.response));
           
          }
        },
        (error: any) => {
        
            alert('Error Getting  Data');
          }
        );
     }

}
