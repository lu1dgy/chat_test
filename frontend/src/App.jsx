import React from "react";
import "./App.css";
import Message from "./components/message/message.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="chat">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="controls">
        <input className="button" type="text" placeholder="type a message" />
        <button>send</button>
      </div>
    </div>
  );
}
export default App;
