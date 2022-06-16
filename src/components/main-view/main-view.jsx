import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main-view.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
  Redirect
} from "react-router-dom";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { ActorCard } from "../actor-card/actor-card";
import { ActorView } from "../actor-view/actor-view";
import { GenreCard } from "../genre-card/genre-card";
import { GenreView } from "../genre-view/genre-view";
import { DirectorCard } from "../director-card/director-card";
import { DirectorView } from "../director-view/director-view";
import { Navbar } from "../navbar/navbar";
import { UserView } from "../user-view/user-view";

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
  const [genres, setGenres] = useState([]);

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
    getGenres(accessToken);
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

  function getGenres(token) {
    axios
      .get("https://my-flix-careerfoundry.herokuapp.com/genre", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGenres(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // remove dulicates in object array by key
  function removeDuplicates(array, key) {
    return array.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[key]).indexOf(obj[key]) === pos;
    });
  }

  // get unqiue directors from movies
  function getDirectors(movies) {
    let directors = [];
    movies.forEach((movie) => {
      if (!directors.includes(movie.director)) {
        directors.push(movie.director);
      }
    });    
    return removeDuplicates(directors, "name");
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
        {user && <Navbar />}

        {/* <div className="logout">
          <button
            onClick={() => {
              onLoggedOut();
            }}
          >
            Logout
          </button>
        </div> */}
        <Row className="justify-content-md-left">
          <Routes>
            <Route
              exact
              path="/"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
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
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
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
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  actors.map((a) => (
                    <Col md={3} key={a._id}>
                      <ActorCard actors={a} />
                    </Col>
                  ))
                )
              }
            />
            <Route
              exact
              path="/genre"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  
                  genres.map((a) => (
                    <Col md={4} key={a._id}>
                      <GenreCard genres={a} />
                    </Col>
                  ))
                )
              }
            />

            <Route
              path="/movies/genre/:genres"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  <GenreView />
                )
              }
            />

            <Route
              path="/movies/actor/:actor"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  <ActorView />
                )
              }
            />

            <Route
              path="/movies/director"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  getDirectors(movies).map((m) => (
                    <Col md={3} key={m._id}>
                      <DirectorCard director={m} />
                    </Col>
                  ))
                )
              }
            />

            <Route
              path="/movies/director/:directorName"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : (
                  <DirectorView/>
                )
              }
            />

<Route
              path="/profile/:userName"
              element={
                !user ? (
                  <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                ) : 
                  <UserView movies />
                
              }
            />

            <Route
              path="/register"
              element={user ? <Navigate replace to="/" /> : <RegistrationView />}
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
