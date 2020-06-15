import React, { useImperativeHandle, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Employment from "./Employment";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";

function Navigation(props) {

  const [key,setKey] = useState("introduction");

  return (
    <div className="nav-container">

      <Tabs activeKey={key} onSelect={(key) => setKey(key)} className="tabTop" >
        <Tab.Container href="#introduction" className="navItem" eventKey="introduction" title="Introduction">
          <Introduction />
        </Tab.Container>
        <Tab.Container className="navItem" eventKey="skills" title="Skills">
          <Skills />
        </Tab.Container>
        <Tab.Container className="navItem" eventKey="employment" title="Employment History">
          <Employment />
        </Tab.Container>
        <Tab.Container className="navItem" eventKey="portfolio" title="Portfolio">
          <Portfolio />
        </Tab.Container>
        
      </Tabs>
    </div>
  );
}

export default Navigation;
