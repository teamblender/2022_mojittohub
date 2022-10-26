import React from "react";
import Container from "../Components/Container";
import Cursor from "../Components/Cursor";
import Header from "../Components/Header";
import MojittoArea from "../Components/MojittoArea";
import Links from "../Components/Links";
import LinkArray from "../Assets/Data/LinkArray";
import Copyright from "../Components/Copyright";
import Intro from "../Components/Intro";

const Main = () => {
  return (
    <Container>
      <Cursor></Cursor>
      <Header></Header>
      <MojittoArea></MojittoArea>
      <Intro></Intro>
      <Links title={"App Download"} dataArray={LinkArray.download}></Links>
      <Links title={"Channel"} dataArray={LinkArray.channel}></Links>
      <Copyright></Copyright>
    </Container>
  );
};

export default Main;
