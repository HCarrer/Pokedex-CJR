import './App.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <PokemonPage/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path='/:pageNumber'>
            <PokemonPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;