import { Link } from "@mui/material";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="top"></div>
      <div className="container">
        <form>
          <h1>Sign In</h1>

          <input type="email" placeholder="email or phone number" />
          <input type="password" placeholder="password" />

          <button className="loginbutton">Sign In</button>

          <span>
            New to Netflix?
            <Link to="/register">
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protrcted by Google reCAPTCHA to ensure you are not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
