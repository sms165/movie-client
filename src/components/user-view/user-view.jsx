import React, { useState, useEffect } from "react";
import "./user-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";

import ReactPlayer from "react-player/youtube";

export function UserView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { userName } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");

  const [director, setDirector] = "useState";

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  const getUser = () => {
    axios
      .get(`https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container className="user-detail">
      {user && (
        <div className="user-view">
          <Row>
            
              <h1>User Profile</h1>
            </Row>
            <Row>
              <h1> {user.userName}</h1>
          </Row>
          <Row>
            <p>Name: {user.name}</p>
          </Row>
          <Row>
            <p>Email: {user.email}</p>
          </Row>
          <Row>
            <p>Birthday: {user.birthday}</p>
          </Row>
            <br/>
            <Row>
                <div className="Change Password">
                    Change Password
                </div>
            </Row>
        </div>
      )}
    </Container>
  );
}
