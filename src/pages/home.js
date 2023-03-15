import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h1>This is a Home Page</h1>
            <NavLink to='/contact'>Go to Contact Page</NavLink>
            <br></br>
            <NavLink to='/about'>Go to About-us Page</NavLink>
            <br/>
            <NavLink to='/mail'>Go to Mail Page</NavLink>
            <br/>
            <NavLink to='/register'>Go to Register Page</NavLink>
            <br/>
            <NavLink to='/user'>To view list of all users</NavLink>
            
        </div>
    )
}
export default HomePage;