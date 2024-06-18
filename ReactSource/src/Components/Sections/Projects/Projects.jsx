import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import YTProject from "../../../assets/ProjectThumbnails/YTThumbnail.mp4"
import './Projects.css'

const projects = [
  {
    title: '200hr RYT Final Project',
    description: 'A presentation on my opinion of Gatekeeper poses in the Ashtanga primary series. This project was also a way for me to practice with Shader Programming to create a mouse distortion pixel effect on the background.',

    videoSrc: YTProject,
    techStack: ['React', 'Javascript', 'Three JS', 'CSS', 'GLSL', 'Vite'],
    githubLink: 'https://github.com/Raamtaro/YTTFinalProject',
    liveLink: 'https://raamtaroyttfinal.netlify.app/'
  },
]

function Projects() {
  
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects