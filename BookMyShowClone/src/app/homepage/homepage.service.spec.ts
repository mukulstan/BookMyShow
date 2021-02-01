import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HomepageService } from './homepage.service';
import {movieMockData} from './homepage.data'
import { environment } from '../../environments/environment'

describe('HomepageService', () => {
  let homepageService: HomepageService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[HomepageService]
    });
    homepageService = TestBed.inject(HomepageService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  describe('#getHeroes', () => {
    let homepageService;
    let moviesData
    beforeEach(() => {
      homepageService = TestBed.inject(HomepageService);
      moviesData = movieMockData.movieData
    });
  it('should return expected heroes (called once)', () => {
    homepageService.getActiveMovies().subscribe(
      movies => expect(movies).toEqual(moviesData, 'should return expected heroes'), fail
    );
     
  
    const request = httpTestingController.expectOne(environment.API_URL+  'movie/online');
    request.flush(moviesData);
  
  
  });
  });

})




