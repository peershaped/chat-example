import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>  
      <ProtectedRoutes />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
