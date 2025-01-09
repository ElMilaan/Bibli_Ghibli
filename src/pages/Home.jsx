import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bibli Ghibli</h1>
      <p>Welcome Home</p>
      <NavLink to="/catalog">Catalog</NavLink>
    </div>
  );
};

export default Home;
