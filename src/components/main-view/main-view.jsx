import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main-view.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { ActorCard } from "../actor-card/actor-card";
// import {DirectorView} from "../director-view";
// import {ActorView} from "../actor-view";
// import {GenreView} from "../genre-view";


export function MainView(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: [],
  //     // selectedMovie: null,
  //     user: null,
  //     registered: null,
  //   };
  // }
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(props.user);
  const [actors, setActors] = useState([]);

  // const navigate= useNavigate();
  // componentDidMount() {
  //   let accessToken = localStorage.getItem("token");
  //   if (accessToken !== null) {
  //     this.setState({
  //       user: localStorage.getItem("user"),
  //     });
  //     this.getMovies(accessToken);
  //   }
  // }

  // instead of componentDidMount
  useEffect(() => {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      setUser(localStorage.getItem("user"));
    }
    getMovies(accessToken);
    getActors(accessToken);
  }, [user]);

  // setSelectedMovie(newSelectedMovie) {
  //   this.setState({
  //     selectedMovie: newSelectedMovie,
  //   });
  // }

  function onLoggedIn(authData) {
    console.log(authData);
    setUser(authData.user.userName);

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.userName);
    // this.getMovies(authData.token);
  }

  function onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
  }

  function getMovies(token) {
    axios
      .get("https://my-flix-careerfoundry.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getActors(token) {
    axios
      .get("https://my-flix-careerfoundry.herokuapp.com/actor", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setActors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // onRegister(registered) {
  //   this.setState({
  //     registered,
  //   });
  // }

  // render() {
  //   const { movies, user } = this.state;

  // const { movies, selectedMovie, user, registered } = this.state;

  // if (registered) return <RegistrationView />;

  // if (!user)
  //   return (
  //     <Row>
  //       <Col>
  //         <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
  //       </Col>
  //     </Row>
  //   );
  // // if (selectedMovie) return <MovieView movie={selectedMovie} />;

  // if (movies.length === 0) {
  //   return <div className="main-view" />;
  // }

  return (
    <Router>
      <div className="main-view">
        <div className="logout">
          <button
            onClick={() => {
              onLoggedOut();
            }}
          >
            Logout
          </button>
        </div>
        <Row className="justify-content-md-left">
          <Routes>
            <Route
              exact
              path="/"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  movies.map((m) => (
                    <Col md={3} key={m._id}>
                      <MovieCard movie={m} />
                    </Col>
                  ))
                )
              }
            />

            <Route
              path="/movies/:title"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  
                  <MovieView />
                
                )
              }
            />

<Route
              exact
              path="/actor"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  actors.map((a) => (
                    <Col md={3} key={a._id}>
                      <ActorCard actors={a} />
                    </Col>
                  ))
                )
              }
            />
{/* <Route
              path="/movies/director/:directorName"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  <DirectorView />
                )
              }
            /> */}

{/* <Route
              path="/movies/actor/:actor"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  <ActorView />
                )
              }
            /> */}

{/* <Route
              path="/movies/genre/:genres"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  <GenreView />
                )
              }
            /> */}

{/* <Route
              path="/movies/director/:directorName"
              element={
                !user ? (
                  <Col>
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  </Col>
                ) : (
                  <DirectorView />
                )
              }
            /> */}

<Route
              path="/register"
              element={ 
                  <RegistrationView />
              }
            />

          </Routes>
        </Row>
      </div>
    </Router>

    // {/* ternary operator */}
    // {selectedMovie ? (
    //   <Col md={12}>
    //     <MovieView
    //       movie={selectedMovie}
    //       onBackClick={(newSelectedMovie) => {
    //         this.setSelectedMovie(newSelectedMovie);
    //       }}
    //     />
    //   </Col>
    // ) : (
    //   movies.map((movie) => (
    //     <Col md={3}>
    //       <MovieCard
    //         key={movie._id}
    //         movie={movie}
    //         onMovieClick={(movie) => {
    //           this.setSelectedMovie(movie);
    //         }}
    //       />
    //     </Col>
    //   ))
    // )}
  );
}
