import React from "react";
import PropTypes from "prop-types";
import "./director-card.scss";

import {Link} from 'react-router-dom'

// bootstrap
import { Card, Container } from "react-bootstrap";
import {Button} from "react-bootstrap";

export class DirectorCard extends React.Component {
  render() {
    const { director } = this.props;

    return (
      <Link to={`/movies/director/${director.name}`}> 
      <Container className="director-card">
      <Card className="border-0 mb-4 mw">
          
        {/* <Link to={`/movies/director/${director.name}`}>  */}
        <Card.Img variant="top" src={director.portrait} crossOrigin="anonymous" />
        {/* </Link> */}
        <Card.Body className="style-card">
        {/* <Link to={`/movies/director/${director.name}`}>  */}
          <Card.Title>{director.name}</Card.Title>
          {/* </Link> */}
          
        </Card.Body>
        
      </Card>
      </Container>
      </Link>
    );
  }
}



// DirectorCard.propTypes = {
//     movie: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       director: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         bio: PropTypes.string.isRequired,
//       }),
//       genre: PropTypes.arrayOf(
//         PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           description: PropTypes.string.isRequired,
//         })
//       ),
//     }).isRequired,
//     // onMovieClick: PropTypes.func.isRequired,
//   };
  