import React from 'react';
import { BrowserRouter as Router,Link, useNavigate } from "react-router-dom";
import './Login.css';
function Login () {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/reserve');
    }
    return (
        <form className="loginForm" onSubmit={onSubmit}>
            <input placeholder="username" type="text"></input>
            <input placeholder="password" type="password"></input>
            <button to="reserve" type="submit">Sign In</button>
        </form>
    )
}
export default Login;