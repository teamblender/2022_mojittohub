import React from "react";
import styled from "styled-components";

const BBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* @media screen and (max-width: 800px) {
    width: 100vw;
  } */
`;

const Container = ({ children }) => {
  return (
    <BBox className="hide-scrollbar dD">
      <SBox>{children}</SBox>
    </BBox>
  );
};

export default Container;
