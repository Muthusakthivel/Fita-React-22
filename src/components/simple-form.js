import React, {useState} from "react";

const SimpleForm = () => {

    const [loginForm, setLoginForm] = useState(
        {
            email : '',
            password : ''
        }
    );

    const handleInput = (event) => {
        setLoginForm({...loginForm, [event.target.name] : event.target.value});
        console.log({[event.target.name] : event.target.value});
    }
    const submitUser = () => {
        console.log(loginForm);
    }
    return(
        <div>
            <h2>Simple Form</h2>
            <div className="space">
            <label className="label">Enter Your Email ID</label>
            <input type='email' placeholder='Enter your email' name="email"  onChange={handleInput} />
        </div>
        <div className="space">
            <label className="label">Enter Your Password</label>
            <input type={"password"}  placeholder='Enter your Password' name="password" onChange={handleInput}/>
            </div>
            <div className="space">
            <button onClick={() => submitUser()}>Submit Form</button>
        </div>
        </div>
        
    )
        
}

export default SimpleForm;