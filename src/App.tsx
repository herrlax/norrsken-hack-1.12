import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './routes/Landing';
import Dinners from './routes/Dinners';
import { DataContextProvider } from './context/DataContext';

const NotFound = () => <h2>Not found</h2>;

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dinners' component={Dinners} />
          <Route exact path='/*' component={NotFound} />
        </Switch>
      </div>
    </DataContextProvider>
  );
};

export default App;
