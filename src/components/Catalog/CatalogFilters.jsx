const CatalogFilters = ({
  onFilterUpdate,
  numToShow,
  onSortUpdate,
  sortOrder,
}) => {
  return (
    <div className="filters-container">
      <h2 className="filter-text text">Filters</h2>
      <div className="filters">
        <label htmlFor="numToShow" className="text">
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
        />
        <label htmlFor="sortOrder" className="text">
          Trier par ordre alphabétique :
        </label>
        <select id="sortOrder" value={sortOrder} onChange={onSortUpdate}>
          <option value="asc">Ascendant</option>
          <option value="desc">Descendant</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogFilters;
