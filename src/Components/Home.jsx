import React, { useState, useEffect } from "react";
import "./css/Home.css";
// import Header from "./Header";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Home = () => {
  const [data, setData] = useState([]);
  const songdetails = (e) => {
    localStorage.removeItem("song");
    if (localStorage.getItem("song") === null) {
      console.log(e, "from sender");
      localStorage.setItem("song", JSON.stringify(e));
    }
  };

  useEffect(() => {
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to="../">
        <BiArrowBack className="backbutton" />
      </Link>
      <div className="Home">
        {data.map((e) => (
          <div className="songbox" key={e.song}>
            <img src={e.cover_image} alt={e.song} />
            <p className="songname">{e.song}</p>
            <p className="artistname">{e.artists}</p>
            <Link to="../player">
              <BsPlayFill className="playbtn" onClick={() => songdetails(e)} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
