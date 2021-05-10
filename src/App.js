import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { MovieData } from "./Components/MovieData";
import AddMovie from "./Components/AddMovie";
import MoviesList from "./Components/MoviesList";
import SearchMovie from "./Components/SearchMovie";
import { BrowserRouter, Route } from "react-router-dom";
import MovieInfo from "./Components/MovieInfo";

import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(MovieData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route
          path="/movie/:Tiltle"
          render={(props) => <MovieInfo {...props} moviesList={moviesList} />}
        />

        <Route
          path="/home"
          render={() => (
            <>
              <SearchMovie
                setNameSearch={setNameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
              />
              <AddMovie
                addNewMovie={addNewMovie}
                setRatingSearch={setRatingSearch}
              />

              <MoviesList
                moviesList={moviesList}
                nameSearch={nameSearch}
                ratingSearch={ratingSearch}
                setRatingSearch={setRatingSearch}
              />
            </>
          )}
          target="_blank"
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;