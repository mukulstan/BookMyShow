import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import {AddScreenScheduleService} from './add-screen-schedule.service'


@Component({
  selector: 'app-add-screen-schedule',
  templateUrl: './add-screen-schedule.component.html',
  styleUrls: ['./add-screen-schedule.component.scss']
})
export class AddScreenScheduleComponent implements OnInit {
  addScreenScheduleForm: FormGroup;
  screenSectionData=[]
  screenSectionSelected
   screenArray=[]
   timeArray=['8am','9am','10am','11am','12pm','1pm','2pm']
  

  BuildFormDynamic(product):FormGroup{    
    return this.formBuilder.group({    
      sectionName:[product],    
      ticketPerSection:[],    

     })    
   }
   

  constructor(private formBuilder: FormBuilder, private addScreenScheduleService :AddScreenScheduleService) { }

  ngOnInit(): void {
    this.screenSectionData=[
      {"screenName":'Hall1',
       "sections":['Gold','Silver','Bronze'] 
      },
      {"screenName":'Hall2',
       "sections":['Gold','Silver'] 
      },
      {"screenName":'Hall3',
      "sections":['Gold','Silver'] 
     }

    
    ]
    this.addScreenScheduleForm = this.formBuilder.group({
      movieId: ['', Validators.required],
      // movieTimeArray: new FormArray([]),
      screensData: new FormArray([]),
      screenName: ['', Validators.required],    // ---> change to screenId
      // timeSlots: new FormArray([]),  
    })
  }


  get f() { return this.addScreenScheduleForm.controls; }

  get t() { return this.f.screensData as FormArray; }

  // get startTime() { return this.f.movieTimeArray as FormArray; }

  onScreenName() {
    
    if(this.screenArray.length==0){
      console.log("----kkk")
      this.screenArray=this.addScreenScheduleForm.get('screenName').value
    }
    console.log("screenArray",this.screenArray)
 let  selectedScreen  = this.addScreenScheduleForm.get('screenName').value
 console.log("selectedScreen",selectedScreen)
   let filterArray=  selectedScreen.filter((screen)=>{
    for(let i=0;i<this.screenArray.length;i++){
      if(this.screenArray[i]!=screen){
        return screen
      }
} 
   })
   if(filterArray.length==0) {
     filterArray=this.screenArray
   }

console.log("screenArray.target.value",filterArray)
   this.screenSectionSelected= this.screenSectionData.filter((screensectionObject)=>{
     for(let i=0;i<filterArray.length;i++){
            if(filterArray[i]==screensectionObject.screenName){
              return screensectionObject.screenName
            }
     }})

    console.log("screenSectionSelected",this.screenSectionSelected)

    
// duplicate code below one will optimise latter

this.screenSectionSelected.forEach((screenSectionObject,index)=>{
  let arr=[];    
  for(let i=0;i< this.screenSectionSelected.length;i++) {
    for(let k=0;k<this.screenSectionSelected[i].sections.length;k++){       
    arr.push(this.BuildFormDynamic(this.screenSectionSelected[i].sections[k]))    
    }
    console.log("----",arr)
    this.t.push(this.formBuilder.group({
      screenId: [screenSectionObject.screenName],
      ticketSectionArray: this.formBuilder.array(arr),
      startDate: ['', Validators.required],
      endDate: [''],
      movieStartTime: ['', Validators.required],
      }));
    arr=[]
  }

 
  // console.log("screenSectionSelected",this.t.value)
  
})


console.log("screenSectionSelected2",this.screenSectionSelected)
  
}

// }
   
  addMovieStartTime(){
    this.screenSectionSelected.forEach((screenSectionObject,index)=>{
      let arr=[];    
      for(let i=0;i< this.screenSectionSelected.length;i++) {
        for(let k=0;k<this.screenSectionSelected[i].sections.length;k++){       
        arr.push(this.BuildFormDynamic(this.screenSectionSelected[i].sections[k]))    
        }
        console.log("----",arr)
        this.t.push(this.formBuilder.group({
          screenId: [screenSectionObject.screenName],
          ticketSectionArray: this.formBuilder.array(arr),
          startDate: ['', Validators.required],
          endDate: [''],
          movieStartTime: ['', Validators.required],
          }));
        arr=[]
      }
    
     
      // console.log("screenSectionSelected",this.t.value)
      
    })
  }

  public onSubmit(values: any) {
   let  days =1
    if (values.endDate){
      days =values.endDate-values.startDate
    }
    //  let showsInDay=values.movieTimeArray.length
    //  let screenCount=values.screenName

    //  let totalShows=days*showsInDay*screenCount


    // values['showCount']= totalShows
    // values['role']=1
    // this.submitted = true
    this.addScreenScheduleService.addScreenSchedule(values).subscribe(
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

  // https://blog.angulartraining.com/managing-nested-and-dynamic-forms-in-angular-cc07f8682ab8