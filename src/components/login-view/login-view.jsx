import React, { useState } from "react";
import "./login-view.scss";

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

export function LoginView(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    props.onLoggedIn(userName);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(true);
  };

  return (
     <div className="login">
    <Container className="login-container" >
      <Row >
        <Col>
          <CardGroup>
            <Card className="login-card">
            <Card.Img  src="/public/myFlixLogo.gif" alt="myFlix Logo" />
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">If you dont have an account please <Card.Link href="#">register here</Card.Link>.</Card.Subtitle>
                <Form>
                  <Form.Group controlId="formUserName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button 
                    variant="custom"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
//         <form>
//                <label>
//                      Username:
//                     <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//                 </label>
//                 <button type="submit" onClick={handleSubmit}>Submit</button>
//                 <button type="submit" onClick={handleRegister}>Register Here</button>
//             </form>
//     );
// }

// export class LoginView extends React.Component  {
//     constructor(props){
//         super(props);

//         this.state ={
//             userName: '',
//             password: ''
//         };

//         this.onUserNameChange = this.onUserNameChange.bind(this);
//         this.onPasswordChange = this.onPasswordChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     onUserNameChange(event){
//         this.setState({
//             userName: event.target.value
//         });
//     }

//     onPasswordChange(event){
//         this.setState({
//             password: event.target.value
//         });
//     }

//     handleSubmit(){
//         const {userName, password} = this.state;
//         console.log(userName, password);
//     }

//     render(){
//         return(
//             <form>
//                 <label>
//                     Username:
//                     <input type="text" value={this.state.userName} onChange={this.onUserNameChange} />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
//                 </label>
//                 <button type="button" onClick={this.handleSubmit}>Submit</button>
//             </form>
//         )
//     }

// }
