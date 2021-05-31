import React from "react";
import Callimg from "./images/Call.JPG";
import Emailimg from "./images/email.JPG";
const Contact = () => {
  return (
    <div className="cntct">
      <header className="hdr">Looking for help?</header>
      <div className="cntctblck">
        <div className="info">
          We are available by phone Monday to Sunday from 9AM to 8PM.
          <br />
          Please feel free to call us if you have any queries.
        </div>
        <div className="options">
          <div className="optimg">
            <img className="optimage" src={Emailimg} alt="email" />
          </div>

          <div>
            <button className="cntctData" style={{ fontSize: "auto" }}>
              Email Us
              <br />
              Support@lenskart. com
            </button>
          </div>
        </div>
        <div className="options">
          <div className="optimg">
            <img src={Callimg} alt="email" />
          </div>
          <button className="cntctData">
            Call Us
            <br />
            9999899998
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
