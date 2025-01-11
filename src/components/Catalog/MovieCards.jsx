import React, { useEffect, useState } from "react";
import fetchFilms from "../../services/data";
import { Error, Loading } from "./..";
import MovieCard from "./MovieCard";

const MovieCards = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const films = await fetchFilms();
        if (films) {
          setFilms(films);
        }
      } catch (error) {
        setError("Error fetching data : ", error);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="movies-container">
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default MovieCards;
