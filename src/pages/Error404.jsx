import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container bg">
      <h1 className="error-title">404</h1>
      <p className="error-message text">Oops, page not found</p>
      <Link to="/" className="error-link">
        Return Home
      </Link>
    </div>
  );
};

export default Error404;
