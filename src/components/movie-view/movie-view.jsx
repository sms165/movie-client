import React from "react";
import './movie-view.scss';

import {Container, Row, Col, Button, Card, CardGroup} from 'react-bootstrap';

export class MovieView extends React.Component {
  keypressCallback(event){
    console.log(event.key);
  }

  componentDidMount(){
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
      <div className="movie-view">
        <div className="movie-image">
          <img src={movie.imageUrl} alt="movie poster" crossOrigin="anonymous"/>
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.title}</span>
        </div>
        <div className="description">
          <span className="label">Description: </span>
          <span className="value">{movie.description}</span>
        </div>
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{movie.director.name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{movie.director.bio}</span>
        </div>
        <div className="genre">
          <span className="label">Genre: </span>

        {
          movie.genre.map((genre,index)=>(
            <div key={index}>
              <p>Name: {genre.name}</p>
              <p> Description: {genre.description}</p>
              </div>
          ))
        }

        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
      </Row>
      </Container>);
  }
}
