import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
  return (
    <Link className="film-card" to={`/catalog/${film.id}`} state={{ film }}>
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

export default FilmCard;
