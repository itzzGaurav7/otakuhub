import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/hero2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/login');
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img className="pic" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="pic" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">🌟🌟🌟</p>
        <h1 className="primary-heading">
         Connect with Fellow Otaku
        </h1>
        <p className="primary-text">
        Join our thriving community of anime and manga lovers from around the globe. Discuss your favorite series, share fan art, and engage in spirited debates. At OtakuHub, you'll never feel alone in your passion
.
        </p>
       
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleClick}> Sign Up</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
