import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Title } from "./Utility";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 20px;
`;

const LinkButton = styled.div`
  width: 100%;
  max-width: 250px;
  height: 50px;
  display: flex;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(42, 41, 41, 1);
  margin-bottom: 15px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  font-weight: 500;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
    color: ${(props) =>
      props.isMobile ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  }
`;

const LinkAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = ({ title, dataArray }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {dataArray.map((item, index) => (
        <LinkButton isMobile={isMobile} key={index}>
          <LinkAnchor href={item.url} target="_blank">
            {item.label}
          </LinkAnchor>
        </LinkButton>
      ))}
    </Box>
  );
};

export default Links;
