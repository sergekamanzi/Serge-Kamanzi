import React from 'react'
import './project.css'  
import { TbWorldCheck } from "react-icons/tb";
import estate from '/estate.png'
import camel from '/cam.png'
import smartbin from '/smart.png'


const project = () => {
  return (
    <div className='main-project'>
      <h1>Projects</h1>
      <div className='project-container'>
           <div className='projects'>
               <img src={estate} alt="" />
               <h5>eSTATE.RW</h5>
               <p>Estate.rw is a responsive web platform
                 designed for users to easily search, buy,
                 and rent houses in Rwanda. It provides a
                 seamless experience with location-based 
                 search functionality.
               </p>
            <div className='project-btn'>
              <p><a href="https://real-estate-nine-inky.vercel.app/" target='_blank'><TbWorldCheck />Live</a></p>
            </div>
           </div>

           <div className='projects'>
               <img src={camel} alt="" />
               <h5>Camel motor group Ltd</h5>
               <p>this is a responsive web platform specializing in sewage 
                and wastewater management solutions. Their services
                include the design, installation, and maintenance
                of sewage systems.
               </p>
               <div className='project-btn'>
               <p><a href="" target='_blank'><TbWorldCheck />Live</a></p>
               </div>
           </div>

           <div className='projects'>
               <img src={smartbin} alt="" />
               <h5>SmartBin</h5>
               <p>Smart Bin is an innovative sewage and waste 
                management platform that uses intelligent technologies
                to optimize waste collection, improve recycling processes,
                and enhance resource management.
               </p>
            <div className='project-btn'>
            <p><a href="https://smart-bin-sigma.vercel.app/" target='_blank'><TbWorldCheck />Live</a></p>
            </div>
           </div>
      </div>
    </div>
  )
}

export default project
