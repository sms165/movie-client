import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Link,  } from "react-bootstrap";
import Logo from "url:../assets/logo-white-small.svg";
import "./navbar.scss";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavLink } from 'react-router';
import Nav from 'react-bootstrap/Nav'

export function Navbar({ user }) {
  const activeUser = localStorage.getItem("user");

  const [active, setActive] = useState("default");

  function onLoggedOut() {
    localStorage.clear();
    window.open("/", "_self");
  }

  return (
    <Navbar className="main-nav " sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="myFlix Logo" height="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end  ">
            <div className="menu">
              <Nav.Item>
              {/* <Nav.Link eventKey={1}> */} 
                <Link
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : "not-active-class"
                  }
                >
                  MOVIES
                </Link>
                {/* </Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/actor"
                  tabIndex="1"
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : "not-active-class"
                  }
                >
                  ACTORS
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/movies/director"
                  tabIndex="2"
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : "not-active-class"
                  }
                >
                  DIRECTORS
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/genre"
                  tabIndex="3"
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : "not-active-class"
                  }
                >
                  GENRES
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={`/profile/${activeUser}`}
                  tabIndex="4"
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : "not-active-class"
                  }
                >
                  PROFILE
                </Link>
              </Nav.Item>
              {/* <ul>
            <li><a  className='movies' eventkey="movies"  href="/">MOVIES</a></li>
            <li><a className='actors' eventkey="actors" href="/actor">ACTORS</a></li>
            <li><a className='directors' href="/movies/director">DIRECTORS</a></li>
            <li><a className='genres' href="/genre">GENRES</a></li>
            <li><a className='profile' href={`/profile/${activeUser}`}>PROFILE</a></li>
            <li> */}
              <Nav.Item>
                <button
                  className="  logout"
                  onClick={() => {
                    onLoggedOut();
                  }}
                >
                  LOGOUT
                </button>
              </Nav.Item>
              {/* </li>
            
         </ul> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
