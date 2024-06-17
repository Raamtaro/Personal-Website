import React, {useRef, useEffect} from 'react'
import './Skills.css'

/**
 * FrontEnd Icons
 */
import htmlIcon from '../../../assets/SkillCardIcons/FrontEnd/HTML5.svg'
import cssIcon from '../../../assets/SkillCardIcons/FrontEnd/CSS3.svg'
import jsIcon from '../../../assets/SkillCardIcons/FrontEnd/JavaScript.svg'
import reactIcon from '../../../assets/SkillCardIcons/FrontEnd/React.svg'
import threeIcon from '../../../assets/SkillCardIcons/FrontEnd/Three.js.svg'
import openGLIcon from '../../../assets/SkillCardIcons/FrontEnd/OpenGL.svg'
import GSAPIcon from '../../../assets/SkillCardIcons/FrontEnd/greensock.svg'

/**
 * BackEnd Icons
 */
import nodeIcon from '../../../assets/SkillCardIcons/BackEnd/Node.js.svg'
import expressIcon from '../../../assets/SkillCardIcons/BackEnd/Express.svg'
import mongoDBIcon from '../../../assets/SkillCardIcons/BackEnd/MongoDB.svg'
import pythonIcon from '../../../assets/SkillCardIcons/BackEnd/Python.svg'
import flaskIcon from '../../../assets/SkillCardIcons/BackEnd/Flask.svg'

/**
 * Misc Icons
 */
import gitIcon from '../../../assets/SkillCardIcons/Other/Git.svg'
import gitHubIcon from '../../../assets/SkillCardIcons/Other/GitHub.svg'
import webpackIcon from '../../../assets/SkillCardIcons/Other/Webpack.svg'
import viteIcon from '../../../assets/SkillCardIcons/Other/Vite.js.svg'
import vsIcon from '../../../assets/SkillCardIcons/Other/VScode.svg'
import linuxIcon from '../../../assets/SkillCardIcons/Other/Linux.svg'
import matlabIcon from '../../../assets/SkillCardIcons/Other/MATLAB.svg'

const Skills = () => {
  return (
    <section className="skills">
      <div className="mySkills">
        <h2>Tools & Tech</h2>
      </div>
      <div className="skillCards">
        <div className="FrontEnd panel">
          <div className="title">
              Front End
          </div>
          <div className="card"> 
            <div className="row One">
              <div className="skillItem">
                <img src={htmlIcon} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="skillItem">
                <img src={cssIcon} alt="CSS" />
                <p>CSS</p>
              </div>
            </div>
            <div className="row Two">
              <div className="skillItem">
                <img src={jsIcon} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="skillItem">
                <img src={reactIcon} alt="React JS" />
                <p>React JS</p>
              </div>
              <div className="skillItem">
                <img src={threeIcon} alt="THREE JS" />
                <p>Three JS</p>
              </div>
            </div>
            <div className="row Three">
              <div className="skillItem">
                <img src={GSAPIcon} alt="GSAP" />
                <p>GSAP</p>
              </div>
              <div className="skillItem">
                <img src={openGLIcon} alt="WebGL" />
                <p>GLSL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="BackEnd panel">
          <div className="title">
              Back End
          </div>
          <div className="card">
            <div className="row One">
              <div className="skillItem">
                <img src={nodeIcon} alt="Node JS" />
                <p>Node JS</p>
              </div>
              <div className="skillItem">
                <img src={expressIcon} alt="Express" />
                <p>Express</p>
              </div>
            </div>
            <div className="row Two">
              <div className="skillItem">
                <img src={mongoDBIcon} alt="MongoDB" />
                <p>MongoDB</p>
              </div>
            </div>
            <div className="row Three">
              <div className="skillItem">
                <img src={pythonIcon} alt="Python" />
                <p>Python</p>
              </div>
              <div className="skillItem">
                <img src={flaskIcon} alt="Flask" />
                <p>Flask</p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="title">
              Misc Tools
          </div>
          <div className="card">
            <div className="row One">
              <div className="skillItem">
                <img src={webpackIcon} alt="Webpack" />
                <p>Webpack</p>
              </div>
              <div className="skillItem">
                <img src={viteIcon} alt="Vite" />
                <p>Vite JS</p>
              </div>
            </div>
            <div className="row Two">
              <div className="skillItem">
                <img src={vsIcon} alt="Visual Studio Code" />
                <p>VS Code</p>
              </div>
              <div className="skillItem">
                <img src={gitIcon} alt="Git" />
                <p>Git</p>
              </div>
              <div className="skillItem">
                <img src={gitHubIcon} alt="GitHub" />
                <p>GitHub</p>
              </div>
            </div>
            <div className="row Three">
              <div className="skillItem">
                <img src={linuxIcon} alt="Linux" />
                <p>Linux</p>
              </div>
              <div className="skillItem">
                <img src={matlabIcon} alt="MatLab" />
                <p>MatLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills