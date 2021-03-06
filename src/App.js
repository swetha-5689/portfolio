import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import { MemoryRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from './Intro';

function App() {
  return (
    <MemoryRouter>
      <Router>
        <Switch>
          <Route exact path="/" component={Intro}></Route>
        </Switch>
      </Router>
    </MemoryRouter>
  );
}

export default App;
