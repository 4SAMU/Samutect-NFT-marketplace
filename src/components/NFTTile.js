import React from "react";

import "./Homepage/homepage.css";

function NFTTile(data) {
  const newTo = ()=>{
    window.location.replace("/Nft_page/"+data.data.tokenId)
}
  return (
    
    <div onClick={newTo} >
      <img src={data.data.image} alt={data.data.name} className="nft"  onClick={null}/> 
      <div className='text-on-image'>
      <h3> {data.data.name}</h3>
      <h3> {data.data.price} ETH</h3>      
   </div>    
    </div>
    
    
  );
}

export default NFTTile;
