// frontend/src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind / global styles (set up tailwind separately)

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);
