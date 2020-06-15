import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import coding from "../imgs/coding.png"
import globe from "../imgs/globe.png";
import mapPins from "../imgs/mapPins.PNG";
import teacher from "../imgs/teacher.png";
import award from "../imgs/gloriaAward.jpg";
import travel1 from "../imgs/travel-1.JPG";
import travel2 from "../imgs/travel-2.JPG";
import travel3 from "../imgs/travel-3.JPG";

import Carousel from 'react-bootstrap/Carousel';
import mapPin from "../imgs/mapPin.png";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#8da460',    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function Skills() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div >
        <Row className="justify-content-md-center">  
            <h1>Skills</h1>
        </Row>

        <Row className="justify-content-md-center">  
          <div className="dev-row">
            <Col>
            <img className="code-img" src={coding}></img>
            </Col>
            <Col>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
                <h2>Developer</h2>
                  <p>I graduated from the University of Guelph in 2016. While I was there, I created multiple projects including a UI for a self driving car. Guelph 
                  taught me a lot about Software Development and the proper implementations of data structures and algorithms. Since graduating, I have spent more of my 
                  development time on creating websites and mobile development. My currnet toolbox of technologies include:
                  <Row>
                    <Col>
                    <ul>
                      <li>C</li>
                      <li>Java</li>
                      <li>ReactJS</li>
                      <li>jQuery</li>
                      <li>Excel VBA</li>
                    </ul>
                    </Col>
                    <Col>
                    <ul>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>NodeJS</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                    </ul>
                    </Col>
                    </Row>
                  </p>
                </Typography>
              </CardContent>
            </Card>
            </Col>
          </div>
        </Row>

          
        <Row className="justify-content-md-center">  
          <div className="skill-row">
            <img className="travel-img" src={globe}></img>

            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
                  <h2>Traveller</h2>
                  <p>For the past 5 years, I have been able to travel to many countries around Asia while teaching English in Taiwan. During this time,
                  I was able to go to many different countries in the region: </p>
            </Typography>
              </CardContent>
            </Card>



            <img className="map-img" src={mapPins} /> 

            {/* <img className="pin-icon" src={mapPin} />


            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 map-img" src={travel1} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 map-img" src={travel2} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 map-img" src={travel3} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}

          </div>
        </Row>




        <Row className="justify-content-md-center">  
          <div className="skill-row">
            <img className="code-img" src={teacher}></img>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
            <h2>Teacher</h2>
            <p>From 2016 to 2020, I lived in Taiwan teaching English to students from 5 to 18 years old. In addition to this,
            I was also in charge of training new teachers by giving presentations on the school curriculum. In 2018, I received the  Teacher of the Year award.</p>
          
            </Typography>
              </CardContent>
            </Card>
            <img className="map-img" src={award}></img>

          </div>
        </Row>
    </div>
  );
}

export default Skills;
