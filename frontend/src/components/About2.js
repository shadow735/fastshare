import React from "react";
import AboutBackground from "../Assets/about-background.png";
import p2p from "../Assets/ppp.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading">Torrent Feature</h1>
        <p className="primary-text">
          Use torrent technology to share large files more efficiently. Download files from multiple peers at once, speeding up the transfer process.
        </p>
        <p className="primary-text">
          It’s a decentralized approach that makes large data sharing quicker and more reliable.
        </p>
        <div className="about-buttons-container">
          <a 
            href="https://torrent.fastsharetorrent.me/" 
            className="secondary-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          {/* 
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
          */}
        </div>
      </div>

      <div className="about-section-image-container">
        <img src={p2p} alt="" />
      </div>

      <div className="about-background-image-container" style={{ position: "relative" }}>
        <img src={AboutBackground} alt="" style={{ position: "absolute", right: "0", maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  );
};

export default About;
