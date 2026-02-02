import React from "react";
import Style from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className="vh-100">
        <div className={`container   ${Style["mmtop"]}  `}>
          <h2 className={`text-uppercase ${Style["dark"]}`}>conatct section</h2>
          {/* -- star */}
          <div className=" m-auto d-flex justify-content-center align-items-center mb-4">
            <div className={` right ${Style["right"]}`}></div>
            <div>
              <i className={` ms-3 me-3 fa-solid fa-star`}></i>
            </div>
            <div className={` left ${Style["left"]}`}></div>
          </div>
          {/* -- star */}

          <form className={`form-control border-0 w-75 m-auto ${Style["form"]}`}>
            <input
              className="form-control mt-5 border-top-0 border-start-0 border-end-0 px-2 py-3 "
              type="text"
              placeholder="userName"
            />
            <input
              className="form-control mt-5 border-top-0 border-start-0 border-end-0 px-2 py-3"
              type="number"
              placeholder="userAge"
            />
            <input
              className="form-control mt-5 border-top-0 border-start-0 border-end-0 px-2 py-3"
              type="email"
              placeholder="userEmail"
            />
            <input
              className="form-control mt-5 border-top-0 border-start-0 border-end-0 px-2 py-3"
              type="password"
              placeholder="userPassword"
            />
            <button className="btn btn-success mt-5 p-2" type="submit">
              send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
