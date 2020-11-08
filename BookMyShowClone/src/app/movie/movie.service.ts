import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }
  movieDetails(movieId){
    return this.httpClient.get(this.API_URL + 'movie/'+movieId).pipe(map((res) => 
    { return res }
    ));
  }
}
