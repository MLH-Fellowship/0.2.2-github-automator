import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import Sheet from "./components/Sheet"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Sheet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
