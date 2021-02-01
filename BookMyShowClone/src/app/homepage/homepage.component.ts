import { Component, OnInit } from '@angular/core';
import {HomepageService} from './homepage.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 activeMovies:any
  constructor(private homePageService:HomepageService,private router:Router) { }
    
  ngOnInit(): void {
    this.homePageService.getActiveMovies().subscribe(
      (response: any) => {
        if(response.status.code==200){
          this.activeMovies=response.data  
          console.log("212",response.data)
        }},
      error => {
        console.log("error",error);
        // this.commonService.flashMessage(error, "alert-danger");
      })
  }

  selectedMovie(movieId){
    console.log("error22",movieId);
    this.router.navigate(['movie/details/'+movieId])
   
  }


}
