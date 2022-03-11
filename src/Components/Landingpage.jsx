import React from "react";
import "./css/landingpage.css";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="landingpage">
      <h1>Welcome To SongMarket</h1>
      <Link to="../home">
        <button className="glow-on-hover" type="button">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Landingpage;
