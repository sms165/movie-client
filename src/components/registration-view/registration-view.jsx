import React, { useState } from "react";
import "./registration-view.scss";
import Logo from "url:../assets/myFlix-white.svg"
import PropTypes from "prop-types";

// bootstrap
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import axios from "axios";

export function RegistrationView(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [userNameErr, setUserNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// form validation
const validate = () => {
  let isReq =true;
  if(!userName){
    setUserNameErr("Username is required");
      isReq = false;
  }else if(userName.length <2){
    setUserNameErr("Username must be at least 2 characters long");
      isReq = false;
  }else if(!userName.match(/^[0-9a-z]+$/)){
    setUserNameErr("Username must be alphnumeric")
  }

  if(!password){
    setPasswordErr("Password is required");
      isReq = false;
  }else if(password.length <6){
    setPasswordErr("Password must be at least 6 characters long)");
      isReq = false;
  }

  if(!email){
    setEmailErr("Email address is required");
    isReq = false;
  }else if(!email.match(validRegex)){
    setEmailErr("Email must be valid");
    isReq = false;
  }

  return isReq;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userName, password, name, email, birthday);
    // props.onRegister(false);
    const isReq= validate();
    if(isReq){
      axios.post('https://movie-api-jb24.onrender.com/users', {userName: userName, password:password, name: name, email: email, birthday: birthday})
      .then((response) =>{
        const data = response.data;
        console.log(data)
        alert('Registration successful, please login');
        window.open('/', '_self');
      })
      .catch(e=>{
        console.log("registration error");
      })
    }

  };

  return (
    <div className="registration">
    <Container >
      <Row className="justify-content-center my-5">
        <Col md={6}>
          <CardGroup>
            <Card className="registration-card">
            <Card.Img  src={Logo} alt="myFlix Logo" />
              <Card.Body>
                <Card.Title>Register</Card.Title>
                <form>
                <Form.Group controlId="formUserName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={userName}
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <p className="error-mesg">{userNameErr}</p>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength="8"
                    />
                    <p className="error-mesg">{passwordErr}</p>
                  </Form.Group>

                  <Form.Group controlId="formName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="name"
                      value={name}
                      placeholder="First Name"
                      onChange={(e) => setName(e.target.value)}
                      
                    />
                  </Form.Group>
                <p></p>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p className="error-mesg">{emailErr}</p>

                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      placeholder="dd-mm-yyyy"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                 
                </form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

RegistrationView.propTypes={
  register: PropTypes.shape({
    name: PropTypes.string,
    userName:  PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.instanceOf(Date)

  })
}
