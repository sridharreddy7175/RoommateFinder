import React, { useState } from 'react'
import './header.css';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameerror, setNameerror] = useState('');
    const [phoneerror, setPhoneerror] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passworderror, setPassworderror] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    // const isValidPhone = (phone) => {
    //     if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
    //         return (true)
    //     }
    //     return (false)
    // }

    const validate = () => {
        let nameerror = "";
        let phoneerror = "";
        let emailerror = "";
        let passworderror = "";
        if (!name) {
            nameerror = "Name cannot be empty"
        }
        if (!phone) {
            phoneerror = "Phonenumber cannot be empty"
        }
       
        if (!email) {
            emailerror = "Email cannot be empty"
        }
        else if (!email.includes("@")) {
            emailerror = "Email pattern does not match"
        }
        if (!password) {
            passworderror = "Password cannot be empty"
        }
        // else if(!password.length<6){
        //     passworderror="Password Must be 6 Characters"
        // }
        // if (password && password.length > 0 && password.length <= 7) {
        //     passworderror = "Your Password should atleast contain a minimum of 7 characters"
        // }
        if (nameerror || phoneerror || emailerror || passworderror) {
            setNameerror(nameerror)
            setPhoneerror(phoneerror)
            setEmailerror(emailerror)
            setPassworderror(passworderror)
            return false;
        }
        return true;
    }



    const register = (e) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {

            console.log('The form was submitted with the following data');

        }
        let obj = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
        console.log(obj)
        axios.post('http://localhost:5000/api/users/register', obj)
            .then(res => console.log(res))
            .then((data) => {
                window.location.href='/login'
                console.log(data)
                alert("Thank you, You have registered successfully. We will email you confirmation shortly.")
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
                alert("Failed to register, Please try again");
            })

        setName('')
        setPhone('')
        setEmail('')
        setPassword('')

    }

    return (

        <div>
            <div className="container mt-3">
                <form>
                    <h1 className="mt-3 font-weight-normal">Register</h1>
                    <div>
                        <label htmlFor="name" className="mt-2">Name</label>
                        <input type="text" name="name" placeholder="Name" style={{ margin: "auto" }}
                            className="form-control w-50" value={name} onChange={onChangeName}
                        />
                    </div>
                    <div style={{ color: "red", fontSize: 15, outlineColor: "red" }}>{nameerror}</div>
                    <div>
                        <label htmlFor="name" className="mt-2">Phone</label>
                        <input type="text" name="phone" placeholder="Phone" className="form-control w-50"
                            style={{ margin: "auto" }} value={phone} onChange={onChangePhone}
                        />
                    </div>
                    <div style={{ color: "red", fontSize: 15 }}>{phoneerror}</div>
                    <div>
                        <label htmlFor="name" className="mt-2">Email</label>
                        <input type="email" name="email" placeholder="Email" className="form-control w-50"
                            style={{ margin: "auto" }} value={email} onChange={onChangeEmail}
                        />
                    </div>
                    <div style={{ color: "red", fontSize: 15 }}>{emailerror}</div>
                    <div>
                        <label htmlFor="name" className="mt-2">Password</label>
                        <input type="password" name="password" placeholder="Password" className="form-control w-50"
                            style={{ margin: "auto" }} value={password} onChange={onChangePassword}
                        />
                    </div>
                    <div style={{ color: "red", fontSize: 15 }}>{passworderror}</div>
                    <button className="btn btn-lg btn-success btn-block w-50 mt-4" style={{ margin: "auto" }}
                        type="submit" onClick={register}>Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register;