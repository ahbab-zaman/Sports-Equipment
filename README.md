# Sports Gear

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://simple-firebase-2cb6e.firebaseapp.com/)

## 📌 Introduction

**Sports Gear** is a fully responsive and user-friendly e-commerce platform that offers a wide range of sports equipment and gear. Users can explore various sports products, purchase based on recommendations, and interact with other users' queries and feedback.

---

## 📖 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Project Configuration](#-project-configuration)
- [Installation](#-installation)
- [Dependencies](#-dependencies)
- [Dev Dependencies](#-dev-dependencies)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Live Demo

🔗 **[Visit Sports Gear](https://simple-firebase-2cb6e.firebaseapp.com/)**

---

## ✨ Features

- 🌙 **Dark and Light Mode Toggle** – Toggle between dark and light modes for user preference.
- 💲 **Sort by Price** – Users can sort products by price on the equipment page.
- ➕ **Add Equipment to Database** – Admin functionality to add new sports equipment to the database.
- 🔑 **User Login** – Secure user login functionality with Firebase authentication.
- 📝 **User Registration** – Allow new users to register and access the platform.

---

## 🔧 Project Configuration

## 🛠️ Dependencies:

"dependencies": {
"@emotion/react": "^11.13.5",
"aos": "^3.0.0-beta.6",
"axios": "^1.7.9",
"firebase": "^11.0.2",
"localforage": "^1.10.0",
"lottie-react": "^2.4.0",
"match-sorter": "^8.0.0",
"react": "^18.2.0",
"react-awesome-slider": "^4.1.0",
"react-dom": "^18.2.0",
"react-hot-toast": "^2.4.1",
"react-icons": "^5.4.0",
"react-lazy-load": "^4.0.1",
"react-router-dom": "^7.0.2",
"react-slick": "^0.30.2",
"react-tooltip": "^5.28.0",
"slick-carousel": "^1.8.1",
"sort-by": "^1.2.0",
"sweetalert2": "^11.14.5",
"swiper": "^11.1.15"
}

## 🛠️ Dev Dependencies

"devDependencies": {
"@eslint/js": "^9.15.0",
"@types/react": "^18.3.12",
"@types/react-dom": "^18.3.1",
"@vitejs/plugin-react": "^4.3.4",
"autoprefixer": "^10.4.20",
"daisyui": "^4.12.14",
"eslint": "^9.15.0",
"eslint-plugin-react": "^7.37.2",
"eslint-plugin-react-hooks": "^5.0.0",
"eslint-plugin-react-refresh": "^0.4.14",
"globals": "^15.12.0",
"postcss": "^8.4.49",
"tailwindcss": "^3.4.15",
"vite": "^6.0.1"
}

## ⚙️ Installation

git clone https://github.com/your-username/sports-gear.git
cd sports-gear
npm install
npm run dev

## 🤝 Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

### Environment Variables:

To set up the environment for the application, use the following variables in your `.env` file:

```bash
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID

```
