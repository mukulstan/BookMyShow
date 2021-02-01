import { async, ComponentFixture, TestBed,tick,fakeAsync } from '@angular/core/testing';
import { Router,ActivatedRoute } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import {ActivatedRouteStub} from '../activated-route-stub'
import {movieMockData} from '../../homepage/homepage.data'
import {MovieService} from '../movie.service'
import {MovieTestService} from '../../../testing/model/movie-test.service';
import {MovieModule} from '../movie.module'
let fixture: ComponentFixture<MovieDetailsComponent>;
let activatedRoute: ActivatedRouteStub;
let page: Page;


describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let router: Router;
  let expectedMovie

  beforeEach(fakeAsync(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      imports:[MovieModule],
      declarations: [ MovieDetailsComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Router, useValue: routerSpy},
        {provide: MovieService, useClass: MovieTestService},
      ],
    })
    .compileComponents()
    .then(() => {
   
    const firstMovie=movieMockData.movieData.data[0]
    expectedMovie = firstMovie;
    console.log('=====',expectedMovie._id)
    activatedRoute.setParamMap({id: expectedMovie._id})
      fixture = TestBed.createComponent(MovieDetailsComponent);
      // router = fixture.debugElement.injector.get(Router);
      component = fixture.componentInstance;
      page = new Page(fixture);
      
       // change detection triggers ngOnInit which gets a hero
fixture.detectChanges();
tick();
fixture.detectChanges();

});
  }));
  
  

  it('should display 1st hero\'s name', async(() => {
  
    console.log('===',page.nameDisplay.textContent)
   expect(page.nameDisplay.textContent).toBe(expectedMovie.movieName);
  
  }));
  
  
});

class Page {
  // getter properties wait to query the DOM until called.
  get buttons() {
    return this.queryAll<HTMLButtonElement>('button');
  }
  get saveBtn() {
    return this.buttons[0];
  }
  get cancelBtn() {
    return this.buttons[1];
  }
  get nameDisplay() {
    return this.query<HTMLElement>('h3');
  }
  get nameInput() {
    return this.query<HTMLInputElement>('input');
  }

  gotoListSpy: jasmine.Spy;
  navigateSpy: jasmine.Spy;

  constructor(someFixture: ComponentFixture<MovieDetailsComponent>) {
    // get the navigate spy from the injected router spy object
    const routerSpy = someFixture.debugElement.injector.get(Router) as any;
    this.navigateSpy = routerSpy.navigate;

    // spy on component's `gotoList()` method
    const someComponent = someFixture.componentInstance;
    // this.gotoListSpy = spyOn(someComponent, 'gotoList').and.callThrough();
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}
