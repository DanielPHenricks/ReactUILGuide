import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import './styles/index.css'
import './styles/mainStyle.css'
import { Link } from "react-router-dom";
class Main extends React.Component {
    render() {
        return(
            <div>
                <h1 className="lato" style={{margin:"20px"}}>UIL Guide</h1>
                <Row style={{margin:"20vh"}} className="box">
                    <Col style={{margin: "5px"}}><Link to="/easy"><Button className="btn-primary darkText"style={{padding: "2vw", margin: "0 auto", width: "15vw", height: "15vw"}}>Easy</Button></Link></Col>
                    <Col style={{margin: "5px"}}><Link to="/medium"><Button className="btn-primary darkText" style={{padding: "2vw", margin: "0 auto", width: "15vw", height: "15vw"}}>Medium</Button></Link></Col>
                </Row>
                <Row style={{margin:"20vh"}} className="box">
                    <Col style={{margin: "5px"}}><Link to="/hard"><Button className="btn-primary darkText" style={{padding: "2vw", margin: "0 auto", width: "15vw", height: "15vw"}}>Hard</Button></Link></Col>
                    <Col style={{margin: "5px"}}><Button className="btn-primary darkText" style={{padding: "2vw", margin: "0 auto", width: "15vw", height: "15vw"}}href="https://usaco.guide/bronze">Assorted UIL/CP topics</Button></Col>
                </Row>
            </div>
        )
        
    }
}
export default Main;