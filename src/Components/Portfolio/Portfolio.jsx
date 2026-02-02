import React, { useState } from "react";
import Port from "../../assets/port1.png";
import Portt from "../../assets/port2.png";
import Porttt from "../../assets/port3.png";
import Style from "./Portfolio.module.css";


const Portfolio = () => {
  const imgs = [Port, Portt, Porttt];
  const [showImgs, setShowImgs] = useState(null)
  function showImgsHandler(e) {
    setShowImgs(e.target.src)
    console.log(e.target.src);
  }
  return (
    <div className="vh-100">
      <div className={`container   ${Style["mmtop"]}  `}>
        <h2 className={`text-uppercase ${Style["dark"]}`}>
          portfolio component
        </h2>
        {/* -- star */}
        <div className=" m-auto d-flex justify-content-center align-items-center mb-4">
          <div className={` right ${Style["right"]}`}></div>
          <div>
            <i className={` ms-3 me-3 fa-solid fa-star`}></i>
          </div>
          <div className={` left ${Style["left"]}`}></div>
        </div>
        {/* -- star */}
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row g-5">
        {imgs.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img src={item} alt="port" className="w-100 rounded-2" />
            </div>
          </div>
        ))}
        {imgs.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img onClick={showImgsHandler} src={item} alt="port" className="w-100 rounded-2" />
            </div>
          </div>
        ))}
          {/* <div className="col-md-6 col-lg-4 ">
            <div className=" position-relative layer">
              <img src={Portt} alt="port" className="w-100 rounded-2" />
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img src={Porttt} alt="port" className="w-100 rounded-2" />
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img src={Port} alt="port" className="w-100 rounded-2" />
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img src={Portt} alt="port" className="w-100 rounded-2" />
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-4">
            <div className=" position-relative layer">
              <img src={Porttt} alt="port" className="w-100 rounded-2 " />
            </div>
          </div> */}
        </div>
      </div>
      <div className="position-fixed d-none w-100 h-100 top-0 start-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center">
        <img src={showImgs} alt="port" />
      </div>
    </div>
  );
};

export default Portfolio;
