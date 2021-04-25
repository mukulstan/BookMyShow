import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Store,select} from '@ngrx/store';
import {GetMovieDetailsAction} from '../../actions/movie.actions'
import AppState from '../../models/app-state.model'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService:MovieService,private route: ActivatedRoute,private router: Router,private store: Store<AppState>) { }
  movieId:string
  movieName:string
  ngOnInit(): void {
    console.log('2',this.route.paramMap)
   this.route.paramMap.subscribe(
      params => {
        console.log('idde',params)
          this.movieId = params['id'];
          this.movieId='5efa3ef59de42327b0e612ab'
          console.log('ithis.movieId',this.movieId)
      },
      error => {
          console.log(error);
      })
      // let data= this.store.select(store => store.post);
      let data= this.store.pipe(select(state => state.post));
      this.store.dispatch(new GetMovieDetailsAction(this.movieId));
      
     console.log("data",data)
     data.subscribe(currentPizzas => {
      // This function is called everytime your state changes + initial state
      console.log(currentPizzas); // This logs your current pizza state
   });
 
//  this.movieService.movieDetails(this.movieId).subscribe(
//       (response:any) =>{
//         console.log("res12",response)
//         this.movieName=response.movieName
//       },
//       error => {
//         console.log(error);   
//     })
}

bookTicket(){
  this.router.navigate(['seats-arrangement/'+this.movieId])
}
}
