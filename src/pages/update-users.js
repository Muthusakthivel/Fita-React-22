import React, {useState} from "react";
import axios from "axios";

const UpdateUser = () => {

    let [account, setAccount] = useState({
       name : "",
       job : "" 
    });
    const updateAccount = () => {
       console.log(account);
       const url = "https://reqres.in/api/users/2";

       axios.put(url, account)
       .then((response) => {
        let serverData = response.data;
        console.log(serverData);
        alert("User Profile updated successfully")
       })
       .catch((error) => {
        console.log(error);
       })
    }
    const handleInput = (event) => {
        setAccount({...account, [event.target.id] : event.target.value});
    }
    return(
        <div>
            <h1>Update Your User Information</h1>
            <div className='space'>
            <label className='label'>Enter Your Name</label>
            <input type="text" placeholder='Please enter your name' id="name" onChange={handleInput} />
        </div>
        <div className='space'>
            <label className='label'>Enter Your Job</label>
            <input  placeholder='Please enter your job' type="text" id="job" onChange={handleInput}/>
        </div>
        <div className='space'>
            <button onClick={() => updateAccount()}>Update User</button>
        </div>
        </div>
    )
}
export default UpdateUser;