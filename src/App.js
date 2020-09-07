import React, {useEffect, createContext, useReducer, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import SignUp from './components/screens/Signup';
import Home from './components/screens/Home';
import Explore from './components/screens/Explore'
// import CreatePost from './components/screens/CreatePost';
import {reducer, initialState} from './reducers/userReducer'
export const userContext = createContext()
const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(userContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user) {
      dispatch({type: "USER", payload: user})
    } else {
      history.push('/login')
    }
  },[])

  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/explore" exact component={Explore} />
      {/* <Route path="/createpost" exact component={CreatePost} /> */}
    </>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{state, dispatch}}>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </userContext.Provider>
  );
}

export default App;