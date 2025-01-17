import { Link } from "react-router-dom";

const FilmContent = ({ film }) => {
  return (
    <div className="content">
      <Link to="/catalog" className="back-catalog link">
        Back to Catalog
      </Link>
      <img src={film.image} alt="Film Poster" className="poster" />
      <div className="infos">
        <h1 className="film-title text">{film.title}</h1>
        <div className="except-title">
          <p className="film-director text">Directed by {film.director}</p>
          <p className="film-description text">{film.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmContent;
