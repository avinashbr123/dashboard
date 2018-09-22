import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { SharedService } from './service/shared.service';
import {MainService} from './main/main.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';
import { ChartFourComponent } from './chart-four/chart-four.component';
import { ChartFiveComponent } from './chart-five/chart-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartOneComponent,
    ChartTwoComponent,
    ChartThreeComponent,
    ChartFourComponent,
    ChartFiveComponent
  ],
  imports: [
    BrowserModule,routing,HttpModule
  ],
  providers: [SharedService,MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
