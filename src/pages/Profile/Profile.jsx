import React from 'react';
import { useAuth, useDataLayer } from "../../context";
import "./Profile.css";
import { useToast } from "../../custom-hooks/useToast";
import { useNavigate } from "react-router-dom";
import { profile } from '../../assets/images'
import { Footer, Navigation } from "../../components";

const Profile = () => {
  const { authUser, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { dispatch } = useDataLayer();

  const logoutUser = () => {
    showToast("Logout Successful", "success");
    authDispatch({ type: "RESET_AUTH" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "RESET_DATA" });
    navigate("/logout");
  };

  return (
    <>
      <Navigation />
      <main className="main-authentication">
        <div className="container-profile">
          <h1 className="form-title">Profile</h1>
        <div>
        <img
          src={ profile }
          alt="profile photo"
          className="avatar avatar-xl"
        />
        </div>
        <div>
          <div>
            <span className="form-title">Name: </span>
              {`${authUser.firstName} ${authUser.lastName}`}
          </div>
          <div>
            <span className="form-title">Email Id: </span>
              {`${authUser.email}`}
          </div>
        </div>
        <div>
        <button className="btn btn-primary-solid" onClick={logoutUser}>
          Logout
        </button>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export { Profile };