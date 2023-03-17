import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountCreatePage = () => {

    const navigate = useNavigate();

    let [account, setAccount] = useState({
        email: '',
        password: ''
    })
    const createAccount = () => {
        console.log(account);
        const api_url = 'https://reqres.in/api/register';
        axios.post(api_url, account)
        .then((response) => {
            let serverData = response.data;
            console.log(serverData);
            let result = {
                account_data : account,
                server_data: serverData
            }
            navigate("/about-us", {state : result})
        }) 
        .catch((error) => {
            alert(error.message);
        })
    }
    const handleInput = (event) => {
        // console.log(event.target.value);
        setAccount({...account, [event.target.id] : event.target.value})
    }
    return(
        <div>
        <div className="space">
            <label className="label">Enter Your Email ID</label>
            <input type='email' placeholder='Enter your email'  id="email" onChange={handleInput}/>
        </div>
        <div className="space">
            <label className="label">Enter Your Password</label>
            <input type='password'  placeholder='Enter your Password' id="password" onChange={handleInput}/>
        
        </div>
        <div className="space">
            <button onClick={() => createAccount()}>Creat Your Account</button>
        </div>
        </div>
    )
}
export default AccountCreatePage;