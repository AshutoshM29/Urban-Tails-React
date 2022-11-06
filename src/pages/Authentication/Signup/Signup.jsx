import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { Footer, Navigation } from "../../../components/index";
import '../authentication.css'
import {signup, facebook, google, metamask} from '../../../assets/images'

const Signup = () => {
  const initialFormDetails = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const currentLocation = useNavigate();
  const { signUpUser, isAuthorized } = useAuth();
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [showConfirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const [showPasswordIcon, setPasswordIcon] = useState(false);

  const formDetailsHandler = () => {
    signUpUser(
      formDetails.email,
      formDetails.firstName,
      formDetails.lastName,
      formDetails.password,
      formDetails.confirmPassword
    );
  };

  if (isAuthorized) {
    currentLocation("/");
  }

  return (
    <div>
      <Navigation />
      <main className="main-authentication">
        <section>
          <form className="form-authentication" onSubmit={(e) => e.preventDefault()}>
            <h2 className="form-title">Sign Up</h2>
            <label className="label" htmlFor="username">First Name</label>
              <input
                className="input-outline"
                autoComplete="off"
                type="text"
                id='name'
                name="name"
                placeholder="Urban"
                value={formDetails?.firstName}
                onChange={(e) => setFormDetails((details) => ({...details, firstName: e.target.value,}))}
                required
              />

              <label className="label" htmlFor="username">Last Name</label>
                <input
                  className="input-outline"
                  autoComplete="off"
                  type="text"
                  id='name'
                  name="name"
                  placeholder="Tails"
                  value={formDetails?.lastName}
                  onChange={(e) => setFormDetails((details) => ({...details, lastName: e.target.value,}))}
                  required
                />

                <label className="label" htmlFor="email">Enter your email</label>
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
    
                  <label className="label" htmlFor="username">Create Password</label>
                    <input
                      className="input-outline input-pass"
                      autoComplete="off"
                      type={showPasswordIcon ? "text" : "password"}
                      id='password'
                      name="password"
                      placeholder="password"
                      value={formDetails?.password}
                      onChange={(e) => setFormDetails((details) => ({...details, password: e.target.value,}))}
                      required
                    />
                    <button
                      className="btn-eye material-icons icons-right"
                      onClick={() => setPasswordIcon((showPasswordIcon) => !showPasswordIcon)}
                    >
                      {showPasswordIcon ? "visibility" : "visibility_off"}
                    </button>
    
                    <label className="label" htmlFor="password">Confirm Password</label>
                    <input
                      className="input-outline input-pass"
                      autoComplete="off"
                      type={showConfirmPasswordIcon ? "text" : "password"}
                      id='password'
                      name="password"
                      placeholder="********"
                      value={formDetails?.confirmPassword}
                      onChange={(e) => setFormDetails((details) => ({...details, confirmPassword: e.target.value,}))}
                      required
                    />
                    <button
                      className="btn-eye material-icons icons-right"
                      onClick={() =>setConfirmPasswordIcon((showConfirmPasswordIcon) => !showConfirmPasswordIcon)}
                    >
                    {showConfirmPasswordIcon ? "visibility" : "visibility_off"}
                    </button>
                    
                    <div className="section-tnc">
                        <label id="checkbox-tnc" htmlFor="tnc">
                          <input type="checkbox" name="tnc" id="checkbox-tnc" />
                          <span className="tnc"> I accept all the terms & conditions</span>
                        </label>
                    </div>
    
                    <div className="section-btn-authentication">
                        <button className="btn btn-primary-solid" onClick={formDetailsHandler}>
                          Signup
                        </button>
                    </div>
    
                    <p className="body-cp-sm">Signup using </p>
                    <div className="section-icons">
                        <svg className="icons-signup" src={google} alt="google logo" />
                        <svg className="icons-signup" src={facebook} alt="facebook logo" />
                        <svg className="icons-signup" src={metamask} alt="metamask logo" />
                    </div>
    
                    <p>Already have an account!
                        <Link className="underline" to="/login"><span className="span-link">Log
                            In</span></Link>
                    </p>
          </form>
        </section>
        <div className="hero-signup">
          <img src={signup} alt="signup" />
        </div>
      </main>
    <Footer />
  </div>
  )
};

export { Signup };