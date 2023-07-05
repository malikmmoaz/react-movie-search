import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const searchMovies = async (searchValue) => {
    const response = await fetch(`${API_URL}&s=${searchValue}`);
    const data = await response.json();
  };

  //  console.log(searchMovies("batman"));
  console.log(API_URL);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
