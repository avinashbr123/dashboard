import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';
import { ChartFourComponent } from './chart-four/chart-four.component';
import { ChartFiveComponent } from './chart-five/chart-five.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'ChartOne', component: ChartOneComponent },
	{ path: 'ChartTwo', component: ChartTwoComponent },
	{ path: 'ChartThree', component: ChartThreeComponent },
	{ path: 'ChartFour', component: ChartFourComponent },
	{ path: 'ChartFive', component: ChartFiveComponent },
];
export const routing = RouterModule.forRoot(appRoutes);