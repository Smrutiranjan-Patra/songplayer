import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./css/player.css";

function Player() {
  const [data, setData] = useState({});
  useEffect(() => {
    const d = localStorage.getItem("song");
    setData(JSON.parse(d));
  }, []);
  console.log(data);

  return (
    <div className="playerpage">
      <div className="player">
        <img src={data.cover_image} alt="" />
        <p className="playingsongname">{data.song}</p>
        <AudioPlayer
          autoPlay
          src={data.url}
          onPlay={(e) => console.log("onPlay")}
        />
      </div>
      <Link to="../home">
        <BiArrowBack className="backbutton" />
      </Link>
    </div>
  );
}

export default Player;
