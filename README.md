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

project-root/<br>
│<br>
├── backend/ # Spring Boot backend<br>
│ ├── src/main/java/com/resumeapp/<br>
│ │ ├── controller/ # REST controllers<br>
│ │ ├── model/ # Data models<br>
│ │ ├── repository/ # DB repositories<br>
│ │ ├── service/ # Business logic<br>
│ │ └── ResumeAppApplication.java<br>
│ └── src/main/resources/<br>
│ ├── application.properties<br>
│ └── static/resume.pdf # downloadable PDF<br>
│<br>
├── frontend/ # React + Vite + Tailwind frontend<br>
│ ├── index.html # App shell<br>
│ ├── src/<br>
│ │ ├── App.jsx<br>
│ │ ├── main.jsx<br>
│ │ ├── components/ # Header, Card, Timeline, etc.<br>
│ │ └── services/api.js # API integration<br>
│ └── tailwind.config.js<br>
│<br>
├── docker-compose.yml # Run frontend + backend together<br>
├── README.md # Project documentation<br>
└── LICENSE # (optional) License file<br>

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
