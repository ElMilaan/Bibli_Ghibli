const CatalogFilters = ({
  onFilterUpdate,
  numToShow,
  onSortUpdate,
  sortOrder,
  onSearchUpdate,
}) => {
  return (
    <div className="filters-container">
      <h2 className="filters-title text">Filters</h2>
      <div className="filters">
        <div className="slider-container container">
          <label htmlFor="numToShow" className="label text">
            Nombre de films à afficher : {numToShow}
          </label>
          <input
            type="range"
            id="numToShow"
            min="8"
            max="20"
            step="1"
            value={numToShow}
            onChange={onFilterUpdate}
            style={{ width: "100%" }}
            className="slider"
          />
        </div>
        <div className="sort-container container">
          <label htmlFor="sortOrder" className="text">
            Trier par ordre alphabétique :
          </label>
          <select id="sortOrder" value={sortOrder} onChange={onSortUpdate}>
            <option value="asc">ABC</option>
            <option value="desc">ZYX</option>
          </select>
        </div>
        <div className="search-container container">
          <input
            type="text"
            id="numToShow"
            placeholder="Search Movie"
            onChange={onSearchUpdate}
            style={{ width: "100%" }}
            className="search-bar"
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
