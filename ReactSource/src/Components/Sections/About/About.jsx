import React from 'react'
import './About.css'


function About() {
  return (
    
      <section className='about'>
        <div className="profilePicture">
          <img src="#" alt="Raam's Profile Picture" loading="lazy" />
        </div>
        <div className="aboutMe">
          <h2>About Me</h2>
          <div className="aboutText">
            Hi there! I'm a passionate Web Developer with a background in Aerospace Engineering and a degree from the University of Illinois at Urbana-Champaign. I thrive on continuous learning and am currently enhancing my skills through The Odin Project's <a href="https://www.theodinproject.com/paths/full-stack-javascript" target="_blank" rel="noopener noreferrer"> full stack JavaScript course</a>. My approach to learning is hands-on, and I enjoy bringing ideas to life through code. I’m eager to leverage my technical skills and creativity to help you create visually stunning and highly performant web applications. <br /> <br /> Beyond coding, you'll often find me in the yoga studio, either teaching or practicing. I also offer private instruction in the Ashtanga Primary Series if you're interested!
          </div>
        </div>
      </section>
    
  )
}

export default About