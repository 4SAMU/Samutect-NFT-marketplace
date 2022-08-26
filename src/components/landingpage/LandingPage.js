import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./landingpage.css";
import SpiralImage from "./spiralImage.png";

export const LandingPage = () => {
  const [walletAdd, setWalletAdd] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const connectWebsite = async () => {
    try {
      const { ethereum } = window.ethereum;
      if (ethereum) {
        alert("please install metamask");
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      setWalletAdd(
        String(address).substring(0, 5) + "..." + String(address).substring(38)
      );
      console.log(address);
    } catch (error) {
      return {
        status: error,
      };
    }
  };
  connectWebsite();

  // const WindowReload = ()=>{
  //   window.location.replace("/#Home");
  // }

  const isconnectedToWallet = async () => {
    if (!walletAdd) {
      setErrMessage(
        "🦊 To explore!!  Connect to Metamask using the top right button."
      );
    }
  };

  return (
      <div className="App">
        <div className="logo">
          <div className="textdetails">
            <p>Discover,</p>
            <p className="textcollectNFts">Collect & Sell</p>
          </div>
          <div className="digitalarts">Digital arts</div>
          <div className="tetxNFTS">
            <p>
              Digital marketplace for crypto collectibles and non-fungible
              tokens NFTS
            </p>
          </div>

          {walletAdd ? (
           <a href="Home">
              <button className="exploreBtn"> Explore</button>
           </a>
          ) : (
            <button className="exploreBtn" onClick={isconnectedToWallet}>
              Explore
            </button>
          )}

          {!walletAdd ? <button className="alertBOX">{errMessage}</button> : ""}
        </div>
        {walletAdd ? (
          <button className="connectwalletBtn" onClick={connectWebsite}>
            Connected:{walletAdd}
          </button>
        ) : (
          <button className="connectwalletBtn" onClick={connectWebsite}>
            Connect Wallet
          </button>
        )}
      
        <div className="spiralImage">
          <img src={SpiralImage} alt="spiral"></img>
        </div>
      </div>
  
  );
};

export default LandingPage;
