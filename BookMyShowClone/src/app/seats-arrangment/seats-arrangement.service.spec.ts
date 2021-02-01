import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

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

    

  });

  
});
