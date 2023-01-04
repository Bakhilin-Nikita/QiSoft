import React, {Component} from 'react';
import {Button, Container, FormControl, Navbar, Nav, Form} from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


class Header extends Component {
    render() {
        return (
            <>


                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="nav-header">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/About"> About us </Nav.Link>
                                <Nav.Link href="/Contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/Blog"> Blog </Nav.Link>
                            </Nav>
                            <Form inline className="form-header">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route  path="/" element={<Home/>}/>
                        <Route  path="/about" element={<About/>}/>
                        <Route  path="/contacts" element={<Contacts/>}/>
                        <Route  path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>

            </>
        );
    }
}

export default Header;