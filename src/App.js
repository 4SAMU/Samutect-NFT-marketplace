import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import LandingPage from "./components/landingpage/LandingPage";
import ListNft from "./components/listNft/listNft";


const App=()=> {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/Home/" element={<HomePage />}/> 
      <Route path="/Nft_page/:tokenId" element={<NFTPage />}/>        
      <Route path="/ListNFT/" element={<ListNft />}/> 
    </Routes>
  </BrowserRouter>
    );
  };

export default App