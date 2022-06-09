import React, {useState, useEffect} from "react";
import './movie-view.scss';
import axios from "axios";

import { useParams } from "react-router-dom";
import {Container, Row, Col, Button, Card, CardGroup} from 'react-bootstrap';

export function MovieView(props) {

  const baseURL= 'https://my-flix-careerfoundry.herokuapp.com/';

  const {title} =useParams()
  // let movie = movie.find(movie =>movie.title === {title})

  const[ user, setUser] = useState('');
   const[movie, setMovie] = useState('');

   const [director, setDirector] = 'useState';

  const accessToken = localStorage.getItem('token');
  const activeUser = localStorage.getItem('user');

  	
  
  // async function getData(activeUser) {
    axios.all([
          
          axios(baseURL + 'movies/' + title,{ headers: { Authorization: `Bearer ${accessToken}`} } ),
          
          ])
            .then(axios.spread((movie) => {
             
              setMovie(movie.data)
              
              
            }))
            .catch(error => console.error(error))
            
            		
          // }

          useEffect(() => {
            getData(activeUser)
          },[])	
        
      
  // keypressCallback((event)=>{
  //   console.log(event.key);
  // })

  // componentDidMount(() =>{
  //   document.addEventListener('keypress', this.keypressCallback);
  // })

  // componentWillUnmount(() =>{
  //   document.removeEventListener('keypress', this.keypressCallback);
  // })

  // render() {
  //   const { movie, onBackClick } = this.props;

    return (
      <Container className="movie-detail">
       
        
         {/* {props.match.params.title} */}
        {/* {movie.filter(movie => movie.title === title).map((mov, index) =>(
          <div key={index} className="movDetail"> */}
{console.log(movie.director)}

{console.log(movie.genre)}
        {/* {movie.find(movie =>movie.title === {title})} */}
          
        <Row>
      <div className="movie-view">
        <div className="movie-image">
          <img src={movie.imageUrl} alt="movie poster" crossOrigin="anonymous" className="image"/>
        </div>
        <div className="movie-title">
          <span className="title h1 ">{movie.title}</span>
        </div>
        <br />
        <div className="description">
          <div className="label
          h5">Synopsis: </div>
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
{/* 
          {
          movie.genre.map((genre,index)=>(
            <div key={index}>
              <p className="h6">{movie.genre.name}</p>
              <p> Description: {moviegenre.description}</p>
              </div>
          ))
        } */}
        
{/*           
         {movie.genre.forEach((genre, index) =>{
           console.log(genre.name);
           
           
           
         }
         )} */}


        </div>
        <div className="backbtn">
        <Button variant="custom"
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
        </div>
      </div>
      </Row>
      {/* </div>
        ))} */}
      </Container>);
  }

