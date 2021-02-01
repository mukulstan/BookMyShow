import { async, ComponentFixture, TestBed,tick,fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import {HomepageModule} from './homepage.module';
import {HomepageService} from './homepage.service';
import {HomeTestService} from '../../testing/model/home-test.service';


let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let page: Page
 
describe('HomepageComponent', () => {
  
  // let router: Router;
  let router = jasmine.createSpyObj('Router', ['navigate']);
  // let router: Router;
 
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomepageModule],
      declarations: [HomepageComponent ],
      providers: [
        {provide: Router, useValue: router},
        {provide: HomepageService, useClass: HomeTestService},
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomepageComponent);
      router = fixture.debugElement.injector.get(Router);
      component = fixture.componentInstance;
       // change detection triggers ngOnInit which gets a hero
fixture.detectChanges();
tick();
fixture.detectChanges();
page = new Page();
});
  }));
  it('should tell ROUTER to navigate when booking clicked', () => {
  let  heroRows
    // const heroEl: HTMLElement = fixture.nativeElement.querySelector('.card');  // trigger click on first inner <div class="hero">
    const li =page.heroRows[0];
    li.click()
  const navArgs = page.navSpy.calls.first().args[0][0];
  
    // expecting to navigate to id of the component's first movie
    const id = component.activeMovies[0]._id;
    expect(navArgs).toBe('movie/details/' + id, 'should nav to HeroDetail for first hero');
  });
  });
class Page {
  /** Hero line elements */
  heroRows: HTMLLIElement[];

  /** Highlighted DebugElement */
  // highlightDe: DebugElement;

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    // const heroRowNodes =   fixture.debugElement.queryAll(By.css('.test'))
    const heroRowNodes = fixture.nativeElement.querySelectorAll('.card');
    this.heroRows = Array.from(heroRowNodes);
    console.log('this.heroRows', this.heroRows[0])
    // Find the first element with an attached HighlightDirective
    // this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));

    // Get the component's injected router navigation spy
    const routerSpy = fixture.debugElement.injector.get(Router);
    this.navSpy = routerSpy.navigate as jasmine.Spy;
    // console.log('this.routerSpy', routerSpy)
  }
}