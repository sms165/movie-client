import React, { useState, useEffect } from "react";
import "./user-view.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faRegular, faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
  const [name, setName] = useState("");

  

  

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

  function parseDate  (date)  {
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
          <Row className="align-items-center" >
              <Col sm={4}>
            <h1>User Profile</h1>
</Col>
            <Col sm={4}>
                <div className="userNameStyle">
              <h1> {user.userName}</h1 ></div></Col>
              <Col sm={3}>
                 
              </Col>
            
            <Col sm={1} >
            <FontAwesomeIcon icon={faTrashCan} />
            <p className="delete">Delete Account</p>
            </Col>
          </Row>
          <Row >
            <Col>
              <p>Name:</p>
            </Col>
            <Col>
              <p> {user.name}</p>
            </Col>
            
            <Col > 
           
            <button className="btnStyle" >
              <FontAwesomeIcon icon={faPenToSquare} />
              </button> 
              </Col>
             
              
           
          </Row>
          <Row className="align-items-center">
            <Col>
              <p>Email:</p>
            </Col>
            <Col>
              <p> {user.email}</p>
            </Col>
            <Col>
           
            <button   className="btnStyle">
              <FontAwesomeIcon icon={faPenToSquare} />
              </button>

            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <p>Birthday:</p>
            </Col>
            <Col>
              <p>{parseDate(user.birthday)}</p>
            </Col>
            <Col className="align-middle">
            <button className="btnStyle" > 
              <FontAwesomeIcon icon={faPenToSquare} />
               </button> 
              <div className="birthdayChange"></div>
            </Col>
          </Row>
          <br />
          <hr className="hrStyle"/>
          <br />
          <Row className="align-items-center">
            <Col>
              <p>Change Password</p>
            </Col>
            <Col>
              <p></p>
            </Col>
            <Col>
            <button className="btnStyle" >
              <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <div className="passwordChange"></div>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

