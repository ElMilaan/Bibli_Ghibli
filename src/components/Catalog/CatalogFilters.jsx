const CatalogFilters = ({
  onFilterUpdate,
  numToShow,
  onSortUpdate,
  sortOrder,
  onSearchUpdate,
  nbFilms,
}) => {
  return (
    <div className="filters-container">
      <h2 className="filters-title text">Filters</h2>
      <div className="filters">
        <div className="slider-container container">
          <input
            type="range"
            id="rangeSlider"
            min="1"
            max={nbFilms}
            step="1"
            value={numToShow}
            onChange={(e) => {
              onFilterUpdate(e);
            }}
            style={{ width: "100%" }}
            className="slider"
          />
          <div className="box-minmax">
            <span>1</span>
            <span>{nbFilms}</span>
          </div>
        </div>

        <div className="sort-container container">
          <select
            className="dropdown-sort sort-element"
            id="sortOrder"
            value={sortOrder}
            onChange={onSortUpdate}
          >
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
        </div>

        <div className="search-container container">
          <input
            type="text"
            id="numToShow"
            placeholder="Search Movie"
            onChange={onSearchUpdate}
            style={{ width: "100%" }}
            className="search-bar sort-element"
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
