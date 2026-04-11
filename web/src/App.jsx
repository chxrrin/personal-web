import React, { useState, useRef } from 'react';
import './App.css';
import { Window } from "./components/Window";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectsContent } from "./components/Projects"

const ICONS = [
  { id: "about", label: "About Me", img: "src/img/pooh.png", defaultPos: { top: 40, right: 40 } },
  { id: "projects", label: "Projects", img: "src/img/pooh.png", defaultPos: { top: 20, left: 400 } },
  { id: "experience", label: "Experience", img: "src/img/pooh.png", defaultPos: { top: 80, right: 80 } },
  { id: "contact", label: "Contact", img: "src/img/pooh.png", defaultPos: { top: 140, right: 120 } },
];

function App() {
  const [openWindows, setOpenWindows] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projectsPos, setProjectsPos] = useState({ x: 400, y: 20 });
  const projectsStart = useRef({ x: 400, y: 20 });

  const open = (id) => setOpenWindows(({ [id]: true }));
  const close = (id) => setOpenWindows(prev => ({ ...prev, [id]: false }));

  return (
    <div className="app-shell">
      <Header />

      <div className="desktop">
        {/* Desktop icons */}
        <div className="icon-grid">
          {ICONS.map((icon) => (
            <div key={icon.id} className="desktop-icon" onClick={() => open(icon.id)}>
              <img src={icon.img} alt={icon.label} className="icon-img" />
              <span>{icon.label}</span>
            </div>
          ))}
        </div>

        {/* Windows */}
        {openWindows.about && (<Window onClose={() => close("about")} defaultPos={ICONS[0].defaultPos} title="About Me">
          <h2>Yeru (Cherry) Lee</h2>
          <p>Game Developer | Front-End Engineer | Game User Researcher</p>
          <p>I'm passionate about creating interactive experiences. Let's create new worlds together!</p>
        </Window>)}

        {openWindows.projects && (
          <Window
            onClose={() => close("projects")}
            defaultPos={ICONS[1].defaultPos}
            title="Projects"
            width={700}
            onMount={(x, y) => {
              projectsStart.current = { x, y };
              setProjectsPos({ x, y });
            }}
            onDrag={(x, y) => setProjectsPos({
              x: projectsStart.current.x + x,
              y: projectsStart.current.y + y
            })}
          >
            <ProjectsContent onHover={setHoveredProject} />
          </Window>
        )}

        {hoveredProject && openWindows.projects && (
          <img
            src={hoveredProject.poster}
            alt={hoveredProject.name}
            className="floating-poster"
            style={{
              position: "absolute",
              top: projectsPos.y + 100,
              left: projectsPos.x - 240,
              width: 220,
              height: 160,
              objectFit: "cover",
              borderRadius: 8,
              pointerEvents: "none",
            }}
          />
        )}

        {openWindows.experience && (
          <Window onClose={() => close("experience")} defaultPos={ICONS[2].defaultPos} title="Experience" width={700}
            height={400}>
            <div className="project-list">
              <div className="project-item">
                <h3>Game User Researcher Intern</h3>
                <p className="project-role">Company Name · Year</p>
                <p>Brief description of what you did — playtests you ran, reports you wrote, teams you worked with, impact you had.</p>
                <p className="project-tools">Tools you used</p>
              </div>

              <div className="project-item">
                <h3>Usability Lead</h3>
                <p>Identified 58+ usability issues that were resolved before ship through playtesting and research.</p>
              </div>

              <div className="project-item">
                <h3>UI Engineer</h3>
                <p>Implemented UI features, animations, HUDs and menus in Unreal Engine 5.</p>
              </div>

              <div className="project-item">
                <h3>Front-End Developer</h3>
                <p>Designed and built interactive web features with a focus on user-friendly experiences.</p>
              </div>
            </div>
          </Window>
        )}

        {openWindows.contact && (
          <Window onClose={() => close("contact")} defaultPos={ICONS[3].defaultPos} title="Contact Me!">
            <p>Let's create new worlds together!</p>
            <p>Email: yerulee@usc.edu</p>
            <p>Discord: chxrrycakie</p>
            <p>Tel: <a href="tel:+6615250979">(661) 525-0979</a></p>
          </Window>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;