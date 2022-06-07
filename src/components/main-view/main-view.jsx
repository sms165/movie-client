import React from "react";
import axios from "axios";
import "./main-view.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

const MainViewWrapper = () => {
  const { title } = useParams();
  const item = this.state.starters.find((movies) => movies.title === title )
 }


export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // selectedMovie: null,
      user: null,
      registered: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  // setSelectedMovie(newSelectedMovie) {
  //   this.setState({
  //     selectedMovie: newSelectedMovie,
  //   });
  // }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.userName,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.userName);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  getMovies(token) {
    axios
      .get("https://my-flix-careerfoundry.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onRegister(registered) {
    this.setState({
      registered,
    });
  }

  

  render() {
    const { movies, user } = this.state;

    // const { movies, selectedMovie, user, registered } = this.state;

    // if (registered) return <RegistrationView />;

    if (!user)
      return (
        <Row>
          <Col>
            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
          </Col>
        </Row>
      );
    // if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0) {
      return <div className="main-view" />;
    }

    return (
      <Router>
        <div className="main-view">
          <button
            onClick={() => {
              this.onLoggedOut();
            }}
          >
            Logout
          </button>
          <Row className="justify-content-md-left">
            <Routes>
              <Route
                exact
                path="/"
                element={movies.map((m) => (
                  <Col md={3} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                )) }
              
              />

              <Route
                path="/movies/:title"
                element={({ match }) => {
                  return (
                    <Col md={8}>
                      <MovieView
                        movie={movies.find(
                          (m) => m.title === match.params.title
                        )}
                      />
                    </Col>
                  );
                }}
              />
            </Routes>
          </Row>
        </div>
      </Router>

      
    );
  }
}


