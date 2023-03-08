import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  // console.log(
  //   ">>> check isAuthenticated: ",
  //   isAuthenticated,
  //   ">>> check account: ",
  //   account
  // );
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          You don't want to make a boring form. And your audience won't answer
          one. Create a type form instead—and make everyone happy.
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Get's started. IT's free
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>Doing Quiz Now</button>
          )}
        </div>
      </div>
    </div>
  );
}
