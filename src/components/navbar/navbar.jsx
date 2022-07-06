import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Link } from "react-bootstrap";
import Logo from "url:../assets/logo-white-small.svg";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import {  Form } from 'react-bootstrap';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

export function Navbar({ user }) {
  const activeUser = localStorage.getItem("user");

  const [active, setActive] = useState("default");

  const location = useLocation();

  function onLoggedOut() {
    localStorage.clear();
    window.open("/", "_self");
  }

  return (
    <Navbar className="main-nav " sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand><Nav.Link href="/">
          <img src={Logo} alt="myFlix Logo" height="100px" /></Nav.Link>
        </Navbar.Brand>
        <Form className="d-flex">
      <VisibilityFilterInput />
    </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            activeKey={location.pathname}
            className="ml-auto justify-content-end  "
          >
            {/* <Nav.Link eventKey={1}> */}
            <Nav.Link href="/">MOVIES</Nav.Link>
            {/* </Nav.Link> */}

            <Nav.Link href="/actor">ACTORS</Nav.Link>

            <Nav.Link href="/movies/director">DIRECTORS</Nav.Link>

            <Nav.Link href="/genre">GENRES</Nav.Link>

            <Nav.Link href={`/profile/${activeUser}`}>PROFILE</Nav.Link>

            <button
              className="logout"
              onClick={() => {
                onLoggedOut();
              }}
            >
              LOGOUT
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
