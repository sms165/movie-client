import React, { useState, useEffect } from "react";
import "./user-view.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faRegular } from "@fortawesome/free-solid-svg-icons";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";

import ReactPlayer from "react-player/youtube";

export function UserView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { userName } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

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

  const updateUser = () => {
    axios
      .put(`https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}`,{ userName: userName, name:name, email:email, birthday:birthday, password:password },{
        headers: { Authorization: `Bearer ${accessToken}`},
      })
      .then((response) => {
        alert("Profile has been updated")
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  const parseDate = (date) => {
    console.log(date);
    let newDate = date.split("T");
    return newDate[0];
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

            <Col>
              <h1> {user.userName}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Name:</div>
            </Col>
            <Col>
              <p> {user.name}</p>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Email:</div>
            </Col>
            <Col>
              <p> {user.email}</p>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Birthday:</div>
            </Col>
            <Col>
              <p>{parseDate(user.birthday)}</p>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="password">Change Password</div>
            </Col>
            <Col>
              <p>********</p>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}
