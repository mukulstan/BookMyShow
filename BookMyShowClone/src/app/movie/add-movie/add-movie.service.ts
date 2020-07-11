import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  private API_URL = environment.API_URL;
  constructor(private httpClient: HttpClient) { }

  addMovie(movie){
  
    return this.httpClient.post(this.API_URL + 'admin/movie',
    {movie}).pipe(map((res) => 
    { return res }
    ));
  }
  
  }



