import './App.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import Navbar from './Components/Navbar/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContext from './Components/Context/UserContext';
import UserPage from './Components/UserPage/UserPage';
import PageContext from './Components/Context/PageContext';
import isLogged from './Components/Context/isLoggedContext';
import IsLoggedContext from './Components/Context/isLoggedContext';

function App() {

  const [user, setUser] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLogged, setIsLogged] = useState(false)
  
  const logged = localStorage.getItem("user")
  console.log(logged)

  if(logged) {
    console.log("logado")
  } else {
    console.log("deslogado")
  }

  let userName

  if(user !== null) {
    userName = user.user.username
  }

  return (
    <div>
      <IsLoggedContext.Provider value={{isLogged, setIsLogged}}>
        <UserContext.Provider value={{user, setUser}}>
          <PageContext.Provider value ={{pageNumber, setPageNumber}}>
            <Router>
            <Navbar/>
              <Switch>
                <Route exact path="/">
                  <PokemonPage/>
                </Route>
                <Route path={`/${userName}`}>
                  <UserPage/>
                </Route>
              </Switch>
            </Router>
          </PageContext.Provider>
        </UserContext.Provider>
      </IsLoggedContext.Provider>
    </div>
  );
}

export default App;