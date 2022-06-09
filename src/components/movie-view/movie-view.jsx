import React from "react";
import './movie-view.scss';

import {Container, Row, Col, Button, Card, CardGroup} from 'react-bootstrap';

export class MovieView extends React.Component {

  constructor(props) {
    super(props);
    
    
  }

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
    console.log(this.props)
    let { title } = this.props.match.params;
    let selectMovie = this.props.movies.find(m => m.title === math.params.title);
    let movie= this.props.movies[selectMovie];
    console.log(movie);
    // const { movie2, onBackClick } = this.props;

    return (
      <Container className="movie-detail">
        <Row>
      <div className="movie-view">
        <div className="movie-image">
          <img src={movie.imageUrl} alt="movie poster" crossOrigin="anonymous" className="image"/>
        </div>
        <div className="movie-title">
          <span className="title h1 ">{movie.title}</span>
        </div>
        <br />
        <div className="description">
          <div className="label
          h5">Synopsis: </div>
          <div className="value">{movie.description}</div>
        </div>
        <br />
        <div className="director-name">
          <div className="director h5">Director: </div>
          <span className="label">Name: </span>
          <span className="value">{movie.director.name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{movie.director.bio}</span>
        </div>
        <br />
        <div className="genre">
          <div className="label h5">Genre: </div>

        {
          movie.genre.map((genre,index)=>(
            <div key={index}>
              <p className="h6">{genre.name}</p>
              <p> Description: {genre.description}</p>
              </div>
          ))
        }

        </div>
        <div className="backbtn">
        <Button variant="custom"
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
        </div>
      </div>
      </Row>
      </Container>);
  }
}
