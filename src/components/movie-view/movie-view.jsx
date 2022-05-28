import React from "react";

export class MovieView extends React.Component {
  keypressCallback(event){
    console.log(event.key);
  }

  componentDidMount(){
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div className="movie-view">
        <div className="movie-image">
          <img src={movie.imageUrl} alt="movie poster" />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.title}</span>
        </div>
        <div className="description">
          <span className="label">Description: </span>
          <span className="value">{movie.description}</span>
        </div>
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{movie.director.name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{movie.director.bio}</span>
        </div>
        <div className="genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.genre.name}</span>
         
          {console.log(movie.genre.map((genre)=>
          {genre.name[0]}))}

        </div>
        <div className="genre">
          <span className="label">Genre description: </span>
          <span className="value">{movie.genre.description}</span>
          {console.log(movie.genre.map((genre,key)=>
          {genre.description}))}
          
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
    );
  }
}
