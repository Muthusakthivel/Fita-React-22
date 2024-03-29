import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/app-context";

const Header = () => {

    const context = useContext(AppContext);
    console.log(context);
    const handleInput = (event) => {
        console.log(event.target.value);

        context.incomingValue(event.target.value);
    }   
    return(
        <div className="header">
            <NavLink to='/'>back</NavLink>
            <div>
                <input type="text" placeholder="Search for any products" style={{"fontSize" : "20px"}} onChange={handleInput}/>
            </div>
        </div>
    )
}
export default Header