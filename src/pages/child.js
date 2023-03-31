import React from "react";

const ChildPage = (props) => {
    console.log(props)
    const sendMessage = () => {
        let newMessage = "Im Changing new value";
        props.callback(newMessage);
    }
    return(
        <div>
        <div>This is a Child Page - {props.data}</div>
        <button onClick={() => sendMessage()}>Send Message</button>
        </div>
    )
}
export default ChildPage;