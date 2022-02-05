import React from 'react';
import {Row, Col, Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import './styles/index.css'
import './styles/mainStyle.css'
import { Link } from "react-router-dom";
import logo from './logo.png'
class Main extends React.Component {
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="./">
                        <img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block"
                        />{' '}
                    UIL Guide
                    </Navbar.Brand>
                    </Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./Easy">Easy</Nav.Link>
                        <Nav.Link href="./Medium">Medium</Nav.Link>
                        <Nav.Link href="./Hard">Hard</Nav.Link>
                        <Nav.Link href="https://usaco.guide">Other resources</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
        
    }
}
export default Main;