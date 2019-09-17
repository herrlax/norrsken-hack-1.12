import React from "react";
import ProviderList from "./components/ProviderList";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>Landing page</h2>
      <ProviderList />
      <Link to="/dinners">Next Step</Link>
    </div>
  );
};

export default Landing;
