import { Injectable } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';

export interface LinkDefinition {
}


@Injectable()
export class CommonService {


	constructor(private router: Router) { }

	handleApiResponse(res) {
		if (res.status.code == 401) { // TOKEN_EXPIRED
			// this.flasMessage(res.json().status.message, 'alert-danger');
			this.router.navigate(['logout']);
		} else if (res.status.code == 403 || res.json().status.code == 405) {  // Request FORBIDDEN
			// this.flasMessage(res.json().status.message, 'alert-danger');
			
			return res.json();
		} else {   // Success
			return res
		}
	}



}


