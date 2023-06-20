import { useContext } from "react";
import movieContext from "../context/movieContext/movieContext";

function useMovieContext() {
  return useContext(movieContext);
}

export default useMovieContext;
