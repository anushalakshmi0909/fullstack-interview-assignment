import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import API from "../api/axios";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

const socket = io(import.meta.env.VITE_SOCKET_URL);

function Chat() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("join", currentUser._id);
    fetchUsers();
  }, []);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      if (
        activeUser &&
        message.sender === activeUser._id
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [activeUser]);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data.filter((u) => u._id !== currentUser._id));
  };

  const fetchMessages = async (selectedUser) => {
    setActiveUser(selectedUser);
    const res = await API.get(`/messages/${currentUser._id}/${selectedUser._id}`);
    setMessages(res.data);
  };

  const sendMessage = async (text) => {
    const res = await API.post("/messages", {
      sender: currentUser._id,
      receiver: activeUser._id,
      text
    });

    setMessages((prev) => [...prev, res.data]);
    socket.emit("sendMessage", res.data);
  };

  return (
    <div className="chat-layout">
      <Sidebar
        users={users}
        activeUser={activeUser}
        onSelectUser={fetchMessages}
        currentUser={currentUser}
      />
      <ChatWindow
        activeUser={activeUser}
        messages={messages}
        currentUser={currentUser}
        onSendMessage={sendMessage}
      />
    </div>
  );
}

export default Chat;