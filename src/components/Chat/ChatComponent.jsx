import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import AuthService from "../../services/auth.service";
import ChatService from "../../services/chat.service";

const socket = io("http://localhost:5000");

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
    console.log(msg);
    console.log("Send button clicked");
    socket.emit("chat message", msg, user.username);
    setMsg("");
  };

  return (
    <div className="flex flex-col justify-between text-fontPrimary">
      <div className="border p-4 h-[40rem] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.user === user.username ? "justify-start" : "justify-end"
            } flex`}
          >
            <div className="border rounded-md bg-primary w-fit px-4 py-2 m-2">
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
          className="border-2 p-2 flex-grow text-primary"
        />
        <button
          onClick={handleSendMessage}
          className="px-6 font-bold ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
