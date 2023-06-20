import { useState } from "react";
import "./register.scss";
import { useRef } from "react";
import { Link } from "@mui/material";

function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleClickPass = () => {
    setPassword(passwordRef.current.value);
    console.log(password);
  };

  const handleClick = () => {
    setemail(emailRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wraper">
          <img src="" alt="" className="logo" />
          <Link to="/login">
            <button className="loginbutton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button onClick={handleClick} className="registerButton">
              Get Start
            </button>
          </div>
        ) : (
          <div className="input">
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordRef}
            />
            <button onClick={handleClickPass} className="registerButton">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
