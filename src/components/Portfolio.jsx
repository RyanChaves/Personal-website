import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import travel from "../imgs/travel-1.JPG";


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
//this is header for top photo that covers entire page
function Portfolio() {
  const classes = useStyles();

  return (
    <div>
      <Row className="justify-content-md-center">      
      <h1>Portfolio</h1>
          </Row>

          <Row className="justify-content-md-center"> 
          <div className="dev-row">
          <Col>
            <img className="introImg" src={travel}></img>
          </Col>
          <Col>

          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p" className="card-back">
                <h3>Under Construction...</h3>

              </Typography>
            </CardContent>
          </Card>
        </Col>
        </div>
      </Row>

        
      </div>
    
  );
}

export default Portfolio;
