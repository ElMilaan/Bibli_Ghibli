import React from "react";
import FilmCard from "./FilmCard";

const FilmCards = ({ films, nbToShow, searchData }) => {
  const displayedFilms = films
    .filter((film) => film.title.includes(searchData))
    .slice(0, nbToShow);

  if (displayedFilms.length === 0) {
    return (
      <div className="no-film">
        <h3 className="no-film-text text">
          There isn't any movie that match with your filters
        </h3>
      </div>
    );
  }

  return (
    <div className="films-container">
      {displayedFilms.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmCards;
