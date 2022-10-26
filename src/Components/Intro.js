import React from "react";
import styled from "styled-components";
import { Title, Space } from "./Utility";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 40px;
`;

const Contents = styled.div`
  line-height: 1.7;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const Intro = () => {
  return (
    <Box>
      <Title>About Mojitto</Title>
      <Contents>
        Mojitto is a fairy who creates<p></p>cocktails out of emotions.
        <Space></Space>
        Adorable and full of fun,<p></p>Mojitto is also an outstanding
        mixologist.<Space></Space>
        If you share your emotions,<p></p>Mojitto will make the perfect cocktail
        <p></p>to help you reflect on your day! <Space></Space>So, instead of
        bottling up your emotions,
        <p></p>Why not share them with Mojtto?
      </Contents>
    </Box>
  );
};

export default Intro;
