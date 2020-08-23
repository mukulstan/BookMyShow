import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder,FormArray } from '@angular/forms';
import {AddScreenService} from './add-screen.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss']
})
export class AddScreenComponent implements OnInit {
    screenSectionData
dynamicAddForm: FormGroup;
constructor(private formBuilder: FormBuilder,public addScreenService:AddScreenService,) { }

ngOnInit(): void {
    this.dynamicAddForm = this.formBuilder.group({
        numberOfScreens: ['', Validators.required],
        screendata: new FormArray([])
    })


}
get f() { return this.dynamicAddForm.controls; }

get t() { return this.f.screendata as FormArray; }




onChangeScreen(e) {
    const numberOfScreen = e.target.value || 0 ;
    // console.log("--ss--",this.t)
    if (this.t.length < numberOfScreen) {
        for (let i = this.t.length; i < numberOfScreen; i++) {
          this.t.push(this.formBuilder.group({
                name: ['', Validators.required],
                numberOfSection: ['', Validators.required],
                sectiondata: new FormArray([])
            }));
        }
        console.log("--ss1aa2--",this.t.controls)
    } else {
        for (let i = this.t.length; i >= numberOfScreen; i--) {
            this.t.removeAt(i);
        }
    }
}




onChangeSection(e,control) {

      const numberOfSection = e.target.value || 0;
      console.log("numberOfSection",control)
      if(control.length <numberOfSection){
          
          for(let k=control.length;k<numberOfSection;k++){
              console.log("innw")
              control.push(this.formBuilder.group({
          name: ['', Validators.required],
          numberOfRows: ['', Validators.required],
          seatsInRow: new FormArray([])
      }))
      console.log("numberOfSectio2n",control)
      }}
  }


  onSeatsInRowChange(rows,control) {
    const numberOfRows = rows.target.value || 0 ;
    for(let k=control.length;k<numberOfRows;k++){
        control.push(this.formBuilder.group({
        //  rowNumber:['', Validators.required],
         numberOfSeatsInRow:['', Validators.required],
         emptySpaces:this.formBuilder.array([]),
         totalSeatSpaces:['', Validators.required],
         
}))

    }
    console.log("fRows",control)
    // console.log("numberOfRows",control.controls[0].value)
}




public onSubmit(values: any) {
    values['role']=1
    // this.submitted = true
    this.addScreenService.addScreen(values).subscribe(
      (response: any) => {
        if(response.status.code==200){
        
        }

      },
      
      error => {
        console.log("error",error);
        
      }

    )
  }

}
