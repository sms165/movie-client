import React, { useState, useEffect } from "react";
import "./director-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";

export function DirectorView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { directorName } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");
  const [directorDetail, setDirectorDetail] = useState(null);

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL + "movies/director/" + directorName, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setDirectorDetail(res.data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <Container className="movie-detail">
      {directorDetail && (
       

        <div className="director-view">
          <Container className="director-size">
            <Row>
              <Col>
            
              <div className="actor-image">
                <img
                  src={directorDetail[0].director.portrait}
                  alt="actor image"
                  crossOrigin="anonymous"
                  className="image rounded float-left"
                />
                </div>
                </Col>

                <Col>
                {/* <p className="h6">{directorDetail[0].director.name}</p> */}
                <h1>{directorDetail[0].director.name}</h1>
                <br />
                {/* {console.log(actorsDetail[0].actors[0].name)} */}
                <h2>Biography: </h2>
                {directorDetail[0].director.bio}
                <br />
                <br />
                <h3>Birthday: </h3>
                {directorDetail[0].director.birthYear}
              
            
            <br />
            </Col>
            </Row>
          </Container>

          <Container  >
            <Row>
            <div className="director-movies">
              <h2>Movies: </h2>
              
                <Col className="movie-grid">
                  {directorDetail.map((director, index) => (
                    <div key={director}>
                      <Row>
                        <Col xs={true} md={true}>
                          <div className="movie-image">
                          <a href={`/movies/${director.title}`}>
                            <img
                            
                              src={director.imageUrl}
                              alt="movie poster"
                              crossOrigin="anonymous"
                              className="image "
                            />
                            </a>
                          </div>
                          <p className="h6 text-center">{director.title}</p>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              
            </div>
            </Row>
          </Container>


          <div className="backbtn">
            <Button
              variant="custom"
              onClick={() => {
                navigate("/movies/director");
              }}
            >
              Director directory
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
