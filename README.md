# Task Manager

A simple MERN-based Task Manager built as part of a company selection assignment.
This project includes a **Node.js + Express + MongoDB backend** and a **React frontend**.

The goal of the app is straightforward: create, update, delete, and list tasks.

---

## 📁 Folder Structure

```
Task-Manager/
│
├── server/        → Backend (Node.js + Express + MongoDB)
└── client/        → Frontend (React)
```

---

## 🚀 How to Run the Project

Follow these steps to run both backend and frontend locally.

---

## 1️⃣ Backend Setup (server)

### Install dependencies

```
cd server
npm install
```

### Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Start backend

```
npm start
```

The backend will run on:
**[http://localhost:5000](http://localhost:5000)**

---

## 2️⃣ Frontend Setup (client)

### Install dependencies

```
cd client
npm install
```

### Start frontend

```
npm run dev
```

The frontend will run on:
**[http://localhost:5173](http://localhost:5173)** (default Vite port)

---


## ✔️ Features

* Add tasks
* Edit tasks
* Delete tasks
* Mark tasks complete
* Clean and simple UI

---

## 📝 Notes

* This project is intentionally kept simple and clean.
* Focus is on functionality and code readability.

---

If anything breaks or you want improvements, feel free to update
