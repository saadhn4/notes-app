# 📝 Notes App (MERN Stack)

This is a simple **Notes App** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows users to:
- Create a new note
- View all notes
- View note details
- Delete individual notes  
- Everything is styled with **Tailwind CSS**.

---

## 🚀 Features

- 📝 Create a note with a title and content
- 📜 View a list of all notes
- 🔍 View individual note details
- ❌ Delete a note
- 🌐 Fully responsive and styled using Tailwind

---

## 🧰 Tech Stack

**Frontend**
- React
- React Router
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 📁 Project Structure

```
📦 client/
 ┣ 📂components/
 ┃ ┗ Navbar.jsx
 ┣ 📂pages/
 ┃ ┣ Create.jsx
 ┃ ┣ Home.jsx
 ┃ ┣ NotesDetails.jsx
 ┃ ┗ Error404.jsx
 ┣ NoteList.jsx
 ┗ App.jsx

📦 server/
 ┣ 📂controllers/
 ┃ ┗ notes.js
 ┣ 📂models/
 ┃ ┗ Notes.js
 ┣ utils/dbConnect.js
 ┗ index.js
```

---

## ⚙️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

### 2. Setup backend

```bash
cd server
npm install
```

Create a `default.json` file in `config/` with the following:

```json
{
  "PORT": 5009,
  "MONGO_URL": "your_mongodb_connection_string"
}
```

Then run:
```bash
npm start
```

### 3. Setup frontend

```bash
cd client
npm install
npm run dev
```

Make sure to change the API URLs in the frontend (`useFetch`, `axios.post`, etc.) if your backend is hosted somewhere else.

---

## 🔗 API Endpoints

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| POST   | `/api/notes/add`        | Add a new note           |
| GET    | `/api/notes/get/:id`    | Get a note by ID         |
| GET    | `/api/notes/getall`     | Get all notes            |
| PUT    | `/api/notes/update/:id` | Update a note by ID      |
| DELETE | `/api/notes/delete/:id` | Delete a note by ID      |
| DELETE | `/api/notes/deleteall`  | Delete all notes         |

---
