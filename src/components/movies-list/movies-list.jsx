import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

import "./movies-list.scss";

import { MovieCard } from "../movie-card/movie-card";
import { ActorCard } from "../actor-card/actor-card";
import { DirectorCard } from "../director-card/director-card";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { Row } from "react-bootstrap";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export function MoviesList(props) {
  const { visibilityFilter } = useSelector((state) => state);
  const { movies, actors, director } = props;
  let filteredMovies = movies;
  let filteredActors = actors;
  
  
 let filteredDirector = director;
  const location = useLocation();
  

  


  if (visibilityFilter !== "") {
    if (location.pathname == "/") {
      filteredMovies = movies.filter((m) =>
        m.title.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    } else if (location.pathname == "/movies/director") {
      
        filteredDirector = director.filter((m) =>
        m.name.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    } else {
      filteredActors = actors.filter((m) =>
        m.name.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    }
  }

  if (!movies) return <div className="main-view" />;

  return (
    <>
      {/* <Col md={12} style={{ margin: "1em", }}> */}
      {console.log(director)}
      {console.log(movies)}
      <Row className="filter-row">
        <div className="filter">
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
          {/* </Col> */}
        </div>
      </Row>
      <br />
      {location.pathname == "/" && (
        <Row>
          {filteredMovies.map((m) => (
            <Col md={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
          ))}
        </Row>
      )}
      {location.pathname == "/actor" && (
        <Row>
          {filteredActors.map((m) => (
            <Col md={3} key={m._id}>
              <ActorCard actors={m} />
            </Col>
          ))}
        </Row>
      )}
      {location.pathname == "/movies/director" && (
        // console.log('hello')
        <Row>
          {filteredDirector.map((m) => (
            <Col md={3} key={m.name}>
              <DirectorCard director={m} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
