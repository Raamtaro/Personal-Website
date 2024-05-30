import React, {useState, useEffect} from 'react'
import './NavStyling/SectionNav.css'

const SectionNav = () => {

  return (
    <nav className="nav">
      <ul>
        <li>
        <span>About</span>
        </li>
        <li>
        <span>Skills</span>
        </li>
        <li>
        <span >Projects</span>
        </li>
        <li>
        <span >Experience</span>
        </li>
        <li>
        <span >Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default SectionNav