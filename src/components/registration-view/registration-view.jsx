import React, { useState } from "react";
import "./registration-view.scss";

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

export function RegistrationView(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, name, email, birthday);
    props.onRegister(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Register</Card.Title>
                <form>
                <Form.Group controlId="formUserName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
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
  );
}
