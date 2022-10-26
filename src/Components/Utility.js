import React from "react";
import styled from "styled-components";

const TitleCP = styled.div`
  text-align: center;
  line-height: 1.7;
  font-weight: 500;
  font-family: "GmarketSans";
  margin-bottom: 10px;
  font-size: 12px;
`;

const Title = ({ children }) => {
  return <TitleCP className="dD">{children}</TitleCP>;
};

const SpaceCP = styled.div`
  width: 100%;
  height: 10px;
`;

const Space = () => {
  return <SpaceCP></SpaceCP>;
};

export { Title, Space };
