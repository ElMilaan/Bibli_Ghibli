import { useLocation } from "react-router-dom";
import { FilmContent, FilmHeader } from "../components";

const Film = () => {
  const location = useLocation();
  const { film } = location.state || {};

  if (!film) {
    console.log("Error : Film not found");
    // return <Error error="Film not found" />;
  }

  return (
    <div className="margin-page bg">
      <div className="film-container">
        <FilmHeader banner={film.movie_banner} />
        <FilmContent film={film} />
      </div>
    </div>
  );
};

export default Film;
