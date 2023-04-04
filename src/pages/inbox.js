import React, {useContext} from "react";
import { AppContext } from "../context/app-context";



const InboxPage = () => {
    const context = useContext(AppContext);

    console.log(context);
    return(
        <div>
            <h1>This is Inbox Page</h1>
            <h2>{context.message} Loading the product...</h2>
        </div>
    )
}
export default InboxPage;