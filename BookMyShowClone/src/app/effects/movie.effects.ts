import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'
import {MovieService} from '../movie/movie.service'
import {GetMovieDetailsAction,GetMovieDetailsTypes,GetMovieDetailsSuccessAction,GetMovieDetailsFailAction}
 from '../actions/movie.actions'

@Injectable()

export class MovieEffects {
    constructor(
        private actions$: Actions,
        private service: MovieService
      ) { console.log('ooo')}
    @Effect() movieDetails$ = this.actions$
    .pipe(
      ofType<GetMovieDetailsAction>(GetMovieDetailsTypes.GET_MOVIE_DETAILS),
      mergeMap(
        (data) => this.service.movieDetails(data.payload)
          .pipe(
            map(data => {
                return new GetMovieDetailsSuccessAction(data) 
            }),
            catchError(error => of(new GetMovieDetailsFailAction(error)))
          )
      ),
  )







}






