import React, { useReducer } from "react";
import axios from "axios";
import authContext from "./authContext";
import authReducer from "./authReducer";

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_START, LOG_OUT } from "./../type";

function AuthProvider({ children }) {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    isFetching: false,
    error: false,
    isAuthenticated: false,
  };
  //
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (user) => {
    try {
      dispatch({ type: LOGIN_START });
      const res = await axios.post(
        "http://localhost:8800/netflix/api/user/login",
        user
      );
      if (res.data.user) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));

        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  const logOut = () => {
    dispatch({ type: LOG_OUT });
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
  };

  const valueToShare = {
    user: state.user,
    token: state.token,
    isFetching: state.isFetching,
    error: state.error,
    isAuthenticated: state.isAuthenticated,
    login,
    logOut,
  };

  localStorage.setItem("user", JSON.stringify(state.user));

  return (
    <authContext.Provider value={valueToShare}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
