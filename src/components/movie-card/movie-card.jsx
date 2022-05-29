import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";

// bootstrap
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.imageUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="link">
            Open
          </Button>
        </Card.Body>
      </Card>
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
  onMovieClick: PropTypes.func.isRequired,
};
