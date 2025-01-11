import { Link } from "react-router-dom";

const MovieCard = ({ film }) => {
  return (
    <Link className="movie-card" to={`/catalog/${film.id}`}>
      <img src={film.image} alt={`${film.title}'s image`} className="poster" />
      <div className="infos">
        <h2 className="title">{film.title}</h2>
        <div className="sub-infos">
          <p className="director">{film.director}</p>
          <p className="release-date">{film.release_date}</p>
          <p className="mark">10/10</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
