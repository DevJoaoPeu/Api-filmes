import { useEffect, useState } from "react";
import { Play } from "phosphor-react";
import "./App.css";

const imageSearch = "https://image.tmdb.org/t/p/w500/";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8ed200f50a6942ca5bc8b5cdec27ff22"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="App">
      <div>
        <div className="contentText">
          <h1 className="contentText-title">Adão Negro</h1>
          <p className="contentText-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ipsum accusamus animi at placeat recusandae incidunt porro
            dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. At consequatur neque unde officiis vel odit perspiciatis
            cumque dolores? Facilis quis laudantium officia ab officiis rerum
            aliquam natus quo eum in?
          </p>
          <button className="contentText-button">
            <Play size={32} weight="light" />
            Watch Now
          </button>
        </div>
        <div className="movies">
          {movies.map((movie, index) => {
            return (
              <div className="movie"  key={index}>
                <img className="imageMovie" src={imageSearch + movie.poster_path} />
                <span>{movie.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
