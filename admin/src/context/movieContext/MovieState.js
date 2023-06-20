import React, { useCallback, useReducer, useState } from "react";
import movieContext from "./movieContext";
import movieReducer from "./movieReducer";

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
import axios from "axios";

function MovieState({ children }) {
  const initialState = {
    movieFetching: false,
    movies: [],
    isMovie: false,
    error: null,
    movieUploading: false,
    singleMovie: [],
  };

  const [progress, setProgress] = useState(0);
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const getALlMovies = useCallback(async () => {
    // loading token globally
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }
    try {
      dispatch({ type: MOVIE_FETCHING });

      const res = await axios.get("http://localhost:8800/netflix/api/movie");

      if (res.data) {
        dispatch({ type: MOVIE_SUCCESS, payload: res.data.data });
      }
    } catch (error) {
      dispatch({ type: MOVIE_FAILURE, payload: error });
    }
  }, []);

  const createNewMovie = async (movie) => {
    try {
      dispatch({ type: MOVIE_CREATE_Uploading });
      const res = await axios.post(
        "http://localhost:8800/netflix/api/movie",
        movie,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(progress);
          },
        }
      );
      dispatch({ type: MOVIE_CREATE, payload: res.data });
      console.log(state.movies);
    } catch (error) {}
  };

  const getMovieById = async (id) => {
    try {
      dispatch({ type: GET_MOBVIE_BY_ID_LOADING });
      const res = await axios.get(
        ` http://localhost:8800/netflix/api/movie/${id}`
      );

      dispatch({ type: GET_MOBVIE_BY_ID_LOADING_SUC, payload: res.data.data });
    } catch (error) {
      dispatch({ type: GET_MOBVIE_BY_ID_LOADING_ER, payload: error });
    }
  };

  const deleteMovieById = async (id) => {
    try {
      const res = await axios.delete(
        ` http://localhost:8800/netflix/api/movie/${id}`
      );

      dispatch({ type: MOVIE_DELETE, payload: res.data.data });
    } catch (error) {}
  };

  const valueToShare = {
    movieFetching: state.movieFetching,
    movies: state.movies,
    isMovie: state.isMovie,
    error: state.error,
    movieUploading: state.movieUploading,
    progress,
    singleMovie: state.singleMovie,
    getALlMovies,
    createNewMovie,
    deleteMovieById,
    getMovieById,
  };
  return (
    <movieContext.Provider value={valueToShare}>
      {children}
    </movieContext.Provider>
  );
}

export default MovieState;
