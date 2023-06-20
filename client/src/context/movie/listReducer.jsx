import {
  GET_MOVIE_LIST,
  GET_RANDOM,
  GET_NEW_MOVIE_SUC,
  GET_NEW_MOVIE_FETCH,
  GET_NEW_MOVIE_ERR,
} from "../types";

const listReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_RANDOM:
      return {
        ...state,
        random: action.payload,
      };

    case GET_NEW_MOVIE_FETCH:
      return {
        ...state,
        moviefetching: true,
      };

    case GET_NEW_MOVIE_SUC:
      return {
        ...state,
        moviefetching: false,
        newMovies: action.payload,
      };

    case GET_NEW_MOVIE_ERR:
      return {
        ...state,
        moviefetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default listReducer;
