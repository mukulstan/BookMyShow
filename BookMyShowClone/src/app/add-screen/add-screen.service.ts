import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddScreenService {
  private API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient) { }

  addScreen(screen){
    
    return this.httpClient.post(this.API_URL + 'owner/screenconfiguration',
    {screen}).pipe(map((res) => 
    { return res }
    ));
  }
  
  }



