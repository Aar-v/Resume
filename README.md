# 📄 Full Stack Resume App

An **interactive, full-stack, modular resume application**
It allows you to showcase your **education, projects, certifications, experience, hobbies, tech stack, interests, and career timeline** with interactive cards.  
You can also upload and serve a **downloadable PDF version** of your resume.

---

## 🚀 Features

- 📑 Interactive sections: Education, Projects, Certifications, Experience, Timeline, Tech Stack, Hobbies, and Interests
- 📥 **Download Resume PDF** directly from the app
- ⚡ **React (Vite)** frontend with modular components
- 🖥️ **Spring Boot** backend serving JSON + static resume PDF
- 💾 **SQLite** (or in-memory DB) for persistence
- 🐳 Docker support for one-command deployment

---

## 🛠️ Tech Stack

### Frontend

- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Modular components (`Header`, `Card`, `Timeline`, etc.)
- API integration with backend

### Backend

- [Spring Boot](https://spring.io/projects/spring-boot)
- RESTful API endpoints:
  - `GET /api/resume` → return resume JSON
  - `PUT /api/section/{key}` → update section (education, projects, etc.)
  - `GET /api/resume.pdf` → download the resume PDF
- Database: [SQLite](https://www.sqlite.org/) (or simple in-memory DB)

### Deployment

## 📂 Project Structure

project-root/
│
├── backend/ # Spring Boot backend
│ ├── src/main/java/com/resumeapp/
│ │ ├── controller/ # REST controllers
│ │ ├── model/ # Data models
│ │ ├── repository/ # DB repositories
│ │ ├── service/ # Business logic
│ │ └── ResumeAppApplication.java
│ └── src/main/resources/
│ ├── application.properties
│ └── static/resume.pdf # downloadable PDF
│
├── frontend/ # React + Vite + Tailwind frontend
│ ├── index.html # App shell
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── components/ # Header, Card, Timeline, etc.
│ │ └── services/api.js # API integration
│ └── tailwind.config.js
│
├── docker-compose.yml # Run frontend + backend together
├── README.md # Project documentation
└── LICENSE # (optional) License file

---

## ⚙️ Local Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Aar-v/Resume
cd fullstack-resume-app
cd backend
./mvnw spring-boot:run
curl http://localhost:8080/api/resume
curl http://localhost:8080/api/resume.pdf --output resume.pdf
cd ../frontend
npm install
npm run dev
VITE_API_BASE=http://localhost:8080
docker-compose up --build
docker-compose up --build


---

⚡ I kept it **developer-friendly** (setup steps, endpoints, Docker usage, deployment options).

```
