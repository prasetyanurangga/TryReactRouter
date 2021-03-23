import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Ini Home</h2>
      <Link to="/about/angga">Ke ABout</Link>
    </div>
  );
};

export default Home;
