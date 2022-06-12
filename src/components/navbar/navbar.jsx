import React from 'react';
import {Navbar, Container, Nav, Button, Link} from 'react-bootstrap';
import Logo from "url:../assets/logo-white-small.svg";
import "./navbar.scss";

export function Navbar ({user}) {

    

    function onLoggedOut() {
        localStorage.clear();
        window.open("/", "_self");
      }

     

  return (
      <Navbar className="main-nav" sticky="top"  expand="lg" >
          <Container>
          
              <Navbar.Brand>
              <img src={Logo} alt="myFlix Logo" height="100px" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
    <div className='menu'>
        <ul>
            <li><a href="/">MOVIES</a></li>
            <li><a href="/actor">ACTORS</a></li>
            <li><a href="/movies/director">DIRECTORS</a></li>
            <li><a href="/genre">GENRES</a></li>
            <li>PROFILE</li>
            <li><button
            onClick={() => {
              onLoggedOut();
            }}
          >
            
          LOGOUT</button></li>
            
        </ul>
    </div>
    </Nav>
    </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}
