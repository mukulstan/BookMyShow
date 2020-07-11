import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private API_URL = environment.API_URL;
  // private APP_URL = environment.APP_URL
  constructor(private httpClient: HttpClient) { }


  addUser(user: any) {
  //  return this.httpClient.get(this.API_URL + 'users/signup')
    return this.httpClient.post(this.API_URL + 'users/signup',
    {user}).pipe(map((res) => 
    { return res }
    ));
  }
}
