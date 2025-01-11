import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="content">
      <div className="text">
        <h3 className="title">Présentation du site</h3>
        <p className="desc">
          Ceci est un site qui répertorie tous les films d’animations du studio
          Ghibli, chacun associés à une description et à un avis plus ou moins
          objectif
        </p>
      </div>
      <Link to="/catalog" className="link link-catalog">
        Voir le catalogue
      </Link>
    </div>
  );
};

export default HomeContent;
