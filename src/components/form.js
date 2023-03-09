import React, {useState} from "react";

// ES6

const Form = () => {

    // let [variableName, functionName] = useState(initialValue);

    let [userName, setUserName] = useState("");
    let [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });
    let [inlineCondition, setInlineCondition] = useState(false);
    let [ifElseCondition, setIfElseCondition] = useState(false);
    let [passwordVisibility, setPasswordVisibility] = useState(false);

    let message = "Hi there! Good Morning"
    // let userName;

    const onSubmitForm = () => {
        console.log(loginForm);
    };
    const handleRendering = (condition) => {
        setInlineCondition(condition)
        console.log(condition);
    }
    const handleIfElseRendering = () => {
         let condition = !ifElseCondition;
        //  alert(condition);
        setIfElseCondition(condition);
    }   
    
    const handlePasswordVisibility = (condition) => {
        setPasswordVisibility(condition);
    }
    const onHandleInput = (event) => {
        // setUserName(event.target.value);
        // console.log(userName);
        // userName = event.target.value;
        // console.log(event);
        // console.log(event.target.value);
        // console.log(userName);
        // console.log(event.target.value, event.target.id);
        setLoginForm({...loginForm, [event.target.id] : event.target.value});
    };
    return(
     <div>
        {/* <h1>This is a simple Form</h1> */}
        <h1>{message}</h1>
        <h2>The UserName is {userName}</h2>
        <h1>Login Info <h2>{loginForm.username}</h2><h2>{loginForm.password}</h2></h1>
        <div className="space">
            <label className="label">Enter Your Email ID</label>
            <input type='email' placeholder='Enter your email' name="email" id="username"  onChange={onHandleInput} />
        </div>
        <div className="space">
            <label className="label">Enter Your Password</label>
            <input type={passwordVisibility ? "text" : "password"}  placeholder='Enter your Password' onChange={onHandleInput} id="password"/>
            {
                passwordVisibility ? <img src={require('../images/open-eye.png')} alt="open-eye" className="password-icon" onClick={() => handlePasswordVisibility(false)} />
                :
                <img src={require('../images/close-eye.png')} alt="close-eye" className="password-icon"  onClick={() => handlePasswordVisibility(true)}/>
            }
            
            
        </div>
        <div className="space">
            <button onClick={ () => onSubmitForm()}>Submit Form</button>
        </div>
        <div>
            <h2>Conditional Rendering</h2>          
            <button onClick={() => handleRendering(true)}>Show Message</button>
            <button onClick={() => handleRendering(false)}>Hide Message</button>

            {/* {false && <div>
                <h1>This is a Inline IF condition</h1>
                <h1>It will show & hide based on a Condition</h1>
                </div>
            }  */}
            {inlineCondition && <div>
                <h1>This is a Inline IF condition</h1>
                <h1>It will show & hide based on a Condition</h1>
                </div>
            } 
            <div>
                <h1>Inline IF-Else Condition</h1>
                <button onClick={() => handleIfElseRendering()}>Switch ON/OFF </button>
                {ifElseCondition ? <img src='https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?w=2000' alt="" style={{"width" : "100px"}}/> 
                :
                <img src='https://thumbs.dreamstime.com/b/light-bulb-11371329.jpg' alt="" style={{"width" : "100px"}}/> }
                
                
            </div>
        </div>
     </div>
    )
}
export default Form;

// ES5
// function SimpleFormSubmition (){
//     return(
//         <div></div>
//     )
// }
