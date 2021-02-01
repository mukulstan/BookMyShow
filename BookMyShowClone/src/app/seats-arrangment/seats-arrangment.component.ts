import { Component, OnInit, ElementRef } from '@angular/core';
import { SeatsArrangementService } from './seats-arrangement.service'
@Component({
  selector: 'app-seats-arrangment',
  templateUrl: './seats-arrangment.component.html',
  styleUrls: ['./seats-arrangment.component.scss']
})
export class SeatsArrangmentComponent implements OnInit {
  screenData: any
  cartArray=[]
  totalTicketPrice:number=0
  seatSelected:boolean=false
  // cartObject= new Map();
  cartObject={}
  constructor(public seatsArrangementService: SeatsArrangementService,private el: ElementRef) { }

  ngOnInit(): void {
    let screenScheduleData
    this.seatsArrangementService.getScreenSchedule().subscribe(
      (response: any) => {
        screenScheduleData = response.data[0]
        console.log("response", screenScheduleData)
        this.seatsArrangementService.getScreenArrangement().subscribe(
          (response: any) => {
           
            this.screenData = response.data.screenData[0].sectionData
            let ticketObject
            let seatNumber = 0
            console.log("res", this.screenData)
            this.screenData.forEach((sectionData) => {
              ticketObject = screenScheduleData.screensData.ticketSectionArray.find(screenSection => {
                return screenSection.sectionName == sectionData.name
              })
              sectionData.ticketPrice = ticketObject.ticketPerSection
              sectionData.seatsInRow.forEach((element, index) => {
                let emptySpaceIndex = 0;
              element.seatsArray = Array(element.totalSeatSpaces).fill(0).map((x, i) => {
                  for (let j = emptySpaceIndex; j < element.emptySpaces.length; j++) {
                    if (element.emptySpaces[j] == ++i) {
                      emptySpaceIndex = ++j;
                      return { emptySpacey: true }
                    }
                    // console.log("---",sectionData)
                    return { emptySpacey: false, seatNumber: sectionData.seats[index].seatsInRow[seatNumber++] }
                  }
                  return { emptySpacey: false, seatNumber: sectionData.seats[index].seatsInRow[seatNumber++] }
                })
                seatNumber=0
              })
            })
            console.log("screenData", this.screenData)

          },
          error => {
            console.log(error);

          })
      })
  }

  bookTicket(seatSelected,sectionObject) {
    let removeIndex
    console.log("se==",seatSelected,sectionObject)
    let keyField: HTMLInputElement = this.el.nativeElement.querySelector("#" + "id" + seatSelected.seatNumber);
      keyField.classList.add('seat-icon-selected')
    
  let seat= this.cartArray.find((cartObject,index)=>{
    removeIndex=index
    return cartObject.seatNumber==seatSelected.seatNumber
      })
      let ticketPrice =sectionObject.ticketPrice
    console.log("se11",seat,removeIndex)
    if(!seat){
     this.totalTicketPrice= this.totalTicketPrice>0 ? this.totalTicketPrice+ticketPrice :ticketPrice
     console.log("totalTicketPrice",this.totalTicketPrice)
         this.cartArray.push({seatNumber:seatSelected.seatNumber,ticketPrice:ticketPrice})
         this.seatSelected=true
    }
    else{
      this.cartArray.splice(removeIndex,1)
      this.totalTicketPrice= this.totalTicketPrice-ticketPrice
      this.seatSelected=false
      keyField.classList.remove('seat-icon-selected')
    }
    console.log('cartArray',this.cartArray)
    this.cartObject['totalTicketPrice']=this.totalTicketPrice
    this.cartObject['cartArray']=this.cartArray
    // this.cartObject.set('cartArray',this.cartArray)
    console.log("cartObjectrray",this.cartObject)
    // this.cartObject.set('totalTicketPrice',this.totalTicketPrice)
    
    
  }
  


}





//    if(this.totalTicketPrice){
  //       this.totalTicketPrice=this.totalTicketPrice+ticketPrice
  //      }
  //      else{
  //       this.totalTicketPrice=ticketPrice
  // }

 


  