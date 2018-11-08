import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchFlightInfo from './SearchFlightInfo';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

function MenuLink() {
    return (

        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home"><img src={logo} alt="logo" /></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Text>
                    <Navbar.Link href="#">compensate</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Navbar.Link href="#">evouchers</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Navbar.Link href="#">passenger assistance</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>report</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default MenuLink;