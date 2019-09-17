import React, { useState } from "react";
import Button from "./components/Button";
import { Redirect } from "react-router-dom";

const Landing = () => {
  const [loggedIn, setloggedIn] = useState(false);

  const auth = () => {
    setloggedIn(true);
  };

  if (loggedIn) {
    return <Redirect to="/dinners" />;
  }

  return (
    <div>
      <h2>Landing page</h2>
      <Button onClick={auth}>Press Me</Button>
    </div>
  );
};

export default Landing;
