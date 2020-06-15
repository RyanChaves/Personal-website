import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import travelRyan from "../imgs/travel-4.jpg";

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

function Introduction() {
  const classes = useStyles();

  return (

      <div>
      <Row className="justify-content-md-center">      
      <h1>Hello</h1>
          </Row>

          <Row className="justify-content-md-center"> 
          <div className="dev-row">
          <Col>
            <img className="introImg" src={travelRyan}></img>
          </Col>
          <Col>

          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p" className="card-back">
                <p>I am a Computer Science graduate and a traveller who has been to over 20 countries. This is a website I created using ReactJs detailing my personal and professional experience.</p>

              </Typography>
            </CardContent>
          </Card>
        </Col>
        </div>
      </Row>

        
      </div>
  );
}

export default Introduction;
