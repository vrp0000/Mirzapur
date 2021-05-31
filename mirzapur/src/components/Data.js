import React from "react";
import styled from "styled-components";

const Data = () => {
  return (
    <Content>
      <Box1>a</Box1>
      <Box2>b</Box2>
      <Box3>n</Box3>
      <Box4>m</Box4>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0%;
`;

const Box1 = styled.div`
  background-color: green;
`;
const Box2 = styled.div`
  background-color: red;
`;
const Box3 = styled.div`
  background-color: blue;
`;
const Box4 = styled.div`
  background-color: yellow;
`;
export default Data;
