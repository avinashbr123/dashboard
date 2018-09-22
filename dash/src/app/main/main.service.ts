import { Injectable } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
@Injectable()
export class MainService {

  constructor(private sharedService: SharedService) { }
	getData(url) {
		return this
			.sharedService
			.get(url)
			.map((res: Response) => res)
			.catch((error: any) => Observable.throw(error || 'Server error'));
	}
}
