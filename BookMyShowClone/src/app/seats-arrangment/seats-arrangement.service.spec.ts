import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { SeatsArrangementService } from './seats-arrangement.service';
import{SeatsArrangementMockData} from './seat-arrangement.data'
import { environment } from '../../environments/environment'
describe('SeatsArrangementService', () => {
  let seatsArrangementService: SeatsArrangementService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [ SeatsArrangementService ]
    });
    TestBed.configureTestingModule({});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    seatsArrangementService = TestBed.inject(SeatsArrangementService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#getHeroes', () => {
    let expectedSeats;
    let expectedSchedule
    // SeatsArrangementMockData
    beforeEach(() => {
      seatsArrangementService = TestBed.inject(SeatsArrangementService);
      expectedSeats = SeatsArrangementMockData.screenConfiguration
      expectedSchedule=SeatsArrangementMockData.screenSchedule
    });
    it('should return expected heroes (called once)', () => {
      seatsArrangementService.getScreenArrangement().subscribe(
        heroes => expect(heroes).toEqual(expectedSeats, 'should return expected heroes'),
        fail
      );
      seatsArrangementService.getScreenSchedule().subscribe(
        heroes => expect(heroes).toEqual(expectedSchedule, 'should return expected expectedSchedule'),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(environment.API_URL+ 'screenConfiguration');
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedSeats);
   
      const request = httpTestingController.expectOne(environment.API_URL+ 'screenSchedule');
      request.flush(expectedSchedule);


    });

    

    // it('should be OK returning no heroes', () => {
    //   heroService.getHeroes().subscribe(
    //     heroes => expect(heroes.length).toEqual(0, 'should have empty heroes array'),
    //     fail
    //   );

    //   const req = httpTestingController.expectOne(heroService.heroesUrl);
    //   req.flush([]); // Respond with no heroes
    // });

    // it('should turn 404 into a user-friendly error', () => {
    //   const msg = 'Deliberate 404';
    //   heroService.getHeroes().subscribe(
    //     heroes => fail('expected to fail'),
    //     error => expect(error.message).toContain(msg)
    //   );

    //   const req = httpTestingController.expectOne(heroService.heroesUrl);

    //   // respond with a 404 and the error message in the body
    //   req.flush(msg, {status: 404, statusText: 'Not Found'});
    // });

    // it('should return expected heroes (called multiple times)', () => {
    //   heroService.getHeroes().subscribe();
    //   heroService.getHeroes().subscribe();
    //   heroService.getHeroes().subscribe(
    //     heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
    //     fail
    //   );

    //   const requests = httpTestingController.match(heroService.heroesUrl);
    //   expect(requests.length).toEqual(3, 'calls to getHeroes()');

    //   // Respond to each request with different mock hero results
    //   requests[0].flush([]);
    //   requests[1].flush([{id: 1, name: 'bob'}]);
    //   requests[2].flush(expectedHeroes);
    // });
  });

  
});
