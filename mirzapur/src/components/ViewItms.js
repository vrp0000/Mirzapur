import React from "react";
import Frames from "./Frames";
import kaleen from "./images/kaleen.jpg";
import munna from "./images/munna.jpg";
import tyagi from "./images/tyagi.jpg";
import kaleenspec from "./images/kaleenspec.JPG";
import tyagispec from "./images/tyagispec.JPG";
import munnaspec from "./images/munnaspec.JPG";

const ViewItms = (props) => {
  let kaleentxt =
    "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur";
  let munnatxt =
    "Akhandanand's son Munna Tripathi is a power hungry and will not stop at anything to inherit his father's legacy";
  let tyagitxt =
    "An honest cop, Maurya Saab who goes an extra mile to eliminate the bad and the over-powering crime in the city ";
  return (
    <div className="viewitms">
      <div className="mainhdr">BOLD, DARING & STURDY</div>
      <div className="scndhdr">
        These Pilots are perfect for that Grunge Look
        <hr style={{ width: "20%" }} />
      </div>
      <div className="vrtcloptns">
        <Frames image={kaleen} text={kaleentxt} spec={kaleenspec} />
        <Frames image={munna} text={munnatxt} spec={munnaspec} />
        <Frames image={tyagi} text={tyagitxt} spec={tyagispec} />
      </div>
    </div>
  );
};

export default ViewItms;
