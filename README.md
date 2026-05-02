
# 💬 WhatsApp Web Clone

A simplified full-stack WhatsApp Web clone built using **React.js, Node.js, Express.js, MongoDB, and Socket.IO**, focusing on real-time chat functionality and clean application architecture.

---

## ✨ Features

- Simple username-based login
- Multi-user support
- Two-panel WhatsApp Web-like interface
- Chat sidebar with user list
- Active chat highlighting
- Send & receive text messages
- Visual distinction between sent and received messages
- Real-time messaging using Socket.IO
- Persistent chat history (MongoDB)
- Auto-scroll to latest message
- Empty message validation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Socket.IO Client
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Socket.IO

---

## 📁 Project Structure

```txt
fullstack-interview-assignment/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── README.md
└── .gitignore
```

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account

---

## 🔐 Environment Variables

### Backend (`server/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## ☁️ MongoDB Atlas Setup

1. Create a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
2. Create a database user
3. Allow network access (`0.0.0.0/0` for development)
4. Copy the connection string
5. Add it to `server/.env` as `MONGO_URI`

**Example:**

```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/whatsapp_clone?retryWrites=true&w=majority
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd fullstack-interview-assignment
```

### 2. Run Backend

```bash
cd server
npm install
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3. Run Frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔗 API Endpoints

### 👤 User APIs

| Method | Endpoint    | Description            |
|--------|-------------|------------------------|
| POST   | `/api/users` | Create or login user  |
| GET    | `/api/users` | Fetch all users       |

### 💬 Message APIs

| Method | Endpoint                                  | Description                        |
|--------|-------------------------------------------|------------------------------------|
| POST   | `/api/messages`                           | Send a message                     |
| GET    | `/api/messages/:senderId/:receiverId`     | Fetch messages between two users   |

---

## 🧪 Testing the Application

1. Start backend and frontend servers
2. Open `http://localhost:5173`
3. Login as **Anu**
4. Open another browser / incognito window
5. Login as **Lavanya**
6. Select a user from the sidebar
7. Send messages and verify:
   - ✅ Real-time updates
   - ✅ Messages persist after refresh

---

## 📂 Folder Details

### Client

```
client/src/pages/Login.jsx
client/src/pages/Chat.jsx
client/src/components/Sidebar.jsx
client/src/components/ChatWindow.jsx
client/src/components/MessageBubble.jsx
client/src/api/axios.js
client/src/styles.css
```

### Server

```
server/src/server.js
server/src/config/db.js
server/src/models/User.js
server/src/models/Message.js
server/src/routes/userRoutes.js
server/src/routes/messageRoutes.js
```

---

## 🚀 Future Improvements

- Typing indicator
- Online/offline status
- Authentication (JWT / password)
- Group chat support
- Message read receipts
- File / image sharing

---

## 👩‍💻 Author

**Anushalakshmi S**

---

## 📁 Environment Example Files

### `server/.env.example`

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

### `client/.env.example`

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```
```
