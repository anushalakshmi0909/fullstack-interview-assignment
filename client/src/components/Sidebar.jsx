function Sidebar({ users, activeUser, onSelectUser, currentUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>{currentUser.username}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {users.map((user) => (
        <div
          key={user._id}
          className={`user-item ${activeUser?._id === user._id ? "active" : ""}`}
          onClick={() => onSelectUser(user)}
        >
          <div className="avatar">{user.username[0].toUpperCase()}</div>
          <span>{user.username}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;