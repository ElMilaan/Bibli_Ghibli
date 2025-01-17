const FilmContent = ({ film }) => {
  return (
    <div className="content">
      <img src={film.image} alt="Film Poster" className="poster" />
      <h1 className="film-title text">{film.title}</h1>
      <p className="film-director text">Directed by {film.director}</p>
      <p className="film-description text">{film.description}</p>
    </div>
  );
};

export default FilmContent;
