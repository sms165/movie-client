import React, { useState } from "react";
import "./login-view.scss";
import Logo from "url:../assets/myFlix-white.svg"

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

export function LoginView(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Declare hook for each input
  const [userNameErr, setUserNameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  //validate user input
  const validate = () => {
    let isReq = true;
    if(!userName){
      setUserNameErr('Username is required');
      isReq = false;
    }else if(userName.length < 2){
      setUserNameErr("Username must be at least two characters long");
      isReq = false;
    }
    if(!password){
      setPasswordErr('Password is required');
      isReq = false;
    }else if(password.length < 6){
      setPasswordErr('Password must be at least 6 characters long');
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq){
    // Send request to server
    axios.post('https://movie-api-jb24.onrender.com/login', {
      userName: userName,
      password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e=> {
      console.log('no such user', userName, password);
      alert('Wrong username or password!');

    });
  }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(true);
  };
  
  

  return (
     <div className="login">
    <Container className="login-container fluid" >
      <Row  >
        <Col>
          <CardGroup>
            <Card className="login-card">
            <Card.Img  src={Logo} alt="myFlix Logo" />
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">If you dont have an account please <Card.Link href="/register">register here</Card.Link>.</Card.Subtitle>
                <Form>
                  <Form.Group controlId="formUserName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                     <p>{userNameErr}</p>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    /> 
                    <p>{passwordErr}</p>
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
