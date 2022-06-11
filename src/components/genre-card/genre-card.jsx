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
      <Card>
        <Link to={`/genre/${genres.name}`}>
       
        </Link>
        <Card.Body>
          <Card.Title>{genres.name}</Card.Title>
          
        </Card.Body>
      </Card>
      </Container>
    );
  }
}


GenreCard.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    
    
  }).isRequired,
  // onMovieClick: PropTypes.func.isRequired,
};
