import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Message from "./components/message/message.jsx";

function App() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [ws, setWs] = React.useState();
  const [isConnected, setIsConnected] = React.useState(false);

  const connect = () => {
    const socket = new WebSocket(`ws://localhost:8000/ws/${name}`);
    socket.onmessage = (event) => {
      const data = event.data.split("-");
      const username = data[0];
      const msg = data[1];

      setMessages((prev) => [{ username: username, message: msg }, ...prev]);
    };
    setWs(socket);
    setIsConnected(true);
  };

  const sendMessage = () => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      console.log("WebSocket not connected yet");
      return;
    }
    ws.send(message);
    setMessage("");
  };

  if (isConnected) {
    return (
      <div className="app-container">
        <div className="chat">
          {messages.map((msg, index) => (
            <Message
              key={index}
              username={msg.username}
              message={msg.message}
            />
          ))}
        </div>
        <div className="controls">
          <input
            className="input"
            type="text"
            placeholder="type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="button" onClick={sendMessage}>
            send
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <div className="connect">
          <input
            type="text"
            className="inputName"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="button" onClick={connect}>
            connect
          </button>
        </div>
      </div>
    );
  }
}

export default App;
