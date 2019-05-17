import React from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';

import Dashboard from './Dashboard';

class App extends React.Component {

  render() {
  return (
    <Switch>
    <Route path='/'>
    <Dashboard></Dashboard>
    </Route>
    </Switch>
  );
}
}

export default App;
