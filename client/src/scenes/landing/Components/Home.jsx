import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/heropage.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/register");
  }
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img className="pic" src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Explore the World of Anime and Manga Like Never Before... 
          </h1>
          <p className="primary-text">
          Register  now  and  join  the  OtakuHub  community!
           </p>
          <button onClick={handleClick} className="secondary-button">
            Register Now<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="pic" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
