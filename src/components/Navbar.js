import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <nav>   
          <div className="nav-wrapper white" >
          <Link to='/login' className="brand-logo">LeMme`Social</Link>
            <li><Link to="/">Home</Link></li>,
            <li><Link to="/profile">Profile </Link></li>,
            <li><Link to="/login">Login </Link></li>,
            <li><Link to="/signup">SignUp </Link></li>,
            <li><Link to="/explore">Explore </Link></li>
          </div>
        </nav>
    );
}

export default NavBar;