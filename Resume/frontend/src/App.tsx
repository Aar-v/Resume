// frontend/src/App.jsx
import React, { useEffect, useState } from "react";
import Card from "./components/Card"; // put your Card.jsx at src/components/Card.jsx

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export default function App() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResume();
  }, []);

  async function fetchResume() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/resume`);
      if (!res.ok) {
        setResume(null);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setResume(data);
    } catch (e) {
      console.error(e);
      setResume(null);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (!resume)
    return (
      <div className="min-h-screen flex items-center justify-center">
        No resume found. Start by creating one via backend.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* Left column */}
        <div className="col-span-8">
          <div className="card mb-4">
            <h1 className="text-2xl font-bold">{resume.name}</h1>
            <p className="text-sm text-gray-600">{resume.title}</p>
            <p className="mt-3 text-gray-700">{resume.summary}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Education">
              {resume.education?.length ? (
                <ul className="list-disc pl-5">
                  {resume.education.map((e) => (
                    <li key={e.id || e.school || Math.random()}>
                      <div className="font-semibold">
                        {e.degree || e.school}
                      </div>
                      <div className="text-sm text-gray-500">
                        {e.school} • {e.year}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>No education entries</div>
              )}
            </Card>

            <Card title="Projects">
              {resume.projects?.length ? (
                <div className="space-y-3">
                  {resume.projects.map((p) => (
                    <div key={p.id || p.title}>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-sm text-gray-600">
                        {p.description || p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>No projects yet</div>
              )}
            </Card>

            <Card title="Experience">
              {resume.experience?.length ? (
                <div className="space-y-3">
                  {resume.experience.map((x) => (
                    <div key={x.id || x.company}>
                      <div className="font-semibold">
                        {x.role} — {x.company}
                      </div>
                      <div className="text-sm text-gray-600">
                        {x.from} — {x.to}
                      </div>
                      <ul className="list-disc pl-5 text-sm text-gray-700 mt-1">
                        {(x.bullets || []).map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div>No experience yet</div>
              )}
            </Card>

            <Card title="Timeline">
              {resume.timeline?.length ? (
                <ol className="ml-4 list-decimal">
                  {resume.timeline.map((t, i) => (
                    <li key={i}>
                      <div className="font-semibold">{t.year}</div>
                      <div className="text-sm text-gray-600">{t.event}</div>
                    </li>
                  ))}
                </ol>
              ) : (
                <div>No timeline entries</div>
              )}
            </Card>
          </div>
        </div>

        {/* Right column */}
        <aside className="col-span-4 space-y-4">
          <Card title="Contact">
            <div>{resume.contact || "contact@you.com"}</div>
            <a
              className="inline-block mt-3 px-3 py-2 bg-yellow-400 rounded font-semibold"
              href={
                resume.pdfUrl
                  ? API_BASE + resume.pdfUrl
                  : API_BASE + "/api/resume.pdf"
              }
              target="_blank"
            >
              Download PDF
            </a>
          </Card>

          <Card title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {(resume.techstack || []).map((t, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded">
                  {t}
                </span>
              ))}
            </div>
          </Card>

          <Card title="Hobbies & Interests">
            <div>
              <strong>Hobbies:</strong> {(resume.hobbies || []).join(", ")}
            </div>
            <div className="mt-2">
              <strong>Interests:</strong> {(resume.interests || []).join(", ")}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
