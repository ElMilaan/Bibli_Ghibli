import { useEffect, useState } from "react";
import fetchFilms from "../../services/data";
import Loading from "../Loading";
import CatalogFilters from "./CatalogFilters";
import FilmCards from "./FilmCards";

const CatalogContent = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nbToShow, setNumToShow] = useState(7);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const getFilms = async () => {
      try {
        const movies = await fetchFilms();
        if (movies) {
          setFilms(movies);
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

  const handleFilterUpdate = (event) => {
    setNumToShow(Number(event.target.value));
  };

  const handleSortUpdate = (event) => {
    setSortOrder(event.target.value);
  };

  const onSearchUpdate = (event) => {
    setSearchData(event.target.value);
  };

  const sortedFilms = [...films].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="catalog-content">
      <CatalogFilters
        onFilterUpdate={handleFilterUpdate}
        numToShow={nbToShow}
        onSortUpdate={handleSortUpdate}
        sortOrder={sortOrder}
        onSearchUpdate={onSearchUpdate}
        nbFilms={sortedFilms.length}
      />
      <div className="right-part">
        <FilmCards
          films={sortedFilms}
          nbToShow={nbToShow}
          searchData={searchData}
        />
      </div>
    </div>
  );
};

export default CatalogContent;
