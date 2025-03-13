import React, { useMemo } from "react";
import FilmCard from "./FilmCard";

const FilmCards = ({ films, nbToShow, searchData }) => {
  const displayedFilms = useMemo(() => {
    console.log("search data : ", searchData);
    return films
      .filter((film) =>
        film.title.toLowerCase().includes(searchData.toLowerCase())
      )
      .slice(0, nbToShow);
  }, [films, nbToShow, searchData]);

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
