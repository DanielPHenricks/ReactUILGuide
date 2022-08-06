import React from 'react';
import {Row, Col, Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import '../styles/index.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
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
        <h1 class="darkText lato" style={{margin: "20px", color: "#fafafa"}}><b>UIL Guide</b></h1>       
        <div class="container">
            <div class="row text-center">
                <div class="col-md">
                    <div class="card bg-dark text-light m-2">
                        <div class="card-body text-center">
                            <h3 class="card-title">
                                Easy
                            </h3>
                            <p class="card-text">
                               Learn some more about the basics of UIL and some of the easier topics!
                            </p>
                            <a href="/Easy" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-dark text-light m-2">
                        <div class="card-body text-center">
                            <h3 class="card-title">
                                Medium
                            </h3>
                            <p class="card-text">
                               Learn some more about the main topics tested on the exam.
                            </p>
                            <a href="/Medium" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-dark text-light m-2">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                                <i class="bi bi-play-btn"></i>
                            </div>
                            <h3 class="card-title">
                                Hard
                            </h3>
                            <p class="card-text">
                               Learn some more about the most difficult topics tested on the exam.
                            </p>
                            <a href="/Hard" className='btn btn-primary'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
        
    }
}
export default Main;