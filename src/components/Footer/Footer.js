import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="footer-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 item">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col-md-6 col-sm-12 item">
              <h3>Social Media</h3>
              <div class="row">
                <div class="col">
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon ion-social-snapchat"></i>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center">Company Name © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
