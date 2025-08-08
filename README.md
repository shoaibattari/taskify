# Taskify – Modern Task Management Web App

**Organize your day, one task at a time.**

Taskify is a modern task management web application that enables users to create, edit, delete, and manage their personal tasks with optional image uploads. Featuring a secure backend powered by **Node.js**, **Express**, and **MongoDB**, and a dynamic frontend built with **React** and **React Query**, Taskify delivers a clean, intuitive, and responsive interface for everyday task tracking.

---

## 🚀 Features

- **Task CRUD** – Create, read, update, and delete tasks
- **Image Upload** – Attach optional images to tasks
- **Secure Backend** – Authentication and protected routes
- **Responsive UI** – Works seamlessly on desktop and mobile
- **Alias Imports** – Cleaner and shorter import paths
- **Fast Data Fetching** – Powered by React Query
- **Scalable Structure** – Modular folder and layout system

---

## 🛠 Tech Stack

**Frontend**
- React.js
- React Router
- React Query
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB & Mongoose

**Utilities**
- Cloudinary (Image storage)
- Context API (State management)
- Path Aliases (Clean imports)

---

## 📂 Folder Structure



src
│── assets/ # Images, icons, static files
│── components/ # Reusable UI components
│── config/ # API, routes, and other configs
│── constants/ # Constant values
│── context/ # Context API providers
│── hooks/ # Custom React hooks
│── layout/ # Application layouts
│── utils/ # Helper functions
│── views/ # Screens & pages
│── App.jsx
│── main.jsx




**Path Aliases:**
```js
alias: {
  "@": "./src",
  "@/views": "./src/views",
  "@/api": "./src/config/api",
  "@/routes": "./src/config/routes",
  "@/components": "./src/components",
  "@/constants": "./src/constants",
  "@/context": "./src/context",
  "@/assets": "./src/assets",
  "@/layout": "./src/layout",
  "@/hooks": "./src/hooks",
  "@/utils": "./src/utils",
  "@/config": "./src/config",
}

git clone https://github.com/your-username/taskify.git
cd taskify

npm install

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev

📌 Roadmap
 - User authentication (JWT)

 - Task categories & priorities

 - Due dates & reminders

 -  Drag-and-drop task sorting
