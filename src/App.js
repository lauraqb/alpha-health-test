import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Thought from './components/Thought'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/thought/:id" component={Thought} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
