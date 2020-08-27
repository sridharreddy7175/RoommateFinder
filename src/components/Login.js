import React, { useState,useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailerror, setEmailerror] = useState('')
    const [passworderror, setPassworderror] = useState('');
    const [loggedInstatus,setLoggedInstatus]=useState(false)


    const onChangeemail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const vaildate = () => {
        let emailerror = '';
        let passworderror = '';
        if (!email) {
            emailerror = 'Email cannot Be Empty'
        }
        if (!password) {
            passworderror = 'Password cannot Be Empty'
        }
        if (emailerror || passworderror) {
            setEmailerror(emailerror)
            setPassworderror(passworderror)
            return false;
        }
        return true;
    }
    const LoginButton = (e) => {
        e.preventDefault()
        const isValid = vaildate();
        if(email === " " && password===""){
            alert('abc')
        }
       
        var body={email:email,
        password:password}
        axios.post('http://localhost:5000/api/users/login', body)
        .then(res => {console.log(res)
            localStorage.setItem("userId", res.data._id)
            window.location.href='/addnewrequest'
        })
        .catch(err => console.log(err))
    }
     

    return (
        <div>
            <div>
                <div className="container mt-3 login">
                    <form>
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <div>
                            <label htmlFor="inputEmail" className="mt-2">Email</label>
                            <input type="text" name="email" className="form-control w-50" style={{ margin: "auto" }}
                                placeholder="Email address" value={email} onChange={onChangeemail}
                            />
                        </div>
                        <div style={{ color: "red", fontSize: 15,outlineColor:"red" }}>{emailerror}</div>
                        <div>
                            <label htmlFor="inputPassword" className="mt-2">Password</label>
                            <input type="password" name="password" className="form-control w-50" style={{ margin: "auto" }}
                                placeholder="Password"
                                style={{ margin: "auto" }} value={password} onChange={onChangePassword} />
                        </div>
                        <div style={{ color: "red", fontSize: 15,outlineColor:"red" }}>{passworderror}</div>
                        <div className="checkbox mt-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
            </label>
                        </div>
                        <button className="btn btn-lg btn-danger btn-block w-50" onClick={LoginButton}
                            style={{ margin: "auto" }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;