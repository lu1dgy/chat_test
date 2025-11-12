import React from "react";
import cl from "./message.module.css";

const Message = () => {
  return (
    <div className={cl.message}>
      <p className={cl.person}>name</p>
      <div className={cl.text}>
        {" "}
        asdasdsa dasd asdasd asdasdas d asdas das das das dasdas dasdasdas
      </div>
    </div>
  );
};

export default Message;
