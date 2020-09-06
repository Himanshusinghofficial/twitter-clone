import React, {useEffect, createContext, useReducer, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import NavBar from './components/Navbar';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/Login';
import SignUp from './components/screens/Signup';
import Home from './components/screens/Home';
import Explore from './components/screens/Explore'
// import CreatePost from './components/screens/CreatePost';
// import {reducer, initialState} from './reducers/userReducer'

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/explore" exact component={Explore} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      {/* <Route path="/createpost" exact component={CreatePost} /> */}
    </Router>
  );
}

export default App;