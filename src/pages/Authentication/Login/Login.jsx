import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import {login} from '../../../assets/images'
import { Footer, Navigation } from "../../../components/index";
import '../authentication.css'

const Login = () => {
  const initialFormDetails = {
    email: "",
    password: "",
  };

  const currentLocation = useNavigate();
  const { loginUser, isAuthorized } = useAuth();
  const [formDetails, setFormDetails] = useState(initialFormDetails);

  const formDetailsHandler = () => {
    loginUser(formDetails.email, formDetails.password);
  };

  function loginWithTestCredentials() {
    setFormDetails({
      email: "ashutoshrm01@gamil.com",
      password: "Ashu1234",
    });
  }

  if (isAuthorized) {
    currentLocation("/");
  }

  return (
    <div>
      <Navigation />
        <main className="main-authentication">
          <section>
            <form className="form-authentication" onSubmit={(e) => e.preventDefault()}>
              <h2 className="form-title">Log In</h2>
              <label className="label" htmlFor="email">Email Address</label>
                <input
                  className="input-outline"
                  autoComplete="off"
                  type="email"
                  id='email'
                  name="email"
                  placeholder="urbantails.com"
                  value={formDetails?.email}
                  onChange={(e) => setFormDetails((details) => ({...details, email: e.target.value,}))}
                  required
                />
              <label className="label" htmlFor="password">Password</label>
                <input
                  className="input-outline"
                  autoComplete="off"
                  type="password"
                  id='password'
                  name="password"
                  placeholder="********"
                  value={formDetails?.password}
                  onChange={(e) => setFormDetails((details) => ({...details, password: e.target.value,}))}
                  required
                />
              <div className="section-tnc">
                <label htmlFor="tnc">
                  <input type="checkbox" id='tnc' name="tnc" /><span className="tnc"> Remember Me</span>
                </label>
                <Link to="/forget"><span className="span-link">Forget password</span></Link>
              </div>
              <div className="section-btn-authentication">
                <button className="btn btn-primary-solid" onClick={formDetailsHandler}>
                  <i className="fas fa-sign-in-alt"></i> Log In
                </button>
                <button className="btn btn-primary-solid" onClick={loginWithTestCredentials}> Log In with test credentials
                </button>
                <p>Don't have an account!
                <Link className="underline" to="/signup"><span className="span-link"> Create Account</span>
                </Link>
                </p>
              </div>
            </form>
          </section>
          <div className="hero-login">
            <img src={login} alt="Log In" />
          </div>
        </main>
        <Footer />
    </div>
  );
};
export { Login };