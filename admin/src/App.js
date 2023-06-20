import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserLIst from "./pages/userList/UserLIst";
import User from "./pages/user/User";
import Movie from "./pages/movieList/Movie";
import NewMovie from "./pages/newMovie/NewMovie";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Login from "./pages/login/Login";
import useAuthContext from "./hooks/useAuthContext";
import MovieEdit from "./pages/editmovie/MovieEdit";

import PrivateRoute from "./privateRoute/PrivateRoute";
import setAuthToken from "./utills/setAuthToken";
function App() {
  const { isAuthenticated } = useAuthContext();

  // loading token globally

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/*"
          element={
            <React.Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <PrivateRoute>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserLIst />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route
                      path="/product/:productId"
                      element={<ProductList />}
                    />
                    <Route path="/newProduct" element={<ProductList />} />
                    <Route path="/movies" element={<Movie />} />
                    <Route path="/movies/:moviestId" element={<MovieEdit />} />
                    <Route path="/newmovie" element={<NewMovie />} />
                  </Routes>
                </PrivateRoute>
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
