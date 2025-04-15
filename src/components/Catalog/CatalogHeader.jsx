const CatalogHeader = () => {
  const banners = [
    "bicycle_banner",
    "chihiro_banner",
    "generic_banner",
    "plane_on_water_banner",
    "trees_banner",
  ];

  const randomBanner = banners[Math.floor(Math.random() * banners.length)];

  const CatalogHeaderStyle = {
    backgroundImage: `url("assets/img/Banner/${randomBanner}.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
  };

  return (
    <div className="catalog-header" style={CatalogHeaderStyle}>
      <h1 className="title text">Catalog</h1>
    </div>
  );
};

export default CatalogHeader;
