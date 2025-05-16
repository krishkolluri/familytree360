


# 🌳 FamilyTree360

FamilyTree360 is a full-stack microservice-based application that allows users to register, log in, and build interactive family trees with photo uploads, location tagging, and address details. This app showcases expertise in React.js, Node.js, REST APIs, JWT authentication, microservices, Tailwind CSS, and state management (Zustand).

---

## 🚀 Tech Stack

### Frontend (Client)
- **React 18+**
- **Zustand** for state management
- **Tailwind CSS** for styling
- **Vite** for faster development build

### Backend (Server)
- **Node.js** + **Express.js**
- **MongoDB (Mongoose)** for data persistence
- **JWT** for user authentication
- **Microservices Architecture**
- **Docker Compose** for container orchestration

---

## 📂 Folder Structure

```

familytree360/
├── client/                   # React Frontend (Angular version optional)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/        # API calls
│   │   ├── store/           # Zustand for state management
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js

├── server/                  # Node Backend
│   ├── auth-service/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.ts
│   ├── tree-service/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   └── shared/
│       └── middleware/      # JWT auth, error handling

├── docker-compose.yml
├── .env.example
├── README.md
├── LICENSE
└── .gitignore

````

---

## 🔐 Authentication & Security

- **JWT Middleware** protects private routes.
- Token is stored and validated in each microservice independently.
- Passwords are hashed using **bcrypt**.
- Secrets and credentials are managed via **dotenv** files.

---

## 🧰 Features

- 🔐 Register and login securely with JWT
- 👨‍👩‍👧‍👦 Create family tree structure with images and address
- 📍 Add geolocation tags to members
- 🧠 Zustand state management in frontend
- ⚙️ Backend split into independent **auth** and **tree** microservices
- 💡 Containerized using Docker

---

## 🛠️ Installation

### 1. Clone Repo

```bash
git clone https://github.com/yourusername/familytree360.git
cd familytree360
````

### 2. Setup Environment Variables

Copy `.env.example` and fill in values for:

```env
# Auth Service
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb+srv://your_cluster.mongodb.net/your_db

# (Repeat in each service if needed)
```

### 3. Run Locally (Manual)

```bash
# In /server/auth-service and /tree-service
npm install
npm run dev

# In /client
npm install
npm run dev
```

### 4. Run With Docker

```bash
docker-compose up --build
```

---

## 📦 APIs Overview

### Auth Service

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login and receive JWT

### Tree Service

* `GET /api/tree/:userId` – Get user's family tree
* `POST /api/tree/` – Create/update tree (protected)

> All protected routes require `Authorization: Bearer <JWT_TOKEN>`

---

## 👮 License & Permissions

This repository is **view-only by default**.

If you wish to reuse or fork this code for commercial or educational use, please **contact the owner for license clearance**.

See [`LICENSE`](./LICENSE) for full details.

---

## 🙋‍♂️ Contributing

Contributions are welcome via feature branches and pull requests. Please raise an issue before making large-scale changes.

---

## 👤 Author

**Krishna Chaitanya Kolluri**
Full-stack Developer with 13+ years of experience
🇦🇪 Currently in Dubai | 💻 React,Angular,Vue js, Node.js,Typescript, DevOps

---

## ⭐ Star the Project

If you find this useful or learned something, feel free to ⭐ star the repo and share!



