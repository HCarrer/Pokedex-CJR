import './App.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
import Favourites from './Components/Favourites/Favourites';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <PokemonPage/>
          </Route>
          <Route path='/:pageNumber'>
            <PokemonPage/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="/favourites">
            <Favourites/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;