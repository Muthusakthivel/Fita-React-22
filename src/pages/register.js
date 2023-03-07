import React from "react";

const RegisterPage = () => {
    return(
        <div>
            <h2>Register Page</h2>
            <div className="space">
                <label className="register-label">Enter Your Name :</label>
                <input type="text" placeholder="Enter your name" className="register-input"/>
            </div>
            <div className="space">
                <label className="register-label">Enter Your Email :</label>
                <input type="email" placeholder="Enter your email id" className="register-input"/>
            </div>
            <div className="space">
                <label className="register-label">Enter Your Password :</label>
                <input type="password" placeholder="Enter your Password" className="register-input"/>
            </div>
            <div className="space">
                <label className="register-label">Select Your DOB :</label>
                <input type="date" className="register-input"/>
            </div>
            <div className="space">
                <label className="register-label">Select Your Gender :</label>
                <input type="radio"  className="register-selection" name="gender"/>Male
                <input type="radio"  className="register-selection" name="gender"/>Female
                <input type="radio"  className="register-selection" name="gender"/>Others
            </div>
            <div className="space">
                <label className='register-label'>Select Your Hobbies:</label>
                <input type="checkbox" name="hobbies"/> Cricket
                <input type="checkbox" name="hobbies"/> Football
                <input type="checkbox" name="hobbies"/> Badminton
                <input type="checkbox" name="hobbies"/> Volleyball
                <input type="checkbox" name="hobbies"/> Boxing
            </div>
            <div className="space">
                <label className='register-label'>Enter Your Address:</label>
                <textarea placeholder="Enter Your Address" className="register-input"/>
            </div>
            <div className="space">
                <label className='register-label'>Select Your Qualification :</label>
                <select className="register-input" defaultValue={""}>
                    <option disabled value="">Please Select Your Qualification</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Masters Degree</option>
                </select>
            </div>
            <div className="space">
                <button>Create Your Account</button>
            </div>
        </div>
    )
}
export default RegisterPage;