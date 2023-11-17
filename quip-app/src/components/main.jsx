import React from "react";
import Nav from "./navbar";
import "./main.css";
import Content from "./content";
import Sidebar from "./sidebar";

const main = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default main;
