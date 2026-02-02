import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${Style["footer-handel"]}`}>
        <div className="container text-center  mb-0">
          <div className="row">
            <div className="col-md-4">
              <div className={`inner ${Style["inner"]}`}>
                <h3 className="text-uppercase">Location</h3>
                <p className="mt-3">2215 John Daniel Drive</p>
                <p className="mt-2">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`inner ${Style["inner"]}`}>
                <h3 cassName="text-uppercase mb-3">AROUND THE WEB</h3>
                <i className="fa-brands fa-facebook-f rounded-circle  me-3"></i>
                <i className="fa-brands fa-twitter me-3"></i>
                <i className="fa-brands fa-linkedin-in me-3"></i>
                <i className="fa-brands fa-github me-3"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`inner ${Style["inner"]}`}>
                <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, open source Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style["end"]}`}>
          <p>Copyright &copy;  Your Website 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
