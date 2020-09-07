import '../../styles/Login.css';
import twitterLogo from '../../twitter.svg';
import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
const Login = () => {
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        //regex for email validation

        fetch("http://localhost:5000/auth/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.error) {
               console.log(data.error)
            } else {
                console.log("login successful")
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type: "USER", payload: data.user})
                history.push('/')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="logo"/>
            <form action="none">
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => postData()}> Login </button>
                </form>
            <Link to="/signup">Don't have Account?</Link>
        </div>
    )
}

export default Login;