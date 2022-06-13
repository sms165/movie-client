import React, { useState, useEffect } from "react";
import "./actor-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup,Link } from "react-bootstrap";

export function ActorView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { actor } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})

  const [user, setUser] = useState("");
  const [actorsDetail, setActorsDetail] = useState(null);

  const [director, setDirector] = "useState";

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL + "movies/actor/" + actor, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setActorsDetail(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="actor-detail">
      
      {actorsDetail && (
        <div className="actor-view">
          <Container className="actor-size">
            <Row>
            <Col>
          
            <div className="actor-image">
              <img
                src={actorsDetail[0].actors[0].portrait}
                alt="actor image"
                crossOrigin="anonymous"
                className="image rounded float-left"
              />
              </div>
              </Col>
            
            <Col>
            <h1>{actorsDetail[0].actors[0].name}</h1>

            <br/>
            {console.log(actorsDetail[0].actors[0].name)}
          <h2>Biography: </h2>
            {actorsDetail[0].actors[0].bio}
          <br/>
          <br/>
        <h3>Birthday: </h3>
            {actorsDetail[0].actors[0].birthYear}
        < br/>
        </Col>
        </Row>
        </Container>
        
        
          <Container  > 
            <Row>

            <div className="actor-movies">
             
              <h2>Movies: </h2>
              
                <Col className="movie-grid">
                  {actorsDetail.map((actor, index) => (
                    <div key={actor}>
                      <Row>
                        <Col xs={true} md={true}>
                          <div className="movie-image">
                          <a href={`/movies/${actor.title}`}>
                            <img
                            
                              src={actor.imageUrl}
                              alt="movie poster"
                              crossOrigin="anonymous"
                              className="image "
                            />
                            </a>
                          </div>
                          <p className="h6 text-center">{actor.title}</p>
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
