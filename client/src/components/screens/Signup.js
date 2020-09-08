import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import twitterLogo from '../../twitter.svg';
import '../../styles/Login.css';
const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        //regex for email validation

        fetch('/auth/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        .then(res => res.json())
        .then(data => {
            //check for error show toast
            console.log('signup successful')
            history.push('/signin')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="logo"/>
            <form action="none">
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => postData()} > SignUp </button>
            </form>
            <Link to="/login">Already have Account?</Link>
        </div>
    );
}

export default Signup;