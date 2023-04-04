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
    let[formError, setFormError] = useState({
        userName: false,
        emailId: false,
        password: false,
        dateOfBirth: false,
        gender: false,
        hobbies: false,
        addresses: false,
        qualification: false,
    })
    let [accountList, setAccountList] = useState([]);
    const submitRegister = () => {
        console.log(registerForm);
        setFormError({
            userName: registerForm.userName === "" ? true : false,
            emailId: registerForm.emailId === "" ? true : false,
            password: registerForm.password === "" ? true : false,
            dateOfBirth: registerForm.dateOfBirth === "" ? true : false,
            gender: registerForm.gender === "" ? true : false,
            hobbies: registerForm.hobbies === "" ? true : false,
            addresses: registerForm.addresses === "" ? true : false,
            qualification: registerForm.qualification === "" ? true : false
        })
        setAccountList([...accountList, registerForm]);
    }
    const handleFormInput = (event) => {
        console.log(event.target.checked)
        console.log(registerForm.hobbies.indexOf(event.target.value))
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
                <input type="text" placeholder="Enter your name" className={formError.userName ? "register-input input-error" : "register-input" } onChange={handleFormInput} name="userName"/>
                {formError.userName && <p className="error">Please enter a valid user name</p>}
            </div>
            <div className="space">
                <label className="register-label">Enter Your Email :</label>
                <input type="email" placeholder="Enter your email id" className={formError.emailId ? "register-input input-error" : "register-input" } onChange={handleFormInput} name="emailId"/>
                {formError.emailId && <p className="error">Please enter a valid email</p>}
            </div>
            <div className="space">
                <label className="register-label">Enter Your Password :</label>
                <input type="password" placeholder="Enter your Password" className={formError.password ? "register-input input-error" : "register-input" } onChange={handleFormInput} name="password"/>
                {formError.password && <p className="error">Please enter a valid password</p>}
            </div>
            <div className="space">
                <label className="register-label">Select Your DOB :</label>
                <input type="date" className={formError.dateOfBirth ? "register-input input-error" : "register-input" } onChange={handleFormInput} name="dateOfBirth"/>
                {formError.dateOfBirth && <p className="error">Please select your date of birth</p>}
            </div>
            <div className="space">
                <label className="register-label">Select Your Gender :</label>
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Male" />Male
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Female"/>Female
                <input type="radio"  className="register-selection" name="gender" onChange={handleFormInput} value="Others"/>Others
                {formError.gender && <p className="error">Please select your gender</p>}
            </div>
            <div className="space">
                <label className='register-label'>Select Your Hobbies:</label>
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Cricket"/> Cricket
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Football"/> Football
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Badminton"/> Badminton
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Volleyball"/> Volleyball
                <input type="checkbox" name="hobbies" onChange={handleFormInput} value="Boxing"/> Boxing
                {formError.hobbies && <p className="error">Please select your hobbies</p>}
            </div>
            <div className="space">
                <label className='register-label'>Enter Your Address:</label>
                <textarea placeholder="Enter Your Address" className="register-input" onChange={handleFormInput} name="address"/>
            </div>
            <div className="space">
                <label className='register-label'>Select Your Qualification :</label>
                <select className={formError.qualification ? "register-input input-error" : "register-input" } defaultValue={""} onChange={handleFormInput} name="qualification">
                    <option disabled value="">Please Select Your Qualification</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Masters Degree</option>
                </select>
                {formError.qualification && <p className="error">Please select anyone</p>}
            </div>
            <div className="space">
                <button onClick={() => submitRegister()}>Create Your Account</button>
            </div>
            <div style={{"height" : "600"}}>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>Address</th>
                            <th>Qualification</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accountList?.map((value, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{value.userName}</td>
                                        <td>{value.emailId}</td>
                                        <td>{value.dateOfBirth}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.hobbies}</td>
                                        <td>{value.address}</td>
                                        <td>{value.qualification}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RegisterPage;