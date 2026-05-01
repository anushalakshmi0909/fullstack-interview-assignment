import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ activeUser, messages, currentUser, onSendMessage }) {
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSendMessage(text.trim());
    setText("");
  };

  if (!activeUser) {
    return (
      <div className="chat-window empty-chat">
        <h2>Select a user to start chatting</h2>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>{activeUser.username}</h3>
      </div>

      <div className="messages">
        {messages.map((msg) => (
          <MessageBubble
            key={msg._id}
            message={msg}
            isOwn={msg.sender === currentUser._id}
          />
        ))}
        <div ref={bottomRef}></div>
      </div>

      <form className="message-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={!text.trim()}>
  Send
</button>
      </form>
    </div>
  );
}

export default ChatWindow;
