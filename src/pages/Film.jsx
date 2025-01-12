import { useLocation } from "react-router-dom";

const Film = () => {
  const location = useLocation();
  const { film } = location.state || {};

  if (!film) {
    return <Error error="Film not found" />;
  }

  return (
    <div className="film-container bg">
      <div className="top">
        <img src={film.movie_banner} alt="Film banner" className="banner" />
      </div>
      <div className="content">
        <img src={film.image} alt="Film Poster" className="poster" />
        <h1 className="film-title text">{film.title}</h1>
        <p className="film-director text">Directed by {film.director}</p>
        <p className="film-description text">{film.description}</p>
      </div>
    </div>
  );
};

export default Film;
