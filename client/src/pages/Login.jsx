import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim()) return alert("Enter username");

    const res = await API.post("/users", { username });

    localStorage.setItem("user", JSON.stringify(res.data));

    navigate("/chat");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>WhatsApp Web Clone</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Start Chatting</button>
      </form>
    </div>
  );
}

export default Login;
