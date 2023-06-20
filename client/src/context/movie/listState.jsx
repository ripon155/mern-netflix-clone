import { useCallback, useReducer } from "react";
import listContext from "./listContext";
import listReducer from "./listReducer";
import axios from "axios";
import PropTypes from "prop-types";
import {
  GET_MOVIE_LIST,
  GET_RANDOM,
  GET_NEW_MOVIE_SUC,
  GET_NEW_MOVIE_FETCH,
  GET_NEW_MOVIE_ERR,
} from "../types";

function Provider({ children }) {
  const initialState = {
    list: [],
    random: [],
    newMovies: [],
    error: null,
    moviefetching: false,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  const getRandomList = useCallback(async (type, genre) => {
    const res = await axios.get(
      `http://localhost:8800/netflix/api/list${type ? "?type=" + type : ""}${
        genre ? "&genre=" + genre : ""
      }`,
      {
        headers: {
          Authorization:
            "Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTQwNTUwZTFkNzg4NDY3OTUwMmVjMSIsImlhdCI6MTY4MzM2NTk3OCwiZXhwIjoxNjkyMDA1OTc4fQ.zoQoShvcAuh76KCFU7Rjvx-JYJN1Es3Iss1XrSrrCds",
        },
      }
    );

    dispatch({ type: GET_MOVIE_LIST, payload: res.data.list });
  }, []);

  const getRandomContent = useCallback(async (type) => {
    console.log(type);
    const res = await axios.get(
      `http://localhost:8800/netflix/api/movie/randommovie?type=${type} `,
      {
        headers: {
          Authorization:
            "Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTQwNTUwZTFkNzg4NDY3OTUwMmVjMSIsImlhdCI6MTY4MzM2NTk3OCwiZXhwIjoxNjkyMDA1OTc4fQ.zoQoShvcAuh76KCFU7Rjvx-JYJN1Es3Iss1XrSrrCds",
        },
      }
    );

    dispatch({ type: GET_RANDOM, payload: res.data.data });
  }, []);

  const getNewAndPopular = async () => {
    try {
      dispatch({ type: GET_NEW_MOVIE_FETCH });
      const res = await axios.get(
        "http://localhost:8800/netflix/api/movie/newandpopular"
      );

      if (res.data.data) {
        dispatch({ type: GET_NEW_MOVIE_SUC, payload: res.data.data });
      }

      console.log(res.data.data);
    } catch (error) {
      dispatch({ type: GET_NEW_MOVIE_ERR, payload: error });
    }
  };

  const valueToShare = {
    list: state.list,
    random: state.random,
    newMovies: state.newMovies,
    getRandomList,
    getRandomContent,
    getNewAndPopular,
  };
  return (
    <div>
      <listContext.Provider value={valueToShare}>
        {children}
      </listContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
};

export default Provider;
