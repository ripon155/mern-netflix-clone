import {
  MOVIE_FAILURE,
  MOVIE_SUCCESS,
  MOVIE_FETCHING,
  MOVIE_DELETE,
  MOVIE_CREATE,
  MOVIE_CREATE_Uploading,
  GET_MOBVIE_BY_ID_LOADING,
  GET_MOBVIE_BY_ID_LOADING_SUC,
  GET_MOBVIE_BY_ID_LOADING_ER,
} from "../type";

const movieReducer = (state, action) => {
  switch (action.type) {
    case MOVIE_FETCHING:
      return {
        ...state,
        movieFetching: true,
        movies: null,
        isMovie: false,
        error: null,
      };

    case MOVIE_SUCCESS:
      return {
        ...state,
        movieFetching: false,
        movies: action.payload,
        isMovie: true, //movie loading true
        error: null,
      };

    case MOVIE_FAILURE:
      return {
        ...state,
        movieFetching: false,
        movies: null,
        isMovie: false,
        error: action.payload,
      };
    case MOVIE_DELETE:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie._id !== action.payload._id
        ),
      };
    case MOVIE_CREATE_Uploading:
      return {
        ...state,
        movieUploading: true,
      };

    case MOVIE_CREATE:
      return {
        ...state,
        movieUploading: false,
        movies: [...state.movies, action.payload],
      };
    case GET_MOBVIE_BY_ID_LOADING:
      return {
        ...state,
        movieFetching: true,
        isMovie: false,
      };
    case GET_MOBVIE_BY_ID_LOADING_SUC:
      return {
        ...state,
        movieFetching: false,
        isMovie: true,
        singleMovie: action.payload,
      };
    case GET_MOBVIE_BY_ID_LOADING_ER:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
