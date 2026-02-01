import React from "react";
import Avatar from "../../assets/avataaars.svg";
import Style from "./main.module.css";
const Main = () => {
  return (
    <>
      <div className={` ${Style["bg-color"]}`}>
        <div className="container vh-100  d-flex justify-content-center align-items-center text-white">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <img src={Avatar} alt="avatar" className="w-50" />
            </div>
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <h2>Start Framework</h2>
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
            <div className="col-md-12 d-flex justify-content-center align-items-center">Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
