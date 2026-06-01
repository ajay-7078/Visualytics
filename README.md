# InsightLens

## A Data Visualization app built with MERN Stack.

# 📊 Visualytics – Smart Data Analytics Dashboard

Visualytics is a Full Stack MERN-based analytics dashboard platform designed to manage, visualize, and analyze data efficiently through interactive dashboards and secure authentication systems.

🌐 Live Demo:  
https://visualytics-frontend.vercel.app/login


🌐 Live Demo:  
https://visualytics-backend.vercel.app/


---

# 🚀 Project Overview

Visualytics helps users monitor and manage analytics data through a modern dashboard interface.  
The project includes authentication, profile management, charts, API integration, responsive UI, and backend database management.

The platform is built for:
- College Projects
- Analytics Dashboard Systems
- Admin Panels
- Business Reporting Systems
- Data Monitoring Platforms

---

# ✨ Key Features

## 🔐 Authentication System
- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Session Management

---

## 📈 Dashboard Features
- Analytics Dashboard
- Real-Time Data Display
- Dynamic UI Components
- Responsive Layout
- Statistics Cards
- Graph & Chart Sections

---

## 👤 User Management
- Profile Upload
- User Data Management
- Account Access Control
- Authentication Middleware

---

## ☁️ Cloud Integration
- Cloudinary Image Upload
- MongoDB Atlas Database
- API-based Communication

---

## 📱 Responsive Design
- Mobile Friendly
- Tablet Responsive
- Desktop Optimized
- Modern UI/UX

---

# 🛠️ Technology Stack

## Frontend Technologies
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---

## Backend Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

## Deployment Platforms
- Frontend → Vercel
- Backend → Render / Railway
- Database → MongoDB Atlas

---

# 📂 Complete Project Structure

```bash
Visualytics/
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   └── package.json
│
├── backend/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚙️ Local Development Setup

# 1️⃣ Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into project folder:

```bash
cd Visualytics
```

---

# 🔧 Backend Installation

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

# 🔑 Backend Environment Variables

Create `.env` file inside backend folder.

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

# ▶️ Run Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:4000
```

Expected Output:

```bash
Database Connection Successful!!
Server is listening at port 4000
```

---

# 💻 Frontend Installation

Open new terminal.

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# 🌐 Frontend Environment Variables

Create `.env` file inside frontend folder.

```env
VITE_API_URL=http://localhost:4000
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 Important API Routes

## Authentication APIs

### Login User

```http
POST /api/users/login
```

### Register User

```http
POST /api/users/register
```

---

## User APIs

### Upload Profile

```http
POST /api/users/upload-profile
```

### Get User Data

```http
GET /api/users/profile
```

---

# 🔒 Security Features

- Password Hashing using bcrypt.js
- JWT Token Authentication
- Protected Backend Routes
- Environment Variable Security
- Secure API Requests

---

# 📊 Future Improvements

- AI Analytics Integration
- Dark Mode
- Export Reports (PDF/Excel)
- Advanced Charts
- Role-Based Access
- Admin Analytics Panel
- Notifications System
- Live API Monitoring

---

# 🐛 Common Errors & Solutions

## ❌ Error: undefined/api/users/login

### Cause:
Missing frontend environment variable.

### Solution:

```env
VITE_API_URL=http://localhost:4000
```

Restart frontend server.

---

## ❌ MongoDB Connection Error

### Check:
- Database password
- Network access
- MongoDB URI
- Internet connection

---

## ❌ 405 Method Not Allowed

### Cause:
Incorrect request method.

### Solution:
Check backend routes:

```js
router.post("/login")
```

---

## ❌ Port Already in Use

### Solution:
Change backend port:

```env
PORT=5000
```

---

# 🌍 Deployment Guide

## Frontend Deployment

Deploy frontend on:
- Vercel
- Netlify

Build command:

```bash
npm run build
```

---

## Backend Deployment

Deploy backend on:
- Render
- Railway
- Cyclic

---

# 📌 Useful Commands

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

---

## Start Backend

```bash
npm run dev
```

---

## Build Frontend

```bash
npm run build
```

---

## Git Commands

```bash
git add .
git commit -m "Updated Project"
git push origin main
```

---

# 👨‍💻 Developer

Ajay Kumar

---



---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---