import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private API_URL = environment.API_URL;
  // private APP_URL = environment.APP_URL
  constructor(private httpClient: HttpClient) { }


  getActiveMovies(){
    return this.httpClient.get(this.API_URL + 'movie/online').pipe(map((res) => 
    { return res }
    ));

  }
  


}
