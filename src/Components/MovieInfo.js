import React, {useState} from "react";
import Ratings from "./Ratings";
import { Link } from 'react-router-dom';


function MovieInfo (props) {

  const movieFound = props.moviesList.find(
    (movie) => movie.Title.split(" ").join('') == props.match.params.Tiltle.split(" ").join('')
  );




  return (
    <div className="Mov">
    <article className="InfoMovie">
    <img className="cophoto" src={movieFound.cover} alt="movie" />
    <Link to="/"> <button className="booo">Return to choose another movie</button></Link>     
    <div className="desc">
    <h1> { movieFound.Title} </h1>
    <h4 >  Release Date :<span style={{ color: "#617d98" }}> ({ movieFound.Year})</span></h4>
    <h2>Diected by : <span style={{ color: "#617d98" }}> { movieFound.Directed}</span></h2>
    </div>
    <div className="descc"> 
    <h3> Genre : <span style={{ color: "#617d98" }}> { movieFound.Genres}.</span> </h3>
    <Ratings Rate={movieFound.Rate}/>
    <br></br> <br></br>
   
    <a href={movieFound.link} target="_blank">

      <button className="myButton"> Watch Trailer  <i className="fa fa-youtube-play" ></i> </button>
      
      </a>
    </div> 
   
    <div className="syn">
      <h2> Synopsis by : <span style={{ color: "#617d98" }}> { movieFound.Synopsis}.</span></h2>
      <p > {movieFound.description} </p>
    </div>
    
   
    
  </article>
  </div>
  );
}

export default MovieInfo;