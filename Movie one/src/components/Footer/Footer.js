import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 item">
              <h3>Movie One</h3>
              <p>
                The movies may be filtered by names, stars, and descriptions on
                Movie One, a dynamic website built with ReactJS, ReactBoostrap,
                HTML, and CSS.
              </p>
            </div>
          </div>
          <p className="text-center">Movie One © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
