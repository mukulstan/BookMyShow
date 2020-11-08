import { Component, OnInit } from '@angular/core';
import {SeatsArrangementService} from './seats-arrangement.service'
@Component({
  selector: 'app-seats-arrangment',
  templateUrl: './seats-arrangment.component.html',
  styleUrls: ['./seats-arrangment.component.scss']
})
export class SeatsArrangmentComponent implements OnInit {

  constructor(public seatsArrangementService: SeatsArrangementService) { }

  ngOnInit(): void {

    this.seatsArrangementService.getScreenArrangement().subscribe(
      (response:any) =>{
        console.log("res",response)
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
