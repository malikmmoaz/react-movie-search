import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (searchValue) => {
    const response = await fetch(`${API_URL}&s=${searchValue}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col p-20 items-center align-center gap-12">
      <h1>NOT IMDB</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Batman Begins..."
          value={search}
          onChange={handleChange}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard movies={movie} />
          ))}
        </div>
      ) : (
        <h1>no movies found</h1>
      )}
    </div>
  );
}

export default App;
