import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MainService} from '../main/main.service';
import * as CanvasJS from '../canvasjs.min';
@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.css']
})
export class ChartOneComponent implements OnInit {
  response:any;
  usersList:any;

  constructor(public mainService: MainService,public router: Router) { }

  ngOnInit() {
    this.getUsers();
     }
 
drawchart(list){
  alert(JSON.stringify(list));
  let chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Monthly Expense"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			//toolTipContent: "<b>{post_id}</b>: ${TotalComments} (#percent%)",
			indexLabel: "{post_id} - #percent%",
			dataPoints: JSON.stringify(list)
    }]
	});
		
	chart.render();
}
  getUsers()
  {  
    
      this.mainService.getData('api/index.php/user/getCommentCount')
        .subscribe(
        (res: any) => {
          this.response = res.body;
          if (res.status == 200) {
           alert(JSON.stringify(this.response));
            this.usersList = this.response.RegistredUserDetails;
           alert(JSON.stringify(this.response));
           alert(JSON.stringify(this.response));
           this.drawchart(this.response);

          }
        },
        (error: any) => {
        
            alert('Error Getting  member');
          }
        );
     }
}
