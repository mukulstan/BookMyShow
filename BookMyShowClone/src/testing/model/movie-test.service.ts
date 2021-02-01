import { Injectable } from '@angular/core';
import {MovieService} from '../../app/movie/movie.service'
import {movieMockData} from '../../app/homepage/homepage.data'
import {asyncData} from '../async-observable-helpers'

@Injectable()

export class MovieTestService extends MovieService{
   constructor() {
        super(null);
      }

      movieDetails(movieId){
       return asyncData(movieMockData.movieData.data[0])    
      }
}

