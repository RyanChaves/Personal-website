import React from "react";
import Row from "react-bootstrap/Row";
function Footer() {
  const year = new Date().getFullYear();
  return (
      <div className="footer">
        <Row className="justify-content-md-center"> 
          <p>Copyright ⓒ {year}</p>
        </Row>
        <Row className="justify-content-md-center"> 

        <a href="https://www.linkedin.com/in/ryan-chaves-b70ab46a/" stlye="text-decorations:none; color:inherit !important;"> <i class="fab fa-linkedin btmIcons" ></i></a>
          <a href="mailto: rchaves263@gmail.com"><i class="far fa-envelope btmIcons"></i></a>
        </Row>
    </div>
  );
}

export default Footer;
