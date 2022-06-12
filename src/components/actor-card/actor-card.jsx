import React from "react";
import PropTypes from "prop-types";
import "./actor-card.scss";

import {Link} from 'react-router-dom'

// bootstrap
import { Card, Container } from "react-bootstrap";
import {Button} from "react-bootstrap";

export class ActorCard extends React.Component {
  render() {
    const { actors } = this.props;

    return (
      <Container className="actor-card">
      <Card className="border-0 mb-4">
          
        <Link to={`/movies/actor/${actors.name}`}>
        <Card.Img variant="top" src={actors.portrait} crossOrigin="anonymous" />
        </Link>
        <Card.Body>
          <Card.Title>{actors.name}</Card.Title>
          
        </Card.Body>
        
      </Card>
      </Container>
    );
  }
}


// ActorCard.propTypes = {
//   actor: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     // birthYear: PropTypes.instanceOf(Date),
//     // deathYear: PropTypes.instanceOf(Date),
//     portrait: PropTypes.string
    
//   }).isRequired,
//   // onMovieClick: PropTypes.func.isRequired,
// };
