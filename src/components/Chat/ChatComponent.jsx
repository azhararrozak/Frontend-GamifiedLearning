// src/components/ChatComponent.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
//import AuthService from "../../services/auth.service";

const socket = io("http://localhost:5000");  

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message')
    };
  }, []);

  const handleSendMessage = () => {
    console.log(msg)
    console.log("Send button clicked");
    socket.emit('chat message', msg);
    setMsg('');
};

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
