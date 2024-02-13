import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import AuthService from "../../services/auth.service";
import ChatService from "../../services/chat.service";

const socket = io("http://8.219.133.22:5000");

const ChatComponent = () => {
  const [user, setUser] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    fetchChatHistory();

    return () => {
      socket.off("chat message");
    };
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await ChatService.getHistoryChat();

      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSendMessage = () => {
    socket.emit("chat message", msg, user.username);
    setMsg("");
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="bg-white rounded-md shadow-md p-4 h-[40rem] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.user === user.username ? "justify-end" : "justify-start"
            } flex`}
          >
            <div className={`${
              message.user === user.username && "bg-secondary"} border rounded-md bg-accent text-primary w-fit px-4 py-2 m-2`}>
              <p className="font-bold">{message.user}</p>
              <p>{message.msg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center py-2">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border-2 p-2 flex-grow text-secondary"
        />
        <button
          onClick={handleSendMessage}
          className="px-6 font-bold ml-2 bg-blue-500 text-primary p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
