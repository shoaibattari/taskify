# Taskify

A modern task management web application built with **React**, **Tailwind CSS**, and **Cloudinary** integration for image uploads.  
Designed with a custom color palette, responsive breakpoints, and smooth animations for a delightful user experience.

---

## 🚀 Features

- ✅ Create, update, delete, and organize tasks
- 📸 Upload avatars & task images (Cloudinary integration)
- 🎨 Custom Tailwind CSS theme with brand colors
- 📱 Fully responsive design (mobile-first)
- ✨ Smooth UI animations (`fade-in`, `fade-slide`)
- 🗂 Modular component structure with index exports

---

## 🛠 Tech Stack

**Frontend:** React, Tailwind CSS, React Query, React Icons  
**Backend:** Node.js, Express.js, Cloudinary, Multer  
**Database:** MongoDB (Mongoose ORM)  

---

## 📦 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/taskify.git
cd taskify

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create .env file and configure your environment variables
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_API_BASE_URL=http://localhost:5000/api

# 4️⃣ Start development server
npm run dev
```

---

## 📂 Folder Structure

```
src/
│── assets/           # Images, fonts, icons
│── components/       # Reusable UI components
│── context/          # React Context API files
│── layouts/          # Page layouts
│── pages/            # App pages
│── utils/            # Helper functions
│── App.jsx           # Main App component
│── main.jsx          # Entry point
```

---

## 🎨 Tailwind Theme

| Name           | Color Code |
|----------------|------------|
| Primary        | `#FFB86F`  |
| Secondary      | `#C78C4E`  |
| Grey           | `#333333`  |
| Light Grey     | `#BCBCBC`  |
| Red            | `#EF0000`  |
| Green          | `#45B369`  |
| Blue           | `#059AFF`  |
| Orange         | `#EF4A00`  |
| Peach          | `#F6DDC5`  |

**Breakpoints:**  
`s-phone`: 319px, `m-phone`: 374px, `phone`: 429px, `tablet`: 767px, `laptop-sm`: 900px, `laptop`: 1023px, `desktop`: 1439px, `4k`: 1920px

---

## 📸 Screenshots

_Add screenshots or GIFs here_

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
