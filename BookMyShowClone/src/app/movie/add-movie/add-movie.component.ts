import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder,FormArray } from '@angular/forms';
import {AddMovieService}  from './add-movie.service'
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  addMovieForm: FormGroup;

  constructor(private formBuilder: FormBuilder,public movieService:AddMovieService) { }

ngOnInit(): void {
    this.addMovieForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      duration: ['', Validators.required],
      releaseDate: ['', Validators.required],
      trailerLink: [''],
      genre:  this.formBuilder.array([]),
      language: this.formBuilder.array([]),
      cast: new FormArray([]),
      crew: new FormArray([]),
    })


}
get f() { return this.addMovieForm.controls; }

get t() { return this.f.cast as FormArray; }
get crew() { return this.f.crew as FormArray; }

addNewGenre(){
let testArrayField = <FormArray>this.addMovieForm.controls['genre'];
 testArrayField.push(new FormControl());
console.log("--",testArrayField)
}

addLanguage(){
  let testArrayField = <FormArray>this.addMovieForm.controls['language'];
  testArrayField.push(new FormControl());

}


addCast() {
          this.t.push(this.formBuilder.group({
            actorName: ['', Validators.required],
            actingName: ['', Validators.required],
            role: ['', Validators.required]
  })) 
}

addCrew() {
          this.crew.push(this.formBuilder.group({
            crewName: ['', Validators.required],
            role: ['', Validators.required]
  }))
}



public onSubmit(values: any) {
  // values['role']=1
  // this.submitted = true
  this.movieService.addMovie(values).subscribe(
    (response: any) => {
      if(response.status.code==200){
      
      }

    },
    
    error => {
      console.log("error",error);
      
    })
}


trackByFn(index: number) {
  return index;
}

}