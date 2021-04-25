import {GetMovieDetailsTypes, MovieAction} from '../actions/movie.actions';

export interface MovieState {
    posts: [],
}

const initialState = {}



export function MovieReducer(state=initialState , action: MovieAction){
    switch(action.type){
   
       case GetMovieDetailsTypes.GET_MOVIE_DETAILS:
           
           return {
               ...state,
           }
        
        case GetMovieDetailsTypes.GET_MOVIE_DETAILS_SUCCESS:
            console.log("inside reducer",action.payload)

            return {
                ...state,
                posts: action.payload,
               
            }
        }

    }