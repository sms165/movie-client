import React from "react";
import PropTypes from "prop-types";
import "./genre-card.scss";

import {Link} from 'react-router-dom'

// bootstrap
import { Card, Container } from "react-bootstrap";
import {Button} from "react-bootstrap";

export class GenreCard extends React.Component {
  render() {
    const { genres } = this.props;

    return (
      <Container>
      <Card className="border-0 mb-4">
        
        <Link className="genreImg" to={`/movies/genre/${genres.name}`}>
            <h1>{genres.name}</h1>
            {/* <Card.Img variant="top" src="https://app.photobucket.com/u/sms165/a/550253a3-a354-40e5-a865-acf98b974969/p/8d816b6f-9c4e-48b5-901b-90f5cff720fc" crossOrigin="anonymous" /> */}
        </Link>
        {/* <Card.Body>
          <Card.Title>{genres.name}</Card.Title>
          
        </Card.Body> */}
        
      </Card>
      </Container>
    );
  }
}


GenreCard.propTypes = {
  genres: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    
    
  }).isRequired,
  // onMovieClick: PropTypes.func.isRequired,
};
