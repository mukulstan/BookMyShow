import { Component, OnInit } from '@angular/core';
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
  constructor(public seatsArrangementService: SeatsArrangementService) { }

  ngOnInit(): void {
    let screenScheduleData
    this.seatsArrangementService.getScreenSchedule().subscribe(
      (response: any) => {
        screenScheduleData = response.data[0]
        console.log("response", screenScheduleData)
        this.seatsArrangementService.getScreenArrangement().subscribe(
          (response: any) => {
            console.log("res", response.data.screenData[0])
            this.screenData = response.data.screenData[0].sectionData
            let ticketObject
            this.screenData.forEach((sectionData) => {
              ticketObject = screenScheduleData.screensData.ticketSectionArray.find(screenSection => {
                return screenSection.sectionName == sectionData.name
              })
              sectionData.ticketPrice = ticketObject.ticketPerSection
              sectionData.seatsInRow.forEach((element, index) => {
                let emptySpaceIndex = 0;
                let seatNumber = 0

                element.seatsArray = Array(element.totalSeatSpaces).fill(0).map((x, i) => {
                  for (let j = emptySpaceIndex; j < element.emptySpaces.length; j++) {
                    if (element.emptySpaces[j] == ++i) {
                      emptySpaceIndex = ++j;
                      return { emptySpacey: true }
                    }
                    return { emptySpacey: false, seatNumber: ++seatNumber }
                  }
                  return { emptySpacey: false, seatNumber: ++seatNumber }
                })
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
    console.log("se",seatSelected,sectionObject)
  let seat= this.cartArray.find((cartObject,index)=>{
    removeIndex=index
    return cartObject.seatNumber==seatSelected.seatNumber
      })
      let ticketPrice =sectionObject.ticketPrice
    console.log("se11",seat,removeIndex)
    if(!seat){
     this.totalTicketPrice= this.totalTicketPrice>0 ? this.totalTicketPrice+ticketPrice :ticketPrice
     console.log("totalTicketPrice",this.totalTicketPrice)
         this.cartArray.push({seatNumber:seatSelected.seatNumber})
         this.seatSelected=true
    }
    else{
      this.cartArray.splice(removeIndex,1)
      this.totalTicketPrice= this.totalTicketPrice-ticketPrice
      this.seatSelected=false
    }
    console.log("cartArray",this.cartArray,this.totalTicketPrice)
    
  }
  


}





//    if(this.totalTicketPrice){
  //       this.totalTicketPrice=this.totalTicketPrice+ticketPrice
  //      }
  //      else{
  //       this.totalTicketPrice=ticketPrice
  // }