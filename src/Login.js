import React, { useState } from "react";
import "./Login.css";
import amazon from "./amazon.png";
import { auth } from "./Firebase";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser(!user);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const regiester = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        setUser(!user);
        // console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="main">
      <div className="login">
        <Link to="/">
          <img className="iii" src={amazon} alt="jbc" />
        </Link>

        <form>
          <div className="email">
            <p>E-Mail</p>
            <input
              type="text"
              value={email}
              onChange={changeEmail}
              className="txtBox"
            />
          </div>
          <div className="password">
            <p>password</p>
            <input
              type="password"
              value={password}
              onChange={changePassword}
              className="password"
            />
          </div>
          <button className="enter" type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p className="text">
          By signing-in you agree to Amazon's Conditions of Use & Sale.
          <br />
          Please see our Privacy Notice, our,
          <br />
          Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type="button" className="enter" onClick={regiester}>
          Create amazon account
        </button>
      </div>
    </div>
  );
};
export default Login;
