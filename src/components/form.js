import React from "react";
import { useState } from "react";

const Form = () => {

    const [userName, setUserName] = useState();

    const handleInput = (event) => {
        console.log(event.target.value);
    }
    const onSubmit = (event) => {
        setUserName(event.target.value);
    }
    return(
        <div>
            <h2> This is a Simple Form</h2>
            <div>
                <label>Enter Your Name</label>
                <input type="text" placeholder="Enter your name"  name="userName" onChange={handleInput}/>
                <br></br>
            </div>
            <div>
                <label>Enter Your Email ID</label>
                <input type="email" placeholder="Enter your mail id"/>
                <br></br>
            </div>
            <div>
                <label>Enter Your Password</label>
                <input type="password" placeholder="Enter your Password"/>
                <br></br>
            </div>
            <button onClick={() => onSubmit()}>Submit Form</button>
        </div>
    )
}
export default Form;