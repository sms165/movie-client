import React, { useState, useEffect } from "react";
import "./movie-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";

import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/lazy";

export function MovieView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { title } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");
  const [movie, setMovie] = useState(null);

  const [hello, setHello] = useState("hello");

  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [favorites, setFavorites] = useState([]);
  

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
        // setPassword(response.data.password);
        setEmail(response.data.email);
        setName(response.data.name);
        setBirthday(response.data.birthday);

        // console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  const updateUser = () => {
    axios
      .post(
        `https://my-flix-careerfoundry.herokuapp.com/users/${activeUser}/${id}`,
        {
          favorites: favorites,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response) => {
        alert("Profile has been updated");
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  

  useEffect(() => {
    getUser();
    
    axios
      .get(baseURL + "movies/" + title, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        setId(res.data._id);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="movie-detail">
      {movie && (
        <div className="movie-view">
          <Container className="movie-size">
            <Row>
              <Col>
                <div className="movie-image">
                  <img
                    src={movie.imageUrl}
                    alt="movie poster"
                    crossOrigin="anonymous"
                    className="image rounded float-left"
                  />
                </div>
              </Col>
              <Col>
                <div className="movie-title">
                  <span className="title h1 ">{movie.title}</span>
                  <p>
                    <Button onClick={updateUser}>Add to favorites</Button>
                    {console.log(user)}
                  </p>
                </div>
                <br />

                <div className="description">
                  <div className="label h2"> Synopsis: </div>

                  <div className="value">{movie.description}</div>
                </div>
                <br />

                <div className="genre">
                  <div className="label h2">Genre: </div>

                  {movie.genre.map((genre, index) => (
                    <div key={index}>
                      <a href={`/movies/genre/${genre.name}`}>
                        <p className="h6">{genre.name}</p>
                      </a>
                      {/* <p> Description: {genre.description}</p> */}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="director-name">
              <div className="director h2">Director: </div>

              <Row>
                <Col className="director-grid">
                  {/* <Container className="wrapper"> */}
                    <Row>
                      <Col xs={true} md={true}>
                        <div className="director-image">
                          <a href={`/movies/director/${movie.director.name}`}>
                            <img
                              src={movie.director.portrait}
                              alt="director image"
                              crossOrigin="anonymous"
                              className="director-image"
                            />
                          </a>
                        </div>
                        <p className="h6 text-center">{movie.director.name}</p>
                      </Col>
                    </Row>
                  {/* </Container> */}
                </Col>
              </Row>
            </div>
          </Container>
          <br />

          <Container>
            
            <div className="actors">
              <div className="label h2">Actors: </div>
              <Row>
                <Col className="actor-grid">
                  {movie.actors.map((actor, index) => (
                    // <Container className="wrapper">
                      <div key={index}>
                        <Row>
                          <Col xs={true} md={true}>
                            <div className="actor-image">
                              <a href={`/movies/actor/${actor.name}`}>
                                <img
                                  src={actor.portrait}
                                  alt="actor image"
                                  crossOrigin="anonymous"
                                  className="actor-image"
                                />
                              </a>
                            </div>
                            <p className="h6 text-center">{actor.name}</p>
                          </Col>
                        </Row>
                      </div>
                    // </Container>
                  ))}
                </Col>
              </Row>
            </div>
            {console.log(user)}
          </Container>

          {/* <iframe width="560" height="315" src={movie.trailerUrl}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}

          {/* <video width="560" height="315"  src="//v.traileraddict.com/109699"   crossOrigin="anonymous"/> */}
          {/* <link src="https://www.youtube.com/watch?v=hxyp_LkKDdk " /> */}

          {/* <div > <iframe frameBorder="0" type="text/html" src="//v.traileraddict.com/109699"  width="560" height="315" allowFullScreen crossOrigin="anonymous" > </iframe> </div>
           */}

          {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

          {/* <ReactPlayer url={`https://www.youtube.com/watch?v=hxyp_LkKDdk${trail}`} crossOrigin="anonymous" /> */}
          <div className="backbtn">
            <Button
              variant="custom"
              onClick={() => {
                navigate("/");
              }}
            >
              Movie directory
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
