import React from 'react';
import Button from './components/Button';
import ProviderList from './components/ProviderList';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h2>Landing page</h2>
      <Button>Press Me</Button>
      <ProviderList />
      <Link to='/dinners'>Next Step</Link>
    </div>
  );
};

export default Landing;
