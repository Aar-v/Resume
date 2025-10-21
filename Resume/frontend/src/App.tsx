import React from "react";
import Card from "./components/Card";

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Education",
      content: "Bachelor of Technology in Computer Science",
    },
    {
      id: 2,
      title: "Projects",
      content: "Spring Boot + React full-stack NEFT transaction app",
    },
    {
      id: 3,
      title: "Certifications",
      content: "AWS Certified Developer, Java SE 11 Programmer",
    },
    {
      id: 4,
      title: "Experience",
      content: "2 years as Full Stack Developer at TechCorp",
    },
    {
      id: 5,
      title: "Tech Stack",
      content: "Java, Spring Boot, React, SQL, Docker",
    },
    {
      id: 6,
      title: "Interests",
      content: "Finance, Cloud, AI, and Product Design",
    },
    { id: 7, title: "Hobbies", content: "Photography, Chess, and Running" },
  ];

  return (
    <div className="container">
      <h1 className="header">My Interactive Resume</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default App;
