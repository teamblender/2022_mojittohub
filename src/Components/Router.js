import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../Routes/Main";

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        {/* <Route path="/*" element={<Fail></Fail>}></Route> */}
      </Routes>
    </HashRouter>
  );
};
