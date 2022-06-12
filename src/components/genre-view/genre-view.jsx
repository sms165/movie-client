import React, { useState, useEffect } from "react";
import "./genre-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup,Link } from "react-bootstrap";

export function GenreView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { genres } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");
  const [genreDetail, setGenreDetail] = useState(null);

 

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL + "movies/genre/" + genres, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setGenreDetail(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="actor-detail">
      
      {genreDetail && (
        <div className="actor-view">
          
        
          <Container  >
            <div className="actor-movies">
              <h2>Movies: </h2>
              <Row>
                <Col className="movie-grid">
                  {genreDetail.map((genre, index) => (
                    <div key={genre}>
                      <Row>
                        <Col xs={true} md={true}>
                          <div className="movie-image">
                          <a href={`/movies/${genre.title}`}>
                            <img
                            
                              src={genre.imageUrl}
                              alt="movie poster"
                              crossOrigin="anonymous"
                              className="image "
                            />
                            </a>
                          </div>
                          <p className="h6 text-center">{genre.title}</p>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </Container>

          <div className="backbtn">
            <Button
              variant="custom"
              onClick={() => {
                navigate("/actor");
              }}
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
 
}
