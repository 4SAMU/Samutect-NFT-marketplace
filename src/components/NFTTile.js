import React from "react";
import "./Homepage/homepage.css";
// import axie from "../tile.jpeg";
//import {Link} from "react-router-dom";

function NFTTile(data) {

  return (
    <div >
      <img src={data.data.image} alt={data.data.name} className="nft"  onClick={null}/> 
      <div class='text-on-image'>
      <h3> {data.data.name}</h3>
      <h3> {data.data.price} ETH</h3>      
   </div>    
    </div>
  );
}

export default NFTTile;
