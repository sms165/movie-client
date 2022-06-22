import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";

import {Link} from 'react-router-dom'

// bootstrap
import { Card, Container } from "react-bootstrap";
import {Button} from "react-bootstrap";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    

    return (
      
      <Container className="movie-card">
      <Card className="border-0 mb-4">
        {/* <Link to={`/actor`}>Actors</Link> */}
        <Link to={`/movies/${movie.title}`}>
        <Card.Img variant="top" src={movie.imageUrl} crossOrigin="anonymous" />
        </Link>
        <Card.Body className="style-card">
          <Card.Title>{movie.title}</Card.Title>
          
          <Card.Text>{movie.description}</Card.Text>
          {/* <Button onClick={() => onMovieClick(movie)} variant="link">
            Open
          </Button> */}
        </Card.Body>
      </Card>
      </Container>
    );
  }
}

//     <div
//       className="movie-card"
//       onClick={() => {
//         onMovieClick(movie);
//       }}
//     >
//       {movie.title}{" "}
//     </div>
//   );
// }
// }

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }),
    genre: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  // onMovieClick: PropTypes.func.isRequired,
};
