import React, { useState } from "react";
import { moviesData } from "./Data.js";
import MovieList from "./components/MovieList/MovieList";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedRate, setSelectedRate] = useState(0);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const resetFilter = () => {
    setInputSearch("");
    setSelectedRate(0);
  };

  return (
    <div className="App">
      <Navigation
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        resetFilter={resetFilter}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <MovieList add={add}
              movies={movies}
              inputSearch={inputSearch}
              selectedRate={selectedRate}
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
