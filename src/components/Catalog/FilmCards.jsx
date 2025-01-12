import React from "react";
import FilmCard from "./FilmCard";

const FilmCards = ({ films, nbToShow }) => {
  const displayedFilms = films.slice(0, nbToShow);

  return (
    <div className="films-container">
      {displayedFilms.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmCards;
