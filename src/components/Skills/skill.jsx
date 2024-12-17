import React from 'react'
import './skill.css'
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDartLang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiPandas } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { DiLinux } from "react-icons/di";
const skill = () => {
  return (
    <div className='main-skill'>
        <h2>Skills & Education</h2>
        <div className='skill-container'>
             <h4>Technical Skills</h4>
              <ul>
                <li><TiHtml5 className='html'/>HTML</li>
                <li><FaReact className='react'/>React</li>
                <li><FaCss3Alt className='css'/>CSS</li>
                <li><IoLogoJavascript className='js'/>JavaScript</li>
                <li><FaPython className='python'/>Python</li>
                <li><SiGnubash className='bash'/>Bash</li>
                <li><FaDartLang className='dart'/>Dart</li>
                <li><RiTailwindCssFill className='tailwind'/>Tailwind</li>
                <li><DiLinux className='linux'/>Linux</li>
                <li><FaAws className='aws'/>AWS</li>
                <li><PiFigmaLogoFill className='figma'/>Figma</li>
                <li><SiPandas className='pandas'/>Pandas</li>
                <li><FaNode className='node'/>Node.js</li>
              </ul>
        </div>
        <div className='edu-container'>
            <h4>Education</h4>
            <div className='edu-content'>
                <div className='edu'>
                    <FaGraduationCap/>
                    <h4>Bachelor of Science in <br/>Software Engineering</h4>
                    <p>African Leadership University<br/>2022-2025</p>   
                </div>
                <div className='edu'>
                    <PiCertificateFill />
                    <h4>AWS Solutions Architect& <br/> Cloud Practitioner</h4>
                    <p>ALX Camp<br/>2023-2024</p>   
                </div>
                <div className='edu'>
                    <PiCertificateFill />
                    <h4>AWS Machine Learning</h4>
                    <p>Coursera<br/>2023-2024</p>   
                </div>
                <div className='edu'>
                    <PiCertificateFill />
                    <h4>Fullstack-Specialization</h4>
                    <p>Coursera<br/>2022-2023</p>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default skill
