import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import Terms from "./Terms";
import ViewColl from "./ViewColl";
import ViewItms from "./ViewItms";
const Content = () => {
  return (
    <Container>
      <ViewItms />
      <ViewColl />
      <Terms />
      <Contact />
    </Container>
  );
};
const Container = styled.div`
  height: auto;
  width: auto;
  padding-block: 5px;
  /* background-color: black; */
`;
export default Content;
