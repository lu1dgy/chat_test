import React from "react";
import cl from "./message.module.css";

const Message = ({ username, message }) => {
  return (
    <div className={cl.message}>
      <p className={cl.person}>{username}</p>
      <div className={cl.text}>{message}</div>
    </div>
  );
};

export default Message;
