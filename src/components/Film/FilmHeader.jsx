const FilmHeader = ({ banner }) => {
  return (
    <div className="top">
      <img src={banner} alt="Film banner" className="banner" />
    </div>
  );
};

export default FilmHeader;
