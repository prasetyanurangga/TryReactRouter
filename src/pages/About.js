import React from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  let { nama } = useParams();
  return (
    <div>
      <h2>Ini About : {nama}</h2>
      // ini penggunaan link sebagai a href
      <Link to="/users">Ke Users</Link>
    </div>
  );
};

export default About;
