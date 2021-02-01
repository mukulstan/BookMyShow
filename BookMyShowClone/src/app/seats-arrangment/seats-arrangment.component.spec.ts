import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import {SeatsArrangementService} from './seats-arrangement.service'
import { SeatsArrangmentComponent } from './seats-arrangment.component';
import {SeatsTestService} from '../../testing/model/seats-test.service'
import { By } from '@angular/platform-browser';
import {SeatsArrangmentModule} from './seats-arrangment.module' 
import {SeatsArrangementMockData} from './seat-arrangement.data'

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
// });
});
  }));

  it('should display sections of movie hall', () => {
      expect(page.totalSection.length).toBeGreaterThan(0);
 });

 it('should selects seats on user click from gold section', () => {
   let seatSelected=comp.screenData[0].seatsInRow[0].seatsArray[2]
   comp.bookTicket(seatSelected,comp.screenData[0]) 
   console.log('jasmine',comp.cartObject)
  expect(comp.cartObject['cartArray'][0].seatNumber).toBe('A1','First seat selected from gold section');
});
it('total ticket price of multiple seats is working accurately', () => {

  let seatSelected=comp.screenData[1].seatsInRow[0]
  comp.bookTicket(seatSelected.seatsArray[2],comp.screenData[1]) 
  comp.bookTicket(seatSelected.seatsArray[3],comp.screenData[1]) 
expect(comp.cartObject['cartArray'][0].seatNumber).toBe('D1','First seat selected from silver section');
expect(comp.cartObject['totalTicketPrice']).toBe(24,'Total Ticket Price');
});
});

     class Page {
      /** Hero line elements */
      totalSection: HTMLLIElement[];
      totalSeats
      /** Spy on router navigate method */
      navSpy: jasmine.Spy;
    
      constructor() {
        const seatsNodes =  fixture.debugElement.queryAll(By.css('.positionSeatNumber'))
        this.totalSeats=  seatsNodes
      // const heroRowNodes=  fixture.debugElement.queryAll(By.css('strong'));
        const sectionNodes = fixture.debugElement.nativeElement.querySelectorAll('h3');
        this.totalSection = Array.from(sectionNodes);
    // console.log('fix',this.totalSeats[0].nativeElement)
        // Find the first element with an attached HighlightDirective
        // this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));    
      }
    }
