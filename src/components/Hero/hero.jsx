import React, { useState } from "react";
import "./hero.css";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const [showResume, setShowResume] = useState(true);

  const socialMediaLinks = {
    github: "https://github.com/sergekamanzi",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://twitter.com",
  };

  return (
    <div className="main-hero">
      <h6>Hi! My name is</h6>
      <h1>
        KAMANZI SERGE.
        <br />
        I work with startups and brands.
      </h1>
      <p>
        I'm a Software Developer specialized in Machine Learning and Data Science. 
        I'm also an AWS Certified Cloud Practitioner and Solutions Architect.
      </p>
      {showResume && (
        <button className="resume-btn" onClick={() => setShowResume(false)}>
          <IoMdDownload /> Resume
        </button>
      )}
      <div className="social-media">
        <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
          <RiInstagramFill />
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Hero;
