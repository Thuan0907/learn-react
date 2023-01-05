import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";

export default function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} />
      </video>
    </div>
  );
}
