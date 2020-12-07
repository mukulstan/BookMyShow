import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeatsArrangementService {

  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getScreenArrangement(){
    return this.httpClient.get(this.API_URL + 'screenConfiguration').pipe(map((res) => 
    { return res }
    ));

  }
  getScreenSchedule(){
    return this.httpClient.get(this.API_URL + 'screenSchedule').pipe(map((res) => 
    { return res }
    ));
  }

}
