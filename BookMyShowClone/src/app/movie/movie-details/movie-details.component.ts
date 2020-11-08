import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService:MovieService,private route: ActivatedRoute,private router: Router) { }
  movieId:string
  
  ngOnInit(): void {
   this.route.params.subscribe(
      params => {
          this.movieId = params['id'];
      },
      error => {
          console.log(error);
      });
 this.movieService.movieDetails(this.movieId).subscribe(
      (response:any) =>{
        console.log("res",response)
      },
      error => {
        console.log(error);
      
    })
}

bookTicket(){
  this.router.navigate(['seats-arrangement/'+this.movieId])
}
}
