import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/authContext/AuthState";
import MovieState from "./context/movieContext/MovieState";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);
root.render(
  <AuthProvider>
    <MovieState>
      <App />
    </MovieState>
  </AuthProvider>
);
