import React, { useEffect } from "react";
import styled from "styled-components";
import mojitto from "../Assets/Images/Icons/mojitto2.png";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BBox = styled.div`
  width: 100%;
  margin-top: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Mojitto = styled.img`
  height: 200px;
`;

const MojittoArea = () => {
  return (
    <Box className="dD">
      <BBox>
        <Mojitto src={mojitto}></Mojitto>
      </BBox>
    </Box>
  );
};

export default MojittoArea;
