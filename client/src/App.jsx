import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watche/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Provider from "./context/movie/listState";
import RecentAndPopular from "./pages/recentAndPopular/RecentAndPopular";
import Popular from "./pages/popular/Popular";

function App() {
  const user = true;
  return (
    <Provider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="register" />}
          />
          <Route path="/recent" element={<RecentAndPopular type="movie" />} />
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/popular" element={<Popular />} />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
