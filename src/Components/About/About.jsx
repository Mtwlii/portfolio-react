import React from "react";
import Style from "./About.module.css";

const About = () => {
  return (
    <div className={`${Style["contaner"]}`}>
      <div
        className={`container  vh-100 d-flex justify-content-center align-items-center `}
      >
        <div className="row m-auto">
          <div className="col-md-12 mb-5 d-flex  justify-content-center align-items-center">
            <h2 className="text-uppercase">about component</h2>
          </div>
          {/* -- star */}
          <div className=" m-auto d-flex justify-content-center align-items-center mb-4">
            <div className={` bg-white right`}></div>
            <div>
              <i className={` ms-3 me-3 fa-solid fa-star`}></i>
            </div>
            <div className={`bg-white left`}></div>
          </div>
          {/* -- star */}
          <div className="row m-auto d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
