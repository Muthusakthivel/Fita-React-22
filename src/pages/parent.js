import React from "react";
import ChildPage from "./child";

const ParentPage = () => {
    let message = 'Hi There!';
    const incomingMessage = (message) => {
        // alert("Hy Im a Parent Component!");
        alert(message);
    }
    return(
        <div>
            <h1>Parent Page - {message}</h1>
            <ChildPage data = {message} callback={incomingMessage} />
            
        </div>

    )
}
export default ParentPage;