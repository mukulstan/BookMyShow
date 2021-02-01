import { Injectable } from '@angular/core';
import { HomepageService} from '../../app/homepage/homepage.service'
import {movieMockData} from '../../app/homepage/homepage.data'
import {asyncData} from '../async-observable-helpers'

@Injectable()

export class HomeTestService extends HomepageService{
   constructor() {
        super(null);
      }

      getActiveMovies(){
       return asyncData(movieMockData.movieData)    
      }
}