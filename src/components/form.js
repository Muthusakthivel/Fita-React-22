import React from "react";
import { useState } from "react";

const Form = () => {

    const [loginForm, setLoginForm] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const handleInput = (event) => {
        setLoginForm({...loginForm, [event.target.name]: event.target.value})
    }
    const onSubmit = (event) => {
       console.log(loginForm);
    }
    return(
        <div>
            <h2> This is a Simple Form</h2>
            <h2>The Username is {loginForm.userName}</h2>
            <h2>The User Email is {loginForm.email}</h2>
            <h2>The User Password is {loginForm.password}</h2>
            <div className="space">
                <label className="label">Enter Your Name</label>
                <input type="text" placeholder="Enter your name"   onChange={handleInput} name="userName"/>
                <br></br>
            </div>
            <div className="space">
                <label className="label">Enter Your Email ID</label>
                <input type="email" placeholder="Enter your mail id" name="email" onChange={handleInput}/>
                <br></br>
            </div>
            <div className="space">
                <label className="label">Enter Your Password</label>
                <input type="password" placeholder="Enter your Password" name="password" onChange={handleInput}/>
                <br></br>
            </div>
            <div className="space">
            <button onClick={() => onSubmit()}>Submit Form</button>
            </div>
        </div>
    )
}
export default Form;