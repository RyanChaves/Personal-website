import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import pic2 from "../imgs/travel-3.JPG";
import mapPin from "../imgs/mapPin.png";

//this is header for top photo that covers entire page
function Header() {
  return (
    <div className="header-photo">
      <img src={pic2} style={{marginLeft:'-0.8%',height: '100vh', width:'99vw', backgroundPosition: 'center',backgroundRepeat: "no-repeat", backgroundSize: 'cover',position: 'relative', textAlign: 'center'}} />
      <div className="header-text">
        <Row className="justify-content-md-center">  
          Hi, I'm Ryan
        </Row>
        <Row className="justify-content-md-center">  
          <Button variant="outline-primary" size="lg" ><a href="./Resume.pdf" download>Download My Resume</a></Button>
        </Row>
      </div>
      <div className="header-credit">
      <Row className="justify-content-md-center">  
      <img className="pin-icon" src={mapPin} />
          Annapurna Circuit, Nepal
        </Row>
      </div>
    </div>
  );
}
export default Header;
