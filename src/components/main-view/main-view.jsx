import React from "react";
import axios from 'axios';
import './main-view.scss';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: null
    };
  }

  componentDidMount(){
    axios.get('https://my-flix-careerfoundry.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  onLoggedIn (user) {
    this.setState({
      user
    });
  }

  onRegister(registered){
    this.setState({
      registered
    });
  }

  render() {
    const { movies, selectedMovie, user,registered } = this.state;

   if(registered) return <RegistrationView />

    if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0) {
      return <div className="main-view" />;
    }

    return (
      <Row className="main-view justify-content-md-center">
        {/* ternary operator */}
        {selectedMovie ? (
          <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
          </Col>
        ) : 
          movies.map(movie => (
            <Col md={3}>
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
            </Col>
          ))
        }
       
      </Row>
    );
  }
}
