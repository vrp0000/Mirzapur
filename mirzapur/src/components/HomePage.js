import React from "react";
import Content from "./Content";
import header from "./images/header.JPG";

const HomePage = () => {
  return (
    <div className="Main">
      <div className="Header"></div>
      <div className="Content">
        <Content />
      </div>
      <div className="Footer"></div>
    </div>
  );
};
/* 
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  background: url("/images/header.JPG");
  background-color: blue;
  background-repeat: no-repeat;
  height: 50%;
  width: auto;
  /* 
  z-index: -1; 
  background-size: 100vw 25vh;
`;
const Footer = styled.div`
  background-image: url("/images/header.JPG");
  background-repeat: no-repeat;
  height: 50%;
  width: auto;
  background-position: bottom;
  background-size: 100vw 25vh;
  /* 
  z-index: -1; 
`; */

export default HomePage;
