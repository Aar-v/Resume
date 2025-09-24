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
