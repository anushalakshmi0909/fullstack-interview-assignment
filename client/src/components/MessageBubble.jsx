function MessageBubble({ message, isOwn }) {
  return (
    <div className={`message-row ${isOwn ? "own" : "other"}`}>
      <div className="message-bubble">
        <p>{message.text}</p>
        <span>
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </span>
      </div>
    </div>
  );
}

export default MessageBubble;