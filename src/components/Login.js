import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useStateValue } from '../StateProvide';
import "./Login.css"
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate()
    console.log([password])
    const [{ user }, dispatch] = useStateValue();

    const signIn = (e) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Password validation
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }
        if (email === "admin@gmail.com" && password === "Abcd@123") {
            dispatch({
                type: 'SET_USER',
                user: { email: email, password: password, token: "*^Fk%(FK_+sfdf+DsafaS_f+asfa+_#fsa_+fs#fs_+fs_(_" }
            })
            localStorage.setItem("auth-token", "*^Fk%(FK_+sfdf+DsafaS_f+asfa+_#fsa_+fs#fs_+fs_(_")
            toast.success("Successfully logged in.")
            navigate("/dashboard")
        } else {
            toast.error("Invalid Credentials")
        }

    }
    return (
        <div className='login'>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login__signInButton' type='sumbit' >Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login