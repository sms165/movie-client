import React, { useState, useEffect } from "react";
import "./movie-view.scss";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardGroup } from "react-bootstrap";

import ReactPlayer from 'react-player/youtube';

export function MovieView(props) {
  const baseURL = "https://my-flix-careerfoundry.herokuapp.com/";

  const { title } = useParams();
  // let movie = movie.find(movie =>movie.title === {title})
 
  const [user, setUser] = useState("");
  const [movie, setMovie] = useState(null);

  const [director, setDirector] = "useState";

  const accessToken = localStorage.getItem("token");
  const activeUser = localStorage.getItem("user");

  const navigate = useNavigate();

  const trail = "&origin=http://localhost:58937"

  // async function getData(activeUser) {
  //   axios.all([
  //     axios
  //     .get("https://my-flix-careerfoundry.herokuapp.com/movies", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       setMovies(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //         axios(baseURL + 'movies/' + title,{ headers: { Authorization: `Bearer ${accessToken}`} } ),

  //         ])
  //           .then(axios.spread((movie) => {

  //             setMovie(movie.data)

  //           }))
  //           .catch(error => console.error(error))

  //         }

  useEffect(() => {
    axios
      .get(baseURL + "movies/" + title, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // keypressCallback((event)=>{
  //   console.log(event.key);
  // })

  // componentDidMount(() =>{
  //   document.addEventListener('keypress', this.keypressCallback);
  // })

  // componentWillUnmount(() =>{
  //   document.removeEventListener('keypress', this.keypressCallback);
  // })

 
  return (
    
    <Container className="movie-detail">
    {movie &&

      <Row>
        <div className="movie-view">
          <div className="movie-image">
            <img
              src={movie.imageUrl}
              alt="movie poster"
              crossOrigin="anonymous"
              className="image"
            />
          </div>
          <div className="movie-title">
            <span className="title h1 ">{movie.title}</span>
          </div>
          <br />
          <div className="description">
            <div
              className="label
          h5"
            >
              Synopsis:{" "}
            </div>
            <div className="value">{movie.description}</div>
          </div>
          <br />
          <div className="director-name">
            <div className="director h5">Director: </div>
            <span className="label">Name: </span>

            <span className="value">{movie.director.name}</span>
          </div>
          <div className="director-bio">
            <span className="label">Bio: </span>
            <span className="value">{movie.director.bio}</span>
          </div>
          <br />
          <div className="genre">
            <div className="label h5">Genre: </div>
            
          {
          movie.genre.map((genre,index)=>(
            <div key={index}>
              <p className="h6">{genre.name}</p>
              <p> Description: {genre.description}</p>
              </div>
          ))
        }

          </div>
          
          
          {/* <iframe width="560" height="315" src={movie.trailerUrl}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
           */}
<video width="560" height="315"  src={movie.trailerUrl}  crossOrigin="anonymous"/>
{/* <link src="https://www.youtube.com/watch?v=hxyp_LkKDdk " /> */}

<div > <iframe frameBorder="0" type="text/html" src={`${movie.trailerUrl}${trail}`} width="560" height="315" allowFullScreen crossOrigin="anonymous" > </iframe> </div>
         

{/* <ReactPlayer url={`https://www.youtube.com/watch?v=hxyp_LkKDdk${trail}`} crossOrigin="anonymous" /> */}
          <div className="backbtn">
            <Button
              variant="custom"
              onClick={() => {
               navigate('/');
              }}
            >
              Back
            </Button>
          </div>
        </div>
      </Row>
      
            }
    </Container>
  );
}
