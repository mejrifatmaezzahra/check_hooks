import React, {useState} from "react";
import Ratings from "./Ratings";
import { Link } from 'react-router-dom';


import "../App.css";



const Moviecard = ({movie :{Title, Year, PURL, Rate, description } }) => {

  const [text, setText] = useState ('');

  const adddesc = () => {
    if (text === '') {
      setText(description);
    }else { 
      setText('');
    }
  };
  return (
    <Link to={`/movie/${Title.split(" ").join('')}`}> 
    <article className="movie">
      <a target="_blank" >
      <img className="photo" src={PURL} alt="" />
      <h1>{Title}</h1>
      <h4 style={{ color: "#617d98" }}>{Year}</h4>
      </a>
      <Ratings Rate={Rate} />
      <div>
        <button onClick={adddesc}> description </button>
        <p> {text} </p>
      </div>
    </article>
    </Link>
    
  );
}

export default Moviecard;