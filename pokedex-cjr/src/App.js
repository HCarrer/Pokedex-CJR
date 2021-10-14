import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;