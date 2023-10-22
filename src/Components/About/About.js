import React from 'react';
import './About.css';
import resume from '../../assets/ASHMIT_RESUME.pdf';

function About() {
  return (
    <section id='about'>
      <div className="aboutTitle">About Me</div>
      
      <img src="./head.svg" alt="" className="aboutImg" />
      <div className="aboutContent">
        <div className="aboutTitleExp">
            <div className="aboutDesc">A passionate and driven Computer Science Engineering student at Vellore Institute of Technology-AP and an aspiring Front-End Developer. 
                                       Passionate about crafting pixel-perfect, user-friendly web experiences.
            </div>
                <div className="experience">
                <div className="one">
                    <h2 className="title">03+</h2>
                    <p className="text">Months Experience</p>
                </div>
                <div className="two">
                    <h2 className="title">02+</h2>
                    <p className="text">Internships Complete</p>
                </div>
                <div className="three">
                    <h2 className="title">05+</h2>
                    <p className="text">Projects Completed</p>
                </div>
                </div>
            </div>
      </div>
      <a
        href={resume} // Replace with the actual path to your PDF file
        download // Specifies the filename when downloaded
      >
        <button className="cvBtn">
          Download CV
          <img src="./download.svg" alt="Download Icon" />
        </button>
      </a>

    </section>
  );
}

export default About;
