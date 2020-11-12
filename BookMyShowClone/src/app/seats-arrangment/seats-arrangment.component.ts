import { Component, OnInit } from '@angular/core';
import { SeatsArrangementService } from './seats-arrangement.service'
@Component({
  selector: 'app-seats-arrangment',
  templateUrl: './seats-arrangment.component.html',
  styleUrls: ['./seats-arrangment.component.scss']
})
export class SeatsArrangmentComponent implements OnInit {
  screenData: any
  constructor(public seatsArrangementService: SeatsArrangementService) { }

  ngOnInit(): void {

    this.seatsArrangementService.getScreenArrangement().subscribe(
      (response: any) => {
        console.log("res",response.data.screenData[0])
        this.screenData = response.data.screenData[0].sectionData   
          this.screenData.forEach((sectionData)=>{
        sectionData.seatsInRow.forEach((element, index) => {
          let emptySpaceIndex = 0
          element.seatsArray = Array(element.totalSeatSpaces).fill(0).map((x, i) => {
            for (let j = emptySpaceIndex; j < element.emptySpaces.length; j++) {
              if (element.emptySpaces[j] == ++i) {
                emptySpaceIndex = ++j;
                return { emptySpacey: true } 
              }
              return { emptySpacey: false }
            }
            return { emptySpacey: false }
          })
        })
      })
        console.log("screenData", this.screenData)

      },
      error => {
        console.log(error);

      })
      // this.data=this.data.seatsInRow
      //  this.data.forEach((element,index) => {
      //   element.totalSeatSpaces = Array(element.totalSeatSpaces).fill(0).map((x,i)=>i);     

      //  })
      ;


  }

}
