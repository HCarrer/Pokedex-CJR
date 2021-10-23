import './App.css';
import PokemonPage from './Components/PokemonPage/PokemonPage';
import Navbar from './Components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContext from './Components/Context/UserContext';
import UserPage from './Components/UserPage/UserPage';
import PageContext from './Components/Context/PageContext';
import axios from 'axios'

function useUser(){

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = localStorage.getItem("pokedex@user")
    const loggedUserParsed = JSON.parse(loggedUser)

    if(loggedUserParsed !== null) {
      console.log("logado")
      axios.get(`https://pokedex20201.herokuapp.com/users/${loggedUserParsed.user.username}`)
              .then((resp)=>{
                console.log(resp)
                  setUser(resp.data)
              })
              .catch((err)=>{
              })
    }
  }, [])

  return [user, setUser]
}

function App() {

  const [user, setUser] = useUser()
  const [pageNumber, setPageNumber] = useState(1)

  let userName

  if(user !== null) {
    userName = user.user.username
  }

  return (
    <div>
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
    </div>
  );
}

export default App;