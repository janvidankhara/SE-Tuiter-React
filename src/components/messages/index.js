import React from "react";
import Conversation from "../conversation/conversation";
import Message from "../message/message";
import "./messages.css"
const Messages = () => {
  return(
    <div classname = "messages">
      <h1>Messages Screen</h1>
      <div className="chatMenu"></div>
          <div className= "chatMenuWrapper">
            <input placeholder= "Search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
      <div className="chatBox">box</div>
          <div className= "chatBoxWrapper">
            <div className="chatBoxTop"></div>
            <Message />
            <Message own={true}/>
            <Message />
            <div className="chatBoxBottom"></div>
          </div>

      <div className="chatOnline"></div>
      <div className= "chatOnlineWrapper">online</div>
       </div>
  );
};
export default Messages;