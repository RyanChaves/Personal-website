import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import gloria from "../imgs/gloria.png";
import unitron from "../imgs/unitron.jpg";
import infrastructure from "../imgs/io-logo.png";
import ibm from "../imgs/ibm-logo.svg";
import guelph from "../imgs/guelph.jpg";

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

function Employment() {

  const classes = useStyles();



  return (
    <div>
      <Row className="justify-content-md-center">  
        <h1>Work Experience</h1>
      </Row>

      <Row className="justify-content-md-center">  
        <div className="dev-row">
        <Col>
          <img className="code-img" src={gloria}></img>
        </Col>
        
        <Col>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p" className="card-back">
              
              <h2>Gloria English School</h2>
          <h3>ESL Intructor</h3>
          <h4>June 2016 - December 2019</h4>
          <p>
          <ul>
            <li>Awarded Teacher of the Year 2017</li>
            <li>Designed and taught workshops for training new teachers </li>
            <li>Represented the company through demonstrations and parent teacher meetings </li>
            <li>Taught students aged 5 to 18 years old in English as a second language</li>
          </ul>
          </p>
          
              </Typography>
            </CardContent>
          </Card>
        </Col>
       </div>
      </Row>
                
      <Row className="justify-content-md-center">  
          <div className="skill-row">
            <img className="travel-img" src={unitron}></img>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
            
            <h2>Unitron Hearing</h2>
          <h3>Software Quality Assurance Analyst</h3>
          <h4>January 2015 - September 2015</h4>  
          <p>
            <ul>
              <li>Black box testing on hearing aid software and hardware</li>
              <li>Communicated with QA team and Developers detailing software issues</li>
              <li>Created full test case documentation for bugs found in software </li>
            </ul>
          </p>    
 
          </Typography>
              </CardContent>
            </Card>
          </div>
        </Row>

      <Row className="justify-content-md-center">  
        <div className="skill-row">
          <img className="code-img" src={infrastructure}></img>
          <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
            
          <h2>Infrastructure Ontario</h2>
          <h3>Program Management</h3>
          <h4>May 2014 - August 2014</h4>
          <p>
          <ul>
            <li>Used VBA to create a project time allocation system</li>
            <li>Improved efficiency of team by making documentation more interactive using advanced Adobe features</li>
           
          </ul>
          </p>
         
          </Typography>
              </CardContent>
            </Card>
        </div>
      </Row>


      <Row className="justify-content-md-center">  
        <div className="skill-row">
          <img className="travel-img" src={ibm}></img>
          <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
            
          <h2>IBM Cognos</h2>
          <h3>Business Intelligence Analyst</h3>
          <h4>September 2013 - December 2013</h4>  
          <p>
          <ul>
            <li>Troubleshooted and investigated issues that clients faced with Cognos Analytics </li>
            <li>Created documentation and test cases detailing defects with software</li>
          </ul>  
          </p>   
              
          </Typography>
              </CardContent>
            </Card>
        </div>
      </Row>

      <Row className="justify-content-md-center">  
        <div className="skill-row">
          <img className="code-img" src={guelph}></img>
          <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="body2" component="p" className="card-back">
            <p>
            <h2>Guelph Police Services</h2>
          <h3>Help Desk Technician</h3>
          <h4>May 2013 - August 2013</h4>
          <ul>
            <li>Assisted coworkers with technical issues faced</li>
            <li>Deployed and maintained workstations and servers</li>
            <li>Deployed and maintained VOIP phones</li>
          </ul>
            </p>
      
          </Typography>
              </CardContent>
            </Card>
        </div>
      </Row>


    </div>
  );
}

export default Employment;
