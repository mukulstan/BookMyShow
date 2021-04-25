import { Action } from '@ngrx/store';


export enum GetMovieDetailsTypes {
    GET_MOVIE_DETAILS= 'Get Movie Details',
    GET_MOVIE_DETAILS_SUCCESS='Get Movie Details Successfully',
    GET_MOVIE_DETAILS_FAIL='Get Movie Details Failed'
}

export class GetMovieDetailsAction implements Action {
    readonly type = GetMovieDetailsTypes.GET_MOVIE_DETAILS;
    constructor(public payload){
        // console.log("--in-",payload)
    }
}

export class GetMovieDetailsSuccessAction implements Action {
    readonly type = GetMovieDetailsTypes.GET_MOVIE_DETAILS_SUCCESS;
    constructor(public payload){
        // console.log("--in-",payload)
    }
}

export class GetMovieDetailsFailAction implements Action {
    readonly type = GetMovieDetailsTypes.GET_MOVIE_DETAILS_FAIL;
    constructor(public payload: any) {}
}


export type MovieAction = GetMovieDetailsAction | GetMovieDetailsSuccessAction