import { useState } from "react";

const PROJECTS = [
    { id: "stitchlings", name: "Stitchlings", role: "Usability Lead", description: "Coop Action Survival Game.", tools: "Unity · Perfetto", poster: "src/img/pooh.png", link: "https://yourlink.com" },
    { id: "alibi", name: "Alibi", role: "Usability Lead", description: "Narrative 2D puzzle adventure game.", tools: "Unity · Google Surveys", poster: "/posters/alibi.png", link: "https://yourlink.com" },
    { id: "wok", name: "Wok This Way!", role: "UI Engineer", description: "3D food-themed 4v4 TPS party game.", tools: "Unreal Engine 5 · Figma", poster: "/posters/wok.png", link: "https://yourlink.com" },
    { id: "tbay", name: "TBAY", role: "Front-End Developer", description: "Ticket-selling platform for students.", tools: "Java · HTML · CSS", poster: "/posters/tbay.png", link: "https://yourlink.com" },
    { id: "wispful", name: "The Wispful Lure", role: "Engineer & Designer", description: "Tense mystery horror puzzle game.", tools: "Unreal Engine 5", poster: "/posters/wispful.png", link: "https://yourlink.com" },
    { id: "2d3d", name: "2D & 3D Recreations", role: "Engineer", description: "Pong, Mario, Pac-Man, Portal and more.", tools: "C++", poster: "/posters/games.png", link: "https://yourlink.com" },
];

export function ProjectsContent({ onHover }) {
    return (
      <div className="project-list">
        {PROJECTS.map(project => (
          <div
            key={project.id}
            className="project-item"
            onMouseEnter={() => onHover(project)}
            onMouseLeave={() => onHover(null)}
          >
            <h3><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3>
            <p className="project-role">{project.role}</p>
            <p>{project.description}</p>
            <p className="project-tools">{project.tools}</p>
          </div>
        ))}
      </div>
    );
  }