# 📘 StudSched — Smart Study Scheduler

StudSched is a full-stack web application designed to help students plan, track, and organize their study sessions with ease. It uses the MERN stack: MongoDB, Express, React, and Node.js.

---

## ✅ Step 1: Features

- 🗓️ Create personalized study sessions
- 📆 View all sessions in a structured list
- 💾 Persist data via MongoDB (local or remote)
- 🎯 Designed with clean reusable components and styling
- 🔄 Future-ready with CRUD support and deployable backend

---

## ✅ Step 2: Tech Stack

| Technology | Purpose              |
|------------|----------------------|
| React.js   | Frontend UI          |
| Express.js | API/Backend server   |
| Node.js    | Runtime environment  |
| MongoDB    | NoSQL database       |
| CSS        | Styling + layouts    |

---

## ✅ Step 3: Folder Structure

```
studsched/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── Page.css
│   │   └── App.js
└── README.md
```

---

## ✅ Step 4: Clone the Repository

```bash
git clone https://github.com/your-username/studsched.git
cd studsched
```

---

## ✅ Step 5: Install Dependencies

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

---

## ✅ Step 6: Start MongoDB Locally

```bash
# Launch local MongoDB with a custom data path
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath="C:\Users\Dell\mongo-data"
```

> Make sure the folder `C:\Users\Dell\mongo-data` exists. Create it manually if needed.

---

## ✅ Step 7: Set Environment Variables

```env
# backend/.env
MONGO_URI=mongodb://127.0.0.1:27017/studsched
```

---

## ✅ Step 8: Start the Application

```bash
# In backend terminal
cd backend
node server.js

# In frontend terminal
cd ../frontend
npm start
```

- Backend runs at: `http://localhost:5000`
- Frontend runs at: `http://localhost:3000`

---

## ✅ Step 9: Screenshots

> 

```markdown
https://github.com/WarriorLight27/StudSched/Screenshots/home.png

```

---

## ✅ Step 10: Deployment Plan (Coming Soon)

- **Frontend** → Netlify or Vercel  
- **Backend** → Render, Railway, or Glitch  
- **Database** → MongoDB Atlas (for remote access)

---


##  License

This project is licensed under the [MIT License](LICENSE).

---
