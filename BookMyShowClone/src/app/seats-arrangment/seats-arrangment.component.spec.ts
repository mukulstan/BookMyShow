import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import {SeatsArrangementService} from './seats-arrangement.service'
import { SeatsArrangmentComponent } from './seats-arrangment.component';
import {SeatsTestService} from '../../testing/model/seats-test.service'
import { By } from '@angular/platform-browser';
import {SeatsArrangmentModule} from './seats-arrangment.module' 

let comp: SeatsArrangmentComponent;
let fixture: ComponentFixture<SeatsArrangmentComponent>;
let page: Page;
describe('SeatsArrangmentComponent', () => {
  beforeEach(fakeAsync(() => { 
    TestBed
        .configureTestingModule({
          imports: [SeatsArrangmentModule],
          providers: [
            {provide: SeatsArrangementService, useClass: SeatsTestService}
          ]
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(SeatsArrangmentComponent);
          comp = fixture.componentInstance;
           // change detection triggers ngOnInit which gets a hero
fixture.detectChanges();
tick();
fixture.detectChanges();
page = new Page();
// return fixture.whenStable().then(() => {
//   // got the heroes and updated component
//   // change detection updates the view
//   fixture.detectChanges();
//   fixture.detectChanges();  
// });
});
  }));
  it('should display sections of movie hall', () => {
      expect(page.totalSection.length).toBeGreaterThan(0);
 });
 
});


  function compileAndCreate() {
    
    
     }
     class Page {
      /** Hero line elements */
      totalSection: HTMLLIElement[];
      totalSeats
      /** Highlighted DebugElement */
      // highlightDe: DebugElement;
    
      /** Spy on router navigate method */
      navSpy: jasmine.Spy;
    
      constructor() {
        const seatsNodes =  fixture.debugElement.queryAll(By.css('.positionSeatNumber'))
        this.totalSeats=  seatsNodes
      // const heroRowNodes=  fixture.debugElement.queryAll(By.css('strong'));
        const sectionNodes = fixture.debugElement.nativeElement.querySelectorAll('h3');
        this.totalSection = Array.from(sectionNodes);
    console.log('fix',this.totalSeats[0].nativeElement)
        // Find the first element with an attached HighlightDirective
        // this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));    
      }
    }
