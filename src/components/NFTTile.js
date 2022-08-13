import React from "react";
import "./Homepage/homepage.css";
// import axie from "../tile.jpeg";
//import {Link} from "react-router-dom";

function NFTTile(data) {
  return (
    <div>
      <img src={data.data.image} id={data.data.name} alt="oops check your net connection" />
      
    </div>
  );
}

export default NFTTile;
