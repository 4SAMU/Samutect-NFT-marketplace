import React from 'react'
import { BsCollection } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiGasStationFill } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import '../Homepage/homepage.css'

const Navbar = () => {
  return (
    <div className="">
    <div className="dashboard">
          <div className="logoDB">NFT marketplace</div>
        </div>
        <div className="myCollection">
          <BsCollection className="icon" />
          <div className="myCollection_text">My collection</div>
        </div>
        <div className="sendTransaction">
          <AiOutlineTransaction className="icon" />
          <div className="myCollection_text">send Transaction</div>
        </div>
        <div className="TopUpBal">
          <RiGasStationFill className="icon" />
          <div className="myCollection_text">
            <a href="https://goerlifaucet.com/">Top up wallet</a>
          </div>
        </div>
        <div className="Resources">
          <GiBookshelf className="icon" />
          <div className="myCollection_text">Resources</div>
        </div>
    </div>
    
  )
}

export default Navbar