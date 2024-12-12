import React from "react";
import "./hero.css";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
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
      <button className="resume-btn">
         <IoMdDownload /> Resume
      </button>
      <div className="social-media">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Hero;
