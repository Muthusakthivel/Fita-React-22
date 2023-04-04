import React, {useState} from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/header";
import { AppContext } from "../context/app-context";

const MailPage = () => {

    let[message, setMessage] = useState();

    const incomingValue = (message) => {
        console.log(message);
        setMessage(message)
    }
    return(
        <AppContext.Provider value={{incomingValue, message}}>
            <div className="container">
            <Header/>
           <div className="main-content">
           <div className="sidebar">
            <NavLink to="/mail/inbox">Inbox Page</NavLink>
            <br></br>
            <NavLink to="/mail/sent">Sent Page</NavLink>
            <br></br>
            <NavLink to="/mail/trash">Trash Page</NavLink>
            <br></br>
            <NavLink to="/mail/account">Account Page</NavLink>
           </div>
           <div className="content">
           <Outlet></Outlet>
           </div>
           </div>
        </div>
        </AppContext.Provider>
        
    )
}
export default MailPage;