import React, {useRef, useEffect} from 'react'

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import './ProjectCard.css'



const ProjectCard = ({title, description, videoSrc, techStack, githubLink, liveLink}) => {

    const videoRef = useRef(null)


    return (
        <div className="projectCard">
            <div className="video-wrapper">
                <video ref={videoRef} src={videoSrc} muted loop autoPlay className='project-video'></video>
            </div>
            <div className="project-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-stack">
                    {techStack.map((tech)=>(
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>
                <div className="links">
                    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>

        </div>
    )
}

export default ProjectCard