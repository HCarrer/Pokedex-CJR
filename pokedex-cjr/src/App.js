import './App.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import Navbar from './Components/Navbar/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
//import Favourites from './Components/Favourites/Favourites';
import UserContext from './Components/Context/Context';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
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
{/*             <Route path="/favourites">
              <Favourites/>
            </Route> */}
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;