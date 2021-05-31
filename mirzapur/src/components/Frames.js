import React from "react";
const Frames = (props) => {
  return (
    <div className="frames">
      <div className="innrfrms">
        <img src={props.image} alt="person" />
      </div>
      <div>
        <p style={{ textAlign: "center", padding: "5px", fontSize: "auto" }}>
          {props.text}
        </p>
      </div>
      <div>
        <img className="specs" src={props.spec} alt="spec" />
      </div>
      <div
        style={{ textAlign: "center", marginBottom: "0px", padding: "10px" }}
      >
        <button className="frmebttn" onClick={() => {}}>
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default Frames;
