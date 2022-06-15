import React, { useState, useEffect } from "react";
import "./user-view.scss";

import { MovieCard } from "../movie-card/movie-card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRegular,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardGroup,
  Modal,
  Form,
  CloseButton,
  Link
} from "react-bootstrap";

import { DeleteModal } from "./delete-modal";

import ReactPlayer from "react-player/youtube";

export function UserView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

   const { userName } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})
  const [movies, setMovies ] = useState([]);
  const [user, setUser] = useState("");

 
  

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [upName, setUpName ] = useState("")

  //   change password check if user wrote in old password correctly
  //const [oldPassword, setOldPassword] = useState("");
  let newPassword;
  let oldPassword;
  //   Validation errors
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [birthdayErr, setBirthdayErr] = useState("");

  //   Delete Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Name Change Modal
  const [showChange, setShowChange] = useState(false);

  const handleCloseChange = () => setShowChange(false);
  const handleShowChange = () => setShowChange(true);

  //   Email Change Modal
  const [showChangeEmail, setShowChangeEmail] = useState(false);

  const handleCloseChangeEmail = () => setShowChangeEmail(false);
  const handleShowChangeEmail = () => setShowChangeEmail(true);

  //   Birthday Change Modal
  const [showChangeBirthday, setShowChangeBirthday] = useState(false);

  const handleCloseChangeBirthday = () => setShowChangeBirthday(false);
  const handleShowChangeBirthday = () => setShowChangeBirthday(true);

  //   Password Change Modal
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleCloseChangePassword = () => setShowChangePassword(false);
  const handleShowChangePassword = () => setShowChangePassword(true);

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const getUser = () => {
    axios
      .get(`https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setUser(response.data);
       setPassword(response.data.password);
        setEmail(response.data.email);
        setName(response.data.name);
        setBirthday(response.data.birthday);
        setFavorites(response.data.favorites)
        // console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getMovies= () => {
    axios
      .get("https://my-flix-careerfoundry.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const validate = () => {
    let isReq = true;

    if (!name) {
      setNameErr("Name is required");
      isReq = false;
    }

    if (!birthday) {
      setBirthdayErr("Date is required");
      isReq = false;
    }

    if (!password) {
      setPasswordErr("Password is required");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be at least 6 characters long)");
      isReq = false;
    }

    if (!email) {
      setEmailErr("Email address is required");
      isReq = false;
    } else if (!email.match(validRegex)) {
      setEmailErr("Email must be valid");
      isReq = false;
    }

    return isReq;
  };

  // const updatePassword = () => {
  //   // if ({oldPassword} != user.password) {

  //   //    console.log("password dont match") ;

  //   axios
  //     .post(`https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}/change_password`, {
  //       oldPassword: oldPassword,
  //       newPassword: newPassword,
  //       userName:userName,
  //     },
  //     {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then((response) => {
  //       console.log('password')
  //     })
  //     .catch((e) => {
  //       console.log("no such user", userName, password, oldPassword);
  //     });

  //   //   }
  // };

  const updateUser = () => {
    const isReq = validate();
    if (isReq) {
      axios
        .put(
          `https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}`,
          {
            name: name,
            email: email,
            birthday: birthday,
             password: password,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          alert("Profile has been updated");
          console.log(response.data);
          window.open(`/profile/${activeUser}`, "_self");
        })
        .catch((error) => console.error(error));
    }
  };

  const deleteUser = () => {
    axios.delete( `https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}`,
  {headers: { Authorization: `Bearer ${accessToken}` },
  })
  .then((response) => {
    
    localStorage.removeItem('user');
        localStorage.removeItem('token');
        alert('Your profile has been deleted');
        window.open("/", "_self");
    // console.log(response.data);
  })
  .catch((error) => {console.error(error);
}); 
  };

  function parseDate(date) {
    // console.log(user.birthday);
    if (user.birthday == null) {
      return user.birthday;
    } else {
      // console.log(date);
      let newDate = date.split("T")[0];
      let final = newDate.split("-").reverse().join("-");
      return final;
    }
  }

 const favMovies =movies.filter((movie)=> favorites.includes(movie._id));

 function getFavMov(){
   console.log(favMovies)
   console.log(movies)
   console.log(favorites)
   let i =0;
    // while (i<favMovies.length ) {
    //   const movie = favMovies[i];
    //   console.log(movie)
    return(
    favMovies.map((movie) => (
      <Col md={4} key={movie._id}>
        
        <Container className="fav-card">
      <Card className="border-0 mb-4">
        {/* <Link to={`/actor`}>Actors</Link> */}
        {/* <Link to={`/movies/${movie.title}`}> */}
         <Card.Img variant="top" src={movie.imageUrl} crossOrigin="anonymous" />
        {/* </Link>  */}
        <Card.Body className="fav-style-card">
          <Card.Title>{movie.title}</Card.Title>
          <Button onClick={() => {delFavMovies(movie._id)}}  variant="primary">
            Delete from favorites
          </Button>
         
         
        </Card.Body>
        
      </Card>
      </Container>
        </Col>
      
    ))
     
    )
        
    }

  function delFavMovies(id){
    console.log(id);
    axios.delete( `https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}/${id}`,
    {headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((response) => {
      
          
          alert('The movie has been deleted from your favorites.');
          window.open(`/profile/${activeUser}`, "_self");
      // console.log(response.data);
    })
    .catch((error) => {console.error(error);
  }); 
    };
 
   

  useEffect(() => {
    getUser();
    getMovies();
    
    
  }, []);

  return (
    <Container className="user-detail">
      {/* Delete Account */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete your account?</p>
            <p>All your data will be deleted.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteUser}>
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* Change Name */}
      <>
        <Modal show={showChange} onHide={handleCloseChange}>
          <Modal.Header closeButton>
            <Modal.Title>Change Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Current Name: {user.name}</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Please enter your new name: </Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="New name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <p className="error-mesg">{nameErr}</p>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseChange}>
              Close
            </Button>
            <Button variant="primary" onClick={updateUser}>
              Set new Name
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* Change Email */}
      <>
        <Modal show={showChangeEmail} onHide={handleCloseChangeEmail}>
          <Modal.Header closeButton>
            <Modal.Title>Change Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Current Name: {user.email}</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Please enter your new Email: </Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  placeholder="New email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="error-mesg">{emailErr}</p>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseChangeEmail}>
              Close
            </Button>
            <Button variant="primary" onClick={updateUser}>
              Set new Email
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* Change Birthday */}
      <>
        <Modal show={showChangeBirthday} onHide={handleCloseChangeBirthday}>
          <Modal.Header closeButton>
            <Modal.Title>Change Birthday</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Current Birthday: {parseDate(user.birthday)} </p>
            <Form>
              <Form.Group controlId="formBirthday">
                <Form.Label>Please enter a date: </Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  placeholder="New name"
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
                <p className="error-mesg">{birthdayErr}</p>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseChangeBirthday}>
              Close
            </Button>
            
            <Button variant="primary" onClick={updateUser}>
              Set new Birthday
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* Change Password */}
      <>
        <Modal show={showChangePassword} onHide={handleCloseChangePassword}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Current Password: {parseDate(user.birthday)} </p>
            <Form>
              <Form.Group>
                <Form.Label>Please enter old password: </Form.Label>
                <Form.Control
                  name="oldPassword"
                  id="oldPassword"
                  type="password"
                  value={oldPassword}
                  placeholder="Old password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Label>Please enter a new password: </Form.Label>
                <Form.Control
                  name="newPassword"
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  placeholder="New password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="error-mesg">{passwordErr}</p>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseChangePassword}>
              Close
            </Button>
            
            <Button variant="primary" >
              Set new Password
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {user && (
        <div className="user-view">
          <Row className="align-items-center">
          
            <Col sm={4}>
              <h1>User Profile</h1>
            </Col>
            <Col sm={4}>
              <div className="userNameStyle">
                <h1> {user.userName}</h1>
              </div>
            </Col>
            <Col sm={2}></Col>

            <Col sm={2} className="trash">
              <button className="btnStyle" onClick={handleShow}>
                <FontAwesomeIcon icon={faTrashCan} />
                <p className="delete">Delete Account</p>
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Name:</p>
            </Col>
            <Col>
              <p> {user.name}</p>
            </Col>

            <Col>
              <button className="btnStyle" onClick={handleShowChange}>
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
              <button className="btnStyle" onClick={handleShowChangeEmail}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <p>Birthday:</p>
            </Col>
            <Col>
              {/* {parseDate()} */}
              {/* {if({birthday} {
                <p>{parseDate(user.birthday)}</p>
            }
            } */}
              <p>{parseDate(user.birthday)}</p>
              {/* <p>{user.birthday}</p> */}
            </Col>
            <Col className="align-middle">
              <button className="btnStyle" onClick={handleShowChangeBirthday}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <div className="birthdayChange"></div>
            </Col>
          </Row>
          <br />
          <hr className="hrStyle" />
          <br />
          <Row className="align-items-center">
            <Col>
              <p>Change Password</p>
            </Col>
            <Col>
              <p></p>
            </Col>
            <Col>
              <button className="btnStyle" onClick={handleShowChangePassword}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <div className="passwordChange"></div>
            </Col>
          </Row>
          <br />
          <hr className="hrStyle" />
          <br />
          <h3>Favourite Movies:</h3>
          <Row >
        {getFavMov()}
        
          </Row>

   

  
         
        </div>
      )}
    </Container>

  );
}
