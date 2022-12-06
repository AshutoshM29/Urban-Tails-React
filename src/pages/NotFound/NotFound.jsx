import React from 'react';
import { Link } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="container-nfound">
        <h1 className="heading-nfound">404</h1>
        <h3>This page is missing</h3>
        <Link to="/" className="btn btn-error-solid">
          Go back to home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export { NotFound };