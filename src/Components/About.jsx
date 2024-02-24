import React from 'react';
import AboutBackground from "../../src/Assets/bannerbackground.png";
import AboutBackgroundImage from "../../src/Assets/aboutimage.png";
import {BsFillPlayCircleFill} from "react-icons/bs";
import '../styles/About.css'


const About = () => {
  return (
    <div className="about-section-container" >
       <div className="about-section-image-container" >
        <img src={AboutBackgroundImage} alt="" />
        </div>
        <div class Name="about-section-text-container" >
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
            Our Story: Empowering Academic Collaboration
            </h1>
            <p className="primary-text">
                We believe in the power of collaboration to
                enhancing learning experinences.
            </p>
            <p className="primary-text">
                Whether you're tackling a challenging assignment 
                or preparing for exams, allyfind can find thier 
                perfect study partners and embark a journey of
                mutual support and growth.
            </p>
           
            
        </div>
    </div>
  )
}

export default About;
