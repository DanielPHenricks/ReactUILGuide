import Question from './Question'
import CodeComponent from './CodeComponent';
//import MathComponent from './Components/MathComponent';
import PrefixSums from './Easy/PrefixSums';
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import './styles/index.css'
import './styles/main.css'
class Main extends React.Component {
    render() {
        return(
            <div>
                <h1 className="lato" style={{margin:"20px"}}>UIL Guide</h1>
                <Row style={{margin:"20vh"}} className="box">
                    <Col style={{margin: "5px"}}><Button className="btn-primary" style={{padding: "5px", margin: "0 auto", width: "25vw", height: "25vh"}} href="https://a.a">Easy</Button></Col>
                    <Col style={{margin: "5px"}}><Button style={{padding: "5px", margin: "0 auto", width: "25vw", height: "25vh"}} href="https://a.a">Medium</Button></Col>
                </Row>
                <Row style={{margin:"20vh"}} className="box">
                    <Col style={{margin: "5px"}}><Button style={{padding: "5px", margin: "0 auto", width: "25vw", height: "25vh"}} href="https://a.a">Hard</Button></Col>
                    <Col style={{margin: "5px"}}><Button style={{padding: "5px", margin: "0 auto", width: "25vw", height: "25vh"}} href="https://a.a">Assorted UIL/CP topics</Button></Col>
                </Row>
            </div>
        )
        
    }
}
export default Main;