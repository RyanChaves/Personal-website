import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from "./Header";
import Navigation from "./Navigation";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Employment from "./Employment";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (

    
      <Container fluid>

        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>

    </Container>


  );
}

export default App;
