import React, {useState} from "react";

const RegisterPage = () => {
    let [registerForm, setRegisterForm] = useState({
        userName: "",
        emailId: "",
        password: "",
        dateOfBirth: "",
        gender: "",
        hobbies: [],
        addresses: "",
        qualification: "",
    })
    const submitRegister = () => {
        console.log(registerForm);
    }
    const handleFormInput = (event) => {
        if(event.target.name === 'hobbies'){
            if(event.target.checked){
                registerForm.hobbies.push(event.target.value)               
            }
            else{
                const index = registerForm.hobbies.indexOf(event.target.value);
                registerForm.hobbies.splice(index,1);
            }
            setRegisterForm({...registerForm, hobbies: registerForm.hobbies})
        }else{
            setRegisterForm({...registerForm,[event.target.name] : event.target.value})
        }
       
    }
    return(
        <div>
            <h2>Register Page</h2>
            <div className="space">
                <label className="register-label">Enter Your Name :</label>
                <input type="text" placeholder="Enter your name" className="register-input" onChange={handleFormInput} name="userName"/>
            </div>
            <div className="space">
                <label className="register-label">Enter Your Email :</label>
                <input type="email" placeholder="Enter your email id" className="register-input" onChange={handleFormInput} name="emailId"/>
            </div>
            <div className="space">
                <label className="register-label">Enter Your Password :</label>
                <input type="password" placeholder="Enter your Password" className="register-input" onChange={handleFormInput} name="password"/>
            </div>
            <div className="space">
                <label className="register-label">Select Your DOB :</label>
                <input type="date" className="register-input" onChange={handleFormInput} name="dateOfBirth"/>
            </div>
            <div className="space">
                <label className="register-label">Select Your Gender :</label>
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Male" />Male
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Female"/>Female
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Others"/>Others
            </div>
            <div className="space">
                <label className='register-label'>Select Your Hobbies:</label>
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Cricket"/> Cricket
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Football"/> Football
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Badminton"/> Badminton
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Volleyball"/> Volleyball
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Boxing"/> Boxing
            </div>
            <div className="space">
                <label className='register-label'>Enter Your Address:</label>
                <textarea placeholder="Enter Your Address" className="register-input" onChange={handleFormInput} name="address"/>
            </div>
            <div className="space">
                <label className='register-label'>Select Your Qualification :</label>
                <select className="register-input" defaultValue={""} onChange={handleFormInput} name="qualification">
                    <option disabled value="">Please Select Your Qualification</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Masters Degree</option>
                </select>
            </div>
            <div className="space">
                <button onClick={() => submitRegister()}>Create Your Account</button>
            </div>
        </div>
    )
}
export default RegisterPage;