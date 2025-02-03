import { Link } from "react-router-dom";

const FilmContent = ({ film }) => {
  return (
    <div className="content">
      <Link to="/catalog" className="back-catalog link">
        Back to Catalog
      </Link>
      <img src={film.image} alt="Film Poster" className="poster" />
      <h1 className="film-title text">{film.title}</h1>
      <div className="infos">
        <div className="main-infos">
          <div className="release">
            <h2>Release Date</h2>
            <p>{film.release_date}</p>
          </div>
          <div className="director">
            <h2>Director</h2>
            <p>{film.director}</p>
          </div>
          <div className="running-time">
            <h2>Running Time</h2>
            <p>{film.running_time} minutes</p>
          </div>
        </div>
        <div className="description text">
          <h2>Description</h2>
          <p className="film-description">{film.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmContent;
